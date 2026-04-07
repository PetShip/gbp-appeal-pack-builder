// Core data types for a chargeback dispute case

export type DisputeType =
  | "unauthorized"
  | "service_not_received"
  | "subscription_canceled"
  | "product_not_as_described"
  | "other";

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

export type TimelineItem = {
  date: string;
  title: string;
  description: string;
};

export type CaseData = {
  // Step 1
  disputeType: DisputeType;

  // Step 2 – case basics
  customerName: string;
  customerEmail?: string;
  orderDate: string;
  amount: string;
  currency: string;
  productName: string;

  // Step 3 – description and evidence
  productDescription: string;
  fulfillmentDetails: string;
  customerCommunication: string;
  additionalNotes: string;

  timelineItems: TimelineItem[];
  evidenceFiles: EvidenceFile[];
};
