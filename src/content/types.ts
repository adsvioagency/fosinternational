export type Lang = 'fr' | 'en' | 'es';
export const langs: readonly Lang[] = ['fr', 'en', 'es'];
/** French is the primary editorial version and the x-default. */
export const defaultLang: Lang = 'fr';

export type Destination = 'us' | 'ca' | 'do' | 'co' | 'mx' | 'jm' | 'any';
export type Need = 'travel' | 'family' | 'study' | 'documents' | 'interpreting' | 'settle';
export type ServiceGroup = 'us' | 'documents' | 'dominican' | 'travel';
export type IconName =
  | 'heart'
  | 'plane'
  | 'users'
  | 'passport'
  | 'languages'
  | 'file'
  | 'stamp'
  | 'award'
  | 'pen'
  | 'graduation'
  | 'home'
  | 'briefcase'
  | 'globe'
  | 'map';

export interface SourceLink {
  label: string;
  url: string;
}

export interface Faq {
  q: string;
  a: string;
}

export interface Step {
  title: string;
  text: string;
}

export interface ServiceLocale {
  slug: string;
  /** Short name used in menus, cards, the inquiry select and the WhatsApp message. */
  label: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  /** One-sentence card summary. */
  summary: string;
  intro: string[];
  forWho: string[];
  whatItIs: string[];
  howWeHelp: string[];
  steps: Step[];
  checklist: string[];
  faqs: Faq[];
}

export interface Service {
  id: string;
  group: ServiceGroup;
  destinations: Destination[];
  needs: Need[];
  icon: IconName;
  /** Lower numbers appear first on the homepage overview; omit to keep off the homepage. */
  homePriority?: number;
  /** Shows the current U.S. nationality-restriction note. */
  usRestrictionNotice?: boolean;
  related: string[];
  relatedResources: string[];
  sources: SourceLink[];
  /** Date the content was actually reviewed against the sources (ISO). */
  reviewed: string;
  /** Account to follow for this service, shown with its videos (e.g. FOS Colombia on TikTok). */
  socialLink?: SourceLink;
  fr: ServiceLocale;
  en: ServiceLocale;
  es: ServiceLocale;
}

/** Service as written in the group files; the Spanish copy lives in src/content/es/. */
export type ServiceSource = Omit<Service, 'es'>;

export interface ResourceSection {
  heading: string;
  paragraphs?: string[];
  list?: string[];
}

export interface ResourceLocale {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  summary: string;
  sections: ResourceSection[];
  nextSteps: string[];
}

export interface Resource {
  id: string;
  relatedServices: string[];
  sources: SourceLink[];
  reviewed: string;
  usRestrictionNotice?: boolean;
  fr: ResourceLocale;
  en: ResourceLocale;
  es: ResourceLocale;
}

export type ResourceSource = Omit<Resource, 'es'>;

export type Permission = 'pending' | 'approved';

export interface Testimonial {
  id: string;
  originalLang: 'ht' | 'fr' | 'en' | 'es';
  /** Faithful transcription of the excerpt shown. */
  original: string;
  translation: Record<Lang, string>;
  attribution: Record<Lang, string>;
  sourceType: 'whatsapp' | 'social-post';
  sourceUrl?: string;
  relatedService?: string;
  permission: Permission;
  order: number;
}

export interface VideoEntry {
  id: string;
  platform: 'tiktok' | 'youtube';
  url: string;
  topic: Record<Lang, string>;
  title: Record<Lang, string>;
  summary: Record<Lang, string>;
  relatedService?: string;
  kind: 'explainer' | 'client-story';
  permission: Permission;
}
