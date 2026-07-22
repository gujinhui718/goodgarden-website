import Link from "next/link";
import SocialLinks from "@/components/social-links";
import { BrandMark } from "@/components/site-header";
import { getCopy, type Locale } from "@/lib/i18n";
import { getCleanCopy } from "@/lib/clean-content";
import { siteConfig } from "@/lib/site";

export default function SiteFooter({locale}:{locale:Locale}){
  const c=getCleanCopy(locale); const legacy=getCopy(locale);
  const links=[[c.nav.about,"about"],[c.nav.products,"products"],[c.nav.supply,"supply-chain"],[c.nav.quality,"quality"],[c.nav.news,"news"],[c.nav.contact,"contact"]];
  const hasSocials=Object.values(siteConfig.socials).some(Boolean);
  return <footer className="border-t bg-[#f7f7f2]"><div className="site-container"><div className={`grid gap-12 py-14 ${hasSocials?"lg:grid-cols-[1.3fr_.7fr_1fr]":"lg:grid-cols-[1.45fr_.55fr]"}`}><div><Link href={`/${locale}`} className="inline-block"><BrandMark footer/></Link><h2 className="display mt-7 max-w-md text-3xl leading-tight">{c.footer.line}</h2><p className="mt-4 max-w-md text-sm leading-6 text-[#6b6d77]">{c.footer.note}</p></div><div><p className="label">{c.footer.explore}</p><div className="mt-5 grid gap-3 text-sm text-[#626470]">{links.map(([label,path])=><Link key={path} href={`/${locale}/${path}`} className="hover:text-[#2f3188]">{label}</Link>)}</div></div>{hasSocials&&<div><p className="label">GOOD GARDEN</p><div className="mt-5"><SocialLinks copy={legacy.social}/></div></div>}</div><div className="border-t py-6 text-xs text-[#8b8d94]">{c.footer.legal}</div></div></footer>;
}
