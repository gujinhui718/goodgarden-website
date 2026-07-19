"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { getCopy, localeLabels, locales, type Locale } from "@/lib/i18n";

export function BrandMark({ compact = false, inverse = false }: { compact?: boolean; inverse?: boolean }) {
  return (
    <span className="inline-flex items-center gap-2.5" aria-label="GOOD GARDEN FOOD">
      <span className="relative grid h-9 w-9 place-items-center rounded-full border border-gold-400/80 bg-garden-700 text-gold-300">
        <svg viewBox="0 0 32 32" className="h-5 w-5 fill-current" aria-hidden="true">
          <path d="M17.3 5.2c-4.3 1.4-7.6 5.4-8.3 10.6 4.1-.1 7.6-1.7 9.8-4.8 1.3-1.8 1.8-3.8 1.9-5.8-1.2-.1-2.3-.1-3.4 0Zm-2.6 12.2C10.5 18.7 7 22.1 6 27c4.6.1 8-1.3 10.3-4.4 1.4-1.8 2.1-4 2.3-6.5-1.4.1-2.7.5-3.9 1.3Zm5.5-3.9c-.1 4.1 1.1 7.7 4 10.3 1.2 1.1 2.5 1.9 4.1 2.3.5-4.3-.7-7.8-3.6-10.2-1.1-.9-2.6-1.7-4.5-2.4Z" />
        </svg>
      </span>
      {!compact && (
        <span className="leading-none">
          <span className={`block text-[10px] font-semibold tracking-[0.23em] ${inverse ? "text-white" : "text-garden-700"}`}>GOOD GARDEN</span>
          <span className={`mt-1 block text-[8px] font-medium tracking-[0.29em] ${inverse ? "text-gold-300" : "text-gold-500"}`}>FOOD</span>
        </span>
      )}
    </span>
  );
}

export default function SiteHeader({ locale }: { locale: Locale }) {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const c = getCopy(locale);
  const nav = [
    ["home", ""],
    ["about", "/about"],
    ["products", "/products"],
    ["supply", "/supply-chain"],
    ["quality", "/quality"],
    ["news", "/news"],
  ] as const;

  const localePath = (nextLocale: Locale) => {
    const parts = pathname.split("/");
    parts[1] = nextLocale;
    return parts.join("/") || `/${nextLocale}`;
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-garden-900/5 bg-cream/90 backdrop-blur-xl">
      <div className="mx-auto flex h-[74px] max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:px-12">
        <Link href={`/${locale}`} className="shrink-0" onClick={() => setMenuOpen(false)}>
          <BrandMark />
        </Link>

        <nav className="hidden items-center gap-6 xl:gap-8 lg:flex" aria-label="Main navigation">
          {nav.map(([key, path]) => {
            const href = `/${locale}${path}`;
            const active = path === "" ? pathname === `/${locale}` : pathname.startsWith(href);
            return (
              <Link key={key} href={href} className={`nav-link ${active ? "text-garden-700" : "text-garden-900/65"}`}>
                {c.nav[key]}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <div className="flex rounded-full border border-garden-900/10 bg-white p-1 text-[10px] font-bold tracking-wider">
            {locales.map((item) => (
              <Link key={item} href={localePath(item)} className={`rounded-full px-2.5 py-1.5 transition ${item === locale ? "bg-garden-700 text-white" : "text-garden-900/55 hover:text-garden-700"}`}>
                {localeLabels[item]}
              </Link>
            ))}
          </div>
          <Link href={`/${locale}/contact`} className="button button-small">{c.nav.contact}</Link>
        </div>

        <button type="button" onClick={() => setMenuOpen(!menuOpen)} className="grid h-10 w-10 place-items-center rounded-full border border-garden-900/10 text-garden-700 lg:hidden" aria-expanded={menuOpen} aria-label="Toggle menu">
          <span className="space-y-1.5"><span className="block h-px w-4 bg-current" /><span className="block h-px w-4 bg-current" /></span>
        </button>
      </div>

      {menuOpen && (
        <div className="border-t border-garden-900/5 bg-cream px-5 py-6 shadow-soft lg:hidden">
          <nav className="mx-auto grid max-w-[1440px] gap-1" aria-label="Mobile navigation">
            {nav.map(([key, path]) => (
              <Link key={key} href={`/${locale}${path}`} onClick={() => setMenuOpen(false)} className="rounded-xl px-3 py-3 text-lg font-medium text-garden-800 hover:bg-garden-50">
                {c.nav[key]}
              </Link>
            ))}
            <Link href={`/${locale}/contact`} onClick={() => setMenuOpen(false)} className="mt-2 rounded-xl bg-garden-700 px-3 py-3 text-lg font-medium text-white">
              {c.nav.contact}
            </Link>
            <div className="mt-4 flex gap-2">
              {locales.map((item) => <Link key={item} href={localePath(item)} onClick={() => setMenuOpen(false)} className={`rounded-full px-3 py-1.5 text-xs font-bold ${item === locale ? "bg-gold-400 text-garden-900" : "bg-white text-garden-700"}`}>{localeLabels[item]}</Link>)}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
