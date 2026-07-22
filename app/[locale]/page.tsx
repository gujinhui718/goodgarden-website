import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CleanCta from "@/components/clean-cta";
import StructuredData from "@/components/structured-data";
import { getCleanCopy } from "@/lib/clean-content";
import { isLocale, type Locale } from "@/lib/i18n";
import { pageMetadata } from "@/lib/page-metadata";
import { absoluteUrl, siteConfig } from "@/lib/site";

export async function generateMetadata({params}:{params:Promise<{locale:string}>}):Promise<Metadata>{const{locale:raw}=await params;const locale=isLocale(raw)?raw:"en";const c=getCleanCopy(locale);return pageMetadata(locale,"",c.home.seo,"/og.png")}

export default async function Home({params}:{params:Promise<{locale:Locale}>}){
  const{locale}=await params;const c=getCleanCopy(locale);const h=c.home;
  return <>
    <StructuredData data={{
      "@context": "https://schema.org",
      "@graph": [
        { "@type": "Organization", "@id": `${siteConfig.url}/#organization`, name: siteConfig.name, url: siteConfig.url, logo: absoluteUrl("/assets/brand/good-garden-lockup.png"), description: h.intro, areaServed: ["Kazakhstan", "Uzbekistan", "Kyrgyzstan", "Tajikistan", "Turkmenistan"] },
        { "@type": "WebSite", "@id": `${siteConfig.url}/#website`, name: siteConfig.name, url: siteConfig.url, publisher: { "@id": `${siteConfig.url}/#organization` }, inLanguage: locale === "zh" ? "zh-CN" : locale },
      ],
    }} />
    <section className="bg-[#fbfaf5]"><div className="site-container grid min-h-[660px] gap-8 py-10 lg:grid-cols-[.95fr_1.05fr] lg:items-center lg:py-16"><div className="relative z-10 py-8"><p className="label">{h.eyebrow}</p><h1 className={`display mt-6 max-w-[690px] whitespace-pre-line leading-[.98] ${locale === "zh" ? "text-[clamp(2.5rem,4.6vw,4rem)]" : "text-[clamp(3.15rem,5.2vw,4.8rem)]"}`}>{h.title}</h1><p className="body-copy mt-7 max-w-xl text-[1.08rem]">{h.intro}</p><div className="mt-9 flex flex-wrap gap-3"><Link href={`/${locale}/contact`} className="button">{c.common.contact}<span className="ml-2">↗</span></Link><Link href={`/${locale}/products`} className="button button-light">{c.common.product}</Link></div></div><div className="relative min-h-[430px] overflow-hidden rounded-[24px] bg-[#f7f1e3] sm:min-h-[560px]"><Image src="/assets/editorial/hero-bananas-v2.png" alt={h.productTitle} fill priority sizes="(max-width:1024px) 100vw, 54vw" className="object-cover"/></div></div></section>

    <section className="border-y"><div className="site-container grid divide-y md:grid-cols-3 md:divide-x md:divide-y-0">{h.advantages.map((item,index)=><div key={item.title} className="py-9 md:px-8 md:first:pl-0 md:last:pr-0"><span className="text-[11px] font-bold text-[#b8a900]">0{index+1}</span><h2 className="mt-5 text-lg font-semibold">{item.title}</h2><p className="mt-2 text-sm leading-6 text-[#6b6d77]">{item.text}</p></div>)}</div></section>

    <section className="section-pad"><div className="site-container grid gap-12 lg:grid-cols-[1.02fr_.98fr] lg:items-center lg:gap-20"><div className="relative min-h-[460px] overflow-hidden rounded-[24px] bg-[#f7f7f2]"><Image src="/assets/editorial/banana-quality-inspection-v1.png" alt={h.productTitle} fill sizes="(max-width:1024px) 100vw, 52vw" className="object-cover"/></div><div><p className="label">{h.productEyebrow}</p><h2 className="display mt-5 text-4xl leading-tight sm:text-5xl">{h.productTitle}</h2><p className="body-copy mt-5 max-w-xl">{h.productText}</p><div className="mt-7 flex flex-wrap gap-2">{c.products.formats.slice(0,2).map(item=><span key={item.title} className="rounded-full border bg-[#fffef7] px-4 py-2 text-xs font-semibold">{item.title}</span>)}</div><div className="mt-10 border-t pt-7"><p className="label">{h.originsEyebrow}</p><p className="mt-3 text-sm leading-6 text-[#6b6d77]">{h.originsText}</p><div className="mt-5 flex flex-wrap gap-x-4 gap-y-2">{h.regions.map(region=><span key={region} className="text-sm font-semibold">{region}</span>)}</div></div><div className="mt-8 flex flex-wrap gap-5"><Link href={`/${locale}/products`} className="inline-flex text-sm font-semibold text-[#2f3188]">{c.common.product}<span className="ml-2">↗</span></Link><Link href={`/${locale}/supply-chain`} className="inline-flex text-sm font-semibold text-[#2f3188]">{c.nav.supply}<span className="ml-2">↗</span></Link></div></div></div></section>

    <section className="border-y bg-[#f7f7f2] section-pad"><div className="site-container grid gap-12 lg:grid-cols-[1.12fr_.88fr] lg:items-center lg:gap-20"><div className="relative min-h-[420px] overflow-hidden rounded-[24px] sm:min-h-[540px]"><Image src="/assets/editorial/central-asia-market-v2.png" alt={h.marketTitle} fill sizes="(max-width:1024px) 100vw, 58vw" className="object-cover"/></div><div><p className="label">{h.marketEyebrow}</p><h2 className="display mt-5 text-4xl leading-tight sm:text-5xl">{h.marketTitle}</h2><p className="body-copy mt-5 max-w-xl">{h.marketText}</p><div className="mt-7 flex flex-wrap gap-2">{h.buyers.map(item=><span key={item.title} className="rounded-full border bg-white px-3.5 py-2 text-xs font-semibold">{item.title}</span>)}</div><Link href={`/${locale}/about`} className="mt-8 inline-flex text-sm font-semibold text-[#2f3188]">{c.common.learn}<span className="ml-2">↗</span></Link></div></div></section>
    <CleanCta locale={locale} title={h.ctaTitle} text={h.ctaText}/>
  </>;
}
