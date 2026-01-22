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
  MapPin, 
  Star, 
  Search,
  Filter,
  ArrowUpDown,
  Wifi,
  Droplets,
  Car,
  Tent,
  Waves,
  Mountain,
  TreePine
} from "lucide-react";

// Dati dei campeggi - in futuro verranno da un database
const allCampsites = [
  {
    slug: "camping-lake-garda",
    name: "Camping Lake Garda",
    location: "Lazise",
    region: "Lago di Garda, Veneto",
    rating: 4.8,
    reviewCount: 234,
    price: 25,
    priceDisplay: "€25/notte",
    features: ["Wifi", "Docce", "Parcheggio", "Area Tende"],
    type: "Lago",
    image: "https://images.unsplash.com/photo-1571863533956-01c88e79957e?auto=format&fit=crop&w=800&q=80"
  },
  {
    slug: "camping-dolomiti",
    name: "Camping Dolomiti",
    location: "Canazei",
    region: "Val di Fassa, Trentino",
    rating: 4.9,
    reviewCount: 189,
    price: 30,
    priceDisplay: "€30/notte",
    features: ["Wifi", "Docce", "Parcheggio", "Area Tende", "Sauna"],
    type: "Montagna",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800&q=80"
  },
  {
    slug: "camping-costa-smeralda",
    name: "Camping Costa Smeralda",
    location: "Arzachena",
    region: "Sardegna",
    rating: 4.7,
    reviewCount: 312,
    price: 35,
    priceDisplay: "€35/notte",
    features: ["Wifi", "Docce", "Parcheggio", "Spiaggia"],
    type: "Mare",
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80"
  },
  {
    slug: "camping-cinque-terre",
    name: "Camping Cinque Terre",
    location: "Monterosso",
    region: "Liguria",
    rating: 4.6,
    reviewCount: 156,
    price: 32,
    priceDisplay: "€32/notte",
    features: ["Wifi", "Docce", "Parcheggio", "Area Tende"],
    type: "Mare",
    image: "https://images.unsplash.com/photo-1499678329028-101435549a4e?auto=format&fit=crop&w=800&q=80"
  },
  {
    slug: "camping-lago-como",
    name: "Camping Lago di Como",
    location: "Menaggio",
    region: "Lombardia",
    rating: 4.5,
    reviewCount: 98,
    price: 27,
    priceDisplay: "€27/notte",
    features: ["Wifi", "Docce", "Parcheggio", "Area Tende", "Noleggio Barche"],
    type: "Lago",
    image: "https://images.unsplash.com/photo-1536599018102-9f803c140fc1?auto=format&fit=crop&w=800&q=80"
  },
  {
    slug: "camping-gran-paradiso",
    name: "Camping Gran Paradiso",
    location: "Cogne",
    region: "Valle d'Aosta",
    rating: 4.8,
    reviewCount: 145,
    price: 24,
    priceDisplay: "€24/notte",
    features: ["Docce", "Parcheggio", "Area Tende", "Escursioni"],
    type: "Montagna",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80"
  },
  {
    slug: "camping-maremma",
    name: "Camping Maremma Wild",
    location: "Grosseto",
    region: "Toscana",
    rating: 4.4,
    reviewCount: 87,
    price: 22,
    priceDisplay: "€22/notte",
    features: ["Docce", "Parcheggio", "Area Tende", "Cavalli"],
    type: "Natura",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80"
  },
  {
    slug: "camping-gargano",
    name: "Camping Gargano Bay",
    location: "Vieste",
    region: "Puglia",
    rating: 4.6,
    reviewCount: 201,
    price: 26,
    priceDisplay: "€26/notte",
    features: ["Wifi", "Docce", "Parcheggio", "Spiaggia", "Area Tende"],
    type: "Mare",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80"
  },
  {
    slug: "camping-etna",
    name: "Camping Etna View",
    location: "Nicolosi",
    region: "Sicilia",
    rating: 4.7,
    reviewCount: 134,
    price: 23,
    priceDisplay: "€23/notte",
    features: ["Wifi", "Docce", "Parcheggio", "Area Tende", "Escursioni Vulcano"],
    type: "Montagna",
    image: "https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&w=800&q=80"
  },
  {
    slug: "camping-alpe-siusi",
    name: "Camping Alpe di Siusi",
    location: "Castelrotto",
    region: "Alto Adige",
    rating: 4.9,
    reviewCount: 178,
    price: 28,
    priceDisplay: "€28/notte",
    features: ["Wifi", "Docce", "Parcheggio", "Area Tende", "Spa"],
    type: "Montagna",
    image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=800&q=80"
  },
  {
    slug: "camping-amalfi",
    name: "Camping Costiera Amalfitana",
    location: "Positano",
    region: "Campania",
    rating: 4.5,
    reviewCount: 112,
    price: 38,
    priceDisplay: "€38/notte",
    features: ["Wifi", "Docce", "Parcheggio", "Vista Mare"],
    type: "Mare",
    image: "https://images.unsplash.com/photo-1534008757030-27299c4371b6?auto=format&fit=crop&w=800&q=80"
  },
  {
    slug: "camping-umbria-green",
    name: "Camping Umbria Green",
    location: "Assisi",
    region: "Umbria",
    rating: 4.3,
    reviewCount: 67,
    price: 20,
    priceDisplay: "€20/notte",
    features: ["Docce", "Parcheggio", "Area Tende", "Agricampeggio"],
    type: "Natura",
    image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=800&q=80"
  }
];

