import fs from 'fs';
import path from 'path';

const SITE_URL = process.env.VITE_SITE_URL || 'https://www.tendedatettoecampeggio.it';

// ──────────────────────────────────────────────────────────────
// Guide data (aligned with src/data/guidesData.ts)
// ──────────────────────────────────────────────────────────────
const guides = [
  {
    slug: "tende-da-tetto-confronto-morbide-guscio-rigido-ibride",
    title: "Tende da tetto a confronto: morbide vs a guscio rigido vs ibride",
    description: "Guida completa alle tre famiglie di tende da tetto: morbide a libro, guscio rigido a pantografo e ibride. Vantaggi, svantaggi e quale scegliere per il tuo stile di viaggio.",
    image: "/img_articles/gusci_comparazione/tende_gusci.png",
    author: "Lo Staff di Tende da Tetto",
    category: "Attrezzatura",
    date: "2026-01-31"
  },
  {
    slug: "dieci-giorni-liberta-elba-tenda-tetto",
    title: "Dieci giorni di libertà: due donne, una tenda da tetto e l'Italia che profuma di sale",
    description: "Un viaggio di 10 giorni dall'auto camperizzata con tenda da tetto: da Genova all'Isola d'Elba, tra spiagge, biciclette e la Toscana che respira.",
    image: "/img_articles/nat_vale_elba/01_elba.jpg",
    author: "Nat e Vale",
    category: "Destinazioni",
    date: "2026-01-31"
  },
  {
    slug: "viaggio-nozze-tenda-tetto-namibia",
    title: "Viaggio di nozze in tenda da tetto in Namibia",
    description: "Dove forse tutto è cominciato: la storia di Chiara e Piero, un budget limitato, e un viaggio indimenticabile di 17 giorni e 5.000 km attraverso deserti, oceani e savane.",
    image: "/img_articles/namibia_viaggio_nozze/DSCN1226.JPG",
    author: "Piero e Chiara",
    category: "Destinazioni",
    date: "2026-01-29"
  },
  {
    slug: "forte-leone-dachzelt-camp-italia",
    title: "Forte Leone: da scoperta casuale a DACHZELT CAMP Italia",
    description: "A 1.500 metri di quota, immerso nelle montagne venete, il Forte Leone è diventato teatro di un evento epico: il gemellaggio tra la community italiana e quella tedesca dei Dachzeltnomaden.",
    image: "/img_articles/forte_leone_raduno_articolo/20250704_DACHZELT-CAMP-Italia-2025_Patrick-Becker_Gruppenfoto_Drohne_.jpg",
    author: "Lo Staff di Tende da Tetto",
    category: "Eventi",
    date: "2026-01-29"
  },
  {
    slug: "spagna-del-nord-on-the-road",
    title: "Spagna del Nord on the road: 19 giorni di libertà e natura!",
    description: "Un viaggio indimenticabile attraverso Paesi Baschi, Cantabria, Asturie e Galizia con la tenda da tetto. 19 giorni di strade, oceano e montagne.",
    image: "/img_articles/spagna_del_nord_sara_guido/IMG_20250817_152218.jpg",
    author: "Sara Sarti",
    category: "Destinazioni",
    date: "2026-01-10"
  },
  {
    slug: "tende-da-tetto-super-ciurma-tempo-lento",
    title: "Tende da Tetto, La Super Ciurma e L'Arte del Tempo Lento",
    description: "Viaggiare con bambini e cani, camperizzazione fai-da-te e l'arte di recuperare il tempo lento: la storia di una famiglia nomade accessibile.",
    image: "/img_articles/arte_tempo_lento_giulia_brenno/70bcbd07-91d1-4d9a-ab43-d25822677043.jpg",
    author: "Giulia e Brenno",
    category: "Tips",
    date: "2026-01-09"
  },
  {
    slug: "dormire-tenda-freddo-52-gallerie-pasubio",
    title: "Dormire in tenda da tetto anche col freddo? Sì, si può!",
    description: "La nostra esperienza alle 52 Gallerie del Pasubio: come affrontare il freddo autunnale in tenda da tetto con l'attrezzatura giusta.",
    image: "/img_articles/dormire_freddo/WhatsApp%20Image%202026-01-10%20at%2017.06.43%20(2).jpeg",
    author: "Sara Sarti",
    category: "Tips",
    date: "2026-01-08"
  },
  {
    slug: "viaggiare-famiglia-minivan-camperboxes",
    title: "Viaggiare in famiglia con il nostro minivan: esperienze di libertà e scoperta",
    description: "La nostra vita in viaggio con un Ford Tourneo allestito fai-da-te: famiglia, cane e avventure tra Val Trebbia, Liguria, Elba e Abruzzo.",
    image: "/img_articles/i_nostri_viaggi_in_camper/7-van-camper-boxes.jpg",
    author: "Arianna e David di Camperboxes",
    category: "Destinazioni",
    date: "2026-01-07"
  },
  {
    slug: "campeggio-libero-tenda-tetto-monte-grappa",
    title: "Campeggio libero in tenda da tetto: due giorni di solitudine sul Monte Grappa",
    description: "Due giorni in solitaria sul Monte Grappa con la Jeep Renegade 4x4 e la tenda da tetto Yakima: silenzio, natura e campeggio libero responsabile.",
    image: "/img_articles/campeggio__libero_Monte_grappa/Immagine1.jpg",
    author: "Igor Ferrazzi",
    category: "Destinazioni",
    date: "2026-02-12"
  },
  {
    slug: "intervista-esperti-carcamp-menabo",
    title: "Intervista con gli esperti di Carcamp e Menabò",
    description: "Per tutta la community l'intervista fatta con gli esperti di settore Carcamp e Menabò per la conoscenza dei dettagli tecnici delle barre portatutto.",
    image: "/img_articles/barre_menabo/carcamp_menabo_cover.png",
    author: "Lo Staff di Tende da Tetto",
    category: "Attrezzatura",
    date: "2026-02-14"
  }
];

