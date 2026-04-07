export function formatSize(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(0)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

// Practical upload limits (raw file bytes, before base64 encoding adds ~33% overhead).
// The Vercel serverless body limit is 4.5 MB for the entire request (JSON + case data).
// These thresholds are intentionally approximate — the actual safe limit is slightly
// lower because the JSON envelope and case text fields also count toward the total.
export const FILE_SIZE_WARN_BYTES = 4 * 1024 * 1024;    // 4 MB  — caution
export const FILE_SIZE_MAX_BYTES  = 4.5 * 1024 * 1024;  // 4.5 MB — likely to fail
