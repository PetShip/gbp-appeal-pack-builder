import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Digital Product Chargeback Evidence — How to Prove Delivery and Fulfillment",
  description:
    "How digital product businesses — SaaS, online courses, and downloads — can document fulfillment, prove access, and organize their chargeback evidence effectively.",
  alternates: {
    canonical: "https://proofpack.pro/digital-product-chargeback-evidence",
  },
  robots: {
    index: false,
    follow: false,
  },
  openGraph: {
    title: "Digital Product Chargeback Evidence — ProofPack Guide",
    description:
      "How digital businesses can prove delivery and fulfillment in a Stripe chargeback dispute.",
    url: "https://proofpack.pro/digital-product-chargeback-evidence",
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
  },
};

const PROOF_TYPES = [
  {
    category: "SaaS subscriptions",
    items: [
      "Account activation confirmation email (with timestamp)",
      "Login history or session logs showing the customer accessed the account",
      "Feature usage data — pages visited, files created, actions taken",
      "Billing history showing prior payments accepted (indicating ongoing use)",
      "Screenshots of the customer's account showing active state",
      "Any in-app communications or support tickets from the account",
    ],
  },
  {
    category: "Online courses and digital training",
    items: [
      "Enrollment confirmation email",
      "Course progress records — lessons completed, time spent, assessments taken",
      "Certificate issuance if applicable",
      "Login activity showing the student accessed the platform",
      "Any forum posts, comments, or questions submitted by the student",
    ],
  },
  {
    category: "Digital downloads and files",
    items: [
      "Download confirmation or receipt",
      "Delivery log showing file was sent or made available",
      "Email confirmation with download link (sent and presumably received)",
      "Access token or unique link generation timestamp",
    ],
  },
  {
    category: "Consulting and services",
    items: [
      "Signed agreement or contract",
      "Meeting or call logs with dates and durations",
      "Deliverables submitted — files, reports, or other outputs",
      "Email communication confirming service was provided",
      "Any client feedback or acknowledgment of receipt",
    ],
  },
];

const CHALLENGES = [
  {
    challenge: "No physical tracking number",
    solution:
      "Digital products don't have shipping confirmations. Instead, collect access confirmation emails, login records, and usage data. If your platform doesn't generate these automatically, consider adding access logs — they're your equivalent of a tracking number.",
  },
  {
    challenge: "Customer claims they never received access",
    solution:
      "Check your delivery logs and confirm the email was sent and not bounced. If the account shows any login activity, include that. If your product requires an email to activate, check whether the activation step was completed.",
  },
  {
    challenge: "Customer claims to have canceled before the charge",
    solution:
      "Pull your subscription system's cancellation records. If no cancellation was processed, show the billing history and confirm no cancellation request was received. If a cancellation was received after the billing date, note the timing clearly.",
  },
  {
    challenge: "Customer says product didn't match the description",
    solution:
      "Find the product listing or marketing page as it appeared at the time of purchase (Wayback Machine or your own version history). Compare it side-by-side with what was delivered and note where they match. Address each specific claim the customer made.",
  },
];

