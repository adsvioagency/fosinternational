// Static audit of the production build in dist/. Usage: npm run build && node tests/audit-build.mjs
import { readFileSync, readdirSync, statSync, existsSync } from 'node:fs';
import path from 'node:path';

const dist = path.resolve('dist');
const files = [];
const walk = (dir) => {
  for (const f of readdirSync(dir)) {
    const p = path.join(dir, f);
    statSync(p).isDirectory() ? walk(p) : files.push(p);
  }
};
walk(dist);

const rel = (p) => '/' + path.relative(dist, p).split(path.sep).join('/');
const htmlFiles = files.filter((f) => f.endsWith('.html'));
const LANGS = ['fr', 'en', 'es'];
const pages = htmlFiles.filter((f) => /\/(fr|en|es)\//.test(rel(f)));
const problems = [];
const warn = (m) => problems.push(m);

const origin = (() => {
  const html = readFileSync(path.join(dist, 'fr/index.html'), 'utf8');
  return new URL(html.match(/<link rel="canonical" href="([^"]+)"/)[1]).origin;
})();

const get = (html, re) => html.match(re)?.[1];
const pageInfo = new Map();
for (const f of pages) {
  const html = readFileSync(f, 'utf8');
  const urlPath = rel(f).replace(/index\.html$/, '');
  const lang = get(html, /<html lang="([a-z]+)"/);
  const canonical = get(html, /<link rel="canonical" href="([^"]+)"/);
  const alts = Object.fromEntries([...html.matchAll(/<link rel="alternate" hreflang="([^"]+)" href="([^"]+)"/g)].map((m) => [m[1], m[2]]));
  pageInfo.set(urlPath, { html, lang, canonical, alts });

  if (!urlPath.startsWith(`/${lang}/`)) warn(`${urlPath}: lang="${lang}" does not match path`);
  if (canonical !== origin + urlPath) warn(`${urlPath}: canonical ${canonical} is not self-referencing`);
  for (const k of [...LANGS, 'x-default']) if (!alts[k]) warn(`${urlPath}: missing hreflang ${k}`);
  if (!html.includes('<meta name="google" content="notranslate"')) warn(`${urlPath}: missing notranslate meta`);
  if (alts[lang] !== canonical) warn(`${urlPath}: hreflang self-reference mismatch`);
  const h1s = html.match(/<h1[\s>]/g)?.length ?? 0;
  if (h1s !== 1) warn(`${urlPath}: ${h1s} <h1> elements`);
  if (!/<title>[^<]{10,}<\/title>/.test(html)) warn(`${urlPath}: weak <title>`);
  if (!/<meta name="description" content="[^"]{50,}"/.test(html)) warn(`${urlPath}: weak meta description`);

  for (const m of html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) {
    try {
      const data = JSON.parse(m[1]);
      const s = JSON.stringify(data);
      if (/AggregateRating|"review"/i.test(s)) warn(`${urlPath}: rating/review markup present`);
      const org = data['@graph'].find((n) => n['@type'] === 'ProfessionalService');
      if (org.telephone !== '+18493998859') warn(`${urlPath}: schema telephone ${org.telephone}`);
      if (org.geo) warn(`${urlPath}: unverified geo coordinates`);
    } catch (e) {
      warn(`${urlPath}: JSON-LD does not parse (${e.message})`);
    }
  }

  // Internal links and assets must resolve inside dist/.
  for (const m of html.matchAll(/(?:href|src)="(\/[^"#?]*)[^"]*"/g)) {
    const target = m[1];
    if (target.startsWith('//')) continue;
    const candidates = [path.join(dist, target), path.join(dist, target, 'index.html')];
    if (!candidates.some((c) => existsSync(c) && statSync(c).isFile())) warn(`${urlPath}: broken internal link ${target}`);
  }
  for (const m of html.matchAll(/srcset="([^"]+)"/g)) {
    for (const part of m[1].split(',')) {
      const u = part.trim().split(' ')[0];
      if (u.startsWith('/') && !existsSync(path.join(dist, u))) warn(`${urlPath}: missing srcset image ${u}`);
    }
  }
}

// Reciprocal hreflang: the alternate page must point back.
for (const [p, info] of pageInfo) {
  for (const l of LANGS) {
    const altPath = info.alts[l]?.replace(origin, '');
    const other = pageInfo.get(altPath);
    if (!other) warn(`${p}: hreflang ${l} target ${altPath} not built`);
    else if (other.alts[info.lang] !== info.canonical) warn(`${p}: hreflang not reciprocal with ${altPath}`);
  }
}

