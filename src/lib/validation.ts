import { CaseData } from "@/types/case";

export type ValidationResult = {
  valid: boolean;
  errors: Partial<Record<keyof CaseData, string>>;
};

const FIELD_ERROR_MESSAGES: Partial<Record<keyof CaseData, string>> = {
  disputeType: "Please select a dispute type.",
  customerName: "Customer name is required.",
  orderDate: "Order date is required.",
  amount: "Enter the disputed amount.",
  currency: "Currency is required (e.g. USD).",
  productName: "Product name is required.",
  productDescription: "Product description is required.",
  fulfillmentDetails: "Fulfillment details are required.",
};

function isEmpty(value: unknown): boolean {
  return !value || (typeof value === "string" && value.trim() === "");
}

function buildResult(errors: Partial<Record<keyof CaseData, string>>): ValidationResult {
  return { valid: Object.keys(errors).length === 0, errors };
}

/** Step 0 — dispute type selection */
export function validateStep0(data: Partial<CaseData>): ValidationResult {
  const errors: Partial<Record<keyof CaseData, string>> = {};
  if (isEmpty(data.disputeType)) {
    errors.disputeType = FIELD_ERROR_MESSAGES.disputeType ?? "Please select a dispute type.";
  }
  return buildResult(errors);
}

/** Step 1 — case basics */
export function validateStep1(data: Partial<CaseData>): ValidationResult {
  const errors: Partial<Record<keyof CaseData, string>> = {};
  const step1Fields: (keyof CaseData)[] = ["customerName", "orderDate", "amount", "currency", "productName"];
  for (const field of step1Fields) {
    if (isEmpty(data[field])) {
      errors[field] = FIELD_ERROR_MESSAGES[field] ?? "This field is required.";
    }
  }
  return buildResult(errors);
}

/** Step 2 — description and evidence */
export function validateStep2(data: Partial<CaseData>): ValidationResult {
  const errors: Partial<Record<keyof CaseData, string>> = {};
  const step2Fields: (keyof CaseData)[] = ["productDescription", "fulfillmentDetails"];
  for (const field of step2Fields) {
    if (isEmpty(data[field])) {
      errors[field] = FIELD_ERROR_MESSAGES[field] ?? "This field is required.";
    }
  }
  return buildResult(errors);
}

/** Full validation (all required fields) — used at final confirm step */
export function validateCase(data: Partial<CaseData>): ValidationResult {
  const r0 = validateStep0(data);
  const r1 = validateStep1(data);
  const r2 = validateStep2(data);
  const errors = { ...r0.errors, ...r1.errors, ...r2.errors };
  return buildResult(errors);
}
