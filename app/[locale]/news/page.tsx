import type { Metadata } from "next";
import SectionHeading from "@/components/section-heading";
import { getCopy, isLocale, type Locale } from "@/lib/i18n";
import { absoluteUrl } from "@/lib/site";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale: requestedLocale } = await params;
  const locale = isLocale(requestedLocale) ? requestedLocale : "en";
  const c = getCopy(locale);
  return { title: c.nav.news, description: c.news.intro, alternates: { canonical: absoluteUrl(`/${locale}/news`) } };
}

export default async function NewsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: requestedLocale } = await params;
  const locale = requestedLocale as Locale;
  const c = getCopy(locale);
  return <section className="mx-auto max-w-[1440px] px-5 pb-20 pt-20 sm:px-8 sm:pb-28 sm:pt-28 lg:px-12"><SectionHeading eyebrow={c.news.eyebrow} title={c.news.title} intro={c.news.intro} /><div className="mt-14 grid gap-6 lg:grid-cols-3">{c.news.items.map((item, index) => <article key={item.title} className={`group overflow-hidden rounded-[1.75rem] bg-white shadow-card ${index === 0 ? "lg:col-span-2" : ""}`}><div className="relative overflow-hidden"><img src={item.image} alt="" className={`w-full object-cover transition duration-700 group-hover:scale-105 ${index === 0 ? "aspect-[1.75/1]" : "aspect-[1.15/1]"}`} /></div><div className="p-6 sm:p-7"><div className="flex gap-3 text-[10px] font-bold tracking-[.13em] text-gold-500"><span>{item.date}</span><span>·</span><span>{item.tag}</span></div><h2 className="display mt-4 max-w-xl text-3xl leading-tight text-garden-900">{item.title}</h2><button type="button" className="mt-6 text-xs font-bold tracking-wide text-garden-700">{c.common.read} →</button></div></article>)}</div></section>;
}
