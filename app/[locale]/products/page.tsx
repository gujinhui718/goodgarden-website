import type {Metadata} from "next";
import Image from "next/image";
import Link from "next/link";
import CleanCta from "@/components/clean-cta";
import CleanHero from "@/components/clean-hero";
import StructuredData from "@/components/structured-data";
import {getCleanCopy} from "@/lib/clean-content";
import type {Locale} from "@/lib/i18n";
import {pageMetadata} from "@/lib/page-metadata";
import {absoluteUrl} from "@/lib/site";

export async function generateMetadata({params}:{params:Promise<{locale:Locale}>}):Promise<Metadata>{const{locale}=await params;const c=getCleanCopy(locale);return pageMetadata(locale,"/products",c.products.seo,c.products.hero.image)}
export default async function Products({params}:{params:Promise<{locale:Locale}>}){const{locale}=await params;const c=getCleanCopy(locale);const x=c.products;return <>
  <StructuredData data={{"@context":"https://schema.org","@type":"Product",name:c.detail.hero.eyebrow,description:x.hero.intro,image:[absoluteUrl(x.hero.image),absoluteUrl("/assets/brand/good-garden-packaging.jpeg")],brand:{"@type":"Brand",name:"GOOD GARDEN"},category:"Fresh fruit / Cavendish bananas"}} />
  <CleanHero locale={locale} current={c.nav.products} hero={x.hero}/>
  <section className="section-pad"><div className="site-container"><div className="grid gap-12 lg:grid-cols-[1.02fr_.98fr] lg:items-center lg:gap-20"><div><p className="display max-w-3xl text-3xl leading-[1.35] sm:text-4xl">{x.lead}</p><div className="mt-10 grid gap-px overflow-hidden rounded-[18px] border bg-[#e6e6df] sm:grid-cols-2">{x.details.map(item=><div key={item.label} className="bg-white p-5"><p className="label">{item.label}</p><p className="mt-3 text-base font-semibold">{item.value}</p></div>)}</div></div><div className="overflow-hidden rounded-[24px] bg-[#f4e714]"><Image src="/assets/brand/good-garden-packaging.jpeg" alt={x.formatsTitle} width={4001} height={2250} className="aspect-[1.12/1] w-full object-cover"/></div></div><div className="mt-14 grid gap-px overflow-hidden rounded-[18px] border bg-[#e6e6df] md:grid-cols-3">{x.formats.map(item=><article key={item.title} className="bg-[#f7f7f2] p-6"><h2 className="font-semibold">{item.title}</h2><p className="mt-2 text-sm leading-6 text-[#6b6d77]">{item.text}</p></article>)}</div><div className="mt-7 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"><p className="max-w-4xl text-sm leading-7 text-[#6b6d77]">{x.availabilityNote}</p><Link href={`/${locale}/products/premium-cavendish`} className="shrink-0 text-sm font-semibold text-[#2f3188]">{c.common.product}<span className="ml-2">↗</span></Link></div></div></section>
  <section className="border-y bg-[#f7f7f2] section-pad"><div className="site-container grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:gap-20"><div><h2 className="display text-4xl sm:text-5xl">{x.quotationTitle}</h2><p className="body-copy mt-5 max-w-lg">{x.quotationText}</p></div><ol className="grid gap-px overflow-hidden rounded-[18px] border bg-[#e6e6df] sm:grid-cols-2">{x.quotationItems.map((item,index)=><li key={item} className="flex items-center gap-4 bg-white p-5"><span className="text-xs font-bold text-[#b8a900]">0{index+1}</span><span className="text-sm font-medium">{item}</span></li>)}</ol></div></section>
  <CleanCta locale={locale} title={x.ctaTitle} text={x.ctaText}/>
</>}
