import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Stripe Chargeback Evidence — What to Include and How to Organize It",
  description:
    "A practical guide to preparing Stripe chargeback evidence. Learn what documentation to gather, how to structure your dispute response, and how to present your case clearly.",
  alternates: {
    canonical: "https://proofpack.pro/stripe-chargeback-evidence",
  },
  robots: {
    index: false,
    follow: false,
  },
  openGraph: {
    title: "Stripe Chargeback Evidence — ProofPack Guide",
    description:
      "A practical guide to preparing Stripe chargeback evidence for SaaS and digital product businesses.",
    url: "https://proofpack.pro/stripe-chargeback-evidence",
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
  },
};

const EVIDENCE_TYPES = [
  {
    title: "Case summary",
    description:
      "A clear, concise overview of the transaction: customer name, order date, amount, product name, and the specific dispute type. Reviewers process many cases — a well-organized summary is the first thing they see and sets the tone for your entire submission.",
  },
  {
    title: "Product or service description",
    description:
      "A plain-language description of what was sold, including what access or deliverable the customer received. For SaaS products, describe the features, scope, and any relevant terms. For digital products, describe the content and format.",
  },
  {
    title: "Proof of delivery or fulfillment",
    description:
      "For digital goods: login activity logs, access confirmation emails, download records, or screenshots of the customer's account showing active use. For services: delivery confirmation, completion records, or session logs. The burden is on you to show the product or service was made available.",
  },
  {
    title: "Customer communication records",
    description:
      "Exported email threads, support ticket logs, or chat transcripts showing interaction with the customer. Relevant communication includes anything that contradicts the dispute claim — for example, the customer confirming receipt, requesting a refund after using the product, or acknowledging the subscription terms.",
  },
  {
    title: "Terms of service and refund policy",
    description:
      "A screenshot or reference to the refund policy the customer agreed to at the time of purchase. For subscription businesses, include cancellation policy terms. Courts and card networks recognize that agreed-upon terms are part of the transaction record.",
  },
  {
    title: "Evidence timeline",
    description:
      "A chronological list of key events: purchase date, fulfillment date, any customer contact, subscription cancellation requests, and the dispute date. A clear timeline helps reviewers quickly understand the sequence of events without reading paragraph text.",
  },
];

const DISPUTE_TYPES = [
  {
    type: "Unauthorized transaction",
    guidance:
      "Focus on proving the charge was authorized: device fingerprints, IP addresses, login activity, and any prior purchases from the same account or card. If the customer used the product or service after the charge, document that activity. Stripe may also have 3D Secure authentication records you can reference.",
  },
  {
    type: "Service not received",
    guidance:
      "Prove that the product or service was made available as described. For software: login confirmation, access logs, or email confirmation. For digital downloads: delivery confirmation. For services: completion records, session logs, or communication confirming delivery.",
  },
  {
    type: "Subscription canceled / not recognized",
    guidance:
      "Provide the subscription history, original sign-up date, any cancellation confirmation (or lack thereof), and communication showing the customer had access throughout the billing period. If the subscription was not canceled before the charge, document that clearly.",
  },
  {
    type: "Product not as described",
    guidance:
      "Show that the product description at the time of purchase matches what was delivered. Include the product page or listing as it appeared when the customer purchased, alongside evidence of what was actually delivered. If the customer communicated specific concerns, respond to each point with evidence.",
  },
];

