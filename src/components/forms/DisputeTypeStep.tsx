"use client";

import { CaseType } from "@/types/case";
import { CASE_TYPES } from "@/lib/dispute-types";

// Icon for each case type
const CASE_ICONS: Record<string, React.ReactElement> = {
  documentation_mismatch: (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <rect x="3" y="2" width="10" height="13" rx="1.5" stroke="currentColor" strokeWidth="1.3" />
      <path d="M6 6h5M6 9h3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" opacity="0.6" />
      <circle cx="13.5" cy="13.5" r="3" fill="currentColor" opacity="0.15" stroke="currentColor" strokeWidth="1.2" />
      <path d="M13.5 12v1.5M13.5 14.7h.01" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" opacity="0.9" />
    </svg>
  ),
  business_legitimacy_proof: (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <path d="M9 2L3 5v4c0 3.3 2.5 6.4 6 7 3.5-.6 6-3.7 6-7V5L9 2z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
      <path d="M6.5 9l2 2 3-3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  profile_information_cleanup: (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <circle cx="9" cy="9" r="6.5" stroke="currentColor" strokeWidth="1.3" />
      <path d="M6 9h6M9 6v6" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" opacity="0.5" />
      <path d="M11.5 6.5l-5 5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  ),
  restricted_or_disabled_profile: (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <rect x="2" y="5" width="14" height="10" rx="2" stroke="currentColor" strokeWidth="1.3" />
      <path d="M6 5V4a3 3 0 016 0v1" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      <circle cx="9" cy="10.5" r="1.5" fill="currentColor" opacity="0.7" />
    </svg>
  ),
};

type DisputeTypeStepProps = {
  value: CaseType | "";
  onChange: (value: CaseType) => void;
  error?: string;
};

export default function DisputeTypeStep({ value, onChange, error }: DisputeTypeStepProps) {
  const selected = CASE_TYPES.find((c) => c.value === value);

  return (
    <div className="flex flex-col gap-4">
      <div>
        <h2 className="text-base font-semibold text-slate-900">Select case type</h2>
        <p className="mt-0.5 text-xs text-slate-400">Choose the type that best matches your GBP appeal.</p>
      </div>
      <div className="flex flex-col gap-2.5">
        {CASE_TYPES.map((option) => {
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
                name="caseType"
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
                {CASE_ICONS[option.value] ?? (
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
