import type { Metadata } from "next";
import Link from "next/link";
import PageIllustration from "@/components/ui/PageIllustration";
import AccordionItem from "@/components/ui/AccordionItem";

export const metadata: Metadata = {
  title: "AppealKit — Google Business Profile Reinstatement Appeal Builder",
  description:
    "Build a clean, structured appeal pack for your suspended or restricted Google Business Profile. AppealKit guides you through the inputs, organises your documents, and exports a ready-to-use PDF. $4.99 one-time.",
  alternates: {
    canonical: "https://appealkit.pro",
  },
  openGraph: {
    title: "AppealKit — Google Business Profile Reinstatement Appeal Builder",
    description:
      "Turn scattered business details and supporting documents into a structured GBP reinstatement appeal pack. No login. No stored data. $4.99 one-time.",
    url: "https://appealkit.pro",
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
  },
};

const HOW_IT_WORKS = [
  {
    step: "1",
    title: "Select your appeal type",
    description:
      "Choose the category that fits your situation: documentation mismatch, business legitimacy proof, profile information cleanup, or restricted/disabled profile.",
  },
  {
    step: "2",
    title: "Enter your business and profile details",
    description:
      "Fill in structured fields for your business information, GBP profile details, and a summary of the suspension or restriction context.",
  },
  {
    step: "3",
    title: "Upload supporting documents",
    description:
      "Attach business licenses, utility bills, photos, registration certificates, or any other files that support your case.",
  },
  {
    step: "4",
    title: "Review and export your appeal pack",
    description:
      "Review the complete case summary, then pay a one-time $4.99 fee and download a structured PDF — organised and ready to use with your reinstatement request.",
  },
];

const WHAT_GOES_IN = [
  {
    title: "Business and profile summary",
    description:
      "Business name, address, category, and GBP profile details structured in a clear, readable layout.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
        <rect x="2" y="2" width="14" height="14" rx="2.5" stroke="currentColor" strokeWidth="1.3" />
        <path d="M5 6h8M5 9h5M5 12h6" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Appeal type and case context",
    description:
      "The specific appeal category, a description of the issue, and any corrective actions taken — written in your own words.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
        <circle cx="9" cy="9" r="7" stroke="currentColor" strokeWidth="1.3" />
        <path d="M9 8v4M9 6h.01" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Supporting document list",
    description:
      "All uploaded files are labelled and indexed. Images are rendered inline; PDFs are appended as additional pages.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
        <path d="M10 2H5a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7L10 2z" stroke="currentColor" strokeWidth="1.3" />
        <path d="M10 2v5h5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" opacity="0.6" />
      </svg>
    ),
  },
  {
    title: "Profile consistency overview",
    description:
      "A structured section highlighting where your official records align with your GBP profile — useful for documentation mismatch cases.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
        <rect x="2" y="5" width="14" height="10" rx="2" stroke="currentColor" strokeWidth="1.3" />
        <path d="M5 5V4a4 4 0 018 0v1" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      </svg>
    ),
  },
];

const TRUST_POINTS = [
  {
    title: "No login required",
    description:
      "Start building immediately. No account, no signup form, no email confirmation needed.",
  },
  {
    title: "No data stored",
    description:
      "Everything runs in your browser session. Nothing is saved to a server or database. Your case information stays private.",
  },
  {
    title: "Structured, not generic",
    description:
      "The builder guides you through fields specific to GBP suspension cases — not a blank form or a generic template.",
  },
  {
    title: "Built for GBP appeal preparation",
    description:
      "The inputs, prompts, and export format are designed around what a GBP reinstatement request typically requires.",
  },
];

const FOR_WHO = [
  "Small and mid-sized businesses with a suspended GBP listing",
  "Local service businesses handling their own reinstatement",
  "Business owners managing a restricted or disabled profile",
  "Agencies preparing appeal documentation for a client",
];

const NOT_FOR = [
  "Businesses that need legal representation",
  "Cases requiring direct submission to Google (AppealKit does not submit on your behalf)",
  "Businesses needing a stored account or multi-session workflow",
];

const CASE_TYPES = [
  {
    title: "Documentation mismatch",
    description:
      "The business name, address, or category on the GBP profile does not match official records. Use this type to organise supporting documents that confirm the correct details.",
  },
  {
    title: "Business legitimacy proof",
    description:
      "Google requires proof that the business is real, operating, and eligible for a GBP listing. Use this type to gather registration records, operational evidence, and photos.",
  },
  {
    title: "Profile information cleanup",
    description:
      "The GBP profile contains outdated, inaccurate, or duplicate information that needs correction. Use this type to document what is wrong and provide the correct current details.",
  },
  {
    title: "Restricted or disabled profile",
    description:
      "The GBP profile has been suspended, restricted, or disabled and requires reinstatement. Use this type to document compliance, business legitimacy, and any corrective actions taken.",
  },
];

