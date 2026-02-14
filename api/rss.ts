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
    slug: 'intervista-esperti-carcamp-menabo',
    title: 'Intervista con gli esperti di Carcamp e Menabò',
    description: 'Per tutta la community l\'intervista fatta con gli esperti di settore Carcamp e Menabò per la conoscenza dei dettagli tecnici delle barre portatutto.',
    author: 'Lo Staff di Tende da Tetto',
    pubDate: new Date('2026-02-14'),
    category: 'Attrezzatura',
  },
  {
    slug: 'campeggio-libero-tenda-tetto-monte-grappa',
    title: 'Campeggio libero in tenda da tetto: due giorni di solitudine sul Monte Grappa',
    description: 'Due giorni in solitaria sul Monte Grappa con la Jeep Renegade 4x4 e la tenda da tetto Yakima: silenzio, natura e campeggio libero responsabile.',
    author: 'Igor Ferrazzi',
    pubDate: new Date('2026-02-12'),
    category: 'Destinazioni',
  },
  {
    slug: 'tende-da-tetto-confronto-morbide-guscio-rigido-ibride',
    title: 'Tende da tetto a confronto: morbide vs a guscio rigido vs ibride',
    description: 'Guida completa alle tre famiglie di tende da tetto: morbide a libro, guscio rigido a pantografo e ibride. Vantaggi, svantaggi e quale scegliere per il tuo stile di viaggio.',
    author: 'Lo Staff di Tende da Tetto',
    pubDate: new Date('2026-01-31'),
    category: 'Attrezzatura',
  },
  {
    slug: 'dieci-giorni-liberta-elba-tenda-tetto',
    title: 'Dieci giorni di libertà: due donne, una tenda da tetto e l\'Italia che profuma di sale',
    description: 'Un viaggio di 10 giorni dall\'auto camperizzata con tenda da tetto: da Genova all\'Isola d\'Elba, tra spiagge, biciclette e la Toscana che respira.',
    author: 'Nat e Vale',
    pubDate: new Date('2026-01-31'),
    category: 'Destinazioni',
  },
  {
    slug: 'viaggio-nozze-tenda-tetto-namibia',
    title: 'Viaggio di nozze in tenda da tetto in Namibia',
    description: 'Dove forse tutto è cominciato: la storia di Chiara e Piero, un budget limitato, e un viaggio indimenticabile di 17 giorni e 5.000 km attraverso deserti, oceani e savane.',
    author: 'Piero e Chiara',
    pubDate: new Date('2026-01-29'),
    category: 'Destinazioni',
  },
  {
    slug: 'forte-leone-dachzelt-camp-italia',
    title: 'Forte Leone: da scoperta casuale a DACHZELT CAMP Italia',
    description: 'A 1.500 metri di quota, immerso nelle montagne venete, il Forte Leone è diventato teatro di un evento epico: il gemellaggio tra la community italiana e quella tedesca dei Dachzeltnomaden.',
    author: 'Lo Staff di Tende da Tetto',
    pubDate: new Date('2026-01-29'),
    category: 'Eventi',
  },
  {
    slug: 'spagna-del-nord-on-the-road',
    title: 'Spagna del Nord on the road: 19 giorni di libertà e natura!',
    description: 'Un viaggio indimenticabile attraverso Paesi Baschi, Cantabria, Asturie e Galizia con la tenda da tetto. 19 giorni di strade, oceano e montagne.',
    author: 'Sara Sarti',
    pubDate: new Date('2026-01-10'),
    category: 'Destinazioni',
  },
  {
    slug: 'tende-da-tetto-super-ciurma-tempo-lento',
    title: 'Tende da Tetto, La Super Ciurma e L\'Arte del Tempo Lento',
    description: 'Viaggiare con bambini e cani, camperizzazione fai-da-te e l\'arte di recuperare il tempo lento: la storia di una famiglia nomade accessibile.',
    author: 'Giulia e Brenno',
    pubDate: new Date('2026-01-09'),
    category: 'Tips',
  },
  {
    slug: 'dormire-tenda-freddo-52-gallerie-pasubio',
    title: 'Dormire in tenda da tetto anche col freddo? Sì, si può!',
    description: 'La nostra esperienza alle 52 Gallerie del Pasubio: come affrontare il freddo autunnale in tenda da tetto con l\'attrezzatura giusta.',
    author: 'Sara Sarti',
    pubDate: new Date('2026-01-08'),
    category: 'Tips',
  },
  {
    slug: 'viaggiare-famiglia-minivan-camperboxes',
    title: 'Viaggiare in famiglia con il nostro minivan: esperienze di libertà e scoperta',
    description: 'La nostra vita in viaggio con un Ford Tourneo allestito fai-da-te: famiglia, cane e avventure tra Val Trebbia, Liguria, Elba e Abruzzo.',
    author: 'Arianna e David di Camperboxes',
    pubDate: new Date('2026-01-07'),
    category: 'Destinazioni',
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
