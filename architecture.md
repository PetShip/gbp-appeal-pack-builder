# architecture.md

# Architecture Snapshot – V1

## Product boundary

GBP Appeal Pack Builder V1 is a no-login, single-session web utility.

It helps a user create a reinstatement-ready PDF for one Google Business Profile suspension appeal.

It does not store long-term user accounts or act as a case management platform.

## Product goal

The goal of V1 is to support one narrow workflow:

Collect appeal information, structure the case, and generate a clean PDF export.

## Product constraints

### V1 constraints

- no login
- no persistent case storage
- no database
- no admin area
- no team features
- no direct Google API integration
- no legal advice
- no automated appeal submission

These constraints are intentional and reduce both technical complexity and support burden.

## Supported appeal types

V1 supports only these four appeal types:

- unauthorized suspension
- service not received
- listing not recognised
- listing not as described

The reason for limiting appeal types is to keep the UI, wording, and output logic manageable.

## Application structure

### Main pages

- `/`  
  Landing page

- `/builder`  
  Main case builder flow

- `/review`  
  Review page for generated structure

- `/export`  
  Export page for PDF generation and download

### API route

- `/api/export-pdf`  
  Handles PDF generation

## Builder flow

The builder is split into 4 steps:

### Step 1 – Appeal type
User selects one of the supported appeal types.

### Step 2 – Case basics
User enters:
- business name
- optional contact email
- listing creation date
- GBP listing URL or CID
- primary business category

### Step 3 – Description and evidence
User enters:
- product description
- fulfillment details
- customer communication
- additional notes
- uploads evidence files

### Step 4 – Review
System presents:
- case summary
- evidence timeline
- evidence list

User then proceeds to export.

## Core data model

### DisputeType

```ts
type DisputeType =
  | "unauthorized"
  | "service_not_received"
  | "subscription_canceled"
  | "product_not_as_described";
```

### EvidenceFile

```ts
type EvidenceFile = {
  name: string;
  type: string;
  size: number;
  data?: string; // base64-encoded file content, written at selection time
};
```

### TimelineItem

```ts
type TimelineItem = {
  date: string;
  title: string;
  description: string;
};
```

### CaseData

```ts
type CaseData = {
  disputeType: DisputeType;

  customerName: string;
  customerEmail?: string;
  orderDate: string;
  amount: string;
  currency: string;
  productName: string;

  productDescription: string;

  fulfillmentDetails: string;
  customerCommunication: string;
  additionalNotes: string;

  timelineItems: TimelineItem[];
  evidenceFiles: EvidenceFile[];
};
```

### Field requirements

Required fields:

- disputeType
- customerName
- orderDate
- amount
- currency
- productName
- productDescription
- fulfillmentDetails

Optional fields:

- customerEmail
- customerCommunication
- additionalNotes
- timelineItems
- evidenceFiles

## Timeline logic

In V1, timeline items do not need to be fully user-managed.

Preferred approach:

- derive a base timeline automatically from structured inputs
- optionally allow limited additions later

Example timeline entries:

- order/subscription date
- access or delivery fulfillment note
- customer communication event
- appeal preparation date

## File handling

V1 supports manual evidence uploads.

V1 assumptions:

- files are uploaded during the active session
- files are processed only for current case handling
- there is no long-term user file library
- no file management dashboard is needed

### File transport mechanism

Files are read client-side at selection time using the `FileReader` API. The base64-encoded content (without the `data:` URL prefix) is stored in the `data` field of each `EvidenceFile` object and persisted in `sessionStorage` as part of `caseData`. The entire object — including all file data — is sent to the server as a plain JSON request body. No multipart form parsing is required.

This approach has a practical size constraint: `sessionStorage` is typically limited to 5 MB per origin, and Vercel serverless functions enforce a 4.5 MB request body limit. Users uploading large or numerous files may encounter errors. A client-side size warning is shown in the UI before export when the payload approaches this limit.

## Output generation

V1 generates one PDF containing:

- case summary
- evidence timeline
- evidence list

PDF generation uses two libraries:

- **pdfkit** builds the main evidence document in memory on the server.
- **pdf-lib** merges pages from any uploaded PDF attachments into the pdfkit output.

File type handling inside the PDF:

- JPEG and PNG images are rendered inline using `doc.image()`.
- Uploaded PDF files have their pages appended to the end of the document via pdf-lib.
- Other file types are attached as embedded file streams using pdfkit's `doc.file()`. Most PDF viewers do not expose embedded file streams, so these files are listed in the evidence index but are not directly accessible in standard viewers.

V1 does not generate:

- ZIP bundles
- submission-ready API packages
- direct Google-formatted uploads

## Technical decisions

### Frontend

- Next.js App Router
- TypeScript
- component-based form structure

### Backend

- Next.js route handler for PDF export
- pdfkit for server-side PDF generation
- pdf-lib for merging uploaded PDF attachment pages into the main document
- minimal server logic only where needed

### Storage

- no database
- no persistent user storage in V1

### Authentication

- none in V1

### Hosting

- Vercel

## Folder structure

```
gbp-appeal-pack-builder/
├─ src/
│  ├─ app/
│  │  ├─ page.tsx
│  │  ├─ builder/
│  │  │  └─ page.tsx
│  │  ├─ review/
│  │  │  └─ page.tsx
│  │  ├─ export/
│  │  │  └─ page.tsx
│  │  ├─ api/
│  │  │  └─ export-pdf/
│  │  │     └─ route.ts
│  │  ├─ layout.tsx
│  │  └─ globals.css
│  │
│  ├─ components/
│  │  ├─ forms/
│  │  │  ├─ CaseForm.tsx
│  │  │  ├─ DisputeTypeStep.tsx
│  │  │  ├─ EvidenceUploadStep.tsx
│  │  │  └─ ReviewSummary.tsx
│  │  ├─ ui/
│  │  │  ├─ Button.tsx
│  │  │  ├─ Input.tsx
│  │  │  ├─ Textarea.tsx
│  │  │  ├─ FileUpload.tsx
│  │  │  └─ PayloadWarningBanner.tsx
│  │
│  ├─ lib/
│  │  ├─ dispute-types.ts
│  │  ├─ payload-size.ts
│  │  ├─ pdf-builder.ts
│  │  ├─ summary-builder.ts
│  │  ├─ timeline-builder.ts
│  │  ├─ utils.ts
│  │  └─ validation.ts
│  │
│  ├─ types/
│  │  └─ case.ts
│
├─ public/
│
├─ README.md
├─ architecture.md
├─ roadmap.md
└─ copilot-prompts.md
```

## Explicit exclusions

To prevent scope creep, these areas are excluded from V1:

- case persistence
- multi-session recovery
- team collaboration
- admin dashboards
- appeal analytics
- Google API synchronization
- CRM/helpdesk integrations
- billing system
- multi-platform support
- legal reasoning engine
- AI-generated legal argumentation

## Current architecture principle

V1 is intentionally built as:

- one narrow workflow
- one session
- one exportable output
- minimal moving parts

Any future expansion should be justified by real usage, not by anticipation.