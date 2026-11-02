# Validation results

## Round 3 — 21 October 2026 (Spanish version and new features)

| Check | Result |
|---|---|
| `npm run build` (draft) | ✅ 98 HTML files: 32 FR + 32 EN + 32 ES pages, root, trilingual 404 |
| `npx astro check` | ✅ 0 errors, 0 warnings |
| `npm test` | ✅ 10/10 (adds the Spanish WhatsApp message) |
| `tests/audit-build.mjs` | ✅ 96 pages: fr/en/es/x-default hreflang reciprocal, `notranslate` on every page, no interface text from another language on any page, plus all earlier checks |
| `tests/e2e.mjs` (local preview) | ✅ 31/31. New: three-language switch (desktop, mobile bar, mobile menu), Spanish `lang`/hreflang/title, Spanish WhatsApp message, floating WhatsApp button opens the form with the service preselected, Colombia page shows 3 TikTok videos + @foscolombia, hero lists 6 flagged destinations, headline in one colour, green/red marks on About, ticker pauses, Spanish browser on a French page is offered (not forced to) Spanish, root opens the browser language, no horizontal overflow at 390px on 11 pages incl. Spanish ones |
| Lighthouse 13.5 mobile (local) | Accessibility 100 and Best practices 100 on `/fr/`, `/es/`, `/es/servicios/visa-colombia/`; SEO 69 = only the intended noindex. Performance scores were depressed on this machine at the time (the **unchanged live round-2 site** scored 66 in the same session vs 97 on 18 Oct); the new build measured within noise of it (TBT 1.75 s vs 1.61 s). Re-measure on an idle machine or with PageSpeed Insights after launch. |
| Visual review | 360, 390 and 1440px: home hero (FR/ES), mobile menu, globe band, Colombia hero and videos, About do/don't. Fixed during review: WhatsApp button covering the hero on phones (now appears after the first screen), mobile-menu language buttons not filling the row, ticker space on 360px phones. |

Not verified: Netlify's `Language=` redirect is checked on the live site after deploy (see below), not locally.

## Round 1 — 18 October 2026

Environment: Windows 10, Node 24.18, Astro 7.4.0, local Chrome (headless) via playwright-core. Every result below comes from a run in this environment. Performance numbers are **lab** measurements on a local server, not real-user field data.

## Build and types

| Check | Result |
|---|---|
| `npx astro build` (draft) | ✅ 66 HTML files: 32 FR + 32 EN pages, root redirect, bilingual 404 |
| `npx astro check` | ✅ 0 errors, 0 warnings (1 hint: deprecated `execCommand`, kept intentionally as the copy fallback) |
| Client JavaScript shipped | ~17 KB total (finder, menus, inquiry flow, office status) |
| Launch build without `SITE_URL` | ✅ fails with a clear message |
| Launch build with a test origin | ✅ indexable, robots allows crawling + lists the sitemap, sitemap carries fr/en/x-default alternates, pending testimonials and photos excluded |

## Unit tests — `npm test` (8/8 pass)

French and English message formats; empty optional lines omitted; the URL targets exactly `wa.me/18493998859`; apostrophes, ampersands, guillemets, `#`, `+`, `/`, `<b>`, accents and line breaks round-trip through `encodeURIComponent`; single-line fields cannot inject lines; names with accents, hyphens, apostrophes and non-Latin scripts are accepted; sensible international phone formats are accepted and nonsense rejected; the "not sure" path requires a short description; unknown `?service=` values fail safely.

## Browser interaction checks — `tests/e2e.mjs` (17/17 pass on the production preview)

CTA opens the dialog with the service preselected and focus on the first field · empty submit shows a focused error summary with field links and `aria-invalid` · a valid submit shows the exact message and a correct encoded link · the interface never says "sent" or "confirmed" · copy gives feedback, and the clipboard matches the message · Escape closes, focus returns to the opener, data is kept · **no request to WhatsApp was made** (blocked at network level) · no inquiry data in storage or the URL · contact page `?service=<script>` → no selection, `?service=ca-study` → selected · "not sure" requires details · English site builds the English message · finder filters (17 → 7 for Canada → 1 for Canada + study), "not sure" panel, reset · generic CTAs on a service page preselect it · desktop services menu with Escape · language switch reaches the equivalent page · mobile menu panel visible (height checked), page behind `inert`, Escape closes · no horizontal overflow at 390px on six key pages.

One earlier run showed a single failure that did not reproduce in four later runs; the cause was not identified (likely timing).

## Static build audit — `tests/audit-build.mjs` (all pass, 64 pages)

`lang` matches the path; self-referencing canonical; fr/en/x-default hreflang present, self-consistent and **reciprocal**; exactly one H1; title and meta description present; JSON-LD parses, phone = +18493998859, no geo, no ratings/reviews; every internal link, `src` and `srcset` resolves; no obsolete locations (Kentucky/Bonao), historical Canada number, Zelle, unconfirmed 9–16 h messaging hours, `example.com`, 24/7 / "online now", success-rate claims or placeholder text; main phone and address present; no original or private files in `dist/`; draft build is noindex on all pages.

## Lighthouse 13.5 (mobile emulation, local preview)

| Page | Perf | A11y | Best practices | SEO | LCP | CLS | TBT |
|---|---|---|---|---|---|---|---|
| `/fr/` | 97 | 100 | 100 | 69* | 1.8 s | 0.002 | 170 ms |
| `/en/services/us-fiance-visa/` | 99 | 100 | 100 | 69* | 1.6 s | 0.006 | 50 ms |
| `/fr/contact/` | 99 | 100 | 100 | 69* | 1.5 s | 0.017 | 70 ms |

\* The only SEO failure is "page is blocked from indexing", which is the intended draft setting. A launch-mode build of `/fr/` scored **SEO 100**.

## Visual review

Full-page screenshots at 390px and 1440px were reviewed for: home (FR/EN), K-1 service page, a resource guide, About (EN), Testimonials, the services hub, contact, the form error state, the prepared message, and the open mobile menu. They are saved in `docs/screenshots/`. Fixes made during review: hero headline size, route visibility, finder reset visibility, 3-column priority grid, stories photo height, mobile CTA bar label wrapping, a mobile hero avatar, visa codes breaking at hyphens, French hour formatting, form border contrast (raised to 3.4:1), duplicate contact details, the mobile menu collapsing to zero height (caused by `backdrop-filter`), and generic CTAs not carrying the service.

## Not covered

- Real devices and real-user Core Web Vitals (lab only).
- Screen-reader testing with NVDA/VoiceOver (structure and ARIA verified in code and by Lighthouse; no manual SR session).
- 768px and 1024px were not captured as screenshots (the breakpoints were exercised in CSS and the browser pane).
- 200% text zoom was not tested manually.
- The actual WhatsApp app handoff on a phone. The link and message were verified; nothing was sent, by design.
- `travel.state.gov` and `do.usembassy.gov` content (blocked to automated access): recheck manually before launch.
