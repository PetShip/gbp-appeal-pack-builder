"use client";

import Link from "next/link";
import { trackEvent } from "@/lib/analytics";

/**
 * Primary landing-page CTA link.
 * Fires `landing_cta_clicked` before navigating to /builder.
 */
export default function LandingCtaLink({
  className,
  children,
}: {
  className: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href="/builder"
      className={className}
      onClick={() => trackEvent("landing_cta_clicked", { page_location: "/" })}
    >
      {children}
    </Link>
  );
}
