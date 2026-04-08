import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "FAQ — AppealKit Google Business Profile Appeal Builder",
  description:
    "Answers to common questions about AppealKit, GBP suspensions, what the appeal pack includes, how the builder works, and what AppealKit does and does not do.",
  alternates: {
    canonical: "https://appealkit.pro/faq",
  },
  openGraph: {
    title: "FAQ — AppealKit Google Business Profile Appeal Builder",
    description:
      "Answers to common questions about AppealKit and preparing a GBP reinstatement appeal pack.",
    url: "https://appealkit.pro/faq",
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
  },
};

type FaqSection = {
  heading: string;
  items: { q: string; a: string | React.ReactNode }[];
};

const FAQ_SECTIONS: FaqSection[] = [
  {
    heading: "About AppealKit",
    items: [
      {
        q: "What is AppealKit?",
        a: "AppealKit is a focused web utility that helps local businesses build a structured appeal pack for a suspended or restricted Google Business Profile. You enter your business details and supporting context, upload documents, and download a clean PDF — organised and ready to use with your reinstatement request.",
      },
      {
        q: "Who is AppealKit designed for?",
        a: "AppealKit is designed for small and mid-sized businesses, local service businesses, and individuals managing their own GBP listing who need to prepare documentation for a reinstatement appeal. It is also useful for agencies preparing appeal documentation on behalf of a client.",
      },
      {
        q: "Is there a cost to use AppealKit?",
        a: "AppealKit is a paid utility — PDF export is a one-time payment of $4.99. There are no subscriptions or hidden fees.",
      },
      {
        q: "Do I need to create an account?",
        a: "No. AppealKit requires no login or signup. You start building immediately and the entire session runs in your browser.",
      },
      {
        q: "Is my data saved anywhere?",
        a: "No. All case data you enter is stored only in your browser's sessionStorage for the duration of your current session. Nothing is sent to or retained on AppealKit servers. When you close the tab or window, the data is gone. Complete your appeal pack in one session before closing.",
      },
    ],
  },
  {
    heading: "What AppealKit does and does not do",
    items: [
      {
        q: "Does AppealKit submit the appeal to Google?",
        a: "No. AppealKit produces a structured PDF pack that you use as part of your own reinstatement request. You submit your appeal directly through Google's own process. AppealKit has no integration with Google.",
      },
      {
        q: "Does AppealKit guarantee reinstatement?",
        a: "No. AppealKit helps you organise and present your information clearly — it does not predict, influence, or guarantee reinstatement outcomes. Whether your appeal is successful depends on your specific case, the evidence you provide, and Google's review process. AppealKit is a structuring tool, not legal advice.",
      },
      {
        q: "Does AppealKit provide legal advice?",
        a: "No. AppealKit is a documentation tool. It does not provide legal advice, attorney review, or any form of professional representation. If your situation requires legal guidance, consult a qualified professional.",
      },
      {
        q: "Does AppealKit store or manage my business data over time?",
        a: "No. AppealKit has no accounts, no persistent storage, and no dashboard. Each session is self-contained and temporary. Once you close your browser tab, your session data is gone.",
      },
    ],
  },
  {
    heading: "Using the builder",
    items: [
      {
        q: "What appeal types does AppealKit support?",
        a: "AppealKit currently supports four appeal types: documentation mismatch, business legitimacy proof, profile information cleanup, and restricted or disabled profile. These cover the most common GBP suspension and restriction scenarios.",
      },
      {
        q: "What information do I need to have ready before I start?",
        a: "You will want to have: your business name and address, your GBP profile details, a description of the suspension or restriction, a summary of your situation and any corrective steps taken, and any supporting documents such as business registration, utility bills, photos, or invoices.",
      },
      {
        q: "Can I go back and edit a previous step?",
        a: "Yes. The builder saves your progress in sessionStorage so you can navigate between steps freely. If you navigate away from the builder to the review or export pages and then come back, the builder will restore your last session automatically.",
      },
      {
        q: "Can I save my work and come back later?",
        a: "Not across different browser sessions. Your progress is stored in sessionStorage, which only persists for the duration of the current browser tab. If you close the tab, your data is lost. Complete your appeal pack in one session.",
      },
      {
        q: "What file types can I upload as supporting documents?",
        a: "You can upload JPEG and PNG image files (rendered inline in the PDF), PDF files (appended as additional pages), and other file types (listed in the document index by name and type, but not rendered visually). Total upload size is limited to approximately 4–5 MB due to browser and server constraints.",
      },
    ],
  },
  {
    heading: "The PDF export",
    items: [
      {
        q: "What does the exported PDF contain?",
        a: "The PDF contains a structured business and profile summary (appeal type, business details, GBP profile information, and case context), a profile consistency overview, and a supporting document section with uploaded images rendered inline and PDFs appended as additional pages.",
      },
      {
        q: "Can I edit the PDF after downloading?",
        a: "The PDF is not encrypted, so you can annotate it with any standard PDF editor. However, AppealKit does not include a built-in editing step — the output is designed to be complete as generated.",
      },
      {
        q: "The export failed. What should I do?",
        a: "Export failures are most commonly caused by total file size exceeding the limit (approximately 4–5 MB including all uploaded files). Try removing some uploaded files, using compressed versions of images, or uploading fewer files. If the export still fails, try again in a fresh browser session.",
      },
      {
        q: "How do I use the PDF with my reinstatement request?",
        a: "After downloading, you submit your appeal directly through Google's own reinstatement process. The PDF provides organised reference material you can draw from when filling out Google's appeal form. AppealKit does not submit the appeal on your behalf.",
      },
    ],
  },
];

