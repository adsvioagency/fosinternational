// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { alternatesByPath } from './src/i18n/routes.ts';

// SITE_URL is the canonical production origin (scheme + host, no trailing slash).
// INDEXING=true is the explicit launch switch. Without it every page is noindex and robots.txt disallows crawling.
const indexing = process.env.INDEXING === 'true';
const siteUrl = process.env.SITE_URL;

if (indexing && !siteUrl) {
  throw new Error(
    'INDEXING=true requires SITE_URL (the real production origin). Refusing to build an indexable site without a canonical domain.'
  );
}

export default defineConfig({
  site: siteUrl || 'http://localhost:4321',
  trailingSlash: 'always',
  compressHTML: true,
  devToolbar: { enabled: false },
  build: { format: 'directory' },
  integrations: [
    sitemap({
      filter: (page) => !/\/404\/?$/.test(page),
      // Localized slugs differ per language, so alternates come from the route table.
      // The root is included: it is the homepage cluster’s x-default.
      serialize(item) {
        const url = new URL(item.url);
        const alt = alternatesByPath().get(url.pathname);
        if (alt) {
          item.links = [
            { lang: 'fr', url: url.origin + alt.fr },
            { lang: 'en', url: url.origin + alt.en },
            { lang: 'es', url: url.origin + alt.es },
            { lang: 'x-default', url: url.origin + alt.xDefault },
          ];
        }
        return item;
      },
    }),
  ],
});
