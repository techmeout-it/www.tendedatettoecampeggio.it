// RSS Feed Generator Utility
interface RSSItem {
  title: string;
  description: string;
  link: string;
  pubDate: Date;
  author?: string;
  category?: string;
  content?: string;
  image?: string;
}

interface RSSFeedOptions {
  title: string;
  description: string;
  link: string;
  language?: string;
  lastBuildDate?: Date;
  ttl?: number;
}

export function generateRSSFeed(options: RSSFeedOptions, items: RSSItem[]): string {
  const {
    title,
    description,
    link,
    language = 'it',
    lastBuildDate = new Date(),
    ttl = 3600, // 1 hour
  } = options;

  const escapeXml = (str: string): string => {
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&apos;');
  };

  const formatDate = (date: Date): string => {
    return date.toUTCString();
  };

  let rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:content="http://purl.org/rss/1.0/modules/content/" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escapeXml(title)}</title>
    <link>${escapeXml(link)}</link>
    <description>${escapeXml(description)}</description>
    <language>${language}</language>
    <lastBuildDate>${formatDate(lastBuildDate)}</lastBuildDate>
    <ttl>${ttl}</ttl>
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

    if (item.content) {
      rss += `
      <content:encoded><![CDATA[${item.content}]]></content:encoded>`;
    }

    if (item.image) {
      rss += `
      <enclosure url="${escapeXml(item.image)}" type="image/jpeg" />`;
    }

    rss += `
    </item>`;
  });

  rss += `
  </channel>
</rss>`;

  return rss;
}

export function getGuideRSSItems(baseUrl: string): RSSItem[] {
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
    },
  ];

  return guides.map((guide) => ({
    title: guide.title,
    description: guide.description,
    link: `${baseUrl}/guide/${guide.slug}`,
    pubDate: guide.pubDate,
    author: guide.author,
    category: guide.category,
  }));
}
