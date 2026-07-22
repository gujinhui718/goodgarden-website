import Link from "next/link";
import type { Locale } from "@/lib/i18n";
import { getCleanCopy } from "@/lib/clean-content";
export default function CleanCta({locale,title,text}:{locale:Locale;title:string;text:string}){const c=getCleanCopy(locale);return <section className="bg-[#f4e714]"><div className="site-container flex flex-col gap-8 py-14 lg:flex-row lg:items-center lg:justify-between"><div><h2 className="display max-w-3xl text-3xl leading-tight sm:text-4xl">{title}</h2><p className="mt-3 max-w-2xl text-sm leading-6 text-[#4e5060]">{text}</p></div><Link href={`/${locale}/contact`} className="button shrink-0">{c.common.contact}<span className="ml-2">↗</span></Link></div></section>}

