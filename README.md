# Fernando OMG Services — website

Trilingual static website for Fernando OMG Services (French primary, English and Latin American Spanish complete), built with **Astro 7 + TypeScript**. It is a plain multi-page site with small scripts for the service finder, menus, the language switch and the WhatsApp inquiry flow. There is no backend, database, account system or analytics. The only cookie is `nf_lang`, a technical language preference set when a visitor picks a language.

> Status: **live and indexable** at https://fosinternational.com since 27 Oct 2026 (www redirects to it). Builds without `INDEXING=true` (local, previews) stay `noindex`.

Designed and built by [Adsvio Agency](https://adsvioagency.com) for Fernando OMG Services. The site content, brand assets and client photographs belong to Fernando OMG Services; the source code in this repository is delivered to the owner for their own use and maintenance.

## Quick start

Requires Node 22.22+ (developed on Node 24).

```bash
npm install
npm run dev        # http://localhost:4321  (root redirects to /fr/)
npm run build      # static site in dist/
npm run preview    # serve dist/ locally
```

Checks:

```bash
npm test                         # unit tests: WhatsApp message builder + validation
npm run build && node tests/audit-build.mjs   # static audit of dist/ (links, hreflang, schema, forbidden content, leaked files)
node tests/e2e.mjs http://localhost:4321      # browser interaction checks (needs a running dev/preview server and local Chrome or Edge)
npx astro check                  # type check
```

`tests/e2e.mjs` and `scripts/screenshots.mjs` use `playwright-core` with the Chrome/Edge already installed on the machine. They do not download a browser. The e2e checks **block every request to wa.me / WhatsApp**, so testing never contacts the business.

On Git Bash for Windows, prefix commands that pass `/fr/`-style paths with `MSYS_NO_PATHCONV=1`.

## Configuration and launch switch

| Variable | Purpose |
|---|---|
| `SITE_URL` | Canonical production origin, e.g. `https://your-final-domain` (no trailing slash). Used for canonicals, hreflang, Open Graph, JSON-LD and the sitemap. |
| `INDEXING` | Set to `true` **only** for the approved public launch build. |

- Draft (default): pages get `<meta name="robots" content="noindex, nofollow">` and `robots.txt` is `Disallow: /`. Canonicals use `SITE_URL` if set, otherwise `http://localhost:4321`.
- Launch: `INDEXING=true SITE_URL=https://… npm run build`. The build **fails** if `SITE_URL` is missing. Pages become indexable, `robots.txt` lists the sitemap, and items with `permission: 'pending'` (testimonials, client photos, client-story videos) are **automatically left out** until they are marked `approved`.

See `.env.example`.

## Deployment (current)

Netlify project `fernando-omg-services` (team "Adsvio Agency") serves **https://fosinternational.com**. `netlify.toml` builds production with Node 24, `SITE_URL=https://fosinternational.com` and `INDEXING=true`; deploy previews and branch deploys get `INDEXING=false`.

Two ways to publish a change:

- **Continuous deployment (recommended).** Connect this repository to the Netlify project (Netlify → the project → Project configuration → Build & deploy → Link repository). Every push to `main` then builds and goes live, and pull requests get their own `noindex` preview.
- **Manual upload.** From this folder, deploy with the Netlify CLI (`netlify deploy --build --prod`). Netlify runs the build itself, so `netlify.toml` still supplies `SITE_URL` and `INDEXING`.

**Search Console.** `https://fosinternational.com/sitemap-index.xml` is submitted and was read successfully on 29 Oct 2026 (96 pages discovered). Indexing of a new domain is gradual; request indexing for key pages from the URL inspection tool.

**Approvals.** All testimonials, photos and client stories are approved (27 Oct 2026). New items added as `permission: 'pending'` stay off the public site until switched to `'approved'`.

## Moving to another host

The output in `dist/` is static and works on any static host (Netlify, Cloudflare Pages, Vercel, GitHub Pages, a VPS).

1. Choose the final domain and an owner-controlled hosting account.
2. Set the build command `npm run build`, the output directory `dist`, and the environment `SITE_URL=<domain>` and `INDEXING=true` (production only; keep previews without `INDEXING`).
3. Keep the root redirect: `public/_redirects` sends `/` to `/es/`, `/en/` or `/fr/` (302) from the browser's Accept-Language header, and Netlify lets the `nf_lang` cookie from the language switch override it. On other hosts `dist/index.html` makes the same choice in the browser. Only the root is redirected: every other URL always shows the language in its path, and visitors are only *offered* their browser language on other pages (a dismissible bar).
4. Keep trailing slashes (`/fr/contact/`), which is the site's canonical form.
5. After launch, submit `sitemap-index.xml` in Google Search Console (owner account).
6. Update `docs/PENDING-CONFIRMATIONS.md` items (hosting provider for the legal page, approvals) before going live.

## Where to edit content

| What | File |
|---|---|
| Phone, WhatsApp, email, address, landmark, hours, social links | `src/config/business.ts` (single source of truth) |
| Interface text, navigation, form labels, About copy, notices | `src/i18n/ui.ts` |
| URLs / localized slugs / page IDs | `src/i18n/routes.ts` (slugs for services and guides live in their content entries) |
| Services (17 pages) | `src/content/services/us.ts`, `documents.ts`, `dominican.ts`, `travel.ts` (FR + EN); Spanish in `src/content/es/services.ts` |
| Resource guides (7) | `src/content/resources.ts` (FR + EN); Spanish in `src/content/es/resources.ts` |
| Destination flags | `src/assets/flags/*.png`, made by `node scripts/prepare-flags.mjs` from `scripts/flags/*.svg` (flag-icons, MIT) |
| Official source links | `src/content/sources.ts` (+ `docs/SOURCE-LOG.md`) |
| Testimonials, client photos, curated videos | `src/content/social-proof.ts` |
| Privacy and legal pages | `src/views/LegalPage.astro` |
| Design tokens | `src/styles/global.css` (`:root`) |

**Add a service:** add an entry to the right services file (unique `id`, `fr` and `en` blocks, `sources`, real `reviewed` date) and its Spanish copy under the same `id` in `src/content/es/services.ts`. The build fails if the Spanish copy is missing. Pages, menus, the finder, the inquiry select, the sitemap and hreflang update automatically. Videos whose `relatedService` is the service appear on its page; `socialLink` adds a "follow" button (used for @foscolombia).

**Add a testimonial:** add an entry to `testimonials` with the faithful original, the translations, a truthful attribution and `permission: 'pending'`. Switch to `'approved'` once the person agrees. Never invent names, stars or outcomes.

**Add photos:** put originals outside the project, add a derivative job in `scripts/prepare-images.mjs` (crop/redact there), run `npm run images`, and record it in `docs/ASSET-MANIFEST.md`.

**Languages:** `langs` in `src/content/types.ts` lists them; `src/i18n/ui.ts` holds one dictionary per language (TypeScript requires the same keys in each); `src/i18n/routes.ts` holds the localized slugs. Spanish is written for Latin America (formal "usted", terms used in the Dominican Republic) and is a full version, not a machine translation. Every page sets `translate="no"` and `<meta name="google" content="notranslate">` so Chrome does not offer to machine-translate it. `tests/audit-build.mjs` flags interface text from one language appearing on another language's pages.

## Project structure

```
src/
  config/      business.ts (public facts) · env.ts (build flags, server-only)
  content/     services/, es/ (Spanish copy), resources.ts, social-proof.ts, team.ts, sources.ts, types.ts
  i18n/        ui.ts (copy) · routes.ts (page IDs ↔ localized paths)
  lib/         whatsapp.ts (message + validation, pure) · seo.ts (JSON-LD) · publish.ts (approval gate) · flags.ts
  scripts/     inquiry.ts (form behaviour)
  components/  Header (ticker), LangSwitch, WhatsAppFab, Globe, Flag, Footer, InquiryForm/Dialog, ServiceFinder, OfficeInfo, …
  views/       one file per page type
  pages/       [...path].astro (all localized pages), 404.astro, index.astro, robots.txt.ts
scripts/       prepare-images.mjs · prepare-flags.mjs · capture-video-covers.mjs · screenshots.mjs · slice.mjs
tests/         whatsapp.test.ts · e2e.mjs · audit-build.mjs
docs/          design system, SEO map, source log, asset manifest, pending list, validation results
```

The `docs/` folder and the original client files (one level up) are never copied into `dist/`. The original photographs, screenshots and brand files supplied by the client stay outside this repository; only the web derivatives in `src/assets/` and `public/` are versioned (see `docs/ASSET-MANIFEST.md`).

Review screenshots are not committed either — regenerate them at any time against a running preview with `node scripts/screenshots.mjs http://localhost:4321 docs/screenshots`.
