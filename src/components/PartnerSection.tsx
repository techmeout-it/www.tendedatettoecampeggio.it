import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Handshake, ExternalLink, Star, Download, MessageCircle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const PartnerSection = () => {
  const { t } = useLanguage();
  const partners = [
    {
      name: "Autohome",
      category: "Tende da Tetto",
      discount: "15%",
      description: "Leader delle tende da tetto made in Italy, una certezza di qualità dal 1958.",
      logo: "/img_partners/Loghi/autohome.jpg",
      specialOffer: "Sconto del 15% su tutto il catalogo tende con codice: AUTOHOME-OFFICIAL",
      website: "https://shop.autohome-official.com",
      pdfLink: null,
      externalLink: null
    },
    {
      name: "Xalpharooftent",
      category: "Tende da Tetto",
      discount: "",
      description: "Tende made in Italy di qualità artigianale. Design italiano e materiali premium per gli avventurieri più esigenti.",
      logo: "/img_partners/Loghi/xalpha.jpg",
      wideLogo: true,
      specialOffer: "Prezzo speciale dedicato per gli iscritti alla pagina",
      website: "https://www.xalpharooftent.com/",
      pdfLink: null,
      externalLink: null
    },
    {
      name: "Camperboxes",
      category: "Allestimenti",
      discount: "10%",
      description: "Allestimenti personalizzati per qualsiasi mezzo, dall'auto al van, in legno e alluminio di alta qualità.",
      logo: "/img_partners/Loghi/camperboxes.jpg",
      specialOffer: "Bagno a separazione disponibile in due misure con prezzo dedicato alla community",
      website: "https://camperboxes.it/",
      pdfLink: "/doc_articles_partners/ListinoCamperBoxes-2026.pdf",
      externalLink: null
    },
    {
      name: "Swisskings",
      category: "Tende & Accessori",
      discount: "",
      description: "Tende pieghevoli e rigide di varie misure, tendalini e accessori con un rapporto qualità prezzo imbattibile.",
      logo: "/img_partners/Loghi/swisskings.jpg",
      specialOffer: "Rapporto qualità prezzo imbattibile per la community",
      website: "https://www.accessoires4x4.ch/it/",
      pdfLink: null,
      externalLink: null
    },
    {
      name: "Roofcamp.it",
      category: "Tende da Tetto",
      discount: "5%",
      description: "Shop online specializzato in tende da tetto Wildland, Vickywood e accessori per l'outdoor.",
      logo: "/img_partners/Loghi/roofcamp.jpg",
      specialOffer: "Sconto 5% su tutto il catalogo online tende da tetto Wildland, Vickywood e accessori con codice: Tendedatettoecampeggio26",
      website: "https://roofcamp.it/",
      pdfLink: null,
      externalLink: "https://roofcamp.it/shop/?Codice%20sconto%20personale=Tendedatettoecampeggio26"
    },
    {
      name: "Dino Design Park",
      category: "Allestimenti",
      discount: "10%",
      description: "Moduli di camperizzazione adattabili a qualsiasi veicolo completi di tutti gli accessori pronti all'uso.",
      logo: "/img_partners/Loghi/dino.jpg",
      specialOffer: "10% sconto dedicato alla community nell'acquisto del box STOCK e altri prodotti",
      website: "https://www.dinodesignpark.com/",
      pdfLink: null,
      externalLink: null
    },
    {
      name: "Camperizzati Allestimenti Guglielmino",
      shortName: "Camperizzati",
      category: "Tende & Allestimenti",
      discount: "10%",
      description: "Tende da tetto pieghevoli a guscio rigido e ibride ideate in Italia e moduli di camperizzazione.",
      logo: "/img_partners/Loghi/camperizzati2.jpg",
      specialOffer: "10% sul prezzo di listino",
      website: "https://www.camperizzati.com/",
      pdfLink: null,
      externalLink: null
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
              <Card key={index} className="group hover:shadow-elegant transition-all duration-300 border-0 bg-card/60 backdrop-blur overflow-hidden">
                <CardHeader className="pb-4">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                    <div className="flex items-center space-x-4">
                      <div className={`${partner.wideLogo ? 'w-28 h-14' : 'w-16 h-16'} rounded-lg overflow-hidden bg-secondary/50`}>
                        <img 
                          src={partner.logo} 
                          alt={`Logo ${partner.name}`}
                          loading="lazy"
                          className={`w-full h-full ${partner.wideLogo ? 'object-contain' : 'object-cover'}`}
                        />
                      </div>
                      <div>
                        <CardTitle className={`${partner.name.length > 25 ? 'text-lg' : 'text-xl'} group-hover:text-primary transition-colors`}>
                          {partner.name}
                        </CardTitle>
                        {partner.subtitle && (
                          <span className="text-sm text-muted-foreground">{partner.subtitle}</span>
                        )}
                        <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20 mt-1">
                          {partner.category}
                        </Badge>
                      </div>
                    </div>
                    <div className="flex flex-row sm:flex-col items-center sm:items-end gap-2">
                      {partner.discount && (
                        <div className="flex items-center bg-accent/10 text-accent px-3 py-1 rounded-full">
                          <span className="font-bold">{partner.discount}</span>
                        </div>
                      )}
                      {partner.website && (
                        <a
                          href={partner.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-xs font-medium bg-blue-500/15 text-blue-600 dark:text-blue-400 px-4 py-1 rounded-md hover:bg-blue-500/25 transition-colors whitespace-nowrap shrink-0"
                        >
                          <ExternalLink className="h-4 w-4" />
                          Visita {partner.shortName || partner.name}
                        </a>
                      )}
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
                    {partner.externalLink && (
                      <a 
                        href={partner.externalLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 mt-3 px-4 py-2 bg-accent text-accent-foreground rounded-md hover:bg-accent/90 transition-colors text-sm font-medium"
                      >
                        <ExternalLink className="h-4 w-4" />
                        {t('partner.goToShop')}
                      </a>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* Placeholder Card */}
            <Card className="group bg-card/50 backdrop-blur-sm border-dashed border-2 border-primary/30 hover:border-primary/60 hover:shadow-lg transition-all duration-300 flex flex-col items-center justify-center min-h-[280px]">
              <CardContent className="text-center py-8">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">E tu? Vuoi essere qui?</h3>
                <p className="text-muted-foreground mb-4">
                  Se hai un'attività nel mondo outdoor e vuoi collaborare con la nostra community, scrivici!
                </p>
                <Link to="/contatti">
                  <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                    Contattaci
                  </Button>
                </Link>
              </CardContent>
            </Card>
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