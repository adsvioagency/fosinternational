// Build-time environment (server-side only — never import from client scripts).
export const isLaunchBuild = process.env.INDEXING === 'true';
export const siteOrigin = (process.env.SITE_URL || 'http://localhost:4321').replace(/\/$/, '');
