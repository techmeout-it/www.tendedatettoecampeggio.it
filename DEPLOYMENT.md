# Deployment Guide

This application is designed to be deployed on any platform without code changes. All URLs are dynamically generated based on the deployment environment.

## How It Works

- **Runtime URLs**: SEO meta tags, canonical URLs, and structured data use `window.location.origin` to automatically detect the current domain
- **Build-time URLs**: The sitemap.xml and robots.txt are generated during build using the `VITE_SITE_URL` environment variable

## Deploying to Different Platforms

### Vercel (Default)

```bash
# No environment variable needed - uses default
npm run build
```

The default URL is `https://devtendedatettoecampeggioit.vercel.app`

### Custom Domain

Set the `VITE_SITE_URL` environment variable before building:

```bash
VITE_SITE_URL=https://www.yourdomain.com npm run build
```

### Netlify

Add environment variable in Netlify dashboard:
- Key: `VITE_SITE_URL`
- Value: `https://yoursite.netlify.app`

### GitHub Pages

```bash
VITE_SITE_URL=https://yourusername.github.io/yourrepo npm run build
```

### Other Platforms

1. Set the `VITE_SITE_URL` environment variable to your deployment URL
2. Run `npm run build`
3. Deploy the `dist/` folder

## Local Development

For local development, the sitemap generator will use `http://localhost:5173` if no environment variable is set.

## What Gets Updated Automatically

✅ **At Runtime** (automatically adapts to any domain):
- Open Graph meta tags
- Twitter Card meta tags
- Canonical URLs
- Structured data (Schema.org)
- Breadcrumb navigation
- Organization schema

✅ **At Build Time** (uses VITE_SITE_URL):
- sitemap.xml
- robots.txt

## Example .env File

Create a `.env` file for your specific deployment:

```env
VITE_SITE_URL=https://www.tendedatettoecampeggio.it
```

See `.env.example` for more details.
