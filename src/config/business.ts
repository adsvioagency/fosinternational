// Single source of truth for public business details.
// Edit here; every component, schema block and the WhatsApp flow reads from this file.
// Internal or unconfirmed details (payment contacts, older numbers, registration leads) are deliberately
// NOT stored here — see docs/PENDING-CONFIRMATIONS.md.
import type { Lang } from '../content/types';

export const business = {
  name: 'Fernando OMG Services',
  acronym: 'FOS',
  // Year the business started (client-confirmed, Oct 2026).
  founded: 2019,
  person: {
    displayName: 'Fernand',
    // Confirmed by the designer after the client meeting (October 2026).
    fullName: 'Fernand Theodore',
    title: {
      fr: 'Consultant et interprète en immigration',
      en: 'Consultant and Immigration Interpreter',
      es: 'Consultor e intérprete de inmigración',
    },
  },
  phone: {
    display: '+1 (849) 399-8859',
    e164: '+18493998859',
    tel: 'tel:+18493998859',
  },
  whatsapp: {
    digits: '18493998859',
    base: 'https://wa.me/18493998859',
  },
  // Business address on the company domain (owner-confirmed, Nov 2026).
  email: 'office@fosinternational.com',
  address: {
    street: 'Calle Penetracion 6',
    neighborhood: 'Buena Vista 1ra',
    locality: 'Villa Mella',
    city: 'Santo Domingo',
    countryCode: 'DO',
    country: { fr: 'République Dominicaine', en: 'Dominican Republic', es: 'República Dominicana' },
  },
  landmark: {
    fr: 'En face de la pharmacie Buena Vista',
    en: 'Opposite Farmacia Buena Vista',
    es: 'Frente a la Farmacia Buena Vista',
  },
  timeZone: 'America/Santo_Domingo',
  // Office hours (appointment required). Days use ISO numbering: 1 = Monday … 7 = Sunday.
  hours: [
    { days: [1, 2, 3, 4], opens: '08:00', closes: '20:00' },
    { days: [5], opens: '08:00', closes: '14:00' },
  ],
  socials: [
    { id: 'tiktok', label: 'TikTok', url: 'https://www.tiktok.com/@fernandoomgservicessrl' },
    { id: 'facebook', label: 'Facebook', url: 'https://www.facebook.com/p/Fernando-OMG-Services-LLC-61554698592691/' },
    { id: 'youtube', label: 'YouTube', url: 'https://www.youtube.com/@FOSLLC' },
  ],
} as const;

export const addressLine = (lang: Lang) =>
  `${business.address.street}, ${business.address.neighborhood}, ${business.address.locality}, ${business.address.city}, ${business.address.country[lang]}`;

// Maps search for the client-supplied landmark ("frente a la farmacia Buena Vista"), which Google
// pins precisely on Calle Penetracion; the office is opposite it. We never set our own coordinates.
// (A search for the street address alone only centres on the general area, without a pin.)
const mapQuery = () => encodeURIComponent('Farmacia Buena Vista, Calle Penetracion, Villa Mella, Santo Domingo Norte');

export const directionsUrl = () => 'https://www.google.com/maps/search/?api=1&query=' + mapQuery();

/** Keyless Google Maps embed of the same address search (lazy-loaded iframe). */
export const mapEmbedUrl = (lang: Lang) => `https://www.google.com/maps?q=${mapQuery()}&hl=${lang}&z=16&output=embed`;

