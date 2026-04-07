import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "ProofPack privacy policy. Learn how ProofPack handles your data — and why we designed the product to handle as little of it as possible.",
  alternates: {
    canonical: "https://proofpack.pro/privacy",
  },
  robots: {
    index: true,
    follow: false,
  },
};

export default function PrivacyPage() {
  return (
    <div className="flex flex-col gap-10 max-w-2xl">
      {/* Header */}
      <div className="flex flex-col gap-3">
        <p className="text-sm font-semibold tracking-widest text-emerald-600 uppercase">ProofPack</p>
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">Privacy policy</h1>
        <p className="text-sm text-slate-400">Last updated: March 2026</p>
      </div>

      {/* Key summary */}
      <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-5">
        <h2 className="text-sm font-semibold text-emerald-900 mb-2">The short version</h2>
        <p className="text-sm text-emerald-800 leading-relaxed">
          ProofPack is designed to handle as little of your data as possible. Case information you
          enter stays in your browser session only. We do not store your case data on our servers.
          We do not sell your data. We do not require you to create an account.
        </p>
      </div>

      {/* Sections */}
      <div className="flex flex-col gap-8 text-sm text-slate-600 leading-relaxed">
        <section>
          <h2 className="text-base font-semibold text-slate-900 mb-3">1. What data ProofPack collects</h2>
          <p>
            ProofPack collects no personal data from you directly. The builder flow runs entirely
            in your browser. Case information you enter (customer details, order information,
            evidence descriptions, uploaded files) is stored only in your browser&apos;s{" "}
            <code className="bg-slate-100 rounded px-1 text-xs">sessionStorage</code>, which is
            scoped to the current browser tab and is not accessible to any server or third party.
          </p>
          <p className="mt-3">
            When you click &ldquo;Download PDF,&rdquo; your case data is sent to our PDF generation
            server for the purpose of creating your evidence pack PDF. This data is processed
            in memory and is not logged or retained after the PDF is generated and returned.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-slate-900 mb-3">2. Cookies and tracking</h2>
          <p>
            ProofPack does not use tracking cookies, advertising cookies, or third-party analytics.
            Standard web server logs may capture IP addresses and request metadata for security and
            operational monitoring purposes. These logs are not used for advertising or sold to
            third parties.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-slate-900 mb-3">3. Uploaded evidence files</h2>
          <p>
            Files you upload as evidence are encoded in your browser and temporarily held in
            sessionStorage as part of your case data. When you export your PDF, file data is
            transmitted to the PDF generation server for rendering. Files are processed in memory
            and are not stored permanently on any ProofPack server.
          </p>
          <p className="mt-3">
            We recommend using screenshots and exports that contain only information relevant to
            your dispute, and avoiding uploading files with sensitive information beyond what is
            necessary for your evidence pack.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-slate-900 mb-3">4. Third-party services</h2>
          <p>
            ProofPack is hosted on Vercel, which may collect standard infrastructure-level data
            (such as IP addresses and request metadata) in accordance with its own{" "}
            <a
              href="https://vercel.com/legal/privacy-policy"
              className="text-emerald-600 hover:text-emerald-700 underline underline-offset-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              privacy policy
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-slate-900 mb-3">5. Data retention</h2>
          <p>
            ProofPack does not retain your case data. SessionStorage is automatically cleared when
            you close the browser tab. PDF generation requests are processed in memory and not
            logged or stored.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-slate-900 mb-3">6. Your rights</h2>
          <p>
            Because ProofPack does not collect or store personal data on its servers, there is
            nothing to request deletion of. If you have questions or concerns about privacy, you
            can contact us at the address below.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-slate-900 mb-3">7. Changes to this policy</h2>
          <p>
            We may update this privacy policy from time to time. The &ldquo;last updated&rdquo;
            date at the top of this page reflects the most recent revision. Continued use of
            ProofPack after changes are posted constitutes acceptance of the updated policy.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-slate-900 mb-3">8. Contact</h2>
          <p>
            For privacy-related questions, contact us at{" "}
            <a
              href="mailto:privacy@proofpack.pro"
              className="text-emerald-600 hover:text-emerald-700"
            >
              privacy@proofpack.pro
            </a>
            .
          </p>
        </section>
      </div>

      {/* Nav */}
      <div className="pt-4 border-t border-slate-200">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-sm text-slate-500 hover:text-slate-700"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
            <path d="M11 7H3M6 4L3 7l3 3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Back to ProofPack
        </Link>
      </div>
    </div>
  );
}
