import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "What Documents Do You Need for a Google Business Profile Suspension Appeal?",
  description:
    "A practical document checklist for GBP suspension appeals — what to gather, what to avoid, and how to organise your files before you submit.",
  alternates: {
    canonical: "https://appealkit.pro/guides/google-business-profile-suspended-documents",
  },
  openGraph: {
    title: "What Documents Do You Need for a Google Business Profile Suspension Appeal?",
    description:
      "A practical document checklist for GBP suspension appeals — what to gather, what to avoid, and how to organise your files before you submit.",
    url: "https://appealkit.pro/guides/google-business-profile-suspended-documents",
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
  },
};

const FAQ = [
  {
    q: "Do I need every document on the list?",
    a: "No. Include what is most relevant to your business type and the likely reason for the suspension. A few well-chosen, clear documents are more useful than a large pile of loosely related files.",
  },
  {
    q: "My business does not have a storefront — what can I use?",
    a: "Service-area businesses can use business registration documents, tax filings, invoices with your business name, a professional website, photos of branded vehicles or equipment, or bank statements showing business activity.",
  },
  {
    q: "Can I upload documents directly in Google's appeal form?",
    a: "Some Google support channels accept file attachments. Having your documents collected and named in advance makes it faster to attach only what is needed for each field.",
  },
  {
    q: "What file formats should I use for my documents?",
    a: "PDF and JPEG are widely accepted in most file submission contexts. For photos, JPEG or PNG are standard. Where possible, use clear, readable scans or high-quality photos rather than small or blurry images.",
  },
];

export default function GBPSuspendedDocumentsPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "What Documents Do You Need for a Google Business Profile Suspension Appeal?",
    description:
      "A practical document checklist for GBP suspension appeals — what to gather, what to avoid, and how to organise your files before you submit.",
    url: "https://appealkit.pro/guides/google-business-profile-suspended-documents",
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
          <span className="text-slate-500">Documents needed for a GBP appeal</span>
        </nav>

        {/* Header */}
        <div className="flex flex-col gap-3">
          <p className="text-sm font-semibold tracking-widest text-emerald-600 uppercase">Guide</p>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            What documents do you need for a Google Business Profile suspension appeal?
          </h1>
          <p className="text-base text-slate-500 leading-relaxed">
            When preparing a GBP suspension appeal, having the right documents ready before you
            start saves time and reduces the risk of submitting an incomplete case. This guide
            covers what documents are typically useful, how to choose between them, and how to
            organise them effectively.
          </p>
        </div>

        {/* Why documents matter */}
        <section className="flex flex-col gap-4">
          <h2 className="text-xl font-semibold text-slate-900">Why documentation matters in a GBP appeal</h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            Google suspends listings when it cannot verify that a business is legitimate, correctly
            represented, or compliant with its Business Profile policies. The reinstatement process
            is essentially a verification process — your documents are the evidence that supports
            your claim that the listing is accurate and the business is real.
          </p>
          <p className="text-sm text-slate-600 leading-relaxed">
            A common reason appeals stall or fail is not a lack of documents — it is submitting
            documents that are not clearly relevant to the specific concern that triggered the
            suspension.
          </p>
        </section>

        {/* Core documents by category */}
        <section className="flex flex-col gap-5">
          <h2 className="text-xl font-semibold text-slate-900">Document checklist by category</h2>

          <div className="flex flex-col gap-4">
            <div className="rounded-xl border border-slate-200 bg-white p-5">
              <h3 className="text-sm font-semibold text-slate-800 mb-2">
                Business registration and legal identity
              </h3>
              <ul className="flex flex-col gap-1.5 text-sm text-slate-500 leading-relaxed list-disc pl-4">
                <li>Business registration certificate (state, county, or national registration)</li>
                <li>Articles of incorporation or LLC formation documents</li>
                <li>Fictitious business name (DBA) registration if the trading name differs</li>
                <li>Business licence issued by a local authority</li>
              </ul>
            </div>

            <div className="rounded-xl border border-slate-200 bg-white p-5">
              <h3 className="text-sm font-semibold text-slate-800 mb-2">
                Address and location verification
              </h3>
              <ul className="flex flex-col gap-1.5 text-sm text-slate-500 leading-relaxed list-disc pl-4">
                <li>Utility bill (electricity, gas, water, internet) in the business name at the listed address</li>
                <li>Bank or credit card statement showing the business name and address</li>
                <li>Commercial lease or rental agreement for your business premises</li>
                <li>Property tax bill or deed if you own the premises</li>
              </ul>
            </div>

            <div className="rounded-xl border border-slate-200 bg-white p-5">
              <h3 className="text-sm font-semibold text-slate-800 mb-2">
                Photos of the business
              </h3>
              <ul className="flex flex-col gap-1.5 text-sm text-slate-500 leading-relaxed list-disc pl-4">
                <li>Exterior photo showing the storefront and visible street address or signage</li>
                <li>Interior photos showing the business in operation</li>
                <li>Branded vehicle or equipment photos (for mobile or service-area businesses)</li>
                <li>Staff or team photos with identifiable business branding</li>
              </ul>
            </div>

            <div className="rounded-xl border border-slate-200 bg-white p-5">
              <h3 className="text-sm font-semibold text-slate-800 mb-2">
                Operational evidence
              </h3>
              <ul className="flex flex-col gap-1.5 text-sm text-slate-500 leading-relaxed list-disc pl-4">
                <li>Customer invoices or receipts showing the business name and address</li>
                <li>Insurance certificate (general liability or professional liability)</li>
                <li>Professional licence (if your industry is regulated — contractor, healthcare, etc.)</li>
                <li>Tax registration number or employer identification documents</li>
              </ul>
            </div>

            <div className="rounded-xl border border-slate-200 bg-white p-5">
              <h3 className="text-sm font-semibold text-slate-800 mb-2">
                Online presence references
              </h3>
              <ul className="flex flex-col gap-1.5 text-sm text-slate-500 leading-relaxed list-disc pl-4">
                <li>Your business website URL (should match name, category, and address on the GBP)</li>
                <li>Other verified directory listings (Yelp, BBB, industry directories) showing consistent information</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Choosing the right documents */}
        <section className="flex flex-col gap-4">
          <h2 className="text-xl font-semibold text-slate-900">Choosing the right documents for your situation</h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            Not every document on the list applies to every business. Think about the most likely
            reason your profile was suspended and prioritise documents that directly address it:
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
              <h3 className="text-xs font-semibold text-slate-700 mb-1">Address mismatch suspected</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Focus on utility bills, lease agreements, and photos showing the address matches
                your GBP listing. See the{" "}
                <Link
                  href="/guides/business-information-mismatch-google-business-profile"
                  className="text-emerald-600 underline hover:text-emerald-700"
                >
                  information mismatch guide
                </Link>
                .
              </p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
              <h3 className="text-xs font-semibold text-slate-700 mb-1">Business legitimacy questioned</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Prioritise business registration, licence, insurance, and operational evidence
                like invoices or professional certifications.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
              <h3 className="text-xs font-semibold text-slate-700 mb-1">Service-area or mobile business</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Focus on registration documents, branded vehicle or equipment photos, customer
                invoices, and a website that clearly describes your service area.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
              <h3 className="text-xs font-semibold text-slate-700 mb-1">Profile information discrepancy</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Show consistent business name and category across registration, website, and
                any other directories. DBA filings help where a trading name is used.
              </p>
            </div>
          </div>
        </section>

        {/* Common mistakes */}
        <section className="flex flex-col gap-4">
          <h2 className="text-xl font-semibold text-slate-900">Common document mistakes to avoid</h2>
          <ul className="flex flex-col gap-2 text-sm text-slate-600 leading-relaxed list-disc pl-5">
            <li>
              <strong>Uploading documents where the name or address does not match the GBP listing.</strong>{" "}
              Inconsistencies are the first thing a reviewer will notice.
            </li>
            <li>
              <strong>Including documents that are expired or outdated.</strong> Use the most
              recent version of each document where possible.
            </li>
            <li>
              <strong>Uploading blurry or unreadable photos.</strong> If a reviewer cannot read
              the text in a document, it does not help your case.
            </li>
            <li>
              <strong>Including documents that are not related to the listed business.</strong>{" "}
              Personal documents, documents for another business, or unrelated records add
              confusion without supporting your appeal.
            </li>
          </ul>
        </section>

        {/* When a structured appeal pack helps */}
        <section className="flex flex-col gap-4">
          <h2 className="text-xl font-semibold text-slate-900">Organising your documents before you appeal</h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            Once you have gathered your documents, the next step is organising them into a clear,
            labelled package. Submitting a disorganised mix of files without context makes it
            harder for a reviewer to connect your documents to your case.
          </p>
          <p className="text-sm text-slate-600 leading-relaxed">
            A structured appeal pack is a single PDF containing your business summary, the context
            for your appeal, and your supporting documents labelled and indexed. AppealKit guides
            you through the inputs and produces that document — ready to use with your
            reinstatement request. See also:{" "}
            <Link
              href="/guides/prepare-gbp-reinstatement-appeal-pack"
              className="text-emerald-600 underline hover:text-emerald-700"
            >
              How to prepare a GBP reinstatement appeal pack
            </Link>
            .
          </p>
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
            Ready to organise your documents?
          </h2>
          <p className="text-sm text-emerald-100 max-w-sm leading-relaxed">
            AppealKit guides you through the inputs and exports a structured GBP appeal pack PDF
            — with your documents labelled, indexed, and ready to use.
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
