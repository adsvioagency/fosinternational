// Locale-neutral page IDs and their localized paths.
// Language switching, hreflang, canonicals, breadcrumbs and the sitemap all resolve through here.
import { langs, defaultLang, type Lang } from '../content/types';
import { services } from '../content/services/index';
import { resources } from '../content/resources';

export type StaticPageId =
  | 'home'
  | 'about'
  | 'services'
  | 'resources'
  | 'testimonials'
  | 'contact'
  | 'privacy'
  | 'legal';

/** e.g. 'home', 'service:us-fiance', 'resource:k1-steps' */
export type PageId = StaticPageId | `service:${string}` | `resource:${string}`;

const staticSlugs: Record<StaticPageId, Record<Lang, string>> = {
  home: { fr: '', en: '', es: '' },
  about: { fr: 'a-propos', en: 'about', es: 'sobre-nosotros' },
  services: { fr: 'services', en: 'services', es: 'servicios' },
  resources: { fr: 'ressources', en: 'resources', es: 'recursos' },
  testimonials: { fr: 'temoignages', en: 'testimonials', es: 'testimonios' },
  contact: { fr: 'contact', en: 'contact', es: 'contacto' },
  privacy: { fr: 'confidentialite', en: 'privacy', es: 'privacidad' },
  legal: { fr: 'mentions-legales', en: 'legal', es: 'aviso-legal' },
};

const join = (...parts: string[]) => '/' + parts.filter(Boolean).join('/') + '/';

export function pathFor(pageId: PageId, lang: Lang): string {
  if (pageId.startsWith('service:')) {
    const svc = services.find((s) => s.id === pageId.slice(8));
    if (!svc) throw new Error(`Unknown service page ${pageId}`);
    return join(lang, staticSlugs.services[lang], svc[lang].slug);
  }
  if (pageId.startsWith('resource:')) {
    const res = resources.find((r) => r.id === pageId.slice(9));
    if (!res) throw new Error(`Unknown resource page ${pageId}`);
    return join(lang, staticSlugs.resources[lang], res[lang].slug);
  }
  return join(lang, staticSlugs[pageId as StaticPageId][lang]);
}

export const allPageIds = (): PageId[] => [
  ...(Object.keys(staticSlugs) as StaticPageId[]),
  ...services.map((s) => `service:${s.id}` as PageId),
  ...resources.map((r) => `resource:${r.id}` as PageId),
];

/** The language-neutral landing page. It belongs to no language, so it is the homepage cluster's x-default. */
export const rootPath = '/';

/** The same page in every language, e.g. { fr: '/fr/a-propos/', en: '/en/about/', es: '/es/sobre-nosotros/' }. */
export const alternatesFor = (pageId: PageId) =>
  Object.fromEntries(langs.map((l) => [l, pathFor(pageId, l)])) as Record<Lang, string>;

/**
 * Where hreflang="x-default" points. The homepage cluster sends it to the neutral root, which lets
 * visitors choose; every other page falls back to French, the primary editorial version.
 */
export const xDefaultFor = (pageId: PageId) => (pageId === 'home' ? rootPath : pathFor(pageId, defaultLang));

export type Alternates = Record<Lang, string> & { xDefault: string };

/** Map of every indexable path → its alternates, used by the sitemap. Includes the root. */
export function alternatesByPath(): Map<string, Alternates> {
  const map = new Map<string, Alternates>();
  for (const id of allPageIds()) {
    const alt: Alternates = { ...alternatesFor(id), xDefault: xDefaultFor(id) };
    for (const l of langs) map.set(alt[l], alt);
    // The root shares the homepage's alternates, so all four URLs declare the same set.
    if (id === 'home') map.set(rootPath, alt);
  }
  return map;
}

export const contactPath = (lang: Lang, serviceId?: string) =>
  pathFor('contact', lang) + (serviceId ? `?service=${encodeURIComponent(serviceId)}` : '') + '#inquiry';
