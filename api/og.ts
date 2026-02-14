import { VercelRequest, VercelResponse } from '@vercel/node';

// Metadati degli articoli per le anteprime social
const guidesMetadata: Record<string, { title: string; description: string; image: string; author: string; category: string }> = {
  "tende-da-tetto-confronto-morbide-guscio-rigido-ibride": {
    title: "Tende da tetto a confronto: morbide vs a guscio rigido vs ibride",
    description: "Guida completa alle tre famiglie di tende da tetto: morbide a libro, guscio rigido a pantografo e ibride. Vantaggi, svantaggi e quale scegliere per il tuo stile di viaggio.",
    image: "/img_articles/gusci_comparazione/tende_gusci.png",
    author: "Lo Staff di Tende da Tetto",
    category: "Attrezzatura"
  },
  "dieci-giorni-liberta-elba-tenda-tetto": {
    title: "Dieci giorni di libertà: due donne, una tenda da tetto e l'Italia che profuma di sale",
    description: "Un viaggio di 10 giorni dall'auto camperizzata con tenda da tetto: da Genova all'Isola d'Elba, tra spiagge, biciclette e la Toscana che respira.",
    image: "/img_articles/nat_vale_elba/01_elba.jpg",
    author: "Nat e Vale",
    category: "Destinazioni"
  },
  "viaggio-nozze-tenda-tetto-namibia": {
    title: "Viaggio di nozze in tenda da tetto in Namibia",
    description: "Dove forse tutto è cominciato: la storia di Chiara e Piero, un budget limitato, e un viaggio indimenticabile di 17 giorni e 5.000 km attraverso deserti, oceani e savane.",
    image: "/img_articles/namibia_viaggio_nozze/DSCN1226.JPG",
    author: "Piero e Chiara",
    category: "Destinazioni"
  },
  "forte-leone-dachzelt-camp-italia": {
    title: "Forte Leone: da scoperta casuale a DACHZELT CAMP Italia",
    description: "A 1.500 metri di quota, immerso nelle montagne venete, il Forte Leone è diventato teatro di un evento epico: il gemellaggio tra la community italiana e quella tedesca dei Dachzeltnomaden.",
    image: "/img_articles/forte_leone_raduno_articolo/20250704_DACHZELT-CAMP-Italia-2025_Patrick-Becker_Gruppenfoto_Drohne_.jpg",
    author: "Lo Staff di Tende da Tetto",
    category: "Eventi"
  },
  "spagna-del-nord-on-the-road": {
    title: "Spagna del Nord on the road: 19 giorni di libertà e natura!",
    description: "Un viaggio indimenticabile attraverso Paesi Baschi, Cantabria, Asturie e Galizia con la tenda da tetto. 19 giorni di strade, oceano e montagne.",
    image: "/img_articles/spagna_del_nord_sara_guido/IMG_20250817_152218.jpg",
    author: "Sara Sarti",
    category: "Destinazioni"
  },
  "tende-da-tetto-super-ciurma-tempo-lento": {
    title: "Tende da Tetto, La Super Ciurma e L'Arte del Tempo Lento",
    description: "Viaggiare con bambini e cani, camperizzazione fai-da-te e l'arte di recuperare il tempo lento: la storia di una famiglia nomade accessibile.",
    image: "/img_articles/arte_tempo_lento_giulia_brenno/70bcbd07-91d1-4d9a-ab43-d25822677043.jpg",
    author: "Giulia e Brenno",
    category: "Tips"
  },
  "dormire-tenda-freddo-52-gallerie-pasubio": {
    title: "Dormire in tenda da tetto anche col freddo? Sì, si può!",
    description: "La nostra esperienza alle 52 Gallerie del Pasubio: come affrontare il freddo autunnale in tenda da tetto con l'attrezzatura giusta.",
    image: "/img_articles/dormire_freddo/WhatsApp%20Image%202026-01-10%20at%2017.06.43%20%282%29.jpeg",
    author: "Sara Sarti",
    category: "Tips"
  },
  "viaggiare-famiglia-minivan-camperboxes": {
    title: "Viaggiare in famiglia con il nostro minivan: esperienze di libertà e scoperta",
    description: "La nostra vita in viaggio con un Ford Tourneo allestito fai-da-te: famiglia, cane e avventure tra Val Trebbia, Liguria, Elba e Abruzzo.",
    image: "/img_articles/i_nostri_viaggi_in_camper/7-van-camper-boxes.jpg",
    author: "Arianna e David di Camperboxes",
    category: "Destinazioni"
  },
  "campeggio-libero-tenda-tetto-monte-grappa": {
    title: "Campeggio libero in tenda da tetto: due giorni di solitudine sul Monte Grappa",
    description: "Due giorni in solitaria sul Monte Grappa con la Jeep Renegade 4x4 e la tenda da tetto Yakima: silenzio, natura e campeggio libero responsabile.",
    image: "/img_articles/campeggio__libero_Monte_grappa/Immagine1.jpg",
    author: "Igor Ferrazzi",
    category: "Destinazioni"
  },
  "intervista-esperti-carcamp-menabo": {
    title: "Intervista con gli esperti di Carcamp e Menabò",
    description: "Per tutta la community l'intervista fatta con gli esperti di settore Carcamp e Menabò per la conoscenza dei dettagli tecnici delle barre portatutto.",
    image: "/img_articles/barre_menabo/carcamp_menabo_cover.png",
    author: "Lo Staff di Tende da Tetto",
    category: "Attrezzatura"
  }
};

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;');
}

