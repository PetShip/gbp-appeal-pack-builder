import { CaseData } from "@/types/case";
import { getDisputeTypeLabel } from "@/lib/dispute-types";

export type CaseSummary = {
  disputeTypeLabel: string;
  customerName: string;
  customerEmail?: string;
  orderDate: string;
  amount: string;
  currency: string;
  productName: string;
  productDescription: string;
  fulfillmentDetails: string;
  customerCommunication: string;
  additionalNotes: string;
};

// Build a structured summary object from the raw case data.
export function buildSummary(data: Partial<CaseData>): CaseSummary {
  return {
    disputeTypeLabel: data.disputeType ? getDisputeTypeLabel(data.disputeType) : "",
    customerName: data.customerName ?? "",
    customerEmail: data.customerEmail,
    orderDate: data.orderDate ?? "",
    amount: data.amount ?? "",
    currency: data.currency ?? "",
    productName: data.productName ?? "",
    productDescription: data.productDescription ?? "",
    fulfillmentDetails: data.fulfillmentDetails ?? "",
    customerCommunication: data.customerCommunication ?? "",
    additionalNotes: data.additionalNotes ?? "",
  };
}
