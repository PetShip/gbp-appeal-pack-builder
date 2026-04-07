# ProofPack Overnight Product Expansion Review

Date: March 2026

## Summary

This document captures the changes made during the overnight product expansion pass.
The goal was to push ProofPack from a functional V1 toward a more launch-ready, trustworthy,
and discoverable product — without changing the core architecture or adding unnecessary complexity.

---

## 1. What was changed

### Brand consistency
- No brand changes needed — ProofPack naming was already consistent throughout
- Layout metadata updated with richer title template (`%s | ProofPack`) and full OpenGraph/Twitter card metadata

### Landing page (homepage)
- Replaced single features grid with a full conversion-optimized homepage structure:
  - Hero section with primary CTA + secondary "See how it works" anchor link
  - Trust microcopy strip (No login required · No data stored · PDF export in minutes)
  - Numbered "How it works" steps section
  - "What goes into your evidence pack" section (6 structured items)
  - "Why businesses use ProofPack" trust section (4 points)
  - "Who it's for / who it's not for" two-column section
  - FAQ section with 6 questions + link to full /faq page
  - Updated bottom CTA with trust copy
- Added JSON-LD SoftwareApplication structured data to homepage
- Added page-level metadata (title, description, canonical, OpenGraph)

### Navigation
- Added FAQ link to top nav
- CTA button ("Build your pack") added to top nav for conversion
- Footer completely redesigned with three link columns (Product, Guides, Legal), brand tagline, and trust microcopy

### Builder UX improvements
- **DisputeTypeStep**: Added inline evidence guidance hint that appears when a dispute type is selected. Guidance is specific to each dispute type and practical rather than generic.
- **EvidenceUploadStep**: Added dispute-specific evidence tips banner and a "useful files for this dispute type" list beneath the file upload area, tailored to the selected dispute type.
- **ReviewSummary**: Added dispute-specific "Evidence strength check" banner that prompts the user to verify their evidence covers the key points for their dispute type.

### Export page
- Replaced simple "PDF downloaded" confirmation with a four-step "What to do next" guide explaining how to locate and submit the evidence in Stripe, with a disclaimer that ProofPack helps organize — not guarantee — dispute outcomes.

---

## 2. New pages added

| Route | Purpose |
|-------|---------|
| `/faq` | Full FAQ page organized into four sections: About ProofPack, Stripe chargebacks, Using the builder, The PDF export |
| `/stripe-chargeback-evidence` | Guide to what Stripe disputes require and evidence by dispute type |
| `/digital-product-chargeback-evidence` | Guide to proving delivery for SaaS, courses, and digital goods |
| `/chargeback-evidence-template` | Template showing the seven sections every evidence pack should include |
| `/privacy` | Lightweight privacy policy appropriate for a no-login, no-database product |
| `/sitemap.xml` | Auto-generated sitemap including all public pages |
| `/robots.txt` | robots.txt pointing to sitemap |

---

## 3. UX improvements implemented

- Dispute-specific guidance shown in the builder at step 1 (type selection) and step 3 (evidence upload)
- Evidence strength hints shown on the review page
- Post-download "what to do next" instructions on the export page with Stripe submission steps
- Layout-level metadata (title, description, OpenGraph) added to builder/review/export routes via layout.tsx files
- Builder/review/export pages marked `robots: { index: false }` since they are transactional pages not intended for indexing

---

## 4. SEO foundations added

- **Metadata**: Rich title/description metadata with template (`%s | ProofPack`) across all pages
- **OpenGraph**: Full OG metadata on homepage, FAQ, and all SEO guide pages
- **Twitter cards**: Summary card metadata
- **Canonical URLs**: Canonical URL set on all new and updated pages
- **robots.txt**: Generated via `src/app/robots.ts`
- **sitemap.xml**: Generated via `src/app/sitemap.ts` with all public pages, priorities, and change frequencies
- **JSON-LD**: SoftwareApplication schema on the homepage
- **Heading hierarchy**: All new pages use proper H1 → H2 → H3 structure
- **Internal linking**: All SEO guide pages link to each other and back to the builder; footer links to all guide pages

---

## 5. Monetization-readiness work prepared

- Created `src/lib/payment-config.ts` — a commented configuration file documenting the intended payment model (one-time payment before PDF export), the Stripe Checkout integration pattern, and all configurable values (price, CTA copy, success/cancel URLs, Stripe price ID)
- `PAYMENT_CONFIG.enabled` is set to `false` — no payment is shown to users
- The architecture is compatible with a future stateless payment unlock:
  - User builds pack → reaches export page → sees payment gate → pays via Stripe Checkout → receives unlock → downloads PDF
  - No database required: payment validation can be done via Stripe webhook + sessionStorage unlock token

---

## 6. What still remains

- **Payment implementation**: The gate is designed and documented but not wired to Stripe
- **Stripe-specific evidence fields**: A future improvement would be mapping ProofPack evidence sections to Stripe's specific evidence field names (e.g. `customer_communication`, `service_documentation`)
- **Per-dispute SEO pages**: Could add focused pages for each of the 4 dispute types (`/unauthorized-transaction-evidence`, `/service-not-received-evidence`, etc.) with more depth
- **Email capture**: If a pre-launch list or post-download follow-up is desired, an optional email step before download could be added
- **Terms of Service page**: A full ToS page for when payment is enabled
- **Custom OG image**: A proper OpenGraph image (1200×630) for link previews when shared on social or Slack
- **Analytics**: No analytics are currently installed; if desired, a privacy-respecting option like Plausible would fit the product's positioning
- **Case recovery**: SessionStorage limitation means losing work if the tab closes; a future option could be an optional link-based recovery mechanism without server-side storage

---

## 7. Recommended next 5 priorities

1. **Enable payment gate** — implement `/api/create-checkout-session` and the payment unlock flow using the existing `payment-config.ts` structure. This is the most direct path to revenue.

2. **Custom OG image** — create a 1200×630 ProofPack card image for OpenGraph. Every shared link (Slack, Twitter, LinkedIn) will show it. High ROI for brand trust.

3. **Launch to relevant communities** — post in Stripe-adjacent communities (Indie Hackers, r/SaaS, Stripe Slack, product forums) with the specific value proposition. The product is ready for initial feedback.

4. **Analytics installation** — add Plausible or a similar lightweight privacy-respecting tracker to understand which pages attract traffic and where users drop off in the builder flow.

5. **Terms of Service** — before enabling payment, publish a basic ToS. Required for any paid product, and expected by users who are evaluating trustworthiness before paying.
