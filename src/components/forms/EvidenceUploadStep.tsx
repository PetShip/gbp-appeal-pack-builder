"use client";

import { CaseData, EvidenceFile } from "@/types/case";
import { getDisputeTypeGuidance } from "@/lib/dispute-types";
import FileUpload from "@/components/ui/FileUpload";
import Textarea from "@/components/ui/Textarea";
import FieldGuide from "@/components/ui/FieldGuide";

type EvidenceUploadStepProps = {
  data: Partial<CaseData>;
  onChange: (updates: Partial<CaseData>) => void;
  errors?: Partial<Record<keyof CaseData, string>>;
};

const UPLOAD_HINTS: Record<string, string[]> = {
  unauthorized: [
    "Login history or session logs showing the account was accessed from a known device",
    "Prior purchase history from the same card or account",
    "IP address records showing access from the customer's location",
    "Screenshots of the customer's active account or usage",
  ],
  service_not_received: [
    "Access confirmation or activation email sent to the customer",
    "Login records showing the customer accessed the product",
    "Delivery confirmation or access log from your platform",
    "Screenshots of the customer's account showing active state",
  ],
  subscription_canceled: [
    "Subscription history showing the billing date and prior payments",
    "Any cancellation confirmation (or documentation that no cancellation was received)",
    "Email communication showing the customer had access during the billed period",
    "Screenshot of the customer's account status on the charge date",
  ],
  product_not_as_described: [
    "Screenshot of the product listing as it appeared at time of purchase",
    "Evidence of what was actually delivered matching the description",
    "Customer communication showing what specific claims were made",
    "Documentation addressing each point the customer disputed",
  ],
  other: [
    "Documents that directly support your case narrative",
    "Receipts, confirmations, communication records, or screenshots",
    "Any files that address the specific claim being disputed",
  ],
};

export default function EvidenceUploadStep({ data, onChange, errors = {} }: EvidenceUploadStepProps) {
  const disputeGuidance = data.disputeType ? getDisputeTypeGuidance(data.disputeType) : null;
  const uploadHints = data.disputeType ? UPLOAD_HINTS[data.disputeType] : null;

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h2 className="text-base font-semibold text-slate-900">Description &amp; evidence</h2>
        <p className="mt-0.5 text-xs text-slate-400">* indicates a required field</p>
      </div>

      {/* Dispute-specific guidance banner */}
      {disputeGuidance && (
        <div className="flex items-start gap-2.5 rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3.5">
          <svg width="15" height="15" viewBox="0 0 15 15" fill="none" aria-hidden="true" className="mt-0.5 shrink-0 text-emerald-600">
            <circle cx="7.5" cy="7.5" r="6.5" stroke="currentColor" strokeWidth="1.2" />
            <path d="M7.5 6.5v4M7.5 5h.01" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
          </svg>
          <p className="text-xs text-emerald-800 leading-relaxed">
            <span className="font-medium">Evidence tip:</span> {disputeGuidance}
          </p>
        </div>
      )}

      <Textarea
        id="productDescription"
        label="Product description *"
        helperText="Describe what was sold. Include the product name, key features, and what the customer received access to."
        placeholder="e.g. Annual subscription to the Pro Plan, giving full access to all courses and downloads."
        value={data.productDescription ?? ""}
        error={errors.productDescription}
        onChange={(e) => onChange({ productDescription: e.target.value })}
      />
      <FieldGuide prompts={[
        "What exactly was purchased?",
        "What was included — files, access, features, or service?",
        "What was the customer supposed to receive?",
      ]} />

      <Textarea
        id="fulfillmentDetails"
        label="Fulfillment details *"
        helperText="Explain how and when the product or service was delivered. Include dates, delivery methods, or access confirmation."
        placeholder="e.g. Access was granted immediately after payment on 12 Jan 2025 via email confirmation."
        value={data.fulfillmentDetails ?? ""}
        error={errors.fulfillmentDetails}
        onChange={(e) => onChange({ fulfillmentDetails: e.target.value })}
      />
      <FieldGuide prompts={[
        "When and how was the product or service delivered?",
        "What confirms the customer received access or files?",
        "Was access instant, manual, or subscription-based?",
      ]} />

      <Textarea
        id="customerCommunication"
        label="Customer communication (optional)"
        helperText="Summarize any emails, support tickets, or messages exchanged with this customer that are relevant to the dispute."
        placeholder="e.g. Customer contacted support on 15 Jan 2025 requesting a refund. No mention of unauthorized access."
        value={data.customerCommunication ?? ""}
        onChange={(e) => onChange({ customerCommunication: e.target.value })}
      />
      <FieldGuide prompts={[
        "Did the customer acknowledge receipt, complain, or request a cancellation?",
        "Are there email or chat messages that support your timeline?",
      ]} />

      <Textarea
        id="additionalNotes"
        label="Additional notes (optional)"
        helperText="Include anything else relevant to your case — unusual circumstances, policy details, or context for the reviewer."
        placeholder="e.g. Refund policy is clearly stated on checkout page and in the welcome email."
        value={data.additionalNotes ?? ""}
        onChange={(e) => onChange({ additionalNotes: e.target.value })}
      />
      <FieldGuide prompts={[
        "Is there context a reviewer should know that is not obvious from the documents?",
      ]} />

      <div className="flex flex-col gap-3">
        <FileUpload
          label="Supporting evidence files (optional)"
          helperText="Upload screenshots, receipts, email exports, or other files that support your case. Accepted: images, PDFs, and other documents."
          files={data.evidenceFiles ?? []}
          onChange={(files: EvidenceFile[]) => onChange({ evidenceFiles: files })}
        />

        {/* Dispute-specific upload hints */}
        {uploadHints && (
          <div className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5">
            <p className="text-xs font-medium text-slate-600 mb-2">Useful files for this dispute type:</p>
            <ul className="flex flex-col gap-1.5">
              {uploadHints.map((hint) => (
                <li key={hint} className="flex items-start gap-2 text-xs text-slate-500">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true" className="mt-0.5 shrink-0 text-emerald-500">
                    <path d="M2 6l2.5 2.5 5.5-5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {hint}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}


