# SEO: page map, query intent and technical policy

No search-volume or difficulty figures were available or invented. Queries below are the intent each page is written for; validate them with Search Console data after launch.

## Page → query map

| Page (FR / EN) | Primary intent (FR) | Primary intent (EN) |
|---|---|---|
| `/fr/` · `/en/` | consultant en immigration à Santo Domingo; accompagnement démarches migratoires République dominicaine | immigration consultation Santo Domingo; immigration consultant Dominican Republic |
| `/fr/a-propos/` · `/en/about/` | Fernando consultant et interprète en immigration | Fernando immigration interpreter Santo Domingo |
| `/fr/services/` · `/en/services/` | services d’accompagnement en immigration Santo Domingo | immigration support services Dominican Republic |
| K-1/K-2 `/fr/services/visa-fiance-etats-unis/` · `/en/services/us-fiance-visa/` | visa fiancé K-1 République dominicaine | US fiancé visa preparation Dominican Republic |
| Tourist `/visa-touriste-etats-unis/` · `/us-tourist-visa/` | préparation visa touristique américain | US tourist visa B-1/B-2 help Santo Domingo |
| Spouse `/visa-familial-etats-unis/` · `/us-family-visa/` | visa conjoint IR-1 CR-1 | IR-1 CR-1 spouse visa preparation |
| Passport `/passeport-americain/` · `/us-passport-assistance/` | aide passeport américain République dominicaine | US passport application help Dominican Republic |
| Interpreting `/interpretation-immigration/` · `/immigration-interpreting/` | interprète immigration Santo Domingo | immigration interpreter Dominican Republic |
| Translation `/traduction-documents/` · `/document-translation/` | traduction de documents République dominicaine | document translation Dominican Republic |
| Legalization `/legalisation-documents/` · `/document-legalization/` | légalisation de documents | document legalization assistance |
| Apostille `/assistance-apostille/` · `/apostille-assistance/` | assistance apostille et légalisation de documents | document translation and apostille assistance |
| Notarial `/assistance-documents-notariaux/` · `/notarial-document-assistance/` | documents notariés démarches | notarized document help |
| DR student `/permis-etudiant-republique-dominicaine/` · `/dominican-student-permit/` | permis étudiant République dominicaine | Dominican Republic student permit |
| DR residency `/residence-travail-republique-dominicaine/` · `/dominican-residency-work/` | résidence permis de travail République dominicaine | Dominican residency work permit guidance |
| Canada visitor `/visa-visiteur-canada/` · `/canada-visitor-visa/` | visa visiteur Canada accompagnement | Canada visitor visa help |
| Canada study `/etudes-canada/` · `/study-in-canada/` | études au Canada accompagnement, permis d’études | study permit Canada help |
| Colombia `/visa-colombie/` · `/colombia-visa/` | visa Colombie | Colombia visa consultation |
| Jamaica `/voyage-jamaique/` · `/jamaica-travel/` | consultation voyage Jamaïque | Jamaica travel visa consultation |
| Mexico `/visa-mexique/` · `/mexico-visa/` | visa Mexique touriste étudiant | Mexico tourist student visa consultation |
| Business `/creation-entreprise-republique-dominicaine/` · `/dominican-business-setup/` | créer entreprise République dominicaine | set up business Dominican Republic |
| Guides (7 per language) | informational: “visa K-1 étapes”, “différence apostille légalisation”, “visa visiteur ou permis d’études Canada”… | same, in English |
| Contact | contacter Fernando OMG Services WhatsApp | contact Fernando OMG Services |

All 17 proposed service pages were kept: each has distinct intent and content. Legalization and apostille stay separate because they answer different situations (Hague vs non-Hague countries). The notarial and business pages are deliberately shorter and conservative about scope. No city or doorway pages exist; only the confirmed Villa Mella, Santo Domingo location is used.

## Spanish (added 21 Oct 2026)

Every page has a Spanish version under `/es/` with localized slugs (`/es/servicios/visa-colombia/`, `/es/sobre-nosotros/`, `/es/recursos/…`). Spanish titles and descriptions target the same intents in the words Dominican and Latin American searchers use: *visa americana / visa de turista*, *visa de prometido(a) K-1*, *apostilla MIREX*, *permiso de estudiante República Dominicana*, *residencia y permiso de trabajo*, *visa para Colombia / México*, *consultor de inmigración Santo Domingo*. Validate with Search Console after launch.

## Technical policy

- **Rendering:** fully static HTML. All content is in the markup.
- **URLs:** `/fr/…`, `/en/…` and `/es/…` with localized slugs and a trailing slash. Only the root `/` is redirected (302) by browser language (Accept-Language, or the `nf_lang` cookie from the language switch), with a script fallback; it is `noindex`. Language URLs are never redirected, so crawlers and shared links always get the language in the path. Visitors whose browser prefers another language are offered it in a dismissible bar.
- **No machine translation:** `translate="no"` and `<meta name="google" content="notranslate">` on every page.
- **Canonicals:** self-referencing per language, built from `SITE_URL`. English is never canonicalised to French.
- **hreflang:** `fr`, `en`, `es` and `x-default` (→ French, the primary audience) on every page and in the sitemap, reciprocal (verified by `tests/audit-build.mjs`). Open Graph locales fr_FR, en_US, es_LA.
- **Indexing:** off unless `INDEXING=true`. The launch build fails without `SITE_URL`, so no localhost or placeholder canonical can ship.
- **Sitemap:** `@astrojs/sitemap`, with alternates from the route table. 404 and root excluded.
- **Per page:** unique title, meta description, one H1, Open Graph and Twitter card (shared 1200×630 image: logo + portrait), breadcrumbs (visible + `BreadcrumbList`).
- **Structured data (JSON-LD `@graph`):** `ProfessionalService` (name, phone, email, address with country DO, opening hours, logo, image, `sameAs` socials), `Person` (Fernando, job title only), `WebSite`, `Service` on service pages, `FAQPage` matching the visible FAQs, `Article` on guides (dateModified = review date). Deliberately **omitted:** geo coordinates, price range, ratings/reviews, credentials, registration numbers, founding date, legal entity suffix.
- **404:** trilingual, `noindex`, links back to each home.
- FAQ markup is included for clarity; rich-result display is decided by Google and is not promised.

## Google Business Profile (not created)

None was created or claimed. See the owner checklist in `PENDING-CONFIRMATIONS.md`.
