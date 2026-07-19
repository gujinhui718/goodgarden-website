import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getCopy, isLocale, locales, products, type Locale } from "@/lib/i18n";
import { absoluteUrl } from "@/lib/site";

export const dynamicParams = false;

export function generateStaticParams() { return locales.flatMap((locale) => products[locale].map((product) => ({ locale, slug: product.slug }))); }

function findProduct(locale: Locale, slug: string) { return products[locale].find((item) => item.slug === slug); }

export async function generateMetadata({ params }: { params: Promise<{ locale: string; slug: string }> }): Promise<Metadata> {
  const { locale: requestedLocale, slug } = await params;
  if (!isLocale(requestedLocale)) return {};
  const product = findProduct(requestedLocale, slug);
  if (!product) return {};
  return { title: product.name, description: product.description, alternates: { canonical: absoluteUrl(`/${requestedLocale}/products/${product.slug}`) }, openGraph: { images: [{ url: product.image, alt: product.name }] } };
}

export default async function ProductDetailPage({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale: requestedLocale, slug } = await params;
  if (!isLocale(requestedLocale)) notFound();
  const locale = requestedLocale;
  const product = findProduct(locale, slug);
  if (!product) notFound();
  const c = getCopy(locale);
  return <>
    <section className={`${product.tone} overflow-hidden`}><div className="mx-auto grid min-h-[580px] max-w-[1440px] gap-8 px-5 py-14 sm:px-8 lg:grid-cols-2 lg:items-center lg:px-12 lg:py-20"><div className="order-2 lg:order-1"><Link href={`/${locale}/products`} className="text-xs font-bold tracking-wide text-garden-700 hover:text-gold-500">← {c.common.back}</Link><p className="eyebrow mt-12 text-gold-500">{product.category}</p><h1 className="display mt-4 text-5xl text-garden-900 sm:text-7xl">{product.name}</h1><p className="mt-6 max-w-lg text-xl leading-8 text-garden-900/75">{product.description}</p><p className="mt-5 max-w-lg leading-7 text-garden-900/60">{product.detail}</p><Link href={`/${locale}/contact`} className="button mt-8">{c.common.availability} <span className="ml-3">→</span></Link></div><div className="order-1 overflow-hidden rounded-[2rem] shadow-soft lg:order-2"><img src={product.image} alt={product.name} className="aspect-[1/1] w-full object-cover" /></div></div></section>
    <section className="bg-white"><div className="mx-auto grid max-w-[1000px] gap-8 px-5 py-14 sm:grid-cols-2 sm:px-8 lg:grid-cols-3 lg:px-12"><Info label={c.products.origin} value={product.origin} /><Info label={c.products.season} value={product.season} /><Info label="Good to know" value={locale === "zh" ? "新鲜、可追溯、用心守护" : "Fresh, traceable, handled with care"} /></div></section>
  </>;
}

function Info({ label, value }: { label: string; value: string }) { return <div className="border-l border-gold-400 pl-5"><p className="text-[10px] font-bold uppercase tracking-[.15em] text-garden-900/45">{label}</p><p className="mt-2 text-lg font-medium text-garden-800">{value}</p></div>; }
