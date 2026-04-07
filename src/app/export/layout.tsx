import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Export Your Evidence Pack",
  description: "Download your structured chargeback evidence pack as a PDF, ready to submit with your Stripe dispute.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function ExportLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
