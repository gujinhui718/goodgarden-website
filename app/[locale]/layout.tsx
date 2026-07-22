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
  const openGraphLocale = locale === "zh" ? "zh_CN" : locale === "ru" ? "ru_RU" : "en_US";
  const language = locale === "zh" ? "zh-CN" : locale;
  return {
    alternates: { canonical: absoluteUrl(`/${locale}`), languages: { en: absoluteUrl("/en"), "zh-CN": absoluteUrl("/zh"), ru: absoluteUrl("/ru"), "x-default": absoluteUrl("/en") } },
    openGraph: { locale: openGraphLocale, url: absoluteUrl(`/${locale}`), siteName: siteConfig.name },
    other: { "content-language": language },
  };
}

export default async function LocaleLayout({ children, params }: Readonly<{ children: React.ReactNode; params: Promise<{ locale: string }> }>) {
  const { locale: requestedLocale } = await params;
  if (!isLocale(requestedLocale)) notFound();
  const locale = requestedLocale as Locale;
  const lang = locale === "zh" ? "zh-CN" : locale;
  return <div lang={lang} className="min-h-screen overflow-x-clip"><SiteHeader locale={locale} /><main className="pt-[82px]">{children}</main><SiteFooter locale={locale} /></div>;
}
