import type { MetadataRoute } from "next";
import { locales, products } from "@/lib/i18n";
import { absoluteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/about", "/products", "/supply-chain", "/quality", "/news", "/contact"];
  return locales.flatMap((locale) => [
    ...pages.map((page) => ({ url: absoluteUrl(`/${locale}${page}`), lastModified: new Date(), changeFrequency: "monthly" as const, priority: page === "" ? 1 : 0.8 })),
    ...products[locale].map((product) => ({ url: absoluteUrl(`/${locale}/products/${product.slug}`), lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 })),
  ]);
}
