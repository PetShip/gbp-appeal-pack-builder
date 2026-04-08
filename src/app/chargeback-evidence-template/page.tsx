import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Chargeback Evidence Template — Sections Every Dispute Pack Should Include",
  description:
    "A practical chargeback evidence template for SaaS and digital product businesses. The sections, structure, and content every dispute response should include to be taken seriously.",
  alternates: {
    canonical: "https://proofpack.pro/chargeback-evidence-template",
  },
  robots: {
    index: false,
    follow: false,
  },
  openGraph: {
    title: "Chargeback Evidence Template — ProofPack",
    description:
      "The sections every chargeback evidence pack should include — with guidance on what to put in each.",
    url: "https://proofpack.pro/chargeback-evidence-template",
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
  },
};

const TEMPLATE_SECTIONS = [
  {
    number: "01",
    title: "Case summary",
    purpose: "Gives the reviewer immediate context without making them search for it.",
    include: [
      "Business name and merchant information",
      "Customer name and email address",
      "Order date",
      "Disputed amount and currency",
      "Product or service name",
      "Dispute reason code or dispute type",
      "Date you became aware of the dispute",
    ],
    notes:
      "Keep this section short and factual. One page. Reviewers need to identify the case quickly — do not bury this information.",
  },
  {
    number: "02",
    title: "Product or service description",
    purpose: "Establishes what the customer purchased and what they received access to.",
    include: [
      "Name and description of the product or service",
      "What the customer was given access to",
      "Pricing and billing terms (one-time vs. subscription)",
      "Delivery method (instant access, email link, manual provisioning, etc.)",
      "Applicable terms of service or refund policy",
    ],
    notes:
      "Write this in plain language. Assume the reviewer has never heard of your product. Do not assume technical familiarity.",
  },
  {
    number: "03",
    title: "Proof of delivery or fulfillment",
    purpose: "Documents that the product or service was made available as described.",
    include: [
      "Account activation or access confirmation email",
      "Login records or session history showing the customer accessed the product",
      "Usage data or activity records",
      "Download or delivery confirmation",
      "Signed agreement or service completion record",
    ],
    notes:
      "This is often the most important section. Reviewers need to see that delivery actually happened — not just that you believed it did.",
  },
  {
    number: "04",
    title: "Evidence timeline",
    purpose: "Lets reviewers quickly understand the sequence of events.",
    include: [
      "Purchase date",
      "Fulfillment or access provisioning date",
      "Any customer communication dates",
      "Cancellation or refund request date (if applicable)",
      "Dispute initiated date",
    ],
    notes:
      "Format as a simple chronological list. Each entry should have a date, a brief label, and a one-line description. Do not write paragraphs in the timeline.",
  },
  {
    number: "05",
    title: "Customer communication log",
    purpose: "Shows the history of interaction between you and the customer.",
    include: [
      "Email correspondence relevant to the dispute",
      "Support ticket summaries",
      "Chat transcripts if available",
      "Any refund requests or complaints received",
      "Your responses to those requests",
    ],
    notes:
      "Focus on communication that is relevant to the dispute claim. If the customer confirmed receipt, acknowledged the subscription terms, or requested a refund after using the product — those are relevant. Do not include every email ever sent.",
  },
  {
    number: "06",
    title: "Policy documentation",
    purpose: "Shows the customer agreed to the terms that apply to this situation.",
    include: [
      "Refund policy as it appeared at purchase time",
      "Cancellation policy",
      "Screenshots of the checkout page showing terms acceptance",
      "Any policy acknowledgment during signup",
    ],
    notes:
      "Policies are more persuasive when you can show the customer actively agreed to them — checkbox during checkout, email confirmation that references terms, etc.",
  },
  {
    number: "07",
    title: "Supporting evidence files",
    purpose: "Raw documentation that supports the claims in the other sections.",
    include: [
      "Screenshots of the customer's account showing active use",
      "Email exports",
      "Login records or access logs (exported from your platform)",
      "Delivery receipts",
      "Any other relevant documents",
    ],
    notes:
      "Label every file clearly. Unlabeled screenshots are hard to evaluate. Add short captions explaining what each file shows and why it is relevant.",
  },
];

