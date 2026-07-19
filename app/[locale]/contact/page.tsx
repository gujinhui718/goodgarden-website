import type { Metadata } from "next";
import ContactForm from "@/components/contact-form";
import SectionHeading from "@/components/section-heading";
import { getCopy, isLocale, type Locale } from "@/lib/i18n";
import { absoluteUrl, siteConfig } from "@/lib/site";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale: requestedLocale } = await params;
  const locale = isLocale(requestedLocale) ? requestedLocale : "en";
  const c = getCopy(locale);
  return { title: c.nav.contact, description: c.contact.intro, alternates: { canonical: absoluteUrl(`/${locale}/contact`) } };
}

export default async function ContactPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: requestedLocale } = await params;
  const locale = requestedLocale as Locale;
  const c = getCopy(locale);
  return <section className="mx-auto max-w-[1440px] px-5 pb-20 pt-20 sm:px-8 sm:pb-28 sm:pt-28 lg:px-12"><div className="grid gap-14 lg:grid-cols-[.82fr_1.18fr] lg:gap-20"><div><SectionHeading eyebrow={c.contact.eyebrow} title={c.contact.title} intro={c.contact.intro} /><div className="mt-12 border-t border-garden-900/15 pt-7"><p className="eyebrow text-gold-500">{c.contact.locations}</p><h2 className="mt-4 text-xl font-medium text-garden-900">{c.contact.office}</h2><p className="mt-2 max-w-xs text-sm leading-6 text-garden-900/60">{c.contact.address}</p><a href={`mailto:${siteConfig.email}`} className="mt-5 inline-block text-sm font-medium text-garden-700 underline decoration-gold-400 underline-offset-4">{siteConfig.email}</a><p className="mt-2 text-sm text-garden-900/60">{siteConfig.phone}</p></div></div><div><h2 className="display mb-6 text-3xl text-garden-900">{c.contact.formTitle}</h2><ContactForm copy={c.contact} /></div></div></section>;
}
