// Official references linked from service and resource pages.
// Review status, page dates and access notes for each source are kept in docs/SOURCE-LOG.md.
import type { SourceLink } from './types';

const s = (label: string, url: string): SourceLink => ({ label, url });

export const src = {
  uscisFiance: s('USCIS — Visas for fiancé(e)s of U.S. citizens', 'https://www.uscis.gov/family/family-of-us-citizens/visas-for-fiancees-of-us-citizens'),
  uscisI129f: s('USCIS — Form I-129F', 'https://www.uscis.gov/i-129f'),
  uscisSpouse: s('USCIS — Bringing spouses to live in the United States', 'https://www.uscis.gov/family/family-of-us-citizens/bringing-spouses-to-live-in-the-united-states-as-permanent-residents'),
  dosK1: s('U.S. Department of State — Nonimmigrant visa for a fiancé(e) (K-1)', 'https://travel.state.gov/content/travel/en/us-visas/immigrate/family-immigration/nonimmigrant-visa-for-a-fiance-k-1.html'),
  dosVisitor: s('U.S. Department of State — Visitor visa', 'https://travel.state.gov/content/travel/en/us-visas/tourism-visit/visitor.html'),
  dosSuspension: s('U.S. Department of State — Suspension of visa issuance (Proclamation 10998)', 'https://travel.state.gov/content/travel/en/News/visas-news/suspension-of-visa-issuance-to-foreign-nationals-to-protect-the-security-of-the-united-states.html'),
  dosPassportAbroad: s('U.S. Department of State — Passports', 'https://travel.state.gov/content/travel/en/passports.html'),
  usEmbassyDo: s('U.S. Embassy in the Dominican Republic', 'https://do.usembassy.gov/'),
  irccVisitor: s('IRCC — Visitor visa', 'https://www.canada.ca/en/immigration-refugees-citizenship/services/visit-canada/visitor-visa.html'),
  irccStudy: s('IRCC — Study permit', 'https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada/study-permit.html'),
  irccStudyDocs: s('IRCC — Study permit: get the right documents', 'https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada/study-permit/get-documents.html'),
  migracion: s('Dirección General de Migración (RD)', 'https://migracion.gob.do/'),
  migracionServicios: s('Dirección General de Migración — Servicios en línea', 'https://servicios.migracion.gob.do/'),
  mirex: s('Ministerio de Relaciones Exteriores (MIREX)', 'https://mirex.gob.do/'),
  hcchDr: s('HCCH — Autorité compétente pour l’apostille en République Dominicaine', 'https://www.hcch.net/fr/states/authorities/details3/?aid=810'),
  cancilleriaVisa: s('Cancillería de Colombia — ¿Necesito una visa?', 'https://cancilleria.gov.co/atencion-y-servicio-al-ciudadano/tramites-y-servicios/visa/necesito-un-visa'),
  sre: s('Secretaría de Relaciones Exteriores (México)', 'https://www.gob.mx/sre'),
  embamexHaiti: s('Embajada de México en Haití — Visas', 'https://embamex.sre.gob.mx/haiti/index.php/es/asuntos-consulares/visas/espanol'),
  pica: s('Passport, Immigration and Citizenship Agency (Jamaica)', 'https://www.pica.gov.jm/'),
  onapi: s('Oficina Nacional de la Propiedad Industrial (ONAPI)', 'https://www.onapi.gob.do/'),
  dgii: s('Dirección General de Impuestos Internos (DGII)', 'https://dgii.gov.do/'),
} as const;
