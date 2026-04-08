import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How to Prepare a Google Business Profile Reinstatement Appeal Pack",
  description:
    "What to include in a GBP reinstatement appeal pack, how to structure it, and why a well-organised pack makes the appeal process more straightforward.",
  alternates: {
    canonical: "https://appealkit.pro/guides/prepare-gbp-reinstatement-appeal-pack",
  },
  openGraph: {
    title: "How to Prepare a Google Business Profile Reinstatement Appeal Pack",
    description:
      "Structure your GBP reinstatement appeal clearly: what to include, how to organise it, and what makes a pack effective.",
    url: "https://appealkit.pro/guides/prepare-gbp-reinstatement-appeal-pack",
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
  },
};

const FAQ = [
  {
    q: "How long should a GBP reinstatement appeal pack be?",
    a: "Long enough to clearly present your case, short enough to stay focused. A concise pack with three to six well-chosen documents and a clear written summary is usually more effective than a lengthy submission with loosely relevant materials.",
  },
  {
    q: "Do I need to submit the appeal pack as a PDF?",
    a: "Not necessarily — Google's own forms accept typed text and some accept file attachments. Having a PDF pack means you have all your information organised in one document that you can draw from when completing forms or attach to a support request.",
  },
  {
    q: "Should I explain why my profile was suspended in the appeal?",
    a: "If you know or have a reasonable idea, yes. Briefly explaining your understanding of what triggered the suspension shows the reviewer you have thought about the issue. If you do not know, focus on providing clear documentation of legitimacy and consistency.",
  },
  {
    q: "Can AppealKit build the pack for me?",
    a: "AppealKit guides you through structured inputs and generates the formatted PDF. You provide the information — your business details, the context for your suspension, and your supporting documents. AppealKit organises and exports them as a clean PDF.",
  },
];

export default function PrepareGBPReinstatementAppealPackPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "How to Prepare a Google Business Profile Reinstatement Appeal Pack",
    description:
      "What to include in a GBP reinstatement appeal pack, how to structure it, and why a well-organised pack makes the appeal process more straightforward.",
    url: "https://appealkit.pro/guides/prepare-gbp-reinstatement-appeal-pack",
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
          <span className="text-slate-500">Prepare a reinstatement appeal pack</span>
        </nav>

        {/* Header */}
        <div className="flex flex-col gap-3">
          <p className="text-sm font-semibold tracking-widest text-emerald-600 uppercase">Guide</p>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            How to prepare a Google Business Profile reinstatement appeal pack
          </h1>
          <p className="text-base text-slate-500 leading-relaxed">
            When your Google Business Profile is suspended or restricted, the challenge is often
            not knowing what to do — it is not having your information and documents ready in
            a clear, usable format. This guide explains what an appeal pack is, what it should
            contain, and how to put one together effectively.
          </p>
        </div>

        {/* What an appeal pack is */}
        <section className="flex flex-col gap-4">
          <h2 className="text-xl font-semibold text-slate-900">What is a GBP reinstatement appeal pack?</h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            An appeal pack is a single, organised document — typically a PDF — that brings
            together everything relevant to your reinstatement request:
          </p>
          <ul className="flex flex-col gap-2 text-sm text-slate-600 leading-relaxed list-disc pl-5">
            <li>Your business details and GBP profile information</li>
            <li>The appeal type and a written explanation of the issue</li>
            <li>Your supporting documents, labelled and in context</li>
          </ul>
          <p className="text-sm text-slate-600 leading-relaxed">
            It is not a replacement for Google's own appeal form — the actual reinstatement
            request is submitted through Google's own process. An appeal pack is reference
            material you use when completing that request, and in some cases a file you can
            attach directly when a support channel accepts attachments.
          </p>
          <p className="text-sm text-slate-600 leading-relaxed">
            The value of a prepared pack is that it forces you to gather, review, and organise
            your case before you start — reducing the chance of submitting an incomplete or
            inconsistent appeal.
          </p>
        </section>

        {/* What a good appeal pack contains */}
        <section className="flex flex-col gap-5">
          <h2 className="text-xl font-semibold text-slate-900">What a well-prepared appeal pack contains</h2>

          <div className="flex flex-col gap-4">
            <div className="rounded-xl border border-slate-200 bg-white p-5">
              <div className="flex items-start gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-xs font-semibold text-emerald-700">1</span>
                <div>
                  <h3 className="text-sm font-semibold text-slate-800 mb-1">Business and profile summary</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    Business name, address, primary category, GBP listing URL or CID, and any
                    profile fields that are directly relevant to the appeal. This section
                    establishes who you are and what listing is under review.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-slate-200 bg-white p-5">
              <div className="flex items-start gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-xs font-semibold text-emerald-700">2</span>
                <div>
                  <h3 className="text-sm font-semibold text-slate-800 mb-1">Appeal type and case context</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    A brief, factual description of the situation: what happened, when you
                    noticed the suspension or restriction, and what you believe triggered it.
                    If you have made corrections (e.g., updated an address, corrected a category),
                    note that here.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-slate-200 bg-white p-5">
              <div className="flex items-start gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-xs font-semibold text-emerald-700">3</span>
                <div>
                  <h3 className="text-sm font-semibold text-slate-800 mb-1">Supporting documents — labelled and indexed</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    Your uploaded supporting files — each with a clear label explaining what
                    it is and why it is relevant. An indexed list of all documents included
                    makes it easy for a reviewer to see what you have submitted at a glance.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-slate-200 bg-white p-5">
              <div className="flex items-start gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-xs font-semibold text-emerald-700">4</span>
                <div>
                  <h3 className="text-sm font-semibold text-slate-800 mb-1">Profile consistency overview</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    A short summary showing that the key information in your appeal (name,
                    address, category) matches across your business registration, website, and
                    GBP profile. This is particularly important if the suspension was triggered
                    by an information mismatch.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Step-by-step preparation */}
        <section className="flex flex-col gap-4">
          <h2 className="text-xl font-semibold text-slate-900">Step-by-step: preparing your appeal pack</h2>
          <ol className="flex flex-col gap-4 text-sm text-slate-600 leading-relaxed list-decimal pl-5">
            <li>
              <strong>Identify your appeal type.</strong> Determine whether your case is a
              documentation mismatch, a business legitimacy issue, a profile information
              correction, or a restricted/disabled profile. This determines which documents
              matter most.
            </li>
            <li>
              <strong>Audit your profile for inconsistencies.</strong> Before you prepare anything,
              compare your GBP against your website, registration documents, and other directory
              listings. Fix what you can before appealing. See:{" "}
              <Link
                href="/guides/business-information-mismatch-google-business-profile"
                className="text-emerald-600 underline hover:text-emerald-700"
              >
                business information mismatch guide
              </Link>
              .
            </li>
            <li>
              <strong>Gather your documents.</strong> Collect business registration, utility
              bills, address proof, photos, and any other files relevant to your appeal type.
              See the{" "}
              <Link
                href="/guides/google-business-profile-suspended-documents"
                className="text-emerald-600 underline hover:text-emerald-700"
              >
                full document checklist
              </Link>
              .
            </li>
            <li>
              <strong>Write your case summary.</strong> Draft a short, factual explanation of
              the situation. State what happened, what the likely issue is, and what you have
              done to address it. Keep it direct and avoid vague statements.
            </li>
            <li>
              <strong>Organise into a single document.</strong> Combine your business summary,
              case context, and labelled supporting documents into one structured PDF. This is
              what AppealKit produces.
            </li>
            <li>
              <strong>Submit through Google's appeal process.</strong> Use the pack as reference
              when completing Google's own reinstatement form. Attach the PDF directly if the
              support channel you are using accepts file attachments.
            </li>
          </ol>
        </section>

        {/* What makes a pack effective */}
        <section className="flex flex-col gap-4">
          <h2 className="text-xl font-semibold text-slate-900">What makes an appeal pack effective</h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            A well-prepared appeal pack has these qualities:
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
              <h3 className="text-xs font-semibold text-slate-700 mb-1">Internally consistent</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                The name, address, and category used in the pack match each other and the
                documents attached. No conflicts between fields.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
              <h3 className="text-xs font-semibold text-slate-700 mb-1">Specific to the issue</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                The explanation and documents address the most likely reason for the suspension,
                not generic legitimacy claims.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
              <h3 className="text-xs font-semibold text-slate-700 mb-1">Well-labelled documents</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Each document is identified clearly so a reviewer can see what it is and why
                it is included without needing to read the entire file.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
              <h3 className="text-xs font-semibold text-slate-700 mb-1">Concise and readable</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                A clear, short summary is easier to review than a long narrative. Reviewers
                handle many appeals — a focused pack is more useful than a comprehensive one.
              </p>
            </div>
          </div>
        </section>

        {/* Common mistakes */}
        <section className="flex flex-col gap-4">
          <h2 className="text-xl font-semibold text-slate-900">Common mistakes to avoid</h2>
          <ul className="flex flex-col gap-2 text-sm text-slate-600 leading-relaxed list-disc pl-5">
            <li>
              <strong>Submitting an appeal without first correcting the underlying issue.</strong>{" "}
              If the mismatch or violation still exists, the appeal is unlikely to succeed.
            </li>
            <li>
              <strong>Including too many loosely relevant documents.</strong> Quality and relevance
              matter more than volume.
            </li>
            <li>
              <strong>Leaving the case explanation vague.</strong> "My business is real and
              legitimate" is less useful than a specific explanation of what happened and what
              you have done to address it.
            </li>
            <li>
              <strong>Assuming the PDF itself is the submission.</strong> The appeal pack is a
              reference and attachment tool — the actual submission goes through Google's own
              process.
            </li>
          </ul>
        </section>

        {/* How AppealKit helps */}
        <section className="flex flex-col gap-4">
          <h2 className="text-xl font-semibold text-slate-900">How AppealKit helps</h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            AppealKit is a focused web utility for exactly this workflow. It guides you through
            the structured inputs — business details, appeal type, case context, and supporting
            document uploads — and exports a formatted PDF containing everything in one place.
          </p>
          <p className="text-sm text-slate-600 leading-relaxed">
            No login, no stored data, and no complicated setup. The builder supports four appeal
            types: documentation mismatch, business legitimacy proof, profile information cleanup,
            and restricted or disabled profile. You complete the flow in a single session and
            download your appeal pack for a one-time fee of $4.99.
          </p>
          <p className="text-sm text-slate-600 leading-relaxed">
            AppealKit does not submit your appeal to Google, provide legal advice, or guarantee
            any outcome. It is a structuring tool — designed to remove the friction of pulling
            scattered information together into something clear and ready to use.
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
            Build your appeal pack now
          </h2>
          <p className="text-sm text-emerald-100 max-w-sm leading-relaxed">
            AppealKit guides you through the inputs and exports a structured GBP reinstatement
            appeal pack PDF — no login, no stored data, one-time $4.99.
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