export default function handler(req: VercelRequest, res: VercelResponse) {
  const slug = req.query.slug as string;
  const baseUrl = process.env.VITE_SITE_URL || 'https://www.tendedatettoecampeggio.it';

  const guide = slug ? guidesMetadata[slug] : null;

  if (!guide) {
    // Fallback: meta tag generici del sito
    const html = `<!DOCTYPE html>
<html lang="it">
<head>
  <meta charset="UTF-8" />
  <meta property="og:type" content="website" />
  <meta property="og:title" content="Tende da Tetto e Campeggio - Community Italiana" />
  <meta property="og:description" content="La community italiana n°1 per tende da tetto e campeggio! 40.000+ membri, guide pratiche, mappe campeggi e tutto per le tue avventure outdoor." />
  <meta property="og:image" content="${baseUrl}/og-image.jpg" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta property="og:url" content="${baseUrl}" />
  <meta property="og:site_name" content="Tende da Tetto e Campeggio" />
  <meta property="og:locale" content="it_IT" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Tende da Tetto e Campeggio - Community Italiana" />
  <meta name="twitter:description" content="La community italiana n°1 per tende da tetto e campeggio!" />
  <meta name="twitter:image" content="${baseUrl}/og-image.jpg" />
  <meta http-equiv="refresh" content="0;url=${baseUrl}" />
</head>
<body></body>
</html>`;
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.setHeader('Cache-Control', 'public, max-age=3600');
    return res.status(200).send(html);
  }

  const fullTitle = escapeHtml(`${guide.title} | Tende da Tetto e Campeggio`);
  const description = escapeHtml(guide.description);
  const imageUrl = guide.image.startsWith('http') ? guide.image : `${baseUrl}${guide.image}`;
  const articleUrl = `${baseUrl}/guide/${slug}`;

  const html = `<!DOCTYPE html>
<html lang="it">
<head>
  <meta charset="UTF-8" />
  <title>${fullTitle}</title>
  <meta name="description" content="${description}" />
  <meta property="og:type" content="article" />
  <meta property="og:title" content="${fullTitle}" />
  <meta property="og:description" content="${description}" />
  <meta property="og:image" content="${escapeHtml(imageUrl)}" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta property="og:url" content="${escapeHtml(articleUrl)}" />
  <meta property="og:site_name" content="Tende da Tetto e Campeggio" />
  <meta property="og:locale" content="it_IT" />
  <meta property="article:author" content="${escapeHtml(guide.author)}" />
  <meta property="article:section" content="${escapeHtml(guide.category)}" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="${fullTitle}" />
  <meta name="twitter:description" content="${description}" />
  <meta name="twitter:image" content="${escapeHtml(imageUrl)}" />
  <meta http-equiv="refresh" content="0;url=${escapeHtml(articleUrl)}" />
</head>
<body></body>
</html>`;

  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.setHeader('Cache-Control', 'public, max-age=3600');
  res.status(200).send(html);
}
