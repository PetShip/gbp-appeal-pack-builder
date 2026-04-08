import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Product Not as Described Chargeback Evidence — What to Include",
  description:
    "Learn what evidence to gather when responding to a product not as described dispute on Stripe. Covers product documentation, delivery records, customer communication, and advertising comparison.",
  alternates: {
    canonical: "https://proofpack.pro/product-not-as-described-evidence",
  },
  robots: {
    index: false,
    follow: false,
  },
  openGraph: {
    title: "Product Not as Described Chargeback Evidence — What to Include",
    description:
      "A practical guide to gathering evidence for Stripe product not as described disputes.",
    url: "https://proofpack.pro/product-not-as-described-evidence",
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
  },
};

export default function ProductNotAsDescribedEvidence() {
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://proofpack.pro" },
      { "@type": "ListItem", position: 2, name: "Product Not as Described Chargeback Evidence — What to Include", item: "https://proofpack.pro/product-not-as-described-evidence" },
    ],
  };
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Product Not as Described Chargeback Evidence — What to Include",
    description: "Learn what evidence to gather when responding to a product not as described dispute on Stripe. Covers product documentation, delivery records, customer communication, and advertising comparison.",
    url: "https://proofpack.pro/product-not-as-described-evidence",
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
          <span>Product Not as Described Evidence</span>
        </div>
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 leading-snug">
          Product Not as Described Chargeback Evidence: What to Include
        </h1>
        <p className="text-base text-slate-500 leading-relaxed max-w-prose">
          A product not as described dispute means the customer is claiming that what they received
          was materially different from what was advertised or promised. For digital products and SaaS,
          this is often about feature expectations, delivery format, or scope mismatches. Here is how
          to document your case effectively.
        </p>
      </header>

      {/* What this dispute type means */}
      <section className="flex flex-col gap-4">
        <h2 className="text-xl font-bold text-slate-900">What a product not as described dispute means</h2>
        <p className="text-sm text-slate-600 leading-relaxed">
          Stripe labels this under reason codes like <strong>4853</strong> (Visa) or
          <strong> 4859</strong> (Mastercard). The cardholder is arguing that the product or service
          they received was significantly different from what was promised at the time of purchase.
          For digital businesses, common scenarios include:
        </p>
        <ul className="flex flex-col gap-2 text-sm text-slate-600 leading-relaxed list-none">
          {[
            "The customer expected features that were not included in the tier they purchased",
            "The product was described as including something that was not delivered",
            "The customer's expectations were based on a misreading of your marketing or product page",
            "The product changed after the customer purchased and before they used it",
            "The customer disagrees with a refund denial and is using a dispute as a last resort",
          ].map((item) => (
            <li key={item} className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-slate-400 shrink-0" />
              {item}
            </li>
          ))}
        </ul>
        <p className="text-sm text-slate-600 leading-relaxed">
          Your response needs to show what was promised, what was delivered, and that the two are
          consistent — or that the customer misunderstood a clear and accurate product description.
        </p>
      </section>

      {/* Key evidence */}
      <section className="flex flex-col gap-5">
        <h2 className="text-xl font-bold text-slate-900">Key evidence to include</h2>

        <div className="flex flex-col gap-4">

          <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm flex flex-col gap-2">
            <h3 className="text-sm font-semibold text-slate-900">Product description at time of purchase</h3>
            <p className="text-sm text-slate-500 leading-relaxed">
              A screenshot of your product page, pricing page, or sales materials as they existed
              at the time the customer purchased. This is your most important piece of evidence —
              it establishes what was actually advertised. Use archived screenshots or Wayback Machine
              captures if the page has changed since the purchase.
            </p>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm flex flex-col gap-2">
            <h3 className="text-sm font-semibold text-slate-900">Proof of what was delivered</h3>
            <p className="text-sm text-slate-500 leading-relaxed">
              Documentation showing what the customer actually received. For SaaS, this includes
              what features and access the customer had based on their plan. For digital downloads,
              this includes the file or content that was delivered. For services, this includes
              deliverables, meeting records, or work product.
            </p>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm flex flex-col gap-2">
            <h3 className="text-sm font-semibold text-slate-900">Comparison of advertised vs. delivered</h3>
            <p className="text-sm text-slate-500 leading-relaxed">
              A clear, factual side-by-side summary explaining what was advertised and what was
              delivered — and why they match. Address the customer&apos;s specific complaint directly.
              If they claimed a feature was missing, explain whether that feature is included in
              their plan or is part of a different tier.
            </p>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm flex flex-col gap-2">
            <h3 className="text-sm font-semibold text-slate-900">Terms of service and refund policy</h3>
            <p className="text-sm text-slate-500 leading-relaxed">
              Your terms of service as they existed at purchase, particularly any clauses relating
              to product scope, delivery expectations, or refund eligibility. A screenshot of the
              checkout page showing the customer agreed to your terms before purchasing is useful here.
            </p>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm flex flex-col gap-2">
            <h3 className="text-sm font-semibold text-slate-900">Customer communication about the complaint</h3>
            <p className="text-sm text-slate-500 leading-relaxed">
              Any support tickets, emails, or messages where the customer raised a concern before
              disputing — and how you responded. If you offered a resolution and the customer
              proceeded with a dispute anyway, include that exchange. If the customer never contacted
              support before disputing, note that too.
            </p>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm flex flex-col gap-2">
            <h3 className="text-sm font-semibold text-slate-900">Usage evidence</h3>
            <p className="text-sm text-slate-500 leading-relaxed">
              Login records, feature usage data, or other activity showing the customer used the
              product. Active usage after purchase — particularly over multiple sessions — weakens
              a claim that the product was significantly different from what was expected.
            </p>
          </div>

        </div>
      </section>

      {/* Handling tricky scenarios */}
      <section className="flex flex-col gap-4">
        <h2 className="text-xl font-bold text-slate-900">Handling specific scenarios</h2>
        <div className="flex flex-col gap-3 text-sm text-slate-600">
          <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="font-medium text-slate-800 mb-1.5">Customer expected a feature not included in their plan</p>
            <p className="leading-relaxed">Show a screenshot of your pricing or features page that clearly shows what each plan includes. Document what plan the customer purchased and confirm it matches what they received. If the feature they expected is only in a higher plan, show that distinction clearly.</p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="font-medium text-slate-800 mb-1.5">Product changed after purchase</p>
            <p className="leading-relaxed">If your product has changed since the customer purchased, document what the product looked like at the time of purchase. Show that changes were communicated, or that core functionality remained consistent with what was advertised. If customers were given adequate notice of changes, include that communication.</p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="font-medium text-slate-800 mb-1.5">Customer claims a service deliverable was inadequate</p>
            <p className="leading-relaxed">For service disputes, document what was agreed upon (contract, scope of work, email discussion), what was delivered (files, reports, recordings, deliverable list), and any sign-off or approval from the customer. A clear scope document prevents most of these disputes from escalating.</p>
          </div>
        </div>
      </section>

      {/* Common mistakes */}
      <section className="flex flex-col gap-4">
        <h2 className="text-xl font-bold text-slate-900">Common mistakes in product not as described responses</h2>
        <ul className="flex flex-col gap-2.5 text-sm text-slate-600 leading-relaxed list-none">
          {[
            "Submitting only delivery evidence without addressing the description mismatch claim — the reviewer needs to see what was advertised and what was delivered",
            "Providing current product screenshots when the product page has changed since purchase — use archived or dated screenshots",
            "Not addressing the customer's specific complaint — if they claimed X feature was missing, address that directly",
            "Arguing tone instead of substance — keep your response factual and let the evidence speak",
            "Missing communication records — if the customer contacted you before disputing, include that exchange",
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
          Build your evidence pack for a product not as described dispute
        </h2>
        <p className="text-sm text-emerald-100 max-w-sm leading-relaxed">
          ProofPack walks you through the evidence your case needs, structures your timeline and
          product comparison, and packages everything into one clean PDF. $4.99 one-time.
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
            <Link href="/subscription-canceled-evidence" className="text-emerald-600 hover:text-emerald-700">
              Subscription canceled or not recognized — evidence guide
            </Link>
          </li>
          <li>
            <Link href="/service-not-received-evidence" className="text-emerald-600 hover:text-emerald-700">
              Service not received — evidence guide
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
