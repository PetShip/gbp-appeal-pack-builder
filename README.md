# README.md

# GBP Appeal Pack Builder

GBP Appeal Pack Builder is a focused web utility that helps businesses and individuals with a suspended Google Business Profile build a clean, structured reinstatement appeal pack.

## Purpose

The product is designed for a very specific problem:

When a GBP suspension happens, many businesses already have relevant evidence, but it is spread across emails, screenshots, business documents, and policy compliance details. The problem is often not missing proof, but missing structure, relevance, and speed.

GBP Appeal Pack Builder helps users collect the relevant case information, review it in one place, and export a structured PDF they can use for their reinstatement appeal submission.

## Target user

The first MVP is built for:

- small to mid-sized businesses with a suspended Google Business Profile
- individuals managing their own GBP listing
- users handling a current suspension manually

## MVP scope

Version 1 is intentionally small.

### Included in V1

- landing page
- one-case builder flow
- no-login usage
- support for 4 appeal types
- structured case input
- manual evidence file upload
- review screen
- PDF export containing:
  - case summary
  - evidence timeline
  - evidence list

### Supported appeal types in V1

- unauthorized suspension
- service not received
- listing not recognised
- listing not as described

## Not included in V1

- no user accounts
- no saved cases
- no dashboard
- no database
- no team collaboration
- no Google API integration
- no direct submission to Google
- no ZIP export
- no legal advice
- no reinstatement guarantee
- no fraud prevention features

## Core user flow

1. User lands on the homepage
2. User starts a new case
3. User selects appeal type
4. User enters case details
5. User adds business, listing, and communication details
6. User uploads supporting evidence files
7. User reviews generated summary and structure
8. User exports the case as PDF

## MVP philosophy

This product is not intended to be a broad GBP management platform.

The goal of V1 is only to validate one narrow job-to-be-done:

Help a user with a current GBP suspension create a clean, structured appeal pack quickly.

## Tech stack V1

- Next.js
- App Router
- TypeScript
- simple styling layer
- server-side PDF generation
- Vercel hosting

## Project principles

- keep the scope narrow
- avoid overengineering
- prefer clarity over feature richness
- optimize for solo-founder maintainability
- build only what is needed for the first usable version