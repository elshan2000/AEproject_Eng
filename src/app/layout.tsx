import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import { env } from "@/lib/env";
import { Toaster } from "@/components/ui/toaster";

// Body/UI font — clean and highly legible.
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

// Display/heading font — elegant serif for the luxury feel.
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-serif",
  display: "swap",
});

const SITE_NAME = "Maison Fleur";
const SITE_DESCRIPTION =
  "Hand-tied luxury bouquets and floral arrangements, delivered with care. Fresh flowers for every occasion.";

export const metadata: Metadata = {
  metadataBase: new URL(env.NEXT_PUBLIC_SITE_URL),
  title: {
    default: `${SITE_NAME} — Luxury Flowers & Bouquets`,
    template: `%s — ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "flowers",
    "florist",
    "bouquets",
    "flower delivery",
    "luxury flowers",
    "wedding flowers",
  ],
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    title: `${SITE_NAME} — Luxury Flowers & Bouquets`,
    description: SITE_DESCRIPTION,
    url: env.NEXT_PUBLIC_SITE_URL,
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} — Luxury Flowers & Bouquets`,
    description: SITE_DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${cormorant.variable}`}>
      <body>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
