import type { Metadata } from "next";
import Link from "next/link";
import SectionHeading from "@/components/section-heading";
import { getCopy, isLocale, type Locale } from "@/lib/i18n";
import { absoluteUrl } from "@/lib/site";

const fieldImage = "https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?auto=format&fit=crop&w=1800&q=85";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale: requestedLocale } = await params;
  const locale = isLocale(requestedLocale) ? requestedLocale : "en";
  const c = getCopy(locale);
  return { title: c.nav.about, description: c.about.intro, alternates: { canonical: absoluteUrl(`/${locale}/about`) } };
}

export default async function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: requestedLocale } = await params;
  const locale = requestedLocale as Locale;
  const c = getCopy(locale);
  return <>
    <section className="mx-auto max-w-[1440px] px-5 pb-16 pt-20 sm:px-8 sm:pb-24 sm:pt-28 lg:px-12"><SectionHeading eyebrow={c.about.eyebrow} title={c.about.title} intro={c.about.intro} /><div className="mt-14 overflow-hidden rounded-[2rem]"><img src={fieldImage} alt="A sunlit fruit field" className="aspect-[1.75/1] w-full object-cover" /></div></section>
    <section className="bg-garden-900 py-20 text-white sm:py-28"><div className="mx-auto grid max-w-[1440px] gap-12 px-5 sm:px-8 lg:grid-cols-[.9fr_1.1fr] lg:gap-20 lg:px-12"><h2 className="display whitespace-pre-line text-4xl leading-[1.03] sm:text-6xl">{c.about.storyTitle}</h2><p className="max-w-xl text-lg leading-8 text-white/70">{c.about.storyText}</p></div></section>
    <section className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 sm:py-28 lg:px-12"><p className="eyebrow text-gold-500">GOOD GARDEN VALUES</p><div className="mt-10 grid gap-5 md:grid-cols-3">{c.about.values.map((item, index) => <article key={item.title} className="rounded-[1.5rem] bg-garden-50 p-7 sm:p-8"><p className="text-xs font-bold tracking-widest text-gold-500">0{index + 1}</p><h3 className="display mt-8 text-3xl text-garden-900">{item.title}</h3><p className="mt-4 leading-7 text-garden-900/60">{item.text}</p></article>)}</div></section>
    <section className="border-t border-garden-900/10 bg-white"><div className="mx-auto flex max-w-[1440px] flex-col justify-between gap-6 px-5 py-12 sm:px-8 md:flex-row md:items-center lg:px-12"><p className="display max-w-xl text-3xl text-garden-900">{c.home.promiseText}</p><Link href={`/${locale}/contact`} className="button shrink-0">{c.common.speak} <span className="ml-3">→</span></Link></div></section>
  </>;
}
