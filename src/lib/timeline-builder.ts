import { CaseData } from "@/types/case";

export type TimelineItem = {
  date: string;
  title: string;
  description: string;
};

// Derive a minimal timeline from GBP appeal case inputs.
export function buildTimeline(data: Partial<CaseData>): TimelineItem[] {
  const items: TimelineItem[] = [];

  if (data.issueDetectedDate) {
    items.push({
      date: data.issueDetectedDate,
      title: "Issue detected",
      description: `Issue identified on GBP profile for: ${data.businessName ?? ""}`.trim(),
    });
  }

  if (data.issueDescription) {
    items.push({
      date: data.issueDetectedDate ?? "",
      title: "Issue description",
      description: data.issueDescription,
    });
  }

  // Append any manually added consistency items as timeline entries
  if (data.consistencyItems && data.consistencyItems.length > 0) {
    for (const item of data.consistencyItems) {
      items.push({
        date: "",
        title: `Inconsistency: ${item.field}`,
        description: `Official: ${item.officialValue} — Profile: ${item.profileValue}`,
      });
    }
  }

  return items;
}