// Content rules from the brief.
const allText = pages.map((f) => readFileSync(f, 'utf8')).join('\n');
const forbidden = [
  [/Kentucky|Bonao/i, 'obsolete office location'],
  [/564-4156|8495644156/, 'historical Canada-only number'],
  // Assembled from parts so the owner's payment number is not stored here as one searchable string.
  [new RegExp(['270', '948', '1130'].join('-?') + '|Zelle', 'i'), 'payment contact on public pages'],
  [/09:00|9 h\s*[–-]\s*16 h|9am\s*[–-]\s*4pm/i, 'unconfirmed messaging hours'],
  [/example\.com/i, 'placeholder domain'],
  [/24\s*\/\s*7|en ligne maintenant|online now/i, 'availability claim'],
  [/100\s*%\s*(de )?(succès|success|réussite)/i, 'success-rate claim'],
  [/\bTBD\b|coming soon|bientôt disponible|lorem/i, 'placeholder text'],
  [/visa (a été )?délivré grâce|visa issued thanks/i, 'outcome promise'],
];
for (const [re, label] of forbidden) if (re.test(allText)) warn(`Forbidden content found: ${label} (${re})`);
if (!/\+1 \(849\) 399-8859/.test(allText)) warn('Main phone missing');
if (!/Calle Penetracion 6, Buena Vista 1ra, Villa Mella/.test(allText)) warn('Address missing');

// Each language version must not show interface copy from another one (visible text only).
const visibleText = (html) =>
  (html.split('<body')[1] ?? '')
    .replace(/<script[\s\S]*?<\/script>|<style[\s\S]*?<\/style>/g, ' ')
    .replace(/<[^>]+>/g, ' ');
const leaks = {
  fr: ['Request a consultation', 'Solicitar una consulta', 'Watch on TikTok', 'Ver en TikTok', 'Frequently asked questions', 'Preguntas frecuentes'],
  en: ['Demander une consultation', 'Solicitar una consulta', 'Voir sur TikTok', 'Ver en TikTok', 'Questions fréquentes', 'Preguntas frecuentes'],
  es: ['Demander une consultation', 'Request a consultation', 'Voir sur TikTok', 'Watch on TikTok', 'Questions fréquentes', 'Frequently asked questions', 'Comment nous contacter', 'How to contact us'],
};
for (const [p, info] of pageInfo) {
  const text = visibleText(info.html);
  for (const phrase of leaks[info.lang] ?? []) if (text.includes(phrase)) warn(`${p}: shows "${phrase}" from another language`);
}

// Private/original assets must not ship.
for (const f of files) {
  const r = rel(f);
  if (/Screenshot|proof|testimony|approved|happy client|official logo |\.\.\/|master-prompt|PENDING|SOURCE-LOG/i.test(r)) warn(`Private or original file in build: ${r}`);
}

// Indexing controls.
const draft = !/User-agent: \*\nAllow/.test(readFileSync(path.join(dist, 'robots.txt'), 'utf8'));
const noindexCount = pages.filter((f) => readFileSync(f, 'utf8').includes('name="robots" content="noindex')).length;
console.log(`Build mode: ${draft ? 'draft (noindex)' : 'launch (indexable)'}; origin ${origin}`);
if (draft && noindexCount !== pages.length) warn(`Draft build but only ${noindexCount}/${pages.length} pages are noindex`);
if (!draft && noindexCount > 0) warn(`Launch build still has ${noindexCount} noindex pages`);

// Rough content length per service/resource page (main column text).
const lengths = [];
for (const [p, info] of pageInfo) {
  if (!/\/(services|servicios|ressources|resources|recursos)\/[^/]+\/$/.test(p)) continue;
  const main = info.html.split('<main')[1]?.split('</main>')[0] ?? '';
  const text = main.replace(/<script[\s\S]*?<\/script>|<style[\s\S]*?<\/style>/g, '').replace(/<[^>]+>/g, ' ');
  lengths.push([p, text.split(/\s+/).filter(Boolean).length]);
}
lengths.sort((a, b) => a[1] - b[1]);
console.log(`Pages audited: ${pages.length}. Word counts (whole <main>, incl. shared blocks): min ${lengths[0][1]} (${lengths[0][0]}), max ${lengths.at(-1)[1]}`);

if (problems.length) {
  console.log(`\n${problems.length} problem(s):`);
  for (const p of [...new Set(problems)]) console.log(' - ' + p);
  process.exit(1);
}
console.log('All build checks passed.');
