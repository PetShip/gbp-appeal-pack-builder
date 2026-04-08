import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Google Business Profile Appeal Guides",
  description:
    "Practical guides for businesses dealing with a suspended or restricted Google Business Profile — what to prepare, which documents to gather, and how to structure a reinstatement appeal.",
  alternates: {
    canonical: "https://appealkit.pro/guides",
  },
  openGraph: {
    title: "Google Business Profile Appeal Guides",
    description:
      "Practical guides for businesses dealing with a suspended or restricted Google Business Profile.",
    url: "https://appealkit.pro/guides",
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
  },
};

const GUIDES = [
  {
    title: "How to appeal a suspended Google Business Profile",
    description:
      "What a GBP suspension typically means, what to prepare before you appeal, and common mistakes to avoid.",
    href: "/guides/how-to-appeal-suspended-google-business-profile",
    tag: "Suspension appeal",
  },
  {
    title: "What documents do you need for a GBP suspension appeal?",
    description:
      "A practical document checklist — what to gather, how to choose the right documents for your situation, and how to organise them.",
    href: "/guides/google-business-profile-suspended-documents",
    tag: "Documents",
  },
  {
    title: "How to appeal a restricted Google Business Profile",
    description:
      "What a restricted or disabled GBP means, how it differs from a suspension, and what to include in a restriction appeal.",
    href: "/guides/google-business-profile-restricted-profile-appeal",
    tag: "Restricted profile",
  },
  {
    title: "Business information mismatch on Google Business Profile",
    description:
      "Why information mismatches trigger GBP suspensions, the most common mismatch types, and how to address them in your appeal.",
    href: "/guides/business-information-mismatch-google-business-profile",
    tag: "Mismatch",
  },
  {
    title: "How to prepare a GBP reinstatement appeal pack",
    description:
      "What an appeal pack is, what it should contain, and a step-by-step process for putting one together before you submit.",
    href: "/guides/prepare-gbp-reinstatement-appeal-pack",
    tag: "Appeal pack",
  },
];

export default function GuidesIndexPage() {
  return (
    <div className="flex flex-col gap-10 max-w-2xl">
      {/* Header */}
      <div className="flex flex-col gap-3">
        <p className="text-sm font-semibold tracking-widest text-emerald-600 uppercase">AppealKit</p>
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
          Google Business Profile appeal guides
        </h1>
        <p className="text-base text-slate-500 leading-relaxed">
          Practical guides for businesses dealing with a suspended or restricted Google Business
          Profile. Each guide focuses on a specific aspect of the appeal preparation process.
        </p>
      </div>

      {/* Guide list */}
      <section className="flex flex-col gap-4">
        {GUIDES.map((guide) => (
          <Link
            key={guide.href}
            href={guide.href}
            className="group rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition-shadow hover:shadow-md hover:border-emerald-200"
          >
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <span className="rounded-full bg-emerald-50 px-2.5 py-0.5 text-xs font-medium text-emerald-700">
                  {guide.tag}
                </span>
              </div>
              <h2 className="text-sm font-semibold text-slate-900 group-hover:text-emerald-700 transition-colors">
                {guide.title}
              </h2>
              <p className="text-sm text-slate-500 leading-relaxed">{guide.description}</p>
            </div>
          </Link>
        ))}
      </section>

      {/* CTA */}
      <section className="rounded-2xl bg-emerald-600 px-8 py-10 text-center flex flex-col items-center gap-4">
        <h2 className="text-xl font-bold tracking-tight text-white">
          Ready to build your appeal pack?
        </h2>
        <p className="text-sm text-emerald-100 max-w-sm leading-relaxed">
          No login, no setup. Organise your business details and supporting documents into a
          structured GBP appeal pack in one session.
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
  );
}
