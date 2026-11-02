// Publication gate: items awaiting the owner's approval appear in the private review draft
// but are excluded automatically from a launch build (INDEXING=true).
import { isLaunchBuild } from '../config/env';
import type { Permission } from '../content/types';

export const publishable = <T extends { permission: Permission }>(items: T[]): T[] =>
  isLaunchBuild ? items.filter((i) => i.permission === 'approved') : items;