export default function StripeChargebackEvidencePage() {
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://proofpack.pro" },
      { "@type": "ListItem", position: 2, name: "Stripe Chargeback Evidence — What to Include and How to Organize It", item: "https://proofpack.pro/stripe-chargeback-evidence" },
    ],
  };
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Stripe Chargeback Evidence — What to Include and How to Organize It",
    description: "A practical guide to preparing Stripe chargeback evidence. Learn what documentation to gather, how to structure your dispute response, and how to present your case clearly.",
    url: "https://proofpack.pro/stripe-chargeback-evidence",
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
          Stripe chargeback evidence: what to include and how to organize it
        </h1>
        <p className="text-base text-slate-500 leading-relaxed max-w-xl">
          When a customer disputes a Stripe charge, the card network asks you to provide evidence.
          This guide explains what to include, how to structure your submission, and what reviewers
          actually look for — specifically for SaaS and digital product businesses.
        </p>
      </div>

      {/* What is a Stripe chargeback */}
      <section className="flex flex-col gap-5">
        <h2 className="text-xl font-bold text-slate-900">
          What happens when a Stripe chargeback is filed
        </h2>
        <div className="flex flex-col gap-3 text-sm text-slate-600 leading-relaxed">
          <p>
            When a customer contacts their bank and disputes a charge, the bank initiates a
            chargeback with the card network (Visa, Mastercard, American Express, or Discover).
            The card network places a hold on the disputed funds and asks Stripe to respond.
            Stripe then passes the dispute to you — the merchant — and asks for evidence.
          </p>
          <p>
            You typically have <strong className="text-slate-800">7–21 days</strong> to submit
            your response, depending on the card network and dispute type. Missing the deadline
            means forfeiting your right to respond.
          </p>
          <p>
            The card network — not Stripe — makes the final decision. Stripe collects and forwards
            your evidence but does not adjudicate disputes. The bank reviews the evidence and
            decides whether to side with you or the cardholder.
          </p>
        </div>
      </section>

      {/* Evidence types */}
      <section className="flex flex-col gap-6">
        <h2 className="text-xl font-bold text-slate-900">
          What evidence to include in a Stripe dispute response
        </h2>
        <p className="text-sm text-slate-500 leading-relaxed">
          A well-organized evidence pack typically includes the following elements. Not every
          element applies to every dispute, but including what you have — clearly organized — is
          better than a wall of text.
        </p>
        <div className="flex flex-col gap-4">
          {EVIDENCE_TYPES.map((item, i) => (
            <div
              key={item.title}
              className="flex gap-4 rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
            >
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-emerald-600 text-xs font-bold text-white">
                {i + 1}
              </span>
              <div className="flex flex-col gap-1">
                <h3 className="text-sm font-semibold text-slate-900">{item.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* By dispute type */}
      <section className="flex flex-col gap-6">
        <h2 className="text-xl font-bold text-slate-900">
          Evidence guidance by dispute type
        </h2>
        <p className="text-sm text-slate-500 leading-relaxed">
          The most relevant evidence varies by the reason the customer gave for the dispute.
          Focus your strongest evidence on the specific claim.
        </p>
        <div className="flex flex-col gap-4">
          {DISPUTE_TYPES.map((item) => (
            <div
              key={item.type}
              className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
            >
              <h3 className="text-sm font-semibold text-slate-900 mb-2">{item.type}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">{item.guidance}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Common mistakes */}
      <section className="flex flex-col gap-5">
        <h2 className="text-xl font-bold text-slate-900">
          Common mistakes in chargeback responses
        </h2>
        <ul className="flex flex-col gap-3">
          {[
            "Submitting a wall of unstructured text with no clear organization",
            "Failing to address the specific dispute reason code",
            "Uploading files that are too large, unreadable, or irrelevant",
            "Missing the submission deadline",
            "Arguing the customer is wrong without providing actual documented evidence",
            "Not including a timeline — reviewers need to understand the sequence of events",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3 text-sm text-slate-600">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true" className="mt-0.5 shrink-0 text-amber-500">
                <circle cx="8" cy="8" r="6.5" stroke="currentColor" strokeWidth="1.2" />
                <path d="M8 5v3.5M8 10h.01" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
              </svg>
              {item}
            </li>
          ))}
        </ul>
      </section>

      {/* ProofPack callout */}
      <section className="rounded-xl border border-emerald-200 bg-emerald-50 p-6 flex flex-col gap-4">
        <h2 className="text-base font-semibold text-emerald-900">
          ProofPack organizes all of this automatically
        </h2>
        <p className="text-sm text-emerald-800 leading-relaxed">
          Instead of building your evidence pack manually in a Word document or Google Doc,
          ProofPack guides you through each section, generates a timeline, organizes your uploaded
          files, and exports a clean, structured PDF — ready to submit with your Stripe dispute
          response. $4.99 one-time, no account required.
        </p>
        <Link
          href="/builder"
          className="self-start inline-flex items-center gap-2 rounded-lg bg-emerald-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-emerald-700"
        >
          Build your evidence pack
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
            <path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>
      </section>

      {/* Related */}
      <section className="flex flex-col gap-4">
        <h2 className="text-base font-semibold text-slate-800">Related guides</h2>
        <ul className="flex flex-col gap-3">
          <li>
            <Link href="/digital-product-chargeback-evidence" className="text-sm font-medium text-emerald-600 hover:text-emerald-700">
              Digital product chargeback evidence →
            </Link>
            <p className="text-sm text-slate-500 mt-0.5">Proving delivery and fulfillment for software and digital goods.</p>
          </li>
          <li>
            <Link href="/chargeback-evidence-template" className="text-sm font-medium text-emerald-600 hover:text-emerald-700">
              Chargeback evidence template →
            </Link>
            <p className="text-sm text-slate-500 mt-0.5">The sections every evidence pack should include.</p>
          </li>
          <li>
            <Link href="/unauthorized-transaction-evidence" className="text-sm font-medium text-emerald-600 hover:text-emerald-700">
              Unauthorized transaction evidence →
            </Link>
            <p className="text-sm text-slate-500 mt-0.5">What to document when responding to an unauthorized transaction dispute.</p>
          </li>
          <li>
            <Link href="/service-not-received-evidence" className="text-sm font-medium text-emerald-600 hover:text-emerald-700">
              Service not received evidence →
            </Link>
            <p className="text-sm text-slate-500 mt-0.5">How to show your product or service was delivered and accessible.</p>
          </li>
          <li>
            <Link href="/subscription-canceled-evidence" className="text-sm font-medium text-emerald-600 hover:text-emerald-700">
              Subscription canceled or not recognized evidence →
            </Link>
            <p className="text-sm text-slate-500 mt-0.5">Documenting subscription history, cancellation records, and billing terms.</p>
          </li>
          <li>
            <Link href="/product-not-as-described-evidence" className="text-sm font-medium text-emerald-600 hover:text-emerald-700">
              Product not as described evidence →
            </Link>
            <p className="text-sm text-slate-500 mt-0.5">How to compare advertised vs. delivered and address mismatch claims.</p>
          </li>
          <li>
            <Link href="/faq" className="text-sm font-medium text-emerald-600 hover:text-emerald-700">
              Frequently asked questions →
            </Link>
            <p className="text-sm text-slate-500 mt-0.5">Common questions about ProofPack and Stripe disputes.</p>
          </li>
        </ul>
      </section>
    </div>
    </>
  );
}
