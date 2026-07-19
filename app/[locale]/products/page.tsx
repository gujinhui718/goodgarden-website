import type { Metadata } from "next";
import FruitCard from "@/components/fruit-card";
import SectionHeading from "@/components/section-heading";
import { getCopy, isLocale, products, type Locale } from "@/lib/i18n";
import { absoluteUrl } from "@/lib/site";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale: requestedLocale } = await params;
  const locale = isLocale(requestedLocale) ? requestedLocale : "en";
  const c = getCopy(locale);
  return { title: c.nav.products, description: c.products.intro, alternates: { canonical: absoluteUrl(`/${locale}/products`) } };
}

export default async function ProductsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: requestedLocale } = await params;
  const locale = requestedLocale as Locale;
  const c = getCopy(locale);
  return <section className="mx-auto max-w-[1440px] px-5 pb-20 pt-20 sm:px-8 sm:pb-28 sm:pt-28 lg:px-12">
    <SectionHeading eyebrow={c.products.eyebrow} title={c.products.title} intro={c.products.intro} />
    <div className="mt-12 flex flex-wrap gap-2"><span className="rounded-full bg-garden-700 px-4 py-2 text-xs font-bold tracking-wide text-white">{c.products.filters}</span>{[...new Set(products[locale].map((item) => item.category))].map((category) => <span key={category} className="rounded-full border border-garden-900/10 bg-white px-4 py-2 text-xs font-bold tracking-wide text-garden-900/55">{category}</span>)}</div>
    <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">{products[locale].map((product) => <FruitCard key={product.slug} product={product} locale={locale} label={c.products.detail} />)}</div>
  </section>;
}
