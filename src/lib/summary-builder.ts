import { CaseData } from "@/types/case";
import { getCaseTypeLabel } from "@/lib/dispute-types";

export type CaseSummary = {
  caseTypeLabel: string;
  businessName: string;
  businessAddress: string;
  primaryCategory: string;
  website?: string;
  issueDetectedDate?: string;
  issueDescription: string;
  profileName: string;
  profileAddress: string;
  businessOperationDescription: string;
  additionalNotes?: string;
};

// Build a structured summary object from the raw case data.
export function buildSummary(data: Partial<CaseData>): CaseSummary {
  return {
    caseTypeLabel: data.caseType ? getCaseTypeLabel(data.caseType) : "",
    businessName: data.businessName ?? "",
    businessAddress: data.businessAddress ?? "",
    primaryCategory: data.primaryCategory ?? "",
    website: data.website,
    issueDetectedDate: data.issueDetectedDate,
    issueDescription: data.issueDescription ?? "",
    profileName: data.profileName ?? "",
    profileAddress: data.profileAddress ?? "",
    businessOperationDescription: data.businessOperationDescription ?? "",
    additionalNotes: data.additionalNotes,
  };
}
