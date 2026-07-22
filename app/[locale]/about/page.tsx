import type {Metadata} from "next";
import CleanHero from "@/components/clean-hero";
import {getCleanCopy} from "@/lib/clean-content";
import type {Locale} from "@/lib/i18n";
import {pageMetadata} from "@/lib/page-metadata";

export async function generateMetadata({params}:{params:Promise<{locale:Locale}>}):Promise<Metadata>{const{locale}=await params;const c=getCleanCopy(locale);return pageMetadata(locale,"/about",c.about.seo,c.about.hero.image)}
export default async function About({params}:{params:Promise<{locale:Locale}>}){const{locale}=await params;const c=getCleanCopy(locale);const x=c.about;return <>
  <CleanHero locale={locale} current={c.nav.about} hero={x.hero}/>
  <section className="section-pad"><div className="site-container grid gap-12 lg:grid-cols-[1.12fr_.88fr] lg:gap-20"><div><p className="display max-w-4xl text-3xl leading-[1.35] sm:text-4xl">{x.lead}</p><p className="body-copy mt-6 max-w-3xl">{x.noteText}</p></div><aside className="border-l-2 border-[#f4e714] pl-6"><p className="label">{x.networkTitle}</p><p className="mt-4 text-sm leading-7 text-[#5f626d]">{x.networkText}</p></aside></div></section>
  <section className="border-y bg-[#f7f7f2] section-pad"><div className="site-container grid gap-14 lg:grid-cols-2 lg:gap-20"><div><h2 className="display text-4xl sm:text-5xl">{x.serviceTitle}</h2><p className="body-copy mt-5 max-w-lg">{x.serviceText}</p><div className="mt-8 divide-y border-y">{x.services.map(item=><article key={item.title} className="py-4"><h3 className="font-semibold">{item.title}</h3><p className="mt-1 text-sm leading-6 text-[#6b6d77]">{item.text}</p></article>)}</div></div><div><h2 className="display text-4xl sm:text-5xl">{x.approachTitle}</h2><ol className="mt-8 divide-y border-y">{x.approach.map((item,index)=><li key={item} className="flex items-center gap-6 py-5"><span className="text-xs font-bold text-[#b8a900]">0{index+1}</span><span className="text-base font-medium">{item}</span></li>)}</ol></div></div></section>
</>}
