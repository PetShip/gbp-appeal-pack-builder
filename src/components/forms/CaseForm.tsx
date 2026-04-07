"use client";

import { Fragment, useState } from "react";
import { useRouter } from "next/navigation";
import { CaseData, DisputeType } from "@/types/case";
import { validateCase, validateStep0, validateStep1, validateStep2 } from "@/lib/validation";
import { getDisputeTypeLabel } from "@/lib/dispute-types";
import DisputeTypeStep from "@/components/forms/DisputeTypeStep";
import EvidenceUploadStep from "@/components/forms/EvidenceUploadStep";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";

const EMPTY_CASE: Partial<CaseData> = {
  disputeType: undefined,
  customerName: "",
  customerEmail: "",
  orderDate: "",
  amount: "",
  currency: "USD",
  productName: "",
  productDescription: "",
  fulfillmentDetails: "",
  customerCommunication: "",
  additionalNotes: "",
  timelineItems: [],
  evidenceFiles: [],
};

const STEP_LABELS = [
  "Dispute type",
  "Case basics",
  "Description & evidence",
  "Review",
];

type CaseFormProps = {
  onComplete: (data: CaseData) => boolean;
};

/** Load persisted draft from sessionStorage, if any. */
function loadDraft(): { data: Partial<CaseData>; step: number } {
  if (typeof window === "undefined") return { data: EMPTY_CASE, step: 0 };
  try {
    const stored = sessionStorage.getItem("caseData");
    if (stored) {
      const parsed = JSON.parse(stored) as Partial<CaseData>;
      // Return to the confirm step so the user can review and continue or go back to edit.
      return { data: { ...EMPTY_CASE, ...parsed }, step: 3 };
    }
  } catch {
    // Corrupt or missing — fall through to empty state
  }
  return { data: EMPTY_CASE, step: 0 };
}

