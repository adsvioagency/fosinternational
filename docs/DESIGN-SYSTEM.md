# Design system reference

## Direction

The site should feel like an approachable, established consultant, not a law firm, government portal or airline. It uses real portraits, confident navy typography, generous white space and disciplined red accents.

**Signature element: the route.** A dotted red path, taken from the logo's airplane trail, appears in a few places:
- the homepage hero, rising toward Fernando's portrait and ending at a small plane;
- the connector between the three "Comment nous contacter" steps;
- the dashed line linking the numbered steps on each service page;
- a faint curve in inner-page headers and the closing call-to-action band.

It is static, or drawn once on load (disabled under reduced motion), and never implies a guaranteed journey. A second small detail: the headline periods are red ("Des démarches plus claires**.**").

Rejected defaults: cream-and-serif "premium" look (too law-firm), flag collages, passport stamps, statistics counters, certification badges, glass effects, autoplay carousels.

## Color tokens (`src/styles/global.css`)

| Token | Hex | Use |
|---|---|---|
| `--navy` | `#00295F` | Brand (sampled from logo): headings, nav, dark sections |
| `--navy-800` | `#0A3470` | Second hero line, hover borders |
| `--navy-950` | `#001A3D` | Utility bar, footer |
| `--red` | `#C11418` | Brand (sampled): primary CTA, accents, route |
| `--red-700` | `#9E1013` | CTA hover, red text links |
| `--white` | `#FFFFFF` | Main surface |
| `--warm` | `#F9F8F6` | Logo-matched quiet surface (hero, alt sections) |
| `--sky` | `#EEF4FA` | Process/steps backgrounds, icon tiles |
| `--ink` | `#172B42` | Body text |
| `--muted` | `#526174` | Supporting text |
| `--border` | `#DCE4ED` | Decorative dividers and card outlines |
| `--border-strong` | `#7A8CA2` | Form controls and chips (non-text boundary) |
| `--focus` | `#1B5FD6` | Focus ring (white on dark sections) |
| `--error` / `--error-bg` | `#B3261E` / `#FDF0EF` | Validation (always with text + icon) |
| `--success` | `#1D6B45` | Office-open dot, copy confirmation |
| `--whatsapp` | `#128C4A` | WhatsApp icon accent only, never a surface |

Measured contrast (WCAG): ink/white 14.4 · navy/white 14.2 · muted/white 6.3 · muted/warm 6.0 · muted/sky 5.7 · white/red 6.2 · white/red-700 8.3 · red-700/white 8.3 · focus/white 5.8 · error on error-bg 5.9 · footer text #C4D3E4 on navy-950 11.3 · #9FB3CB on navy-950 8.1 · form border 3.4 (≥3 for UI boundaries) · WhatsApp icon 4.3 (≥3 for graphics).

## Typography

- **Manrope Variable** (display): headings, buttons, labels. Weights 700–800, tight tracking (−0.02 to −0.03em).
- **Source Sans 3 Variable** (body/interface), 400/600, full French accent support.
- Both are self-hosted via Fontsource and split by unicode-range, so only Latin subsets download. No Google Fonts requests.
- Scale: body 17px (1.0625rem) / 1.6. h3 1.25rem. h2 `clamp(1.75rem → 2.5rem)`. h1 `clamp(2.25rem → 4rem)`; the homepage hero uses `clamp(2.35rem → 3.9rem)`.
- French typography: non-breaking spaces before `: ; ? !` and visa codes (K-1, I-129F, DS-160) are kept from breaking at the hyphen (`typo()` in `src/i18n/ui.ts`).

## Layout and shape

- Content max width 1240px. Gutter `clamp(16px, 4vw, 40px)`. Section padding `clamp(56px → 104px)`.
- Radius: 8 (small), 12 (cards), 20 (large media). The hero portrait has an asymmetric frame (28/28/28/120).
- Shadows: `--shadow-sm`, `--shadow` (cards on hover), `--shadow-lg` (portrait, dialog, mega menu).
- Section rhythm: white → warm → navy → sky alternate by purpose; no two adjacent sections share a treatment.

## Components

| Component | Notes |
|---|---|
| Header | Utility bar (hours, phone, language) + sticky main bar. Grouped **Services mega menu** (4 groups) on ≥1100px. Full-screen mobile menu below, with services in a `<details>` group; the page behind is `inert` while it is open. Without JS, the menu renders inline. |
| Mobile contact bar | <768px only: icon call button + "Demander une consultation". Body padding reserves its height so it never hides content. Not shown on the contact page. |
| Buttons | Min height 48px (44px for small). `primary` red, `secondary` navy outline, `light`/`outline-light` on dark, `ghost`. |
| Service card | Whole card clickable through the heading link; destination label; explicit "En savoir plus". |
| Service finder | Destination and need chips (`aria-pressed`), a "Je ne sais pas encore" path, live result count, reset, a no-results message. Compact link rows on the homepage, full cards on the hub. Without JS, everything stays listed. |
| Inquiry form / dialog | Native `<dialog>` (focus handling, Escape, focus restored, data kept on close) with a full contact-page fallback. Error summary plus inline errors (`aria-invalid`, `aria-describedby`). Step 2 shows the exact prepared message, **Continuer sur WhatsApp**, a copy button with fallback, and the phone number. |
| FAQ | Native `<details>/<summary>`. |
| Office info | Address, landmark, directions link (address search, no pin), hours table, appointment rule, optional office-status line computed in `America/Santo_Domingo` and labelled as office status only. |
| Notice | U.S. nationality-restriction note on U.S. service pages and guides, with source link and check date. |
| Testimonial card | Translation shown, original Creole in a disclosure, truthful source label, no stars. |
| Video card | Link card to the original TikTok post; no third-party player is loaded. |

## Motion

150–250ms interface transitions (opacity/transform only), a one-time hero route draw, short dialog entrance, optional section reveal via IntersectionObserver. All are disabled under `prefers-reduced-motion`, and content is visible without JavaScript. No autoplay, parallax or scroll hijacking.

## Responsive rules

Reviewed at 390 and 1440 (plus 1280 in the browser pane). Breakpoints: 480 (form name fields stack), 600 (mobile hero avatar, CTA in header hidden), 768 (mobile contact bar), 900 (two-column sections stack), 1024 (service page sidebar becomes static), 1100 (desktop nav). No horizontal overflow on audited pages.
