"use client";

import { useState } from "react";
import { CaseData } from "@/types/case";
import CaseForm from "@/components/forms/CaseForm";
import PageIllustration from "@/components/ui/PageIllustration";

// The builder page holds the case data in state and passes it to the form.
// On completion, the data is saved to sessionStorage so review/export pages can read it.
export default function BuilderPage() {
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
    return true;
  }

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-6">
        <div className="flex-1">
          <h1 className="text-2xl font-bold tracking-tight text-slate-900">Build your appeal pack</h1>
          <p className="mt-1 text-sm text-slate-500">
            Fill in the details below to assemble a structured GBP appeal pack for your Google Business Profile.
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

      {/* Reassurance strip */}
      <div className="flex flex-wrap items-center gap-x-5 gap-y-2 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-xs text-slate-500">
        <span className="flex items-center gap-1.5">
          <svg width="11" height="11" viewBox="0 0 11 11" fill="none" aria-hidden="true"><path d="M1.5 5.5l2.5 2.5 5-5" stroke="#059669" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
          Free to build
        </span>
        <span className="flex items-center gap-1.5">
          <svg width="11" height="11" viewBox="0 0 11 11" fill="none" aria-hidden="true"><path d="M1.5 5.5l2.5 2.5 5-5" stroke="#059669" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
          $4.99 one-time to unlock your final PDF download
        </span>
        <span className="flex items-center gap-1.5">
          <svg width="11" height="11" viewBox="0 0 11 11" fill="none" aria-hidden="true"><path d="M1.5 5.5l2.5 2.5 5-5" stroke="#059669" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
          No account required
        </span>
        <span className="flex items-center gap-1.5">
          <svg width="11" height="11" viewBox="0 0 11 11" fill="none" aria-hidden="true"><path d="M1.5 5.5l2.5 2.5 5-5" stroke="#059669" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
          Data stays in this browser tab only
        </span>
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

