import { CaseData } from "@/types/case";

/**
 * Vercel serverless functions enforce a 4.5 MB request body limit.
 * We warn at 4 MB to leave a small buffer.
 */
export const PAYLOAD_WARN_BYTES = 4 * 1024 * 1024; // 4 MB

/**
 * Estimate the JSON payload size for the given case data in bytes.
 *
 * The serialized caseData (JSON.stringify) is the exact bytes sent to
 * /api/export-pdf. Since the file content is base64-encoded ASCII the
 * character count is a reliable byte estimate for all practical inputs.
 */
export function estimatePayloadBytes(caseData: Partial<CaseData>): number {
  return JSON.stringify(caseData).length;
}

/** Format a byte count as a rounded MB string (e.g. "3.8 MB"). */
export function formatMB(bytes: number): string {
  return (bytes / (1024 * 1024)).toFixed(1) + " MB";
}
