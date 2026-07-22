import type { Metadata } from "next";
import CleanHero from "@/components/clean-hero";
import ContactForm from "@/components/contact-form";
import { getCleanCopy } from "@/lib/clean-content";
import { getCopy, type Locale } from "@/lib/i18n";
import { pageMetadata } from "@/lib/page-metadata";

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }): Promise<Metadata> {
  const { locale } = await params;
  const c = getCleanCopy(locale);
  return pageMetadata(locale, "/contact", c.contact.seo, c.contact.hero.image);
}

export default async function Contact({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const c = getCleanCopy(locale);
  const legacy = getCopy(locale);
  const x = c.contact;

  return <>
    <CleanHero locale={locale} current={c.nav.contact} hero={x.hero} />
    <section className="section-pad">
      <div className="site-container grid gap-14 lg:grid-cols-[.72fr_1.28fr] lg:gap-20">
        <aside>
          <p className="label">{x.peopleTitle}</p>
          <div className="mt-6 divide-y border-y">
            {legacy.contact.people.map((person) => <div key={person.email} className="py-6">
              <h2 className="text-lg font-semibold">{person.name}</h2>
              <a href={`tel:${person.phone.replace(/\s/g, "")}`} className="mt-4 block text-sm text-[#6b6d77]">{person.phone}</a>
              <a href={`mailto:${person.email}`} className="mt-1 block break-all text-sm text-[#6b6d77]">{person.email}</a>
            </div>)}
          </div>

          <p className="label mt-10">{x.officeTitle}</p>
          <p className="mt-3 text-sm leading-6 text-[#6b6d77]">{legacy.contact.office}</p>

          <p className="label mt-10">{x.checklistTitle}</p>
          <ul className="mt-4 divide-y border-y">
            {x.checklist.map((item) => <li key={item} className="py-3 text-sm text-[#555866]">{item}</li>)}
          </ul>
        </aside>

        <div className="rounded-[20px] border bg-[#f7f7f2] p-5 sm:p-10">
          <h2 className="display mb-8 text-3xl sm:text-4xl">{x.formTitle}</h2>
          <ContactForm copy={x.form} />
        </div>
      </div>
    </section>
  </>;
}
