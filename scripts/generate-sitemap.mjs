import fs from 'fs';
import path from 'path';

const DOMAIN = 'https://devtendedatettoecampeggioit.vercel.app';

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
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes.map(route => `  <url>
    <loc>${DOMAIN}${route.path}</loc>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

  const publicDir = path.join(process.cwd(), 'public');
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemap);
  console.log('✅ Sitemap generated successfully!');
}

generateSitemap();
