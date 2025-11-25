import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowLeft, 
  MapPin, 
  Star, 
  Wifi, 
  Droplets, 
  Car, 
  Tent,
  Phone,
  Globe,
  Mail,
  Calendar,
  Users,
  CheckCircle,
  XCircle,
  Navigation,
  Share2,
  Heart
} from "lucide-react";

// Dati di esempio - in futuro verranno da un database
const campsitesData: Record<string, {
  name: string;
  location: string;
  region: string;
  rating: number;
  reviewCount: number;
  price: string;
  description: string;
  features: string[];
  amenities: { name: string; available: boolean }[];
  images: string[];
  contact: {
    phone: string;
    email: string;
    website: string;
  };
  coordinates: { lat: number; lng: number };
  openingPeriod: string;
  maxCapacity: number;
  rules: string[];
  reviews: {
    author: string;
    avatar: string;
    rating: number;
    date: string;
    text: string;
  }[];
}> = {
  "camping-lake-garda": {
    name: "Camping Lake Garda",
    location: "Via del Lago 45, Lazise",
    region: "Lago di Garda, Veneto",
    rating: 4.8,
    reviewCount: 234,
    price: "€25/notte",
    description: "Situato direttamente sulle rive del Lago di Garda, questo campeggio offre una combinazione perfetta di relax e avventura. Con accesso diretto alla spiaggia, aree ombreggiate e una vista mozzafiato sulle montagne circostanti, è il luogo ideale per chi viaggia con tenda da tetto.",
    features: ["Wifi gratuito", "Docce calde", "Parcheggio", "Area Tende da Tetto", "Spiaggia privata", "Ristorante", "Market"],
    amenities: [
      { name: "WiFi gratuito", available: true },
      { name: "Docce calde 24h", available: true },
      { name: "Parcheggio dedicato RTT", available: true },
      { name: "Corrente elettrica", available: true },
      { name: "Scarico acque grigie", available: true },
      { name: "Lavanderia", available: true },
      { name: "Ristorante/Bar", available: true },
      { name: "Market/Minimarket", available: true },
      { name: "Parco giochi", available: true },
      { name: "Animali ammessi", available: true },
      { name: "Piscina", available: false },
      { name: "Noleggio bici", available: true },
    ],
    images: [
      "https://images.unsplash.com/photo-1571863533956-01c88e79957e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1537905569824-f89f14cceb68?auto=format&fit=crop&w=800&q=80"
    ],
    contact: {
      phone: "+39 045 123 4567",
      email: "info@campinglakegarda.it",
      website: "www.campinglakegarda.it"
    },
    coordinates: { lat: 45.5050, lng: 10.7350 },
    openingPeriod: "1 Aprile - 31 Ottobre",
    maxCapacity: 150,
    rules: [
      "Check-in: 14:00 - 20:00",
      "Check-out: entro le 11:00",
      "Silenzio dalle 23:00 alle 7:00",
      "Animali al guinzaglio",
      "Divieto di fuochi aperti"
    ],
    reviews: [
      {
        author: "Marco T.",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=100&h=100",
        rating: 5,
        date: "Ottobre 2024",
        text: "Campeggio fantastico! Posizione perfetta sul lago, personale gentilissimo. Area tende da tetto ben organizzata con prese elettriche vicine. Torneremo sicuramente!"
      },
      {
        author: "Laura M.",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&h=100",
        rating: 4,
        date: "Settembre 2024",
        text: "Bella esperienza, docce sempre pulite e calde. Unica pecca il WiFi un po' lento nelle ore di punta. La spiaggia è uno spettacolo!"
      },
      {
        author: "Giovanni R.",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&h=100",
        rating: 5,
        date: "Agosto 2024",
        text: "Top! Abbiamo passato una settimana indimenticabile. Il ristorante interno offre ottimi piatti a prezzi onesti. Consigliato per famiglie."
      }
    ]
  },
  "camping-dolomiti": {
    name: "Camping Dolomiti",
    location: "Strada Dolomites 12, Canazei",
    region: "Val di Fassa, Trentino",
    rating: 4.9,
    reviewCount: 189,
    price: "€30/notte",
    description: "Nel cuore delle Dolomiti, patrimonio UNESCO, questo campeggio offre un'esperienza unica tra le montagne più belle del mondo. Ideale sia per escursionisti estivi che per sciatori invernali, con vista diretta sulle vette più iconiche.",
    features: ["Wifi gratuito", "Docce calde", "Parcheggio", "Area Tende da Tetto", "Sauna", "Noleggio attrezzatura"],
    amenities: [
      { name: "WiFi gratuito", available: true },
      { name: "Docce calde 24h", available: true },
      { name: "Parcheggio dedicato RTT", available: true },
      { name: "Corrente elettrica", available: true },
      { name: "Scarico acque grigie", available: true },
      { name: "Lavanderia", available: true },
      { name: "Ristorante/Bar", available: true },
      { name: "Market/Minimarket", available: false },
      { name: "Sauna e wellness", available: true },
      { name: "Animali ammessi", available: true },
      { name: "Ski storage", available: true },
      { name: "Noleggio attrezzatura", available: true },
    ],
    images: [
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=800&q=80"
    ],
    contact: {
      phone: "+39 0462 765 432",
      email: "info@campingdolomiti.it",
      website: "www.campingdolomiti.it"
    },
    coordinates: { lat: 46.4767, lng: 11.7703 },
    openingPeriod: "Tutto l'anno",
    maxCapacity: 80,
    rules: [
      "Check-in: 15:00 - 19:00",
      "Check-out: entro le 10:00",
      "Silenzio dalle 22:00 alle 8:00",
      "Catene da neve obbligatorie in inverno",
      "Prenotazione obbligatoria"
    ],
    reviews: [
      {
        author: "Stefano B.",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&h=100",
        rating: 5,
        date: "Novembre 2024",
        text: "Incredibile! Svegliarsi con le Dolomiti davanti è impagabile. Struttura impeccabile, sauna perfetta dopo una giornata sulle piste."
      }
    ]
  },
  "camping-costa-smeralda": {
    name: "Camping Costa Smeralda",
    location: "Località Cala di Volpe, Arzachena",
    region: "Sardegna",
    rating: 4.7,
    reviewCount: 312,
    price: "€35/notte",
    description: "A pochi passi dalle spiagge più esclusive della Costa Smeralda, questo campeggio immerso nella macchia mediterranea offre il perfetto equilibrio tra natura selvaggia e comfort. Mare cristallino, profumo di mirto e tramonti indimenticabili.",
    features: ["Wifi gratuito", "Docce calde", "Parcheggio", "Area Tende da Tetto", "Spiaggia convenzionata", "Escursioni in barca"],
    amenities: [
      { name: "WiFi gratuito", available: true },
      { name: "Docce calde 24h", available: true },
      { name: "Parcheggio dedicato RTT", available: true },
      { name: "Corrente elettrica", available: true },
      { name: "Scarico acque grigie", available: true },
      { name: "Lavanderia", available: true },
      { name: "Bar sulla spiaggia", available: true },
      { name: "Market/Minimarket", available: true },
      { name: "Noleggio kayak/SUP", available: true },
      { name: "Animali ammessi", available: false },
      { name: "Escursioni organizzate", available: true },
      { name: "Navetta spiaggia", available: true },
    ],
    images: [
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=800&q=80"
    ],
    contact: {
      phone: "+39 0789 987 654",
      email: "booking@campingcostasmeralda.it",
      website: "www.campingcostasmeralda.it"
    },
    coordinates: { lat: 41.0933, lng: 9.5223 },
    openingPeriod: "15 Maggio - 30 Settembre",
    maxCapacity: 200,
    rules: [
      "Check-in: 14:00 - 21:00",
      "Check-out: entro le 11:00",
      "Silenzio dalle 24:00 alle 7:00",
      "No animali domestici",
      "Prenotazione consigliata in alta stagione"
    ],
    reviews: [
      {
        author: "Elena C.",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=100&h=100",
        rating: 5,
        date: "Luglio 2024",
        text: "Paradiso! Le spiagge sono a 5 minuti, il mare è cristallino. Personale super disponibile per organizzare escursioni. Unico neo: il prezzo, ma siamo in Costa Smeralda!"
      }
    ]
  }
};

