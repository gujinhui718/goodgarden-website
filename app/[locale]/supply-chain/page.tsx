import type {Metadata} from "next";
import Image from "next/image";
import CleanHero from "@/components/clean-hero";
import GlobalPresenceMap from "@/components/global-presence-map";
import {getCleanCopy} from "@/lib/clean-content";
import {getCopy,type Locale} from "@/lib/i18n";
import {pageMetadata} from "@/lib/page-metadata";

export async function generateMetadata({params}:{params:Promise<{locale:Locale}>}):Promise<Metadata>{const{locale}=await params;const c=getCleanCopy(locale);return pageMetadata(locale,"/supply-chain",c.supply.seo,c.supply.hero.image)}
export default async function Supply({params}:{params:Promise<{locale:Locale}>}){const{locale}=await params;const c=getCleanCopy(locale);const legacy=getCopy(locale);const x=c.supply;return <>
  <CleanHero locale={locale} current={c.nav.supply} hero={x.hero}/>
  <section className="section-pad"><div className="site-container"><p className="display max-w-4xl text-3xl leading-[1.35] sm:text-4xl">{x.lead}</p><div className="mt-14 grid gap-7 md:grid-cols-2">{x.groups.map((item,index)=><article key={item.title} className="overflow-hidden rounded-[20px] border bg-white"><div className="relative aspect-[16/9] overflow-hidden bg-[#f7f7f2]"><Image src={item.image} alt={item.alt} fill sizes="(max-width:768px) 100vw, 50vw" className="object-cover"/></div><div className="p-7 sm:p-8"><div className="flex items-center justify-between"><span className="label">{item.region}</span><span className="text-xs text-[#9b9da5]">0{index+1}</span></div><h2 className="mt-8 text-2xl font-semibold">{item.title}</h2><p className="mt-3 text-sm leading-6 text-[#6b6d77]">{item.text}</p><ul className="mt-6 divide-y border-y">{item.details.map(detail=><li key={detail} className="py-3 text-sm text-[#555866]">{detail}</li>)}</ul></div></article>)}</div><p className="mt-6 max-w-4xl text-xs leading-6 text-[#8b8d94]">{x.visualNote}</p></div></section>
  <section className="border-y bg-[#f7f7f2] section-pad"><div className="site-container grid gap-12 lg:grid-cols-[.72fr_1.28fr] lg:gap-20"><div><h2 className="display text-4xl sm:text-5xl">{x.matchingTitle}</h2><p className="body-copy mt-5 max-w-lg">{x.matchingText}</p></div><ol className="grid gap-px overflow-hidden rounded-[18px] border bg-[#e6e6df] sm:grid-cols-2">{x.matchingItems.map((item,index)=><li key={item} className="flex items-center gap-4 bg-white p-5"><span className="text-xs font-bold text-[#b8a900]">0{index+1}</span><span className="text-sm font-medium">{item}</span></li>)}</ol></div></section>
  <section className="section-pad"><div className="site-container"><div className="grid gap-6 lg:grid-cols-2 lg:items-end"><h2 className="display text-4xl sm:text-5xl">{x.mapTitle}</h2><p className="body-copy max-w-xl">{x.mapText}</p></div><div className="mt-10"><GlobalPresenceMap copy={legacy.presence.map}/></div></div></section>
</>}
