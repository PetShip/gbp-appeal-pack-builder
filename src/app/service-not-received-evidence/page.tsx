import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Service Not Received Chargeback Evidence — What to Include",
  description:
    "Learn what evidence to gather when responding to a service not received dispute on Stripe. Covers delivery confirmation, access logs, onboarding emails, and usage records.",
  alternates: {
    canonical: "https://proofpack.pro/service-not-received-evidence",
  },
  openGraph: {
    title: "Service Not Received Chargeback Evidence — What to Include",
    description:
      "A practical guide to gathering and presenting evidence for Stripe service not received disputes.",
    url: "https://proofpack.pro/service-not-received-evidence",
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
  },
};

export default function ServiceNotReceivedEvidence() {
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://proofpack.pro" },
      { "@type": "ListItem", position: 2, name: "Service Not Received Chargeback Evidence — What to Include", item: "https://proofpack.pro/service-not-received-evidence" },
    ],
  };
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Service Not Received Chargeback Evidence — What to Include",
    description: "Learn what evidence to gather when responding to a service not received dispute on Stripe. Covers delivery confirmation, access logs, onboarding emails, and usage records.",
    url: "https://proofpack.pro/service-not-received-evidence",
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
          <span>Service Not Received Evidence</span>
        </div>
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 leading-snug">
          Service Not Received Chargeback Evidence: What to Include
        </h1>
        <p className="text-base text-slate-500 leading-relaxed max-w-prose">
          A service not received dispute means the customer is claiming they never got access to what
          they paid for. For SaaS and digital products, this is rarely about a physical delivery
          failure — it typically means the customer either genuinely had trouble accessing the product
          or is disputing a charge they knew they authorized. Here is how to document that delivery happened.
        </p>
      </header>

      {/* What this dispute means */}
      <section className="flex flex-col gap-4">
        <h2 className="text-xl font-bold text-slate-900">What a service not received dispute means</h2>
        <p className="text-sm text-slate-600 leading-relaxed">
          Stripe routes this dispute under reason codes like <strong>4855</strong> (Visa) or
          <strong> 4841</strong> (Mastercard). The cardholder has told their bank that they paid for a
          product or service and received nothing. For digital businesses, common scenarios include:
        </p>
        <ul className="flex flex-col gap-2 text-sm text-slate-600 leading-relaxed list-none">
          {[
            "The customer claims they never received a confirmation email or access link",
            "The customer says they couldn't log in or access the platform",
            "The customer is claiming non-delivery after a refund was denied",
            "The account was set up but the customer never actually used it",
          ].map((item) => (
            <li key={item} className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-slate-400 shrink-0" />
              {item}
            </li>
          ))}
        </ul>
        <p className="text-sm text-slate-600 leading-relaxed">
          Your goal in the dispute response is to show that your product was made available to the
          customer — even if they chose not to use it or had difficulty accessing it.
        </p>
      </section>

      {/* Key evidence */}
      <section className="flex flex-col gap-5">
        <h2 className="text-xl font-bold text-slate-900">Key evidence to include</h2>

        <div className="flex flex-col gap-4">

          <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm flex flex-col gap-2">
            <h3 className="text-sm font-semibold text-slate-900">Account activation or access confirmation</h3>
            <p className="text-sm text-slate-500 leading-relaxed">
              A record showing that an account was created, an access link was generated, or a
              confirmation email was sent to the customer's address immediately after payment.
              If your system sends a welcome or onboarding email, include a copy or delivery record.
            </p>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm flex flex-col gap-2">
            <h3 className="text-sm font-semibold text-slate-900">Login records and session activity</h3>
            <p className="text-sm text-slate-500 leading-relaxed">
              If the customer logged in at any point, that is direct evidence that they received and
              used the service. Include timestamps, IP addresses, and any session data you can export
              from your platform. Even a single login after purchase significantly weakens a
              &ldquo;never received&rdquo; claim.
            </p>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm flex flex-col gap-2">
            <h3 className="text-sm font-semibold text-slate-900">Feature usage or download records</h3>
            <p className="text-sm text-slate-500 leading-relaxed">
              Usage data — pages visited, files downloaded, reports generated, videos watched — shows
              that the customer actively engaged with the product. For digital downloads, a server-side
              record of the download event is strong evidence.
            </p>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm flex flex-col gap-2">
            <h3 className="text-sm font-semibold text-slate-900">Support communication</h3>
            <p className="text-sm text-slate-500 leading-relaxed">
              Any support tickets, emails, or chat logs from the customer that reference the product
              or service are useful — even if they are complaints. Contact from the customer after
              purchase shows they received the service and knew they had it.
            </p>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm flex flex-col gap-2">
            <h3 className="text-sm font-semibold text-slate-900">Fulfillment timeline</h3>
            <p className="text-sm text-slate-500 leading-relaxed">
              A clear chronological summary of what happened and when: payment confirmed, account
              created, welcome email sent, access granted, login recorded. Even if you lack some
              of these records, documenting what you do have in chronological order makes your
              response more readable for the dispute reviewer.
            </p>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm flex flex-col gap-2">
            <h3 className="text-sm font-semibold text-slate-900">Product or service description</h3>
            <p className="text-sm text-slate-500 leading-relaxed">
              A clear, plain-language description of what the customer purchased and how it is
              delivered. For SaaS products, this includes what the subscription includes, how access
              works, and what the customer was expected to do after payment.
            </p>
          </div>

        </div>
      </section>

      {/* Evidence by product type */}
      <section className="flex flex-col gap-5">
        <h2 className="text-xl font-bold text-slate-900">Evidence by product type</h2>
        <div className="flex flex-col gap-3">
          <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
            <h3 className="text-sm font-semibold text-slate-900 mb-2">SaaS subscriptions</h3>
            <ul className="flex flex-col gap-1.5 text-sm text-slate-500">
              {["Account activation email with timestamp", "Login history with IP addresses", "Feature usage logs or dashboard activity", "Subscription confirmation with billing terms"].map((i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="mt-1.5 h-1 w-1 rounded-full bg-slate-300 shrink-0" />{i}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
            <h3 className="text-sm font-semibold text-slate-900 mb-2">Online courses</h3>
            <ul className="flex flex-col gap-1.5 text-sm text-slate-500">
              {["Enrollment confirmation email", "Progress records or lesson completion data", "Login activity showing course access", "Certificate issued (if applicable)"].map((i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="mt-1.5 h-1 w-1 rounded-full bg-slate-300 shrink-0" />{i}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
            <h3 className="text-sm font-semibold text-slate-900 mb-2">Digital downloads</h3>
            <ul className="flex flex-col gap-1.5 text-sm text-slate-500">
              {["Download link delivery confirmation", "Server-side download event log", "Email confirming download access was sent", "Access token or license key issuance record"].map((i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="mt-1.5 h-1 w-1 rounded-full bg-slate-300 shrink-0" />{i}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Common mistakes */}
      <section className="flex flex-col gap-4">
        <h2 className="text-xl font-bold text-slate-900">Common mistakes in service not received responses</h2>
        <ul className="flex flex-col gap-2.5 text-sm text-slate-600 leading-relaxed list-none">
          {[
            "Relying only on the payment receipt — Stripe already has this; it doesn't prove the service was delivered",
            "No post-purchase activity records — if you can't show the customer accessed the product, this is a weak response",
            "Unorganized evidence — submitting a folder of screenshots without explanations makes it hard for the reviewer to follow your case",
            "Missing the response window — Stripe dispute deadlines are firm; late responses are not accepted",
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
          Organize your service not received evidence with ProofPack
        </h2>
        <p className="text-sm text-emerald-100 max-w-sm leading-relaxed">
          ProofPack guides you through the evidence your case needs, structures your timeline, and
          packages everything into a clean PDF. $4.99 one-time, no account required.
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
            <Link href="/subscription-canceled-evidence" className="text-emerald-600 hover:text-emerald-700">
              Subscription canceled or not recognized — evidence guide
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
