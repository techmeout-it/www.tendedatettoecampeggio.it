import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
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
import campeggiFoto from "@/assets/campeggi-italia.jpg";

// Dati delle guide - in futuro verranno da un database
const allGuides = [
  {
    slug: "guida-completa-tende-da-tetto",
    title: "Guida Completa alle Tende da Tetto",
    excerpt: "Tutto quello che devi sapere per scegliere la tenda da tetto perfetta per le tue avventure",
    author: "Marco Rossi",
    readTime: "8 min",
    category: "Attrezzatura",
    date: "2024-11-15",
    dateDisplay: "15 Nov 2024",
    image: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=800&q=80"
  },
  {
    slug: "10-campeggi-piu-belli-italia",
    title: "I 10 Campeggi Più Belli d'Italia",
    excerpt: "Scopri i campeggi più spettacolari del nostro paese, perfetti per chi viaggia con tenda da tetto",
    author: "Sara Bianchi",
    readTime: "12 min",
    category: "Destinazioni",
    date: "2024-11-10",
    dateDisplay: "10 Nov 2024",
    image: campeggiFoto
  },
  {
    slug: "checklist-campeggio-perfetto",
    title: "Check-list per il Campeggio Perfetto",
    excerpt: "Non dimenticare mai più nulla: la lista completa per organizzare la tua avventura",
    author: "Luca Verdi",
    readTime: "5 min",
    category: "Tips",
    date: "2024-11-05",
    dateDisplay: "5 Nov 2024",
    image: "https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?auto=format&fit=crop&w=800&q=80"
  },
  {
    slug: "manutenzione-tenda-da-tetto",
    title: "Manutenzione della Tenda da Tetto",
    excerpt: "Come prenderti cura della tua tenda per farla durare nel tempo: pulizia, impermeabilizzazione e stoccaggio",
    author: "Marco Rossi",
    readTime: "6 min",
    category: "Attrezzatura",
    date: "2024-11-01",
    dateDisplay: "1 Nov 2024",
    image: "https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?auto=format&fit=crop&w=800&q=80"
  },
  {
    slug: "campeggio-invernale-consigli",
    title: "Campeggio Invernale: Guida Completa",
    excerpt: "Tutti i segreti per campeggiare con la tenda da tetto anche in inverno: attrezzatura, isolamento e sicurezza",
    author: "Giovanni Neri",
    readTime: "10 min",
    category: "Tips",
    date: "2024-10-28",
    dateDisplay: "28 Ott 2024",
    image: "https://images.unsplash.com/photo-1517824806704-9040b037703b?auto=format&fit=crop&w=800&q=80"
  },
  {
    slug: "migliori-accessori-campeggio",
    title: "I 15 Accessori Indispensabili",
    excerpt: "Dalla cucina da campo all'illuminazione: gli accessori che non possono mancare nel tuo kit",
    author: "Sara Bianchi",
    readTime: "7 min",
    category: "Attrezzatura",
    date: "2024-10-20",
    dateDisplay: "20 Ott 2024",
    image: "https://images.unsplash.com/photo-1510672981848-a1c4f1cb5ccf?auto=format&fit=crop&w=800&q=80"
  },
  {
    slug: "viaggiare-con-bambini-tenda-tetto",
    title: "Viaggiare con Bambini in Tenda da Tetto",
    excerpt: "Consigli pratici per organizzare avventure family-friendly: sicurezza, comfort e divertimento",
    author: "Laura Gialli",
    readTime: "9 min",
    category: "Tips",
    date: "2024-10-15",
    dateDisplay: "15 Ott 2024",
    image: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=800&q=80"
  },
  {
    slug: "sardegna-tenda-tetto-itinerario",
    title: "Sardegna in Tenda da Tetto: Itinerario 7 Giorni",
    excerpt: "Un viaggio completo alla scoperta delle spiagge più belle, con tappe e campeggi consigliati",
    author: "Luca Verdi",
    readTime: "15 min",
    category: "Destinazioni",
    date: "2024-10-10",
    dateDisplay: "10 Ott 2024",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80"
  },
  {
    slug: "dolomiti-tenda-tetto-itinerario",
    title: "Dolomiti in Tenda da Tetto: Itinerario 5 Giorni",
    excerpt: "Tra passi alpini e laghi cristallini: l'itinerario perfetto per gli amanti della montagna",
    author: "Marco Rossi",
    readTime: "12 min",
    category: "Destinazioni",
    date: "2024-10-05",
    dateDisplay: "5 Ott 2024",
    image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=800&q=80"
  }
];

const categories = ["Tutte", "Attrezzatura", "Destinazioni", "Tips"];

type SortOrder = "newest" | "oldest";

const GuideList = () => {
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
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-b from-primary/10 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex items-center justify-center mb-6">
                <BookOpen className="h-12 w-12 text-primary mr-4" />
                <h1 className="text-4xl md:text-5xl font-bold text-foreground">
                  Guide & Tutorial
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
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                        <CardHeader className="pb-3">
                          <div className="flex items-center justify-between mb-2">
                            <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                              {guide.category}
                            </Badge>
                            <div className="flex items-center text-sm text-muted-foreground">
                              <Clock className="h-4 w-4 mr-1" />
                              {guide.readTime}
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
