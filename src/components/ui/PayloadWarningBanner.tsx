import { formatMB, PAYLOAD_WARN_BYTES } from "@/lib/payload-size";

type Props = {
  payloadBytes: number;
};

/**
 * Shows a warning banner when the estimated export payload exceeds the
 * recommended limit. Returns null when the payload is within bounds.
 */
export default function PayloadWarningBanner({ payloadBytes }: Props) {
  if (payloadBytes <= PAYLOAD_WARN_BYTES) return null;

  return (
    <div className="flex items-start gap-3 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3.5 text-sm text-amber-800">
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        aria-hidden="true"
        className="mt-0.5 shrink-0"
      >
        <path
          d="M8 2L1.5 14h13L8 2z"
          stroke="currentColor"
          strokeWidth="1.3"
          strokeLinejoin="round"
        />
        <path
          d="M8 7v3M8 12h.01"
          stroke="currentColor"
          strokeWidth="1.3"
          strokeLinecap="round"
        />
      </svg>
      <div>
        <span className="font-semibold">Large payload warning: </span>
        The estimated export size is {formatMB(payloadBytes)}, which exceeds the 4 MB recommended
        limit. The export may fail. Try removing some uploaded files before exporting.
      </div>
    </div>
  );
}

