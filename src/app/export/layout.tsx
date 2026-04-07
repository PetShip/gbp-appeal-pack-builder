import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Export Your Appeal Pack",
  description: "Download your structured GBP appeal pack as a PDF, ready to submit with your Google Business Profile reinstatement request.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function ExportLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
