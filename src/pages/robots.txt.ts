import type { APIRoute } from 'astro';
import { isLaunchBuild, siteOrigin } from '../config/env';

// Draft/preview builds block all crawling; the launch build (INDEXING=true) allows it and lists the sitemap.
export const GET: APIRoute = () =>
  new Response(
    isLaunchBuild ? `User-agent: *\nAllow: /\n\nSitemap: ${siteOrigin}/sitemap-index.xml\n` : 'User-agent: *\nDisallow: /\n',
    { headers: { 'Content-Type': 'text/plain; charset=utf-8' } }
  );
