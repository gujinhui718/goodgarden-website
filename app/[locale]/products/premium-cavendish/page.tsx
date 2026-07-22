import type { Metadata } from "next";
import CleanCta from "@/components/clean-cta";
import CleanHero from "@/components/clean-hero";
import { getCleanCopy } from "@/lib/clean-content";
import type { Locale } from "@/lib/i18n";
import { pageMetadata } from "@/lib/page-metadata";

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }): Promise<Metadata> {
  const { locale } = await params;
  const c = getCleanCopy(locale);
  return pageMetadata(locale, "/products/premium-cavendish", c.detail.seo, c.detail.hero.image);
}

export default async function Detail({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const c = getCleanCopy(locale);
  const x = c.detail;

  return <>
    <CleanHero locale={locale} current={x.hero.eyebrow} hero={x.hero} />

    <section className="section-pad">
      <div className="site-container grid gap-12 lg:grid-cols-[.72fr_1.28fr] lg:gap-20">
        <div>
          <h2 className="display text-4xl sm:text-5xl">{x.referenceTitle}</h2>
          <p className="body-copy mt-5 max-w-lg">{x.overview}</p>
        </div>
        <dl className="grid gap-px overflow-hidden rounded-[18px] border bg-[#e6e6df] sm:grid-cols-2">
          {x.reference.map((item) => <div key={item.label} className="bg-white p-6">
            <dt className="label">{item.label}</dt>
            <dd className="mt-3 text-sm font-semibold leading-6">{item.value}</dd>
          </div>)}
        </dl>
      </div>
    </section>

    <section className="border-y bg-[#f7f7f2] section-pad">
      <div className="site-container grid gap-12 lg:grid-cols-[.72fr_1.28fr] lg:gap-20">
        <h2 className="display text-4xl sm:text-5xl">{x.specsTitle}</h2>
        <ol className="grid gap-px overflow-hidden rounded-[18px] border bg-[#e6e6df] sm:grid-cols-2">
          {x.specs.map((item, index) => <li key={item} className="flex items-center gap-4 bg-white p-5">
            <span className="text-xs font-bold text-[#b8a900]">0{index + 1}</span>
            <span className="text-sm font-medium">{item}</span>
          </li>)}
        </ol>
      </div>
    </section>

    <section className="section-pad">
      <div className="site-container grid gap-px overflow-hidden rounded-[20px] border bg-[#e6e6df] lg:grid-cols-2">
        <article className="bg-white p-7 sm:p-10">
          <h2 className="display text-3xl sm:text-4xl">{x.ripeningTitle}</h2>
          <p className="body-copy mt-5">{x.ripeningText}</p>
        </article>
        <article className="bg-[#fffef7] p-7 sm:p-10">
          <h2 className="display text-3xl sm:text-4xl">{x.noticeTitle}</h2>
          <p className="body-copy mt-5">{x.noticeText}</p>
        </article>
      </div>
    </section>

    <CleanCta locale={locale} title={x.ctaTitle} text={x.ctaText} />
  </>;
}
