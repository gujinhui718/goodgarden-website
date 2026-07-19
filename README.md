# GOOD GARDEN FOOD

A bilingual, responsive corporate site for an international fresh-fruit supply chain. Built with Next.js App Router, React, TypeScript and Tailwind CSS.

## Run locally

```bash
npm install
copy .env.example .env.local
npm run dev
```

Open `http://localhost:3000`. `/` routes visitors to `/en`; English and Chinese are available at `/en` and `/zh` respectively.

## Deployment to Vercel

1. Push this folder to a Git repository and import it in Vercel.
2. Add the variables from `.env.example` in **Project Settings → Environment Variables**.
3. Set `NEXT_PUBLIC_SITE_URL` to the final domain and deploy. Vercel detects Next.js automatically.

The contact endpoint works as a validated success flow by default. Add `RESEND_API_KEY` and `CONTACT_TO_EMAIL` to have it email enquiries through Resend's API. Google Analytics is loaded only when `NEXT_PUBLIC_GA_ID` is set.

## Internationalization

Locales live in `lib/i18n.ts`; add Russian by inserting `ru` into `locales` and translating the copy object. The route and language switcher will then support `/ru` without changing the page structure.

## SEO

Every route emits page metadata, canonical URLs, Open Graph tags and alternates. `app/sitemap.ts` and `app/robots.ts` are generated automatically.
