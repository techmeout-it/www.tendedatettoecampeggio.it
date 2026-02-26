/**
 * Generate a static RSS feed from guidesData at build time.
 * Outputs to dist/api/rss.xml so it works on both Vercel and GitHub Pages.
 */
import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const rootDir = resolve(__dirname, '..');

// Read guides data from the source
const guidesPath = resolve(rootDir, 'src/data/guidesData.ts');
const guidesContent = readFileSync(guidesPath, 'utf-8');

// Extract guide objects using regex (simple parser for the TS file)
const guideRegex = /\{\s*slug:\s*"([^"]+)",\s*title:\s*"([^"]+)",\s*excerpt:\s*"([^"]+)",\s*author:\s*"([^"]+)",[\s\S]*?category:\s*"([^"]+)",\s*date:\s*"([^"]+)"/g;

const guides = [];
let match;
while ((match = guideRegex.exec(guidesContent)) !== null) {
  guides.push({
    slug: match[1],
    title: match[2],
    description: match[3],
    author: match[4],
    category: match[5],
    date: match[6],
  });
}

const SITE_URL = 'https://www.tendedatettoecampeggio.it';

function escapeXml(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

// Sort by date descending
guides.sort((a, b) => new Date(b.date) - new Date(a.date));

const items = guides.map(g => `    <item>
      <title>${escapeXml(g.title)}</title>
      <link>${SITE_URL}/guide/${g.slug}</link>
      <description>${escapeXml(g.description)}</description>
      <pubDate>${new Date(g.date).toUTCString()}</pubDate>
      <author>${escapeXml(g.author)}</author>
      <category>${escapeXml(g.category)}</category>
      <guid isPermaLink="true">${SITE_URL}/guide/${g.slug}</guid>
    </item>`).join('\n');

const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Tende da Tetto e Campeggio - Guide e Articoli</title>
    <link>${SITE_URL}</link>
    <description>Le migliori guide, articoli e risorse per il campeggio con tenda da tetto</description>
    <language>it</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${SITE_URL}/api/rss.xml" rel="self" type="application/rss+xml" />
${items}
  </channel>
</rss>`;

// Write to dist/api/rss.xml
const outDir = resolve(rootDir, 'dist/api');
if (!existsSync(outDir)) {
  mkdirSync(outDir, { recursive: true });
}
writeFileSync(resolve(outDir, 'rss.xml'), rss, 'utf-8');
console.log(`✅ Static RSS feed generated with ${guides.length} items → dist/api/rss.xml`);
