import type { Metadata } from "next";
import CleanCta from "@/components/clean-cta";
import CleanHero from "@/components/clean-hero";
import { getCleanCopy } from "@/lib/clean-content";
import type { Locale } from "@/lib/i18n";
import { pageMetadata } from "@/lib/page-metadata";

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }): Promise<Metadata> {
  const { locale } = await params;
  const c = getCleanCopy(locale);
  return pageMetadata(locale, "/news", c.news.seo, c.news.hero.image);
}

export default async function News({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const c = getCleanCopy(locale);
  const x = c.news;

  return <>
    <CleanHero locale={locale} current={c.nav.news} hero={x.hero} />
    <section className="section-pad">
      <div className="site-container">
        <div className="divide-y border-y">
          {x.topics.map((item, index) => <article key={item.title} className="grid gap-7 py-9 lg:grid-cols-[.25fr_.75fr_1fr] lg:gap-12">
            <div className="flex items-start justify-between text-[11px] lg:block">
              <span className="font-bold uppercase tracking-[.12em] text-[#2f3188]">{item.category}</span>
              <span className="text-[#a0a1a7] lg:mt-4 lg:block">0{index + 1}</span>
            </div>
            <div><h2 className="text-2xl font-semibold leading-8">{item.title}</h2><p className="mt-4 text-sm leading-6 text-[#6b6d77]">{item.summary}</p></div>
            <ul className="divide-y border-y">
              {item.points.map((point) => <li key={point} className="py-3 text-sm text-[#555866]">{point}</li>)}
            </ul>
          </article>)}
        </div>
      </div>
    </section>
    <CleanCta locale={locale} title={x.ctaTitle} text={x.ctaText} />
  </>;
}
