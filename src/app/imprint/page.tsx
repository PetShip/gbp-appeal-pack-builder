import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Imprint | AppealKit",
  description:
    "Legal information and company details for AppealKit (appealkit.pro).",
  alternates: {
    canonical: "https://appealkit.pro/imprint",
  },
  robots: {
    index: true,
    follow: false,
  },
};

export default function ImprintPage() {
  return (
    <div className="flex flex-col gap-10 max-w-2xl">
      {/* Header */}
      <div className="flex flex-col gap-3">
        <p className="text-sm font-semibold tracking-widest text-emerald-600 uppercase">
          AppealKit
        </p>
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">Imprint</h1>
        <p className="text-base text-slate-500 leading-relaxed max-w-xl">
          Legal information about the operator of appealkit.pro in accordance with applicable
          disclosure requirements.
        </p>
      </div>

      {/* Sections */}

        <section className="flex flex-col gap-3">
          <h2 className="text-base font-semibold text-slate-900">Company Address</h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            AppealKit<br />
            Dorfstrasse 21a<br />
            6800 Feldkirch<br />
            AUSTRIA
          </p>
        </section>

        <section className="flex flex-col gap-3">
          <h2 className="text-base font-semibold text-slate-900">Contact</h2>
          <p>
            Email:{" "}
            <a
              href="mailto:support@appealkit.pro"
              className="text-emerald-600 hover:text-emerald-700"
            >
              support@appealkit.pro
            </a>
          </p>
          <p>
            Website:{" "}
            <a
              href="https://appealkit.pro"
              className="text-emerald-600 hover:text-emerald-700"
            >
              appealkit.pro
            </a>
          </p>
        </section>

        <section className="flex flex-col gap-3">
          <h2 className="text-base font-semibold text-slate-900">Disclaimer</h2>
          <p>
            The content on appealkit.pro is provided for general informational purposes only.
            AppealKit is a document-structuring tool and does not provide legal advice. AppealKit
            does not submit appeals to Google on your behalf and makes no guarantee regarding
            Google Business Profile reinstatement outcomes. Reinstatement decisions are made
            solely by Google.
          </p>
          <p className="mt-2">
            AppealKit is not affiliated with Google LLC. References to Google Business Profile
            are for descriptive purposes only.
          </p>
        </section>

      {/* Nav */}
      <div className="pt-4 border-t border-slate-200">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-sm text-slate-500 hover:text-slate-700"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
            <path
              d="M11 7H3M6 4L3 7l3 3"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Back to AppealKit
        </Link>
      </div>
    </div>
  );
}
