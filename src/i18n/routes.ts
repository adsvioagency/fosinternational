// Locale-neutral page IDs and their localized paths.
// Language switching, hreflang, canonicals, breadcrumbs and the sitemap all resolve through here.
import { langs, type Lang } from '../content/types';
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

/** The same page in every language, e.g. { fr: '/fr/a-propos/', en: '/en/about/', es: '/es/sobre-nosotros/' }. */
export const alternatesFor = (pageId: PageId) =>
  Object.fromEntries(langs.map((l) => [l, pathFor(pageId, l)])) as Record<Lang, string>;

/** Map of every localized path → its alternates, used by the sitemap. */
export function alternatesByPath(): Map<string, Record<Lang, string>> {
  const map = new Map<string, Record<Lang, string>>();
  for (const id of allPageIds()) {
    const alt = alternatesFor(id);
    for (const l of langs) map.set(alt[l], alt);
  }
  return map;
}

export const contactPath = (lang: Lang, serviceId?: string) =>
  pathFor('contact', lang) + (serviceId ? `?service=${encodeURIComponent(serviceId)}` : '') + '#inquiry';
