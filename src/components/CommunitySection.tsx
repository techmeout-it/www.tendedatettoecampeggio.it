import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Users, MessageCircle, Heart, TrendingUp, Facebook, Instagram } from "lucide-react";

const CommunitySection = () => {
  const communityStats = [
    { icon: Users, value: "40.000", label: "Membri Totali", trend: "Gruppo Facebook" },
    { icon: MessageCircle, value: "150", label: "Post Mensili", trend: "Ultimi 30 giorni" },
    { icon: Heart, value: "1.000", label: "Commenti Mensili", trend: "Ultimi 30 giorni" },
    { icon: TrendingUp, value: "28.000", label: "Membri Attivi", trend: "70% del totale" },
  ];

  return (
    <section id="community" className="py-20 bg-gradient-to-b from-background to-secondary/30" aria-label="Sezione community">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-4">
              <Users className="h-8 w-8 text-primary mr-3" aria-hidden="true" />
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                La Nostra Community
              </h2>
            </div>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Fondata nel 2021, siamo diventati rapidamente il principale punto di riferimento italiano per gli appassionati di tende da tetto, campeggio e vanlife con oltre 40.000 membri attivi
            </p>
          </div>

          {/* Community Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {communityStats.map((stat, index) => (
              <Card key={index} className="text-center p-6 bg-card/60 backdrop-blur border-0 hover:shadow-elegant transition-all duration-300">
                <stat.icon className="h-8 w-8 text-primary mx-auto mb-3" aria-hidden="true" />
                <div className="text-2xl font-bold text-primary mb-1">{stat.value}</div>
                <div className="text-sm font-medium text-foreground mb-2">{stat.label}</div>
                <Badge variant="secondary" className="text-xs bg-secondary/70">
                  {stat.trend}
                </Badge>
              </Card>
            ))}
          </div>

          {/* Community Features */}
          <div className="flex justify-center mb-16">
            {/* Join Community */}
            <Card className="p-8 bg-gradient-to-br from-accent/5 to-primary/5 border-accent/20 max-w-lg w-full">
              <h3 className="text-xl font-bold text-foreground mb-4 text-center">
                Unisciti alla Community
              </h3>
              <p className="text-muted-foreground mb-6 text-center">
                Fai parte della più grande community italiana di appassionati di tende da tetto e campeggio
              </p>
              
              <div className="space-y-4">
                <a href="https://www.facebook.com/groups/375926353544064" target="_blank" rel="noopener noreferrer" className="block" aria-label="Unisciti al gruppo Facebook con oltre 40.000 membri">
                  <Button className="w-full bg-gradient-to-r from-[#1877F2] to-[#42A5F5] hover:shadow-elegant transition-all duration-300">
                    <Facebook className="h-5 w-5 mr-2" aria-hidden="true" />
                    Gruppo Facebook (40K+ membri)
                  </Button>
                </a>
                <a href="https://www.instagram.com/tende_da_tetto_e_campeggio/" target="_blank" rel="noopener noreferrer" className="block">
                  <Button variant="outline" className="w-full border-[#E4405F] text-[#E4405F] hover:bg-[#E4405F] hover:text-white">
                    <Instagram className="h-5 w-5 mr-2" />
                    Seguici su Instagram
                  </Button>
                </a>
              </div>

              <div className="mt-6 p-4 bg-background/50 rounded-lg">
                <h4 className="font-semibold text-foreground mb-2">✨ Cosa troverai:</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Guide e consigli pratici</li>
                  <li>• Recensioni di prodotti</li>
                  <li>• Organizzazione eventi e raduni</li>
                  <li>• Supporto e aiuto dalla community</li>
                  <li>• Offerte esclusive dai partner</li>
                </ul>
              </div>
            </Card>
          </div>

          {/* Community Rules */}
          <div className="bg-gradient-to-r from-secondary/50 to-secondary/30 rounded-xl p-8 border border-border">
            <h3 className="text-xl font-bold text-foreground mb-4 text-center">
              🤝 Le Nostre Regole
            </h3>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-2xl mb-2">🎯</div>
                <h4 className="font-semibold text-foreground mb-2">Resta in Tema</h4>
                <p className="text-sm text-muted-foreground">Solo contenuti relativi a tende da tetto e campeggio</p>
              </div>
              <div>
                <div className="text-2xl mb-2">🤝</div>
                <h4 className="font-semibold text-foreground mb-2">Rispetta gli Altri</h4>
                <p className="text-sm text-muted-foreground">Mantieni sempre un tono cordiale e costruttivo</p>
              </div>
              <div>
                <div className="text-2xl mb-2">📢</div>
                <h4 className="font-semibold text-foreground mb-2">No Spam</h4>
                <p className="text-sm text-muted-foreground">Evita pubblicità non autorizzata e contenuti ripetitivi</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;