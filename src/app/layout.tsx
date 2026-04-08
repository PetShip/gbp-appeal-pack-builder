import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
import GoogleAnalytics from "@/components/GoogleAnalytics";

const BASE_URL = "https://appealkit.pro";

function resolveBaseUrl(): string {
  const raw =
    process.env.NEXT_PUBLIC_BASE_URL ??
    (process.env.NODE_ENV === "development" ? "http://localhost:3000" : BASE_URL);
  return /^https?:\/\//i.test(raw) ? raw : `https://${raw}`;
}

export const metadata: Metadata = {
  metadataBase: new URL(resolveBaseUrl()),
  title: {
    default: "AppealKit — Google Business Profile Reinstatement Appeal Builder",
    template: "%s | AppealKit",
  },
  description:
    "Build a clean, structured appeal pack for your suspended or restricted Google Business Profile. AppealKit guides you through the inputs, organises your documents, and exports a ready-to-use PDF.",
  keywords: [
    "GBP reinstatement appeal",
    "Google Business Profile appeal",
    "GBP suspension appeal",
    "Google Business Profile reinstatement",
    "GBP appeal pack",
    "AppealKit",
  ],
  authors: [{ name: "AppealKit", url: BASE_URL }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: BASE_URL,
    siteName: "AppealKit",
    title: "AppealKit — Google Business Profile Reinstatement Appeal Builder",
    description:
      "Build a clean, structured appeal pack for your suspended or restricted Google Business Profile.",
  },
  twitter: {
    card: "summary_large_image",
    title: "AppealKit — Google Business Profile Reinstatement Appeal Builder",
    description:
      "Build a clean, structured appeal pack for your suspended or restricted Google Business Profile.",
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
  },
  // Google Search Console: set NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION in env vars.
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full flex flex-col bg-slate-50 text-slate-900 antialiased">
        <GoogleAnalytics />
        <header className="sticky top-0 z-10 border-b border-slate-200 bg-white/95 backdrop-blur-sm">
          <div className="mx-auto flex max-w-3xl items-center justify-between px-6 py-4">
            <Link
              href="/"
              className="flex items-center gap-2.5 group"
            >
              {/* Brand mark — small document stack icon */}
              <svg
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                aria-hidden="true"
                className="shrink-0"
              >
                <rect x="3" y="5" width="13" height="15" rx="2" fill="#daecec" />
                <rect x="6" y="2" width="13" height="15" rx="2" fill="#b8d4d5" />
                <rect x="1" y="7" width="13" height="13" rx="2" fill="#00393b" />
                <rect x="4" y="11" width="7" height="1.5" rx="0.75" fill="white" opacity="0.9" />
                <rect x="4" y="14" width="5" height="1.5" rx="0.75" fill="white" opacity="0.6" />
              </svg>
              <span className="text-sm font-semibold text-slate-900 group-hover:text-emerald-600 transition-colors">
                AppealKit
              </span>
            </Link>
            <nav className="flex items-center gap-1 text-sm">
              <Link
                href="/faq"
                className="rounded-md px-3 py-1.5 text-slate-500 hover:bg-slate-100 hover:text-slate-900 transition-colors"
              >
                FAQ
              </Link>
              <Link
                href="/builder"
                className="ml-1 rounded-md bg-emerald-600 px-3 py-1.5 text-sm font-medium text-white hover:bg-emerald-700 transition-colors"
              >
                Build your appeal pack
              </Link>
            </nav>
          </div>
        </header>

        <main className="mx-auto w-full max-w-3xl flex-1 px-6 py-10">
          {children}
        </main>

        <footer className="border-t border-slate-200 bg-white py-8">
          <div className="mx-auto max-w-3xl px-6">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
              {/* Brand */}
              <div className="flex flex-col gap-2">
                <span className="text-sm font-semibold text-slate-800">AppealKit</span>
                <p className="text-xs text-slate-400 max-w-xs leading-relaxed">
                  Build a clean, structured appeal pack for your suspended or restricted Google Business Profile.
                </p>
              </div>

              {/* Links */}
              <div className="flex flex-wrap gap-x-8 gap-y-3 text-xs text-slate-500">
                <div className="flex flex-col gap-2">
                  <span className="font-medium text-slate-700">Product</span>
                  <Link href="/builder" className="hover:text-slate-900 transition-colors">Build your appeal pack</Link>
                  <Link href="/faq" className="hover:text-slate-900 transition-colors">FAQ</Link>
                </div>
                <div className="flex flex-col gap-2">
                  <span className="font-medium text-slate-700">Guides</span>
                  <Link href="/guides/how-to-appeal-suspended-google-business-profile" className="hover:text-slate-900 transition-colors">How to appeal a suspension</Link>
                  <Link href="/guides/google-business-profile-suspended-documents" className="hover:text-slate-900 transition-colors">Documents needed</Link>
                  <Link href="/guides/google-business-profile-restricted-profile-appeal" className="hover:text-slate-900 transition-colors">Restricted profile appeal</Link>
                  <Link href="/guides/business-information-mismatch-google-business-profile" className="hover:text-slate-900 transition-colors">Information mismatch</Link>
                  <Link href="/guides/prepare-gbp-reinstatement-appeal-pack" className="hover:text-slate-900 transition-colors">Prepare an appeal pack</Link>
                </div>
                <div className="flex flex-col gap-2">
                  <span className="font-medium text-slate-700">Legal</span>
                  <Link href="/privacy" className="hover:text-slate-900 transition-colors">Privacy</Link>
                  <Link href="/tos" className="hover:text-slate-900 transition-colors">Terms</Link>
                  <Link href="/imprint" className="hover:text-slate-900 transition-colors">Imprint</Link>
                  <Link href="/contact" className="hover:text-slate-900 transition-colors">Contact</Link>
                </div>
              </div>
            </div>

            <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-5">
              <span className="text-xs text-slate-400">
                © {new Date().getFullYear()} AppealKit · appealkit.pro
              </span>
              <span className="text-xs text-slate-300">
                No account required · No data stored
              </span>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
