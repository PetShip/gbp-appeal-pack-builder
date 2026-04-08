import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { PAYMENT_CONFIG } from "@/lib/payment-config";

function getStripe(): Stripe {
  const key = process.env.STRIPE_SECRET_KEY;
  if (!key) throw new Error("STRIPE_SECRET_KEY is not configured");
  return new Stripe(key, { apiVersion: "2026-02-25.clover" });
}

export async function POST(request: NextRequest) {
  try {
    const stripe = getStripe();

    const priceId = PAYMENT_CONFIG.stripePriceId;
    if (!priceId) {
      console.error("[api/create-checkout-session] STRIPE_PRICE_ID is not configured");
      return new NextResponse("Payment is not configured", { status: 500 });
    }

    const baseUrl =
      process.env.NEXT_PUBLIC_BASE_URL ??
      `https://${request.headers.get("host") ?? "localhost:3000"}`;

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      success_url: `${baseUrl}/export?payment_success=1&session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${baseUrl}/export?payment_canceled=1`,
      metadata: { product: "appealkit" },
    });

    return NextResponse.json({ url: session.url });
  } catch (err) {
    console.error("[api/create-checkout-session] error:", err);
    return new NextResponse("Failed to create checkout session", { status: 500 });
  }
}
