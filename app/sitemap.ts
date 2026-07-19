import type { MetadataRoute } from "next";
import { locales } from "@/lib/i18n";
import { absoluteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return locales.map((locale) => ({ url: absoluteUrl(`/${locale}`), lastModified: new Date(), changeFrequency: "monthly" as const, priority: 1 }));
}