// ──────────────────────────────────────────────────────────────
// FAQ data for static HTML + JSON-LD (aligned with src/pages/FAQ.tsx)
// ──────────────────────────────────────────────────────────────
const faqData = [
  { question: 'Cosa è una tenda da tetto?', answer: 'Una tenda da tetto (roof tent o rooftop tent) è una tenda montata sul tetto di un veicolo. Offre una soluzione di campeggio rialzata, protetta dal terreno, ideale per chi ama il campeggio.' },
  { question: 'Quali veicoli possono montare una tenda da tetto?', answer: 'La maggior parte dei veicoli può montare una tenda da tetto: auto, SUV, furgoni, jeep. L\'unico requisito è avere un tetto robusto e una barra di carico adeguata.' },
  { question: 'Qual è il prezzo medio di una tenda da tetto?', answer: 'Le tende entry-level partono da 1.500€, mentre le tende premium possono costare 4.000-6.000€.' },
  { question: 'È legale parcheggiare con la tenda da tetto montata sulla strada?', answer: 'La legalità dipende dal luogo specifico. Nei campeggi ufficiali è sempre permesso. Sulle strade pubbliche, controllare i regolamenti locali.' },
  { question: 'Posso usare la tenda da tetto d\'inverno con il freddo?', answer: 'Sì! Con i giusti accorgimenti puoi dormire confortevolmente anche a temperature sotto zero.' },
  { question: 'Cos\'è la community Tende da Tetto e Campeggio?', answer: 'Siamo la più grande community italiana dedicata alle tende da tetto e al campeggio con veicoli, con oltre 40.000 membri.' },
];

