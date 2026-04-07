"use client";

import { Fragment, useState } from "react";
import { useRouter } from "next/navigation";
import { CaseData, CaseType, EvidenceFile } from "@/types/case";
import { validateCase, validateStep0, validateStep1, validateStep2 } from "@/lib/validation";
import { getCaseTypeLabel, getCaseTypeUploadHints } from "@/lib/dispute-types";
import DisputeTypeStep from "@/components/forms/DisputeTypeStep";
import EvidenceUploadStep from "@/components/forms/EvidenceUploadStep";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import FileUpload from "@/components/ui/FileUpload";

const EMPTY_CASE: Partial<CaseData> = {
  caseType: undefined,
  businessName: "",
  businessAddress: "",
  primaryCategory: "",
  website: "",
  issueDetectedDate: "",
  issueDescription: "",
  profileName: "",
  profileAddress: "",
  businessOperationDescription: "",
  additionalNotes: "",
  evidenceFiles: [],
  consistencyItems: [],
};

const STEP_LABELS = [
  "Case Type",
  "Business Basics",
  "Issue & Profile",
  "Documents",
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
            value={data.caseType ?? ""}
            onChange={(v: CaseType) => update({ caseType: v })}
            error={errors.caseType}
          />
        )}

        {step === 1 && (
          <div className="flex flex-col gap-5">
            <div>
              <h2 className="text-base font-semibold text-slate-900">Business Basics</h2>
              <p className="mt-0.5 text-xs text-slate-400">* indicates a required field</p>
            </div>
            <Input
              id="businessName"
              label="Business name *"
              placeholder="e.g. Acme Plumbing Co."
              value={data.businessName}
              error={errors.businessName}
              onChange={(e) => update({ businessName: e.target.value })}
            />
            <Input
              id="businessAddress"
              label="Business address *"
              placeholder="e.g. 123 Main St, Springfield, IL 62701"
              helperText="The official registered address of the business."
              value={data.businessAddress}
              error={errors.businessAddress}
              onChange={(e) => update({ businessAddress: e.target.value })}
            />
            <Input
              id="primaryCategory"
              label="Primary category *"
              placeholder="e.g. Plumber, Restaurant, Dental clinic"
              helperText="The primary business category as it appears on official records."
              value={data.primaryCategory}
              error={errors.primaryCategory}
              onChange={(e) => update({ primaryCategory: e.target.value })}
            />
            <Input
              id="website"
              label="Website"
              type="url"
              placeholder="e.g. https://www.example.com"
              helperText="Optional — include if your website supports your appeal."
              value={data.website}
              onChange={(e) => update({ website: e.target.value })}
            />
            <Input
              id="issueDetectedDate"
              label="Issue detected date"
              type="date"
              helperText="Optional — the date you first noticed the GBP issue."
              value={data.issueDetectedDate}
              onChange={(e) => update({ issueDetectedDate: e.target.value })}
            />
          </div>
        )}

        {step === 2 && (
          <EvidenceUploadStep data={data} onChange={update} errors={errors} />
        )}

        {step === 3 && (
          <div className="flex flex-col gap-5">
            <div>
              <h2 className="text-base font-semibold text-slate-900">Supporting Documents</h2>
              <p className="mt-0.5 text-sm text-slate-500">
                Upload any files that support your appeal — this step is optional. Once ready, click{" "}
                <strong className="text-slate-700">Build appeal pack</strong> to generate your structured summary.
              </p>
            </div>

            {/* Upload hints based on case type */}
            {data.caseType && getCaseTypeUploadHints(data.caseType).length > 0 && (
              <div className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5">
                <p className="text-xs font-medium text-slate-600 mb-2">Useful files for this case type:</p>
                <ul className="flex flex-col gap-1.5">
                  {getCaseTypeUploadHints(data.caseType).map((hint) => (
                    <li key={hint} className="flex items-start gap-2 text-xs text-slate-500">
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true" className="mt-0.5 shrink-0 text-emerald-500">
                        <path d="M2 6l2.5 2.5 5.5-5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      {hint}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <FileUpload
              label="Evidence files (optional)"
              helperText="Upload screenshots, official documents, photos, or other files that support your appeal. Accepted: images, PDFs, and other documents."
              files={data.evidenceFiles ?? []}
              onChange={(files: EvidenceFile[]) => update({ evidenceFiles: files })}
            />

            {/* Case summary — quick reference before building */}
            <dl className="flex flex-col gap-2.5 rounded-lg border border-slate-200 bg-slate-50 p-4 text-sm">
              <Row label="Case type" value={data.caseType ? getCaseTypeLabel(data.caseType) : "—"} />
              <Row label="Business name" value={data.businessName || "—"} />
              <Row label="Business address" value={data.businessAddress || "—"} />
              <Row label="Primary category" value={data.primaryCategory || "—"} />
              {data.website && <Row label="Website" value={data.website} />}
              {data.issueDetectedDate && <Row label="Issue detected" value={data.issueDetectedDate} />}
              {data.issueDescription && <Row label="Issue" value={data.issueDescription} />}
              {data.profileName && <Row label="Profile name" value={data.profileName} />}
              {data.profileAddress && <Row label="Profile address" value={data.profileAddress} />}
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
          {step === 3 ? "Build appeal pack" : "Continue →"}
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

