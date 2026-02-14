export interface GuideItem {
  slug: string;
  title: string;
  excerpt: string;
  author: string;
  readTime: string;
  location: string;
  category: string;
  date: string;       // formato ISO per sorting (es. "2026-02-14")
  dateDisplay: string; // formato visualizzato (es. "14 Feb 2026")
  image: string;
}

// Dati delle guide - in futuro verranno da un database
// L'ordine non conta: le viste ordinano per data automaticamente
const allGuides: GuideItem[] = [
  {
    slug: "tende-da-tetto-confronto-morbide-guscio-rigido-ibride",
    title: "Tende da tetto a confronto: morbide vs a guscio rigido vs ibride",
    excerpt: "Guida completa alle tre famiglie di tende da tetto: morbide a libro, guscio rigido a pantografo e ibride. Vantaggi, svantaggi e quale scegliere per il tuo stile di viaggio.",
    author: "Lo Staff di Tende da Tetto",
    readTime: "5 min",
    location: "Italia",
    category: "Attrezzatura",
    date: "2026-01-31",
    dateDisplay: "31 Gen 2026",
    image: "/img_articles/gusci_comparazione/tende_gusci.png"
  },
  {
    slug: "dieci-giorni-liberta-elba-tenda-tetto",
    title: "Dieci giorni di libertà: due donne, una tenda da tetto e l'Italia che profuma di sale",
    excerpt: "Un viaggio di 10 giorni dall'auto camperizzata con tenda da tetto: da Genova all'Isola d'Elba, tra spiagge, biciclette e la Toscana che respira.",
    author: "Nat e Vale",
    readTime: "4 min",
    location: "Isola d'Elba, Toscana",
    category: "Destinazioni",
    date: "2026-01-31",
    dateDisplay: "31 Gen 2026",
    image: "/img_articles/nat_vale_elba/01_elba.jpg"
  },
  {
    slug: "viaggio-nozze-tenda-tetto-namibia",
    title: "Viaggio di nozze in tenda da tetto in Namibia",
    excerpt: "Dove forse tutto è cominciato: la storia di Chiara e Piero, un budget limitato, e un viaggio indimenticabile di 17 giorni e 5.000 km attraverso deserti, oceani e savane.",
    author: "Piero e Chiara",
    readTime: "5 min",
    location: "Namibia",
    category: "Destinazioni",
    date: "2026-01-29",
    dateDisplay: "29 Gen 2026",
    image: "/img_articles/namibia_viaggio_nozze/DSCN1226.JPG"
  },
  {
    slug: "forte-leone-dachzelt-camp-italia",
    title: "Forte Leone: da scoperta casuale a DACHZELT CAMP Italia 🇮🇹",
    excerpt: "A 1.500 metri di quota, immerso nelle montagne venete, il Forte Leone è diventato teatro di un evento epico: il gemellaggio tra la community italiana e quella tedesca dei Dachzeltnomaden.",
    author: "Lo Staff di Tende da Tetto",
    readTime: "4 min",
    location: "Forte Leone, Veneto",
    category: "Eventi",
    date: "2026-01-29",
    dateDisplay: "29 Gen 2026",
    image: "/img_articles/forte_leone_raduno_articolo/20250704_DACHZELT-CAMP-Italia-2025_Patrick-Becker_Gruppenfoto_Drohne_.jpg"
  },
  {
    slug: "spagna-del-nord-on-the-road",
    title: "Spagna del Nord on the road: 19 giorni di libertà e natura!",
    excerpt: "Un viaggio indimenticabile attraverso Paesi Baschi, Cantabria, Asturie e Galizia con la tenda da tetto. 19 giorni di strade, oceano e montagne.",
    author: "Sara Sarti",
    readTime: "3 min",
    location: "Spagna del Nord",
    category: "Destinazioni",
    date: "2026-01-10",
    dateDisplay: "10 Gen 2026",
    image: "/img_articles/spagna_del_nord_sara_guido/IMG_20250817_152218.jpg"
  },
  {
    slug: "tende-da-tetto-super-ciurma-tempo-lento",
    title: "Tende da Tetto, La Super Ciurma e L'Arte del Tempo Lento",
    excerpt: "Viaggiare con bambini e cani, camperizzazione fai-da-te e l'arte di recuperare il tempo lento: la storia di una famiglia nomade accessibile.",
    author: "Giulia e Brenno",
    readTime: "5 min",
    location: "Italia",
    category: "Tips",
    date: "2026-01-09",
    dateDisplay: "9 Gen 2026",
    image: "/img_articles/arte_tempo_lento_giulia_brenno/70bcbd07-91d1-4d9a-ab43-d25822677043.jpg"
  },
  {
    slug: "dormire-tenda-freddo-52-gallerie-pasubio",
    title: "Dormire in tenda da tetto anche col freddo? Sì, si può!",
    excerpt: "La nostra esperienza alle 52 Gallerie del Pasubio: come affrontare il freddo autunnale in tenda da tetto con l'attrezzatura giusta.",
    author: "Sara Sarti",
    readTime: "6 min",
    location: "52 Gallerie del Pasubio",
    category: "Tips",
    date: "2026-01-08",
    dateDisplay: "8 Gen 2026",
    image: "/img_articles/dormire_freddo/WhatsApp%20Image%202026-01-10%20at%2017.06.43%20%282%29.jpeg"
  },
  {
    slug: "viaggiare-famiglia-minivan-camperboxes",
    title: "Viaggiare in famiglia con il nostro minivan: esperienze di libertà e scoperta",
    excerpt: "La nostra vita in viaggio con un Ford Tourneo allestito fai-da-te: famiglia, cane e avventure tra Val Trebbia, Liguria, Elba e Abruzzo.",
    author: "Arianna e David di Camperboxes",
    readTime: "12 min",
    location: "Italia",
    category: "Destinazioni",
    date: "2026-01-07",
    dateDisplay: "7 Gen 2026",
    image: "/img_articles/i_nostri_viaggi_in_camper/7-van-camper-boxes.jpg"
  },
  {
    slug: "campeggio-libero-tenda-tetto-monte-grappa",
    title: "Campeggio libero in tenda da tetto: due giorni di solitudine sul Monte Grappa",
    excerpt: "Due giorni in solitaria sul Monte Grappa con la Jeep Renegade 4x4 e la tenda da tetto Yakima: silenzio, natura e campeggio libero responsabile.",
    author: "Igor Ferrazzi",
    readTime: "4 min",
    location: "Monte Grappa, Italia",
    category: "Destinazioni",
    date: "2026-02-12",
    dateDisplay: "12 Feb 2026",
    image: "/img_articles/campeggio__libero_Monte_grappa/Immagine1.jpg"
  },
  {
    slug: "intervista-esperti-carcamp-menabo",
    title: "Intervista con gli esperti di Carcamp e Menabò",
    excerpt: "Per tutta la community l'intervista fatta con gli esperti di settore Carcamp e Menabò per la conoscenza dei dettagli tecnici delle barre portatutto.",
    author: "Lo Staff di Tende da Tetto",
    readTime: "8 min",
    location: "Italia",
    category: "Attrezzatura",
    date: "2026-02-14",
    dateDisplay: "14 Feb 2026",
    image: "/img_articles/barre_menabo/carcamp_menabo_cover.png"
  }
];

export default allGuides;
