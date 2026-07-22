import type { Metadata } from "next";
import type { Locale } from "@/lib/i18n";
import { absoluteUrl, siteConfig } from "@/lib/site";

export function pageMetadata(locale: Locale, path: string, seo: { title: string; description: string }, image: string): Metadata {
  const url = absoluteUrl(`/${locale}${path}`);
  const openGraphLocale = locale === "zh" ? "zh_CN" : locale === "ru" ? "ru_RU" : "en_US";
  return {
    title: { absolute: seo.title },
    description: seo.description,
    alternates: {
      canonical: url,
      languages: {
        en: absoluteUrl(`/en${path}`),
        "zh-CN": absoluteUrl(`/zh${path}`),
        ru: absoluteUrl(`/ru${path}`),
        "x-default": absoluteUrl(`/en${path}`),
      },
    },
    openGraph: {
      type: "website",
      siteName: siteConfig.name,
      locale: openGraphLocale,
      title: seo.title,
      description: seo.description,
      url,
      images: [{ url: image, alt: seo.title }],
    },
    twitter: { card: "summary_large_image", title: seo.title, description: seo.description, images: [image] },
  };
}
