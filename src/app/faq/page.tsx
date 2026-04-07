import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Stripe Chargeback FAQ — Common Questions About Dispute Evidence",
  description:
    "Answers to common questions about ProofPack, chargeback evidence packs, how Stripe disputes work, what evidence you need, and how to use the builder.",
  alternates: {
    canonical: "https://proofpack.pro/faq",
  },
  openGraph: {
    title: "FAQ — ProofPack Chargeback Evidence Builder",
    description:
      "Answers to common questions about ProofPack, Stripe chargebacks, and how to organize your dispute evidence.",
    url: "https://proofpack.pro/faq",
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
  },
};

type FaqSection = {
  heading: string;
  items: { q: string; a: string | React.ReactNode }[];
};

const FAQ_SECTIONS: FaqSection[] = [
  {
    heading: "About ProofPack",
    items: [
      {
        q: "What is ProofPack?",
        a: "ProofPack is a focused web utility that helps Stripe-based SaaS and digital product businesses organize and export chargeback evidence. You enter your case details, upload supporting files, and download a structured PDF evidence pack — ready to submit with your dispute response.",
      },
      {
        q: "Who is ProofPack designed for?",
        a: "ProofPack is designed for software subscription businesses, online course sellers, digital download sellers, and other digital-first businesses that use Stripe and need to respond to chargeback disputes. It is not designed for physical goods with shipping disputes.",
      },
      {
        q: "Is there a cost to use ProofPack?",
        a: "ProofPack is a paid utility — PDF export is a one-time payment of $4.99. There are no subscriptions or hidden fees.",
      },
      {
        q: "Do I need to create an account?",
        a: "No. ProofPack requires no login or signup. You start building immediately and the entire session runs in your browser.",
      },
      {
        q: "Is my data saved anywhere?",
        a: "No. All case data you enter is stored only in your browser's sessionStorage for the duration of your current session. Nothing is sent to or retained on ProofPack servers. When you close the tab or window, the data is gone. This means you cannot recover a session if you accidentally close your browser — keep that in mind before starting.",
      },
    ],
  },
  {
    heading: "Stripe chargebacks and disputes",
    items: [
      {
        q: "What is a Stripe chargeback?",
        a: "A chargeback is when a customer contacts their bank or card issuer to dispute a charge. The bank initiates a dispute with the card network (Visa, Mastercard, etc.), which holds the funds and asks Stripe to provide evidence. Stripe then asks you — the merchant — to respond with documentation to support your side of the case.",
      },
      {
        q: "What does Stripe ask for in a dispute response?",
        a: "Stripe's dispute response requirements vary by dispute reason code, but generally they want: a clear description of what the customer purchased, proof the product or service was delivered, records of customer communication, a cancellation or refund policy, and any other evidence relevant to the specific claim. The card network ultimately reviews all evidence and makes a decision.",
      },
      {
        q: "What are the most common Stripe dispute reason codes for SaaS?",
        a: "For SaaS and digital product businesses, the most common reason codes are: unauthorized transaction (customer claims they didn't make the purchase), service not received (customer claims they didn't get what they paid for), subscription canceled or not recognized (customer claims the subscription was already canceled or they don't recognize it), and product not as described (customer claims the product didn't match the description).",
      },
      {
        q: "How long do I have to respond to a Stripe dispute?",
        a: "Stripe typically gives you 7–21 days to submit your evidence, depending on the card network and dispute type. You can see the deadline in your Stripe Dashboard under the Disputes section. Missing the deadline means you forfeit your right to respond, and the dispute is automatically decided in the customer's favor.",
      },
      {
        q: "Does ProofPack guarantee I will win my dispute?",
        a: "No. ProofPack helps you organize and present your evidence clearly — it does not predict, influence, or guarantee dispute outcomes. Whether a dispute is decided in your favor depends on the evidence you provide, the dispute reason code, the card network's rules, and the bank's review. ProofPack is a structuring tool, not legal advice.",
      },
    ],
  },
  {
    heading: "Using the builder",
    items: [
      {
        q: "What dispute types does ProofPack support?",
        a: "ProofPack currently supports four dispute types: unauthorized transaction, service not received, subscription canceled or not recognized, and product not as described. These cover the most common Stripe chargeback scenarios for digital businesses.",
      },
      {
        q: "What information do I need to have ready before I start?",
        a: "You'll want to have: the customer's name and email, the order date and amount, the name and description of the product or service, details of how and when it was delivered, a summary of any relevant customer communication, and any supporting screenshots or documents.",
      },
      {
        q: "Can I go back and edit a previous step?",
        a: "Yes. The builder saves your progress in sessionStorage so you can navigate between steps freely. If you navigate away from the builder to the review or export pages and then come back, the builder will restore your last session automatically.",
      },
      {
        q: "Can I save my work and come back later?",
        a: "Not across different browser sessions. Your progress is stored in sessionStorage, which only persists for the duration of the current browser tab. If you close the tab, your data is lost. Complete your evidence pack in one session.",
      },
      {
        q: "What file types can I upload as evidence?",
        a: "You can upload JPEG and PNG image files (rendered inline in the PDF), PDF files (appended as additional pages), and other file types (listed in the evidence index by name and type, but not rendered visually). Total upload size is limited to approximately 4–5 MB due to browser and server constraints.",
      },
    ],
  },
  {
    heading: "The PDF export",
    items: [
      {
        q: "What does the exported PDF contain?",
        a: "The PDF contains a structured case summary (dispute type, customer details, order details, product description, fulfillment details, customer communication), an auto-generated chronological timeline, and an evidence file section with uploaded images rendered inline and PDFs appended as additional pages.",
      },
      {
        q: "Can I edit the PDF after downloading?",
        a: "The PDF is not encrypted, so you can annotate it with any standard PDF editor. However, ProofPack does not include a built-in editing step — the output is designed to be complete as generated.",
      },
      {
        q: "The export failed. What should I do?",
        a: "Export failures are most commonly caused by total file size exceeding the limit (approximately 4–5 MB including all uploaded files). Try removing some uploaded files, using compressed versions of images, or uploading fewer files. If the export still fails, try again in a fresh browser session.",
      },
      {
        q: "How do I submit the PDF to Stripe?",
        a: "Log into your Stripe Dashboard, find the dispute under Payments → Disputes, click on it, and use the evidence submission form. You can attach your ProofPack PDF as a supporting document. Stripe also has specific evidence fields — you may want to paste key text from your case summary into those fields directly, in addition to uploading the PDF.",
      },
    ],
  },
];

export default function FAQPage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ_SECTIONS.flatMap((section) =>
      section.items
        .filter((item): item is { q: string; a: string } => typeof item.a === "string")
        .map((item) => ({
          "@type": "Question",
          name: item.q,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.a,
          },
        }))
    ),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <div className="flex flex-col gap-14">
      {/* Header */}
      <div className="flex flex-col gap-3">
        <p className="text-sm font-semibold tracking-widest text-emerald-600 uppercase">ProofPack</p>
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
          Frequently asked questions
        </h1>
        <p className="text-base text-slate-500 leading-relaxed max-w-xl">
          Answers to common questions about ProofPack, Stripe chargebacks, and how to organize
          your dispute evidence.
        </p>
      </div>

      {/* Sections */}
      {FAQ_SECTIONS.map((section) => (
        <section key={section.heading} className="flex flex-col gap-6">
          <h2 className="text-lg font-semibold text-slate-900 border-b border-slate-200 pb-3">
            {section.heading}
          </h2>
          <dl className="flex flex-col gap-4">
            {section.items.map((item) => (
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
      ))}

      {/* Related resources */}
      <section className="rounded-xl border border-slate-200 bg-slate-50 p-6">
        <h2 className="text-base font-semibold text-slate-800 mb-4">Related guides</h2>
        <ul className="flex flex-col gap-3">
          <li>
            <Link
              href="/stripe-chargeback-evidence"
              className="text-sm font-medium text-emerald-600 hover:text-emerald-700"
            >
              How to prepare Stripe chargeback evidence →
            </Link>
            <p className="text-sm text-slate-500 mt-0.5">
              A practical guide to what evidence Stripe disputes require and how to organize it.
            </p>
          </li>
          <li>
            <Link
              href="/digital-product-chargeback-evidence"
              className="text-sm font-medium text-emerald-600 hover:text-emerald-700"
            >
              Digital product chargeback evidence →
            </Link>
            <p className="text-sm text-slate-500 mt-0.5">
              How digital businesses can prove delivery, access, and fulfillment in a dispute.
            </p>
          </li>
          <li>
            <Link
              href="/chargeback-evidence-template"
              className="text-sm font-medium text-emerald-600 hover:text-emerald-700"
            >
              Chargeback evidence template →
            </Link>
            <p className="text-sm text-slate-500 mt-0.5">
              What sections a well-structured evidence pack should include.
            </p>
          </li>
          <li>
            <Link
              href="/unauthorized-transaction-evidence"
              className="text-sm font-medium text-emerald-600 hover:text-emerald-700"
            >
              Unauthorized transaction evidence →
            </Link>
            <p className="text-sm text-slate-500 mt-0.5">
              What login records, IP data, and communication to gather for unauthorized transaction disputes.
            </p>
          </li>
          <li>
            <Link
              href="/service-not-received-evidence"
              className="text-sm font-medium text-emerald-600 hover:text-emerald-700"
            >
              Service not received evidence →
            </Link>
            <p className="text-sm text-slate-500 mt-0.5">
              How to prove your product or service was delivered and accessible.
            </p>
          </li>
          <li>
            <Link
              href="/subscription-canceled-evidence"
              className="text-sm font-medium text-emerald-600 hover:text-emerald-700"
            >
              Subscription canceled or not recognized evidence →
            </Link>
            <p className="text-sm text-slate-500 mt-0.5">
              How to document subscription history, renewal terms, and cancellation records.
            </p>
          </li>
          <li>
            <Link
              href="/product-not-as-described-evidence"
              className="text-sm font-medium text-emerald-600 hover:text-emerald-700"
            >
              Product not as described evidence →
            </Link>
            <p className="text-sm text-slate-500 mt-0.5">
              How to compare advertised vs. delivered and respond to mismatch claims.
            </p>
          </li>
        </ul>
      </section>

      {/* CTA */}
      <section className="rounded-2xl bg-emerald-600 px-8 py-10 text-center flex flex-col items-center gap-4">
        <h2 className="text-xl font-bold tracking-tight text-white">
          Ready to build your evidence pack?
        </h2>
        <p className="text-sm text-emerald-100 max-w-sm leading-relaxed">
          No login, no setup. Build your structured, dispute-ready evidence pack in minutes.
        </p>
        <div className="flex flex-col items-center gap-2">
          <Link
            href="/builder"
            className="inline-flex items-center gap-2 rounded-lg bg-white px-5 py-2.5 text-sm font-semibold text-emerald-700 shadow-sm transition-colors hover:bg-emerald-50"
          >
            Build your evidence pack
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
