# GOOD GARDEN

Multilingual corporate website for GOOD GARDEN, an international premium banana brand. The site presents selected origins in Ecuador, the Philippines, Cambodia, Vietnam, Laos and Guangxi, China, together with the company’s current Central Asian market focus and future international expansion.

## Local development on Windows

PowerShell may block `npm.ps1`. Use the Windows command wrapper:

```powershell
cd "C:\Users\admin\Documents\网站建设"
npm.cmd install
npm.cmd run dev
```

Open the local URL shown by Next.js, normally `http://localhost:3000/en`. Chinese and Russian versions are available at `/zh` and `/ru`.

If the development cache reports a missing vendor chunk, stop the server with `Ctrl+C`, remove only the `.next` folder, then restart:

```powershell
Remove-Item -LiteralPath ".next" -Recurse -Force
npm.cmd run dev
```

## Environment variables

Copy `.env.example` to `.env.local` and update the values you need:

```env
NEXT_PUBLIC_SITE_URL=https://www.goodgardenfood.com
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

NEXT_PUBLIC_INSTAGRAM_URL=
NEXT_PUBLIC_FACEBOOK_URL=
NEXT_PUBLIC_WHATSAPP_URL=

RESEND_API_KEY=
CONTACT_TO_EMAIL=
```

When a social URL is blank, the website displays the channel as “Coming soon”.

## Content and brand assets

- All English, Chinese and Russian website copy is in `lib/i18n.ts`.
- The navigation logo is `public/assets/brand/good-garden-lockup.png`.
- The standalone brand mark is `public/assets/brand/good-garden-mark.png`.
- The geographic map uses local Natural Earth data through `world-atlas`; it does not require a map API key.

## Deployment

Import the GitHub repository into Vercel. Vercel detects Next.js automatically. Add the production environment variables in **Settings → Environment Variables**, deploy, then connect the purchased domain under **Settings → Domains**.
