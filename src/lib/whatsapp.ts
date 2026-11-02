// Pure helpers for the inquiry → WhatsApp handoff. Shared by the browser script and the tests.
// Nothing here stores, logs or transmits data; it only builds text and a wa.me URL.

export const WHATSAPP_DIGITS = '18493998859';

export type InquiryLang = 'fr' | 'en' | 'es';
export type Preference = '' | 'online' | 'office' | 'any';

export interface Inquiry {
  firstName: string;
  lastName: string;
  phone: string;
  serviceLabel: string;
  message: string;
  preference: Preference;
}

/** Message labels; also used for the illustrative preview on the site. */
export const messageCopy = {
  fr: {
    greeting: 'Bonjour à l’équipe Fernando OMG Services (FOS),',
    intro: 'Je souhaite obtenir des informations / demander une consultation.',
    name: 'Prénom et nom',
    phone: 'Téléphone / WhatsApp',
    service: 'Service',
    message: 'Ma demande',
    preference: 'Préférence',
    prefs: { online: 'Consultation en ligne', office: 'Consultation au bureau', any: 'Pas de préférence' },
    footer: 'Demande depuis le site — Français.',
  },
  en: {
    greeting: 'Hello Fernando OMG Services (FOS) team,',
    intro: 'I would like some information / to request a consultation.',
    name: 'First and last name',
    phone: 'Phone / WhatsApp',
    service: 'Service',
    message: 'My request',
    preference: 'Preference',
    prefs: { online: 'Online consultation', office: 'Office consultation', any: 'No preference' },
    footer: 'Sent from the website — English.',
  },
  es: {
    greeting: 'Hola, equipo de Fernando OMG Services (FOS):',
    intro: 'Quisiera recibir información / solicitar una consulta.',
    name: 'Nombre y apellido',
    phone: 'Teléfono / WhatsApp',
    service: 'Servicio',
    message: 'Mi solicitud',
    preference: 'Preferencia',
    prefs: { online: 'Consulta en línea', office: 'Consulta en la oficina', any: 'Sin preferencia' },
    footer: 'Enviado desde el sitio web — Español.',
  },
} as const;

const clean = (value: string) => value.replace(/\r\n?/g, '\n').trim();
/** Collapses whitespace in single-line fields so a stray newline cannot break the message layout. */
const oneLine = (value: string) => clean(value).replace(/\s+/g, ' ');

export function buildMessage(input: Inquiry, lang: InquiryLang): string {
  const c = messageCopy[lang];
  // French typography puts a non-breaking space before the colon.
  const sep = lang === 'fr' ? ' : ' : ': ';
  const lines: string[] = [
    c.greeting,
    '',
    c.intro,
    '',
    `${c.name}${sep}${oneLine(input.firstName)} ${oneLine(input.lastName)}`,
    `${c.phone}${sep}${oneLine(input.phone)}`,
    `${c.service}${sep}${oneLine(input.serviceLabel)}`,
  ];
  const message = clean(input.message);
  if (message) lines.push(`${c.message}${sep}${message}`);
  if (input.preference) lines.push(`${c.preference}${sep}${c.prefs[input.preference]}`);
  lines.push('', c.footer);
  return lines.join('\n');
}

export const buildWhatsAppUrl = (message: string, digits: string = WHATSAPP_DIGITS) =>
  `https://wa.me/${digits}?text=${encodeURIComponent(message)}`;

// ---- Validation -----------------------------------------------------------------------------

export const MESSAGE_MAX = 600;
export const NOT_SURE_ID = 'not-sure';
/** Tourist or study visa for a destination not listed on the site; the visitor must name it. */
export const OTHER_COUNTRY_ID = 'other-country';
export const SPECIAL_IDS: readonly string[] = [NOT_SURE_ID, OTHER_COUNTRY_ID];

export type FieldName = 'firstName' | 'lastName' | 'phone' | 'service' | 'message';
export type ErrorCode = 'required' | 'name' | 'phone' | 'tooLong' | 'needDetails' | 'needCountry';

/** Accepts any script, accents, apostrophes, hyphens and spaces — only requires at least one letter. */
export function validateName(value: string): ErrorCode | null {
  const v = value.trim();
  if (!v) return 'required';
  if (v.length > 80 || !/\p{L}/u.test(v)) return 'name';
  return null;
}

/** Sensible international formats: optional +, digits, spaces, dots, dashes, parentheses; 7–15 digits. */
export function validatePhone(value: string): ErrorCode | null {
  const v = value.trim();
  if (!v) return 'required';
  if (!/^\+?[\d\s().-]+$/.test(v)) return 'phone';
  const digits = v.replace(/\D/g, '');
  if (digits.length < 7 || digits.length > 15) return 'phone';
  return null;
}

export function validateService(value: string, knownIds: readonly string[]): ErrorCode | null {
  if (!value) return 'required';
  if (!SPECIAL_IDS.includes(value) && !knownIds.includes(value)) return 'required';
  return null;
}

/** Details are optional, except for "not sure" (a short description) and "other country" (the destination). */
export function validateMessage(value: string, serviceId: string): ErrorCode | null {
  const v = value.trim();
  if (v.length > MESSAGE_MAX) return 'tooLong';
  if (serviceId === NOT_SURE_ID && v.length < 5) return 'needDetails';
  if (serviceId === OTHER_COUNTRY_ID && v.length < 4) return 'needCountry';
  return null;
}

/** Unknown or malformed ?service= values fail safely to no selection. */
export function resolveServiceParam(param: string | null, knownIds: readonly string[]): string {
  if (!param) return '';
  if (SPECIAL_IDS.includes(param)) return param;
  return knownIds.includes(param) ? param : '';
}
