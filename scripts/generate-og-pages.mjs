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
    seoTitle: "Tende da tetto: morbide vs guscio rigido vs ibride",
    description: "Guida alle tre famiglie di tende da tetto: morbide a libro, guscio rigido a pantografo e ibride. Vantaggi, svantaggi e quale scegliere per il tuo viaggio.",
    expandedContent: `<h2>Le tre famiglie di tende da tetto</h2><p>Le tende da tetto si dividono in tre categorie principali: morbide (a libro), a guscio rigido (pantografo) e ibride. Ciascuna tipologia presenta caratteristiche uniche in termini di peso, velocità di apertura, isolamento termico e prezzo. Le tende morbide sono le più economiche e leggere, ideali per chi cerca versatilità. Le tende a guscio rigido offrono maggiore comodità e rapidità di montaggio, perfette per soste frequenti. Le ibride combinano i vantaggi di entrambe, rappresentando un compromesso interessante per molti campeggiatori.</p><h2>Come scegliere la tenda giusta</h2><p>La scelta dipende dal tuo stile di viaggio, dal budget disponibile, dal tipo di veicolo e dalla frequenza di utilizzo. In questa guida analizziamo pro e contro di ogni tipologia per aiutarti a fare la scelta migliore.</p>`,
    image: "/img_articles/gusci_comparazione/tende_gusci.png",
    author: "Lo Staff di Tende da Tetto",
    category: "Attrezzatura",
    date: "2026-01-31"
  },
  {
    slug: "dieci-giorni-liberta-elba-tenda-tetto",
    title: "Dieci giorni di libertà: due donne, una tenda da tetto e l'Italia che profuma di sale",
    seoTitle: "10 giorni in tenda da tetto: Genova, Elba e Toscana",
    description: "Un viaggio di 10 giorni dall'auto camperizzata con tenda da tetto: da Genova all'Isola d'Elba, tra spiagge, biciclette e la Toscana che respira.",
    expandedContent: `<h2>L'itinerario: da Genova all'Isola d'Elba</h2><p>Nat e Vale raccontano il loro viaggio di 10 giorni con l'auto camperizzata e la tenda da tetto, partendo da Genova e attraversando la costa ligure fino all'Isola d'Elba. Tra spiagge deserte, strade panoramiche, pedalate in bicicletta e tramonti sulla Toscana, un'avventura che dimostra come la tenda da tetto sia la compagna ideale per esplorare l'Italia con lentezza.</p><h2>Consigli pratici</h2><p>Dove sostare con la tenda da tetto lungo la costa toscana, come organizzare i bagagli per un viaggio di coppia e quali campeggi scegliere per la vista mare migliore. Un racconto autentico e ricco di spunti per chi vuole replicare l'esperienza.</p>`,
    image: "/img_articles/nat_vale_elba/01_elba.jpg",
    author: "Nat e Vale",
    category: "Destinazioni",
    date: "2026-01-31"
  },
  {
    slug: "viaggio-nozze-tenda-tetto-namibia",
    title: "Viaggio di nozze in tenda da tetto in Namibia",
    description: "La storia di Chiara e Piero: un budget limitato e un viaggio indimenticabile di 17 giorni e 5.000 km in Namibia tra deserti, oceani e savane.",
    expandedContent: `<h2>17 giorni attraverso la Namibia</h2><p>Chiara e Piero hanno scelto un viaggio di nozze alternativo: 17 giorni e 5.000 km attraverso la Namibia con una tenda da tetto noleggiata in loco. Dal deserto del Namib all'Etosha National Park, dal Fish River Canyon alla Skeleton Coast, un'avventura indimenticabile con un budget contenuto.</p><h2>Perché la Namibia in tenda da tetto</h2><p>La Namibia è una delle destinazioni più amate dai campeggiatori con tenda da tetto: strade sterrate sicure, campsite attrezzati nel bush, paesaggi mozzafiato e fauna selvatica incredibile. Scopri come organizzare il tuo viaggio in Namibia e quali campeggi prenotare.</p>`,
    image: "/img_articles/namibia_viaggio_nozze/DSCN1226.JPG",
    author: "Piero e Chiara",
    category: "Destinazioni",
    date: "2026-01-29"
  },
  {
    slug: "forte-leone-dachzelt-camp-italia",
    title: "Forte Leone: da scoperta casuale a DACHZELT CAMP Italia",
    description: "A 1.500 metri di quota nelle montagne venete, il Forte Leone ospita il gemellaggio tra la community italiana e quella tedesca dei Dachzeltnomaden.",
    expandedContent: `<h2>Il gemellaggio italo-tedesco</h2><p>A 1.500 metri di quota, immerso nelle montagne del Veneto, il Forte Leone è diventato il teatro di un evento storico per la community delle tende da tetto: il primo gemellaggio ufficiale tra la community italiana Tende da Tetto e Campeggio e quella tedesca dei Dachzeltnomaden.</p><h2>L'evento al Forte Leone</h2><p>Il Dachzelt Camp Italia ha visto la partecipazione di decine di equipaggi provenienti da tutta Italia e dalla Germania. Tre giorni di campeggio in quota, escursioni nei sentieri alpini, workshop sulle tende da tetto, grigliate comuni e scambio di esperienze tra due community che condividono la stessa passione per il viaggio all'aria aperta.</p>`,
    image: "/img_articles/forte_leone_raduno_articolo/20250704_DACHZELT-CAMP-Italia-2025_Patrick-Becker_Gruppenfoto_Drohne_.jpg",
    author: "Lo Staff di Tende da Tetto",
    category: "Eventi",
    date: "2026-01-29"
  },
  {
    slug: "spagna-del-nord-on-the-road",
    title: "Spagna del Nord on the road: 19 giorni di libertà e natura!",
    description: "Un viaggio indimenticabile attraverso Paesi Baschi, Cantabria, Asturie e Galizia con la tenda da tetto. 19 giorni di strade, oceano e montagne.",
    expandedContent: `<h2>19 giorni nel nord della Spagna</h2><p>Un viaggio on the road di 19 giorni attraverso il nord della Spagna con la tenda da tetto: dai Pirenei alla costa atlantica, passando per i Picos de Europa, la Galizia verde e i paesini baschi. Un itinerario che combina natura selvaggia, gastronomia eccezionale e campeggio libero responsabile.</p><h2>Consigli per il campeggio in Spagna</h2><p>La Spagna del Nord offre numerose opportunità per il campeggio con tenda da tetto: aree sosta gratuite, campeggi economici con vista oceano e una cultura dell'outdoor molto sviluppata. In questa guida troverai indicazioni pratiche su dove dormire, cosa mangiare e quali strade percorrere.</p>`,
    image: "/img_articles/spagna_del_nord_sara_guido/IMG_20250817_152218.jpg",
    author: "Sara Sarti",
    category: "Destinazioni",
    date: "2026-01-10"
  },
  {
    slug: "tende-da-tetto-super-ciurma-tempo-lento",
    title: "Tende da Tetto, La Super Ciurma e L'Arte del Tempo Lento",
    description: "Viaggiare con bambini e cani, camperizzazione fai-da-te e l'arte di recuperare il tempo lento: la storia di una famiglia nomade accessibile.",
    expandedContent: `<h2>Viaggiare con i bambini in tenda da tetto</h2><p>La Super Ciurma è una famiglia che ha fatto del tempo lento la propria filosofia di viaggio. Con i bambini a bordo e la tenda da tetto sul veicolo, esplorano l'Italia e l'Europa senza fretta, fermandosi dove la curiosità li porta e trasformando ogni sosta in un'avventura educativa.</p><h2>L'arte del tempo lento</h2><p>In un'epoca di viaggi frenetici e liste di cose da vedere, la Super Ciurma ci insegna che il vero lusso è avere tempo. Tempo per giocare all'aperto, per cucinare insieme, per osservare le stelle dalla tenda da tetto e per scoprire angoli nascosti che solo chi viaggia lentamente può trovare.</p>`,
    image: "/img_articles/arte_tempo_lento_giulia_brenno/70bcbd07-91d1-4d9a-ab43-d25822677043.jpg",
    author: "Giulia e Brenno",
    category: "Tips",
    date: "2026-01-09"
  },
  {
    slug: "dormire-tenda-freddo-52-gallerie-pasubio",
    title: "Dormire in tenda da tetto anche col freddo? Sì, si può!",
    description: "La nostra esperienza alle 52 Gallerie del Pasubio: come affrontare il freddo autunnale in tenda da tetto con l'attrezzatura giusta.",
    expandedContent: `<h2>Campeggio invernale con tenda da tetto</h2><p>Dormire in tenda da tetto anche quando le temperature scendono sotto zero è possibile, con la giusta preparazione. Questa guida racconta l'esperienza di una notte alle 52 Gallerie del Pasubio, nel cuore delle Prealpi Vicentine, con temperature rigide e panorami mozzafiato.</p><h2>Come prepararsi al freddo</h2><p>Dall'isolamento termico del materasso alla scelta del sacco a pelo invernale, dalla gestione della condensa all'abbigliamento a strati: tutti i consigli pratici per affrontare il campeggio invernale in tenda da tetto senza rinunciare al comfort. Un'esperienza che dimostra come la stagione fredda possa essere la più affascinante per dormire sotto le stelle.</p>`,
    image: "/img_articles/dormire_freddo/WhatsApp%20Image%202026-01-10%20at%2017.06.43%20(2).jpeg",
    author: "Sara Sarti",
    category: "Tips",
    date: "2026-01-08"
  },
  {
    slug: "viaggiare-famiglia-minivan-camperboxes",
    title: "Viaggiare in famiglia con il nostro minivan: esperienze di libertà e scoperta",
    seoTitle: "Viaggiare in famiglia col minivan: libertà e scoperta",
    description: "La nostra vita in viaggio con un Ford Tourneo allestito fai-da-te: famiglia, cane e avventure tra Val Trebbia, Liguria, Elba e Abruzzo.",
    expandedContent: `<h2>La vita in viaggio con il minivan</h2><p>Arianna e David hanno trasformato il loro Ford Tourneo in una casa mobile grazie a un allestimento fai-da-te con Camperboxes e tenda da tetto. Insieme alla famiglia e al cane, esplorano l'Italia dalla Val Trebbia alla Liguria, dall'Isola d'Elba all'Abruzzo, dimostrando che non serve un camper per vivere grandi avventure.</p><h2>Allestimento e organizzazione</h2><p>Come organizzare lo spazio in un minivan per viaggiare con bambini e animali domestici: sistema modulare Camperboxes, cucina portatile, tenda da tetto per la notte e consigli pratici per massimizzare il comfort in poco spazio. Un modello di viaggio accessibile a tutti.</p>`,
    image: "/img_articles/i_nostri_viaggi_in_camper/7-van-camper-boxes.jpg",
    author: "Arianna e David di Camperboxes",
    category: "Destinazioni",
    date: "2026-01-07"
  },
  {
    slug: "campeggio-libero-tenda-tetto-monte-grappa",
    title: "Campeggio libero in tenda da tetto: due giorni di solitudine sul Monte Grappa",
    seoTitle: "Campeggio libero in tenda da tetto sul Monte Grappa",
    description: "Due giorni in solitaria sul Monte Grappa con la Jeep Renegade 4x4 e la tenda da tetto Yakima: silenzio, natura e campeggio libero responsabile.",
    expandedContent: `<h2>Due giorni di solitudine in montagna</h2><p>Igor racconta la sua esperienza di campeggio libero responsabile sul Monte Grappa con la Jeep Renegade 4x4 e la tenda da tetto Yakima. Due giorni di silenzio assoluto, immerso nella natura delle Prealpi Venete, tra sentieri panoramici, albe mozzafiato e la libertà totale di dormire dove il cuore lo porta.</p><h2>Campeggio libero responsabile</h2><p>Il campeggio libero in Italia richiede rispetto per l'ambiente e conoscenza delle normative locali. In questa guida troverai consigli su come praticare il campeggio libero in modo responsabile: non lasciare tracce, rispettare la flora e la fauna, scegliere i posti giusti e contribuire alla preservazione dei luoghi che amiamo esplorare.</p>`,
    image: "/img_articles/campeggio__libero_Monte_grappa/Immagine1.jpg",
    author: "Igor Ferrazzi",
    category: "Destinazioni",
    date: "2026-02-12"
  },
  {
    slug: "intervista-esperti-carcamp-menabo",
    title: "Intervista con gli esperti di Carcamp e Menabò",
    description: "Per tutta la community l'intervista fatta con gli esperti di settore Carcamp e Menabò per la conoscenza dei dettagli tecnici delle barre portatutto.",
    expandedContent: `<h2>Carcamp e Menabò: chi sono</h2><p>Carcamp e Menabò sono due realtà italiane di riferimento nel mondo delle tende da tetto e degli accessori per il campeggio su veicolo. In questa intervista esclusiva, i fondatori condividono la loro esperienza, i consigli per scegliere la tenda da tetto giusta e le tendenze del mercato italiano.</p><h2>Consigli degli esperti</h2><p>Dalla scelta del portapacchi alla compatibilità con diversi veicoli, dalla manutenzione stagionale alle novità del settore: un'intervista ricca di spunti pratici per chi vuole acquistare la sua prima tenda da tetto o migliorare il proprio setup. Scopri quali modelli consigliano gli esperti e quali errori evitare nell'allestimento del tuo veicolo.</p>`,
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
    staticContent: `<main id="main-content"><h1>Raduno Nazionale Tende da Tetto 2026</h1><p>Il Raduno Nazionale Tende da Tetto 2026 si terrà dall'1 al 3 Maggio 2026 presso il Lago di Pietrafitta, nel cuore verde dell'Umbria. Tre giorni di pura avventura, condivisione e natura con la community italiana più grande dedicata alle tende da tetto e al campeggio.</p><h2>Programma dell'evento</h2><p>Il raduno prevede tour fuoristrada guidati tra le colline umbre, escursioni in bici gravel lungo percorsi panoramici, sessioni di kayak sul lago, cene tipiche con prodotti del territorio, workshop pratici sulla manutenzione e installazione delle tende da tetto, e tante attività per bambini e famiglie. Un'occasione unica per conoscere altri appassionati e scoprire nuovi modelli di tende.</p><h2>Prezzi e disponibilità</h2><p>Il costo di partecipazione è di 80€ per i membri della community e 150€ per i non iscritti. Sono disponibili 100 piazzole, ciascuna con spazio sufficiente per il veicolo e la tenda da tetto. La prenotazione anticipata è consigliata per garantire il proprio posto.</p><nav><a href="/">Home</a> &gt; <a href="/eventi/">Eventi</a> &gt; Raduno Nazionale 2026</nav></main>`,
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
    description: "Scopri i prossimi raduni, workshop ed eventi della community italiana di tende da tetto e campeggio. Partecipa ai ritrovi e conosci altri appassionati!",
    image: "/og-image.jpg",
    ogType: "website",
    staticContent: `<main id="main-content"><h1>Eventi e Raduni</h1><p>La community Tende da Tetto e Campeggio organizza raduni, workshop e incontri in tutta Italia per gli appassionati di campeggio con tenda da tetto. I nostri eventi sono pensati per famiglie, coppie e avventurieri solitari che vogliono condividere esperienze, imparare nuove tecniche e scoprire destinazioni fuori dai circuiti tradizionali.</p><h2>Prossimi eventi</h2><p><a href="/raduno-nazionale-2026/">Raduno Nazionale 2026</a> — 1-3 Maggio al Lago di Pietrafitta, Umbria. Tre giorni di fuoristrada, gravel bike, kayak e workshop. 100 piazzole disponibili.</p><h2>Perché partecipare</h2><p>I raduni sono il cuore della nostra community. Potrai confrontare diversi modelli di tende da tetto, ricevere consigli dagli esperti, provare attrezzature e stringere amicizie con persone che condividono la tua passione per il viaggio all'aria aperta.</p><h2>Resta aggiornato</h2><p>Iscriviti alla nostra newsletter e seguici sui social per non perdere nessun evento. Pubblichiamo regolarmente aggiornamenti su date, location e programmi dei prossimi raduni e incontri della community in tutta Italia. Non perdere le prossime avventure con la tua tenda da tetto!</p><nav><a href="/">Home</a> &gt; Eventi</nav></main>`
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
    staticContent: `<main id="main-content"><h1>Chi Siamo</h1><p>Tende da Tetto e Campeggio è la community italiana di riferimento per chi ama viaggiare e dormire all'avventura con la propria tenda da tetto. Fondata nel 2021, oggi contiamo oltre 40.000 membri attivi su Facebook, Instagram e il nostro sito web.</p><h2>La nostra missione</h2><p>Crediamo che viaggiare con una tenda da tetto sia il modo più autentico per esplorare l'Italia e il mondo. Offriamo guide pratiche, recensioni di attrezzature, itinerari testati dalla community e una rete di appassionati sempre pronti a condividere consigli e esperienze. Organizziamo raduni annuali, workshop di formazione e meetup regionali per rafforzare i legami tra i membri.</p><h2>Unisciti a noi</h2><p>Che tu sia un principiante curioso o un campeggiatore esperto, nella nostra community troverai risposte, ispirazione e nuovi compagni di viaggio. Seguici sui social, iscriviti alla newsletter e partecipa ai nostri <a href="/eventi/">eventi</a>.</p><h2>I nostri numeri</h2><p>Oltre 40.000 membri attivi, 10 guide approfondite, raduni annuali in tutta Italia e una rete di partner che include i principali brand del settore outdoor e campeggio.</p><nav><a href="/">Home</a> &gt; Chi Siamo</nav></main>`
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
    description: "Contatta la community Tende da Tetto e Campeggio. Scrivici per informazioni, collaborazioni, proposte di eventi o partnership con il tuo brand outdoor.",
    image: "/og-image.jpg",
    ogType: "website",
    staticContent: `<main id="main-content"><h1>Contatti</h1><p>Hai domande, suggerimenti o vuoi collaborare con la community Tende da Tetto e Campeggio? Siamo sempre felici di ricevere messaggi dalla nostra community di oltre 40.000 appassionati di campeggio e tende da tetto in Italia.</p><h2>Come contattarci</h2><p>Puoi scriverci all'indirizzo email info@tendedatettoecampeggio.it per qualsiasi richiesta: informazioni generali, proposte di collaborazione, segnalazione di campeggi e aree sosta, suggerimenti per nuovi articoli o per diventare partner della community.</p><h2>Collaborazioni e partnership</h2><p>Sei un brand del settore outdoor, un produttore di tende da tetto o un gestore di campeggi? Contattaci per scoprire le nostre opportunità di partnership, sponsorizzazione eventi e contenuti dedicati. Lavoriamo con aziende che condividono la nostra passione per il viaggio all'aria aperta.</p><h2>Tempi di risposta</h2><p>Rispondiamo generalmente entro 48 ore lavorative. Per richieste urgenti relative agli eventi e ai raduni, ti consigliamo di contattarci con almeno due settimane di anticipo. Seguici anche sui nostri canali social per aggiornamenti in tempo reale sulla community, gli eventi in programma e le ultime novità dal mondo delle tende da tetto.</p><nav><a href="/">Home</a> &gt; Contatti</nav></main>`
  },
  {
    path: "privacy",
    title: "Privacy Policy - Tende da Tetto e Campeggio",
    description: "Informativa sulla privacy del sito tendedatettoecampeggio.it ai sensi del GDPR. Scopri come raccogliamo, utilizziamo e proteggiamo i tuoi dati personali.",
    image: "/og-image.jpg",
    ogType: "website",
    staticContent: `<main id="main-content"><h1>Privacy Policy</h1><p>Informativa sulla privacy ai sensi del Regolamento UE 2016/679 (GDPR) per il sito web tendedatettoecampeggio.it, gestito da Tende da Tetto e Campeggio.</p><h2>Titolare del trattamento</h2><p>Il titolare del trattamento dei dati personali è Tende da Tetto e Campeggio, con sede in Italia. Per qualsiasi richiesta relativa ai tuoi dati personali puoi contattarci all'indirizzo info@tendedatettoecampeggio.it.</p><h2>Dati raccolti</h2><p>Raccogliamo dati di navigazione tramite cookie tecnici e analitici, dati forniti volontariamente tramite i moduli di contatto e newsletter, e dati di utilizzo del sito per migliorare l'esperienza utente. Non vendiamo né condividiamo i tuoi dati con terze parti per scopi di marketing.</p><h2>I tuoi diritti</h2><p>Hai il diritto di accedere, rettificare, cancellare i tuoi dati personali e opporti al loro trattamento. Per esercitare questi diritti, contattaci via email all\'indirizzo info@tendedatettoecampeggio.it.</p><h2>Aggiornamenti della policy</h2><p>Questa informativa può essere aggiornata periodicamente. Ti invitiamo a consultare questa pagina regolarmente per eventuali modifiche. L\'ultima revisione è stata effettuata nel 2026. Ti consigliamo di verificare periodicamente eventuali aggiornamenti a questa informativa sulla privacy.</p><nav><a href="/">Home</a> &gt; Privacy Policy</nav></main>`
  },
  {
    path: "termini",
    title: "Termini e Condizioni - Tende da Tetto e Campeggio",
    description: "Termini e condizioni d'uso del sito tendedatettoecampeggio.it. Regole di partecipazione alla community, utilizzo dei contenuti e responsabilità degli utenti.",
    image: "/og-image.jpg",
    ogType: "website",
    staticContent: `<main id="main-content"><h1>Termini e Condizioni</h1><p>I presenti Termini e Condizioni regolano l'utilizzo del sito web tendedatettoecampeggio.it e dei servizi offerti dalla community Tende da Tetto e Campeggio.</p><h2>Utilizzo del sito</h2><p>Il sito è destinato a fornire informazioni, guide e risorse relative alle tende da tetto e al campeggio. I contenuti pubblicati sono a scopo informativo e basati sulle esperienze della community. L'utilizzo delle informazioni è sotto la responsabilità dell'utente.</p><h2>Proprietà intellettuale</h2><p>Tutti i contenuti del sito, inclusi testi, immagini, loghi e grafica, sono protetti dal diritto d'autore e sono di proprietà di Tende da Tetto e Campeggio o dei rispettivi autori. È vietata la riproduzione non autorizzata.</p><h2>Limitazione di responsabilità</h2><p>Le informazioni pubblicate su questo sito sono fornite senza garanzia di completezza o accuratezza. Tende da Tetto e Campeggio non è responsabile per eventuali danni derivanti dall'utilizzo delle informazioni contenute nel sito.</p><h2>Modifiche ai termini</h2><p>Ci riserviamo il diritto di modificare questi termini in qualsiasi momento. Le modifiche saranno pubblicate su questa pagina con la data di ultimo aggiornamento.</p><nav><a href="/">Home</a> &gt; Termini e Condizioni</nav></main>`
  },
  {
    path: "cookie",
    title: "Cookie Policy - Tende da Tetto e Campeggio",
    description: "Informativa sull'uso dei cookie sul sito tendedatettoecampeggio.it. Scopri quali cookie utilizziamo, le finalità e come gestire le tue preferenze.",
    image: "/og-image.jpg",
    ogType: "website",
    staticContent: `<main id="main-content"><h1>Cookie Policy</h1><p>Questa Cookie Policy descrive l'uso dei cookie e delle tecnologie simili sul sito web tendedatettoecampeggio.it, in conformità con la normativa europea sulla protezione dei dati personali e la Direttiva ePrivacy.</p><h2>Cosa sono i cookie</h2><p>I cookie sono piccoli file di testo che vengono salvati sul tuo dispositivo quando visiti un sito web. Servono a migliorare la tua esperienza di navigazione, ricordare le tue preferenze e fornire statistiche aggregate sull'utilizzo del sito.</p><h2>Cookie utilizzati</h2><p>Utilizziamo cookie tecnici necessari al funzionamento del sito, cookie analitici per comprendere come i visitatori interagiscono con le nostre pagine, e cookie di terze parti per i servizi di social media integrati. Non utilizziamo cookie di profilazione per scopi pubblicitari.</p><h2>Gestione dei cookie</h2><p>Puoi gestire le tue preferenze sui cookie attraverso le impostazioni del tuo browser. La disattivazione di alcuni cookie potrebbe influire sulla funzionalità del sito. Per maggiori informazioni sulla gestione dei tuoi dati personali, consulta la nostra <a href="/privacy/">Privacy Policy</a> completa. Per domande specifiche sui cookie, contattaci via email.</p><nav><a href="/">Home</a> &gt; Cookie Policy</nav></main>`
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
    // Keep titles under 60 chars for SEO
    const SUFFIX_LONG = ' | Tende da Tetto e Campeggio';
    const SUFFIX_SHORT = ' | TDTC';
    const baseTitle = guide.seoTitle || guide.title;
    const title = baseTitle.includes('Tende da Tetto')
      ? baseTitle
      : (baseTitle.length + SUFFIX_LONG.length <= 60)
        ? `${baseTitle}${SUFFIX_LONG}`
        : (baseTitle.length + SUFFIX_SHORT.length <= 60)
          ? `${baseTitle}${SUFFIX_SHORT}`
          : baseTitle;

    let html = replaceOgMeta(baseHtml, { pageUrl, title, description: guide.description, imageUrl, ogType: 'article', canonical: pageUrl });

    // Build related guides: 1 same-category + 2 different-category for diversity
    // Round-robin: each guide links to next 4 guides (wrapping), ensuring even distribution
    const guideIdx = guides.indexOf(guide);
    const relatedGuides = [];
    for (let i = 1; i <= 4 && relatedGuides.length < 4; i++) {
      relatedGuides.push(guides[(guideIdx + i) % guides.length]);
    }
    const relatedHtml = relatedGuides.length > 0
      ? `<section><h2>Guide Correlate</h2><ul>${relatedGuides.map(g => `<li><a href="/guide/${g.slug}/">${escapeHtml(g.title)}</a></li>`).join('')}</ul></section>`
      : '';

    // Inject article-specific static content for crawlers
    const expandedHtml = guide.expandedContent || '';
    const articleStatic = `<main id="main-content"><article><h1>${escapeHtml(guide.title)}</h1><p>${escapeHtml(guide.description)}</p>${expandedHtml}<p>Autore: ${escapeHtml(guide.author)} | Categoria: ${escapeHtml(guide.category)}</p>${relatedHtml}<nav><a href="/">Home</a> &gt; <a href="/guide/">Guide</a> &gt; ${escapeHtml(guide.title)}</nav></article></main>`;
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

  // Pre-render campsite pages
  const campsites = [
    { slug: 'camping-lake-garda', name: 'Camping Lake Garda', location: 'Lazise', region: 'Lago di Garda, Veneto', type: 'Lago', price: '€25/notte' },
    { slug: 'camping-dolomiti', name: 'Camping Dolomiti', location: 'Canazei', region: 'Val di Fassa, Trentino', type: 'Montagna', price: '€30/notte' },
    { slug: 'camping-costa-smeralda', name: 'Camping Costa Smeralda', location: 'Arzachena', region: 'Gallura, Sardegna', type: 'Mare', price: '€35/notte' },
    { slug: 'camping-cinque-terre', name: 'Camping Cinque Terre', location: 'Levanto', region: 'Riviera, Liguria', type: 'Mare', price: '€28/notte' },
    { slug: 'camping-lago-como', name: 'Camping Lago di Como', location: 'Menaggio', region: 'Lago di Como, Lombardia', type: 'Lago', price: '€32/notte' },
    { slug: 'camping-gran-paradiso', name: 'Camping Gran Paradiso', location: 'Cogne', region: "Parco Gran Paradiso, Valle d'Aosta", type: 'Montagna', price: '€22/notte' },
    { slug: 'camping-maremma', name: 'Camping Maremma Wild', location: 'Grosseto', region: 'Maremma, Toscana', type: 'Natura', price: '€20/notte' },
    { slug: 'camping-gargano', name: 'Camping Gargano Bay', location: 'Vieste', region: 'Gargano, Puglia', type: 'Mare', price: '€22/notte' },
    { slug: 'camping-etna', name: 'Camping Etna View', location: 'Nicolosi', region: 'Etna, Sicilia', type: 'Montagna', price: '€18/notte' },
    { slug: 'camping-alpe-siusi', name: 'Camping Alpe di Siusi', location: 'Castelrotto', region: 'Alto Adige', type: 'Montagna', price: '€35/notte' },
    { slug: 'camping-amalfi', name: 'Camping Costiera Amalfitana', location: 'Amalfi', region: 'Costiera, Campania', type: 'Mare', price: '€30/notte' },
    { slug: 'camping-umbria-green', name: 'Camping Umbria Green', location: 'Spoleto', region: 'Valle Umbra, Umbria', type: 'Natura', price: '€18/notte' },
  ];

  // Pre-render campsite listing page
  const campsiteListUrl = `${SITE_URL}/campeggi`;
  const campsiteListTitle = 'Campeggi per Tende da Tetto in Italia | TDTC';
  const campsiteListDesc = 'Scopri i migliori campeggi in Italia per tende da tetto. Mare, montagna, lago e natura: trova il camping perfetto per la tua prossima avventura con la community.';
  let campsiteListHtml = replaceOgMeta(baseHtml, { pageUrl: campsiteListUrl, title: campsiteListTitle, description: campsiteListDesc, imageUrl: `${SITE_URL}/og-image.jpg`, ogType: 'website', canonical: campsiteListUrl });
  const campsiteLinks = campsites.map(c => `<li><a href="/campeggi/${c.slug}/">${escapeHtml(c.name)}</a> — ${escapeHtml(c.location)}, ${escapeHtml(c.region)} (${escapeHtml(c.type)}, ${escapeHtml(c.price)})</li>`).join('');
  const campsiteListStatic = `<main id="main-content"><h1>Campeggi per Tende da Tetto in Italia</h1><p>La nostra selezione dei migliori campeggi in Italia che accolgono tende da tetto. Abbiamo selezionato strutture in tutta la penisola, dal mare alla montagna, dai laghi alla campagna, per aiutarti a trovare il posto perfetto per la tua prossima avventura all'aria aperta.</p><h2>Tutti i campeggi</h2><ul>${campsiteLinks}</ul><p>Ogni campeggio è stato selezionato dalla community per la qualità dei servizi, la posizione e l'accoglienza riservata ai campeggiatori con tenda da tetto. Consulta le schede dettagliate per prezzi, servizi e recensioni.</p><nav><a href="/">Home</a> &gt; Campeggi</nav></main>`;
  campsiteListHtml = injectStaticContent(campsiteListHtml, campsiteListStatic);
  const campsiteListDir = path.join(distDir, 'campeggi');
  fs.mkdirSync(campsiteListDir, { recursive: true });
  fs.writeFileSync(path.join(campsiteListDir, 'index.html'), campsiteListHtml, 'utf-8');
  count++;

  // Pre-render individual campsite pages
  for (const campsite of campsites) {
    const pageUrl = `${SITE_URL}/campeggi/${campsite.slug}`;
    const title = `${campsite.name} — Campeggio ${campsite.type} | TDTC`;
    const description = `${campsite.name} a ${campsite.location}, ${campsite.region}. Campeggio ${campsite.type.toLowerCase()} ideale per tende da tetto. Prezzi da ${campsite.price}. Scopri servizi, posizione e recensioni.`;

    let html = replaceOgMeta(baseHtml, { pageUrl, title, description, imageUrl: `${SITE_URL}/og-image.jpg`, ogType: 'website', canonical: pageUrl });

    // Find 3 nearby campsites for cross-linking
    const campIdx = campsites.indexOf(campsite);
    const relatedCampsites = [1, 2, 3].map(i => campsites[(campIdx + i) % campsites.length]);
    const relatedLinks = relatedCampsites.map(c => `<li><a href="/campeggi/${c.slug}/">${escapeHtml(c.name)}</a> — ${escapeHtml(c.location)}</li>`).join('');

    const staticContent = `<main id="main-content"><article><h1>${escapeHtml(campsite.name)}</h1><p>${escapeHtml(description)}</p><h2>Informazioni</h2><p>Posizione: ${escapeHtml(campsite.location)}, ${escapeHtml(campsite.region)}. Tipologia: campeggio ${escapeHtml(campsite.type.toLowerCase())}. Prezzo indicativo: ${escapeHtml(campsite.price)}. Il campeggio offre piazzole adatte alle tende da tetto con spazio sufficiente per il veicolo e l'apertura della tenda. Contatta direttamente la struttura per verificare disponibilità e prenotare.</p><h2>Perché scegliere questo campeggio</h2><p>${escapeHtml(campsite.name)} si trova in una posizione privilegiata per gli amanti del campeggio con tenda da tetto. La zona offre numerose opportunità per escursioni, attività all'aria aperta e scoperta del territorio. Un punto di partenza ideale per esplorare ${escapeHtml(campsite.region)} con la tua tenda da tetto.</p><h2>Altri campeggi nella zona</h2><ul>${relatedLinks}</ul><nav><a href="/">Home</a> &gt; <a href="/campeggi/">Campeggi</a> &gt; ${escapeHtml(campsite.name)}</nav></article></main>`;
    html = injectStaticContent(html, staticContent);

    // Inject LocalBusiness JSON-LD
    const localBusinessJsonLd = {
      "@context": "https://schema.org",
      "@type": "Campground",
      "name": campsite.name,
      "address": {
        "@type": "PostalAddress",
        "addressLocality": campsite.location,
        "addressRegion": campsite.region.split(', ').pop(),
        "addressCountry": "IT"
      },
      "url": pageUrl
    };
    const jsonLdScript = `<script type="application/ld+json">${JSON.stringify(localBusinessJsonLd)}</script>`;
    html = html.replace('</head>', `${jsonLdScript}\n</head>`);

    const pageDir = path.join(distDir, 'campeggi', campsite.slug);
    fs.mkdirSync(pageDir, { recursive: true });
    fs.writeFileSync(path.join(pageDir, 'index.html'), html, 'utf-8');
    count++;
  }

  console.log(`✅ Pre-rendered ${count} pages (${guides.length} guides + ${staticPages.length} static + ${campsites.length + 1} campsites)`);
}

generateOgPages();