const FAQ_ITEMS = [
  {
    q: "What is AppealKit?",
    a: "AppealKit is a focused web utility that helps local businesses build a structured appeal pack for a suspended or restricted Google Business Profile. You enter your business details and supporting context, upload documents, and download a clean PDF — organised and ready to use with your reinstatement request.",
  },
  {
    q: "Does AppealKit guarantee reinstatement?",
    a: "No. AppealKit helps you organise and present your information clearly — it does not predict, influence, or guarantee reinstatement outcomes. Whether your appeal is successful depends on your specific case, the evidence you provide, and Google's review process. AppealKit is a structuring tool, not legal advice.",
  },
  {
    q: "Does AppealKit submit the appeal to Google?",
    a: "No. AppealKit produces a structured PDF pack that you can use as part of your own reinstatement request. You submit your appeal directly through Google's own process. AppealKit has no integration with Google.",
  },
  {
    q: "Do I need to create an account?",
    a: "No. AppealKit requires no login or signup. You start building immediately and the entire session runs in your browser.",
  },
  {
    q: "Is my data saved anywhere?",
    a: "No. All information you enter is stored only in your browser's sessionStorage for the duration of your current session. Nothing is sent to or retained on AppealKit servers. When you close the tab, the data is gone — so complete your appeal pack in one session.",
  },
  {
    q: "What case types does AppealKit support?",
    a: "AppealKit currently supports four appeal types: documentation mismatch, business legitimacy proof, profile information cleanup, and restricted or disabled profile. These cover the most common GBP suspension and restriction scenarios.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "AppealKit",
  url: "https://appealkit.pro",
  applicationCategory: "BusinessApplication",
  description:
    "Build a clean, structured appeal pack for a suspended or restricted Google Business Profile.",
  operatingSystem: "Web",
  offers: {
    "@type": "Offer",
    price: "4.99",
    priceCurrency: "USD",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_ITEMS.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.a,
    },
  })),
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <div className="flex flex-col gap-16">

        {/* ── 1. Hero ── */}
        <section className="flex flex-col items-center gap-7 text-center pt-4">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            For suspended or restricted Google Business Profiles
          </span>

          <p className="text-sm font-semibold tracking-widest text-emerald-600 uppercase">
            AppealKit
          </p>

          <h1 className="text-4xl font-bold tracking-tight text-slate-900 leading-tight max-w-xl">
            Build a structured{" "}
            <span className="text-emerald-600">GBP reinstatement appeal pack</span>{" "}
            from your existing documents.
          </h1>

          <p className="text-base text-slate-500 leading-relaxed max-w-md">
            AppealKit guides you through the inputs, organises your supporting documents, and exports
            a clean PDF — ready to use with your Google Business Profile reinstatement request.
          </p>

          <div className="flex flex-col items-center gap-3 sm:flex-row sm:gap-4">
            <Link
              href="/builder"
              className="inline-flex items-center gap-2 rounded-lg bg-emerald-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-emerald-700 active:bg-emerald-800"
            >
              Build your appeal pack
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
            <a
              href="#how-it-works"
              className="inline-flex items-center gap-1.5 rounded-lg px-5 py-2.5 text-sm font-medium text-slate-600 border border-slate-200 bg-white hover:bg-slate-50 transition-colors"
            >
              See how it works
            </a>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-slate-400 pt-1">
            <span className="flex items-center gap-1.5">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true"><path d="M2 6l2.5 2.5L10 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
              No login required
            </span>
            <span className="flex items-center gap-1.5">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true"><path d="M2 6l2.5 2.5L10 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
              No data stored
            </span>
            <span className="flex items-center gap-1.5 font-medium text-slate-500">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true"><path d="M2 6l2.5 2.5L10 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
              $4.99 one-time — no subscription
            </span>
          </div>

          {/* Hero illustration */}
          <div className="w-full max-w-[500px]">
            <PageIllustration
              src="/illustrations/hero-proof-organization.png"
              alt="Business documents being organised into a structured GBP appeal pack"
              width={800}
              height={600}
              withPanel
              priority
            />
          </div>
        </section>

        {/* ── 2. Why Businesses Use AppealKit ── */}
        <section className="flex flex-col gap-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold tracking-tight text-slate-900">
              Why businesses use AppealKit
            </h2>
            <p className="mt-2 text-sm text-slate-500 max-w-sm mx-auto">
              Built around one practical goal: getting your case organised and presented clearly.
            </p>
          </div>

          <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {TRUST_POINTS.map((item) => (
              <li key={item.title} className="flex">
                <div className="rounded-xl border border-slate-200 bg-white shadow-sm h-full w-full">
                  <div className="flex items-start gap-3 p-5">
                    <div className="shrink-0">
                      <span className="mt-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-emerald-100">
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
                          <path d="M2 5l2 2 4-4" stroke="#059669" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-semibold text-slate-900">{item.title}</p>
                      <p className="mt-2 text-sm text-slate-500 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>

          {/* Who it's for / not for */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-6">
              <h3 className="text-base font-semibold text-emerald-900 mb-4">Who AppealKit is for</h3>
              <ul className="flex flex-col gap-2.5">
                {FOR_WHO.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-emerald-800">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true" className="mt-0.5 shrink-0">
                      <path d="M2.5 7l3 3L11.5 4" stroke="#059669" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-6">
              <h3 className="text-base font-semibold text-slate-700 mb-4">What AppealKit does not do</h3>
              <ul className="flex flex-col gap-2.5">
                {NOT_FOR.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-slate-500">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true" className="mt-0.5 shrink-0">
                      <path d="M4 4l6 6M10 4l-6 6" stroke="#94a3b8" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ── 3. Supported Case Types ── */}
        <section className="flex flex-col gap-6">
          <div className="text-center">
            <h2 className="text-2xl font-bold tracking-tight text-slate-900">
              Supported case types
            </h2>
            <p className="mt-2 text-sm text-slate-500 max-w-sm mx-auto">
              AppealKit covers the four most common GBP suspension and restriction scenarios.
            </p>
          </div>

          <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {CASE_TYPES.map((item) => (
              <li key={item.title} className="flex">
                <AccordionItem title={item.title}>
                  {item.description}
                </AccordionItem>
              </li>
            ))}
          </ul>
        </section>

        {/* ── 4. How AppealKit Works ── */}
        <section id="how-it-works" className="flex flex-col gap-8 scroll-mt-20">
          <div className="text-center">
            <h2 className="text-2xl font-bold tracking-tight text-slate-900">
              How AppealKit works
            </h2>
            <p className="mt-2 text-sm text-slate-500 max-w-sm mx-auto">
              Four focused steps from scattered documents to a download-ready appeal pack.
            </p>
          </div>

          <ol className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {HOW_IT_WORKS.map((item) => (
              <li key={item.step} className="flex">
                <AccordionItem
                  badge={
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-600 text-xs font-bold text-white">
                      {item.step}
                    </span>
                  }
                  title={item.title}
                >
                  {item.description}
                </AccordionItem>
              </li>
            ))}
          </ol>

          <div className="text-center">
            <Link
              href="/builder"
              className="inline-flex items-center gap-2 rounded-lg bg-emerald-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-emerald-700"
            >
              Start building — $4.99
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>
        </section>

        {/* ── 5. What Goes Into Your Appeal Pack ── */}
        <section className="flex flex-col gap-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold tracking-tight text-slate-900">
              What goes into your appeal pack
            </h2>
            <p className="mt-2 text-sm text-slate-500 max-w-sm mx-auto">
              AppealKit structures your case into a consistent, readable format.
            </p>
          </div>

          <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {WHAT_GOES_IN.map((item) => (
              <li key={item.title} className="flex">
                <AccordionItem
                  badge={
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600">
                      {item.icon}
                    </span>
                  }
                  title={item.title}
                >
                  {item.description}
                </AccordionItem>
              </li>
            ))}
          </ul>
        </section>

        {/* ── 6. FAQ ── */}
        <section className="flex flex-col gap-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold tracking-tight text-slate-900">
              Frequently asked questions
            </h2>
          </div>

          <dl className="flex flex-col gap-4">
            {FAQ_ITEMS.map((item) => (
              <div
                key={item.q}
                className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
              >
                <dt className="text-sm font-semibold text-slate-900">{item.q}</dt>
                <dd className="mt-2 text-sm text-slate-500 leading-relaxed">{item.a}</dd>
              </div>
            ))}
          </dl>

          <div className="text-center">
            <Link
              href="/faq"
              className="text-sm font-medium text-emerald-600 hover:text-emerald-700"
            >
              View all frequently asked questions →
            </Link>
          </div>
        </section>

        {/* ── 7. Final CTA ── */}
        <section className="rounded-2xl bg-emerald-600 px-8 py-12 text-center flex flex-col items-center gap-5">
          <h2 className="text-2xl font-bold tracking-tight text-white">
            Ready to build your appeal pack?
          </h2>
          <p className="text-sm text-emerald-100 max-w-sm leading-relaxed">
            No login, no setup. Organise your business details and supporting documents into a structured GBP appeal pack in one session.
          </p>
          <div className="flex flex-col items-center gap-2">
            <Link
              href="/builder"
              className="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 text-sm font-semibold text-emerald-700 shadow-sm transition-colors hover:bg-emerald-50 active:bg-emerald-100"
            >
              Build your appeal pack
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
            <span className="text-xs text-emerald-200">
              $4.99 one-time payment · No account · No data stored
            </span>
          </div>
        </section>

      </div>
    </>
  );
}
