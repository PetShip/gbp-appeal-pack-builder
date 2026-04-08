import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "AppealKit terms of service. Read the terms governing your use of the AppealKit Google Business Profile appeal pack builder.",
  alternates: {
    canonical: "https://appealkit.pro/tos",
  },
  robots: {
    index: true,
    follow: false,
  },
};

export default function TermsOfService() {
  const effectiveDate = "April 8, 2026";

  return (
    <div className="flex flex-col gap-8 max-w-2xl">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">Terms of Service</h1>
        <p className="mt-2 text-sm text-slate-500">Effective date: {effectiveDate}</p>
      </div>

      <section className="flex flex-col gap-3">
        <h2 className="text-lg font-semibold text-slate-800">1. About AppealKit</h2>
        <p className="text-sm text-slate-600 leading-relaxed">
          AppealKit (&ldquo;Service&rdquo;, &ldquo;we&rdquo;, &ldquo;our&rdquo;) is a web tool that helps business
          owners structure and export a Google Business Profile reinstatement appeal pack. The
          Service is operated by the AppealKit team and available at appealkit.pro.
        </p>
        <p className="text-sm text-slate-600 leading-relaxed">
          AppealKit is a document-structuring tool only. It does not submit appeals to Google on
          your behalf, does not contact Google, and makes no guarantee regarding reinstatement
          outcomes. AppealKit is not affiliated with Google LLC.
        </p>
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="text-lg font-semibold text-slate-800">2. Acceptance of Terms</h2>
        <p className="text-sm text-slate-600 leading-relaxed">
          By accessing or using AppealKit you agree to be bound by these Terms. If you do not
          agree, do not use the Service.
        </p>
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="text-lg font-semibold text-slate-800">3. Use of the Service</h2>
        <p className="text-sm text-slate-600 leading-relaxed">
          AppealKit is intended to assist business owners in preparing a structured appeal pack
          for a suspended or restricted Google Business Profile. You agree to use the Service
          only for lawful purposes and to provide accurate information when building your appeal.
        </p>
        <p className="text-sm text-slate-600 leading-relaxed">
          You may not use AppealKit to fabricate, falsify, or misrepresent information. Doing
          so is a violation of these Terms.
        </p>
        <p className="text-sm text-slate-600 leading-relaxed">
          AppealKit does not provide legal advice. Nothing in the Service or its outputs should
          be construed as legal counsel.
        </p>
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="text-lg font-semibold text-slate-800">4. Privacy and Data</h2>
        <p className="text-sm text-slate-600 leading-relaxed">
          AppealKit processes all appeal data entirely in your browser. No appeal content or
          uploaded files are stored on our servers between sessions. Data entered into the
          builder is held in your browser&apos;s{" "}
          <code className="text-xs bg-slate-100 px-1 py-0.5 rounded">sessionStorage</code> and
          is discarded when you close the tab.
        </p>
        <p className="text-sm text-slate-600 leading-relaxed">
          When you export your PDF, your appeal data is transmitted to our generation server for
          the sole purpose of producing the PDF. This data is processed in memory and is not
          logged or retained after the PDF is returned to you.
        </p>
        <p className="text-sm text-slate-600 leading-relaxed">
          When you initiate a payment, your transaction is processed by Stripe, Inc. under their
          own privacy policy and terms. We receive confirmation of payment status only.
        </p>
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="text-lg font-semibold text-slate-800">5. Payments and Refunds</h2>
        <p className="text-sm text-slate-600 leading-relaxed">
          AppealKit charges a one-time fee to unlock PDF export. All payments are processed
          securely through Stripe. Prices are displayed in US dollars.
        </p>
        <p className="text-sm text-slate-600 leading-relaxed">
          Because PDF export is immediate digital delivery, all sales are final. If the Service
          fails to generate your PDF due to a technical error on our part, email us at{" "}
          <a href="mailto:support@appealkit.pro" className="text-emerald-700 hover:underline">
            support@appealkit.pro
          </a>{" "}
          within 7 days and we will issue a full refund.
        </p>
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="text-lg font-semibold text-slate-800">6. No Reinstatement Guarantee</h2>
        <p className="text-sm text-slate-600 leading-relaxed">
          AppealKit helps you structure and present your appeal clearly. It does not guarantee
          that your Google Business Profile will be reinstated. Reinstatement decisions are made
          solely by Google and are outside AppealKit&apos;s control.
        </p>
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="text-lg font-semibold text-slate-800">7. Intellectual Property</h2>
        <p className="text-sm text-slate-600 leading-relaxed">
          The AppealKit application, its design, and its underlying code are the intellectual
          property of the AppealKit team. You retain all rights to the appeal content and files
          you provide. The generated PDF is yours to use as you see fit.
        </p>
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="text-lg font-semibold text-slate-800">8. Disclaimer of Warranties</h2>
        <p className="text-sm text-slate-600 leading-relaxed">
          The Service is provided &ldquo;as is&rdquo; and &ldquo;as available&rdquo; without warranty of any kind.
          AppealKit makes no representation that use of the Service will result in reinstatement
          of a suspended or restricted Google Business Profile.
        </p>
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="text-lg font-semibold text-slate-800">9. Limitation of Liability</h2>
        <p className="text-sm text-slate-600 leading-relaxed">
          To the fullest extent permitted by law, AppealKit and its operators shall not be liable
          for any indirect, incidental, special, or consequential damages arising out of or in
          connection with your use of the Service, even if advised of the possibility of such
          damages. Our total liability shall not exceed the amount you paid for the Service.
        </p>
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="text-lg font-semibold text-slate-800">10. Changes to These Terms</h2>
        <p className="text-sm text-slate-600 leading-relaxed">
          We may update these Terms from time to time. Material changes will be reflected in an
          updated effective date at the top of this page. Continued use of the Service after
          changes are posted constitutes your acceptance of the revised Terms.
        </p>
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="text-lg font-semibold text-slate-800">11. Contact</h2>
        <p className="text-sm text-slate-600 leading-relaxed">
          For questions about these Terms, email us at{" "}
          <a href="mailto:support@appealkit.pro" className="text-emerald-700 hover:underline">
            support@appealkit.pro
          </a>
          .
        </p>
      </section>
    </div>
  );
}
