// Minimal GA4 event helper for AppealKit.
// Sends a gtag event only when window.gtag is available (i.e. when
// NEXT_PUBLIC_GA_MEASUREMENT_ID is set and the GA script has loaded).
//
// Usage:
//   import { trackEvent } from "@/lib/analytics";
//   trackEvent("landing_cta_clicked", { page_location: "/" });
//
// Core funnel events fired from:
//   landing_cta_clicked  — src/components/ui/LandingCtaLink.tsx
//   builder_started      — src/components/forms/CaseForm.tsx (step 0 → step 1)
//   review_reached       — src/app/review/page.tsx (on mount with data)
//   checkout_started     — src/app/export/page.tsx (handlePay)
//   payment_success      — src/app/export/page.tsx (after verify-payment confirms paid)
//   pdf_downloaded       — src/app/export/page.tsx (after PDF blob download)

type EventParams = Record<string, string | number | boolean | undefined>;

export function trackEvent(name: string, params?: EventParams): void {
  if (typeof window === "undefined") return;
  const w = window as Window & { gtag?: (...args: unknown[]) => void };
  if (typeof w.gtag !== "function") return;
  w.gtag("event", name, params);
}
