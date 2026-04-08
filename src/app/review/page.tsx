"use client";

import { useState } from "react";
import Link from "next/link";
import { CaseData } from "@/types/case";
import ReviewSummary from "@/components/forms/ReviewSummary";
import { estimatePayloadBytes } from "@/lib/payload-size";
import PayloadWarningBanner from "@/components/ui/PayloadWarningBanner";
import StepIllustration from "@/components/ui/StepIllustration";
import PageIllustration from "@/components/ui/PageIllustration";

function loadCaseData(): Partial<CaseData> | null {
  if (typeof window === "undefined") return null;
  const stored = sessionStorage.getItem("caseData");
  return stored ? (JSON.parse(stored) as CaseData) : null;
}

export default function ReviewPage() {
  // Read sessionStorage once on mount via lazy state initializer
  const [data] = useState<Partial<CaseData> | null>(loadCaseData);

  if (!data) {
    return (
      <div className="flex flex-col items-center gap-5 py-16 text-center">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <StepIllustration variant="review" className="w-40" />
        </div>
        <p className="text-sm text-slate-600">No case data found. Please complete the builder first.</p>
        <Link
          href="/builder"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-emerald-600 hover:text-emerald-700"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
            <path d="M11 7H3M6 4L3 7l3 3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Go to the builder
        </Link>
      </div>
    );
  }

  const payloadBytes = estimatePayloadBytes(data);

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-6">
        <div className="flex flex-1 items-start justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold tracking-tight text-slate-900">Review your appeal pack</h1>
            <p className="mt-1 text-sm text-slate-500">
              Check the generated case structure below. This is what will appear in your exported PDF.
            </p>
          </div>
          <Link
            href="/export"
            className="shrink-0 inline-flex flex-col items-end gap-0.5"
          >
            <span className="inline-flex items-center gap-2 rounded-lg bg-emerald-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-emerald-700">
              Export PDF
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            <span className="text-xs text-slate-400 pr-0.5">One-time $4.99 to download</span>
          </Link>
        </div>
        <div className="mx-auto w-full max-w-[240px] shrink-0 sm:mx-0 sm:max-w-[260px]">
          <PageIllustration
            src="/illustrations/review-case-analysis.png"
            alt="Checking and validating the case before export"
            width={800}
            height={600}
            withPanel
          />
        </div>
      </div>

      <PayloadWarningBanner payloadBytes={payloadBytes} />

      <ReviewSummary data={data} />

      {/* Bottom nav */}
      <div className="flex justify-between pt-2">
        <Link
          href="/builder"
          className="inline-flex items-center gap-1.5 text-sm text-slate-500 hover:text-slate-700"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
            <path d="M11 7H3M6 4L3 7l3 3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Back to builder
        </Link>
        <Link
          href="/export"
          className="inline-flex flex-col items-end gap-0.5"
        >
          <span className="inline-flex items-center gap-2 rounded-lg bg-emerald-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-emerald-700">
            Export PDF
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
          <span className="text-xs text-slate-400 pr-0.5">One-time $4.99 to download</span>
        </Link>
      </div>
    </div>
  );
}

