// Destination flags (rasterised from flag-icons by scripts/prepare-flags.mjs).
import type { ImageMetadata } from 'astro';
import type { Destination } from '../content/types';
import us from '../assets/flags/us.png';
import ca from '../assets/flags/ca.png';
import mx from '../assets/flags/mx.png';
import co from '../assets/flags/co.png';
import jm from '../assets/flags/jm.png';
import dr from '../assets/flags/do.png';

export type Country = Exclude<Destination, 'any'>;

export const flags: Record<Country, ImageMetadata> = { us, ca, mx, co, jm, do: dr };

/** Order used wherever the main destinations are listed (the Dominican Republic, home base, last). */
export const countryOrder: Country[] = ['us', 'ca', 'mx', 'co', 'jm', 'do'];

export const isCountry = (d: Destination): d is Country => d !== 'any';
