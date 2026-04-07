import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  // PDFKit reads .afm font files from disk at runtime via Node.js `fs`.
  // Prevent Next.js from bundling it so the native require keeps filesystem access.
  serverExternalPackages: ["pdfkit"],
  // Ensure Vercel's file-tracer includes the PDFKit font data files
  // (*.afm, *.icc) in the serverless function bundle.
  outputFileTracingIncludes: {
    "/api/export-pdf": ["./node_modules/pdfkit/js/data/**/*"],
  },
};

export default nextConfig;
