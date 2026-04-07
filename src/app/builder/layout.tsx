import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Build Your Evidence Pack",
  description:
    "Build a structured chargeback evidence pack for your Stripe dispute. No login required — complete your pack in one session.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function BuilderLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
