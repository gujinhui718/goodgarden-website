import type {Metadata} from "next";
import CleanHero from "@/components/clean-hero";
import {getCleanCopy} from "@/lib/clean-content";
import type {Locale} from "@/lib/i18n";
import {pageMetadata} from "@/lib/page-metadata";

export async function generateMetadata({params}:{params:Promise<{locale:Locale}>}):Promise<Metadata>{const{locale}=await params;const c=getCleanCopy(locale);return pageMetadata(locale,"/quality",c.quality.seo,c.quality.hero.image)}
export default async function Quality({params}:{params:Promise<{locale:Locale}>}){const{locale}=await params;const c=getCleanCopy(locale);const x=c.quality;return <>
  <CleanHero locale={locale} current={c.nav.quality} hero={x.hero}/>
  <section className="section-pad"><div className="site-container"><div className="grid gap-10 lg:grid-cols-[.72fr_1.28fr] lg:gap-20"><div><p className="display max-w-xl text-3xl leading-[1.35] sm:text-4xl">{x.lead}</p><p className="label mt-10">{x.deliverablesTitle}</p></div><div className="divide-y border-y">{x.steps.map((item,index)=>{const detail=x.deliverables[index];return <article key={item.number} className="grid gap-5 py-6 sm:grid-cols-[.72fr_1.28fr]"><div className="flex gap-5"><span className="text-xs font-bold text-[#b8a900]">{item.number}</span><div><h2 className="text-lg font-semibold">{item.title}</h2><p className="mt-2 text-sm leading-6 text-[#6b6d77]">{item.text}</p></div></div><div className="sm:border-l sm:pl-6"><h3 className="text-sm font-semibold">{detail.title}</h3><p className="mt-2 text-sm leading-6 text-[#6b6d77]">{detail.text}</p></div></article>})}</div></div><aside className="mt-12 rounded-[18px] border bg-[#fffef7] p-6 sm:p-8"><h2 className="text-lg font-semibold">{x.documentsTitle}</h2><p className="mt-3 max-w-4xl text-sm leading-7 text-[#6b6d77]">{x.documentsText}</p></aside></div></section>
</>}