export default function FAQPage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ_SECTIONS.flatMap((section) =>
      section.items
        .filter((item): item is { q: string; a: string } => typeof item.a === "string")
        .map((item) => ({
          "@type": "Question",
          name: item.q,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.a,
          },
        }))
    ),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <div className="flex flex-col gap-14">
        {/* Header */}
        <div className="flex flex-col gap-3">
          <p className="text-sm font-semibold tracking-widest text-emerald-600 uppercase">AppealKit</p>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            Frequently asked questions
          </h1>
          <p className="text-base text-slate-500 leading-relaxed max-w-xl">
            Answers to common questions about AppealKit and preparing a Google Business Profile
            reinstatement appeal pack.
          </p>
        </div>

        {/* Sections */}
        {FAQ_SECTIONS.map((section) => (
          <section key={section.heading} className="flex flex-col gap-6">
            <h2 className="text-lg font-semibold text-slate-900 border-b border-slate-200 pb-3">
              {section.heading}
            </h2>
            <dl className="flex flex-col gap-4">
              {section.items.map((item) => (
                <div
                  key={item.q}
                  className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
                >
                  <dt className="text-sm font-semibold text-slate-900">{item.q}</dt>
                  <dd className="mt-2 text-sm text-slate-500 leading-relaxed">{item.a}</dd>
                </div>
              ))}
            </dl>
          </section>
        ))}

        {/* CTA */}
        <section className="rounded-2xl bg-emerald-600 px-8 py-10 text-center flex flex-col items-center gap-4">
          <h2 className="text-xl font-bold tracking-tight text-white">
            Ready to build your appeal pack?
          </h2>
          <p className="text-sm text-emerald-100 max-w-sm leading-relaxed">
            No login, no setup. Organise your business details and supporting documents into a
            structured GBP appeal pack in one session.
          </p>
          <div className="flex flex-col items-center gap-2">
            <Link
              href="/builder"
              className="inline-flex items-center gap-2 rounded-lg bg-white px-5 py-2.5 text-sm font-semibold text-emerald-700 shadow-sm transition-colors hover:bg-emerald-50"
            >
              Build your appeal pack
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
            <span className="text-xs text-emerald-200">$4.99 one-time · No account · No data stored</span>
          </div>
        </section>
      </div>
    </>
  );
}
