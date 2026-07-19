import type { Metadata } from "next";
import Link from "next/link";
import SectionHeading from "@/components/section-heading";
import { getCopy, isLocale, type Locale } from "@/lib/i18n";
import { absoluteUrl } from "@/lib/site";

const qualityImage = "https://images.unsplash.com/photo-1570222094114-d054a817e56b?auto=format&fit=crop&w=1800&q=85";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale: requestedLocale } = await params;
  const locale = isLocale(requestedLocale) ? requestedLocale : "en";
  const c = getCopy(locale);
  return { title: c.nav.quality, description: c.quality.intro, alternates: { canonical: absoluteUrl(`/${locale}/quality`) } };
}

export default async function QualityPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: requestedLocale } = await params;
  const locale = requestedLocale as Locale;
  const c = getCopy(locale);
  return <>
    <section className="mx-auto grid max-w-[1440px] gap-12 px-5 pb-20 pt-20 sm:px-8 sm:pb-28 sm:pt-28 lg:grid-cols-[.95fr_1fr] lg:items-center lg:px-12"><SectionHeading eyebrow={c.quality.eyebrow} title={c.quality.title} intro={c.quality.intro} /><div className="relative"><div className="absolute -bottom-4 -right-4 h-full w-full rounded-[2rem] border border-gold-400/70" /><img src={qualityImage} alt="A close look at fresh citrus fruit" className="relative aspect-[1/1] w-full rounded-[2rem] object-cover" /></div></section>
    <section className="bg-garden-50 py-20 sm:py-28"><div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12"><div className="grid gap-5 lg:grid-cols-3">{c.quality.pillars.map((pillar, index) => <article key={pillar.title} className="rounded-[1.5rem] bg-white p-7 shadow-card sm:p-8"><div className="grid h-10 w-10 place-items-center rounded-full bg-garden-100 text-sm font-bold text-garden-700">0{index + 1}</div><h2 className="display mt-9 text-3xl text-garden-900">{pillar.title}</h2><p className="mt-4 leading-7 text-garden-900/60">{pillar.text}</p></article>)}</div></div></section>
    <section className="mx-auto max-w-[1000px] px-5 py-20 text-center sm:px-8 sm:py-28"><p className="display text-4xl leading-tight text-garden-800 sm:text-5xl">“{c.quality.note}”</p><Link href={`/${locale}/contact`} className="button mt-8">{c.common.speak} <span className="ml-3">→</span></Link></section>
  </>;
}
