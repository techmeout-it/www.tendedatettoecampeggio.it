import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Users, MessageCircle, Heart, TrendingUp, Facebook, Instagram } from "lucide-react";

const CommunitySection = () => {
  const communityStats = [
    { icon: Users, value: "40.662", label: "Membri Totali", trend: "+7% (60 giorni)" },
    { icon: MessageCircle, value: "1.052", label: "Post in 60 giorni", trend: "25-30 al giorno" },
    { icon: Heart, value: "21.000+", label: "Reazioni", trend: "+66% interazioni" },
    { icon: TrendingUp, value: "70%", label: "Membri Attivi", trend: "29.000 utenti" },
  ];

  const communityHighlights = [
    {
      title: "📅 Lunedì Tips",
      description: "Consigli tecnici per montaggio e manutenzione delle tende da tetto",
    },
    {
      title: "🏕️ Mercoledì Esperienze",
      description: "I membri raccontano le loro avventure più belle",
    },
    {
      title: "🎥 Venerdì Video",
      description: "Tutorial, recensioni e guide pratiche video",
    },
    {
      title: "📸 Weekend Moments",
      description: "Condivisione foto delle uscite del weekend",
    },
  ];

  return (
    <section id="community" className="py-20 bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-4">
              <Users className="h-8 w-8 text-primary mr-3" />
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                La Nostra Community
              </h2>
            </div>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Una famiglia di oltre 40.000 appassionati che condividono la passione per l'avventura e il campeggio
            </p>
          </div>

          {/* Community Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {communityStats.map((stat, index) => (
              <Card key={index} className="text-center p-6 bg-card/60 backdrop-blur border-0 hover:shadow-elegant transition-all duration-300">
                <stat.icon className="h-8 w-8 text-primary mx-auto mb-3" />
                <div className="text-2xl font-bold text-primary mb-1">{stat.value}</div>
                <div className="text-sm font-medium text-foreground mb-2">{stat.label}</div>
                <Badge variant="secondary" className="text-xs bg-secondary/70">
                  {stat.trend}
                </Badge>
              </Card>
            ))}
          </div>

          {/* Community Features */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* Weekly Schedule */}
            <Card className="p-8 bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
              <h3 className="text-xl font-bold text-foreground mb-6 text-center">
                🗓️ Programma Settimanale
              </h3>
              <div className="space-y-4">
                {communityHighlights.map((highlight, index) => (
                  <div key={index} className="flex items-start space-x-3 p-3 rounded-lg bg-background/50">
                    <div className="text-lg">{highlight.title.split(' ')[0]}</div>
                    <div>
                      <div className="font-medium text-foreground">{highlight.title.substring(2)}</div>
                      <div className="text-sm text-muted-foreground">{highlight.description}</div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Join Community */}
            <Card className="p-8 bg-gradient-to-br from-accent/5 to-primary/5 border-accent/20">
              <h3 className="text-xl font-bold text-foreground mb-4 text-center">
                Unisciti alla Community
              </h3>
              <p className="text-muted-foreground mb-6 text-center">
                Fai parte della più grande community italiana di appassionati di tende da tetto e campeggio
              </p>
              
              <div className="space-y-4">
                <Button className="w-full bg-gradient-to-r from-[#1877F2] to-[#42A5F5] hover:shadow-elegant transition-all duration-300">
                  <Facebook className="h-5 w-5 mr-2" />
                  Gruppo Facebook (40K+ membri)
                </Button>
                <Button variant="outline" className="w-full border-[#E4405F] text-[#E4405F] hover:bg-[#E4405F] hover:text-white">
                  <Instagram className="h-5 w-5 mr-2" />
                  Seguici su Instagram
                </Button>
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