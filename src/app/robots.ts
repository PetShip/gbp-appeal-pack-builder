import type { MetadataRoute } from "next";

const LEGACY_CHARGEBACK_PATHS = [
  "/chargeback-evidence-template",
  "/stripe-chargeback-evidence",
  "/digital-product-chargeback-evidence",
  "/service-not-received-evidence",
  "/subscription-canceled-evidence",
  "/unauthorized-transaction-evidence",
  "/product-not-as-described-evidence",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: LEGACY_CHARGEBACK_PATHS,
      },
    ],
    sitemap: "https://appealkit.pro/sitemap.xml",
  };
}
