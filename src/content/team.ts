// FOS team, as supplied by the client (20 Oct 2026). Edit names, degrees and titles here.
// Headshots come from the "FOS Team" folder via scripts/prepare-images.mjs.
import type { ImageMetadata } from 'astro';
import type { Lang } from './types';
import fernand from '../assets/photos/team-fernand-theodore.jpg';
import lovely from '../assets/photos/team-lovely-aldian.jpg';
import roodelyne from '../assets/photos/team-roodelyne-beausejour.jpg';
import alex from '../assets/photos/team-alex-belony.jpg';
import edline from '../assets/photos/team-edline-alexandre.jpg';

export interface TeamMember {
  name: string;
  /** Degrees shown after the name, e.g. "B.A., M.A." */
  degrees?: string;
  /** Honorific shown before the name, e.g. "Ing." */
  prefix?: string;
  role: Record<Lang, string>;
  image: ImageMetadata;
}

export const leader: TeamMember & { credentials: Record<Lang, string[]> } = {
  name: 'Fernand Theodore',
  degrees: 'B.A., M.A.',
  role: { fr: 'Consultant et interprète en immigration', en: 'Consultant and Immigration Interpreter', es: 'Consultor e intérprete de inmigración' },
  image: fernand,
  credentials: {
    fr: ['Master en droits de l’homme', 'Formation en droit migratoire, consulaire et diplomatique', 'Traducteur et interprète'],
    en: ['Master’s degree in human rights', 'Training in immigration, consular and diplomatic law', 'Translator and interpreter'],
    es: ['Maestría en derechos humanos', 'Formación en derecho migratorio, consular y diplomático', 'Traductor e intérprete'],
  },
};

export const team: TeamMember[] = [
  {
    name: 'Lovely Aldian',
    degrees: 'B.A., M.A.',
    role: { fr: 'Responsable administrative', en: 'Administrative Manager', es: 'Gerente administrativa' },
    image: lovely,
  },
  {
    name: 'Roodelyne Beauséjour',
    degrees: 'B.A.',
    role: { fr: 'Interprète et traductrice', en: 'Interpreter and Translator', es: 'Intérprete y traductora' },
    image: roodelyne,
  },
  {
    name: 'Alex Belony',
    prefix: 'Ing.',
    role: { fr: 'Chargé de l’appui documentaire international', en: 'International Documentation Support Officer', es: 'Encargado de apoyo documental internacional' },
    image: alex,
  },
  {
    name: 'Edline Alexandre',
    degrees: 'B.A.',
    role: { fr: 'Assistante administrative', en: 'Administrative Assistant', es: 'Asistente administrativa' },
    image: edline,
  },
];

export const displayName = (m: TeamMember) => `${m.prefix ? m.prefix + ' ' : ''}${m.name}`;
