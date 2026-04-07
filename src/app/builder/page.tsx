"use client";

import { useState } from "react";
import { CaseData } from "@/types/case";
import CaseForm from "@/components/forms/CaseForm";
import PageIllustration from "@/components/ui/PageIllustration";

// The builder page holds the case data in state and passes it to the form.
// On completion, the data is saved to sessionStorage so review/export pages can read it.
export default function BuilderPage() {
  const [submitted, setSubmitted] = useState(false);
  const [saveError, setSaveError] = useState<string | null>(null);

  function handleComplete(data: CaseData): boolean {
    setSaveError(null);
    const payload = JSON.stringify(data);
    try {
      sessionStorage.setItem("caseData", payload);
    } catch (err) {
      console.error("[Builder] sessionStorage.setItem failed:", err);
      // QuotaExceededError — show an inline error; do not navigate
      setSaveError(
        "The uploaded files are too large to store in the browser (typical limit: 5–10 MB). " +
        "Try uploading fewer or smaller files, or upload them one at a time."
      );
      return false;
    }
    setSubmitted(true);
    return true;
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center gap-4 py-16 text-center">
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="text-emerald-600">
            <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
        <p className="text-base font-semibold text-slate-900">Case submitted</p>
        <p className="text-sm text-slate-500">Redirecting to review…</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-6">
        <div className="flex-1">
          <h1 className="text-2xl font-bold tracking-tight text-slate-900">Build your evidence pack</h1>
          <p className="mt-1 text-sm text-slate-500">
            Fill in the details below to assemble your dispute evidence pack.
          </p>
        </div>
        <div className="mx-auto w-full max-w-[240px] shrink-0 sm:mx-0 sm:max-w-[280px]">
          <PageIllustration
            src="/illustrations/builder-structure-pack.png"
            alt="Assembling and structuring content into an evidence pack"
            width={800}
            height={600}
            withPanel
          />
        </div>
      </div>
      {saveError && (
        <div className="flex items-start gap-3 rounded-xl border border-red-200 bg-red-50 px-4 py-3.5 text-sm text-red-700">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true" className="mt-0.5 shrink-0">
            <circle cx="8" cy="8" r="6.5" stroke="currentColor" strokeWidth="1.2" />
            <path d="M8 5.5v3M8 10h.01" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
          </svg>
          {saveError}
        </div>
      )}
      <CaseForm onComplete={handleComplete} />
    </div>
  );
}