export default function DigitalProductChargebackEvidencePage() {
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://proofpack.pro" },
      { "@type": "ListItem", position: 2, name: "Digital Product Chargeback Evidence — How to Prove Delivery and Fulfillment", item: "https://proofpack.pro/digital-product-chargeback-evidence" },
    ],
  };
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Digital Product Chargeback Evidence — How to Prove Delivery and Fulfillment",
    description: "How digital product businesses — SaaS, online courses, and downloads — can document fulfillment, prove access, and organize their chargeback evidence effectively.",
    url: "https://proofpack.pro/digital-product-chargeback-evidence",
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
          Digital product chargeback evidence: proving delivery for SaaS and digital goods
        </h1>
        <p className="text-base text-slate-500 leading-relaxed max-w-xl">
          Digital businesses face a unique challenge in chargeback disputes: there is no physical
          package, no tracking number, and no signed receipt. This guide explains how to document
          fulfillment and prove delivery for software, courses, downloads, and services.
        </p>
      </div>

      {/* Why it's different */}
      <section className="flex flex-col gap-5">
        <h2 className="text-xl font-bold text-slate-900">
          Why digital product disputes are different
        </h2>
        <div className="flex flex-col gap-3 text-sm text-slate-600 leading-relaxed">
          <p>
            For physical goods, proving delivery is relatively straightforward: a carrier tracking
            number with a delivery confirmation is often sufficient. For digital products, the
            standards are different — and often less well understood by customers, banks, and even
            dispute reviewers.
          </p>
          <p>
            Digital delivery often happens instantly and invisibly. The customer clicks &ldquo;pay,&rdquo;
            receives an email, and gains access. There is no physical handoff. This means your
            evidence must come from your own systems: delivery logs, access records, usage data,
            and communication trails.
          </p>
          <p>
            Card network rules do recognize digital product delivery, but the burden of proof is
            on the merchant to document it clearly. A well-organized evidence pack significantly
            improves the clarity of your case.
          </p>
        </div>
      </section>

      {/* Proof by product type */}
      <section className="flex flex-col gap-6">
        <h2 className="text-xl font-bold text-slate-900">
          What to collect — by product type
        </h2>
        <div className="flex flex-col gap-6">
          {PROOF_TYPES.map((section) => (
            <div key={section.category} className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
              <h3 className="text-sm font-semibold text-slate-900 mb-3">{section.category}</h3>
              <ul className="flex flex-col gap-2">
                {section.items.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-slate-500">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true" className="mt-0.5 shrink-0 text-emerald-500">
                      <path d="M2.5 7l3 3 6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Common challenges */}
      <section className="flex flex-col gap-6">
        <h2 className="text-xl font-bold text-slate-900">
          Common challenges and how to handle them
        </h2>
        <div className="flex flex-col gap-4">
          {CHALLENGES.map((item) => (
            <div key={item.challenge} className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
              <h3 className="text-sm font-semibold text-slate-900 mb-1">{item.challenge}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">{item.solution}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Practical note */}
      <section className="rounded-xl border border-amber-100 bg-amber-50 p-6">
        <h2 className="text-base font-semibold text-amber-900 mb-2">A practical note on evidence quality</h2>
        <p className="text-sm text-amber-800 leading-relaxed">
          Dispute reviewers are often seeing your product and business for the first time. Write
          your evidence as if explaining it to someone with no context. Use plain language, label
          every screenshot clearly, and organize by topic — not by what you happen to have saved.
          Clarity is more persuasive than volume.
        </p>
      </section>

      {/* ProofPack callout */}
      <section className="rounded-xl border border-emerald-200 bg-emerald-50 p-6 flex flex-col gap-4">
        <h2 className="text-base font-semibold text-emerald-900">
          ProofPack structures your digital product evidence automatically
        </h2>
        <p className="text-sm text-emerald-800 leading-relaxed">
          ProofPack guides you through each evidence section with prompts tailored to SaaS and
          digital product disputes — fulfillment details, customer communication, supporting files,
          and an auto-generated timeline. The result is a clean, structured PDF ready to submit.
          $4.99 one-time, no account required.
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
            <Link href="/stripe-chargeback-evidence" className="text-sm font-medium text-emerald-600 hover:text-emerald-700">
              Stripe chargeback evidence guide →
            </Link>
            <p className="text-sm text-slate-500 mt-0.5">What Stripe disputes require and how to structure your response.</p>
          </li>
          <li>
            <Link href="/chargeback-evidence-template" className="text-sm font-medium text-emerald-600 hover:text-emerald-700">
              Chargeback evidence template →
            </Link>
            <p className="text-sm text-slate-500 mt-0.5">The sections every evidence pack should include.</p>
          </li>
          <li>
            <Link href="/service-not-received-evidence" className="text-sm font-medium text-emerald-600 hover:text-emerald-700">
              Service not received evidence →
            </Link>
            <p className="text-sm text-slate-500 mt-0.5">How to prove delivery and access for a service not received dispute.</p>
          </li>
          <li>
            <Link href="/subscription-canceled-evidence" className="text-sm font-medium text-emerald-600 hover:text-emerald-700">
              Subscription canceled or not recognized evidence →
            </Link>
            <p className="text-sm text-slate-500 mt-0.5">How to document subscription history and cancellation records.</p>
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
