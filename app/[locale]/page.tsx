import type { Metadata } from "next";
import Link from "next/link";
import FruitCard from "@/components/fruit-card";
import SectionHeading from "@/components/section-heading";
import { getCopy, isLocale, products, type Locale } from "@/lib/i18n";
import { absoluteUrl } from "@/lib/site";

const heroImage = "https://images.unsplash.com/photo-1610832958506-aa56368176cf?auto=format&fit=crop&w=2200&q=90";
const growerImage = "https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=1400&q=85";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale: requestedLocale } = await params;
  const locale = isLocale(requestedLocale) ? requestedLocale : "en";
  const c = getCopy(locale);
  return { title: "GOOD GARDEN FOOD", description: c.home.intro, alternates: { canonical: absoluteUrl(`/${locale}`) } };
}

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: requestedLocale } = await params;
  const locale = requestedLocale as Locale;
  const c = getCopy(locale);
  return (
    <>
      <section className="relative isolate min-h-[650px] overflow-hidden bg-garden-900 sm:min-h-[720px]">
        <img src={heroImage} alt="Fresh fruit harvest in a garden" className="absolute inset-0 h-full w-full object-cover opacity-70" />
        <div className="absolute inset-0 bg-gradient-to-r from-garden-900 via-garden-900/75 to-garden-900/10" />
        <div className="relative mx-auto flex min-h-[650px] max-w-[1440px] flex-col justify-end px-5 pb-16 pt-28 sm:min-h-[720px] sm:px-8 sm:pb-20 lg:px-12 lg:pb-24">
          <p className="eyebrow text-gold-300">{c.home.eyebrow}</p>
          <h1 className="display mt-5 max-w-3xl whitespace-pre-line text-5xl leading-[.93] text-white sm:text-7xl lg:text-[7.2rem]">{c.home.title}</h1>
          <p className="mt-7 max-w-lg text-base leading-7 text-white/75 sm:text-lg sm:leading-8">{c.home.intro}</p>
          <div className="mt-9"><Link href={`/${locale}/products`} className="button button-light">{c.common.explore} <span className="ml-3 text-gold-500">→</span></Link></div>
          <p className="mt-14 text-[10px] font-bold uppercase tracking-[.16em] text-white/45">{c.home.scroll} <span className="ml-2 text-gold-300">↓</span></p>
        </div>
      </section>

      <section className="border-b border-garden-900/10 bg-white">
        <div className="mx-auto grid max-w-[1440px] divide-y divide-garden-900/10 px-5 sm:px-8 md:grid-cols-3 md:divide-x md:divide-y-0 lg:px-12">
          {c.home.stats.map((item) => <div key={item.label} className="py-8 text-center sm:py-10"><p className="display text-4xl text-garden-700">{item.value}</p><p className="mt-2 text-xs font-bold tracking-wider text-garden-900/50">{item.label}</p></div>)}
        </div>
      </section>

      <section className="mx-auto grid max-w-[1440px] gap-12 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-[1fr_.95fr] lg:items-center lg:gap-20 lg:px-12">
        <div><SectionHeading eyebrow={c.home.commitment} title={c.home.promiseTitle} intro={c.home.promiseText} /><Link href={`/${locale}/about`} className="mt-8 inline-block text-xs font-bold tracking-wide text-garden-700 hover:text-gold-500">{c.common.learn} <span className="ml-2">→</span></Link></div>
        <div className="relative mx-auto w-full max-w-xl"><div className="absolute -left-4 -top-4 h-28 w-28 rounded-full bg-gold-300/50 sm:-left-8 sm:-top-8" /><img src={growerImage} alt="Hands caring for young plants" className="relative aspect-[1.1/1] w-full rounded-[2rem] object-cover shadow-soft" /><p className="absolute -bottom-5 right-5 rounded-2xl bg-white px-5 py-4 text-sm font-medium text-garden-700 shadow-card">From garden to table <span className="ml-2 text-gold-500">↗</span></p></div>
      </section>

      <section className="bg-garden-50 py-20 sm:py-28">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12"><div className="flex flex-col justify-between gap-8 md:flex-row md:items-end"><SectionHeading eyebrow={c.products.eyebrow} title={c.products.title} intro={c.products.intro} /><Link href={`/${locale}/products`} className="shrink-0 text-xs font-bold tracking-wide text-garden-700 hover:text-gold-500">{c.common.allProducts} →</Link></div><div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">{products[locale].map((product) => <FruitCard key={product.slug} product={product} locale={locale} label={c.products.detail} />)}</div></div>
      </section>

      <section className="bg-garden-700 py-20 text-white sm:py-28">
        <div className="mx-auto grid max-w-[1440px] gap-10 px-5 sm:px-8 lg:grid-cols-[1.2fr_1fr] lg:items-end lg:px-12"><SectionHeading eyebrow={c.supply.eyebrow} title={c.home.global} intro={c.home.globalText} light /><div className="rounded-[1.5rem] border border-white/15 bg-white/5 p-7 backdrop-blur-sm sm:p-8"><p className="display text-3xl leading-tight text-gold-300">“{c.supply.callout}”</p><Link href={`/${locale}/supply-chain`} className="button button-light mt-7">{c.nav.supply} <span className="ml-3 text-gold-500">→</span></Link></div></div>
      </section>

      <section className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 sm:py-28 lg:px-12"><div className="relative overflow-hidden rounded-[2rem] bg-[#e6eddc] px-7 py-12 sm:px-12 sm:py-16"><div className="absolute -right-16 -top-20 h-72 w-72 rounded-full border-[30px] border-gold-300/40" /><p className="eyebrow text-gold-500">GOOD GARDEN FOOD</p><h2 className="display mt-4 max-w-2xl text-4xl leading-[1.02] text-garden-900 sm:text-6xl">{c.contact.title}</h2><p className="mt-5 max-w-xl leading-7 text-garden-900/65">{c.contact.intro}</p><Link href={`/${locale}/contact`} className="button mt-8">{c.common.speak} <span className="ml-3">→</span></Link></div></section>
    </>
  );
}
