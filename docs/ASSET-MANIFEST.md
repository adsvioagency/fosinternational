# Asset manifest (internal)

Originals stay in the supplied-assets folder one level above this project (not part of the repository) and are never modified or copied into the project. Derivatives are produced by `scripts/prepare-images.mjs` (`npm run images`). Astro then generates responsive WebP sizes at build time. Metadata (EXIF) is stripped by re-encoding.

| Original file | Derivative | Treatment | Used on | Publication status |
|---|---|---|---|---|
| `official logo .jpg` | `src/assets/photos/logo-official.jpg` | Re-encoded, unaltered | Footer, About, schema logo | Client-supplied brand asset. The embedded wording ("…SRL", "EDUCATE-INFORM-SERVE") is preserved as is. |
| `official logo .jpg` | `logo-emblem.png` | Crop of the F + airplane emblem only (no redrawing), 160px high | Header mark (with HTML wordmark), 404 | As above |
| `official logo .jpg` + `Polished Portrait in Blue Suit.png` | `public/og-default.jpg` (1200×630) | Composite on the logo's warm white | Social sharing image | As above |
| `official logo .jpg` | `public/favicon.png`, `public/apple-touch-icon.png` | Emblem crop | Browser icons | As above |
| `Polished Portrait in Blue Suit.png` | `fernando-portrait-blue.jpg` | Re-encoded, full frame | Home hero, mobile avatar, About header, schema image | **Confirm** (see note) |
| `Confident Corporate Portrait with Flags.png` | `fernando-portrait-office.jpg` | Cropped to 4:5 (removes wall fixture, legs) | Home "Fernando et son équipe", About | **Confirm** (see note). Not captioned as the office. |
| `happy clients.png` | `fernando-with-family.jpg` | Re-encoded. **The child's face covering (emoji) from the supplied file is preserved.** | Home stories, Testimonials | **Pending client permission.** Hidden automatically in launch builds until approved. |
| `happy client2.png` | `fernando-with-client-car.jpg` | Re-encoded. The held paper is blank on its visible side. | Testimonials | **Pending permission.** Hidden in launch builds. |
| `Screenshot 2026-10-18 200221.png` | `fernando-with-client-document.jpg` | Cropped (partial person at the left edge removed). The held document is **irreversibly pixelated** (the exported pixels are replaced, not overlaid). | Testimonials | **Pending permission.** Hidden in launch builds. |
| `testimony.png` | — (text only) | Creole excerpt transcribed + FR/EN translation in `social-proof.ts` | Testimonials, home | **Pending permission** to publish |
| `Screenshot 2026-10-18 200304.png` / `proof.png` (same message) | — (text only) | Excerpt transcribed; the residence-card image and the outcome sentence ("in less than a month… 10-year residence") are **not** used | Testimonials, home | **Pending permission** |
| `Screenshot 2026-10-18 211742.png` (passport flyer) | — (text only) | Client message transcribed from the flyer's laptop image | Testimonials, home | **Pending permission** |
| `Screenshot 2026-10-18 200339.png`, `case approved proof.png`, `approved proof .png`, `Screenshot 2026-10-18 211325.png` | **Not used** | I-129F **petition** approvals. Receipt-number fragments are visible despite earlier redaction. They are not a visa issuance. | — | Held. Not suitable for publication. |
| `proof2.png` | **Not used** | DGM appointment confirmation (biometrics / residence card delivery) | — | Held. Contains appointment details. |
| `Screenshot 2026-10-18 200541.png` | **Not used** | Social-video frame with UI chrome, hashtags (incl. "#VisaApprouvé") | — | Held. Not a clean asset; outcome-oriented overlay. |
| `Happy clients Tiktok video link.txt` | `videos` entries (`kind: 'client-story'`) | 3 of the 6 links used as link cards | Testimonials | **Pending permission** for client-story display |

**Portrait note.** The two portrait filenames ("Confident Corporate Portrait with Flags", "Polished Portrait in Blue Suit") read like titles from an AI image tool, and the office photo shows empty picture frames. Before launch, confirm with Fernando that these images are genuine photographs of him (or edits he approves) and that he is happy to have them published. The site must not present AI-fabricated portraits.

## Team headshots and client photos (added 20 Oct 2026)

Originals moved by the designer into `FOS Team/` and `Pictures Happy Clients/`. `scripts/prepare-images.mjs` reads from there.

| Original | Derivative | Treatment | Used on | Status |
|---|---|---|---|---|
| `FOS Team/Fernand Theodor (main).png` | `team-fernand-theodore.jpg` | Resized to 960px | About (lead portrait), About and home team rows | Supplied for the website |
| `FOS Team/Lovely Aldian .. .png`, `Roodelyne Beauséjour ...png`, `Ing. Alex Belony.png`, `Edline Alexandre ....png` | `team-*.jpg` | Resized to 960px | About team grid, home team row | Supplied for the website |
| `Pictures Happy Clients/to add on section Words from people we have helped.jpeg` | `client-embassy-trio.jpg` | Re-encoded | Home "Ils nous ont fait confiance", Testimonials carousel | **Approved** (clients agreed) |
| `…/WhatsApp Image 2026-10-19 at 18.37.07 (1).jpeg` | `client-trio-letter.jpg` | Embassy letter **pixelated** | Testimonials carousel | Approved |
| `…/WhatsApp Image 2026-10-19 at 18.37.07 (2).jpeg` | `client-duo-letter.jpg` | Embassy letter **pixelated** | Testimonials carousel | Approved |
| `…/WhatsApp Image 2026-10-19 at 18.49.15 (1).jpeg` | `client-group-cards.jpg` | Four held cards **pixelated** (incl. one in the background) | Testimonials carousel | Approved |
| `…/WhatsApp Image 2026-10-19 at 18.49.15 (3).jpeg` | `client-airport-selfie.jpg` | Re-encoded | Testimonials carousel | Approved |
| `…/WhatsApp Image 2026-10-19 at 18.49.15.jpeg` | `client-car-letter.jpg` | Embassy letter **pixelated** | Testimonials carousel | Approved |
| `…/Screenshot 2026-10-18 200541.png` | `client-video-moment.jpg` | Cropped to the photo (hashtag stickers and app UI removed) | Testimonials carousel | Approved |
| `…/happy clients.png`, `happy client2.png`, `Screenshot … 200221.png` | existing derivatives | As before | Testimonials carousel | Now approved |
| `…/Screenshot 2026-10-18 200304.png`, `proof.png`, `Screenshot 2026-10-18 211325.png` | **Not used as images** | WhatsApp testimonial / I-129F case screenshots (case details) | — | Text excerpts only |

The three WhatsApp text testimonials and the three client-story TikToks were approved by Fernand Theodore on 27 Oct 2026 and are live.

## Video covers (added 19 Oct 2026)

`src/assets/videos/<videoId>.jpg` — opening frame of each curated TikTok video, captured once by `scripts/capture-video-covers.mjs`. The script renders TikTok's official embed player in local headless Chrome with the player overlays hidden, so no like counts or buttons appear. TikTok's oEmbed no longer returns thumbnails. The site self-hosts these covers; TikTok's player loads only when a visitor presses play.

| Video | Cover notes | Status |
|---|---|---|
| 7668125362752212245 (fiancé/spouse) · 7637354713456905493 (documents) · 7682862115908013333 (DR residency) · 7614215182000114964 (U.S. passport) | Fernando only | Business's own public content |
| 7691441369369431317 (Mexico visa) | The open passport/visa sticker he holds is **irreversibly pixelated** (redaction defined in the script) | Business's own public content |
| 7696660709844749569 · 7586714886315576596 · 7539529968750054661 (client stories) | Clients' faces visible | **Pending permission**; hidden in launch builds |

Re-run with `node scripts/capture-video-covers.mjs --force` and review every image before publishing.

## Round 3 additions (21 Oct 2026)

| Asset | Source and licence | Treatment | Used on |
|---|---|---|---|
| Destination flags (US, CA, MX, CO, JM, DO) | `flag-icons` 7.5.0, MIT (`scripts/flags/`, licence copied there) | Rasterised to 480×360 PNG by `scripts/prepare-flags.mjs` (the DO and MX coats of arms are 40–85 KB as SVG) | Home hero list, service page heroes, globe |
| Globe | Natural Earth 1:110m land and countries via `world-atlas` 2.0.2 (ISC; Natural Earth is public domain), drawn with `d3-geo` at build time | Static SVG; nothing loads at runtime | "Another destination?" band (home, services) |
| FOS Colombia video covers 7657736717532777748 · 7657260232187383061 | Opening frame of the client's own @foscolombia posts | Overlays hidden | Colombia page |
| FOS Colombia video cover 7677959007834852629 | As above | A client's visa approval screenshot visible on the frame is **irreversibly pixelated** | Colombia page |

## Not in the build

`tests/audit-build.mjs` fails the build audit if any file named like an original (Screenshot, proof, testimony, approved, happy client, official logo) or an internal doc appears in `dist/`.
