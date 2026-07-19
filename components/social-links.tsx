import { siteConfig } from "@/lib/site";

type SocialCopy = {
  pending: string;
  instagram: string;
  facebook: string;
  whatsapp: string;
};

const channels = [
  { key: "instagram", Icon: InstagramIcon },
  { key: "facebook", Icon: FacebookIcon },
  { key: "whatsapp", Icon: WhatsAppIcon },
] as const;

export default function SocialLinks({ copy, compact = false }: { copy: SocialCopy; compact?: boolean }) {
  return (
    <div className={`grid gap-3 ${compact ? "sm:grid-cols-3" : ""}`}>
      {channels.map(({ key, Icon }) => {
        const label = copy[key];
        const url = siteConfig.socials[key];
        const className =
          "group flex items-center justify-between gap-4 rounded-2xl border border-current/[0.15] px-4 py-3.5 transition hover:-translate-y-0.5 hover:border-current/30";
        const content = (
          <>
            <span className="flex items-center gap-3">
              <Icon />
              <span className="text-sm font-semibold">{label}</span>
            </span>
            <span className="text-[10px] font-bold uppercase tracking-[0.12em] opacity-45">
              {url ? "↗" : copy.pending}
            </span>
          </>
        );
        return url ? (
          <a key={key} href={url} target="_blank" rel="noreferrer" className={className} aria-label={label}>
            {content}
          </a>
        ) : (
          <span key={key} className={`${className} cursor-default opacity-75`} aria-disabled="true">
            {content}
          </span>
        );
      })}
    </div>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.7">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.7" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5" fill="currentColor">
      <path d="M13.7 21v-8h2.7l.4-3.1h-3.1V8c0-.9.3-1.5 1.6-1.5H17V3.7c-.8-.1-1.6-.2-2.4-.2-2.4 0-4.1 1.5-4.1 4.2v2.2H7.8V13h2.7v8h3.2Z" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.65">
      <path d="M20 11.6a8 8 0 0 1-11.8 7L4 20l1.4-4A8 8 0 1 1 20 11.6Z" />
      <path d="M9 8.1c.2-.4.4-.4.7-.4h.4c.2 0 .4.1.5.4l.8 1.8c.1.3.1.5-.1.7l-.6.7c-.2.2-.1.4 0 .6.6 1 1.5 1.8 2.6 2.3.3.1.5.1.7-.1l.8-1c.2-.2.4-.3.7-.2l1.8.8c.3.1.4.3.4.5 0 .4-.2 1.4-.8 1.9-.5.5-1.4.8-2.3.6-1.2-.2-3.1-.9-4.8-2.5-1.4-1.3-2.4-2.9-2.7-4-.3-.9.1-1.7.4-2.1Z" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