const regions = ["Tutte", "Nord Italia", "Centro Italia", "Sud Italia", "Isole"];
const types = ["Tutti", "Mare", "Montagna", "Lago", "Natura"];

type SortOption = "rating" | "price-low" | "price-high" | "reviews";

const getFeatureIcon = (feature: string) => {
  if (feature.toLowerCase().includes("wifi")) return Wifi;
  if (feature.toLowerCase().includes("docc")) return Droplets;
  if (feature.toLowerCase().includes("parcheggio")) return Car;
  if (feature.toLowerCase().includes("tenda") || feature.toLowerCase().includes("tende")) return Tent;
  return MapPin;
};

const getTypeIcon = (type: string) => {
  switch (type) {
    case "Mare": return Waves;
    case "Montagna": return Mountain;
    case "Lago": return Waves;
    case "Natura": return TreePine;
    default: return MapPin;
  }
};

const getRegionFilter = (region: string): string[] => {
  switch (region) {
    case "Nord Italia":
      return ["Veneto", "Trentino", "Lombardia", "Valle d'Aosta", "Alto Adige", "Liguria"];
    case "Centro Italia":
      return ["Toscana", "Umbria"];
    case "Sud Italia":
      return ["Puglia", "Campania"];
    case "Isole":
      return ["Sardegna", "Sicilia"];
    default:
      return [];
  }
};