// ──────────────────────────────────────────────────────────────
// Static pages with OG meta + static content for crawlers
// ──────────────────────────────────────────────────────────────
const staticPages = [
  {
    path: "raduno-nazionale-2026",
    title: "Raduno Nazionale Tende da Tetto 2026 - Lago di Pietrafitta",
    description: "Raduno Nazionale Tende da Tetto 2026: 1-2-3 maggio al Lago di Pietrafitta, Umbria. Tre giorni di avventura, condivisione e divertimento con la community.",
    image: "/img_raduni/2026.05.01-03_LagoDiPietrafitta-RadunoNazionale/Raduno_Locandina2026.jpg",
    ogType: "event",
    staticContent: `<main id="main-content"><h1>Raduno Nazionale Tende da Tetto 2026</h1><p>1-3 Maggio 2026 — Lago di Pietrafitta, Umbria</p><p>Tre giorni di avventura con la community italiana. Tour fuoristrada, bici gravel, kayak, cene tipiche, workshop tende e attività per bambini.</p><p>Prezzo: 80€ membri community / 150€ standard. 100 piazzole disponibili.</p><nav><a href="/">Home</a> &gt; <a href="/eventi">Eventi</a> &gt; Raduno Nazionale 2026</nav></main>`,
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "Event",
      "name": "Raduno Nazionale Tende da Tetto 2026",
      "startDate": "2026-05-01",
      "endDate": "2026-05-03",
      "eventStatus": "https://schema.org/EventScheduled",
      "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
      "location": { "@type": "Place", "name": "Lago di Pietrafitta", "address": { "@type": "PostalAddress", "addressLocality": "Pietrafitta", "addressRegion": "PG", "addressCountry": "IT" } },
      "organizer": { "@type": "Organization", "name": "Tende da Tetto e Campeggio", "url": "https://www.tendedatettoecampeggio.it" },
      "offers": [
        { "@type": "Offer", "name": "Membro Community", "price": "80", "priceCurrency": "EUR", "availability": "https://schema.org/InStock" },
        { "@type": "Offer", "name": "Standard", "price": "150", "priceCurrency": "EUR", "availability": "https://schema.org/InStock" }
      ]
    }
  },
  {
    path: "eventi",
    title: "Eventi e Raduni - Tende da Tetto e Campeggio Community",
    description: "Scopri i prossimi raduni, workshop ed eventi della community italiana di tende da tetto e campeggio.",
    image: "/og-image.jpg",
    ogType: "website",
    staticContent: `<main id="main-content"><h1>Eventi e Raduni</h1><p>Partecipa ai raduni e agli eventi organizzati dalla community Tende da Tetto e Campeggio in tutta Italia.</p><a href="/raduno-nazionale-2026">Raduno Nazionale 2026 — 1-3 Maggio, Lago di Pietrafitta</a><nav><a href="/">Home</a> &gt; Eventi</nav></main>`
  },
  {
    path: "guide",
    title: "Guide e Articoli sul Campeggio con Tende da Tetto",
    description: "Scopri guide pratiche, itinerari e consigli per le tue avventure con la tenda da tetto. Destinazioni, attrezzatura e tips dalla community italiana.",
    image: "/og-image.jpg",
    ogType: "website",
    staticContent: null // homepage fallback is fine for guide listing
  },
  {
    path: "chi-siamo",
    title: "Chi Siamo - Community Italiana Tende da Tetto e Campeggio",
    description: "Scopri la community più grande in Italia dedicata alle tende da tetto e al campeggio. Dal 2021 uniamo appassionati di tutta Italia.",
    image: "/og-image.jpg",
    ogType: "website",
    staticContent: `<main id="main-content"><h1>Chi Siamo</h1><p>Tende da Tetto e Campeggio è la community italiana di riferimento per chi ama viaggiare e dormire all'avventura con la propria tenda da tetto. Fondata nel 2021, contiamo oltre 40.000 membri attivi.</p><nav><a href="/">Home</a> &gt; Chi Siamo</nav></main>`
  },
  {
    path: "faq",
    title: "FAQ - Domande Frequenti sulle Tende da Tetto",
    description: "Risposte alle domande più frequenti su tende da tetto, campeggio, veicoli compatibili, prezzi, manutenzione e la nostra community.",
    image: "/og-image.jpg",
    ogType: "website",
    keywords: "FAQ tende da tetto, domande frequenti campeggio, tende da tetto prezzo, tende da tetto veicoli compatibili",
    staticContent: `<main id="main-content"><h1>Domande Frequenti</h1>${faqData.map(f => `<section><h2>${f.question}</h2><p>${f.answer}</p></section>`).join('')}<nav><a href="/">Home</a> &gt; FAQ</nav></main>`,
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqData.map(f => ({
        "@type": "Question",
        "name": f.question,
        "acceptedAnswer": { "@type": "Answer", "text": f.answer }
      }))
    }
  },
  {
    path: "contatti",
    title: "Contatti - Tende da Tetto e Campeggio",
    description: "Contatta la community Tende da Tetto e Campeggio. Scrivici per informazioni, collaborazioni o proposte di eventi.",
    image: "/og-image.jpg",
    ogType: "website",
    staticContent: `<main id="main-content"><h1>Contatti</h1><p>Hai domande o vuoi collaborare con la community? Contattaci!</p><p>Email: info@tendedatettoecampeggio.it</p><nav><a href="/">Home</a> &gt; Contatti</nav></main>`
  },
  {
    path: "privacy",
    title: "Privacy Policy - Tende da Tetto e Campeggio",
    description: "Informativa sulla privacy del sito tendedatettoecampeggio.it ai sensi del GDPR.",
    image: "/og-image.jpg",
    ogType: "website",
    staticContent: `<main id="main-content"><h1>Privacy Policy</h1><p>Informativa sulla privacy ai sensi del Regolamento UE 2016/679 (GDPR).</p><nav><a href="/">Home</a> &gt; Privacy Policy</nav></main>`
  },
  {
    path: "termini",
    title: "Termini e Condizioni - Tende da Tetto e Campeggio",
    description: "Termini e condizioni d'uso del sito tendedatettoecampeggio.it.",
    image: "/og-image.jpg",
    ogType: "website",
    staticContent: `<main id="main-content"><h1>Termini e Condizioni</h1><p>Termini e condizioni d'uso del sito web Tende da Tetto e Campeggio.</p><nav><a href="/">Home</a> &gt; Termini e Condizioni</nav></main>`
  },
  {
    path: "cookie",
    title: "Cookie Policy - Tende da Tetto e Campeggio",
    description: "Informativa sull'uso dei cookie sul sito tendedatettoecampeggio.it.",
    image: "/og-image.jpg",
    ogType: "website",
    staticContent: `<main id="main-content"><h1>Cookie Policy</h1><p>Informativa sull'uso dei cookie ai sensi della normativa europea.</p><nav><a href="/">Home</a> &gt; Cookie Policy</nav></main>`
  }
];

