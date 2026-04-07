import { NextRequest, NextResponse } from "next/server";
import { CaseData } from "@/types/case";
import { generatePdfBuffer } from "@/lib/pdf-builder";

export async function POST(request: NextRequest) {
  try {
    // The client sends the full caseData JSON, including base64-encoded file
    // content in each evidenceFiles[i].data field. No multipart parsing needed.
    const data: CaseData = await request.json();

    const pdfBuffer = await generatePdfBuffer(data);

    return new NextResponse(new Uint8Array(pdfBuffer), {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": 'attachment; filename="proofpack-evidence.pdf"',
      },
    });
  } catch (err) {
    console.error("[api/export-pdf] PDF generation failed:", err);
    return new NextResponse("PDF generation failed", { status: 500 });
  }
}
