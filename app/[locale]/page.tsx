import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ContactForm from "@/components/contact-form";
import GlobalPresenceMap from "@/components/global-presence-map";
import SectionHeading from "@/components/section-heading";
import SocialLinks from "@/components/social-links";
import { getCopy, isLocale, type Locale } from "@/lib/i18n";
import { absoluteUrl } from "@/lib/site";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale: requestedLocale } = await params;
  const locale = isLocale(requestedLocale) ? requestedLocale : "en";
  const c = getCopy(locale);
  return {
    title: { absolute: c.seo.title },
    description: c.seo.description,
    alternates: { canonical: absoluteUrl(`/${locale}`) },
    openGraph: {
      title: c.seo.title,
      description: c.seo.description,
      images: [{ url: "/assets/brand/good-garden-crate.jpeg", alt: "GOOD GARDEN premium bananas" }],
    },
  };
}

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: requestedLocale } = await params;
  const locale = requestedLocale as Locale;
  const c = getCopy(locale);

  return (
    <>
      <section className="relative overflow-hidden bg-[#f7f8f3]">
        <div className="mx-auto grid min-h-[calc(100vh-82px)] max-w-[1480px] gap-12 px-5 py-12 sm:px-8 sm:py-16 lg:grid-cols-[.88fr_1.12fr] lg:items-center lg:px-12 lg:py-20">
          <div className="relative z-10 max-w-2xl py-5 lg:py-12">
            <p className="eyebrow text-[#2f3188]">{c.hero.eyebrow}</p>
            <h1 className={`display mt-7 whitespace-pre-line text-[#141d50] ${locale === "zh" ? "text-[clamp(3.45rem,6vw,6.2rem)] leading-[0.96]" : "text-[clamp(3.8rem,7.2vw,7.5rem)] leading-[0.88]"}`}>
              {c.hero.title}
            </h1>
            <p className="mt-8 max-w-xl text-base leading-7 text-[#29303f]/[0.68] sm:text-xl sm:leading-8">
              {c.hero.intro}
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link href="#contact" className="button">
                {c.hero.primary} <span className="ml-3">↗</span>
              </Link>
              <Link href="#banana" className="button button-outline">
                {c.hero.secondary}
              </Link>
            </div>
            <div className="mt-12 flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.16em] text-[#2f3188]/[0.55]">
              <span className="h-2 w-2 rounded-full bg-[#f0df17]" />
              {c.hero.note}
            </div>
          </div>

          <div className="relative min-h-[540px] sm:min-h-[660px] lg:min-h-[720px]">
            <div className="absolute -right-28 -top-24 h-72 w-72 rounded-full bg-[#f2e31b] sm:h-96 sm:w-96" />
            <div className="absolute inset-0 overflow-hidden rounded-[2.25rem] bg-[#153c27] shadow-[0_32px_100px_rgba(22,42,27,.18)] sm:rounded-[3rem]">
              <Image
                src="/assets/origin/latin-america.png"
                alt={c.hero.imageAlt}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 58vw"
                className="object-cover object-[60%_center]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0c2d20]/[0.55] via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between rounded-2xl border border-white/25 bg-white/[0.88] px-4 py-3 backdrop-blur-xl sm:bottom-7 sm:left-7 sm:right-auto sm:min-w-[310px] sm:px-5">
                <img src="/assets/brand/good-garden-mark.png" alt="" className="h-12 w-16 object-contain" />
                <div className="ml-4 border-l border-[#2f3188]/[0.15] pl-4">
                  <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#2f3188]/[0.55]">GOOD GARDEN</p>
                  <p className="mt-1 text-sm font-semibold text-[#18214f]">Premium bananas</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="brand-story" className="scroll-mt-24 bg-white py-20 sm:py-28 lg:py-36">
        <div className="mx-auto grid max-w-[1480px] gap-14 px-5 sm:px-8 lg:grid-cols-[.95fr_1.05fr] lg:gap-24 lg:px-12">
          <div>
            <p className="eyebrow text-[#2f3188]">{c.manifesto.eyebrow}</p>
            <h2 className="display mt-6 max-w-2xl whitespace-pre-line text-5xl leading-[0.98] text-[#141d50] sm:text-6xl">
              {c.manifesto.title}
            </h2>
          </div>
          <div className="lg:pt-12">
            <p className="max-w-2xl text-xl leading-8 text-[#27302e]/[0.72] sm:text-2xl sm:leading-10">
              {c.manifesto.body}
            </p>
            <div className="mt-12 divide-y divide-[#2f3188]/[0.12] border-y border-[#2f3188]/[0.12]">
              {c.manifesto.points.map((point, index) => (
                <div key={point.title} className="grid gap-2 py-6 sm:grid-cols-[52px_180px_1fr] sm:items-start">
                  <span className="text-xs font-bold tracking-[0.12em] text-[#c19800]">0{index + 1}</span>
                  <h3 className="text-sm font-semibold text-[#18214f]">{point.title}</h3>
                  <p className="text-sm leading-6 text-[#27302e]/[0.58]">{point.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="banana" className="scroll-mt-24 bg-[#111a4c] py-20 text-white sm:py-28 lg:py-32">
        <div className="mx-auto grid max-w-[1480px] gap-12 px-5 sm:px-8 lg:grid-cols-[1.12fr_.88fr] lg:items-center lg:gap-20 lg:px-12">
          <div className="relative overflow-hidden rounded-[2.25rem] bg-[#f4e214] sm:rounded-[3rem]">
            <Image
              src="/assets/brand/good-garden-crate.jpeg"
              alt={c.product.imageAlt}
              width={4001}
              height={2250}
              sizes="(max-width: 1024px) 100vw, 55vw"
              className="aspect-[1.12/1] w-full object-cover"
            />
          </div>
          <div>
            <p className="eyebrow text-[#f4e214]">{c.product.eyebrow}</p>
            <h2 className="display mt-6 max-w-2xl whitespace-pre-line text-5xl leading-[0.98] sm:text-6xl">{c.product.title}</h2>
            <p className="mt-7 max-w-xl text-base leading-7 text-white/[0.64] sm:text-lg">{c.product.intro}</p>
            <div className="mt-10 border-y border-white/[0.14] py-7">
              <p className="text-2xl font-semibold">{c.product.name}</p>
              <p className="mt-3 max-w-xl text-sm leading-6 text-white/[0.58]">{c.product.description}</p>
            </div>
            <dl className="mt-7 grid gap-5 sm:grid-cols-3">
              {c.product.details.map((detail) => (
                <div key={detail.label}>
                  <dt className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#f4e214]/70">{detail.label}</dt>
                  <dd className="mt-2 text-sm leading-5 text-white/[0.82]">{detail.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
        <div className="mx-auto mt-16 max-w-[1480px] px-5 sm:px-8 lg:px-12">
          <div className="grid gap-4 border-t border-white/[0.14] pt-8 sm:grid-cols-[.8fr_1.2fr] sm:items-start">
            <h3 className="text-lg font-semibold text-[#f4e214]">{c.product.futureTitle}</h3>
            <p className="max-w-2xl text-sm leading-6 text-white/[0.55]">{c.product.futureText}</p>
          </div>
        </div>
      </section>

      <section id="origins" className="scroll-mt-24 bg-[#f7f8f3] py-20 sm:py-28 lg:py-36">
        <div className="mx-auto max-w-[1480px] px-5 sm:px-8 lg:px-12">
          <SectionHeading eyebrow={c.origins.eyebrow} title={c.origins.title} intro={c.origins.intro} />
          <div className="mt-16 grid gap-x-8 gap-y-16 lg:grid-cols-2 lg:gap-y-20">
            {c.origins.groups.map((group) => (
              <article key={group.title} className="group border-t border-[#24316e]/[0.14] pt-5">
                <div className="mb-5 flex items-center justify-between text-[10px] font-bold uppercase tracking-[0.15em] text-[#2f3188]/[0.55]">
                  <span>{group.kicker}</span>
                  <span>{group.number}</span>
                </div>
                <div className="relative aspect-[1.42/1] overflow-hidden rounded-[1.75rem] bg-[#dfe7db]">
                  <Image
                    src={group.image}
                    alt={group.imageAlt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover transition duration-700 group-hover:scale-[1.025]"
                  />
                </div>
                <div className="mt-7 grid gap-5 sm:grid-cols-[.72fr_1.28fr]">
                  <h3 className="display text-4xl leading-none text-[#141d50] sm:text-5xl">{group.title}</h3>
                  <div>
                    <p className="text-base leading-7 text-[#27302e]/[0.68]">{group.body}</p>
                    <div className="mt-6 space-y-4 border-t border-[#24316e]/[0.12] pt-5">
                      {group.countries.map((country) => (
                        <div key={country.name} className="grid gap-1 sm:grid-cols-[130px_1fr]">
                          <h4 className="text-xs font-bold text-[#2f3188]">{country.name}</h4>
                          <p className="text-xs leading-5 text-[#27302e]/[0.55]">{country.detail}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="presence" className="scroll-mt-24 bg-white py-20 sm:py-28 lg:py-36">
        <div className="mx-auto max-w-[1480px] px-5 sm:px-8 lg:px-12">
          <div className="grid gap-12 lg:grid-cols-[.92fr_1.08fr] lg:items-end">
            <SectionHeading eyebrow={c.presence.eyebrow} title={c.presence.title} intro={c.presence.intro} />
            <div className="border-l-2 border-[#f0df17] pl-6 lg:mb-1 lg:ml-auto lg:max-w-xl">
              <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#2f3188]">{c.presence.focusTitle}</p>
              <p className="mt-4 text-base leading-7 text-[#27302e]/[0.68]">{c.presence.focusText}</p>
              <p className="mt-4 text-sm leading-6 text-[#27302e]/[0.52]">{c.presence.expansion}</p>
            </div>
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-[1fr_240px] lg:items-stretch">
            <GlobalPresenceMap copy={c.presence.map} />
            <div className="flex flex-col justify-between rounded-[2rem] bg-[#f4e214] p-7 text-[#141d50]">
              <div>
                <p className="eyebrow">{c.presence.focusTitle}</p>
                <div className="mt-8 divide-y divide-[#141d50]/[0.14] border-y border-[#141d50]/[0.14]">
                  {c.presence.markets.map((market) => (
                    <p key={market} className="py-3.5 text-sm font-semibold">
                      {market}
                    </p>
                  ))}
                </div>
              </div>
              <img src="/assets/brand/good-garden-mark.png" alt="" className="mt-10 w-20 self-end opacity-90" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f4e214] py-20 sm:py-28 lg:py-32">
        <div className="mx-auto grid max-w-[1480px] gap-12 px-5 sm:px-8 lg:grid-cols-[1.08fr_.92fr] lg:items-center lg:gap-20 lg:px-12">
          <div className="relative overflow-hidden rounded-[2.25rem] bg-[#2f3188] sm:rounded-[3rem]">
            <Image
              src="/assets/brand/good-garden-packaging.jpeg"
              alt={c.standard.secondaryImageAlt}
              width={4001}
              height={2250}
              sizes="(max-width: 1024px) 100vw, 55vw"
              className="aspect-[1.08/1] w-full object-cover"
            />
          </div>
          <div className="text-[#141d50]">
            <p className="eyebrow text-[#2f3188]">{c.standard.eyebrow}</p>
            <h2 className="display mt-6 whitespace-pre-line text-5xl leading-[0.98] sm:text-6xl">{c.standard.title}</h2>
            <p className="mt-7 max-w-xl text-base leading-7 text-[#141d50]/[0.68] sm:text-lg">{c.standard.intro}</p>
            <div className="mt-10 divide-y divide-[#141d50]/[0.16] border-y border-[#141d50]/[0.16]">
              {c.standard.principles.map((principle) => (
                <div key={principle.number} className="grid gap-2 py-5 sm:grid-cols-[48px_180px_1fr]">
                  <span className="text-xs font-bold">{principle.number}</span>
                  <h3 className="text-sm font-semibold">{principle.title}</h3>
                  <p className="text-sm leading-6 text-[#141d50]/60">{principle.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="scroll-mt-24 bg-[#103426] py-20 text-white sm:py-28 lg:py-32">
        <div className="mx-auto max-w-[1480px] px-5 sm:px-8 lg:px-12">
          <div className="grid gap-12 border-b border-white/[0.12] pb-16 lg:grid-cols-[.9fr_1.1fr] lg:items-end">
            <div>
              <p className="eyebrow text-[#f4e214]">{c.social.eyebrow}</p>
              <h2 className="display mt-5 text-5xl leading-none sm:text-6xl">{c.social.title}</h2>
              <p className="mt-5 max-w-lg text-sm leading-6 text-white/[0.58]">{c.social.text}</p>
            </div>
            <SocialLinks copy={c.social} compact />
          </div>

          <div className="grid gap-14 pt-16 lg:grid-cols-[.82fr_1.18fr] lg:gap-20">
            <div>
              <SectionHeading eyebrow={c.contact.eyebrow} title={c.contact.title} intro={c.contact.intro} light />
              <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                {c.contact.people.map((person) => (
                  <div key={person.email} className="rounded-2xl border border-white/[0.12] p-5">
                    <p className="text-lg font-semibold">{person.name}</p>
                    <p className="mt-1 text-xs font-bold uppercase tracking-[0.12em] text-[#f4e214]">{person.role}</p>
                    <a href={`tel:${person.phone.replace(/\s/g, "")}`} className="mt-5 block text-sm text-white/[0.72] transition hover:text-white">
                      {person.phone}
                    </a>
                    <a href={`mailto:${person.email}`} className="mt-1 block break-all text-sm text-white/[0.72] transition hover:text-white">
                      {person.email}
                    </a>
                  </div>
                ))}
              </div>
              <p className="mt-6 max-w-lg text-sm leading-6 text-white/[0.48]">{c.contact.office}</p>
            </div>
            <div>
              <h2 className="mb-7 text-2xl font-semibold">{c.contact.formTitle}</h2>
              <ContactForm copy={c.contact} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
