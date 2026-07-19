import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import GoogleAnalytics from "@/components/google-analytics";
import "./globals.css";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: { default: "GOOD GARDEN FOOD", template: "%s | GOOD GARDEN FOOD" },
  description: siteConfig.description,
  keywords: ["premium bananas", "banana brand", "banana importer", "banana exporter", "global banana sourcing", "Central Asia fruit market"],
  openGraph: { type: "website", siteName: siteConfig.name, title: siteConfig.name, description: siteConfig.description },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}<GoogleAnalytics /><Analytics /></body></html>;
}
