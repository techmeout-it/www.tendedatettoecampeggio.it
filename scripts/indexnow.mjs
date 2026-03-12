#!/usr/bin/env node
/**
 * Submit all sitemap URLs to IndexNow (Bing, Yandex, Naver, Seznam).
 * Run after deploy: node scripts/indexnow.mjs
 */
import { readFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const SITE_URL = process.env.VITE_SITE_URL || 'https://www.tendedatettoecampeggio.it';
const KEY = 'b10fad7002ae429db15e44c6da7a2def';

// Read sitemap and extract URLs
const sitemapPath = resolve(__dirname, '..', 'public', 'sitemap.xml');
const sitemap = readFileSync(sitemapPath, 'utf-8');
const urls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map(m => m[1]);

if (urls.length === 0) {
  console.error('❌ No URLs found in sitemap');
  process.exit(1);
}

console.log(`📡 Submitting ${urls.length} URLs to IndexNow...`);

const body = JSON.stringify({
  host: new URL(SITE_URL).hostname,
  key: KEY,
  keyLocation: `${SITE_URL}/${KEY}.txt`,
  urlList: urls,
});

const engines = [
  'https://api.indexnow.org/indexnow',
  'https://www.bing.com/indexnow',
  'https://yandex.com/indexnow',
];

for (const engine of engines) {
  try {
    const res = await fetch(engine, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      body,
    });
    console.log(`  ${engine} → ${res.status} ${res.statusText}`);
  } catch (err) {
    console.error(`  ${engine} → ERROR: ${err.message}`);
  }
}

console.log('✅ IndexNow submission complete');
