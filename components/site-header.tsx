"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { getCopy, localeLabels, locales, type Locale } from "@/lib/i18n";

export function BrandMark({ footer = false }: { footer?: boolean }) {
  return (
    <span className={`block ${footer ? "w-[220px]" : "w-[158px] sm:w-[176px]"}`}>
      <img
        src="/assets/brand/good-garden-lockup.png"
        alt="GOOD GARDEN"
        className="h-auto w-full object-contain"
      />
    </span>
  );
}

export default function SiteHeader({ locale }: { locale: Locale }) {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const c = getCopy(locale);
  const nav = [
    ["brand", "#brand-story"],
    ["banana", "#banana"],
    ["origins", "#origins"],
    ["presence", "#presence"],
  ] as const;
  const localePath = (nextLocale: Locale) =>
    `/${nextLocale}${pathname.replace(/^\/(en|zh|ru)/, "")}`;

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[#25337f]/10 bg-white/90 backdrop-blur-2xl">
      <div className="mx-auto flex h-[82px] max-w-[1480px] items-center justify-between px-5 sm:px-8 lg:px-12">
        <Link href={`/${locale}`} aria-label="GOOD GARDEN home" onClick={() => setMenuOpen(false)}>
          <BrandMark />
        </Link>

        <nav className="hidden items-center gap-7 xl:flex" aria-label="Main navigation">
          {nav.map(([key, anchor]) => (
            <Link key={key} href={`/${locale}${anchor}`} className="nav-link text-[#25337f]/[0.72]">
              {c.nav[key]}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <div className="flex rounded-full border border-[#25337f]/10 bg-[#f7f8f4] p-1 text-[10px] font-bold tracking-wider">
            {locales.map((item) => (
              <Link
                key={item}
                href={localePath(item)}
                className={`rounded-full px-2.5 py-1.5 transition ${
                  item === locale ? "bg-[#2f3188] text-white" : "text-[#25337f]/[0.55] hover:text-[#2f3188]"
                }`}
              >
                {localeLabels[item]}
              </Link>
            ))}
          </div>
          <Link href={`/${locale}#contact`} className="button button-small">
            {c.nav.contact}
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="grid h-11 w-11 place-items-center rounded-full border border-[#25337f]/[0.12] text-[#2f3188] lg:hidden"
          aria-expanded={menuOpen}
          aria-label="Toggle menu"
        >
          <span className="space-y-1.5">
            <span className="block h-px w-4 bg-current" />
            <span className="block h-px w-4 bg-current" />
          </span>
        </button>
      </div>

      {menuOpen && (
        <div className="border-t border-[#25337f]/10 bg-white px-5 py-5 shadow-soft lg:hidden">
          <nav className="mx-auto grid max-w-[1480px] gap-1" aria-label="Mobile navigation">
            {nav.map(([key, anchor]) => (
              <Link
                key={key}
                href={`/${locale}${anchor}`}
                onClick={() => setMenuOpen(false)}
                className="rounded-xl px-3 py-3 text-lg font-medium text-[#18214f] hover:bg-[#f7f8f4]"
              >
                {c.nav[key]}
              </Link>
            ))}
            <Link
              href={`/${locale}#contact`}
              onClick={() => setMenuOpen(false)}
              className="rounded-xl px-3 py-3 text-lg font-medium text-[#18214f] hover:bg-[#f7f8f4]"
            >
              {c.nav.contact}
            </Link>
            <div className="mt-3 flex gap-2">
              {locales.map((item) => (
                <Link
                  key={item}
                  href={localePath(item)}
                  onClick={() => setMenuOpen(false)}
                  className={`rounded-full px-3 py-1.5 text-xs font-bold ${
                    item === locale ? "bg-[#2f3188] text-white" : "bg-[#f4f5ef] text-[#2f3188]"
                  }`}
                >
                  {localeLabels[item]}
                </Link>
              ))}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
