"use client";

import { CaseData, EvidenceFile } from "@/types/case";
import { getCaseTypeGuidance } from "@/lib/dispute-types";
import FileUpload from "@/components/ui/FileUpload";
import Textarea from "@/components/ui/Textarea";
import FieldGuide from "@/components/ui/FieldGuide";

type EvidenceUploadStepProps = {
  data: Partial<CaseData>;
  onChange: (updates: Partial<CaseData>) => void;
  errors?: Partial<Record<keyof CaseData, string>>;
};

const UPLOAD_HINTS: Record<string, string[]> = {
  documentation_mismatch: [
    "Business license or registration certificate showing the correct name and address",
    "Utility bills or bank statements addressed to the business at the official address",
    "Tax records confirming the business name, category, or location",
    "Screenshots of the GBP profile highlighting the specific mismatched fields",
  ],
  business_legitimacy_proof: [
    "Government-issued business registration or certificate of incorporation",
    "Recent customer-facing invoices or receipts showing active operations",
    "Photos of the physical business location (storefront, signage, interior)",
    "Website or social media presence confirming the business identity",
  ],
  profile_information_cleanup: [
    "Documents confirming the current correct business name, address, or phone number",
    "Rebranding materials (e.g. new logo, updated letterhead) if applicable",
    "Comparison screenshots showing the incorrect profile data vs. official records",
    "Any prior correspondence with Google support about the issue",
  ],
  restricted_or_disabled_profile: [
    "Proof of a legitimate, active business at the listed location",
    "Government-issued business registration or license",
    "Recent invoices, receipts, or operational records confirming activity",
    "Documentation of any corrective actions taken to comply with Google's guidelines",
  ],
};

export default function EvidenceUploadStep({ data, onChange, errors = {} }: EvidenceUploadStepProps) {
  const caseGuidance = data.caseType ? getCaseTypeGuidance(data.caseType) : null;
  const uploadHints = data.caseType ? UPLOAD_HINTS[data.caseType] : null;

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h2 className="text-base font-semibold text-slate-900">Description &amp; evidence</h2>
        <p className="mt-0.5 text-xs text-slate-400">* indicates a required field</p>
      </div>

      {/* Case-type-specific guidance banner */}
      {caseGuidance && (
        <div className="flex items-start gap-2.5 rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3.5">
          <svg width="15" height="15" viewBox="0 0 15 15" fill="none" aria-hidden="true" className="mt-0.5 shrink-0 text-emerald-600">
            <circle cx="7.5" cy="7.5" r="6.5" stroke="currentColor" strokeWidth="1.2" />
            <path d="M7.5 6.5v4M7.5 5h.01" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
          </svg>
          <p className="text-xs text-emerald-800 leading-relaxed">
            <span className="font-medium">Evidence tip:</span> {caseGuidance}
          </p>
        </div>
      )}

      <Textarea
        id="issueDescription"
        label="Issue description *"
        helperText="Describe the problem with the GBP profile. Be specific about what is wrong and why it needs to be corrected."
        placeholder="e.g. The business name on the GBP profile shows an old trade name that no longer matches our official registration."
        value={data.issueDescription ?? ""}
        error={errors.issueDescription}
        onChange={(e) => onChange({ issueDescription: e.target.value })}
      />
      <FieldGuide prompts={[
        "What specifically is wrong with the GBP profile?",
        "When did this issue first appear?",
        "What impact is it having on the business?",
      ]} />

      <Textarea
        id="profileName"
        label="Profile name (as it currently appears) *"
        helperText="Enter the business name exactly as it currently shows on the GBP profile."
        placeholder="e.g. Acme Plumbing Services"
        value={data.profileName ?? ""}
        error={errors.profileName}
        onChange={(e) => onChange({ profileName: e.target.value })}
      />

      <Textarea
        id="profileAddress"
        label="Profile address (as it currently appears) *"
        helperText="Enter the address exactly as it currently shows on the GBP profile."
        placeholder="e.g. 456 Old Road, Springfield, IL 62702"
        value={data.profileAddress ?? ""}
        error={errors.profileAddress}
        onChange={(e) => onChange({ profileAddress: e.target.value })}
      />

      <Textarea
        id="businessOperationDescription"
        label="Business operation description *"
        helperText="Describe what the business does, how it operates, and who it serves. This helps establish legitimacy."
        placeholder="e.g. We are a licensed residential plumbing contractor serving Springfield, IL since 2010. We handle installations, repairs, and emergency callouts for homeowners."
        value={data.businessOperationDescription ?? ""}
        error={errors.businessOperationDescription}
        onChange={(e) => onChange({ businessOperationDescription: e.target.value })}
      />
      <FieldGuide prompts={[
        "What does the business do and who does it serve?",
        "How long has it been operating?",
        "Is it a physical location, service-area business, or online?",
      ]} />

      <Textarea
        id="additionalNotes"
        label="Additional notes (optional)"
        helperText="Include any other context that may support your appeal — prior correspondence with Google, unusual circumstances, or relevant background."
        placeholder="e.g. We submitted a reinstatement request in March 2024 but did not receive a response."
        value={data.additionalNotes ?? ""}
        onChange={(e) => onChange({ additionalNotes: e.target.value })}
      />

      <div className="flex flex-col gap-3">
        <FileUpload
          label="Supporting evidence files (optional)"
          helperText="Upload screenshots, official documents, photos, or other files that support your appeal. Accepted: images, PDFs, and other documents."
          files={data.evidenceFiles ?? []}
          onChange={(files: EvidenceFile[]) => onChange({ evidenceFiles: files })}
        />

        {/* Case-type-specific upload hints */}
        {uploadHints && (
          <div className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5">
            <p className="text-xs font-medium text-slate-600 mb-2">Useful files for this case type:</p>
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

