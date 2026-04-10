import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "AppealKit privacy policy. Learn how AppealKit handles your data — and why we designed the product to handle as little of it as possible.",
  alternates: {
    canonical: "https://appealkit.pro/privacy",
  },
  robots: {
    index: true,
    follow: false,
  },
};

export default function PrivacyPage() {
  return (
    <div className="flex flex-col gap-10 max-w-2xl">
      {/* Header */}
      <div className="flex flex-col gap-3">
        <p className="text-sm font-semibold tracking-widest text-emerald-600 uppercase">AppealKit</p>
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">Privacy policy</h1>
        <p className="text-sm text-slate-400">Last updated: April 2026</p>
      </div>

      {/* Key summary */}
      <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-5">
        <h2 className="text-sm font-semibold text-emerald-900 mb-2">The short version</h2>
        <p className="text-sm text-emerald-800 leading-relaxed">
          AppealKit is designed to handle as little of your data as possible. Appeal information
          you enter stays in your browser session only. We do not store your appeal data on our
          servers. We do not sell your data. We do not require you to create an account. We use
          Google Analytics 4 to understand how the product is used — only if you accept analytics
          when prompted.
        </p>
      </div>

      {/* Sections */}
      <div className="flex flex-col gap-8 text-sm text-slate-600 leading-relaxed">
        <section>
          <h2 className="text-base font-semibold text-slate-900 mb-3">1. What data AppealKit collects</h2>
          <p>
            AppealKit collects no personal data from you directly. The builder flow runs entirely
            in your browser. Appeal information you enter (business details, suspension context,
            supporting descriptions, uploaded files) is stored only in your browser&apos;s{" "}
            <code className="bg-slate-100 rounded px-1 text-xs">sessionStorage</code>, which is
            scoped to the current browser tab and is not accessible to any server or third party.
          </p>
          <p className="mt-3">
            When you export your appeal pack PDF, your appeal data is sent to our PDF generation
            server for the purpose of creating the document. This data is processed in memory and
            is not logged or retained after the PDF is generated and returned to you.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-slate-900 mb-3">2. Analytics — Google Analytics 4</h2>
          <p>
            AppealKit uses Google Analytics 4 (GA4) to understand how the product is used and to
            improve the service. GA4 may collect data through cookies or similar technologies,
            including information about pages visited, interactions within the product, and general
            usage patterns.
          </p>
          <p className="mt-3">
            GA4 is only loaded after you explicitly accept analytics via the consent prompt shown
            on your first visit. If you decline, GA4 is not initialised and no analytics data is
            collected during your session. Your choice is stored locally in your browser and
            respected on subsequent visits.
          </p>
          <p className="mt-3">
            Analytics data is processed by Google LLC in accordance with Google&apos;s own{" "}
            <a
              href="https://policies.google.com/privacy"
              className="text-emerald-600 hover:text-emerald-700 underline underline-offset-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              privacy policy
            </a>
            . Standard web server logs may also capture IP addresses and request metadata for
            security and operational monitoring. These logs are not used for advertising or sold
            to third parties.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-slate-900 mb-3">3. Uploaded supporting files</h2>
          <p>
            Files you upload as supporting documents are encoded in your browser and temporarily
            held in sessionStorage as part of your appeal data. When you export your PDF, file
            data is transmitted to the PDF generation server for rendering. Files are processed
            in memory and are not stored permanently on any AppealKit server.
          </p>
          <p className="mt-3">
            We recommend uploading only files that contain information relevant to your appeal,
            and avoiding files with sensitive personal data beyond what is necessary for your
            appeal pack.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-slate-900 mb-3">4. Payments</h2>
          <p>
            If you purchase a PDF export, your payment is processed by Stripe, Inc. AppealKit
            does not handle or store card details. Stripe may collect payment-related data in
            accordance with its own{" "}
            <a
              href="https://stripe.com/privacy"
              className="text-emerald-600 hover:text-emerald-700 underline underline-offset-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              privacy policy
            </a>
            . We receive confirmation of payment status only.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-slate-900 mb-3">5. Third-party services</h2>
          <p>
            AppealKit is hosted on Vercel, which may collect standard infrastructure-level data
            (such as IP addresses and request metadata) in accordance with its own{" "}
            <a
              href="https://vercel.com/legal/privacy-policy"
              className="text-emerald-600 hover:text-emerald-700 underline underline-offset-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              privacy policy
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-slate-900 mb-3">6. Data retention</h2>
          <p>
            AppealKit does not retain your appeal data. SessionStorage is automatically cleared
            when you close the browser tab. PDF generation requests are processed in memory and
            not logged or stored. Your analytics consent preference is stored locally in your
            browser and is not transmitted to AppealKit servers.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-slate-900 mb-3">7. Your rights</h2>
          <p>
            Because AppealKit does not collect or store personal data on its servers (other than
            operational logs), there is generally nothing to request deletion of. You can decline
            or withdraw analytics consent at any time by clearing your browser&apos;s local
            storage for appealkit.pro. If you have questions or concerns about privacy, you can
            contact us at the address below.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-slate-900 mb-3">8. Changes to this policy</h2>
          <p>
            We may update this privacy policy from time to time. The &ldquo;last updated&rdquo;
            date at the top of this page reflects the most recent revision. Continued use of
            AppealKit after changes are posted constitutes acceptance of the updated policy.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-slate-900 mb-3">9. Contact</h2>
          <p>
            AppealKit is operated via appealkit.pro. For privacy-related questions, contact us
            at{" "}
            <a
              href="mailto:support@appealkit.pro"
              className="text-emerald-600 hover:text-emerald-700"
            >
              support@appealkit.pro
            </a>
            .
          </p>
        </section>
      </div>

      {/* Nav */}
      <div className="pt-4 border-t border-slate-200">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-sm text-slate-500 hover:text-slate-700"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
            <path d="M11 7H3M6 4L3 7l3 3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Back to AppealKit
        </Link>
      </div>
    </div>
  );
}
