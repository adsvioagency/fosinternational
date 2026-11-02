import type { Lang, Service, ServiceGroup, ServiceSource } from '../types';
import { usServices } from './us';
import { documentServices } from './documents';
import { dominicanServices } from './dominican';
import { travelServices } from './travel';
import { servicesEs } from '../es/services';

/** Joins each service with its Spanish copy; a missing translation fails the build. */
const withSpanish = (s: ServiceSource): Service => {
  const es = servicesEs[s.id];
  if (!es) throw new Error(`Missing Spanish copy for service "${s.id}" in src/content/es/services.ts`);
  return { ...s, es };
};

export const services: Service[] = [...usServices, ...documentServices, ...dominicanServices, ...travelServices].map(withSpanish);

export const serviceById = new Map(services.map((s) => [s.id, s]));

export const groupOrder: ServiceGroup[] = ['us', 'documents', 'dominican', 'travel'];

export const servicesByGroup = (group: ServiceGroup) => services.filter((s) => s.group === group);

export const homeServices = () =>
  services.filter((s) => s.homePriority !== undefined).sort((a, b) => (a.homePriority ?? 99) - (b.homePriority ?? 99));

/** Options for the inquiry select: grouped, localized, plus the "not sure" choice handled by the form. */
export const serviceOptions = (lang: Lang) =>
  groupOrder.map((group) => ({
    group,
    options: servicesByGroup(group).map((s) => ({ id: s.id, label: s[lang].label })),
  }));
