import { CaseType } from "@/types/case";

export type CaseTypeOption = {
  value: CaseType;
  label: string;
  description: string;
  guidance: string;
  uploadHints: string[];
};

export const CASE_TYPES: CaseTypeOption[] = [
  {
    value: "documentation_mismatch",
    label: "Documentation mismatch",
    description: "The business name, address, or category on the GBP profile does not match official records.",
    guidance:
      "Gather official documents (business license, utility bills, tax records) that confirm the correct business details. Highlight the specific fields that differ between your profile and official records.",
    uploadHints: [
      "Business license or registration certificate showing the correct name and address",
      "Utility bills or bank statements addressed to the business at the official address",
      "Tax records confirming the business name, category, or location",
      "Screenshots of the GBP profile highlighting the specific mismatched fields",
    ],
  },
  {
    value: "business_legitimacy_proof",
    label: "Business legitimacy proof",
    description: "Google requires proof that the business is real, operating, and eligible for a GBP listing.",
    guidance:
      "Provide evidence of active business operations: recent invoices, photos of the physical location, a government-issued business registration, or customer-facing materials that confirm the business exists and serves customers.",
    uploadHints: [
      "Government-issued business registration or certificate of incorporation",
      "Recent customer-facing invoices or receipts showing active operations",
      "Photos of the physical business location (storefront, signage, interior)",
      "Website or social media presence confirming the business identity",
    ],
  },
  {
    value: "profile_information_cleanup",
    label: "Profile information cleanup",
    description: "The GBP profile contains outdated, inaccurate, or duplicate information that needs correction.",
    guidance:
      "Document what information is incorrect and provide supporting materials that show the accurate current details — such as updated address records, rebranding documentation, or a corrected phone number with supporting evidence.",
    uploadHints: [
      "Documents confirming the current correct business name, address, or phone number",
      "Rebranding materials (e.g. new logo, updated letterhead) if applicable",
      "Comparison screenshots showing the incorrect profile data vs. official records",
      "Any prior correspondence with Google support about the issue",
    ],
  },
  {
    value: "restricted_or_disabled_profile",
    label: "Restricted or disabled profile",
    description: "The GBP profile has been suspended, restricted, or disabled and requires reinstatement.",
    guidance:
      "Explain why the profile should be reinstated and address the likely reason for the restriction. Include proof of compliance with Google's guidelines, evidence of a legitimate business presence, and any corrective actions taken.",
    uploadHints: [
      "Proof of a legitimate, active business at the listed location",
      "Government-issued business registration or license",
      "Recent invoices, receipts, or operational records confirming activity",
      "Documentation of any corrective actions taken to comply with Google's guidelines",
    ],
  },
];

export function getCaseTypeLabel(value: CaseType): string {
  return CASE_TYPES.find((c) => c.value === value)?.label ?? value;
}

export function getCaseTypeGuidance(value: CaseType): string {
  return CASE_TYPES.find((c) => c.value === value)?.guidance ?? "";
}

export function getCaseTypeUploadHints(value: CaseType): string[] {
  return CASE_TYPES.find((c) => c.value === value)?.uploadHints ?? [];
}

