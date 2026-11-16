// SEO + structured data helpers. Only verified business facts are emitted.
import { business } from '../config/business';
import { siteOrigin } from '../config/env';
import { langs, type Lang } from '../content/types';
import { pathFor, type PageId } from '../i18n/routes';

export const abs = (path: string) => siteOrigin + path;

export const orgId = () => abs('/#organization');
export const personId = () => abs('/#fernando');
export const websiteId = () => abs('/#website');

export interface Crumb {
  name: string;
  path: string;
}

const dayNames = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

export function organizationNode(lang: Lang, logoUrl: string, imageUrl: string) {
  return {
    '@type': 'ProfessionalService',
    '@id': orgId(),
    name: business.name,
    alternateName: business.acronym,
    foundingDate: String(business.founded),
    url: abs(pathFor('home', lang)),
    logo: logoUrl,
    image: imageUrl,
    telephone: business.phone.e164,
    email: business.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: `${business.address.street}, ${business.address.neighborhood}`,
      addressLocality: business.address.locality,
      addressRegion: business.address.city,
      addressCountry: business.address.countryCode,
    },
    openingHoursSpecification: business.hours.map((h) => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: h.days.map((d) => `https://schema.org/${dayNames[d - 1]}`),
      opens: h.opens,
      closes: h.closes,
    })),
    areaServed: { '@type': 'Country', name: 'Dominican Republic' },
    sameAs: business.socials.map((s) => s.url),
  };
}

export function personNode(lang: Lang, imageUrl: string) {
  return {
    '@type': 'Person',
    '@id': personId(),
    name: business.person.fullName,
    jobTitle: business.person.title[lang],
    image: imageUrl,
    worksFor: { '@id': orgId() },
  };
}

export function websiteNode() {
  return {
    '@type': 'WebSite',
    '@id': websiteId(),
    url: abs('/'),
    name: business.name,
    alternateName: business.acronym,
    inLanguage: [...langs],
    publisher: { '@id': orgId() },
  };
}

export function breadcrumbNode(crumbs: Crumb[]) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.name,
      item: abs(c.path),
    })),
  };
}

export function serviceNode(opts: { pageId: PageId; lang: Lang; name: string; description: string }) {
  const url = abs(pathFor(opts.pageId, opts.lang));
  return {
    '@type': 'Service',
    '@id': url + '#service',
    name: opts.name,
    description: opts.description,
    url,
    provider: { '@id': orgId() },
    areaServed: { '@type': 'Country', name: 'Dominican Republic' },
    inLanguage: opts.lang,
  };
}

export function articleNode(opts: { pageId: PageId; lang: Lang; headline: string; description: string; dateModified: string; image: string }) {
  const url = abs(pathFor(opts.pageId, opts.lang));
  return {
    '@type': 'Article',
    '@id': url + '#article',
    headline: opts.headline,
    description: opts.description,
    inLanguage: opts.lang,
    dateModified: opts.dateModified,
    image: opts.image,
    mainEntityOfPage: url,
    publisher: { '@id': orgId() },
  };
}

export function faqNode(faqs: { q: string; a: string }[]) {
  return {
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };
}

/** Serialises JSON-LD safely for inline <script> (escapes "<" to avoid breaking out of the tag). */
export const jsonLd = (graph: object[]) =>
  JSON.stringify({ '@context': 'https://schema.org', '@graph': graph }).replace(/</g, '\\u003c');
