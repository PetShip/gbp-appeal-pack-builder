import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Unauthorized Transaction Chargeback Evidence — What to Include",
  description:
    "Learn what evidence to gather when responding to an unauthorized transaction dispute on Stripe. Covers login records, IP addresses, device data, and communication history.",
  alternates: {
    canonical: "https://proofpack.pro/unauthorized-transaction-evidence",
  },
  robots: {
    index: false,
    follow: false,
  },
  openGraph: {
    title: "Unauthorized Transaction Chargeback Evidence — What to Include",
    description:
      "A practical guide to gathering and presenting evidence for Stripe unauthorized transaction disputes.",
    url: "https://proofpack.pro/unauthorized-transaction-evidence",
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
  },
};

export default function UnauthorizedTransactionEvidence() {
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://proofpack.pro" },
      { "@type": "ListItem", position: 2, name: "Unauthorized Transaction Chargeback Evidence — What to Include", item: "https://proofpack.pro/unauthorized-transaction-evidence" },
    ],
  };
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Unauthorized Transaction Chargeback Evidence — What to Include",
    description: "Learn what evidence to gather when responding to an unauthorized transaction dispute on Stripe. Covers login records, IP addresses, device data, and communication history.",
    url: "https://proofpack.pro/unauthorized-transaction-evidence",
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
          <span>Unauthorized Transaction Evidence</span>
        </div>
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 leading-snug">
          Unauthorized Transaction Chargeback Evidence: What to Include
        </h1>
        <p className="text-base text-slate-500 leading-relaxed max-w-prose">
          An unauthorized transaction dispute means the cardholder is claiming they did not authorize the
          payment. This is one of the most common Stripe dispute reason codes — and one of the most
          defensible when you have the right records. Here is what to gather and how to present it.
        </p>
      </header>

      {/* What this dispute type means */}
      <section className="flex flex-col gap-4">
        <h2 className="text-xl font-bold text-slate-900">What an unauthorized transaction dispute means</h2>
        <p className="text-sm text-slate-600 leading-relaxed">
          When Stripe shows reason code <strong>4853</strong> (Visa) or <strong>4837</strong> (Mastercard) — or simply labels a
          dispute as &ldquo;unauthorized transaction&rdquo; — it means the cardholder has told their bank that they
          did not make or authorize the purchase. This can happen because:
        </p>
        <ul className="flex flex-col gap-2 text-sm text-slate-600 leading-relaxed list-none">
          {[
            "The card was stolen or used without the owner's knowledge",
            "The account was shared with a family member who made the purchase",
            "The cardholder forgot about the purchase or doesn't recognize the billing descriptor",
            "The cardholder is disputing a legitimate charge in bad faith",
          ].map((item) => (
            <li key={item} className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-slate-400 shrink-0" />
              {item}
            </li>
          ))}
        </ul>
        <p className="text-sm text-slate-600 leading-relaxed">
          Your evidence response needs to show that the transaction was authorized — ideally by
          demonstrating that the customer had prior knowledge of the product, completed a checkout
          process, and used or accessed what they purchased.
        </p>
      </section>

      {/* Key evidence */}
      <section className="flex flex-col gap-5">
        <h2 className="text-xl font-bold text-slate-900">Key evidence to include</h2>
        <p className="text-sm text-slate-600 leading-relaxed">
          For unauthorized transaction disputes, the following evidence categories are the most
          effective. Not every item will apply to every case — include what you have.
        </p>

        <div className="flex flex-col gap-4">

          <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm flex flex-col gap-2">
            <h3 className="text-sm font-semibold text-slate-900">Login and account activity records</h3>
            <p className="text-sm text-slate-500 leading-relaxed">
              Show that the customer's account was accessed after the charge. Include login timestamps,
              IP addresses, and session records. If your platform logs feature usage (pages viewed,
              files accessed, emails opened), include that too.
            </p>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm flex flex-col gap-2">
            <h3 className="text-sm font-semibold text-slate-900">IP address and device matching</h3>
            <p className="text-sm text-slate-500 leading-relaxed">
              If you have the IP address used at checkout, compare it to prior login sessions or other
              known activity from the same customer. Matching device fingerprints or browser signatures
              also help. Stripe itself may include IP data in its dispute details.
            </p>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm flex flex-col gap-2">
            <h3 className="text-sm font-semibold text-slate-900">Checkout and confirmation evidence</h3>
            <p className="text-sm text-slate-500 leading-relaxed">
              A screenshot or record of the checkout flow showing that the customer entered billing
              information, agreed to your terms, and received a confirmation email to their address.
              An order confirmation email that was opened or clicked is particularly useful.
            </p>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm flex flex-col gap-2">
            <h3 className="text-sm font-semibold text-slate-900">Prior order history or account creation</h3>
            <p className="text-sm text-slate-500 leading-relaxed">
              If the customer has purchased before or created an account with the same email address
              and card, include that history. Repeat purchases from the same card are strong evidence
              that the cardholder was familiar with your product.
            </p>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm flex flex-col gap-2">
            <h3 className="text-sm font-semibold text-slate-900">Customer communication</h3>
            <p className="text-sm text-slate-500 leading-relaxed">
              Any emails, support tickets, or chat messages between you and the customer — especially
              if they reference the order, ask for help, or request a refund — show direct engagement
              with the purchase and are inconsistent with a claim of no authorization.
            </p>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm flex flex-col gap-2">
            <h3 className="text-sm font-semibold text-slate-900">Terms of service and checkout agreement</h3>
            <p className="text-sm text-slate-500 leading-relaxed">
              A screenshot of your checkout page showing that the customer was presented with and
              agreed to your terms, refund policy, or subscription terms before completing the purchase.
            </p>
          </div>

        </div>
      </section>

      {/* What to avoid */}
      <section className="flex flex-col gap-4">
        <h2 className="text-xl font-bold text-slate-900">Common mistakes in unauthorized transaction responses</h2>
        <ul className="flex flex-col gap-2.5 text-sm text-slate-600 leading-relaxed list-none">
          {[
            "Submitting only the order confirmation without any post-purchase activity — this alone is rarely sufficient",
            "Providing unstructured screenshots without labels explaining what each one shows",
            "Failing to address the reason code directly — your response should explain why the transaction was authorized",
            "Missing the response deadline — Stripe typically gives 7–21 days to respond, depending on card network",
            "Including irrelevant files that make the reviewer's job harder without adding supporting evidence",
          ].map((item) => (
            <li key={item} className="flex items-start gap-2">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true" className="mt-0.5 shrink-0">
                <path d="M4 4l6 6M10 4l-6 6" stroke="#94a3b8" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
              {item}
            </li>
          ))}
        </ul>
      </section>

      {/* ProofPack CTA */}
      <section className="rounded-2xl bg-emerald-600 px-8 py-10 text-center flex flex-col items-center gap-4">
        <h2 className="text-xl font-bold tracking-tight text-white">
          Organize your unauthorized transaction evidence with ProofPack
        </h2>
        <p className="text-sm text-emerald-100 max-w-sm leading-relaxed">
          ProofPack structures your case details, timeline, communication records, and uploaded evidence
          into one clean PDF — ready to submit to Stripe. $4.99 one-time, no account required.
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
            <Link href="/service-not-received-evidence" className="text-emerald-600 hover:text-emerald-700">
              Service not received — evidence guide
            </Link>
          </li>
          <li>
            <Link href="/subscription-canceled-evidence" className="text-emerald-600 hover:text-emerald-700">
              Subscription canceled or not recognized — evidence guide
            </Link>
          </li>
          <li>
            <Link href="/chargeback-evidence-template" className="text-emerald-600 hover:text-emerald-700">
              Evidence template: sections every dispute pack should include
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
