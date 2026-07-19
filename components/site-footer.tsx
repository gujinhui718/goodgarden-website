import Link from "next/link";
import SocialLinks from "@/components/social-links";
import { BrandMark } from "@/components/site-header";
import { getCopy, type Locale } from "@/lib/i18n";

export default function SiteFooter({ locale }: { locale: Locale }) {
  const c = getCopy(locale);
  const links = [
    [c.nav.brand, "#brand-story"],
    [c.nav.banana, "#banana"],
    [c.nav.origins, "#origins"],
    [c.nav.presence, "#presence"],
    [c.nav.contact, "#contact"],
  ] as const;

  return (
    <footer className="bg-[#10194b] text-white">
      <div className="mx-auto max-w-[1480px] px-5 sm:px-8 lg:px-12">
        <div className="grid gap-12 py-16 lg:grid-cols-[1.1fr_.65fr_1.15fr] lg:gap-16">
          <div>
            <Link href={`/${locale}`} className="inline-block rounded-2xl bg-white px-4 py-3">
              <BrandMark footer />
            </Link>
            <p className="mt-6 max-w-sm text-base leading-7 text-white/[0.62]">{c.footer.note}</p>
          </div>

          <div>
            <p className="footer-label">{c.footer.explore}</p>
            <div className="mt-5 grid gap-3 text-sm text-white/70">
              {links.map(([label, anchor]) => (
                <Link key={anchor} href={`/${locale}${anchor}`} className="footer-link">
                  {label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="footer-label">{c.social.title}</p>
            <div className="mt-5 text-white">
              <SocialLinks copy={c.social} />
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 py-6 text-xs text-white/[0.42]">{c.footer.legal}</div>
      </div>
    </footer>
  );
}
