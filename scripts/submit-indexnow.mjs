import fs from 'fs';
import path from 'path';

/**
 * Submit URLs to IndexNow for faster indexing by search engines.
 * Supports Bing, Yandex, Seznam, and Naver via the IndexNow protocol.
 * 
 * Usage:
 *   node scripts/submit-indexnow.mjs                    # Submit all sitemap URLs
 *   node scripts/submit-indexnow.mjs https://example.com/page  # Submit specific URL(s)
 */

const DOMAIN = process.env.VITE_SITE_URL || 'https://www.tendedatettoecampeggio.it';
const API_KEY = '8245ee928a2e401891087be4ddbb8e2b';
const INDEXNOW_ENDPOINT = 'https://api.indexnow.org/IndexNow';

/**
 * Extract URLs from sitemap.xml
 */
function getUrlsFromSitemap() {
  const sitemapPath = path.join(process.cwd(), 'public', 'sitemap.xml');
  if (!fs.existsSync(sitemapPath)) {
    console.error('❌ sitemap.xml not found. Run "npm run generate:sitemap" first.');
    process.exit(1);
  }

  const sitemap = fs.readFileSync(sitemapPath, 'utf-8');
  const urls = [];
  const locRegex = /<loc>(.*?)<\/loc>/g;
  let match;
  while ((match = locRegex.exec(sitemap)) !== null) {
    urls.push(match[1]);
  }
  return urls;
}

/**
 * Submit URLs to IndexNow
 */
async function submitToIndexNow(urls) {
  if (urls.length === 0) {
    console.log('⚠️  No URLs to submit.');
    return;
  }

  console.log(`📤 Submitting ${urls.length} URL(s) to IndexNow...`);
  urls.forEach(url => console.log(`   ${url}`));

  const payload = {
    host: new URL(DOMAIN).hostname,
    key: API_KEY,
    keyLocation: `${DOMAIN}/${API_KEY}.txt`,
    urlList: urls,
  };

  try {
    const response = await fetch(INDEXNOW_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      body: JSON.stringify(payload),
    });

    if (response.ok || response.status === 202) {
      console.log(`✅ IndexNow submission successful! (HTTP ${response.status})`);
    } else {
      const body = await response.text();
      console.error(`❌ IndexNow submission failed (HTTP ${response.status}): ${body}`);
    }
  } catch (error) {
    console.error(`❌ IndexNow submission error: ${error.message}`);
  }
}

// Main
const args = process.argv.slice(2);
let urls;

if (args.length > 0) {
  // Submit specific URLs passed as arguments
  urls = args;
} else {
  // Submit all URLs from sitemap
  urls = getUrlsFromSitemap();
}

submitToIndexNow(urls);
