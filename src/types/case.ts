// Core data types for a GBP Appeal Pack Builder case

export type CaseType =
  | "documentation_mismatch"
  | "business_legitimacy_proof"
  | "profile_information_cleanup"
  | "restricted_or_disabled_profile";

export type EvidenceFile = {
  name: string;
  type: string;
  size: number;
  /**
   * Base64-encoded file content (no data-URL prefix).
   * Populated client-side by FileUpload at file-selection time using the
   * FileReader API. Stored in sessionStorage as part of caseData and sent to
   * the server in the JSON request body so the PDF builder can embed the file.
   */
  data?: string;
};

export type ConsistencyItem = {
  field: string;
  officialValue: string;
  profileValue: string;
};

export type CaseData = {
  // Step 0 – case type
  caseType: CaseType;

  // Step 1 – case basics
  businessName: string;
  businessAddress: string;
  primaryCategory: string;
  website?: string;
  issueDetectedDate?: string;

  // Step 2 – description and evidence
  issueDescription: string;
  profileName: string;
  profileAddress: string;
  businessOperationDescription: string;
  additionalNotes?: string;

  evidenceFiles: EvidenceFile[];
  consistencyItems?: ConsistencyItem[];
};
