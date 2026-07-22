import Image from "next/image";
import Link from "next/link";
import type { Locale } from "@/lib/i18n";
import { getCleanCopy } from "@/lib/clean-content";

type Hero={eyebrow:string;title:string;intro:string;image:string;alt:string;fit?:"cover"|"contain"};
export default function CleanHero({locale,current,hero}:{locale:Locale;current:string;hero:Hero}){
  const c=getCleanCopy(locale);
  return <section className="bg-[#f7f7f2]"><div className="site-container grid gap-10 py-10 lg:grid-cols-[.86fr_1.14fr] lg:items-center lg:py-16"><div className="py-5"><div className="text-[11px] text-[#8a8c94]"><Link href={`/${locale}`}>{c.common.home}</Link><span className="mx-2">/</span><span>{current}</span></div><p className="label mt-20 lg:mt-24">{hero.eyebrow}</p><h1 className="display mt-5 max-w-[650px] whitespace-pre-line text-[clamp(2.9rem,5vw,4.7rem)] leading-[1.02]">{hero.title}</h1><p className="body-copy mt-6 max-w-xl text-[1.05rem]">{hero.intro}</p></div><div className="relative min-h-[420px] overflow-hidden rounded-[24px] bg-white sm:min-h-[520px]"><Image src={hero.image} alt={hero.alt} fill priority sizes="(max-width:1024px) 100vw, 56vw" className={hero.fit==="contain"?"object-contain p-4 sm:p-8":"object-cover"}/></div></div></section>;
}
