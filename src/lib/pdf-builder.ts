import PDFDocument from "pdfkit";
import { PDFDocument as PdfLib } from "pdf-lib";
import { CaseData } from "@/types/case";
import { buildSummary } from "@/lib/summary-builder";
import { buildTimeline } from "@/lib/timeline-builder";

/** MIME types that PDFKit can render inline as images (JPEG and PNG only). */
const INLINE_IMAGE_TYPES = new Set(["image/jpeg", "image/jpg", "image/png"]);

/** Maximum height (in points) for an inline image scaled to fit the content width. */
const MAX_IMAGE_HEIGHT = 400;

/**
 * Generate the main evidence doc with PDFKit, then use pdf-lib to append any
 * uploaded PDF files as real pages so every PDF viewer shows them.
 */
export async function generatePdfBuffer(data: CaseData): Promise<Buffer> {
  const summary = buildSummary(data);
  const timeline = buildTimeline(data);

  // ── Step 1: build the main evidence doc with PDFKit ──────────────────────
  const mainBuffer = await new Promise<Buffer>((resolve, reject) => {
    const doc = new PDFDocument({ margin: 50 });
    const chunks: Buffer[] = [];

    doc.on("data", (chunk: Buffer) => chunks.push(chunk));
    doc.on("end", () => resolve(Buffer.concat(chunks)));
    doc.on("error", reject);

    // Title — business name and case type as primary identity
    const docTitle = summary.businessName
      ? `${summary.businessName} — GBP Appeal Pack`
      : "GBP Appeal Pack";
    doc
      .fontSize(18)
      .font("Helvetica-Bold")
      .text(docTitle, { align: "center" });

    if (summary.caseTypeLabel) {
      doc
        .moveDown(0.4)
        .fontSize(10)
        .font("Helvetica")
        .fillColor("#555555")
        .text(summary.caseTypeLabel, { align: "center" })
        .fillColor("#000000");
    }
    doc.moveDown(1.5);

    // ── Case Summary ────────────────────────────────────────────────────────
    doc.fontSize(14).font("Helvetica-Bold").text("Case Summary");
    doc.moveTo(50, doc.y).lineTo(doc.page.width - 50, doc.y).stroke();
    doc.moveDown(0.5);

    const summaryFields: [string, string | undefined][] = [
      ["Case type", summary.caseTypeLabel],
      ["Business name", summary.businessName],
      ["Business address", summary.businessAddress],
      ["Primary category", summary.primaryCategory],
      ["Website", summary.website],
      ["Issue detected", summary.issueDetectedDate],
      ["Issue description", summary.issueDescription],
      ["Profile name (current)", summary.profileName],
      ["Profile address (current)", summary.profileAddress],
      ["Business operations", summary.businessOperationDescription],
      ["Additional notes", summary.additionalNotes],
    ];

    doc.fontSize(10).font("Helvetica");
    for (const [label, value] of summaryFields) {
      if (!value) continue;
      doc.font("Helvetica-Bold").text(`${label}:`, { continued: true });
      doc.font("Helvetica").text(` ${value}`);
      doc.moveDown(0.3);
    }

    doc.moveDown(1);

    // ── Appeal Timeline ─────────────────────────────────────────────────────
    doc.fontSize(14).font("Helvetica-Bold").text("Appeal Timeline");
    doc.moveTo(50, doc.y).lineTo(doc.page.width - 50, doc.y).stroke();
    doc.moveDown(0.5);

    if (timeline.length === 0) {
      doc.fontSize(10).font("Helvetica").text("No timeline entries.");
    } else {
      for (const item of timeline) {
        doc.fontSize(10).font("Helvetica-Bold").text(item.title, { continued: !!item.date });
        if (item.date) {
          doc.font("Helvetica").text(`  —  ${item.date}`);
        } else {
          doc.moveDown(0);
        }
        doc.font("Helvetica").text(item.description, { indent: 10 });
        doc.moveDown(0.5);
      }
    }

    doc.moveDown(1);

    // ── Supporting Documents ────────────────────────────────────────────────
    doc.fontSize(14).font("Helvetica-Bold").text("Supporting Documents");
    doc.moveTo(50, doc.y).lineTo(doc.page.width - 50, doc.y).stroke();
    doc.moveDown(0.5);

    if (!data.evidenceFiles || data.evidenceFiles.length === 0) {
      doc.fontSize(10).font("Helvetica").text("No files uploaded.");
    } else {
      const contentWidth = doc.page.width - doc.page.margins.left - doc.page.margins.right;

      data.evidenceFiles.forEach((file, index) => {
        const sizeKb = (file.size / 1024).toFixed(1);
        const hasData = !!(file.data && file.data.length > 0);

        // File heading
        doc
          .fontSize(10)
          .font("Helvetica-Bold")
          .text(`${index + 1}. ${file.name}`, { continued: true });
        doc
          .font("Helvetica")
          .fillColor("#555555")
          .text(`  (${file.type}, ${sizeKb} KB)`)
          .fillColor("#000000");

        if (!hasData) {
          doc
            .fontSize(9)
            .font("Helvetica")
            .fillColor("#cc0000")
            .text("  (File content not available — re-upload and export again)")
            .fillColor("#000000");
          doc.moveDown(0.8);
          return;
        }

        const fileBuffer = Buffer.from(file.data!, "base64");

        if (INLINE_IMAGE_TYPES.has(file.type)) {
          // ── Images: render inline ─────────────────────────────────────────
          try {
            doc.moveDown(0.3);
            doc.image(fileBuffer, { fit: [contentWidth, MAX_IMAGE_HEIGHT] });
          } catch (imgErr) {
            console.error(`[pdf-builder] Failed to render image "${file.name}":`, imgErr);
            doc
              .fontSize(9)
              .font("Helvetica")
              .fillColor("#cc0000")
              .text("  (Could not render image — unsupported format)")
              .fillColor("#000000");
          }
        } else if (file.type === "application/pdf") {
          // ── PDFs: pages will be appended after the main doc ───────────────
          doc
            .fontSize(9)
            .font("Helvetica")
            .fillColor("#374151")
            .text("  Pages appended at the end of this document.", { indent: 10 })
            .fillColor("#000000");
        } else {
          // ── Other files: note that they cannot be rendered inline ─────────
          doc
            .fontSize(9)
            .font("Helvetica")
            .fillColor("#374151")
            .text(`  File attached (${file.type} — cannot be rendered inline).`, { indent: 10 })
            .fillColor("#000000");
          try {
            doc.file(fileBuffer, { name: file.name, description: file.name });
          } catch (attachErr) {
            console.error(`[pdf-builder] doc.file() failed for "${file.name}":`, attachErr);
          }
        }

        doc.moveDown(0.8);
      });
    }

    // ── Attribution footer ──────────────────────────────────────────────────
    doc.moveDown(2);
    doc
      .fontSize(8)
      .font("Helvetica")
      .fillColor("#aaaaaa")
      .text("Created with ProofPack · proofpack.pro", { align: "center" })
      .fillColor("#000000");

    doc.end();
  });

  // ── Step 2: use pdf-lib to append PDF attachment pages ───────────────────
  const pdfAttachments = (data.evidenceFiles ?? []).filter(
    (f) => f.type === "application/pdf" && f.data && f.data.length > 0
  );

  if (pdfAttachments.length === 0) {
    // No PDF attachments — return the main doc unchanged.
    return mainBuffer;
  }

  const merged = await PdfLib.load(mainBuffer);

  for (const file of pdfAttachments) {
    try {
      const attachmentBuffer = Buffer.from(file.data!, "base64");

      // Check whether the uploaded PDF is encrypted before loading it.
      // We do not have the password, so we cannot decrypt it — but we still
      // attempt to copy the visible pages that pdf-lib can access. Setting
      // ignoreEncryption prevents an immediate throw; pages that cannot be
      // decrypted will simply be blank/empty in the merged output.
      let attachmentDoc;
      try {
        attachmentDoc = await PdfLib.load(attachmentBuffer);
      } catch {
        attachmentDoc = await PdfLib.load(attachmentBuffer, { ignoreEncryption: true });
      }

      const pageCount = attachmentDoc.getPageCount();
      const pageIndices = Array.from({ length: pageCount }, (_, i) => i);
      const copiedPages = await merged.copyPages(attachmentDoc, pageIndices);
      for (const page of copiedPages) {
        merged.addPage(page);
      }
    } catch (mergeErr) {
      console.error(`[pdf-builder] Failed to merge "${file.name}":`, mergeErr);
      // Continue with remaining attachments; do not abort the whole export.
    }
  }

  const mergedBytes = await merged.save();
  return Buffer.from(mergedBytes);
}