export default function ChargebackEvidenceTemplatePage() {
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://proofpack.pro" },
      { "@type": "ListItem", position: 2, name: "Chargeback Evidence Template — Sections Every Dispute Pack Should Include", item: "https://proofpack.pro/chargeback-evidence-template" },
    ],
  };
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Chargeback Evidence Template — Sections Every Dispute Pack Should Include",
    description: "A practical chargeback evidence template for SaaS and digital product businesses. The sections, structure, and content every dispute response should include to be taken seriously.",
    url: "https://proofpack.pro/chargeback-evidence-template",
    publisher: { "@type": "Organization", name: "ProofPack", url: "https://proofpack.pro" },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
    <div className="flex flex-col gap-14">
      {/* Header */}
      <div className="flex flex-col gap-3">
        <p className="text-sm font-semibold tracking-widest text-emerald-600 uppercase">ProofPack Guide</p>
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
          Chargeback evidence template: the sections every dispute pack should include
        </h1>
        <p className="text-base text-slate-500 leading-relaxed max-w-xl">
          A well-structured chargeback evidence pack is not just a collection of screenshots and
          emails. It is an organized, readable document that helps a reviewer understand your case
          quickly. This template outlines the sections every evidence pack should include — and
          what to put in each one.
        </p>
      </div>

      {/* Note on template vs. builder */}
      <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-5 flex items-start gap-3">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true" className="mt-0.5 shrink-0 text-emerald-600">
          <circle cx="8" cy="8" r="6.5" stroke="currentColor" strokeWidth="1.2" />
          <path d="M8 7v4M8 5h.01" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
        </svg>
        <p className="text-sm text-emerald-800 leading-relaxed">
          <strong>ProofPack builds this structure automatically.</strong> Instead of assembling
          these sections manually in a document editor, use the ProofPack builder to fill in
          each section with guided prompts and download a complete, formatted PDF.{" "}
          <Link href="/builder" className="font-semibold underline underline-offset-2 hover:text-emerald-700">
            Start building →
          </Link>
        </p>
      </div>

      {/* Template sections */}
      <section className="flex flex-col gap-6">
        <h2 className="text-xl font-bold text-slate-900">
          The seven sections of a complete evidence pack
        </h2>

        <div className="flex flex-col gap-6">
          {TEMPLATE_SECTIONS.map((section) => (
            <div
              key={section.number}
              className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <div className="flex items-start gap-4">
                <span className="text-2xl font-bold text-slate-200 shrink-0 tabular-nums leading-none mt-1">
                  {section.number}
                </span>
                <div className="flex flex-col gap-3 flex-1">
                  <div>
                    <h3 className="text-base font-semibold text-slate-900">{section.title}</h3>
                    <p className="text-xs text-slate-400 mt-0.5">{section.purpose}</p>
                  </div>

                  <div>
                    <p className="text-xs font-medium text-slate-600 uppercase tracking-wide mb-2">What to include</p>
                    <ul className="flex flex-col gap-1.5">
                      {section.include.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-sm text-slate-600">
                          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true" className="mt-0.5 shrink-0 text-emerald-500">
                            <path d="M2.5 7l3 3 6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="rounded-lg bg-slate-50 border border-slate-100 px-4 py-3">
                    <p className="text-xs font-medium text-slate-500 uppercase tracking-wide mb-1">Guidance note</p>
                    <p className="text-sm text-slate-600 leading-relaxed">{section.notes}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Format tips */}
      <section className="flex flex-col gap-5">
        <h2 className="text-xl font-bold text-slate-900">
          Formatting and presentation tips
        </h2>
        <ul className="flex flex-col gap-3">
          {[
            "Put the case summary on the first page — reviewers should not have to search for basic information",
            "Use section headers. Divide your evidence into clearly labeled sections matching the template above",
            "Label every screenshot. \"Screenshot 1\" tells a reviewer nothing — write \"Screenshot: Customer account showing active login on Jan 14, 2025\"",
            "Keep the timeline as a list, not a paragraph. Dates and events should be scannable at a glance",
            "Do not include irrelevant files. Volume does not help — clarity does",
            "Export as a PDF. Submissions in Word or image formats are harder for reviewers to navigate",
          ].map((tip) => (
            <li key={tip} className="flex items-start gap-3 text-sm text-slate-600">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true" className="mt-0.5 shrink-0 text-emerald-500">
                <path d="M3 8l3.5 3.5L13 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              {tip}
            </li>
          ))}
        </ul>
      </section>

      {/* CTA */}
      <section className="rounded-2xl bg-emerald-600 px-8 py-10 text-center flex flex-col items-center gap-4">
        <h2 className="text-xl font-bold tracking-tight text-white">
          Build your evidence pack now
        </h2>
        <p className="text-sm text-emerald-100 max-w-sm leading-relaxed">
          ProofPack assembles all seven sections automatically — just fill in your case details
          and download the structured PDF.
        </p>
        <div className="flex flex-col items-center gap-2">
          <Link
            href="/builder"
            className="inline-flex items-center gap-2 rounded-lg bg-white px-5 py-2.5 text-sm font-semibold text-emerald-700 shadow-sm transition-colors hover:bg-emerald-50"
          >
            Build your evidence pack
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
          <span className="text-xs text-emerald-200">$4.99 one-time · No account · No data stored</span>
        </div>
      </section>

      {/* Related */}
      <section className="flex flex-col gap-4">
        <h2 className="text-base font-semibold text-slate-800">Related guides</h2>
        <ul className="flex flex-col gap-3">
          <li>
            <Link href="/stripe-chargeback-evidence" className="text-sm font-medium text-emerald-600 hover:text-emerald-700">
              Stripe chargeback evidence guide →
            </Link>
            <p className="text-sm text-slate-500 mt-0.5">What Stripe disputes require and evidence by dispute type.</p>
          </li>
          <li>
            <Link href="/digital-product-chargeback-evidence" className="text-sm font-medium text-emerald-600 hover:text-emerald-700">
              Digital product chargeback evidence →
            </Link>
            <p className="text-sm text-slate-500 mt-0.5">How to prove delivery for software, courses, and digital goods.</p>
          </li>
          <li>
            <Link href="/unauthorized-transaction-evidence" className="text-sm font-medium text-emerald-600 hover:text-emerald-700">
              Unauthorized transaction evidence →
            </Link>
            <p className="text-sm text-slate-500 mt-0.5">Login records, IP data, and device evidence for unauthorized dispute claims.</p>
          </li>
          <li>
            <Link href="/product-not-as-described-evidence" className="text-sm font-medium text-emerald-600 hover:text-emerald-700">
              Product not as described evidence →
            </Link>
            <p className="text-sm text-slate-500 mt-0.5">How to document advertised vs. delivered to address mismatch claims.</p>
          </li>
          <li>
            <Link href="/faq" className="text-sm font-medium text-emerald-600 hover:text-emerald-700">
              Frequently asked questions →
            </Link>
          </li>
        </ul>
      </section>
    </div>
    </>
  );
}
