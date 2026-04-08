import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How to Appeal a Restricted Google Business Profile",
  description:
    "A guide to understanding what a restricted Google Business Profile means, how it differs from a suspension, and what to include in a restriction appeal.",
  alternates: {
    canonical: "https://appealkit.pro/guides/google-business-profile-restricted-profile-appeal",
  },
  openGraph: {
    title: "How to Appeal a Restricted Google Business Profile",
    description:
      "Understand the difference between a restricted and suspended GBP, and what to prepare for a restriction appeal.",
    url: "https://appealkit.pro/guides/google-business-profile-restricted-profile-appeal",
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
  },
};

const FAQ = [
  {
    q: "Can a restricted profile still appear in search?",
    a: "In some cases, yes. A restricted or disabled profile may still show limited information in Google Search or Maps, but the business owner loses the ability to edit, post, or manage it. The visibility and management capabilities vary depending on how Google applies the restriction.",
  },
  {
    q: "Is the appeal process for a restricted profile the same as for a suspension?",
    a: "The general approach is similar — you gather documentation and explain your case — but the framing of your appeal should address the specific restriction applied to your profile rather than a general suspension.",
  },
  {
    q: "What if Google does not tell me why my profile is restricted?",
    a: "This is common. Review your GBP for anything that might trigger a policy concern — business category, profile name, photos, services listed — and address the most likely issues in your appeal documentation.",
  },
  {
    q: "Does AppealKit handle restricted profile appeals specifically?",
    a: "Yes. AppealKit includes a restricted or disabled profile appeal type. You select it in the builder and AppealKit structures your case summary and document list around that specific context.",
  },
];

export default function GBPRestrictedProfileAppealPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "How to Appeal a Restricted Google Business Profile",
    description:
      "A guide to understanding what a restricted Google Business Profile means, how it differs from a suspension, and what to include in a restriction appeal.",
    url: "https://appealkit.pro/guides/google-business-profile-restricted-profile-appeal",
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
          <span className="text-slate-500">Restricted profile appeal</span>
        </nav>

        {/* Header */}
        <div className="flex flex-col gap-3">
          <p className="text-sm font-semibold tracking-widest text-emerald-600 uppercase">Guide</p>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            How to appeal a restricted Google Business Profile
          </h1>
          <p className="text-base text-slate-500 leading-relaxed">
            A restricted Google Business Profile is a distinct state from a full suspension.
            This guide explains what a restriction typically means, how it differs from a
            suspension, and what to include when preparing an appeal.
          </p>
        </div>

        {/* What restricted means */}
        <section className="flex flex-col gap-4">
          <h2 className="text-xl font-semibold text-slate-900">What a restricted profile usually means</h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            When Google restricts or disables a Business Profile, it is typically applying a
            specific policy-based limitation rather than a broad verification failure. This can
            happen because:
          </p>
          <ul className="flex flex-col gap-2 text-sm text-slate-600 leading-relaxed list-disc pl-5">
            <li>The business category falls under a restricted or regulated industry (e.g., certain financial services, adult services, healthcare)</li>
            <li>The profile was flagged for content that does not comply with Google's Business Profile policies</li>
            <li>The profile name, photos, or services description triggered a policy review</li>
            <li>The account managing the profile was flagged for suspicious activity</li>
            <li>A Google-initiated quality review resulted in an access limitation</li>
          </ul>
          <p className="text-sm text-slate-600 leading-relaxed">
            The term "restricted" covers a range of outcomes. In some cases, a business can still
            appear in search but cannot edit the profile. In others, the profile is effectively
            disabled with no public visibility.
          </p>
        </section>

        {/* Restricted vs suspended */}
        <section className="flex flex-col gap-4">
          <h2 className="text-xl font-semibold text-slate-900">Restricted vs. suspended — key differences</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="rounded-xl border border-slate-200 bg-white p-4">
              <h3 className="text-sm font-semibold text-slate-800 mb-1">Restricted profile</h3>
              <ul className="flex flex-col gap-1 text-sm text-slate-500 leading-relaxed list-disc pl-4">
                <li>Policy-specific limitation applied to the profile</li>
                <li>May still show in search with reduced features</li>
                <li>Management access limited or removed</li>
                <li>Often linked to content or category policy concerns</li>
              </ul>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-4">
              <h3 className="text-sm font-semibold text-slate-800 mb-1">Suspended profile</h3>
              <ul className="flex flex-col gap-1 text-sm text-slate-500 leading-relaxed list-disc pl-4">
                <li>Broader verification or policy failure</li>
                <li>May be removed entirely from search</li>
                <li>Owner account loses management access</li>
                <li>Often linked to address, identity, or legitimacy concerns</li>
              </ul>
            </div>
          </div>
          <p className="text-sm text-slate-500 leading-relaxed">
            In practice, the distinction is not always clearly communicated by Google. The appeal
            approach is similar for both, but the documentation and framing should address the
            specific concern where possible. See also:{" "}
            <Link
              href="/guides/how-to-appeal-suspended-google-business-profile"
              className="text-emerald-600 underline hover:text-emerald-700"
            >
              How to appeal a suspended Google Business Profile
            </Link>
            .
          </p>
        </section>

        {/* What to prepare */}
        <section className="flex flex-col gap-4">
          <h2 className="text-xl font-semibold text-slate-900">What to prepare for a restriction appeal</h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            The documentation approach for a restricted profile appeal depends on the type of
            restriction. Common preparation areas:
          </p>

          <div className="flex flex-col gap-4">
            <div className="rounded-xl border border-slate-200 bg-white p-5">
              <h3 className="text-sm font-semibold text-slate-800 mb-2">Profile content or category concerns</h3>
              <ul className="flex flex-col gap-1.5 text-sm text-slate-500 leading-relaxed list-disc pl-4">
                <li>Evidence that your business category is correct and accurate</li>
                <li>A description clarifying what your business does and does not offer</li>
                <li>Relevant professional licences or regulatory approvals if your industry is regulated</li>
                <li>Corrections to any profile fields that may have triggered the policy concern</li>
              </ul>
            </div>

            <div className="rounded-xl border border-slate-200 bg-white p-5">
              <h3 className="text-sm font-semibold text-slate-800 mb-2">Account or access concerns</h3>
              <ul className="flex flex-col gap-1.5 text-sm text-slate-500 leading-relaxed list-disc pl-4">
                <li>Confirmation that the Google account managing the profile belongs to the business</li>
                <li>Business registration in the owner's name or a connection between the account and the business</li>
                <li>Any relevant history if access was recently transferred to a new account</li>
              </ul>
            </div>

            <div className="rounded-xl border border-slate-200 bg-white p-5">
              <h3 className="text-sm font-semibold text-slate-800 mb-2">General legitimacy evidence (applies to most cases)</h3>
              <ul className="flex flex-col gap-1.5 text-sm text-slate-500 leading-relaxed list-disc pl-4">
                <li>Business registration or incorporation document</li>
                <li>Utility bill or bank statement showing business name and address</li>
                <li>Photos of the business location or branded operation</li>
                <li>Website URL consistent with your profile name and category</li>
              </ul>
            </div>
          </div>
        </section>

        {/* How to frame the appeal */}
        <section className="flex flex-col gap-4">
          <h2 className="text-xl font-semibold text-slate-900">How to frame a restriction appeal</h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            When Google has applied a specific restriction, the appeal explanation should directly
            acknowledge the concern and address it — rather than submitting a generic statement
            about being a real business.
          </p>
          <p className="text-sm text-slate-600 leading-relaxed">
            If you believe a policy was misapplied, explain clearly why your business is compliant.
            If you made a change that triggered the restriction, note what was changed and provide
            context for why the original or corrected version is accurate.
          </p>
          <p className="text-sm text-slate-600 leading-relaxed">
            Keep the explanation factual and concise. Lengthy explanations without supporting
            documentation are less effective than shorter, well-evidenced statements.
          </p>
        </section>

        {/* Common mistakes */}
        <section className="flex flex-col gap-4">
          <h2 className="text-xl font-semibold text-slate-900">Common mistakes in restriction appeals</h2>
          <ul className="flex flex-col gap-2 text-sm text-slate-600 leading-relaxed list-disc pl-5">
            <li>
              <strong>Treating a restriction like a suspension without addressing the specific policy concern.</strong>{" "}
              A generic legitimacy appeal may not resolve a specific policy-based restriction.
            </li>
            <li>
              <strong>Re-listing or creating a duplicate profile before the appeal is resolved.</strong>{" "}
              Duplicate profiles can complicate the review and may lead to additional action.
            </li>
            <li>
              <strong>Not reviewing the profile for content that may have triggered the restriction.</strong>{" "}
              Before appealing, check your profile name, category, photos, and services for anything that may
              conflict with Google's policies.
            </li>
          </ul>
        </section>

        {/* When a structured pack helps */}
        <section className="flex flex-col gap-4">
          <h2 className="text-xl font-semibold text-slate-900">When an organised appeal pack helps</h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            Whether you are dealing with a full suspension or a restricted profile, organising your
            case before you appeal makes the process more straightforward. A structured pack puts
            your business details, appeal context, and supporting documents in one place — ready
            to reference and attach.
          </p>
          <p className="text-sm text-slate-600 leading-relaxed">
            AppealKit includes a <em>restricted or disabled profile</em> appeal type specifically.
            Start the builder, select that category, and fill in the details relevant to your case.
            See also:{" "}
            <Link
              href="/guides/google-business-profile-suspended-documents"
              className="text-emerald-600 underline hover:text-emerald-700"
            >
              What documents do you need for a GBP appeal
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
            Build your appeal pack
          </h2>
          <p className="text-sm text-emerald-100 max-w-sm leading-relaxed">
            AppealKit supports restricted and disabled profile appeals. Organise your business
            details and supporting documents into a structured PDF in one session.
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
