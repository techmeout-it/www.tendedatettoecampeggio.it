import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { BreadcrumbSchema } from "@/components/StructuredData";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { 
  Clock, 
  User, 
  ArrowRight, 
  BookOpen, 
  Search,
  Filter,
  ArrowUpDown
} from "lucide-react";

// Dati delle guide - in futuro verranno da un database
const allGuides = [
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
    image: "/img_articles/dormire_freddo/WhatsApp%20Image%202026-01-10%20at%2017.06.43%20(2).jpeg"
  },  {
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
  }
];

const categories = ["Tutte", "Attrezzatura", "Destinazioni", "Tips"];

type SortOrder = "newest" | "oldest";

const GuideList = () => {
  const siteUrl = typeof window !== 'undefined' ? window.location.origin : '';
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Tutte");
  const [sortOrder, setSortOrder] = useState<SortOrder>("newest");

  const filteredGuides = allGuides
    .filter((guide) => {
      const matchesSearch = guide.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           guide.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === "Tutte" || guide.category === selectedCategory;
      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => {
      const dateA = new Date(a.date).getTime();
      const dateB = new Date(b.date).getTime();
      return sortOrder === "newest" ? dateB - dateA : dateA - dateB;
    });

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Guide e Articoli sul Campeggio con Tende da Tetto"
        description="Scopri guide pratiche, itinerari e consigli per le tue avventure con la tenda da tetto. Destinazioni, attrezzatura e tips dalla community italiana."
        canonicalUrl={`${siteUrl}/guide`}
        keywords="guide tende da tetto, itinerari campeggio, consigli outdoor, destinazioni campeggio Italia"
      />
      <BreadcrumbSchema 
        items={[
          { name: 'Home', url: siteUrl },
          { name: 'Guide', url: `${siteUrl}/guide` }
        ]}
      />
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-b from-primary/10 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex items-center justify-center mb-6">
                <BookOpen className="h-12 w-12 text-primary mr-4" />
                <h1 className="text-4xl md:text-5xl font-bold text-foreground">
                  Articoli & Guide
                </h1>
              </div>
              <p className="text-xl text-muted-foreground mb-8">
                Tutto quello che devi sapere per vivere al meglio le tue avventure con la tenda da tetto. 
                Guide pratiche, itinerari e consigli dalla nostra community di esperti.
              </p>
              
              {/* Search Bar */}
              <div className="max-w-xl mx-auto relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Cerca una guida..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 py-6 text-lg bg-background/80 border-primary/20 focus:border-primary"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Filters & Content */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              {/* Category Filters */}
              <div className="flex flex-wrap items-center gap-3 mb-8">
                <div className="flex items-center gap-3 flex-wrap">
                  <Filter className="h-5 w-5 text-muted-foreground" />
                  {categories.map((category) => (
                    <Button
                      key={category}
                      variant={selectedCategory === category ? "default" : "outline"}
                      size="sm"
                      onClick={() => setSelectedCategory(category)}
                      className={selectedCategory === category 
                        ? "bg-primary" 
                        : "border-primary/30 text-muted-foreground hover:text-primary hover:border-primary"
                      }
                    >
                      {category}
                    </Button>
                  ))}
                </div>
                
                <div className="flex items-center gap-3 ml-auto">
                  <div className="flex items-center gap-2">
                    <ArrowUpDown className="h-4 w-4 text-muted-foreground" />
                    <Select value={sortOrder} onValueChange={(value: SortOrder) => setSortOrder(value)}>
                      <SelectTrigger className="w-[180px] border-primary/30">
                        <SelectValue placeholder="Ordina per data" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="newest">Più recenti</SelectItem>
                        <SelectItem value="oldest">Meno recenti</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <span className="text-sm text-muted-foreground hidden sm:inline">
                    {filteredGuides.length} {filteredGuides.length === 1 ? "guida" : "guide"}
                  </span>
                </div>
              </div>

              {/* Guides Grid */}
              {filteredGuides.length > 0 ? (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredGuides.map((guide, index) => (
                    <Link key={index} to={`/guide/${guide.slug}`}>
                      <Card className="group hover:shadow-elegant transition-all duration-300 border-0 bg-card/60 backdrop-blur h-full">
                        <div className="aspect-video overflow-hidden rounded-t-lg">
                          <img 
                            src={guide.image} 
                            alt={guide.title}
                            loading="lazy"
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                        <CardHeader className="pb-3">
                          <div className="flex items-center justify-between mb-2">
                            <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                              {guide.category}
                            </Badge>
                            <div className="flex items-center gap-3 text-sm text-muted-foreground">
                              <div className="flex items-center">
                                <Clock className="h-4 w-4 mr-1" />
                                {guide.readTime}
                              </div>
                              {guide.location && (
                                <div className="flex items-center">
                                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                  </svg>
                                  {guide.location}
                                </div>
                              )}
                            </div>
                          </div>
                          <CardTitle className="text-xl group-hover:text-primary transition-colors line-clamp-2">
                            {guide.title}
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="pt-0">
                          <p className="text-muted-foreground mb-4 line-clamp-3">
                            {guide.excerpt}
                          </p>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center text-sm text-muted-foreground">
                            <User className="h-4 w-4 mr-1" />
                            {guide.author}
                          </div>
                          <span className="text-sm text-muted-foreground">{guide.dateDisplay}</span>
                          </div>
                        </CardContent>
                      </Card>
                    </Link>
                  ))}
                </div>
              ) : (
                <div className="text-center py-16">
                  <BookOpen className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-foreground mb-2">Nessuna guida trovata</h3>
                  <p className="text-muted-foreground mb-6">
                    Prova a modificare i filtri o la ricerca
                  </p>
                  <Button 
                    variant="outline" 
                    onClick={() => { setSearchQuery(""); setSelectedCategory("Tutte"); setSortOrder("newest"); }}
                  >
                    Resetta filtri
                  </Button>
                </div>
              )}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default GuideList;
