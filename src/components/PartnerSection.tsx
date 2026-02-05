import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Handshake, ExternalLink, Star, Percent, Download } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const PartnerSection = () => {
  const { t } = useLanguage();
  const partners = [
    {
      name: "Autohome",
      category: "Tende da Tetto",
      discount: "15%",
      description: "Leader delle tende da tetto made in Italy, una certezza di qualità dal 1958.",
      logo: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=200&h=200",
      specialOffer: "Sconto del 15% su tutto il catalogo tende con codice: AUTOHOME-OFFICIAL",
      pdfLink: null
    },
    {
      name: "Xalpharooftent",
      category: "Tende da Tetto",
      discount: "Dedicato",
      description: "Tende made in Italy di qualità artigianale. Design italiano e materiali premium per gli avventurieri più esigenti.",
      logo: "https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?auto=format&fit=crop&w=200&h=200",
      specialOffer: "Prezzo speciale dedicato per gli iscritti alla pagina",
      pdfLink: null
    },
    {
      name: "Camperboxes",
      category: "Allestimenti",
      discount: "Dedicato",
      description: "Allestimenti personalizzati per qualsiasi mezzo, dall'auto al van, in legno e alluminio di alta qualità.",
      logo: "https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?auto=format&fit=crop&w=200&h=200",
      specialOffer: "Bagno a separazione disponibile in due misure con prezzo dedicato alla community",
      pdfLink: "/doc_articles_partners/ListinoCamperBoxes-2026.pdf"
    },
    {
      name: "Swisskings",
      category: "Tende & Accessori",
      discount: "Speciale",
      description: "Tende pieghevoli e rigide di varie misure, tendalini e accessori con un rapporto qualità prezzo imbattibile.",
      logo: "https://images.unsplash.com/photo-1510312305653-8ed496efae75?auto=format&fit=crop&w=200&h=200",
      specialOffer: "Rapporto qualità prezzo imbattibile per la community",
      pdfLink: null
    }
  ];

  return (
    <section id="partner" className="py-20 bg-gradient-to-b from-secondary/30 to-background" aria-label="Sezione partner e offerte">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-4">
              <Handshake className="h-8 w-8 text-primary mr-3" aria-hidden="true" />
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                {t('partner.title')}
              </h2>
            </div>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {t('partner.description')}
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
                          alt={`Logo ${partner.name}`}
                          loading="lazy"
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
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    {partner.description}
                  </p>
                  <div className="bg-gradient-to-r from-accent/10 to-accent/5 border border-accent/20 rounded-lg p-4">
                    <div className="flex items-center text-accent font-medium">
                      <Star className="h-4 w-4 mr-2" />
                      {t('partner.specialOffer')}
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">
                      {partner.specialOffer}
                    </p>
                    {partner.pdfLink && (
                      <a 
                        href={partner.pdfLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        download
                        className="inline-flex items-center gap-2 mt-3 px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors text-sm font-medium"
                      >
                        <Download className="h-4 w-4" />
                        {t('partner.download')}
                      </a>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl p-8 border border-primary/20">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              {t('partner.become')}?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              {t('partner.description')}
            </p>
            <Link to="/contatti">
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                {t('partner.become')}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnerSection;