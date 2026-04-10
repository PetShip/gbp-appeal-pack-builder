# architecture.md

# Architecture – AppealKit MVP

## Product

AppealKit (appealkit.pro) is a no-login, single-session web utility that helps businesses with a suspended Google Business Profile build a structured reinstatement appeal pack and download it as a PDF.

## Product constraints

- no login
- no persistent case storage
- no database
- no admin area
- no team features
- no direct Google API integration
- no legal advice
- no automated appeal submission

These constraints are intentional and reduce technical complexity and support burden.

## Supported case types

Four appeal case types are supported:

- `documentation_mismatch` — Profile fields do not match official business records
- `business_legitimacy_proof` — Google requires proof the business is real and eligible
- `profile_information_cleanup` — Profile contains outdated, inaccurate, or duplicate information
- `restricted_or_disabled_profile` — Profile has been suspended or restricted and requires reinstatement

## Live funnel

```
Landing (/)
  → Builder (/builder)  — 4-step wizard
  → Review (/review)    — structured case preview
  → Export (/export)    — payment gate, then PDF download
```

## Builder steps

### Step 0 – Case type
User selects one of the four supported case types.
Inline guidance and upload hints specific to the selected type are shown.

### Step 1 – Case basics
User enters:
- business name
- business address
- primary category
- website (optional)
- issue detected date (optional)

### Step 2 – Description and evidence
User enters:
- issue description
- GBP profile name
- GBP profile address
- business operation description
- additional notes (optional)
- uploads supporting evidence files

### Step 3 – Confirm
System presents a full preview of all entered data.
User proceeds to the review page.

## Core data model

### CaseType

```ts
type CaseType =
  | "documentation_mismatch"
  | "business_legitimacy_proof"
  | "profile_information_cleanup"
  | "restricted_or_disabled_profile";
```

### EvidenceFile

```ts
type EvidenceFile = {
  name: string;
  type: string;
  size: number;
  data?: string; // base64-encoded content, no data-URL prefix
};
```

### ConsistencyItem

```ts
type ConsistencyItem = {
  field: string;
  officialValue: string;
  profileValue: string;
};
```

### CaseData

```ts
type CaseData = {
  // Step 0
  caseType: CaseType;

  // Step 1 – case basics
  businessName: string;
  businessAddress: string;
  primaryCategory: string;
  website?: string;
  issueDetectedDate?: string;

  // Step 2 – description and evidence
  issueDescription: string;
  profileName: string;
  profileAddress: string;
  businessOperationDescription: string;
  additionalNotes?: string;

  evidenceFiles: EvidenceFile[];
  consistencyItems?: ConsistencyItem[];
};
```

### Required fields

- caseType
- businessName
- businessAddress
- primaryCategory
- issueDescription
- profileName
- profileAddress
- businessOperationDescription

### Optional fields

- website
- issueDetectedDate
- additionalNotes
- evidenceFiles
- consistencyItems

## sessionStorage-based architecture

All case data is persisted in `sessionStorage` under a single key.

- No server-side session state
- No database reads or writes
- Data is scoped to the current browser tab and session
- Data is lost when the tab closes (intentional V1 limitation)
- `sessionStorage` is typically limited to 5 MB per origin

The builder loads any existing draft from `sessionStorage` on mount. If valid case data is present, the user is taken to the confirm step so they can review or navigate back to edit.

## File handling

Evidence files are read client-side at selection time using the `FileReader` API.

The base64-encoded content (no `data:` URL prefix) is stored in the `data` field of each `EvidenceFile` object and persisted in `sessionStorage` as part of `caseData`. The full object is sent to the server as a plain JSON request body for PDF generation. No multipart form parsing is required.

**Size constraints:** Vercel serverless functions enforce a 4.5 MB request body limit. A client-side payload warning is shown on the review and export pages when the payload approaches this limit.

## Stripe payment gate

The export page includes a Stripe Checkout payment gate, controlled by the `NEXT_PUBLIC_PAYMENT_GATE_ENABLED` environment variable.

When enabled:

1. User reaches the export page after completing the builder
2. Payment gate UI is shown
3. User is redirected to Stripe Checkout via `/api/create-checkout-session`
4. On successful payment, Stripe redirects back with a `session_id` query parameter
5. `/api/verify-payment` confirms the session is paid
6. A `pp_paid` flag is written to `sessionStorage` to avoid re-checking
7. PDF download is unlocked

When `PAYMENT_GATE_ENABLED` is false (default), the export page proceeds directly to PDF download without a payment step.

Payment configuration is centralised in `src/lib/payment-config.ts`.

## PDF export flow

1. User initiates download on the export page
2. The client POSTs the full `caseData` JSON (including base64 file data) to `/api/export-pdf`
3. The server builds the PDF in memory using pdfkit and pdf-lib:
   - Case summary section
   - Auto-generated timeline (derived from `issueDetectedDate`, `issueDescription`, and `consistencyItems`)
   - Evidence file index
   - Inline rendering of JPEG and PNG uploads
   - Appended pages from uploaded PDF files (via pdf-lib)
   - Embedded file streams for other file types (listed in evidence index; may not be directly viewable in all PDF viewers)
4. The PDF buffer is returned as a binary response
5. The client triggers a browser download

## Analytics

GA4 is integrated via the `GoogleAnalytics` component in the root layout.

The component is conditional: it loads only when `NEXT_PUBLIC_GA_MEASUREMENT_ID` is set.

A `trackEvent` helper in `src/lib/analytics.ts` wraps `window.gtag` and is used for core funnel events:

- `landing_cta_clicked`
- `builder_started`
- `review_reached`
- `checkout_started`
- `payment_success`
- `pdf_downloaded`

A `ConsentBanner` component is included for privacy/consent alignment.

## Application structure

### Core funnel pages

| Route | Purpose |
|-------|---------|
| `/` | Landing page |
| `/builder` | 4-step case builder wizard |
| `/review` | Structured case preview |
| `/export` | Payment gate and PDF download |

### Supporting pages

| Route | Purpose |
|-------|---------|
| `/faq` | Frequently asked questions |
| `/guides` | Index of SEO guide pages |
| `/guides/[slug]` | Individual GBP appeal guide pages |
| `/contact` | Contact page |
| `/privacy` | Privacy policy |
| `/tos` | Terms of service |
| `/imprint` | Imprint |

### API routes

| Route | Purpose |
|-------|---------|
| `/api/export-pdf` | Server-side PDF generation |
| `/api/create-checkout-session` | Creates a Stripe Checkout session |
| `/api/verify-payment` | Verifies a completed Stripe payment |

## Technical stack

### Frontend

- Next.js App Router
- TypeScript
- Tailwind CSS
- Component-based form structure

### Backend

- Next.js route handlers
- pdfkit — server-side PDF generation
- pdf-lib — merging uploaded PDF pages into the main document
- Stripe Node.js SDK — payment session creation and verification

### Storage

- sessionStorage (client-side, session-scoped)
- No database
- No server-side user storage

### Hosting

- Vercel

## Folder structure

```
src/
├─ app/
│  ├─ page.tsx                    — Landing page
│  ├─ layout.tsx                  — Root layout (nav, footer, GA, consent)
│  ├─ globals.css
│  ├─ robots.ts
│  ├─ sitemap.ts
│  ├─ opengraph-image.tsx
│  ├─ builder/
│  │  ├─ page.tsx
│  │  └─ layout.tsx               — noindex metadata
│  ├─ review/
│  │  ├─ page.tsx
│  │  └─ layout.tsx               — noindex metadata
│  ├─ export/
│  │  ├─ page.tsx                 — payment gate + PDF download
│  │  └─ layout.tsx               — noindex metadata
│  ├─ faq/
│  │  └─ page.tsx
│  ├─ guides/
│  │  ├─ page.tsx                 — guides index
│  │  └─ [guide-slug]/
│  │     └─ page.tsx
│  ├─ contact/
│  ├─ privacy/
│  ├─ tos/
│  ├─ imprint/
│  └─ api/
│     ├─ export-pdf/
│     │  └─ route.ts
│     ├─ create-checkout-session/
│     │  └─ route.ts
│     └─ verify-payment/
│        └─ route.ts
│
├─ components/
│  ├─ ConsentBanner.tsx
│  ├─ GoogleAnalytics.tsx
│  ├─ forms/
│  │  ├─ CaseForm.tsx             — multi-step form controller
│  │  ├─ DisputeTypeStep.tsx      — step 0: case type selector
│  │  ├─ EvidenceUploadStep.tsx   — step 2: description and evidence
│  │  └─ ReviewSummary.tsx        — structured case preview
│  └─ ui/
│     ├─ AccordionItem.tsx
│     ├─ Button.tsx
│     ├─ FieldGuide.tsx
│     ├─ FileUpload.tsx
│     ├─ Input.tsx
│     ├─ LandingCtaLink.tsx
│     ├─ PageIllustration.tsx
│     ├─ PayloadWarningBanner.tsx
│     ├─ StepIllustration.tsx
│     └─ Textarea.tsx
│
├─ lib/
│  ├─ analytics.ts                — trackEvent GA4 helper
│  ├─ dispute-types.ts            — case type labels, guidance, upload hints
│  ├─ payload-size.ts             — sessionStorage/request size estimation
│  ├─ payment-config.ts           — Stripe payment gate config
│  ├─ pdf-builder.ts              — server-side PDF generation logic
│  ├─ summary-builder.ts          — builds structured CaseSummary from CaseData
│  ├─ timeline-builder.ts         — derives TimelineItem list from CaseData
│  ├─ utils.ts                    — shared utility helpers
│  └─ validation.ts               — per-step and full-case validation
│
└─ types/
   └─ case.ts                     — CaseType, CaseData, EvidenceFile, ConsistencyItem
```

## Explicit exclusions

- case persistence across sessions
- multi-session recovery
- user accounts
- team collaboration
- admin dashboards
- Google API synchronization
- CRM/helpdesk integrations
- multi-platform support
- legal reasoning engine
- AI-generated appeal argumentation
- direct submission to Google

## Architecture principle

AppealKit is intentionally built as:

- one narrow workflow
- one session
- one exportable output
- minimal moving parts

Any future expansion should be justified by real usage, not by anticipation.