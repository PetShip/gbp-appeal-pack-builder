# README.md

# ProofPack

ProofPack is a focused web utility that helps Stripe-based SaaS and digital product businesses turn scattered customer proof into a clean, dispute-ready evidence pack.

## Purpose

The product is designed for a very specific problem:

When a Stripe dispute happens, many businesses already have relevant evidence, but it is spread across emails, screenshots, billing records, product details, terms, and usage information. The problem is often not missing proof, but missing structure, relevance, and speed.

ProofPack helps users collect the relevant case information, review it in one place, and export a structured PDF they can use for their dispute response workflow.

## Target user

The first MVP is built for:

- small to mid-sized SaaS businesses
- small to mid-sized digital product businesses
- businesses using Stripe
- users handling a current dispute manually

## MVP scope

Version 1 is intentionally small.

### Included in V1

- landing page
- one-case builder flow
- no-login usage
- support for 4 dispute types
- structured case input
- manual evidence file upload
- review screen
- PDF export containing:
  - case summary
  - evidence timeline
  - evidence list

### Supported dispute types in V1

- unauthorized
- service not received
- subscription canceled / not recognized
- product not as described

## Not included in V1

- no user accounts
- no saved cases
- no dashboard
- no database
- no team collaboration
- no Stripe API integration
- no Gmail/helpdesk integration
- no direct submission to Stripe
- no ZIP export
- no legal advice
- no chargeback win guarantee
- no fraud prevention features

## Core user flow

1. User lands on the homepage
2. User starts a new case
3. User selects dispute type
4. User enters case details
5. User adds product, fulfillment, and communication details
6. User uploads supporting evidence files
7. User reviews generated summary and structure
8. User exports the case as PDF

## MVP philosophy

This product is not intended to be a broad dispute management platform.

The goal of V1 is only to validate one narrow job-to-be-done:

Help a user with a current Stripe dispute create a clean, structured evidence pack quickly.

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