"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { localeLabels, locales, type Locale } from "@/lib/i18n";
import { getCleanCopy } from "@/lib/clean-content";

export function BrandMark({ footer = false }: { footer?: boolean }) {
  return <span className={`block ${footer ? "w-[170px]" : "w-[142px] sm:w-[156px]"}`}><img src="/assets/brand/good-garden-lockup.png" alt="GOOD GARDEN" className="h-auto w-full object-contain" /></span>;
}
export default function SiteHeader({ locale }: { locale: Locale }) {
  const pathname = usePathname(); const [open,setOpen]=useState(false); const c=getCleanCopy(locale);
  const nav = [["about","about"],["products","products"],["supply","supply-chain"],["quality","quality"]] as const;
  const localePath=(next:Locale)=>`/${next}${pathname.replace(/^\/(en|zh|ru)/,"")}`;
  return <header className="fixed inset-x-0 top-0 z-50 border-b bg-white/95 backdrop-blur-xl">
    <div className="site-container flex h-[76px] items-center justify-between">
      <Link href={`/${locale}`} aria-label="GOOD GARDEN home" onClick={()=>setOpen(false)}><BrandMark/></Link>
      <nav className="hidden items-center gap-7 lg:flex" aria-label="Main navigation">{nav.map(([key,path])=>{const href=`/${locale}/${path}`;return <Link key={key} href={href} className={`nav-link ${pathname===href?"nav-active":""}`}>{c.nav[key]}</Link>})}</nav>
      <div className="hidden items-center gap-4 md:flex"><div className="flex items-center gap-2 text-[10px] font-bold">{locales.map(item=><Link key={item} href={localePath(item)} className={`rounded-full px-2.5 py-2 ${item===locale?"bg-[#f0f0eb] text-[#2f3188]":"text-[#858793]"}`}>{localeLabels[item]}</Link>)}</div><Link href={`/${locale}/contact`} className="button !min-h-[40px] !px-4">{c.nav.contact}</Link></div>
      <button type="button" onClick={()=>setOpen(!open)} className="grid h-10 w-10 place-items-center rounded-full border text-[#2f3188] md:hidden" aria-label="Toggle menu" aria-expanded={open}><span className="space-y-1.5"><span className="block h-px w-4 bg-current"/><span className="block h-px w-4 bg-current"/></span></button>
    </div>
    {open&&<div className="border-t bg-white md:hidden"><nav className="site-container grid gap-1 py-5" aria-label="Mobile navigation">{nav.map(([key,path])=><Link key={key} href={`/${locale}/${path}`} onClick={()=>setOpen(false)} className="border-b py-3.5 text-base font-medium">{c.nav[key]}</Link>)}<Link href={`/${locale}/contact`} onClick={()=>setOpen(false)} className="border-b py-3.5 text-base font-medium">{c.nav.contact}</Link><div className="mt-4 flex gap-2">{locales.map(item=><Link key={item} href={localePath(item)} onClick={()=>setOpen(false)} className={`rounded-full px-3 py-2 text-xs font-bold ${item===locale?"bg-[#2f3188] text-white":"bg-[#f3f3ef] text-[#60626d]"}`}>{localeLabels[item]}</Link>)}</div></nav></div>}
  </header>;
}