// ──────────────────────────────────────────────────────────────
// Helper functions
// ──────────────────────────────────────────────────────────────
function escapeHtml(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;');
}

function replaceOgMeta(baseHtml, { pageUrl, title, description, imageUrl, ogType, canonical }) {
  let html = baseHtml;

  html = html.replace(/<title>.*?<\/title>/, `<title>${escapeHtml(title)}</title>`);
  html = html.replace(/<meta name="description" content="[^"]*" \/>/, `<meta name="description" content="${escapeHtml(description)}" />`);
  html = html.replace(/<link rel="canonical" href="[^"]*" \/>/, `<link rel="canonical" href="${escapeHtml(canonical || pageUrl)}" />`);
  html = html.replace(/<meta property="og:type" content="[^"]*" \/>/, `<meta property="og:type" content="${ogType}" />`);
  html = html.replace(/<meta property="og:title" content="[^"]*" \/>/, `<meta property="og:title" content="${escapeHtml(title)}" />`);
  html = html.replace(/<meta property="og:description" content="[^"]*" \/>/, `<meta property="og:description" content="${escapeHtml(description)}" />`);
  html = html.replace(/<meta property="og:url" content="[^"]*" \/>/, `<meta property="og:url" content="${escapeHtml(pageUrl)}" />`);
  html = html.replace(/<meta property="og:image" content="[^"]*" \/>/, `<meta property="og:image" content="${escapeHtml(imageUrl)}" />`);
  html = html.replace(/<meta property="og:image:secure_url" content="[^"]*" \/>/, `<meta property="og:image:secure_url" content="${escapeHtml(imageUrl)}" />`);
  html = html.replace(/<meta property="og:image:alt" content="[^"]*" \/>/, `<meta property="og:image:alt" content="${escapeHtml(title)}" />`);
  html = html.replace(/<meta name="twitter:title" content="[^"]*" \/>/, `<meta name="twitter:title" content="${escapeHtml(title)}" />`);
  html = html.replace(/<meta name="twitter:description" content="[^"]*" \/>/, `<meta name="twitter:description" content="${escapeHtml(description)}" />`);
  html = html.replace(/<meta name="twitter:image" content="[^"]*" \/>/, `<meta name="twitter:image" content="${escapeHtml(imageUrl)}" />`);

  // Update hreflang
  html = html.replace(/hreflang="it" href="[^"]*"/, `hreflang="it" href="${escapeHtml(pageUrl)}"`);
  html = html.replace(/hreflang="x-default" href="[^"]*"/, `hreflang="x-default" href="${escapeHtml(pageUrl)}"`);

  return html;
}

