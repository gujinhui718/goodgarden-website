import type { Metadata } from "next";
import Link from "next/link";
import SectionHeading from "@/components/section-heading";
import { getCopy, isLocale, type Locale } from "@/lib/i18n";
import { absoluteUrl } from "@/lib/site";

const routeImage = "https://images.unsplash.com/photo-1498579397066-22750a3cb424?auto=format&fit=crop&w=1800&q=85";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale: requestedLocale } = await params;
  const locale = isLocale(requestedLocale) ? requestedLocale : "en";
  const c = getCopy(locale);
  return { title: c.nav.supply, description: c.supply.intro, alternates: { canonical: absoluteUrl(`/${locale}/supply-chain`) } };
}

export default async function SupplyChainPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: requestedLocale } = await params;
  const locale = requestedLocale as Locale;
  const c = getCopy(locale);
  return <>
    <section className="mx-auto grid max-w-[1440px] gap-10 px-5 pb-16 pt-20 sm:px-8 sm:pb-24 sm:pt-28 lg:grid-cols-[1fr_.9fr] lg:items-end lg:px-12"><SectionHeading eyebrow={c.supply.eyebrow} title={c.supply.title} intro={c.supply.intro} /><div className="overflow-hidden rounded-[2rem]"><img src={routeImage} alt="Fresh produce moving through a market" className="aspect-[1.2/1] w-full object-cover" /></div></section>
    <section className="border-y border-garden-900/10 bg-white"><div className="mx-auto max-w-[1440px] px-5 py-16 sm:px-8 sm:py-24 lg:px-12"><div className="grid gap-0 md:grid-cols-2">{c.supply.steps.map((step) => <article key={step.number} className="group border-b border-garden-900/10 py-8 md:odd:border-r md:odd:pr-10 md:even:pl-10"><p className="text-xs font-bold tracking-[.16em] text-gold-500">{step.number}</p><div className="mt-5 flex items-baseline justify-between gap-4"><h2 className="display text-3xl text-garden-900 sm:text-4xl">{step.title}</h2><span className="text-garden-700">↗</span></div><p className="mt-3 max-w-sm leading-7 text-garden-900/60">{step.text}</p></article>)}</div></div></section>
    <section className="bg-garden-700 px-5 py-20 text-center text-white sm:px-8 sm:py-28 lg:px-12"><p className="eyebrow text-gold-300">GOOD GARDEN FLOW</p><h2 className="display mx-auto mt-4 max-w-3xl text-4xl leading-[1.05] sm:text-6xl">{c.supply.callout}</h2><Link href={`/${locale}/contact`} className="button button-light mt-8">{c.common.speak} <span className="ml-3 text-gold-500">→</span></Link></section>
  </>;
}
