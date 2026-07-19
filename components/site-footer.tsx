import Link from "next/link";
import { BrandMark } from "@/components/site-header";
import { getCopy, type Locale } from "@/lib/i18n";

export default function SiteFooter({ locale }: { locale: Locale }) {
  const c = getCopy(locale);
  return (
    <footer className="bg-garden-900 text-white">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <div className="grid gap-12 py-16 md:grid-cols-[1.5fr_1fr_1fr] md:py-20">
          <div>
            <Link href={`/${locale}`}><BrandMark inverse /></Link>
            <p className="mt-6 max-w-xs text-lg leading-relaxed text-white/65">{c.footer.note}</p>
          </div>
          <div>
            <p className="footer-label">Explore</p>
            <div className="mt-5 grid gap-3 text-sm text-white/70">
              <Link href={`/${locale}/about`} className="footer-link">{c.nav.about}</Link>
              <Link href={`/${locale}/products`} className="footer-link">{c.nav.products}</Link>
              <Link href={`/${locale}/supply-chain`} className="footer-link">{c.nav.supply}</Link>
              <Link href={`/${locale}/quality`} className="footer-link">{c.nav.quality}</Link>
            </div>
          </div>
          <div>
            <p className="footer-label">Connect</p>
            <div className="mt-5 grid gap-3 text-sm text-white/70">
              <Link href={`/${locale}/news`} className="footer-link">{c.nav.news}</Link>
              <Link href={`/${locale}/contact`} className="footer-link">{c.nav.contact}</Link>
              <a href="mailto:hello@goodgardenfood.com" className="footer-link">hello@goodgardenfood.com</a>
              <a href="tel:+862168882026" className="footer-link">+86 21 6888 2026</a>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 border-t border-white/10 py-6 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>{c.footer.legal}</p>
          <div className="flex gap-5"><Link href="#" className="hover:text-white">{c.footer.privacy}</Link><Link href="#" className="hover:text-white">{c.footer.terms}</Link></div>
        </div>
      </div>
    </footer>
  );
}
