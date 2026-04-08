import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact Support | AppealKit",
  description:
    "Get help with AppealKit. Contact our support team for billing questions, export issues, bug reports, or anything else.",
  alternates: {
    canonical: "https://appealkit.pro/contact",
  },
  openGraph: {
    title: "Contact Support | AppealKit",
    description:
      "Get help with AppealKit. Contact our support team for billing questions, export issues, or bug reports.",
    url: "https://appealkit.pro/contact",
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
  },
};

const TOPICS = [
  {
    label: "Billing & payments",
    description:
      "Questions about charges, receipts, or requesting a refund due to a technical failure.",
  },
  {
    label: "Export issues",
    description:
      "PDF generation failed, download did not start, or the output looks incorrect.",
  },
  {
    label: "Appeal pack questions",
    description:
      "Unsure what to include, how the builder works, or how to structure your appeal pack.",
  },
  {
    label: "Bug reports",
    description:
      "Something in the builder is broken, a step is unresponsive, or data is not saving correctly.",
  },
  {
    label: "General questions",
    description: "Anything else about AppealKit or how it works.",
  },
];

const FAQ_ITEMS = [
  {
    q: "My PDF export failed — what should I do?",
    a: "Export failures are most commonly caused by total file size exceeding the limit (approximately 4–5 MB). Try removing some uploaded files or using compressed images, then export again. If it still fails, email us.",
  },
  {
    q: "Can I get a refund?",
    a: "Yes. If the PDF failed to generate due to a technical error on our side, email support@appealkit.pro within 7 days of your purchase and we will issue a full refund. See our Terms of Service for details.",
  },
  {
    q: "I closed the tab and lost my session — can I recover it?",
    a: "Unfortunately, no. Session data is stored only in your browser's sessionStorage, which is cleared when you close the tab. There is no server-side backup. You will need to start a new session.",
  },
  {
    q: "Does AppealKit guarantee my Google Business Profile will be reinstated?",
    a: "No. AppealKit helps you structure and present your appeal clearly — reinstatement decisions are made solely by Google and are outside our control.",
  },
];

export default function ContactPage() {
  return (
    <div className="flex flex-col gap-14">
      {/* Header */}
      <div className="flex flex-col gap-3">
        <p className="text-sm font-semibold tracking-widest text-emerald-600 uppercase">
          AppealKit
        </p>
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">Contact & Support</h1>
        <p className="text-base text-slate-500 leading-relaxed max-w-xl">
          We are a small team. Email is the fastest way to reach us — we aim to respond within
          one business day.
        </p>
      </div>

      {/* Email CTA */}
      <section className="rounded-xl border border-emerald-200 bg-emerald-50 p-6 flex flex-col gap-3">
        <h2 className="text-base font-semibold text-slate-900">Send us an email</h2>
        <p className="text-sm text-slate-600 leading-relaxed">
          Describe your issue or question and include any relevant details (order ID, appeal
          type, browser you are using). We will get back to you as soon as we can.
        </p>
        <a
          href="mailto:support@appealkit.pro"
          className="inline-flex items-center gap-2 self-start rounded-lg bg-emerald-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-emerald-700 transition-colors"
        >
          <svg width="15" height="15" viewBox="0 0 15 15" fill="none" aria-hidden="true">
            <path
              d="M1 3.5A1.5 1.5 0 0 1 2.5 2h10A1.5 1.5 0 0 1 14 3.5v8A1.5 1.5 0 0 1 12.5 13h-10A1.5 1.5 0 0 1 1 11.5v-8ZM2.5 3a.5.5 0 0 0-.5.5V4l5.5 3.5L13 4v-.5a.5.5 0 0 0-.5-.5h-10ZM13 5.236l-5.145 3.273a.5.5 0 0 1-.71 0L2 5.236V11.5a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5V5.236Z"
              fill="currentColor"
            />
          </svg>
          support@appealkit.pro
        </a>
        <p className="text-xs text-slate-400">
          Expected response time: within one business day. No SLA — we are a small independent
          team.
        </p>
      </section>

      {/* Topics */}
      <section className="flex flex-col gap-5">
        <h2 className="text-lg font-semibold text-slate-900 border-b border-slate-200 pb-3">
          What can we help with?
        </h2>
        <ul className="flex flex-col gap-3">
          {TOPICS.map((topic) => (
            <li
              key={topic.label}
              className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm"
            >
              <p className="text-sm font-semibold text-slate-900">{topic.label}</p>
              <p className="mt-1 text-sm text-slate-500 leading-relaxed">{topic.description}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* Quick FAQ */}
      <section className="flex flex-col gap-5">
        <h2 className="text-lg font-semibold text-slate-900 border-b border-slate-200 pb-3">
          Before you write — quick answers
        </h2>
        <dl className="flex flex-col gap-3">
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
        <p className="text-sm text-slate-500">
          More answers in the{" "}
          <Link href="/faq" className="text-emerald-600 hover:text-emerald-700">
            full FAQ →
          </Link>
        </p>
      </section>

      {/* Nav */}
      <div className="pt-4 border-t border-slate-200">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-sm text-slate-500 hover:text-slate-700"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
            <path
              d="M11 7H3M6 4L3 7l3 3"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Back to AppealKit
        </Link>
      </div>
    </div>
  );
}
