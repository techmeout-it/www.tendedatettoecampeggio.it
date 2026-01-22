import { VercelRequest, VercelResponse } from '@vercel/node';

// Inline RSS utilities to avoid import issues in Vercel
interface RSSItem {
  title: string;
  description: string;
  link: string;
  pubDate: Date;
  author?: string;
  category?: string;
}

function escapeXml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

function formatDate(date: Date): string {
  return date.toUTCString();
}

function generateRSSFeed(title: string, description: string, link: string, items: RSSItem[]): string {
  let rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:content="http://purl.org/rss/1.0/modules/content/" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escapeXml(title)}</title>
    <link>${escapeXml(link)}</link>
    <description>${escapeXml(description)}</description>
    <language>it</language>
    <lastBuildDate>${formatDate(new Date())}</lastBuildDate>
    <ttl>3600</ttl>
    <atom:link href="${escapeXml(`${link}/api/rss.xml`)}" rel="self" type="application/rss+xml" />`;

  items.forEach((item) => {
    rss += `
    <item>
      <title>${escapeXml(item.title)}</title>
      <link>${escapeXml(item.link)}</link>
      <description>${escapeXml(item.description)}</description>
      <pubDate>${formatDate(item.pubDate)}</pubDate>`;

    if (item.author) {
      rss += `
      <author>${escapeXml(item.author)}</author>`;
    }

    if (item.category) {
      rss += `
      <category>${escapeXml(item.category)}</category>`;
    }

    rss += `
    </item>`;
  });

  rss += `
  </channel>
</rss>`;

  return rss;
}

const guides = [
  {
    slug: 'guida-isolamento-tenda-da-tetto',
    title: 'Come Isolare una Tenda da Tetto in Inverno',
    description: 'Guida completa su come isolate efficacemente la tenda da tetto per viaggi invernali sicuri e confortevoli.',
    author: 'Marco Rossi',
    pubDate: new Date('2024-01-15'),
    category: 'Guide Tecniche',
  },
  {
    slug: 'guida-allestimento-campeggio',
    title: 'Guida Completa all\'Allestimento del Campeggio',
    description: 'Scopri come allestire il tuo campeggio perfetto: dalla preparazione del sito alla disposizione dell\'attrezzatura.',
    author: 'Sara Bianchi',
    pubDate: new Date('2024-01-10'),
    category: 'Guide Tecniche',
  },
  {
    slug: 'guida-manutenzione-tenda-tetto',
    title: 'Manutenzione e Pulizia della Tenda da Tetto',
    description: 'Tutto quello che devi sapere per mantenere la tua tenda da tetto in perfette condizioni nel tempo.',
    author: 'Luca Verdi',
    pubDate: new Date('2024-01-05'),
    category: 'Guide Tecniche',
  },
  {
    slug: 'dormire-freddo',
    title: 'Dormire in Tenda da Tetto anche col Freddo? Sì, si può!',
    description: 'Come preparare la tua tenda da tetto per dormire al caldo anche in inverno con i giusti accorgimenti.',
    author: 'Marco Rossi',
    pubDate: new Date('2023-12-20'),
    category: 'Guide Tecniche',
  }
];

export default function handler(req: VercelRequest, res: VercelResponse) {
  try {
    // Get base URL from environment or request
    const baseUrl = process.env.VITE_SITE_URL || 
                    (req.headers['x-forwarded-proto'] && req.headers['x-forwarded-host'] 
                      ? `${req.headers['x-forwarded-proto']}://${req.headers['x-forwarded-host']}`
                      : 'https://dev.tendedatettoecampeggio.it');

    // Build RSS items from guides
    const items: RSSItem[] = guides.map((guide) => ({
      title: guide.title,
      description: guide.description,
      link: `${baseUrl}/guide/${guide.slug}`,
      pubDate: guide.pubDate,
      author: guide.author,
      category: guide.category,
    }));

    // Generate RSS feed
    const rss = generateRSSFeed(
      'Tende da Tetto e Campeggio - Guide e Articoli',
      'Le migliori guide, articoli e risorse per il campeggio con tenda da tetto',
      baseUrl,
      items
    );

    // Set proper content type and headers
    res.setHeader('Content-Type', 'application/rss+xml; charset=utf-8');
    res.setHeader('Cache-Control', 'public, max-age=3600');
    res.setHeader('Content-Disposition', 'inline; filename="feed.xml"');

    res.status(200).send(rss);
  } catch (error) {
    console.error('RSS Feed Error:', error);
    res.status(500).json({ error: 'Failed to generate RSS feed' });
  }
}
  }
}
