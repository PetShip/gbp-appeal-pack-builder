import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Business Information Mismatch on Google Business Profile",
  description:
    "What business information mismatches mean for your GBP listing, why they trigger suspensions, and how to resolve them when preparing a reinstatement appeal.",
  alternates: {
    canonical: "https://appealkit.pro/guides/business-information-mismatch-google-business-profile",
  },
  openGraph: {
    title: "Business Information Mismatch on Google Business Profile",
    description:
      "Understand why information mismatches trigger GBP suspensions and how to resolve inconsistencies in your appeal.",
    url: "https://appealkit.pro/guides/business-information-mismatch-google-business-profile",
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
  },
};

const FAQ = [
  {
    q: "Does my business name on GBP need to match my legal registered name exactly?",
    a: "It should match your real-world business name — what customers see on your signage, website, and invoices. If you trade under a name that differs from your legal entity name, a DBA (Doing Business As) registration that confirms the connection is a useful supporting document.",
  },
  {
    q: "What if my business has recently moved addresses?",
    a: "Update your GBP listing to reflect the new address before appealing. Include documentation that shows both the old and new address with a transition date if possible — such as a new lease agreement or updated utility bill — so the change can be verified.",
  },
  {
    q: "Can minor differences in address formatting cause a suspension?",
    a: "They can contribute to a flag, especially when combined with other inconsistencies. Street address abbreviations, missing suite numbers, or differing postal code formats across your website, GBP, and documents can all be flagged. Aim for exact consistency.",
  },
  {
    q: "Do I need to fix the mismatch before I appeal, or can I explain it in the appeal?",
    a: "Where possible, correct the mismatch first and then appeal, explaining the correction in your submission. If the mismatch is in external records (such as a registration that takes time to update), document the correction in progress and include what you have available.",
  },
];

export default function BusinessInfoMismatchGBPPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Business Information Mismatch on Google Business Profile",
    description:
      "What business information mismatches mean for your GBP listing, why they trigger suspensions, and how to resolve them when preparing a reinstatement appeal.",
    url: "https://appealkit.pro/guides/business-information-mismatch-google-business-profile",
    publisher: {
      "@type": "Organization",
      name: "AppealKit",
      url: "https://appealkit.pro",
    },
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <div className="flex flex-col gap-10 max-w-2xl">
        {/* Breadcrumb */}
        <nav className="text-xs text-slate-400 flex items-center gap-1.5">
          <Link href="/" className="hover:text-slate-600 transition-colors">AppealKit</Link>
          <span>›</span>
          <Link href="/guides" className="hover:text-slate-600 transition-colors">Guides</Link>
          <span>›</span>
          <span className="text-slate-500">Business information mismatch</span>
        </nav>

        {/* Header */}
        <div className="flex flex-col gap-3">
          <p className="text-sm font-semibold tracking-widest text-emerald-600 uppercase">Guide</p>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            Business information mismatch on Google Business Profile
          </h1>
          <p className="text-base text-slate-500 leading-relaxed">
            One of the most common reasons a Google Business Profile gets suspended or flagged
            is inconsistent business information — mismatches between what is on the GBP, what
            is on your website, and what appears in official business records. This guide explains
            what counts as a mismatch, why it matters, and how to address it in a reinstatement
            appeal.
          </p>
        </div>

        {/* Why mismatches trigger suspensions */}
        <section className="flex flex-col gap-4">
          <h2 className="text-xl font-semibold text-slate-900">Why information mismatches trigger GBP suspensions</h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            Google's verification systems compare the information on your Business Profile against
            signals it can verify externally — your website, business directory listings, mapping
            data, and public records. When the data points do not align, automated systems may
            flag the listing for review or apply a suspension.
          </p>
          <p className="text-sm text-slate-600 leading-relaxed">
            The most common mismatch types that lead to a flagged or suspended profile are:
          </p>
          <ul className="flex flex-col gap-2 text-sm text-slate-600 leading-relaxed list-disc pl-5">
            <li>Business name on GBP differs from the name on registration documents or website</li>
            <li>Address on GBP does not match the address on utility bills, registration, or the website</li>
            <li>Primary business category does not reflect the actual business type or services</li>
            <li>Phone number or website URL differs from what is on other directories or official sources</li>
            <li>Business details were recently changed (triggering a re-verification requirement)</li>
          </ul>
        </section>

        {/* Most common mismatch types */}
        <section className="flex flex-col gap-5">
          <h2 className="text-xl font-semibold text-slate-900">The most common mismatch scenarios</h2>

          <div className="flex flex-col gap-4">
            <div className="rounded-xl border border-slate-200 bg-white p-5">
              <h3 className="text-sm font-semibold text-slate-800 mb-2">Business name mismatch</h3>
              <p className="text-sm text-slate-500 leading-relaxed mb-2">
                The GBP listing uses a marketing name, abbreviation, or keyword-stuffed name that
                does not match the official registered business name or how the business is
                consistently identified elsewhere.
              </p>
              <p className="text-xs text-slate-400 leading-relaxed">
                Example: GBP shows "Chicago Quick Plumbers LLC" but the registration and website
                show "Moretti Plumbing Services LLC".
              </p>
            </div>

            <div className="rounded-xl border border-slate-200 bg-white p-5">
              <h3 className="text-sm font-semibold text-slate-800 mb-2">Address mismatch</h3>
              <p className="text-sm text-slate-500 leading-relaxed mb-2">
                The address on the GBP listing does not exactly match the address on utility
                bills, lease agreements, or the business website — even minor formatting
                differences can contribute to a flag.
              </p>
              <p className="text-xs text-slate-400 leading-relaxed">
                Example: GBP shows "123 Main St" but the utility bill shows "123 Main Street,
                Suite 4B". The listed address may also differ from the address used on Google Maps.
              </p>
            </div>

            <div className="rounded-xl border border-slate-200 bg-white p-5">
              <h3 className="text-sm font-semibold text-slate-800 mb-2">Category mismatch</h3>
              <p className="text-sm text-slate-500 leading-relaxed mb-2">
                The selected business category does not match the services described on the
                website or other directory listings, or it was set to something vague or
                inaccurate to gain broader visibility.
              </p>
              <p className="text-xs text-slate-400 leading-relaxed">
                Example: A tax preparation service listed under "Accountant" when the category
                "Tax Preparation Service" is more accurate and verifiable.
              </p>
            </div>

            <div className="rounded-xl border border-slate-200 bg-white p-5">
              <h3 className="text-sm font-semibold text-slate-800 mb-2">Website or phone inconsistency</h3>
              <p className="text-sm text-slate-500 leading-relaxed mb-2">
                The phone number or website on the GBP listing does not match what appears on
                the website itself, business registration, or other directories. Redirects or
                tracking numbers can sometimes be flagged.
              </p>
            </div>
          </div>
        </section>

        {/* How to audit your profile */}
        <section className="flex flex-col gap-4">
          <h2 className="text-xl font-semibold text-slate-900">How to audit your profile for mismatches</h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            Before preparing your appeal, do a consistency check across these sources:
          </p>
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
            <ol className="flex flex-col gap-3 text-sm text-slate-600 leading-relaxed list-decimal pl-4">
              <li>
                <strong>Your GBP listing</strong> — Note the exact business name, address,
                category, phone number, and website URL as they currently appear.
              </li>
              <li>
                <strong>Your business registration document</strong> — Compare the legal name
                and registered address. Note any DBA filings if you operate under a different name.
              </li>
              <li>
                <strong>Your website</strong> — Check the name, address, phone, and category
                described on your homepage and contact page.
              </li>
              <li>
                <strong>Utility bills and bank statements</strong> — Confirm the name and
                address on these match your GBP listing exactly.
              </li>
              <li>
                <strong>Other directory listings</strong> — Check Yelp, BBB, Bing Places, or
                industry directories for the same business data.
              </li>
            </ol>
          </div>
          <p className="text-sm text-slate-500 leading-relaxed">
            Any field that differs across these sources is worth noting and, where possible,
            correcting before you appeal.
          </p>
        </section>

        {/* How to address a mismatch in an appeal */}
        <section className="flex flex-col gap-4">
          <h2 className="text-xl font-semibold text-slate-900">Addressing a mismatch in your reinstatement appeal</h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            When the likely cause of your suspension is a mismatch, your appeal should do three things:
          </p>
          <ol className="flex flex-col gap-2 text-sm text-slate-600 leading-relaxed list-decimal pl-5">
            <li>
              <strong>Acknowledge the inconsistency</strong> — briefly explain what discrepancy may
              have triggered the flag and why it occurred.
            </li>
            <li>
              <strong>Show the correction</strong> — if you have already corrected the GBP listing
              to match official records, state that clearly.
            </li>
            <li>
              <strong>Provide supporting documentation</strong> — include business registration,
              utility bills, and photos that confirm your actual business name, address, and
              category.
            </li>
          </ol>
          <p className="text-sm text-slate-600 leading-relaxed">
            AppealKit includes a <em>documentation mismatch</em> appeal type for exactly this
            scenario. It guides you through entering the corrected business details and uploading
            the relevant documents. See also:{" "}
            <Link
              href="/guides/google-business-profile-suspended-documents"
              className="text-emerald-600 underline hover:text-emerald-700"
            >
              What documents do you need for a GBP suspension appeal
            </Link>
            .
          </p>
        </section>

        {/* Common mistakes */}
        <section className="flex flex-col gap-4">
          <h2 className="text-xl font-semibold text-slate-900">Common mistakes when dealing with a mismatch</h2>
          <ul className="flex flex-col gap-2 text-sm text-slate-600 leading-relaxed list-disc pl-5">
            <li>
              <strong>Fixing the GBP but not updating external sources.</strong> If your website
              or other directories still show the old address or name, the inconsistency remains
              and can be flagged again.
            </li>
            <li>
              <strong>Using a different name in the appeal than on the documents submitted.</strong>{" "}
              Every piece of information in your appeal should be consistent with the documents
              you attach.
            </li>
            <li>
              <strong>Appealing without first identifying the mismatch.</strong> If you do not
              know what triggered the suspension, take time to audit the profile before submitting.
            </li>
            <li>
              <strong>Not explaining why the mismatch occurred.</strong> A brief, honest explanation
              (e.g., "we recently moved addresses and the GBP was not updated promptly") gives
              reviewers the context to understand the situation.
            </li>
          </ul>
        </section>

        {/* FAQ */}
        <section className="flex flex-col gap-4">
          <h2 className="text-xl font-semibold text-slate-900">Frequently asked questions</h2>
          <dl className="flex flex-col gap-3">
            {FAQ.map((item) => (
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

        {/* CTA */}
        <section className="rounded-2xl bg-emerald-600 px-8 py-10 text-center flex flex-col items-center gap-4">
          <h2 className="text-xl font-bold tracking-tight text-white">
            Organise your appeal for a documentation mismatch
          </h2>
          <p className="text-sm text-emerald-100 max-w-sm leading-relaxed">
            AppealKit supports documentation mismatch appeals. Enter your corrected business
            details, upload supporting documents, and export a structured appeal pack.
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
