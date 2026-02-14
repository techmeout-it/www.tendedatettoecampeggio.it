import fs from 'fs';
import path from 'path';

const SITE_URL = process.env.VITE_SITE_URL || 'https://www.tendedatettoecampeggio.it';

// Dati articoli per le anteprime social — allineati con src/data/guidesData.ts
const guides = [
  {
    slug: "tende-da-tetto-confronto-morbide-guscio-rigido-ibride",
    title: "Tende da tetto a confronto: morbide vs a guscio rigido vs ibride",
    description: "Guida completa alle tre famiglie di tende da tetto: morbide a libro, guscio rigido a pantografo e ibride. Vantaggi, svantaggi e quale scegliere per il tuo stile di viaggio.",
    image: "/img_articles/gusci_comparazione/tende_gusci.png",
    author: "Lo Staff di Tende da Tetto",
    category: "Attrezzatura"
  },
  {
    slug: "dieci-giorni-liberta-elba-tenda-tetto",
    title: "Dieci giorni di libertà: due donne, una tenda da tetto e l'Italia che profuma di sale",
    description: "Un viaggio di 10 giorni dall'auto camperizzata con tenda da tetto: da Genova all'Isola d'Elba, tra spiagge, biciclette e la Toscana che respira.",
    image: "/img_articles/nat_vale_elba/01_elba.jpg",
    author: "Nat e Vale",
    category: "Destinazioni"
  },
  {
    slug: "viaggio-nozze-tenda-tetto-namibia",
    title: "Viaggio di nozze in tenda da tetto in Namibia",
    description: "Dove forse tutto è cominciato: la storia di Chiara e Piero, un budget limitato, e un viaggio indimenticabile di 17 giorni e 5.000 km attraverso deserti, oceani e savane.",
    image: "/img_articles/namibia_viaggio_nozze/DSCN1226.JPG",
    author: "Piero e Chiara",
    category: "Destinazioni"
  },
  {
    slug: "forte-leone-dachzelt-camp-italia",
    title: "Forte Leone: da scoperta casuale a DACHZELT CAMP Italia",
    description: "A 1.500 metri di quota, immerso nelle montagne venete, il Forte Leone è diventato teatro di un evento epico: il gemellaggio tra la community italiana e quella tedesca dei Dachzeltnomaden.",
    image: "/img_articles/forte_leone_raduno_articolo/20250704_DACHZELT-CAMP-Italia-2025_Patrick-Becker_Gruppenfoto_Drohne_.jpg",
    author: "Lo Staff di Tende da Tetto",
    category: "Eventi"
  },
  {
    slug: "spagna-del-nord-on-the-road",
    title: "Spagna del Nord on the road: 19 giorni di libertà e natura!",
    description: "Un viaggio indimenticabile attraverso Paesi Baschi, Cantabria, Asturie e Galizia con la tenda da tetto. 19 giorni di strade, oceano e montagne.",
    image: "/img_articles/spagna_del_nord_sara_guido/IMG_20250817_152218.jpg",
    author: "Sara Sarti",
    category: "Destinazioni"
  },
  {
    slug: "tende-da-tetto-super-ciurma-tempo-lento",
    title: "Tende da Tetto, La Super Ciurma e L'Arte del Tempo Lento",
    description: "Viaggiare con bambini e cani, camperizzazione fai-da-te e l'arte di recuperare il tempo lento: la storia di una famiglia nomade accessibile.",
    image: "/img_articles/arte_tempo_lento_giulia_brenno/70bcbd07-91d1-4d9a-ab43-d25822677043.jpg",
    author: "Giulia e Brenno",
    category: "Tips"
  },
  {
    slug: "dormire-tenda-freddo-52-gallerie-pasubio",
    title: "Dormire in tenda da tetto anche col freddo? Sì, si può!",
    description: "La nostra esperienza alle 52 Gallerie del Pasubio: come affrontare il freddo autunnale in tenda da tetto con l'attrezzatura giusta.",
    image: "/img_articles/dormire_freddo/WhatsApp%20Image%202026-01-10%20at%2017.06.43%20(2).jpeg",
    author: "Sara Sarti",
    category: "Tips"
  },
  {
    slug: "viaggiare-famiglia-minivan-camperboxes",
    title: "Viaggiare in famiglia con il nostro minivan: esperienze di libertà e scoperta",
    description: "La nostra vita in viaggio con un Ford Tourneo allestito fai-da-te: famiglia, cane e avventure tra Val Trebbia, Liguria, Elba e Abruzzo.",
    image: "/img_articles/i_nostri_viaggi_in_camper/7-van-camper-boxes.jpg",
    author: "Arianna e David di Camperboxes",
    category: "Destinazioni"
  },
  {
    slug: "campeggio-libero-tenda-tetto-monte-grappa",
    title: "Campeggio libero in tenda da tetto: due giorni di solitudine sul Monte Grappa",
    description: "Due giorni in solitaria sul Monte Grappa con la Jeep Renegade 4x4 e la tenda da tetto Yakima: silenzio, natura e campeggio libero responsabile.",
    image: "/img_articles/campeggio__libero_Monte_grappa/Immagine1.jpg",
    author: "Igor Ferrazzi",
    category: "Destinazioni"
  },
  {
    slug: "intervista-esperti-carcamp-menabo",
    title: "Intervista con gli esperti di Carcamp e Menabò",
    description: "Per tutta la community l'intervista fatta con gli esperti di settore Carcamp e Menabò per la conoscenza dei dettagli tecnici delle barre portatutto.",
    image: "/img_articles/barre_menabo/carcamp_menabo_cover.png",
    author: "Lo Staff di Tende da Tetto",
    category: "Attrezzatura"
  }
];