const getFeatureIcon = (feature: string) => {
  if (feature.toLowerCase().includes("wifi")) return Wifi;
  if (feature.toLowerCase().includes("docc")) return Droplets;
  if (feature.toLowerCase().includes("parcheggio")) return Car;
  if (feature.toLowerCase().includes("tenda") || feature.toLowerCase().includes("tende")) return Tent;
  return CheckCircle;
};

const CampsiteDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const campsite = slug ? campsitesData[slug] : null;

  if (!campsite) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container mx-auto px-4 py-20">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-3xl font-bold text-foreground mb-4">Campeggio non trovato</h1>
            <p className="text-muted-foreground mb-8">
              Il campeggio che stai cercando non esiste o è stato rimosso.
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
        {/* Image Gallery */}
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2 h-[400px]">
            <div className="md:col-span-2 overflow-hidden">
              <img 
                src={campsite.images[0]} 
                alt={campsite.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="hidden md:grid grid-rows-2 gap-2">
              {campsite.images.slice(1, 3).map((img, index) => (
                <div key={index} className="overflow-hidden">
                  <img 
                    src={img} 
                    alt={`${campsite.name} ${index + 2}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="absolute top-4 left-4">
            <Link to="/#mappa">
              <Button variant="secondary" size="sm" className="backdrop-blur">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Torna alla Mappa
              </Button>
            </Link>
          </div>
          <div className="absolute top-4 right-4 flex gap-2">
            <Button variant="secondary" size="sm" className="backdrop-blur">
              <Share2 className="h-4 w-4 mr-2" />
              Condividi
            </Button>
            <Button variant="secondary" size="sm" className="backdrop-blur">
              <Heart className="h-4 w-4 mr-2" />
              Salva
            </Button>
          </div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-8">
                {/* Header */}
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <Badge className="bg-primary">{campsite.price}</Badge>
                    <div className="flex items-center text-accent">
                      <Star className="h-5 w-5 fill-accent" />
                      <span className="font-semibold ml-1">{campsite.rating}</span>
                      <span className="text-muted-foreground ml-1">({campsite.reviewCount} recensioni)</span>
                    </div>
                  </div>
                  <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                    {campsite.name}
                  </h1>
                  <p className="flex items-center text-muted-foreground">
                    <MapPin className="h-5 w-5 mr-2" />
                    {campsite.region} • {campsite.location}
                  </p>
                </div>

                {/* Description */}
                <div>
                  <h2 className="text-xl font-semibold text-foreground mb-4">Descrizione</h2>
                  <p className="text-muted-foreground leading-relaxed">{campsite.description}</p>
                </div>

                {/* Features */}
                <div>
                  <h2 className="text-xl font-semibold text-foreground mb-4">Servizi Principali</h2>
                  <div className="flex flex-wrap gap-3">
                    {campsite.features.map((feature, index) => {
                      const Icon = getFeatureIcon(feature);
                      return (
                        <Badge key={index} variant="secondary" className="text-sm py-2 px-4">
                          <Icon className="h-4 w-4 mr-2" />
                          {feature}
                        </Badge>
                      );
                    })}
                  </div>
                </div>

                {/* Amenities Grid */}
                <div>
                  <h2 className="text-xl font-semibold text-foreground mb-4">Tutti i Servizi</h2>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {campsite.amenities.map((amenity, index) => (
                      <div 
                        key={index} 
                        className={`flex items-center gap-2 ${!amenity.available && 'opacity-50'}`}
                      >
                        {amenity.available ? (
                          <CheckCircle className="h-5 w-5 text-green-500" />
                        ) : (
                          <XCircle className="h-5 w-5 text-muted-foreground" />
                        )}
                        <span className={amenity.available ? 'text-foreground' : 'text-muted-foreground line-through'}>
                          {amenity.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Rules */}
                <div>
                  <h2 className="text-xl font-semibold text-foreground mb-4">Regole del Campeggio</h2>
                  <ul className="space-y-2">
                    {campsite.rules.map((rule, index) => (
                      <li key={index} className="flex items-start text-muted-foreground">
                        <span className="mr-3">•</span>
                        {rule}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Reviews */}
                <div>
                  <h2 className="text-xl font-semibold text-foreground mb-4">
                    Recensioni della Community ({campsite.reviewCount})
                  </h2>
                  <div className="space-y-4">
                    {campsite.reviews.map((review, index) => (
                      <Card key={index} className="p-6">
                        <div className="flex items-start gap-4">
                          <img 
                            src={review.avatar} 
                            alt={review.author}
                            className="w-12 h-12 rounded-full object-cover"
                          />
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-2">
                              <div>
                                <p className="font-semibold text-foreground">{review.author}</p>
                                <p className="text-sm text-muted-foreground">{review.date}</p>
                              </div>
                              <div className="flex items-center">
                                {[...Array(5)].map((_, i) => (
                                  <Star 
                                    key={i} 
                                    className={`h-4 w-4 ${i < review.rating ? 'text-accent fill-accent' : 'text-muted-foreground'}`} 
                                  />
                                ))}
                              </div>
                            </div>
                            <p className="text-muted-foreground">{review.text}</p>
                          </div>
                        </div>
                      </Card>
                    ))}
                  </div>
                  <Button variant="outline" className="w-full mt-4">
                    Carica altre recensioni
                  </Button>
                </div>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Booking Card */}
                <Card className="p-6 sticky top-24">
                  <div className="text-center mb-6">
                    <p className="text-3xl font-bold text-primary">{campsite.price}</p>
                    <p className="text-muted-foreground">per piazzola</p>
                  </div>
                  
                  <div className="space-y-4 mb-6">
                    <div className="flex items-center gap-3 text-muted-foreground">
                      <Calendar className="h-5 w-5" />
                      <span>Aperto: {campsite.openingPeriod}</span>
                    </div>
                    <div className="flex items-center gap-3 text-muted-foreground">
                      <Users className="h-5 w-5" />
                      <span>Capacità: {campsite.maxCapacity} piazzole</span>
                    </div>
                  </div>

                  <Button className="w-full bg-gradient-to-r from-primary to-primary-glow mb-3">
                    Prenota Ora
                  </Button>
                  <Button variant="outline" className="w-full">
                    <Navigation className="h-4 w-4 mr-2" />
                    Indicazioni Stradali
                  </Button>
                </Card>

                {/* Contact Card */}
                <Card className="p-6">
                  <h3 className="font-semibold text-foreground mb-4">Contatti</h3>
                  <div className="space-y-3">
                    <a href={`tel:${campsite.contact.phone}`} className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                      <Phone className="h-5 w-5" />
                      {campsite.contact.phone}
                    </a>
                    <a href={`mailto:${campsite.contact.email}`} className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                      <Mail className="h-5 w-5" />
                      {campsite.contact.email}
                    </a>
                    <a href={`https://${campsite.contact.website}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                      <Globe className="h-5 w-5" />
                      {campsite.contact.website}
                    </a>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CampsiteDetail;
