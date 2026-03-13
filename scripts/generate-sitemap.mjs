import fs from 'fs';
import path from 'path';

// Use environment variable or default for local development
const DOMAIN = (process.env.VITE_SITE_URL || 'https://www.tendedatettoecampeggio.it').replace(/\/$/, '');
const CURRENT_DATE = new Date().toISOString().split('T')[0];

const routes = [
  { path: '/', priority: '1.0', changefreq: 'daily' },
  { path: '/chi-siamo', priority: '0.8', changefreq: 'monthly' },
  { path: '/guide', priority: '0.9', changefreq: 'daily' },
  { path: '/eventi', priority: '0.9', changefreq: 'weekly' },
  { path: '/raduno-nazionale-2026', priority: '0.9', changefreq: 'weekly' },
  { path: '/faq', priority: '0.7', changefreq: 'monthly' },
  { path: '/contatti', priority: '0.7', changefreq: 'monthly' },
  { path: '/privacy', priority: '0.3', changefreq: 'yearly' },
  { path: '/termini', priority: '0.3', changefreq: 'yearly' },
  { path: '/cookie', priority: '0.3', changefreq: 'yearly' },
];

// Guide slugs with their publication dates for accurate lastmod
const guideSlugsWithDates = [
  { slug: 'tende-da-tetto-confronto-morbide-guscio-rigido-ibride', date: '2026-01-31' },
  { slug: 'dieci-giorni-liberta-elba-tenda-tetto', date: '2026-01-31' },
  { slug: 'viaggio-nozze-tenda-tetto-namibia', date: '2026-01-29' },
  { slug: 'forte-leone-dachzelt-camp-italia', date: '2026-01-29' },
  { slug: 'spagna-del-nord-on-the-road', date: '2026-01-10' },
  { slug: 'tende-da-tetto-super-ciurma-tempo-lento', date: '2026-01-09' },
  { slug: 'dormire-tenda-freddo-52-gallerie-pasubio', date: '2026-01-08' },
  { slug: 'viaggiare-famiglia-minivan-camperboxes', date: '2026-01-07' },
  { slug: 'campeggio-libero-tenda-tetto-monte-grappa', date: '2026-02-12' },
  { slug: 'intervista-esperti-carcamp-menabo', date: '2026-02-14' },
];

// Add guide pages with per-article lastmod dates
guideSlugsWithDates.forEach(({ slug, date }) => {
  routes.push({
    path: `/guide/${slug}`,
    priority: '0.8',
    changefreq: 'weekly',
    lastmod: date,
  });
});

// Campsite slugs
const campsiteSlugs = [
  'camping-lake-garda',
  'camping-dolomiti',
  'camping-costa-smeralda',
  'camping-cinque-terre',
  'camping-lago-como',
  'camping-gran-paradiso',
  'camping-maremma',
  'camping-gargano',
  'camping-etna',
  'camping-alpe-siusi',
  'camping-amalfi',
  'camping-umbria-green',
];

// Add campsite listing and detail pages
routes.push({ path: '/campeggi', priority: '0.8', changefreq: 'weekly' });
campsiteSlugs.forEach(slug => {
  routes.push({ path: `/campeggi/${slug}`, priority: '0.7', changefreq: 'monthly' });
});

function generateSitemap() {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${routes.map(route => {
    // Add trailing slash for GitHub Pages compatibility (except root)
    const loc = route.path === '/' ? `${DOMAIN}/` : `${DOMAIN}${route.path}/`;
    return `  <url>
    <loc>${loc}</loc>
    <lastmod>${route.lastmod || CURRENT_DATE}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`;
  }).join('\n')}
</urlset>`;

  const publicDir = path.join(process.cwd(), 'public');
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemap);
  console.log(`✅ Sitemap.xml generated with ${routes.length} URLs`);
}

function generateRobotsTxt() {
  const robotsTxt = `# Tende da Tetto e Campeggio - Robots.txt
# Generated: ${CURRENT_DATE}

User-agent: *
Allow: /

# Disallow admin/internal paths (if any)
Disallow: /api/
Disallow: /coming-soon

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