function escapeHtml(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;');
}

// Pagine statiche del sito con OG meta personalizzati
const staticPages = [
  {
    path: "raduno-nazionale-2026",
    title: "Raduno Nazionale Tende da Tetto 2026 - Lago di Pietrafitta",
    description: "Raduno Nazionale Tende da Tetto 2026: 1-2-3 maggio al Lago di Pietrafitta, Umbria. Tre giorni di avventura, condivisione e divertimento con la community.",
    image: "/img_raduni/2026.05.01-03_LagoDiPietrafitta-RadunoNazionale/Raduno_Locandina2026.jpg",
    ogType: "event"
  },
  {
    path: "eventi",
    title: "Eventi e Raduni - Tende da Tetto e Campeggio Community",
    description: "Scopri i prossimi raduni, workshop ed eventi della community italiana di tende da tetto e campeggio. Raduni annuali, workshop di formazione, meetup comunitari e tanto altro.",
    image: "/og-image.jpg",
    ogType: "website"
  },
  {
    path: "guide",
    title: "Guide e Articoli sul Campeggio con Tende da Tetto",
    description: "Scopri guide pratiche, itinerari e consigli per le tue avventure con la tenda da tetto. Destinazioni, attrezzatura e tips dalla community italiana.",
    image: "/og-image.jpg",
    ogType: "website"
  },
  {
    path: "chi-siamo",
    title: "Chi Siamo - Community Italiana Tende da Tetto e Campeggio",
    description: "Scopri la community più grande in Italia dedicata alle tende da tetto e al campeggio. Dal 2021 uniamo appassionati di tutta Italia per condividere esperienze, consigli e avventure indimenticabili.",
    image: "/og-image.jpg",
    ogType: "website"
  }
];

/**
 * Sostituisce i meta tag OG nell'HTML base con quelli specifici della pagina
 */
function replaceOgMeta(baseHtml, { pageUrl, title, description, imageUrl, ogType }) {
  let html = baseHtml;

  html = html.replace(
    /<title>.*?<\/title>/,
    `<title>${escapeHtml(title)}</title>`
  );
  html = html.replace(
    /<meta name="description" content="[^"]*" \/>/,
    `<meta name="description" content="${escapeHtml(description)}" />`
  );
  html = html.replace(
    /<meta property="og:type" content="[^"]*" \/>/,
    `<meta property="og:type" content="${ogType}" />`
  );
  html = html.replace(
    /<meta property="og:title" content="[^"]*" \/>/,
    `<meta property="og:title" content="${escapeHtml(title)}" />`
  );
  html = html.replace(
    /<meta property="og:description" content="[^"]*" \/>/,
    `<meta property="og:description" content="${escapeHtml(description)}" />`
  );
  html = html.replace(
    /<meta property="og:url" content="[^"]*" \/>/,
    `<meta property="og:url" content="${escapeHtml(pageUrl)}" />`
  );
  html = html.replace(
    /<meta property="og:image" content="[^"]*" \/>/,
    `<meta property="og:image" content="${escapeHtml(imageUrl)}" />`
  );
  html = html.replace(
    /<meta property="og:image:secure_url" content="[^"]*" \/>/,
    `<meta property="og:image:secure_url" content="${escapeHtml(imageUrl)}" />`
  );
  html = html.replace(
    /<meta property="og:image:alt" content="[^"]*" \/>/,
    `<meta property="og:image:alt" content="${escapeHtml(title)}" />`
  );
  html = html.replace(
    /<meta name="twitter:title" content="[^"]*" \/>/,
    `<meta name="twitter:title" content="${escapeHtml(title)}" />`
  );
  html = html.replace(
    /<meta name="twitter:description" content="[^"]*" \/>/,
    `<meta name="twitter:description" content="${escapeHtml(description)}" />`
  );
  html = html.replace(
    /<meta name="twitter:image" content="[^"]*" \/>/,
    `<meta name="twitter:image" content="${escapeHtml(imageUrl)}" />`
  );

  return html;
}

function generateOgPages() {
  const distDir = path.resolve('dist');
  const baseHtml = fs.readFileSync(path.join(distDir, 'index.html'), 'utf-8');

  let count = 0;

  // 1. Pagine articoli (/guide/{slug})
  for (const guide of guides) {
    const pageUrl = `${SITE_URL}/guide/${guide.slug}`;
    const imageUrl = guide.image.startsWith('http') ? guide.image : `${SITE_URL}${guide.image}`;
    const title = `${guide.title} | Tende da Tetto e Campeggio`;

    const html = replaceOgMeta(baseHtml, { pageUrl, title, description: guide.description, imageUrl, ogType: 'article' });

    const guideDir = path.join(distDir, 'guide', guide.slug);
    fs.mkdirSync(guideDir, { recursive: true });
    fs.writeFileSync(path.join(guideDir, 'index.html'), html, 'utf-8');
    count++;
  }

  // 2. Pagine statiche (raduno, eventi, guide, chi-siamo)
  for (const page of staticPages) {
    const pageUrl = `${SITE_URL}/${page.path}`;
    const imageUrl = page.image.startsWith('http') ? page.image : `${SITE_URL}${page.image}`;

    const html = replaceOgMeta(baseHtml, { pageUrl, title: page.title, description: page.description, imageUrl, ogType: page.ogType });

    const pageDir = path.join(distDir, page.path);
    fs.mkdirSync(pageDir, { recursive: true });
    fs.writeFileSync(path.join(pageDir, 'index.html'), html, 'utf-8');
    count++;
  }

  console.log(`✅ OG pages generate: ${count} pagine (${guides.length} articoli + ${staticPages.length} pagine statiche)`);
}

generateOgPages();