function injectStaticContent(html, staticContent) {
  if (!staticContent) return html;
  // Replace the <div id="root">...</div> content with page-specific static content
  return html.replace(
    /(<div id="root">)[\s\S]*?(<\/div>\s*<!-- Static navigation)/,
    `$1\n      ${staticContent}\n    $2`
  );
}

function injectJsonLd(html, jsonLd) {
  if (!jsonLd) return html;
  const script = `<script type="application/ld+json">\n    ${JSON.stringify(jsonLd)}\n    </script>`;
  // Insert before closing </head>
  return html.replace('</head>', `    ${script}\n  </head>`);
}

// ──────────────────────────────────────────────────────────────
// Main generator
// ──────────────────────────────────────────────────────────────
function generateOgPages() {
  const distDir = path.resolve('dist');
  const baseHtml = fs.readFileSync(path.join(distDir, 'index.html'), 'utf-8');

  let count = 0;

  // 1. Guide article pages (/guide/{slug})
  for (const guide of guides) {
    const pageUrl = `${SITE_URL}/guide/${guide.slug}`;
    const imageUrl = guide.image.startsWith('http') ? guide.image : `${SITE_URL}${guide.image}`;
    const title = `${guide.title} | Tende da Tetto e Campeggio`;

    let html = replaceOgMeta(baseHtml, { pageUrl, title, description: guide.description, imageUrl, ogType: 'article', canonical: pageUrl });

    // Inject article-specific static content for crawlers
    const articleStatic = `<main id="main-content"><article><h1>${escapeHtml(guide.title)}</h1><p>${escapeHtml(guide.description)}</p><p>Autore: ${escapeHtml(guide.author)} | Categoria: ${escapeHtml(guide.category)}</p><nav><a href="/">Home</a> &gt; <a href="/guide">Guide</a> &gt; ${escapeHtml(guide.title)}</nav></article></main>`;
    html = injectStaticContent(html, articleStatic);

    // Inject Article JSON-LD
    const articleJsonLd = {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": guide.title,
      "description": guide.description,
      "image": imageUrl,
      "datePublished": guide.date,
      "dateModified": guide.date,
      "author": { "@type": "Person", "name": guide.author },
      "publisher": {
        "@type": "Organization",
        "name": "Tende da Tetto e Campeggio",
        "logo": { "@type": "ImageObject", "url": `${SITE_URL}/logo_tende.jpg` }
      },
      "mainEntityOfPage": { "@type": "WebPage", "@id": pageUrl }
    };
    html = injectJsonLd(html, articleJsonLd);

    const guideDir = path.join(distDir, 'guide', guide.slug);
    fs.mkdirSync(guideDir, { recursive: true });
    fs.writeFileSync(path.join(guideDir, 'index.html'), html, 'utf-8');
    count++;
  }

  // 2. Static pages
  for (const page of staticPages) {
    const pageUrl = `${SITE_URL}/${page.path}`;
    const imageUrl = page.image.startsWith('http') ? page.image : `${SITE_URL}${page.image}`;

    let html = replaceOgMeta(baseHtml, { pageUrl, title: page.title, description: page.description, imageUrl, ogType: page.ogType, canonical: pageUrl });

    if (page.staticContent) {
      html = injectStaticContent(html, page.staticContent);
    }

    if (page.jsonLd) {
      html = injectJsonLd(html, page.jsonLd);
    }

    const pageDir = path.join(distDir, page.path);
    fs.mkdirSync(pageDir, { recursive: true });
    fs.writeFileSync(path.join(pageDir, 'index.html'), html, 'utf-8');
    count++;
  }

  console.log(`✅ Pre-rendered ${count} pages (${guides.length} guides + ${staticPages.length} static pages)`);
}

generateOgPages();