export default function CaseForm({ onComplete }: CaseFormProps) {
  const router = useRouter();
  const [{ data, step }, setFormState] = useState<{ data: Partial<CaseData>; step: number }>(loadDraft);
  const [errors, setErrors] = useState<Partial<Record<keyof CaseData, string>>>({});

  function update(updates: Partial<CaseData>) {
    setFormState((prev) => ({ ...prev, data: { ...prev.data, ...updates } }));
  }

  function handleNext() {
    // Per-step validation before advancing
    if (step === 0) {
      const result = validateStep0(data);
      if (!result.valid) { setErrors(result.errors); return; }
    }
    if (step === 1) {
      const result = validateStep1(data);
      if (!result.valid) { setErrors(result.errors); return; }
    }
    if (step === 2) {
      const result = validateStep2(data);
      if (!result.valid) { setErrors(result.errors); return; }
    }

    if (step === 3) {
      // Final full validation before completing
      const result = validateCase(data);
      if (!result.valid) {
        setErrors(result.errors);
        return;
      }
      if (onComplete(data as CaseData)) {
        router.push("/review");
      }
      return;
    }

    // Advance to next step, clearing any previous errors
    setErrors({});
    setFormState((prev) => ({ ...prev, step: prev.step + 1 }));
  }

  function handleBack() {
    setErrors({});
    setFormState((prev) => ({ ...prev, step: Math.max(0, prev.step - 1) }));
  }

  return (
    <div className="flex flex-col gap-6">
      {/* ── Step indicator ── */}
      <nav aria-label="Progress">
        <ol className="flex items-center">
          {STEP_LABELS.map((label, i) => {
            const isDone = i < step;
            const isCurrent = i === step;
            return (
              <Fragment key={i}>
                <li className="flex shrink-0 items-center gap-2 min-w-0">
                  {/* Step bubble */}
                  <span
                    className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-semibold transition-colors ${
                      isDone
                        ? "bg-emerald-600 text-white"
                        : isCurrent
                        ? "bg-emerald-600 text-white ring-4 ring-emerald-100"
                        : "bg-slate-200 text-slate-500"
                    }`}
                  >
                    {isDone ? (
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
                        <path d="M2 5l2.5 2.5L8 3" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    ) : (
                      i + 1
                    )}
                  </span>
                  {/* Label — hidden on small screens except current */}
                  <span
                    className={`hidden text-xs font-medium truncate sm:block ${
                      isCurrent ? "text-emerald-700" : isDone ? "text-slate-500" : "text-slate-400"
                    }`}
                  >
                    {label}
                  </span>
                </li>
                {/* Connector — sits between steps at the ol level so circles stay evenly distributed */}
                {i < STEP_LABELS.length - 1 && (
                  <li aria-hidden="true" role="none" className={`flex-1 mx-2 h-px transition-colors ${i < step ? "bg-emerald-400" : "bg-slate-200"}`} />
                )}
              </Fragment>
            );
          })}
        </ol>
      </nav>

      {/* ── Step content ── */}
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
        {step === 0 && (
          <DisputeTypeStep
            value={data.disputeType ?? ""}
            onChange={(v: DisputeType) => update({ disputeType: v })}
            error={errors.disputeType}
          />
        )}

        {step === 1 && (
          <div className="flex flex-col gap-5">
            <div>
              <h2 className="text-base font-semibold text-slate-900">Case basics</h2>
              <p className="mt-0.5 text-xs text-slate-400">* indicates a required field</p>
            </div>
            <Input
              id="customerName"
              label="Customer name *"
              placeholder="e.g. Jane Smith"
              value={data.customerName}
              error={errors.customerName}
              onChange={(e) => update({ customerName: e.target.value })}
            />
            <Input
              id="customerEmail"
              label="Customer email"
              type="email"
              placeholder="e.g. jane@example.com"
              helperText="Optional — include if you have email correspondence with this customer."
              value={data.customerEmail}
              onChange={(e) => update({ customerEmail: e.target.value })}
            />
            <Input
              id="orderDate"
              label="Order date *"
              type="date"
              helperText="The date the disputed charge was made."
              value={data.orderDate}
              error={errors.orderDate}
              onChange={(e) => update({ orderDate: e.target.value })}
            />
            <div className="flex gap-3">
              <Input
                id="amount"
                label="Amount *"
                type="text"
                placeholder="e.g. 49.00"
                className="flex-1"
                value={data.amount}
                error={errors.amount}
                onChange={(e) => update({ amount: e.target.value })}
              />
              <Input
                id="currency"
                label="Currency *"
                type="text"
                placeholder="USD"
                className="w-24"
                value={data.currency}
                error={errors.currency}
                onChange={(e) => update({ currency: e.target.value })}
              />
            </div>
            <Input
              id="productName"
              label="Product / service name *"
              placeholder="e.g. Pro Plan, Course Access"
              value={data.productName}
              error={errors.productName}
              onChange={(e) => update({ productName: e.target.value })}
            />
          </div>
        )}

        {step === 2 && (
          <EvidenceUploadStep data={data} onChange={update} errors={errors} />
        )}

        {step === 3 && (
          <div className="flex flex-col gap-5">
            <div>
              <h2 className="text-base font-semibold text-slate-900">Confirm and build</h2>
              <p className="mt-0.5 text-sm text-slate-500">
                Review your entries below, then click{" "}
                <strong className="text-slate-700">Build evidence pack</strong> to generate the
                structured summary and proceed to export.
              </p>
            </div>
            <dl className="flex flex-col gap-2.5 rounded-lg border border-slate-200 bg-slate-50 p-4 text-sm">
              <Row label="Dispute type" value={data.disputeType ? getDisputeTypeLabel(data.disputeType) : "—"} />
              <Row label="Customer" value={data.customerName || "—"} />
              {data.customerEmail && <Row label="Email" value={data.customerEmail} />}
              <Row label="Order date" value={data.orderDate || "—"} />
              <Row label="Amount" value={(data.amount && data.currency) ? `${data.currency} ${data.amount}` : "—"} />
              <Row label="Product" value={data.productName || "—"} />
              {data.productDescription && (
                <Row label="Description" value={data.productDescription} />
              )}
              {data.fulfillmentDetails && (
                <Row label="Fulfillment" value={data.fulfillmentDetails} />
              )}
              {(data.evidenceFiles?.length ?? 0) > 0 && (
                <Row
                  label="Files"
                  value={`${data.evidenceFiles!.length} file${data.evidenceFiles!.length === 1 ? "" : "s"} attached`}
                />
              )}
            </dl>
            {Object.keys(errors).length > 0 && (
              <div className="flex items-start gap-2.5 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true" className="mt-0.5 shrink-0">
                  <circle cx="8" cy="8" r="6.5" stroke="currentColor" strokeWidth="1.2" />
                  <path d="M8 5.5v3M8 10h.01" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                </svg>
                <div>
                  <p className="font-medium">Please go back and complete the following:</p>
                  <ul className="mt-1 list-disc list-inside space-y-0.5">
                    {Object.values(errors).map((msg, i) => (
                      <li key={i}>{msg}</li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      {/* ── Navigation ── */}
      <div className="flex justify-between">
        <Button variant="secondary" onClick={handleBack} disabled={step === 0}>
          ← Back
        </Button>
        <Button onClick={handleNext}>
          {step === 3 ? "Build evidence pack" : "Continue →"}
        </Button>
      </div>
    </div>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex gap-3">
      <dt className="w-32 shrink-0 text-slate-500">{label}</dt>
      <dd className="text-slate-900 break-words min-w-0">{value}</dd>
    </div>
  );
}

