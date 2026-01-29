import fs from 'fs';
import path from 'path';

// Use environment variable or default for local development
const DOMAIN = process.env.VITE_SITE_URL || 'http://localhost:5173';
const CURRENT_DATE = new Date().toISOString().split('T')[0];

const routes = [
  { path: '/', priority: '1.0', changefreq: 'daily' },
  { path: '/chi-siamo', priority: '0.8', changefreq: 'monthly' },
  { path: '/guide', priority: '0.9', changefreq: 'daily' },
  { path: '/campeggi', priority: '0.9', changefreq: 'weekly' },
  { path: '/contatti', priority: '0.7', changefreq: 'monthly' },
  { path: '/privacy', priority: '0.3', changefreq: 'yearly' },
  { path: '/termini', priority: '0.3', changefreq: 'yearly' },
  { path: '/cookie', priority: '0.3', changefreq: 'yearly' },
];

// Guide slugs - add new guides here
const guideSlugs = [
  'viaggio-nozze-tenda-tetto-namibia',
  'forte-leone-dachzelt-camp-italia',
  'spagna-del-nord-on-the-road',
  'tende-da-tetto-super-ciurma-tempo-lento',
  'dormire-tenda-freddo-52-gallerie-pasubio',
  'viaggiare-famiglia-minivan-camperboxes',
  'guida-completa-tende-da-tetto',
  '10-campeggi-piu-belli-italia',
  'checklist-campeggio-perfetto',
  'manutenzione-tenda-tetto',
  'viaggiare-con-bambini-tenda-tetto',
  'sardegna-tenda-tetto-itinerario',
  'dolomiti-tenda-tetto-itinerario',
];

// Add guide pages
guideSlugs.forEach(slug => {
  routes.push({
    path: `/guide/${slug}`,
    priority: '0.8',
    changefreq: 'weekly'
  });
});

function generateSitemap() {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml"
        xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
        xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
${routes.map(route => `  <url>
    <loc>${DOMAIN}${route.path}</loc>
    <lastmod>${CURRENT_DATE}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

  const publicDir = path.join(process.cwd(), 'public');
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemap);
  console.log('✅ Sitemap.xml generated successfully!');
}

function generateRobotsTxt() {
  const robotsTxt = `# Tende da Tetto e Campeggio - Robots.txt
# Generated: ${CURRENT_DATE}

User-agent: *
Allow: /

# Disallow admin/internal paths (if any)
Disallow: /api/
Disallow: /*.json$

# Sitemaps
Sitemap: ${DOMAIN}/sitemap.xml

# Crawl-delay for polite crawling
Crawl-delay: 0

# Specific bots
User-agent: Googlebot
Allow: /

User-agent: Bingbot
Allow: /

User-agent: Slurp
Allow: /
`;

  const publicDir = path.join(process.cwd(), 'public');
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  fs.writeFileSync(path.join(publicDir, 'robots.txt'), robotsTxt);
  console.log('✅ Robots.txt generated successfully!');
}

// Run both generators
generateSitemap();
generateRobotsTxt();
