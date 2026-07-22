import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import GoogleAnalytics from "@/components/google-analytics";
import "./globals.css";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: { default: "GOOD GARDEN FOOD", template: "%s | GOOD GARDEN FOOD" },
  description: siteConfig.description,
  keywords: ["wholesale Cavendish bananas", "Central Asia banana supplier", "banana importer", "banana distributor", "13 kg banana carton", "18.14 kg banana carton", "global banana sourcing"],
  openGraph: { type: "website", siteName: siteConfig.name, title: siteConfig.name, description: siteConfig.description, images: [{ url: "/og.png", width: 1728, height: 960, alt: "GOOD GARDEN — Premium Bananas for Central Asia" }] },
  twitter: { card: "summary_large_image", title: siteConfig.name, description: siteConfig.description, images: ["/og.png"] },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}<GoogleAnalytics /><Analytics /></body></html>;
}
