import type { Metadata } from "next";
import Link from "next/link";
import PageIllustration from "@/components/ui/PageIllustration";
import AccordionItem from "@/components/ui/AccordionItem";

export const metadata: Metadata = {
  title: "ProofPack — Stripe Chargeback Evidence Builder | $4.99",
  description:
    "Turn scattered customer proof into a structured, dispute-ready evidence pack. ProofPack helps Stripe SaaS and digital product businesses organize chargeback evidence and respond to disputes in minutes. $4.99 one-time payment.",
  alternates: {
    canonical: "https://proofpack.pro",
  },
  openGraph: {
    title: "ProofPack — Stripe Chargeback Evidence Builder",
    description:
      "Turn scattered customer proof into a clean, dispute-ready evidence pack for Stripe SaaS and digital product disputes. $4.99 one-time payment.",
    url: "https://proofpack.pro",
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
  },
};

const HOW_IT_WORKS = [
  {
    step: "1",
    title: "Choose your dispute type",
    description:
      "Select the category that matches your case: unauthorized transaction, service not received, subscription not recognized, or product not as described.",
  },
  {
    step: "2",
    title: "Enter your case details",
    description:
      "Add the order date, amount, product name, fulfillment details, and a summary of any customer communication.",
  },
  {
    step: "3",
    title: "Upload supporting files",
    description:
      "Attach screenshots, receipts, email exports, or other documents. Each file is labeled and organized automatically.",
  },
  {
    step: "4",
    title: "Download your evidence pack",
    description:
      "Pay a one-time $4.99 fee and download a structured PDF — case summary, auto-generated timeline, and all uploaded evidence — ready to submit to Stripe.",
  },
];

const WHAT_GOES_IN = [
  {
    title: "Case summary",
    description: "Customer name, order date, amount, product, and dispute type in a clean structured layout.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
        <rect x="2" y="2" width="14" height="14" rx="2.5" stroke="currentColor" strokeWidth="1.3" />
        <path d="M5 6h8M5 9h5M5 12h6" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Evidence timeline",
    description: "An auto-generated chronological sequence: purchase, fulfillment, customer contact, and dispute date.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
        <circle cx="9" cy="9" r="7" stroke="currentColor" strokeWidth="1.3" />
        <path d="M9 5.5v4l2.5 2" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Product and fulfillment details",
    description: "A clear description of what was sold, how it was delivered, and when access was granted.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
        <rect x="2" y="5" width="14" height="10" rx="2" stroke="currentColor" strokeWidth="1.3" />
        <path d="M5 5V4a4 4 0 018 0v1" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Customer communication log",
    description: "A structured summary of relevant emails, tickets, or messages exchanged before the dispute.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
        <path d="M3 4h12a1 1 0 011 1v7a1 1 0 01-1 1H5l-3 2V5a1 1 0 011-1z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Uploaded evidence files",
    description: "Screenshots and images rendered inline. PDFs appended as additional pages. Other files listed by name.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
        <path d="M10 2H5a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7L10 2z" stroke="currentColor" strokeWidth="1.3" />
        <path d="M10 2v5h5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" opacity="0.6" />
      </svg>
    ),
  },
  {
    title: "Additional context",
    description: "Policy notes, unusual circumstances, or any other detail the reviewer needs to understand your case.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
        <circle cx="9" cy="9" r="7" stroke="currentColor" strokeWidth="1.3" />
        <path d="M9 8v4M9 6h.01" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      </svg>
    ),
  },
];

const TRUST_POINTS = [
  {
    title: "No login required",
    description: "Start building immediately. No account, no signup form, no email confirmation.",
  },
  {
    title: "No data stored",
    description: "Everything runs in your browser session. Nothing is saved to a server or database. Your case stays private.",
  },
  {
    title: "Structured, not generic",
    description: "The output is organized around the specific evidence types card networks look for in dispute reviews.",
  },
  {
    title: "Built for SaaS and digital products",
    description: "The fields, prompts, and structure are designed around the realities of software subscriptions and digital goods — not physical retail.",
  },
];

const FOR_WHO = [
  "Stripe-based SaaS products",
  "Online course and digital download sellers",
  "Subscription software businesses",
  "Freelancers and consultants facing payment disputes",
  "Any digital business that needs to respond to Stripe chargebacks",
];

const NOT_FOR = [
  "Physical goods with shipping disputes",
  "Businesses not using Stripe",
  "Cases that require legal representation",
];

