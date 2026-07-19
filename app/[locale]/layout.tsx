import type { Metadata } from "next";
import { notFound } from "next/navigation";
import SiteFooter from "@/components/site-footer";
import SiteHeader from "@/components/site-header";
import { isLocale, locales, type Locale } from "@/lib/i18n";
import { absoluteUrl, siteConfig } from "@/lib/site";

export const dynamicParams = false;

export function generateStaticParams() { return locales.map((locale) => ({ locale })); }

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale: requestedLocale } = await params;
  const locale = isLocale(requestedLocale) ? requestedLocale : "en";
  const prefix = locale === "en" ? "" : "zh-CN";
  return {
    alternates: { canonical: absoluteUrl(`/${locale}`), languages: { en: absoluteUrl("/en"), "zh-CN": absoluteUrl("/zh") } },
    openGraph: { locale: prefix, url: absoluteUrl(`/${locale}`), siteName: siteConfig.name },
  };
}

export default async function LocaleLayout({ children, params }: Readonly<{ children: React.ReactNode; params: Promise<{ locale: string }> }>) {
  const { locale: requestedLocale } = await params;
  if (!isLocale(requestedLocale)) notFound();
  const locale = requestedLocale as Locale;
  return <div className="min-h-screen overflow-x-clip"><SiteHeader locale={locale} /><main className="pt-[74px]">{children}</main><SiteFooter locale={locale} /></div>;
}
