"use client";

import { useEffect, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import Button from "@/components/ui/Button";
import PageIllustration from "@/components/ui/PageIllustration";
import { EvidenceFile } from "@/types/case";
import { estimatePayloadBytes } from "@/lib/payload-size";
import PayloadWarningBanner from "@/components/ui/PayloadWarningBanner";
import { PAYMENT_GATE_ENABLED, PAYMENT_CONFIG } from "@/lib/payment-config";
import { trackEvent } from "@/lib/analytics";

type FileDiag = { name: string; type: string; sizeKb: string; hasData: boolean; dataChars: number };

type ExportState = {
  diag: FileDiag[] | null;
  payloadBytes: number;
  hasCaseData: boolean;
};

function readExportState(): ExportState {
  try {
    const stored = sessionStorage.getItem("caseData");
    if (!stored) return { diag: null, payloadBytes: 0, hasCaseData: false };
    const caseData = JSON.parse(stored);
    const files: EvidenceFile[] = caseData.evidenceFiles ?? [];
    return {
      diag: files.map((f) => ({
        name: f.name,
        type: f.type,
        sizeKb: (f.size / 1024).toFixed(1),
        hasData: !!(f.data && f.data.length > 0),
        dataChars: f.data?.length ?? 0,
      })),
      payloadBytes: estimatePayloadBytes(caseData),
      hasCaseData: true,
    };
  } catch {
    return { diag: null, payloadBytes: 0, hasCaseData: false };
  }
}

const PAID_KEY = "gbp_paid";
const NO_CASE_DATA_HEADING = "No case data found";

export default function ExportPage() {
  return (
    <Suspense>
      <ExportContent />
    </Suspense>
  );
}

function ExportContent() {
  const [loading, setLoading] = useState(false);
  const [downloaded, setDownloaded] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [diag, setDiag] = useState<FileDiag[] | null>(null);
  const [payloadBytes, setPayloadBytes] = useState(0);
  // null = SSR / not yet readable, false = missing, true = found.
  // Initialized synchronously on the client via a lazy initializer so the
  // correct value is present from the very first render — before any effect runs.
  const [caseDataFound, setCaseDataFound] = useState<boolean | null>(() => {
    if (typeof window === "undefined") return null;
    return readExportState().hasCaseData;
  });
  const [paid, setPaid] = useState(!PAYMENT_GATE_ENABLED);
  const [paymentJustCompleted, setPaymentJustCompleted] = useState(false);
  const [paymentLoading, setPaymentLoading] = useState(false);
  const [verifying, setVerifying] = useState(false);
  const [paymentCanceled, setPaymentCanceled] = useState(false);

  const searchParams = useSearchParams();

  // Capture URL param values so they can be safely listed as effect dependencies
  const paymentSuccess = searchParams.get("payment_success");
  const sessionId = searchParams.get("session_id");
  const paymentCanceledParam = searchParams.get("payment_canceled");

  // Read export state (diagnostics and payload size) once on mount (sessionStorage is only available client-side)
  useEffect(() => {
    const state = readExportState();
    setDiag(state.diag);
    setPayloadBytes(state.payloadBytes);
    setCaseDataFound(state.hasCaseData);
  }, []);

  // Payment gate: verify Stripe session or check sessionStorage on mount
  useEffect(() => {
    if (!PAYMENT_GATE_ENABLED) return;

    // Returning from a canceled Stripe Checkout
    if (paymentCanceledParam === "1") {
      setPaymentCanceled(true);
      window.history.replaceState(null, "", "/export");
      return;
    }

    // Already unlocked in this browser session
    if (sessionStorage.getItem(PAID_KEY) === "true") {
      setPaid(true);
      return;
    }

    // Returning from a Stripe Checkout success redirect
    if (paymentSuccess === "1" && sessionId) {
      setVerifying(true);
      fetch(`/api/verify-payment?session_id=${encodeURIComponent(sessionId)}`)
        .then((r) => r.json())
        .then((data: { paid: boolean }) => {
          if (data.paid) {
            sessionStorage.setItem(PAID_KEY, "true");
            setPaid(true);
            trackEvent("payment_success", { currency: "USD", payment_amount: 4.99 });
            setPaymentJustCompleted(true);
          } else {
            setError("Payment could not be verified. Please contact support if you were charged.");
          }
        })
        .catch(() => {
          setError("Could not verify payment. Please refresh the page to try again.");
        })
        .finally(() => {
          setVerifying(false);
          // Clean the query params from the URL bar without triggering a React
          // navigation. Using window.history.replaceState (instead of
          // router.replace) avoids a Next.js router event that would update
          // useSearchParams, re-run this effect, and potentially remount the
          // Suspense-wrapped component — which was the root cause of the
          // "No case data found" flash on successful payment returns.
          window.history.replaceState(null, "", "/export");
        });
    }
  }, [paymentSuccess, sessionId, paymentCanceledParam]);

  async function handlePay() {
    setPaymentLoading(true);
    setError(null);
    trackEvent("checkout_started", { currency: "USD", payment_amount: 4.99 });
    try {
      const res = await fetch("/api/create-checkout-session", { method: "POST" });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data: { url: string } = await res.json();
      window.location.href = data.url;
    } catch (err) {
      console.error("[Export] checkout error:", err);
      setError("Could not start checkout. Please try again.");
      setPaymentLoading(false);
    }
  }

  async function handleExport() {
    setLoading(true);
    setError(null);
    setDownloaded(false);
    try {
      const stored = sessionStorage.getItem("caseData");
      if (!stored) {
        setError("No case data found. Please complete the builder first.");
        return;
      }

      // The caseData already contains base64-encoded file content in each
      // evidenceFiles[i].data field (written by FileUpload at selection time).
      // Send it as a plain JSON body — no multipart needed.
      const res = await fetch("/api/export-pdf", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: stored,
      });

      if (!res.ok) {
        const text = await res.text().catch(() => "");
        console.error(`[Export] API returned ${res.status}: ${text}`);
        setError(`Export failed (${res.status}). Please try again, or try reducing the total size of uploaded files.`);
        return;
      }

      const blob = await res.blob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      // Use business name from case data for a more identifiable filename
      try {
        const caseData = JSON.parse(stored);
        const businessName = caseData.businessName as string | undefined;
        const slug = businessName
          ? businessName.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "").slice(0, 40)
          : "";
        a.download = slug ? `${slug}-gbp-appeal-pack.pdf` : `gbp-appeal-pack-${Date.now()}.pdf`;
      } catch {
        a.download = "gbp-appeal-pack.pdf";
      }
      a.click();
      URL.revokeObjectURL(url);
      trackEvent("pdf_downloaded", { page_location: "/export" });
      setDownloaded(true);
    } catch (err) {
      console.error("[Export] unexpected error:", err);
      setError("An unexpected error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex flex-col gap-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-slate-900">Export your appeal pack</h1>
        <p className="mt-1 text-sm text-slate-500">
          Download your case as a structured PDF ready to include with your GBP appeal.
        </p>
      </div>

      <PayloadWarningBanner payloadBytes={payloadBytes} />

      {/* Canceled notice — shown after returning from a canceled Stripe Checkout */}
      {PAYMENT_GATE_ENABLED && !paid && paymentCanceled && (
        <div className="flex items-start gap-2.5 rounded-lg border border-slate-200 bg-slate-50 px-3.5 py-3 text-sm text-slate-600">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true" className="mt-0.5 shrink-0">
            <circle cx="7" cy="7" r="5.5" stroke="currentColor" strokeWidth="1.2" />
            <path d="M7 4.5v3M7 9h.01" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
          </svg>
          Checkout was canceled. You can try again whenever you&apos;re ready.
        </div>
      )}

      {/* Payment gate */}
      {PAYMENT_GATE_ENABLED && !paid && (
        <div className="flex flex-col gap-4 rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          {verifying ? (
            <div className="flex items-center gap-3 text-sm text-slate-600">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true" className="animate-spin shrink-0">
                <circle cx="8" cy="8" r="6.5" stroke="currentColor" strokeWidth="1.5" opacity="0.3" />
                <path d="M8 1.5A6.5 6.5 0 0114.5 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
              Verifying payment…
            </div>
          ) : caseDataFound === false ? (
            /* No case data — block checkout and send user to the builder */
            <div className="flex flex-col items-center gap-4 py-2 text-center">
              <svg width="36" height="36" viewBox="0 0 36 36" fill="none" aria-hidden="true" className="text-slate-300">
                <rect x="7" y="5" width="22" height="26" rx="3" stroke="currentColor" strokeWidth="1.4" />
                <path d="M12 13h12M12 18h8M12 23h5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
              </svg>
              <div className="flex flex-col gap-1">
                <p className="text-sm font-semibold text-slate-900">{NO_CASE_DATA_HEADING}</p>
                <p className="text-sm text-slate-500 max-w-xs leading-relaxed">
                  Please complete the builder before checking out — your case data is stored in this browser session.
                </p>
              </div>
              <Link
                href="/builder"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-emerald-600 hover:text-emerald-700"
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Go to the builder
              </Link>
            </div>
          ) : (
            <>
              <div>
                <h2 className="text-sm font-semibold text-slate-900">
                  Your appeal pack is ready.
                </h2>
                <p className="mt-1 text-sm text-slate-500 leading-relaxed">
                  Complete a one-time payment of {PAYMENT_CONFIG.priceDisplay} to unlock the final download.
                </p>
              </div>
              <ul className="flex flex-col gap-1.5">
                {[
                  "Structured PDF organised for a GBP appeal",
                  "Appeal timeline auto-generated",
                  "All your uploaded supporting files included",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-slate-600">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true" className="shrink-0 text-emerald-500">
                      <path d="M2.5 7l3.5 3.5 5.5-7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="flex items-center gap-4">
                <Button onClick={handlePay} disabled={paymentLoading} className="gap-2">
                  {paymentLoading ? (
                    <>
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true" className="animate-spin">
                        <circle cx="7" cy="7" r="5.5" stroke="currentColor" strokeWidth="1.5" opacity="0.3" />
                        <path d="M7 1.5A5.5 5.5 0 0112.5 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                      </svg>
                      Redirecting to checkout…
                    </>
                  ) : (
                    <>
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                        <rect x="1" y="3.5" width="12" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.4" />
                        <path d="M1 6.5h12" stroke="currentColor" strokeWidth="1.4" />
                      </svg>
                      Unlock download — {PAYMENT_CONFIG.priceDisplay}
                    </>
                  )}
                </Button>
                <span className="text-xs text-slate-400">Secure checkout via Stripe</span>
              </div>
            </>
          )}
          {error && (
            <div className="flex items-start gap-2.5 rounded-lg border border-red-200 bg-red-50 px-3.5 py-3 text-sm text-red-700">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true" className="mt-0.5 shrink-0">
                <circle cx="7" cy="7" r="5.5" stroke="currentColor" strokeWidth="1.2" />
                <path d="M7 4.5v3M7 9h.01" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
              </svg>
              {error}
            </div>
          )}
        </div>
      )}

      {/* Main export card — shown when gate is off or payment verified */}
      {(!PAYMENT_GATE_ENABLED || paid) && (
        <>
        {caseDataFound === false ? (
          <div className="flex flex-col items-center gap-5 rounded-xl border border-slate-200 bg-white p-8 text-center shadow-sm">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true" className="text-slate-300">
              <rect x="8" y="6" width="24" height="28" rx="3" stroke="currentColor" strokeWidth="1.5" />
              <path d="M14 14h12M14 19h8M14 24h5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
            <div className="flex flex-col gap-1.5">
              <p className="text-sm font-semibold text-slate-900">{NO_CASE_DATA_HEADING}</p>
              {PAYMENT_GATE_ENABLED && paid ? (
                <p className="text-sm text-slate-500 max-w-sm leading-relaxed">
                  Your payment was received — but your browser session has expired or no case was built in this tab.
                  Your download is unlocked: complete the builder in this tab and return here to export your pack.
                </p>
              ) : (
                <p className="text-sm text-slate-500 max-w-xs leading-relaxed">
                  It looks like your case hasn&apos;t been built yet, or your session has expired. Please complete the builder first.
                </p>
              )}
            </div>
            <Link
              href="/builder"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-emerald-600 hover:text-emerald-700"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Go to the builder
            </Link>
          </div>
        ) : (
          <>
          {/* Payment success notice */}
          {PAYMENT_GATE_ENABLED && paymentJustCompleted && (
            <div className="flex items-center gap-2.5 rounded-lg border border-emerald-200 bg-emerald-50 px-3.5 py-3 text-sm text-emerald-700">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true" className="shrink-0">
                <path d="M2 7l3.5 3.5L12 3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Payment successful. Your download is now unlocked.
            </div>
          )}
          <div className="flex flex-col gap-6 rounded-xl border border-slate-200 bg-white p-6 shadow-sm sm:flex-row sm:items-start sm:gap-8">
            {/* Illustration */}
            <div className="mx-auto flex w-full max-w-[200px] shrink-0 items-center justify-center rounded-xl border border-slate-100 bg-slate-50 p-4 sm:mx-0 sm:w-56 sm:max-w-none">
              <PageIllustration
                src="/illustrations/export-final-pdf.png"
                alt="Finalized evidence pack PDF ready for handoff"
                width={800}
                height={600}
                className="w-full max-w-[180px]"
              />
            </div>

            <div className="flex flex-col gap-4 flex-1">
              <div>
                <h2 className="text-sm font-semibold text-slate-800">What the PDF contains</h2>
                <ul className="mt-2.5 flex flex-col gap-1.5">
                  {[
                    "A structured case summary with all the details you entered",
                    "An auto-generated appeal timeline",
                    "Uploaded images rendered inline",
                    "Uploaded PDFs appended as additional pages",
                    "Other file types noted by name and type",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-slate-600">
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true" className="mt-0.5 shrink-0 text-emerald-500">
                        <path d="M2.5 7l3.5 3.5 5.5-7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <p className="text-xs text-slate-400 leading-relaxed">
                Note: total evidence file size is limited to approximately 4–5 MB due to browser and server
                constraints. If export fails, try removing some files or using smaller versions.
              </p>

              <div className="flex items-center gap-4">
                <Button onClick={handleExport} disabled={loading} className="gap-2">
                  {loading ? (
                    <>
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true" className="animate-spin">
                        <circle cx="7" cy="7" r="5.5" stroke="currentColor" strokeWidth="1.5" opacity="0.3" />
                        <path d="M7 1.5A5.5 5.5 0 0112.5 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                      </svg>
                      Generating PDF…
                    </>
                  ) : (
                    <>
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                        <path d="M7 2v8M3.5 7L7 10.5 10.5 7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M2 12h10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                      </svg>
                      Download PDF
                    </>
                  )}
                </Button>

                {downloaded && !error && (
                  <span className="flex items-center gap-1.5 text-sm font-medium text-emerald-600">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                      <path d="M2 7l3.5 3.5L12 3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    PDF downloaded
                  </span>
                )}
              </div>

              {error && (
                <div className="flex items-start gap-2.5 rounded-lg border border-red-200 bg-red-50 px-3.5 py-3 text-sm text-red-700">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true" className="mt-0.5 shrink-0">
                    <circle cx="7" cy="7" r="5.5" stroke="currentColor" strokeWidth="1.2" />
                    <path d="M7 4.5v3M7 9h.01" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                  </svg>
                  {error}
                </div>
              )}
            </div>
          </div>

          {/* Uploaded files diagnostics panel */}
          {diag !== null && (
            <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="flex items-center gap-2 mb-3">
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" aria-hidden="true" className="text-slate-400">
                  <rect x="2" y="2" width="11" height="11" rx="2" stroke="currentColor" strokeWidth="1.2" />
                  <path d="M5 7.5h5M7.5 5v5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" opacity="0.6" />
                </svg>
                <p className="text-sm font-semibold text-slate-700">
                  Uploaded files
                  <span className="ml-1.5 rounded-full bg-slate-100 px-2 py-0.5 text-xs font-medium text-slate-500">
                    {diag.length}
                  </span>
                </p>
              </div>
              {diag.length === 0 ? (
                <p className="text-sm text-slate-400">
                  No files uploaded. The PDF will contain the case summary and timeline only.
                </p>
              ) : (
                <ul className="flex flex-col gap-1.5">
                  {diag.map((f, i) => (
                    <li key={i} className="flex items-center gap-3 rounded-lg border border-slate-100 bg-slate-50 px-3.5 py-2.5 text-sm">
                      <span
                        className={`h-2 w-2 shrink-0 rounded-full ${f.hasData ? "bg-emerald-500" : "bg-red-500"}`}
                        title={f.hasData ? "File data ready" : "File data missing — re-upload this file"}
                      />
                      <span className="truncate text-slate-700 flex-1">{f.name}</span>
                      <span className="shrink-0 text-xs text-slate-400">
                        {f.sizeKb} KB
                        {!f.hasData && (
                          <span className="ml-1 text-red-500 font-medium"> — re-upload needed</span>
                        )}
                      </span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          )}

          {/* Success completion panel — shown after PDF is downloaded */}
          {downloaded && !error && (
            <div className="flex flex-col items-center gap-5 rounded-2xl border border-emerald-200 bg-emerald-50 px-8 py-8 text-center">
              <div className="w-full max-w-[220px]">
                <PageIllustration
                  src="/illustrations/success-complete-pack.png"
                  alt="Evidence pack process completed successfully"
                  width={800}
                  height={600}
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <p className="text-sm font-semibold text-emerald-900">Your appeal pack is ready</p>
                <p className="text-sm text-emerald-700 leading-relaxed max-w-xs">
                  Your PDF has been downloaded. You can now use it as part of your GBP reinstatement appeal.
                </p>
              </div>
              <Link
                href="/builder"
                className="inline-flex items-center gap-1.5 text-xs font-medium text-emerald-600 hover:text-emerald-800 transition-colors"
              >
                Build another appeal pack
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                  <path d="M2.5 6h7M7 3.5L9.5 6 7 8.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>
          )}
          </>
        )}
        </>
      )}

      {/* Nav */}
      <div className="flex items-center justify-between pt-1">
        <Link
          href="/review"
          className="inline-flex items-center gap-1.5 text-sm text-slate-500 hover:text-slate-700"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
            <path d="M11 7H3M6 4L3 7l3 3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Back to review
        </Link>
        <Link
          href="/builder"
          className="text-sm text-slate-400 hover:text-slate-600 transition-colors"
        >
          Build a new appeal pack
        </Link>
      </div>
    </div>
  );
}

