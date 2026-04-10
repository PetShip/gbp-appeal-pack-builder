"use client";

import { useEffect, useState } from "react";

const CONSENT_KEY = "ak_analytics_consent";
const CONSENT_EVENT = "ak_consent_updated";

/** Reads and writes the analytics consent choice stored in localStorage. */
export function getAnalyticsConsent(): "accepted" | "declined" | null {
  if (typeof window === "undefined") return null;
  const v = localStorage.getItem(CONSENT_KEY);
  if (v === "accepted" || v === "declined") return v;
  return null;
}

function setAnalyticsConsent(value: "accepted" | "declined") {
  localStorage.setItem(CONSENT_KEY, value);
  window.dispatchEvent(new Event(CONSENT_EVENT));
}

/**
 * Lightweight analytics consent banner.
 * Shown once on first visit when no choice has been stored.
 * Stores the choice in localStorage and dispatches CONSENT_EVENT
 * so the GoogleAnalytics component can react without a page reload.
 */
export default function ConsentBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (getAnalyticsConsent() === null) {
      setVisible(true);
    }
  }, []);

  if (!visible) return null;

  function accept() {
    setAnalyticsConsent("accepted");
    setVisible(false);
  }

  function decline() {
    setAnalyticsConsent("declined");
    setVisible(false);
  }

  return (
    <div
      role="dialog"
      aria-label="Analytics consent"
      className="fixed bottom-0 inset-x-0 z-50 border-t border-slate-200 bg-white shadow-lg"
    >
      <div className="mx-auto flex max-w-3xl flex-col gap-3 px-6 py-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-slate-600 leading-relaxed">
          AppealKit uses Google Analytics to understand how the product is used and to improve the
          service.{" "}
          <a
            href="/privacy"
            className="underline underline-offset-2 hover:text-slate-900 transition-colors"
          >
            Privacy policy
          </a>
        </p>
        <div className="flex shrink-0 items-center gap-3">
          <button
            onClick={decline}
            className="rounded-md px-3 py-1.5 text-sm text-slate-500 hover:bg-slate-100 hover:text-slate-900 transition-colors"
          >
            Decline
          </button>
          <button
            onClick={accept}
            className="rounded-md bg-emerald-600 px-4 py-1.5 text-sm font-medium text-white hover:bg-emerald-700 transition-colors"
          >
            Accept analytics
          </button>
        </div>
      </div>
    </div>
  );
}
