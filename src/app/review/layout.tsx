import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Review Your Appeal Pack",
  description: "Review the generated structure of your GBP appeal pack before exporting to PDF.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function ReviewLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
