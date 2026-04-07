import { DisputeType } from "@/types/case";

export type DisputeTypeOption = {
  value: DisputeType;
  label: string;
  description: string;
  guidance: string;
};

export const DISPUTE_TYPES: DisputeTypeOption[] = [
  {
    value: "unauthorized",
    label: "Unauthorized transaction",
    description: "The customer claims they did not authorize the charge.",
    guidance:
      "Focus on proving the charge was authorized: login records, prior purchases from the same account, device or IP data, and any usage of the product after the charge date.",
  },
  {
    value: "service_not_received",
    label: "Service not received",
    description: "The customer claims they did not receive the service or product.",
    guidance:
      "Provide proof that the product or service was made available: access confirmation emails, login history, delivery records, or screenshots showing the customer's account was active.",
  },
  {
    value: "subscription_canceled",
    label: "Subscription canceled / not recognized",
    description: "The customer claims the subscription was canceled or they don't recognize it.",
    guidance:
      "Show the subscription history, original sign-up date, and any communication about cancellation. If no cancellation was processed before the charge, document that clearly.",
  },
  {
    value: "product_not_as_described",
    label: "Product not as described",
    description: "The customer claims the product did not match the description.",
    guidance:
      "Compare what was advertised with what was delivered. Include the product listing as it appeared at purchase time. Address each specific claim the customer made with documented evidence.",
  },
  {
    value: "other",
    label: "Other / Custom dispute",
    description: "For dispute situations that do not clearly match the standard categories.",
    guidance:
      "Focus on presenting a clear timeline, relevant documents, and your strongest supporting proof. Explain the nature of the dispute briefly and address each claim directly.",
  },
];

export function getDisputeTypeLabel(value: DisputeType): string {
  return DISPUTE_TYPES.find((d) => d.value === value)?.label ?? value;
}

export function getDisputeTypeGuidance(value: DisputeType): string {
  return DISPUTE_TYPES.find((d) => d.value === value)?.guidance ?? "";
}

