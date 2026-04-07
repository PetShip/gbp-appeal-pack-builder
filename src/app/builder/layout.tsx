import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Build Your Appeal Pack",
  description:
    "Build a structured GBP appeal pack for your Google Business Profile reinstatement request. No login required — complete your pack in one session.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function BuilderLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
