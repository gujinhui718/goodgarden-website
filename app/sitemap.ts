import type { MetadataRoute } from "next";
import { locales } from "@/lib/i18n";
import { absoluteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-07-22T00:00:00.000Z");
  const pages = [
    { path: "", priority: 1 },
    { path: "/about", priority: 0.8 },
    { path: "/products", priority: 0.9 },
    { path: "/products/premium-cavendish", priority: 0.9 },
    { path: "/supply-chain", priority: 0.8 },
    { path: "/quality", priority: 0.8 },
    { path: "/news", priority: 0.7 },
    { path: "/contact", priority: 0.8 },
  ];
  return locales.flatMap((locale) => pages.map((page) => {
    const languageAlternates = Object.fromEntries(locales.map((language) => [language === "zh" ? "zh-CN" : language, absoluteUrl(`/${language}${page.path}`)]));
    return {
      url: absoluteUrl(`/${locale}${page.path}`),
      lastModified,
      changeFrequency: "monthly" as const,
      priority: page.priority,
      alternates: { languages: languageAlternates },
    };
  }));
}
