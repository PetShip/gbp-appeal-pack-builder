"use client";

// Loads Google Analytics 4 only when:
//   1. NEXT_PUBLIC_GA_MEASUREMENT_ID is set, AND
//   2. The user has accepted analytics via the ConsentBanner.
//
// Listens for the "ak_consent_updated" event so it reacts to consent being
// granted on the current page without requiring a navigation/reload.
import Script from "next/script";
import { useEffect, useState } from "react";
import { getAnalyticsConsent } from "@/components/ConsentBanner";

const GA_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

export default function GoogleAnalytics() {
  const [consented, setConsented] = useState(() =>
    typeof window !== "undefined" && getAnalyticsConsent() === "accepted"
  );

  useEffect(() => {
    const check = () => setConsented(getAnalyticsConsent() === "accepted");
    window.addEventListener("ak_consent_updated", check);
    return () => window.removeEventListener("ak_consent_updated", check);
  }, []);

  if (!GA_ID || !consented) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="ga4-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}');
        `}
      </Script>
    </>
  );
}