const CampsiteList = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("Tutte");
  const [selectedType, setSelectedType] = useState("Tutti");
  const [sortOption, setSortOption] = useState<SortOption>("rating");

  const filteredCampsites = allCampsites
    .filter((campsite) => {
      const matchesSearch = campsite.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           campsite.region.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           campsite.location.toLowerCase().includes(searchQuery.toLowerCase());
      
      const regionFilters = getRegionFilter(selectedRegion);
      const matchesRegion = selectedRegion === "Tutte" || 
                           regionFilters.some(r => campsite.region.includes(r));
      
      const matchesType = selectedType === "Tutti" || campsite.type === selectedType;
      
      return matchesSearch && matchesRegion && matchesType;
    })
    .sort((a, b) => {
      switch (sortOption) {
        case "rating":
          return b.rating - a.rating;
        case "price-low":
          return a.price - b.price;
        case "price-high":
          return b.price - a.price;
        case "reviews":
          return b.reviewCount - a.reviewCount;
        default:
          return 0;
      }
    });

  const resetFilters = () => {
    setSearchQuery("");
    setSelectedRegion("Tutte");
    setSelectedType("Tutti");
    setSortOption("rating");
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Campeggi in Italia - Mappa e Lista Selezionata"
        description="Scopri i migliori campeggi d'Italia testati e recensiti dalla community. Trova il campeggio perfetto per le tue avventure con tenda da tetto. Filtra per regione, tipo e valutazione."
        canonicalUrl={typeof window !== 'undefined' ? `${window.location.origin}/campeggi` : ''}
        keywords="campeggi italia, campeggi tenda da tetto, campeggi montagna, campeggi mare, campeggi lago, campeggi recensioni"
        ogType="website"
      />
      <BreadcrumbSchema 
        items={[
          { name: 'Home', url: typeof window !== 'undefined' ? window.location.origin : '' },
          { name: 'Campeggi', url: typeof window !== 'undefined' ? `${window.location.origin}/campeggi` : '' }
        ]}
      />
      <Header />
      <main id="main-content">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-b from-primary/10 to-background" aria-label="Sezione campeggi">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex items-center justify-center mb-6">
                <MapPin className="h-12 w-12 text-primary mr-4" aria-hidden="true" />
                <h1 className="text-4xl md:text-5xl font-bold text-foreground">
                  Campeggi in Italia
                </h1>
              </div>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Scopri i migliori campeggi d'Italia selezionati dalla nostra community. 
                Tutti testati e recensiti da chi viaggia con tenda da tetto. 
                Trova le destinazioni perfette per le tue avventure all'aperto, 
                dalla montagna al mare, dai laghi alpini alla costa sarda.
              </p>
              
              {/* Search Bar */}
              <div className="max-w-xl mx-auto relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" aria-hidden="true" />
                <Input
                  type="text"
                  placeholder="Cerca per nome, regione o località..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  aria-label="Cerca campeggi"
                  className="pl-12 py-6 text-lg bg-background/80 border-primary/20 focus:border-primary"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Filters & Content */}
        <section className="py-12" aria-label="Filtri e risultati campeggi">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              {/* Filters Row */}
              <div className="flex flex-wrap items-center gap-4 mb-8 p-4 bg-secondary/30 rounded-lg">
                <Filter className="h-5 w-5 text-muted-foreground" aria-hidden="true" />
                
                {/* Region Filter */}
                <Select value={selectedRegion} onValueChange={setSelectedRegion}>
                  <SelectTrigger className="w-[160px] border-primary/30" aria-label="Filtra per regione">
                    <SelectValue placeholder="Regione" />
                  </SelectTrigger>
                  <SelectContent>
                    {regions.map((region) => (
                      <SelectItem key={region} value={region}>{region}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                {/* Type Filter */}
                <Select value={selectedType} onValueChange={setSelectedType}>
                  <SelectTrigger className="w-[140px] border-primary/30" aria-label="Filtra per tipo di campeggio">
                    <SelectValue placeholder="Tipo" />
                  </SelectTrigger>
                  <SelectContent>
                    {types.map((type) => (
                      <SelectItem key={type} value={type}>{type}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                {/* Sort */}
                <div className="flex items-center gap-2 ml-auto">
                  <ArrowUpDown className="h-4 w-4 text-muted-foreground" aria-hidden="true" />
                  <Select value={sortOption} onValueChange={(value: SortOption) => setSortOption(value)}>
                    <SelectTrigger className="w-[180px] border-primary/30" aria-label="Ordina campeggi per">
                      <SelectValue placeholder="Ordina per" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="rating">Miglior valutazione</SelectItem>
                      <SelectItem value="reviews">Più recensiti</SelectItem>
                      <SelectItem value="price-low">Prezzo: basso → alto</SelectItem>
                      <SelectItem value="price-high">Prezzo: alto → basso</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <span className="text-sm text-muted-foreground" aria-live="polite">
                  {filteredCampsites.length} {filteredCampsites.length === 1 ? "campeggio" : "campeggi"}
                </span>
              </div>

              {/* Campsites Grid */}
              {filteredCampsites.length > 0 ? (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredCampsites.map((campsite, index) => {
                    const TypeIcon = getTypeIcon(campsite.type);
                    return (
                      <Link 
                        key={index} 
                        to={`/campeggi/${campsite.slug}`}
                        aria-label={`Visualizza dettagli ${campsite.name}`}
                      >
                        <Card className="group hover:shadow-elegant transition-all duration-300 border-0 bg-card/60 backdrop-blur h-full">
                          <div className="aspect-video overflow-hidden rounded-t-lg relative">
                            <img 
                              src={campsite.image} 
                              alt={campsite.name}
                              loading="lazy"
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                            <Badge className="absolute top-3 left-3 bg-background/90 text-foreground">
                              <TypeIcon className="h-3 w-3 mr-1" aria-hidden="true" />
                              {campsite.type}
                            </Badge>
                          </div>
                          <CardHeader className="pb-3">
                            <div className="flex items-center justify-between mb-2">
                              <div className="flex items-center">
                                <Star className="h-4 w-4 text-accent fill-accent mr-1" aria-hidden="true" />
                                <span className="text-sm font-medium">{campsite.rating}</span>
                                <span className="text-xs text-muted-foreground ml-1">
                                  ({campsite.reviewCount})
                                </span>
                              </div>
                              <Badge variant="secondary" className="bg-accent/10 text-accent border-accent/20">
                                {campsite.priceDisplay}
                              </Badge>
                            </div>
                            <CardTitle className="text-xl group-hover:text-primary transition-colors">
                              {campsite.name}
                            </CardTitle>
                            <p className="text-muted-foreground text-sm flex items-center">
                              <MapPin className="h-4 w-4 mr-1" aria-hidden="true" />
                              {campsite.region}
                            </p>
                          </CardHeader>
                          <CardContent className="pt-0">
                            <div className="flex flex-wrap gap-2">
                              {campsite.features.slice(0, 4).map((feature, idx) => {
                                const Icon = getFeatureIcon(feature);
                                return (
                                  <div key={idx} className="flex items-center text-xs text-muted-foreground bg-secondary/50 rounded-full px-3 py-1">
                                    <Icon className="h-3 w-3 mr-1" aria-hidden="true" />
                                    {feature}
                                  </div>
                                );
                              })}
                              {campsite.features.length > 4 && (
                                <div className="text-xs text-muted-foreground bg-secondary/50 rounded-full px-3 py-1">
                                  +{campsite.features.length - 4}
                                </div>
                              )}
                            </div>
                          </CardContent>
                        </Card>
                      </Link>
                    );
                  })}
                </div>
              ) : (
                <div className="text-center py-16">
                  <MapPin className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-foreground mb-2">Nessun campeggio trovato</h3>
                  <p className="text-muted-foreground mb-6">
                    Prova a modificare i filtri o la ricerca
                  </p>
                  <Button variant="outline" onClick={resetFilters}>
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

export default CampsiteList;
