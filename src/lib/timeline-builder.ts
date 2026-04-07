import { CaseData, TimelineItem } from "@/types/case";

// Derive a base timeline from structured case inputs.
// In V1, timeline items are auto-generated from the case data.
export function buildTimeline(data: Partial<CaseData>): TimelineItem[] {
  const items: TimelineItem[] = [];

  if (data.orderDate && data.productName) {
    items.push({
      date: data.orderDate,
      title: "Order / subscription date",
      description: `Customer purchased: ${data.productName}`,
    });
  }

  if (data.fulfillmentDetails) {
    items.push({
      // In V1, fulfillment is assumed to happen on the order date.
      // A dedicated fulfillmentDate field can be added in a later version.
      date: data.orderDate ?? "",
      title: "Fulfillment",
      description: data.fulfillmentDetails,
    });
  }

  if (data.customerCommunication) {
    items.push({
      date: "",
      title: "Customer communication",
      description: data.customerCommunication,
    });
  }

  // Append any manually added items
  if (data.timelineItems) {
    items.push(...data.timelineItems);
  }

  return items;
}
