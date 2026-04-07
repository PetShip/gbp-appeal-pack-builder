"use client";

import { CaseData } from "@/types/case";
import { buildSummary } from "@/lib/summary-builder";
import { buildTimeline } from "@/lib/timeline-builder";
import { getDisputeTypeGuidance } from "@/lib/dispute-types";
import { formatSize } from "@/lib/utils";

type ReviewSummaryProps = {
  data: Partial<CaseData>;
};

export default function ReviewSummary({ data }: ReviewSummaryProps) {
  const summary = buildSummary(data);
  const timeline = buildTimeline(data);
  const disputeGuidance = data.disputeType ? getDisputeTypeGuidance(data.disputeType) : null;

  return (
    <div className="flex flex-col gap-8">
      {/* Info banner */}
      <div className="flex items-start gap-3 rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3.5 text-sm text-emerald-800">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true" className="mt-0.5 shrink-0">
          <circle cx="8" cy="8" r="6.5" stroke="currentColor" strokeWidth="1.2" />
          <path d="M8 7v4M8 5h.01" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
        </svg>
        <span>
          This is how your evidence pack will be structured in the exported PDF. Review each section
          carefully before exporting.
        </span>
      </div>

      {/* Dispute-specific evidence guidance */}
      {disputeGuidance && (
        <div className="flex items-start gap-3 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-600">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true" className="mt-0.5 shrink-0 text-slate-400">
            <rect x="2" y="2" width="10" height="10" rx="2" stroke="currentColor" strokeWidth="1.2" />
            <path d="M5 7h4M7 5v4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" opacity="0.5" />
          </svg>
          <span>
            <strong className="text-slate-700">Evidence strength check:</strong>{" "}
            {disputeGuidance} Make sure your uploaded files and descriptions cover these points.
          </span>
        </div>
      )}

      {/* ── Case summary ── */}
      <section>
        <SectionHeader
          title="Case summary"
          icon={
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <rect x="2" y="2" width="12" height="12" rx="2" stroke="currentColor" strokeWidth="1.2" />
              <path d="M5 5.5h6M5 8h4M5 10.5h3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" opacity="0.7" />
            </svg>
          }
        />
        <dl className="flex flex-col gap-0 divide-y divide-slate-100 rounded-xl border border-slate-200 bg-white shadow-sm overflow-hidden text-sm">
          <Row label="Dispute type" value={summary.disputeTypeLabel} />
          <Row label="Customer" value={summary.customerName} />
          {summary.customerEmail && <Row label="Email" value={summary.customerEmail} />}
          <Row label="Order date" value={summary.orderDate} />
          <Row label="Amount" value={`${summary.currency} ${summary.amount}`} />
          <Row label="Product" value={summary.productName} />
          <Row label="Description" value={summary.productDescription} />
          <Row label="Fulfillment" value={summary.fulfillmentDetails} />
          {summary.customerCommunication && (
            <Row label="Communication" value={summary.customerCommunication} />
          )}
          {summary.additionalNotes && <Row label="Notes" value={summary.additionalNotes} />}
        </dl>
      </section>

      {/* ── Evidence timeline ── */}
      <section>
        <SectionHeader
          title="Evidence timeline"
          subtitle="Auto-generated from the case details you entered. This will appear in the PDF."
          icon={
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <circle cx="8" cy="8" r="6.5" stroke="currentColor" strokeWidth="1.2" />
              <path d="M8 5v3.5L10.5 11" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          }
        />
        {timeline.length === 0 ? (
          <EmptyState message="No timeline items generated." />
        ) : (
          <ol className="relative flex flex-col gap-0 pl-5">
            {/* Vertical track */}
            <div className="absolute left-[7px] top-3 bottom-3 w-px bg-slate-200" />
            {timeline.map((item, i) => (
              <li key={i} className="relative flex flex-col gap-0.5 pb-5 last:pb-0">
                {/* Dot */}
                <span className="absolute -left-5 top-1 flex h-3.5 w-3.5 items-center justify-center">
                  <span className="h-2.5 w-2.5 rounded-full border-2 border-emerald-400 bg-white" />
                </span>
                <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                  {item.date && (
                    <span className="mb-1 block text-xs font-medium text-emerald-600">{item.date}</span>
                  )}
                  <p className="font-semibold text-slate-900 text-sm">{item.title}</p>
                  <p className="mt-0.5 text-sm text-slate-500">{item.description}</p>
                </div>
              </li>
            ))}
          </ol>
        )}
      </section>

      {/* ── Attached files ── */}
      <section>
        <SectionHeader
          title="Attached evidence files"
          subtitle="Images will be rendered inline in the PDF. PDFs will be appended as additional pages. Other file types will be noted but cannot be rendered inline."
          icon={
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M9 2H4a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2V7L9 2z" stroke="currentColor" strokeWidth="1.2" />
              <path d="M9 2v5h5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" opacity="0.6" />
            </svg>
          }
        />
        {!data.evidenceFiles || data.evidenceFiles.length === 0 ? (
          <EmptyState message="No files attached. The PDF will contain the case summary and timeline only." />
        ) : (
          <ul className="flex flex-col gap-2">
            {data.evidenceFiles.map((f, i) => (
              <li
                key={i}
                className="flex items-center justify-between rounded-xl border border-slate-200 bg-white px-4 py-3 shadow-sm"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-emerald-50 text-emerald-500">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                      <rect x="2" y="1" width="8" height="12" rx="1.5" fill="currentColor" opacity="0.15" stroke="currentColor" strokeWidth="1" />
                      <path d="M8 1v3h3" stroke="currentColor" strokeWidth="1" strokeLinejoin="round" opacity="0.6" />
                    </svg>
                  </span>
                  <span className="truncate text-sm font-medium text-slate-800">{f.name}</span>
                </div>
                <span className="ml-4 shrink-0 text-xs text-slate-400">
                  {f.type || "unknown"} · {formatSize(f.size)}
                </span>
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
}

function SectionHeader({
  title,
  subtitle,
  icon,
}: {
  title: string;
  subtitle?: string;
  icon?: React.ReactNode;
}) {
  return (
    <div className="mb-3">
      <div className="flex items-center gap-2 text-slate-800">
        {icon && (
          <span className="flex h-7 w-7 items-center justify-center rounded-md bg-slate-100 text-slate-500">
            {icon}
          </span>
        )}
        <h2 className="text-base font-semibold">{title}</h2>
      </div>
      {subtitle && (
        <p className="mt-1 text-xs text-slate-400 leading-relaxed">{subtitle}</p>
      )}
    </div>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex gap-3 px-4 py-3">
      <dt className="w-36 shrink-0 text-xs font-medium text-slate-500 pt-0.5">{label}</dt>
      <dd className="text-sm text-slate-900 min-w-0 break-words">{value}</dd>
    </div>
  );
}

function EmptyState({ message }: { message: string }) {
  return (
    <p className="rounded-xl border border-dashed border-slate-200 py-6 text-center text-sm text-slate-400">
      {message}
    </p>
  );
}

