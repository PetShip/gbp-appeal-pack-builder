import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How to Appeal a Suspended Google Business Profile",
  description:
    "A practical guide to understanding why Google Business Profiles get suspended and what steps to take when preparing a reinstatement appeal.",
  alternates: {
    canonical: "https://appealkit.pro/guides/how-to-appeal-suspended-google-business-profile",
  },
  openGraph: {
    title: "How to Appeal a Suspended Google Business Profile",
    description:
      "Step-by-step guidance on what a GBP suspension means, what to prepare, and how to structure your reinstatement appeal.",
    url: "https://appealkit.pro/guides/how-to-appeal-suspended-google-business-profile",
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
  },
};

const FAQ = [
  {
    q: "Can I appeal a Google Business Profile suspension without a physical address?",
    a: "Service-area businesses that hide their address are still eligible to appeal a suspension, but must provide extra documentation proving the business is real and actively operating — such as business registration, a website, or customer-facing correspondence.",
  },
  {
    q: "How long does a GBP reinstatement appeal take?",
    a: "Google does not publish a fixed timeline. Reviews can take days to several weeks. Having a well-organised, complete submission helps avoid back-and-forth requests for more information.",
  },
  {
    q: "Can I resubmit if my first appeal is denied?",
    a: "Yes, but it is worth identifying what was missing or unclear before resubmitting. Submitting the same thin appeal multiple times is unlikely to produce a different outcome.",
  },
  {
    q: "Does AppealKit submit my appeal to Google?",
    a: "No. AppealKit produces a structured PDF appeal pack that you use as reference material when completing Google's own reinstatement process. There is no direct Google integration.",
  },
];

export default function HowToAppealSuspendedGBPPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "How to Appeal a Suspended Google Business Profile",
    description:
      "A practical guide to understanding why Google Business Profiles get suspended and what steps to take when preparing a reinstatement appeal.",
    url: "https://appealkit.pro/guides/how-to-appeal-suspended-google-business-profile",
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
          <span className="text-slate-500">How to appeal a suspended GBP</span>
        </nav>

        {/* Header */}
        <div className="flex flex-col gap-3">
          <p className="text-sm font-semibold tracking-widest text-emerald-600 uppercase">Guide</p>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            How to appeal a suspended Google Business Profile
          </h1>
          <p className="text-base text-slate-500 leading-relaxed">
            A GBP suspension can cut off a business from its online presence almost overnight.
            This guide explains what a suspension typically means, what to prepare, and how to
            approach the reinstatement process.
          </p>
        </div>

        {/* What a suspension usually means */}
        <section className="flex flex-col gap-4">
          <h2 className="text-xl font-semibold text-slate-900">What a suspended GBP usually means</h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            Google suspends Business Profiles when its automated systems or manual reviewers flag
            a listing for a potential policy violation. Common triggers include:
          </p>
          <ul className="flex flex-col gap-2 text-sm text-slate-600 leading-relaxed list-disc pl-5">
            <li>Business name or category that does not match the actual business</li>
            <li>Address inconsistencies across the profile, website, or business registration</li>
            <li>Lack of documentation supporting the business's legitimacy or physical location</li>
            <li>Sudden profile changes that triggered an automated review</li>
            <li>A profile flagged as a duplicate or virtual office address</li>
          </ul>
          <p className="text-sm text-slate-600 leading-relaxed">
            A suspension does not always mean a business is doing something wrong — it often means
            Google does not yet have enough information to verify the listing.
          </p>
        </section>

        {/* Two types of suspension */}
        <section className="flex flex-col gap-4">
          <h2 className="text-xl font-semibold text-slate-900">Soft suspension vs. hard suspension</h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            Google has historically distinguished between two suspension states:
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="rounded-xl border border-slate-200 bg-white p-4">
              <h3 className="text-sm font-semibold text-slate-800 mb-1">Soft suspension</h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                The profile is still visible in search but the owner loses access to manage it.
                Also called a "suspended" or "unverified" state in some Google interfaces.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-4">
              <h3 className="text-sm font-semibold text-slate-800 mb-1">Hard suspension</h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                The profile is removed entirely from search and Maps. The business is not visible
                to customers until the profile is reinstated.
              </p>
            </div>
          </div>
          <p className="text-sm text-slate-500 leading-relaxed">
            Both types require a reinstatement appeal. The approach is similar, but a hard
            suspension usually warrants more supporting documentation.
          </p>
        </section>

        {/* What to prepare */}
        <section className="flex flex-col gap-4">
          <h2 className="text-xl font-semibold text-slate-900">What to prepare before you appeal</h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            Before submitting a reinstatement request, gather the following. Having these ready
            reduces back-and-forth and makes your appeal easier to review:
          </p>
          <ul className="flex flex-col gap-2 text-sm text-slate-600 leading-relaxed list-disc pl-5">
            <li>Business name exactly as it appears in official registration</li>
            <li>Current business address (or service area, if you hide your address)</li>
            <li>Business registration certificate or equivalent government-issued document</li>
            <li>Utility bill or bank statement showing business name and address</li>
            <li>Photos of the business location (signage, interior, vehicles if applicable)</li>
            <li>Website URL, matching your GBP profile category and name</li>
            <li>GBP listing URL or CID from Google Maps</li>
            <li>A clear explanation of why the listing was suspended (if known)</li>
          </ul>
          <p className="text-sm text-slate-500 leading-relaxed">
            Not all documents apply to every situation. Choose what is most directly relevant to
            your specific business type and the likely reason for the suspension.
          </p>
        </section>

        {/* Common mistakes */}
        <section className="flex flex-col gap-4">
          <h2 className="text-xl font-semibold text-slate-900">Common mistakes to avoid</h2>
          <ul className="flex flex-col gap-2 text-sm text-slate-600 leading-relaxed list-disc pl-5">
            <li>
              <strong>Submitting too quickly without gathering documents.</strong> An incomplete
              appeal is harder to approve and may delay the review process.
            </li>
            <li>
              <strong>Using a name or address in the appeal that doesn't match your registration.</strong>{" "}
              Inconsistencies between your appeal and official records raise more questions.
            </li>
            <li>
              <strong>Assuming a vague explanation is enough.</strong> Reviewers often handle
              high volumes of appeals — a clear, structured explanation is more effective than
              a brief note.
            </li>
            <li>
              <strong>Uploading unrelated or low-quality documents.</strong> Only include files
              that directly support your case. Quantity alone does not improve your appeal.
            </li>
          </ul>
        </section>

        {/* When a structured appeal pack helps */}
        <section className="flex flex-col gap-4">
          <h2 className="text-xl font-semibold text-slate-900">When a structured appeal pack helps</h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            The reinstatement process itself happens through Google's own forms and support
            channels. The challenge most businesses face is not knowing where to submit — it is
            not having their information and documentation organised before they start.
          </p>
          <p className="text-sm text-slate-600 leading-relaxed">
            A structured appeal pack is a single, organised PDF containing your business summary,
            appeal context, and supporting documents. It gives you a clear reference to draw from
            when filling in the appeal form, and can be attached directly to a support request
            where attachments are accepted.
          </p>
          <p className="text-sm text-slate-600 leading-relaxed">
            AppealKit guides you through the inputs and exports a structured PDF ready to use
            with your reinstatement request. See also:{" "}
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
            Ready to build your appeal pack?
          </h2>
          <p className="text-sm text-emerald-100 max-w-sm leading-relaxed">
            AppealKit helps you organise your business details and supporting documents into a
            structured GBP reinstatement appeal pack — no login required.
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
