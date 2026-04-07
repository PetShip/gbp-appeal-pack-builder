"use client";

import { DisputeType } from "@/types/case";
import { DISPUTE_TYPES } from "@/lib/dispute-types";

// Icon for each dispute type
const DISPUTE_ICONS: Record<string, React.ReactElement> = {
  unauthorized: (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <rect x="2" y="5" width="14" height="10" rx="2" stroke="currentColor" strokeWidth="1.3" />
      <path d="M6 5V4a3 3 0 016 0v1" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      <circle cx="9" cy="10.5" r="1.5" fill="currentColor" opacity="0.7" />
    </svg>
  ),
  service_not_received: (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <rect x="3" y="3" width="12" height="12" rx="2" stroke="currentColor" strokeWidth="1.3" />
      <path d="M6 9h6M9 6v6" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" opacity="0.5" />
      <path d="M4 14L14 4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  ),
  subscription_canceled: (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <path d="M3 9a6 6 0 1112 0A6 6 0 013 9z" stroke="currentColor" strokeWidth="1.3" />
      <path d="M9 6v3.5L11.5 12" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  product_not_as_described: (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <rect x="3" y="2" width="10" height="13" rx="1.5" stroke="currentColor" strokeWidth="1.3" />
      <path d="M6 6h5M6 9h3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" opacity="0.6" />
      <circle cx="13.5" cy="13.5" r="3" fill="currentColor" opacity="0.15" stroke="currentColor" strokeWidth="1.2" />
      <path d="M12 13.5l1 1 1.5-1.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" opacity="0.8" />
    </svg>
  ),
  other: (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <circle cx="9" cy="9" r="6.5" stroke="currentColor" strokeWidth="1.3" />
      <path d="M9 10.5V10c0-.8.5-1.3 1.1-1.7C10.7 7.9 11 7.4 11 6.8 11 5.8 10.1 5 9 5S7 5.8 7 6.8" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      <circle cx="9" cy="12.5" r="0.7" fill="currentColor" />
    </svg>
  ),
};

type DisputeTypeStepProps = {
  value: DisputeType | "";
  onChange: (value: DisputeType) => void;
  error?: string;
};

export default function DisputeTypeStep({ value, onChange, error }: DisputeTypeStepProps) {
  const selected = DISPUTE_TYPES.find((d) => d.value === value);

  return (
    <div className="flex flex-col gap-4">
      <div>
        <h2 className="text-base font-semibold text-slate-900">Select dispute type</h2>
        <p className="mt-0.5 text-xs text-slate-400">Choose the type that best matches your dispute.</p>
      </div>
      <div className="flex flex-col gap-2.5">
        {DISPUTE_TYPES.map((option) => {
          const isSelected = value === option.value;
          return (
            <label
              key={option.value}
              className={`flex cursor-pointer items-start gap-4 rounded-xl border p-4 transition-all duration-150 ${
                isSelected
                  ? "border-emerald-500 bg-emerald-50 shadow-sm"
                  : "border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50"
              }`}
            >
              <input
                type="radio"
                className="sr-only"
                name="disputeType"
                value={option.value}
                checked={isSelected}
                onChange={() => onChange(option.value)}
              />
              {/* Icon */}
              <span
                className={`mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg transition-colors ${
                  isSelected ? "bg-emerald-600 text-white" : "bg-slate-100 text-slate-500"
                }`}
              >
                {DISPUTE_ICONS[option.value] ?? (
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                    <rect x="3" y="3" width="12" height="12" rx="2" stroke="currentColor" strokeWidth="1.3" />
                  </svg>
                )}
              </span>
              <div className="flex min-w-0 flex-col gap-0.5">
                <span className={`text-sm font-semibold ${isSelected ? "text-emerald-900" : "text-slate-900"}`}>
                  {option.label}
                </span>
                <span className="text-xs text-slate-500 leading-relaxed">{option.description}</span>
              </div>
              {/* Selected indicator */}
              {isSelected && (
                <span className="ml-auto mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-600">
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
                    <path d="M2 5l2.5 2.5L8 3" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              )}
            </label>
          );
        })}
      </div>

      {/* Guidance hint for selected type */}
      {selected && (
        <div className="flex items-start gap-2.5 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5">
          <svg width="15" height="15" viewBox="0 0 15 15" fill="none" aria-hidden="true" className="mt-0.5 shrink-0 text-emerald-500">
            <circle cx="7.5" cy="7.5" r="6.5" stroke="currentColor" strokeWidth="1.2" />
            <path d="M7.5 6.5v4M7.5 5h.01" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
          </svg>
          <div>
            <p className="text-xs font-medium text-slate-700 mb-0.5">Evidence guidance</p>
            <p className="text-xs text-slate-500 leading-relaxed">{selected.guidance}</p>
          </div>
        </div>
      )}

      {error && (
        <p className="flex items-center gap-1.5 text-xs text-red-600">
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
            <circle cx="6" cy="6" r="5" stroke="currentColor" strokeWidth="1.2" />
            <path d="M6 4v2.5M6 8h.01" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
          </svg>
          {error}
        </p>
      )}
    </div>
  );
}
