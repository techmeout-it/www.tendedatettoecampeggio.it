import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Star, Wifi, Droplets, Car, Tent } from "lucide-react";

const MapSection = () => {
  const featuredCampsites = [
    {
      slug: "camping-lake-garda",
      name: "Camping Lake Garda",
      location: "Lago di Garda, Veneto",
      rating: 4.8,
      price: "€25/notte",
      features: ["Wifi", "Docce", "Parcheggio", "Area Tende"],
      image: "https://images.unsplash.com/photo-1571863533956-01c88e79957e?auto=format&fit=crop&w=800&q=80"
    },
    {
      slug: "camping-dolomiti",
      name: "Camping Dolomiti",
      location: "Val di Fassa, Trentino",
      rating: 4.9,
      price: "€30/notte",
      features: ["Wifi", "Docce", "Parcheggio", "Area Tende"],
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800&q=80"
    },
    {
      slug: "camping-costa-smeralda",
      name: "Camping Costa Smeralda",
      location: "Sardegna",
      rating: 4.7,
      price: "€35/notte",
      features: ["Wifi", "Docce", "Parcheggio", "Area Tende"],
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80"
    }
  ];

  const getFeatureIcon = (feature: string) => {
    switch (feature) {
      case "Wifi": return Wifi;
      case "Docce": return Droplets;
      case "Parcheggio": return Car;
      case "Area Tende": return Tent;
      default: return MapPin;
    }
  };

  return (
    <section id="mappa" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-4">
              <MapPin className="h-8 w-8 text-primary mr-3" />
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Mappa Campeggi
              </h2>
            </div>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Scopri i migliori campeggi d'Italia, selezionati e recensiti dalla nostra community
            </p>
          </div>

          {/* Interactive Map Placeholder */}
          <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-xl p-8 mb-16 text-center border border-primary/10">
            <MapPin className="h-16 w-16 text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-foreground mb-2">Mappa Interattiva</h3>
            <p className="text-muted-foreground mb-6">
              Usa i filtri per trovare il campeggio perfetto per le tue esigenze
            </p>
            <div className="flex flex-wrap gap-4 justify-center mb-6">
              <Badge variant="outline" className="border-primary text-primary">
                🏕️ Campeggi Liberi
              </Badge>
              <Badge variant="outline" className="border-primary text-primary">
                🚿 Con Servizi
              </Badge>
              <Badge variant="outline" className="border-primary text-primary">
                🚐 Area Camper
              </Badge>
              <Badge variant="outline" className="border-primary text-primary">
                ⭐ Recensiti 4+
              </Badge>
            </div>
            <Button className="bg-gradient-to-r from-primary to-primary-glow" asChild>
              <Link to="/campeggi">Vedi Lista Completa</Link>
            </Button>
          </div>

          {/* Featured Campsites */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
              Campeggi in Evidenza
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredCampsites.map((campsite, index) => (
                <Link key={index} to={`/campeggi/${campsite.slug}`}>
                  <Card className="group hover:shadow-elegant transition-all duration-300 border-0 bg-card/60 backdrop-blur h-full">
                    <div className="aspect-video overflow-hidden rounded-t-lg">
                      <img 
                        src={campsite.image} 
                        alt={campsite.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <CardHeader className="pb-3">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center">
                          <Star className="h-4 w-4 text-accent fill-accent mr-1" />
                          <span className="text-sm font-medium">{campsite.rating}</span>
                        </div>
                        <Badge variant="secondary" className="bg-accent/10 text-accent border-accent/20">
                          {campsite.price}
                        </Badge>
                      </div>
                      <CardTitle className="text-xl group-hover:text-primary transition-colors">
                        {campsite.name}
                      </CardTitle>
                      <p className="text-muted-foreground text-sm">
                        📍 {campsite.location}
                      </p>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <div className="flex flex-wrap gap-2 mb-4">
                        {campsite.features.map((feature, idx) => {
                          const Icon = getFeatureIcon(feature);
                          return (
                            <div key={idx} className="flex items-center text-xs text-muted-foreground bg-secondary/50 rounded-full px-3 py-1">
                              <Icon className="h-3 w-3 mr-1" />
                              {feature}
                            </div>
                          );
                        })}
                      </div>
                      <Button variant="outline" size="sm" className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                        Vedi Dettagli
                      </Button>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;