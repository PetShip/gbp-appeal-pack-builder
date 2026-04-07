import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "ProofPack terms of service. Read the terms governing your use of the ProofPack chargeback evidence builder.",
  alternates: {
    canonical: "https://proofpack.pro/tos",
  },
  robots: {
    index: true,
    follow: false,
  },
};

export default function TermsOfService() {
  const effectiveDate = "March 22, 2026";

  return (
    <div className="flex flex-col gap-8 max-w-2xl">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">Terms of Service</h1>
        <p className="mt-2 text-sm text-slate-500">Effective date: {effectiveDate}</p>
      </div>

      <section className="flex flex-col gap-3">
        <h2 className="text-lg font-semibold text-slate-800">1. About ProofPack</h2>
        <p className="text-sm text-slate-600 leading-relaxed">
          ProofPack (&ldquo;Service&rdquo;, &ldquo;we&rdquo;, &ldquo;our&rdquo;) is a web tool that helps businesses
          organize and export evidence for Stripe payment disputes. The Service is operated by the
          ProofPack team and available at proofpack.pro.
        </p>
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="text-lg font-semibold text-slate-800">2. Acceptance of Terms</h2>
        <p className="text-sm text-slate-600 leading-relaxed">
          By accessing or using ProofPack you agree to be bound by these Terms. If you do not agree,
          do not use the Service.
        </p>
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="text-lg font-semibold text-slate-800">3. Use of the Service</h2>
        <p className="text-sm text-slate-600 leading-relaxed">
          ProofPack is intended for legitimate business use — specifically, to assist merchants
          and SaaS businesses in preparing evidence packages for Stripe chargeback disputes. You
          agree to use the Service only for lawful purposes and in a manner consistent with all
          applicable laws and regulations.
        </p>
        <p className="text-sm text-slate-600 leading-relaxed">
          You may not use ProofPack to fabricate, falsify, or misrepresent any evidence. Doing
          so may constitute fraud and is a violation of these Terms.
        </p>
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="text-lg font-semibold text-slate-800">4. Privacy and Data</h2>
        <p className="text-sm text-slate-600 leading-relaxed">
          ProofPack processes all case data entirely in your browser. No case content, customer
          information, or uploaded files are stored on our servers. Data entered into the builder
          is held in your browser&apos;s <code className="text-xs bg-slate-100 px-1 py-0.5 rounded">sessionStorage</code> and
          is discarded when you close the tab.
        </p>
        <p className="text-sm text-slate-600 leading-relaxed">
          When you initiate a payment, your transaction is processed by Stripe, Inc. under their
          own privacy policy and terms. We receive confirmation of payment status only.
        </p>
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="text-lg font-semibold text-slate-800">5. Payments and Refunds</h2>
        <p className="text-sm text-slate-600 leading-relaxed">
          ProofPack charges a one-time fee per evidence pack export. All payments are processed
          securely through Stripe. Prices are displayed in US dollars and are inclusive of any
          applicable taxes where required by law.
        </p>
        <p className="text-sm text-slate-600 leading-relaxed">
          Because PDF export is an immediate digital delivery, all sales are final. If the
          Service fails to generate your PDF due to a technical error on our part, email us at{" "}
          <a href="mailto:support@proofpack.pro" className="text-emerald-700 hover:underline">
            support@proofpack.pro
          </a>{" "}
          within 7 days and we will issue a full refund.
        </p>
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="text-lg font-semibold text-slate-800">6. Intellectual Property</h2>
        <p className="text-sm text-slate-600 leading-relaxed">
          The ProofPack application, its design, and its underlying code are the intellectual
          property of the ProofPack team. You retain all rights to the case content and files
          you provide. The generated PDF is yours to use as you see fit.
        </p>
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="text-lg font-semibold text-slate-800">7. Disclaimer of Warranties</h2>
        <p className="text-sm text-slate-600 leading-relaxed">
          The Service is provided &ldquo;as is&rdquo; and &ldquo;as available&rdquo; without warranty of any kind.
          ProofPack does not guarantee that the evidence pack produced will result in a successful
          dispute outcome. Chargeback decisions are made solely by card networks and issuing banks.
        </p>
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="text-lg font-semibold text-slate-800">8. Limitation of Liability</h2>
        <p className="text-sm text-slate-600 leading-relaxed">
          To the fullest extent permitted by law, ProofPack and its operators shall not be liable
          for any indirect, incidental, special, or consequential damages arising out of or in
          connection with your use of the Service, even if advised of the possibility of such
          damages. Our total liability shall not exceed the amount you paid for the Service in
          the preceding 12 months.
        </p>
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="text-lg font-semibold text-slate-800">9. Changes to These Terms</h2>
        <p className="text-sm text-slate-600 leading-relaxed">
          We may update these Terms from time to time. Material changes will be reflected in an
          updated effective date at the top of this page. Continued use of the Service after
          changes are posted constitutes your acceptance of the revised Terms.
        </p>
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="text-lg font-semibold text-slate-800">10. Contact</h2>
        <p className="text-sm text-slate-600 leading-relaxed">
          For questions about these Terms, email us at{" "}
          <a href="mailto:support@proofpack.pro" className="text-emerald-700 hover:underline">
            support@proofpack.pro
          </a>
          .
        </p>
      </section>
    </div>
  );
}
