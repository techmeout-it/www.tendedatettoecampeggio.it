import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Handshake, ExternalLink, Star, Percent } from "lucide-react";
import tentproLogo from "@/assets/tentpro-logo.jpg";
import outdoorgearLogo from "@/assets/outdoorgear-logo.jpg";

const PartnerSection = () => {
  const partners = [
    {
      name: "TentPro Italia",
      category: "Tende da Tetto",
      discount: "15%",
      description: "Le migliori tende da tetto sul mercato italiano. Qualità premium per ogni avventura.",
      rating: 4.9,
      logo: tentproLogo,
      specialOffer: "Spedizione gratuita per la community"
    },
    {
      name: "OutdoorGear",
      category: "Attrezzatura Camping",
      discount: "20%",
      description: "Tutto l'equipaggiamento per il camping: dai fornelli ai sacchi a pelo di alta qualità.",
      rating: 4.7,
      logo: outdoorgearLogo,
      specialOffer: "Sconto extra su ordini sopra €200"
    },
    {
      name: "Adventure4x4",
      category: "Accessori Auto",
      discount: "10%",
      description: "Portapacchi, barre e accessori per preparare la tua auto all'avventura.",
      rating: 4.8,
      logo: "https://images.unsplash.com/photo-1552058544-f2b08422138a?auto=format&fit=crop&w=200&h=200",
      specialOffer: "Installazione gratuita in store"
    },
    {
      name: "CampingFood",
      category: "Alimentari & Bevande",
      discount: "12%",
      description: "Cibi liofilizzati, snack energetici e tutto per la cucina da campo.",
      rating: 4.6,
      logo: "https://images.unsplash.com/photo-1543007630-9710e4a00a20?auto=format&fit=crop&w=200&h=200",
      specialOffer: "Kit degustazione gratuito"
    }
  ];

  return (
    <section id="partner" className="py-20 bg-gradient-to-b from-secondary/30 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-4">
              <Handshake className="h-8 w-8 text-primary mr-3" />
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Partner & Offerte
              </h2>
            </div>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Sconti esclusivi e offerte speciali dai migliori brand del settore outdoor
            </p>
          </div>

          {/* Partner Cards */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {partners.map((partner, index) => (
              <Card key={index} className="group hover:shadow-elegant transition-all duration-300 border-0 bg-card/60 backdrop-blur">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="w-16 h-16 rounded-lg overflow-hidden bg-secondary/50">
                        <img 
                          src={partner.logo} 
                          alt={partner.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <CardTitle className="text-xl group-hover:text-primary transition-colors">
                          {partner.name}
                        </CardTitle>
                        <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20 mt-1">
                          {partner.category}
                        </Badge>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center bg-accent/10 text-accent px-3 py-1 rounded-full">
                        <Percent className="h-4 w-4 mr-1" />
                        <span className="font-bold">{partner.discount}</span>
                      </div>
                      <div className="flex items-center mt-2 text-sm text-muted-foreground">
                        <Star className="h-4 w-4 text-accent fill-accent mr-1" />
                        {partner.rating}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    {partner.description}
                  </p>
                  <div className="bg-gradient-to-r from-accent/10 to-accent/5 border border-accent/20 rounded-lg p-4 mb-4">
                    <div className="flex items-center text-accent font-medium">
                      <Star className="h-4 w-4 mr-2" />
                      Offerta Speciale Community
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">
                      {partner.specialOffer}
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <Button className="flex-1 bg-gradient-to-r from-primary to-primary-glow">
                      Scopri Offerta
                      <ExternalLink className="h-4 w-4 ml-2" />
                    </Button>
                    <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                      Info
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl p-8 border border-primary/20">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Vuoi diventare partner?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Unisciti ai nostri partner e raggiungi oltre 40.000 appassionati di campeggio e outdoor in tutta Italia
            </p>
            <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              Contattaci per Partnership
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnerSection;