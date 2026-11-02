# Pending confirmations and conservative choices (internal, not published)

## Most important before review with Fernando

1. **U.S. visa restrictions for Haitian nationals.** Proclamation 10998 (effective 1 Jan 2026) fully suspends U.S. immigrant and nonimmigrant visa issuance for Haitian nationals, with narrow exceptions. A separate pause on immigrant visas (from 21 Jan 2026) also lists Haiti. Several of Fernando's priority services (K-1/K-2, tourist, IR-1/CR-1) are directly affected for his main audience. The draft says this plainly but calmly on U.S. pages and guides ("À savoir avant de commencer"). Discuss with Fernando how he wants it framed (for example dual nationals, U.S.-citizen petitioners, other nationalities, preparation for when rules change) and recheck travel.state.gov before launch. The official page was blocked to automated access; see SOURCE-LOG.
2. **Portrait authenticity and approval.** See ASSET-MANIFEST. The filenames suggest AI-styled images.
3. **Publication permission: done.** Fernand Theodore approved all testimonials, client photos and client-story TikToks (27 Oct 2026); all are `approved` and live.

## Business facts

| Item | Draft treatment |
|---|---|
| Final service list and package scope | All 17 researched services are present; scope wording is conservative ("orientation", "selon votre situation"). |
| Preferred full professional name | **"Fernand Theodore"** (his real name, 20 Oct 2026). The business keeps the name Fernando OMG Services (FOS); the site uses "Fernand" for the person. Credentials published as supplied: B.A., M.A.; Master en droits de l’homme; training in immigration, consular and diplomatic law; translator and interpreter; since 2019. |
| Founding year | **2019** (client-confirmed): "7 ans d’expérience" shown on the home and About pages, and `foundingDate` in schema. Update the "7" each year (`about.experienceValue` and the home reassurance strip in `src/i18n/ui.ts`). |
| Team | Lovely Aldian (Responsable administrative), Roodelyne Beauséjour (Interprète et traductrice), Ing. Alex Belony (Chargé de l’appui documentaire international), Edline Alexandre (Assistante administrative), in `src/content/team.ts`. |
| Other destinations | Tourist and study visas "for almost all countries": shown as "Autre pays" in the finder and the form (destination required). |
| Map | Google Maps embed and links search for the client-supplied landmark, Farmacia Buena Vista on C. Penetracion (a real Google listing), captioned "the office is opposite". Searching the street address alone gives no pin. Fernando could confirm the pin, or later create his own Business Profile pin. |
| Founding year (~2018) | Not shown anywhere. |
| Legal entity name(s), jurisdiction, RNC / registration IDs, LLC vs SRL relationship | Not shown. Legal page lists the public name, address, phone and email only. The logo image itself says "SRL" and social posts say "LLC"; confirm which to state. |
| ONAPI lead: "FERNANDO OMG SERVICIOS", applicant Fernand Theodore, reg. 823842, 5 Sep 2024, file E/2024-55914 (activity unrelated) | Internal lead only; not used. |
| Qualifications / registrations to publicise | None claimed. The site states he is not presented as a notary, attorney or accredited representative. |
| Notarial assistance: provider, jurisdiction, acts covered | Described as preparation + referral to the competent authority. |
| ~~Email~~ | Settled 2 Nov 2026: the site shows `office@fosinternational.com`, the address on the company domain. The old public Gmail address is no longer used anywhere on the site. |
| Secondary numbers: an older Canada-only number from a past post, and a Zelle payment contact | Neither is published. Both stay in the owner’s own records, not in this repository; the site has no payment flow. `tests/audit-build.mjs` fails the build if either appears on a page. |
| Messaging response days/hours (possibly 09:00–16:00) | Not published. A generic "messaging hours may differ from office hours" sentence is used. |
| Sunday exceptions | Sunday shown as closed. |
| Prices, consultation fees, cancellation/refund, payment instructions | None shown. |
| Map pin, street spelling ("Penetracion" vs "Penetración"), office photos | Directions link = Google Maps search of the supplied address; no pin, no office photo. |
| Interpreting languages | Since the Spanish version (21 Oct 2026), the interpreting FAQ says conversations happen mainly in Haitian Creole, French **and Spanish** (all three languages). Confirm; English interpreting is still not claimed. |
| Spanish version | Full Latin American Spanish copy of every page, written for the Dominican Republic. Worth a read-through by a native Spanish speaker on the team (for example the interpreter) before launch, especially service names and the U.S. restrictions notice. |
| Spanish team titles | Gerente administrativa (Lovely Aldian), Intérprete y traductora (Roodelyne Beauséjour), Encargado de apoyo documental internacional (Ing. Alex Belony), Asistente administrativa (Edline Alexandre), Consultor e intérprete de inmigración (Fernand Theodore). Confirm the wording each person prefers. |
| FOS Colombia TikTok | Three videos from @foscolombia (supplied by the client) appear on the Colombia page with a "follow" button. One cover showed a client's visa approval screenshot: that area is pixelated on the cover; the video itself, when played, is TikTok's own public post. |
| Current social audience counts | Not shown. |
| Instagram | Omitted. |
| Final domain, hosting provider, owner accounts, launch approval | Not set. The legal page should name the host once chosen. |
| Developer credit | None added. |

## Google Business Profile: owner checklist (do not create on his behalf)

- Confirm eligibility: an in-person office that serves customers during stated hours (appointment-only is allowed if staffed). See support.google.com/business/answer/3038177 and /7039811.
- Exact real-world business name (no keywords added), primary category (e.g. "Immigration consultant" or "Consultant"; avoid "Immigration attorney").
- Customer-facing address with a correct map pin placed by the owner; landmark in the description.
- Hours matching the website (Mon–Thu 8–20, Fri 8–14; "by appointment" noted).
- Phone +1 849-399-8859 and the final website URL.
- Original photos (exterior, office, team), no stock images.
- Owner-controlled Google account; add the developer as manager only if desired.
- Then add the profile link to `business.socials` if wanted.

## Conservative editorial choices to review

- About page: no origin story, no team size, no client counts, no quotes attributed to Fernando. Faith mentioned in one sentence, with "services open to everyone".
- "Ceux qui le rencontrent parlent de sa disponibilité, de sa patience et de son sourire" is based on the client brief and testimonials; edit if Fernando prefers otherwise.
- Colombia/Jamaica pages explicitly say travel is not a shortcut to a U.S. visa.
- I-129F approval screenshots are not used; copy repeatedly distinguishes petition approval from visa issuance.
- Testimonial excerpts omit outcome/timing sentences (e.g. "en moins d'un mois") so they do not read as promises.
