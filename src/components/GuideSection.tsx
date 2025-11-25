import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, User, ArrowRight, BookOpen } from "lucide-react";
import campeggiFoto from "@/assets/campeggi-italia.jpg";

const GuideSection = () => {
  const guides = [
    {
      slug: "guida-completa-tende-da-tetto",
      title: "Guida Completa alle Tende da Tetto",
      excerpt: "Tutto quello che devi sapere per scegliere la tenda da tetto perfetta per le tue avventure",
      author: "Marco Rossi",
      readTime: "8 min",
      category: "Attrezzatura",
      image: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=800&q=80"
    },
    {
      slug: "10-campeggi-piu-belli-italia",
      title: "I 10 Campeggi Più Belli d'Italia",
      excerpt: "Scopri i campeggi più spettacolari del nostro paese, perfetti per chi viaggia con tenda da tetto",
      author: "Sara Bianchi",
      readTime: "12 min",
      category: "Destinazioni",
      image: campeggiFoto
    },
    {
      slug: "checklist-campeggio-perfetto",
      title: "Check-list per il Campeggio Perfetto",
      excerpt: "Non dimenticare mai più nulla: la lista completa per organizzare la tua avventura",
      author: "Luca Verdi",
      readTime: "5 min",
      category: "Tips",
      image: "https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <section id="guide" className="py-20 bg-gradient-to-b from-secondary/30 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-4">
              <BookOpen className="h-8 w-8 text-primary mr-3" />
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Guide & Consigli
              </h2>
            </div>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Scopri i migliori consigli dalla nostra community di esperti campeggiatori
            </p>
          </div>

          {/* Guide Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {guides.map((guide, index) => (
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
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
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
                      <span className="group/btn text-primary flex items-center text-sm font-medium">
                        Leggi
                        <ArrowRight className="h-4 w-4 ml-1 group-hover/btn:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center">
            <Link to="/guide">
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                Vedi Tutte le Guide
                <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GuideSection;