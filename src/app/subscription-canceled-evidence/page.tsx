import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Subscription Canceled Chargeback Evidence — What to Include",
  description:
    "Learn what evidence to gather when responding to a subscription chargeback on Stripe. Covers subscription history, cancellation records, billing notifications, and usage data.",
  alternates: {
    canonical: "https://proofpack.pro/subscription-canceled-evidence",
  },
  robots: {
    index: false,
    follow: false,
  },
  openGraph: {
    title: "Subscription Canceled Chargeback Evidence — What to Include",
    description:
      "A practical guide to gathering evidence for Stripe subscription canceled or not recognized chargebacks.",
    url: "https://proofpack.pro/subscription-canceled-evidence",
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
  },
};

export default function SubscriptionCanceledEvidence() {
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://proofpack.pro" },
      { "@type": "ListItem", position: 2, name: "Subscription Canceled Chargeback Evidence — What to Include", item: "https://proofpack.pro/subscription-canceled-evidence" },
    ],
  };
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Subscription Canceled Chargeback Evidence — What to Include",
    description: "Learn what evidence to gather when responding to a subscription chargeback on Stripe. Covers subscription history, cancellation records, billing notifications, and usage data.",
    url: "https://proofpack.pro/subscription-canceled-evidence",
    publisher: { "@type": "Organization", name: "ProofPack", url: "https://proofpack.pro" },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
    <div className="flex flex-col gap-12">

      {/* Header */}
      <header className="flex flex-col gap-4">
        <div className="flex items-center gap-2 text-xs text-slate-400">
          <Link href="/" className="hover:text-slate-600 transition-colors">ProofPack</Link>
          <span>/</span>
          <span>Subscription Canceled Evidence</span>
        </div>
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 leading-snug">
          Subscription Canceled or Not Recognized: Chargeback Evidence Guide
        </h1>
        <p className="text-base text-slate-500 leading-relaxed max-w-prose">
          Subscription chargebacks are among the most common disputes for SaaS and recurring revenue
          businesses. The cardholder may claim they canceled before the charge, that the renewal was
          unexpected, or that they simply don&apos;t recognize the billing. This guide covers what evidence
          matters most and how to structure your response.
        </p>
      </header>

      {/* What this dispute type means */}
      <section className="flex flex-col gap-4">
        <h2 className="text-xl font-bold text-slate-900">What this dispute type covers</h2>
        <p className="text-sm text-slate-600 leading-relaxed">
          Stripe surfaces this under labels like &ldquo;subscription canceled&rdquo; or &ldquo;subscription not
          recognized,&rdquo; often corresponding to Visa reason code <strong>4841</strong> or Mastercard
          reason code <strong>4853</strong>. The dispute usually falls into one of these scenarios:
        </p>
        <ul className="flex flex-col gap-2 text-sm text-slate-600 leading-relaxed list-none">
          {[
            "The customer claims they canceled before the renewal date but was still charged",
            "The customer doesn't recognize the charge on their statement (unfamiliar billing descriptor)",
            "The customer expected a cancellation to be immediate but the billing cycle had already started",
            "The customer forgot they had an active subscription",
            "The customer is disputing a renewal after not using the product for a period of time",
          ].map((item) => (
            <li key={item} className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-slate-400 shrink-0" />
              {item}
            </li>
          ))}
        </ul>
        <p className="text-sm text-slate-600 leading-relaxed">
          In all of these cases, your evidence should show that the subscription was active,
          that the customer agreed to recurring billing, and — critically — whether a valid
          cancellation request was made before the disputed charge.
        </p>
      </section>

      {/* Key evidence */}
      <section className="flex flex-col gap-5">
        <h2 className="text-xl font-bold text-slate-900">Key evidence to include</h2>

        <div className="flex flex-col gap-4">

          <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm flex flex-col gap-2">
            <h3 className="text-sm font-semibold text-slate-900">Subscription signup and billing agreement</h3>
            <p className="text-sm text-slate-500 leading-relaxed">
              The original signup confirmation showing that the customer agreed to recurring billing.
              Include any pricing page screenshots showing the billing cycle, renewal terms, and what
              the subscription includes. If you use a Stripe-hosted checkout, the subscription terms
              Stripe shows at checkout are also relevant.
            </p>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm flex flex-col gap-2">
            <h3 className="text-sm font-semibold text-slate-900">Renewal notification emails</h3>
            <p className="text-sm text-slate-500 leading-relaxed">
              If your platform sent an upcoming renewal notice or a receipt after the renewal charge,
              include records showing those emails were sent. Delivery timestamps and open/click
              records are particularly useful. Proactive renewal notifications significantly
              strengthen your position.
            </p>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm flex flex-col gap-2">
            <h3 className="text-sm font-semibold text-slate-900">Cancellation policy and process</h3>
            <p className="text-sm text-slate-500 leading-relaxed">
              A screenshot of your cancellation policy or help documentation, showing how customers
              are expected to cancel and what the effective date of cancellation is. If cancellations
              take effect at the end of the billing period, this should be documented clearly.
            </p>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm flex flex-col gap-2">
            <h3 className="text-sm font-semibold text-slate-900">Cancellation records (or absence of one)</h3>
            <p className="text-sm text-slate-500 leading-relaxed">
              If the customer claims they canceled, show your cancellation logs. If no cancellation
              request exists before the billing date, document that clearly. If a cancellation was
              requested after the charge was processed, include the date and time to show it was
              submitted after the billing cycle had already started.
            </p>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm flex flex-col gap-2">
            <h3 className="text-sm font-semibold text-slate-900">Subscription history and billing timeline</h3>
            <p className="text-sm text-slate-500 leading-relaxed">
              A clear record of prior billing cycles — showing previous charges that the customer did
              not dispute. Multiple prior renewals without complaints demonstrate that the customer
              was aware of and accepting the recurring billing.
            </p>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm flex flex-col gap-2">
            <h3 className="text-sm font-semibold text-slate-900">Usage activity during the billing period</h3>
            <p className="text-sm text-slate-500 leading-relaxed">
              Login records or feature usage during the disputed billing period show that the
              customer was actively using the product — even after the renewal charge. This is
              useful evidence that contradicts a claim of cancellation before the charge.
            </p>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm flex flex-col gap-2">
            <h3 className="text-sm font-semibold text-slate-900">Billing descriptor explanation</h3>
            <p className="text-sm text-slate-500 leading-relaxed">
              If the customer claims they don&apos;t recognize the charge, include a note explaining
              what your billing descriptor looks like and why it matches your business. A clear
              explanation of the descriptor string that appears on bank statements can resolve
              &ldquo;not recognized&rdquo; disputes before they escalate.
            </p>
          </div>

        </div>
      </section>

      {/* Cancellation timing scenarios */}
      <section className="flex flex-col gap-4">
        <h2 className="text-xl font-bold text-slate-900">Handling different cancellation scenarios</h2>
        <div className="flex flex-col gap-3 text-sm text-slate-600">
          <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="font-medium text-slate-800 mb-1.5">Customer claims they canceled before renewal</p>
            <p className="leading-relaxed">Show your cancellation log with timestamps. If no cancellation exists for the email or account associated with the disputed payment, document that clearly. If there is a cancellation log entry after the charge was processed, note the exact time difference.</p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="font-medium text-slate-800 mb-1.5">Customer doesn&apos;t recognize the subscription</p>
            <p className="leading-relaxed">Show the original signup, billing terms, prior invoices or charges, and login history. Multiple prior charges without disputes show the customer was aware of the billing.</p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="font-medium text-slate-800 mb-1.5">Customer requested cancellation but billing was already processed</p>
            <p className="leading-relaxed">If your policy bills at the start of a period and cancellation takes effect at the end, document both the policy and when the cancellation request was received relative to the billing event. If applicable, note any refund that was already issued.</p>
          </div>
        </div>
      </section>

      {/* ProofPack CTA */}
      <section className="rounded-2xl bg-emerald-600 px-8 py-10 text-center flex flex-col items-center gap-4">
        <h2 className="text-xl font-bold tracking-tight text-white">
          Build your subscription dispute evidence pack with ProofPack
        </h2>
        <p className="text-sm text-emerald-100 max-w-sm leading-relaxed">
          ProofPack organizes your subscription history, cancellation records, billing timeline, and
          supporting files into a structured PDF ready for Stripe. $4.99 one-time, no account required.
        </p>
        <div className="flex flex-col items-center gap-2">
          <Link
            href="/builder"
            className="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 text-sm font-semibold text-emerald-700 shadow-sm transition-colors hover:bg-emerald-50"
          >
            Build your evidence pack
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
          <span className="text-xs text-emerald-200">$4.99 one-time · No account · No data stored</span>
        </div>
      </section>

      {/* Related guides */}
      <section className="flex flex-col gap-4">
        <h2 className="text-base font-semibold text-slate-800">Related guides</h2>
        <ul className="flex flex-col gap-2 text-sm">
          <li>
            <Link href="/stripe-chargeback-evidence" className="text-emerald-600 hover:text-emerald-700">
              Stripe chargeback evidence — what to include and how to organize it
            </Link>
          </li>
          <li>
            <Link href="/digital-product-chargeback-evidence" className="text-emerald-600 hover:text-emerald-700">
              Chargeback evidence for digital products and SaaS
            </Link>
          </li>
          <li>
            <Link href="/unauthorized-transaction-evidence" className="text-emerald-600 hover:text-emerald-700">
              Unauthorized transaction — evidence guide
            </Link>
          </li>
          <li>
            <Link href="/product-not-as-described-evidence" className="text-emerald-600 hover:text-emerald-700">
              Product not as described — evidence guide
            </Link>
          </li>
          <li>
            <Link href="/faq" className="text-emerald-600 hover:text-emerald-700">
              Frequently asked questions about ProofPack
            </Link>
          </li>
        </ul>
      </section>

    </div>
    </>
  );
}
