import { CaseType } from "@/types/case";

export type CaseTypeOption = {
  value: CaseType;
  label: string;
  description: string;
  guidance: string;
};

export const CASE_TYPES: CaseTypeOption[] = [
  {
    value: "documentation_mismatch",
    label: "Documentation mismatch",
    description: "The business name, address, or category on the GBP profile does not match official records.",
    guidance:
      "Gather official documents (business license, utility bills, tax records) that confirm the correct business details. Highlight the specific fields that differ between your profile and official records.",
  },
  {
    value: "business_legitimacy_proof",
    label: "Business legitimacy proof",
    description: "Google requires proof that the business is real, operating, and eligible for a GBP listing.",
    guidance:
      "Provide evidence of active business operations: recent invoices, photos of the physical location, a government-issued business registration, or customer-facing materials that confirm the business exists and serves customers.",
  },
  {
    value: "profile_information_cleanup",
    label: "Profile information cleanup",
    description: "The GBP profile contains outdated, inaccurate, or duplicate information that needs correction.",
    guidance:
      "Document what information is incorrect and provide supporting materials that show the accurate current details — such as updated address records, rebranding documentation, or a corrected phone number with supporting evidence.",
  },
  {
    value: "restricted_or_disabled_profile",
    label: "Restricted or disabled profile",
    description: "The GBP profile has been suspended, restricted, or disabled and requires reinstatement.",
    guidance:
      "Explain why the profile should be reinstated and address the likely reason for the restriction. Include proof of compliance with Google's guidelines, evidence of a legitimate business presence, and any corrective actions taken.",
  },
];

export function getCaseTypeLabel(value: CaseType): string {
  return CASE_TYPES.find((c) => c.value === value)?.label ?? value;
}

export function getCaseTypeGuidance(value: CaseType): string {
  return CASE_TYPES.find((c) => c.value === value)?.guidance ?? "";
}

