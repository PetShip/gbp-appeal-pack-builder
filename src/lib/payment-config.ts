// Payment configuration for ProofPack's Stripe payment gate.
// Set NEXT_PUBLIC_PAYMENT_GATE_ENABLED=true and the Stripe env vars below
// to enable the gate.

export const PAYMENT_CONFIG = {
  /** Display price shown to users (UI only — actual charge is set on the Stripe Price object). */
  priceDisplay: "$4.99",
  /** Stripe Price ID — set via STRIPE_PRICE_ID env var. */
  stripePriceId: process.env.STRIPE_PRICE_ID ?? "",
  /** Product name shown on the Stripe Checkout page. */
  productName: "ProofPack Evidence Pack",
} as const;

/** True when the payment gate is active (env var opted in). */
export const PAYMENT_GATE_ENABLED =
  process.env.NEXT_PUBLIC_PAYMENT_GATE_ENABLED === "true";