const DISPUTE_TYPES = [
  {
    title: "Unauthorized transaction",
    description:
      "The cardholder claims they did not authorize the payment. Evidence typically includes login records, IP addresses, and device confirmation.",
    link: "/unauthorized-transaction-evidence",
  },
  {
    title: "Service not received",
    description:
      "The customer claims they never received access to the product or service they paid for. Delivery confirmation and access logs are key.",
    link: "/service-not-received-evidence",
  },
  {
    title: "Subscription canceled or not recognized",
    description:
      "The customer disputes a recurring charge, often claiming they canceled or don't recognize the billing. Subscription history and cancellation records are essential.",
    link: "/subscription-canceled-evidence",
  },
  {
    title: "Product not as described",
    description:
      "The customer claims the product or service did not match what was advertised or promised. Documentation of what was delivered compared to what was listed is key.",
    link: "/product-not-as-described-evidence",
  },
];

const FAQ_ITEMS = [
  {
    q: "What is a chargeback evidence pack?",
    a: "When a customer disputes a charge with their bank, Stripe (and the card network) asks the merchant to respond with documented evidence. A well-organized evidence pack typically includes a case summary, a chronological timeline of events, proof of delivery or fulfillment, customer communication records, and supporting files like screenshots or receipts.",
  },
  {
    q: "Does ProofPack guarantee I will win my dispute?",
    a: "No. ProofPack helps you organize and structure your evidence — it does not predict or influence dispute outcomes. Whether a dispute is decided in your favor depends on the evidence, the dispute reason code, the card network's rules, and the bank's judgment.",
  },
  {
    q: "Is my case data saved anywhere?",
    a: "No. All data you enter is stored only in your browser's sessionStorage for the duration of your current session. Nothing is sent to or stored on ProofPack servers. When you close the tab, the data is gone.",
  },
  {
    q: "What file types can I upload as evidence?",
    a: "You can upload JPEG and PNG screenshots (rendered inline in the PDF), PDFs (appended as additional pages), and other file types (listed in the evidence index). Total upload size is limited to approximately 4–5 MB due to browser and export constraints.",
  },
  {
    q: "Can I edit the PDF after downloading?",
    a: "The exported PDF is not locked, so you can annotate it with a standard PDF editor. However, ProofPack does not include a built-in editing step — the output is meant to be complete as generated.",
  },
  {
    q: "What dispute types does ProofPack support?",
    a: "ProofPack currently supports four dispute types: unauthorized transaction, service not received, subscription canceled or not recognized, and product not as described. These cover the most common Stripe chargeback scenarios for SaaS and digital product businesses.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "ProofPack",
  url: "https://proofpack.pro",
  applicationCategory: "BusinessApplication",
  description:
    "Turn scattered customer proof into a clean, dispute-ready evidence pack for Stripe SaaS and digital product disputes.",
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
            For Stripe-based SaaS &amp; digital products
          </span>

          <p className="text-sm font-semibold tracking-widest text-emerald-600 uppercase">
            ProofPack
          </p>

          <h1 className="text-4xl font-bold tracking-tight text-slate-900 leading-tight max-w-xl">
            Build a structured, dispute-ready{" "}
            <span className="text-emerald-600">Stripe chargeback evidence pack</span>{" "}
            in minutes.
          </h1>

          <p className="text-base text-slate-500 leading-relaxed max-w-md">
            Organize your case summary, fulfillment records, customer communication, and supporting
            files into one structured PDF — ready to submit to Stripe.
          </p>

          <div className="flex flex-col items-center gap-3 sm:flex-row sm:gap-4">
            <Link
              href="/builder"
              className="inline-flex items-center gap-2 rounded-lg bg-emerald-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-emerald-700 active:bg-emerald-800"
            >
              Build your evidence pack
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
              alt="Documents being organized and reviewed into a structured evidence pack"
              width={800}
              height={600}
              withPanel
              priority
            />
          </div>
        </section>

        {/* ── 2. How ProofPack Works ── */}
        <section id="how-it-works" className="flex flex-col gap-8 scroll-mt-20">
          <div className="text-center">
            <h2 className="text-2xl font-bold tracking-tight text-slate-900">
              How ProofPack works
            </h2>
            <p className="mt-2 text-sm text-slate-500 max-w-sm mx-auto">
              Four focused steps from dispute details to a download-ready evidence pack.
            </p>
          </div>

          <ol className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {HOW_IT_WORKS.map((item) => (
              <li key={item.step}>
                <div className="rounded-xl border border-slate-200 bg-white shadow-sm">
                  <div className="flex items-start gap-3 p-5">
                    <div className="shrink-0">
                      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-600 text-xs font-bold text-white">
                        {item.step}
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

        {/* ── 3. Why Businesses Use ProofPack ── */}
        <section className="flex flex-col gap-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold tracking-tight text-slate-900">
              Why businesses use ProofPack
            </h2>
            <p className="mt-2 text-sm text-slate-500 max-w-sm mx-auto">
              Built around one practical goal: getting your evidence organized and submitted clearly.
            </p>
          </div>

          <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {TRUST_POINTS.map((item) => (
              <li key={item.title}>
                <div className="rounded-xl border border-slate-200 bg-white shadow-sm">
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
              <h3 className="text-base font-semibold text-emerald-900 mb-4">Who ProofPack is for</h3>
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
              <h3 className="text-base font-semibold text-slate-700 mb-4">Who it&apos;s not designed for</h3>
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

        {/* ── 4. Supported Dispute Types ── */}
        <section className="flex flex-col gap-6">
          <div className="text-center">
            <h2 className="text-2xl font-bold tracking-tight text-slate-900">
              Supported dispute types
            </h2>
            <p className="mt-2 text-sm text-slate-500 max-w-sm mx-auto">
              ProofPack covers the four most common Stripe chargeback reason codes for SaaS and digital products.
            </p>
          </div>

          <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {DISPUTE_TYPES.map((item) => (
              <li key={item.title}>
                <AccordionItem
                  title={item.title}
                  link={{ href: item.link, label: "What evidence to gather" }}
                >
                  {item.description}
                </AccordionItem>
              </li>
            ))}
          </ul>
        </section>

        {/* ── 5. CTA ── */}
        <section className="rounded-2xl bg-emerald-600 px-8 py-12 text-center flex flex-col items-center gap-5">
          <h2 className="text-2xl font-bold tracking-tight text-white">
            Ready to build your evidence pack?
          </h2>
          <p className="text-sm text-emerald-100 max-w-sm leading-relaxed">
            No login, no setup. Build and download your structured, dispute-ready evidence pack in under 10 minutes.
          </p>
          <div className="flex flex-col items-center gap-2">
            <Link
              href="/builder"
              className="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 text-sm font-semibold text-emerald-700 shadow-sm transition-colors hover:bg-emerald-50 active:bg-emerald-100"
            >
              Build your evidence pack
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
            <span className="text-xs text-emerald-200">
              $4.99 one-time payment · No account · No data stored
            </span>
          </div>
        </section>

        {/* ── 6. What Goes Into Your Evidence Pack ── */}
        <section className="flex flex-col gap-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold tracking-tight text-slate-900">
              What goes into your evidence pack
            </h2>
            <p className="mt-2 text-sm text-slate-500 max-w-sm mx-auto">
              ProofPack structures your case around the evidence types that dispute reviewers actually look for.
            </p>
          </div>

          <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {WHAT_GOES_IN.map((item) => (
              <li key={item.title}>
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

        {/* ── 7. Image ── */}
        <section className="flex flex-col gap-4">
          <div className="w-full overflow-hidden rounded-2xl">
            <PageIllustration
              src="/illustrations/00_Professionelle Interaktionen mit ProofPack-Software.png"
              alt="Professional interactions with ProofPack software"
              width={1200}
              height={800}
            />
          </div>
        </section>

        {/* ── 8. FAQ ── */}
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

          <div className="rounded-xl border border-slate-100 bg-slate-50 p-5">
            <p className="text-sm font-medium text-slate-700 mb-3">Related guides</p>
            <ul className="flex flex-col gap-2 text-sm text-slate-500">
              <li>
                <Link href="/stripe-chargeback-evidence" className="text-emerald-600 hover:text-emerald-700">
                  What to include in a Stripe chargeback evidence pack
                </Link>
              </li>
              <li>
                <Link href="/digital-product-chargeback-evidence" className="text-emerald-600 hover:text-emerald-700">
                  Chargeback evidence for digital products and SaaS
                </Link>
              </li>
              <li>
                <Link href="/chargeback-evidence-template" className="text-emerald-600 hover:text-emerald-700">
                  Evidence template: sections every dispute pack should include
                </Link>
              </li>
              <li>
                <Link href="/unauthorized-transaction-evidence" className="text-emerald-600 hover:text-emerald-700">
                  Unauthorized transaction: login records, IP data, and device evidence
                </Link>
              </li>
              <li>
                <Link href="/service-not-received-evidence" className="text-emerald-600 hover:text-emerald-700">
                  Service not received: proving delivery and access
                </Link>
              </li>
              <li>
                <Link href="/subscription-canceled-evidence" className="text-emerald-600 hover:text-emerald-700">
                  Subscription disputes: cancellation records and billing history
                </Link>
              </li>
              <li>
                <Link href="/product-not-as-described-evidence" className="text-emerald-600 hover:text-emerald-700">
                  Product not as described: comparing advertised vs. delivered
                </Link>
              </li>
            </ul>
          </div>
        </section>

      </div>
    </>
  );
}
