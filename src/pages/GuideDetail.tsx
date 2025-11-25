import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowLeft, 
  Clock, 
  User, 
  Calendar,
  Share2,
  Bookmark,
  ThumbsUp,
  MessageCircle
} from "lucide-react";

// Dati di esempio - in futuro verranno da un database
const guidesData: Record<string, {
  title: string;
  excerpt: string;
  content: string[];
  author: string;
  authorAvatar: string;
  readTime: string;
  category: string;
  date: string;
  image: string;
  likes: number;
  comments: number;
}> = {
  "guida-completa-tende-da-tetto": {
    title: "Guida Completa alle Tende da Tetto",
    excerpt: "Tutto quello che devi sapere per scegliere la tenda da tetto perfetta per le tue avventure",
    content: [
      "Le tende da tetto rappresentano una rivoluzione nel mondo del campeggio. A differenza delle tende tradizionali, si montano sul tetto della tua auto, offrendoti comfort, praticità e una vista panoramica unica.",
      "## Perché scegliere una tenda da tetto?",
      "I vantaggi sono molteplici: montaggio rapido in pochi minuti, isolamento dal terreno (addio umidità e insetti!), maggiore sicurezza, e la possibilità di campeggiare praticamente ovunque tu possa parcheggiare.",
      "## Tipologie di tende da tetto",
      "Esistono principalmente due categorie: le tende a **soffietto** (soft-top) e quelle a **guscio rigido** (hard-top). Le prime sono più economiche e leggere, le seconde offrono maggiore comodità e velocità di apertura.",
      "### Tende a soffietto",
      "Ideali per chi inizia, hanno un prezzo più accessibile (dai 800€ ai 2000€) e si piegano riducendo l'ingombro. Il montaggio richiede circa 5-10 minuti.",
      "### Tende a guscio rigido",
      "Per i più esigenti, si aprono in pochi secondi grazie a pistoni a gas. Prezzo più elevato (dai 2000€ ai 5000€) ma comodità impareggiabile.",
      "## Come scegliere la tenda giusta",
      "Considera questi fattori: **numero di persone** (esistono modelli da 2, 3 o 4 posti), **peso massimo supportato** dal tuo veicolo, **budget disponibile**, e **frequenza di utilizzo**.",
      "## Accessori indispensabili",
      "Non dimenticare: scala di accesso, materasso di qualità (spesso incluso), telo anti-condensa, e illuminazione interna a LED.",
      "## Conclusioni",
      "Investire in una tenda da tetto significa investire in libertà. Con la giusta preparazione, ogni weekend può trasformarsi in un'avventura indimenticabile!"
    ],
    author: "Marco Rossi",
    authorAvatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&h=200",
    readTime: "8 min",
    category: "Attrezzatura",
    date: "15 Novembre 2024",
    image: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=1200&q=80",
    likes: 342,
    comments: 47
  },
  "10-campeggi-piu-belli-italia": {
    title: "I 10 Campeggi Più Belli d'Italia",
    excerpt: "Scopri i campeggi più spettacolari del nostro paese, perfetti per chi viaggia con tenda da tetto",
    content: [
      "L'Italia offre scenari mozzafiato per gli amanti del campeggio con tenda da tetto. Abbiamo selezionato per voi i 10 campeggi più belli, testati dalla nostra community.",
      "## 1. Camping Seiser Alm - Alto Adige",
      "Ai piedi dell'Alpe di Siusi, il più grande altopiano d'Europa. Vista sulle Dolomiti, aria pura e sentieri infiniti. Prezzo: €28/notte.",
      "## 2. Camping Lake Garda - Veneto",
      "Direttamente sul lago, con spiaggia privata e possibilità di sport acquatici. Ideale per famiglie. Prezzo: €25/notte.",
      "## 3. Camping Baia del Silenzio - Liguria",
      "Un angolo di paradiso tra Sestri Levante e le Cinque Terre. Mare cristallino e borghi da cartolina. Prezzo: €32/notte.",
      "## 4. Camping Dolomiti - Trentino",
      "Nel cuore della Val di Fassa, perfetto per escursioni estive e sci invernale. Prezzo: €30/notte.",
      "## 5. Camping Costa Smeralda - Sardegna",
      "Spiagge caraibiche e macchia mediterranea. Un po' caro ma ne vale ogni centesimo. Prezzo: €45/notte.",
      "## 6. Camping Lago di Como - Lombardia",
      "Atmosfera romantica, ville storiche e montagne che si tuffano nel lago. Prezzo: €27/notte.",
      "## 7. Camping Maremma - Toscana",
      "Natura selvaggia, cavalli allo stato brado e tramonti indimenticabili. Prezzo: €22/notte.",
      "## 8. Camping Gran Paradiso - Valle d'Aosta",
      "Nel primo parco nazionale italiano, tra stambecchi e ghiacciai. Prezzo: €24/notte.",
      "## 9. Camping Gargano - Puglia",
      "Foreste di pini, grotte marine e il mare più bello dell'Adriatico. Prezzo: €26/notte.",
      "## 10. Camping Etna - Sicilia",
      "Campeggiare ai piedi del vulcano attivo più alto d'Europa. Esperienza unica! Prezzo: €23/notte.",
      "## Consigli per la prenotazione",
      "Prenotate con anticipo, soprattutto in alta stagione. Molti campeggi offrono sconti per soggiorni prolungati e per i membri della nostra community!"
    ],
    author: "Sara Bianchi",
    authorAvatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&h=200",
    readTime: "12 min",
    category: "Destinazioni",
    date: "10 Novembre 2024",
    image: "https://images.unsplash.com/photo-1571863533956-01c88e79957e?auto=format&fit=crop&w=1200&q=80",
    likes: 528,
    comments: 89
  },
  "checklist-campeggio-perfetto": {
    title: "Check-list per il Campeggio Perfetto",
    excerpt: "Non dimenticare mai più nulla: la lista completa per organizzare la tua avventura",
    content: [
      "Quante volte sei arrivato al campeggio e ti sei accorto di aver dimenticato qualcosa di fondamentale? Con questa checklist non succederà più!",
      "## 🏕️ Attrezzatura Base",
      "- Tenda da tetto (ovviamente!)\n- Scala di accesso\n- Materasso e cuscini\n- Sacco a pelo adatto alla stagione\n- Telo anti-condensa\n- Illuminazione LED interna",
      "## 🍳 Cucina da Campo",
      "- Fornello a gas + bombole di ricambio\n- Set pentole da campeggio\n- Posate e piatti (meglio se riutilizzabili)\n- Tagliere e coltello multiuso\n- Borsa frigo o frigorifero portatile\n- Scorta d'acqua (minimo 5L a persona)",
      "## 👕 Abbigliamento",
      "- Vestiti a strati (la sera rinfresca!)\n- Giacca impermeabile\n- Scarpe da trekking\n- Ciabatte per la doccia\n- Costume da bagno\n- Cappello e occhiali da sole",
      "## 🧰 Attrezzi e Sicurezza",
      "- Kit pronto soccorso\n- Torcia frontale + batterie\n- Corda e moschettoni\n- Duct tape (risolve tutto!)\n- Multi-tool o coltellino svizzero\n- Caricatore portatile per telefono",
      "## 📱 Tecnologia Utile",
      "- GPS o mappe offline scaricate\n- App meteo\n- Powerbank solare\n- Radio a manovella (per emergenze)",
      "## 📋 Documenti",
      "- Documenti personali\n- Tessera sanitaria\n- Assicurazione viaggio\n- Prenotazione campeggio\n- Contatti emergenza",
      "## 💡 Pro Tips",
      "1. Prepara la borsa almeno 2 giorni prima\n2. Fai una lista personalizzata e aggiornala dopo ogni viaggio\n3. Tieni un kit base sempre pronto in auto\n4. Controlla il meteo prima di partire\n5. Avvisa sempre qualcuno del tuo itinerario",
      "Buon campeggio! 🏕️"
    ],
    author: "Luca Verdi",
    authorAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&h=200",
    readTime: "5 min",
    category: "Tips",
    date: "5 Novembre 2024",
    image: "https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?auto=format&fit=crop&w=1200&q=80",
    likes: 256,
    comments: 32
  }
};

const GuideDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const guide = slug ? guidesData[slug] : null;

  if (!guide) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container mx-auto px-4 py-20">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-3xl font-bold text-foreground mb-4">Guida non trovata</h1>
            <p className="text-muted-foreground mb-8">
              La guida che stai cercando non esiste o è stata rimossa.
            </p>
            <Link to="/">
              <Button>
                <ArrowLeft className="h-4 w-4 mr-2" />
                Torna alla Home
              </Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Image */}
        <div className="relative h-[400px] overflow-hidden">
          <img 
            src={guide.image} 
            alt={guide.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8">
            <div className="container mx-auto">
              <div className="max-w-4xl">
                <Link to="/#guide" className="inline-flex items-center text-primary hover:underline mb-4">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Torna alle Guide
                </Link>
                <Badge className="mb-4 bg-primary/90">{guide.category}</Badge>
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                  {guide.title}
                </h1>
                <p className="text-xl text-muted-foreground">{guide.excerpt}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Article Content */}
        <article className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            {/* Meta info */}
            <div className="flex flex-wrap items-center gap-6 mb-8 pb-8 border-b">
              <div className="flex items-center gap-3">
                <img 
                  src={guide.authorAvatar} 
                  alt={guide.author}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-medium text-foreground">{guide.author}</p>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4 mr-1" />
                    {guide.date}
                  </div>
                </div>
              </div>
              <div className="flex items-center text-muted-foreground">
                <Clock className="h-4 w-4 mr-2" />
                {guide.readTime} di lettura
              </div>
              <div className="flex items-center gap-4 ml-auto">
                <Button variant="ghost" size="sm">
                  <Share2 className="h-4 w-4 mr-2" />
                  Condividi
                </Button>
                <Button variant="ghost" size="sm">
                  <Bookmark className="h-4 w-4 mr-2" />
                  Salva
                </Button>
              </div>
            </div>

            {/* Content */}
            <div className="prose prose-lg max-w-none">
              {guide.content.map((paragraph, index) => {
                if (paragraph.startsWith("## ")) {
                  return (
                    <h2 key={index} className="text-2xl font-bold text-foreground mt-8 mb-4">
                      {paragraph.replace("## ", "")}
                    </h2>
                  );
                }
                if (paragraph.startsWith("### ")) {
                  return (
                    <h3 key={index} className="text-xl font-semibold text-foreground mt-6 mb-3">
                      {paragraph.replace("### ", "")}
                    </h3>
                  );
                }
                if (paragraph.startsWith("- ")) {
                  const items = paragraph.split("\n");
                  return (
                    <ul key={index} className="list-disc list-inside space-y-2 my-4 text-muted-foreground">
                      {items.map((item, i) => (
                        <li key={i}>{item.replace("- ", "")}</li>
                      ))}
                    </ul>
                  );
                }
                return (
                  <p key={index} className="text-muted-foreground leading-relaxed mb-4">
                    {paragraph}
                  </p>
                );
              })}
            </div>

            {/* Engagement */}
            <div className="flex items-center gap-6 mt-12 pt-8 border-t">
              <Button variant="outline" className="gap-2">
                <ThumbsUp className="h-4 w-4" />
                {guide.likes} Mi piace
              </Button>
              <Button variant="outline" className="gap-2">
                <MessageCircle className="h-4 w-4" />
                {guide.comments} Commenti
              </Button>
            </div>

            {/* Related Guides */}
            <div className="mt-16">
              <h3 className="text-2xl font-bold text-foreground mb-8">Altre Guide</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {Object.entries(guidesData)
                  .filter(([key]) => key !== slug)
                  .slice(0, 2)
                  .map(([key, g]) => (
                    <Link key={key} to={`/guide/${key}`}>
                      <Card className="group hover:shadow-elegant transition-all overflow-hidden">
                        <div className="aspect-video overflow-hidden">
                          <img 
                            src={g.image} 
                            alt={g.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                          />
                        </div>
                        <CardContent className="p-6">
                          <Badge variant="secondary" className="mb-2">{g.category}</Badge>
                          <h4 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                            {g.title}
                          </h4>
                          <p className="text-sm text-muted-foreground mt-2 line-clamp-2">
                            {g.excerpt}
                          </p>
                        </CardContent>
                      </Card>
                    </Link>
                  ))}
              </div>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default GuideDetail;
