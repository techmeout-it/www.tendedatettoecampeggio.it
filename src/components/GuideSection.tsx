import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, User, ArrowRight, BookOpen } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import allGuidesData from "@/data/guidesData";

const GuideSection = () => {
  const { t } = useLanguage();
  
  // Prende automaticamente i 4 articoli più recenti per data
  const guides = [...allGuidesData]
    .sort((a, b) => b.date.localeCompare(a.date))
    .slice(0, 4);

  return (
    <section id="guide" className="py-20 bg-gradient-to-b from-secondary/30 to-background" aria-label="Articoli e guide sul campeggio">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-4">
              <BookOpen className="h-8 w-8 text-primary mr-3" />
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                {t('guides.title')}
              </h2>
            </div>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {t('guides.description')}
            </p>
          </div>

          {/* Guide Cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            {guides.map((guide, index) => (
              <Link key={index} to={`/guide/${guide.slug}`} aria-label={`Leggi l'articolo: ${guide.title}`}>
                <Card className="group hover:shadow-elegant transition-all duration-300 border-0 bg-card/60 backdrop-blur h-full">
                  <div className="aspect-video overflow-hidden rounded-t-lg">
                    <img 
                      src={guide.image} 
                      srcSet={guide.image.includes('unsplash.com') ? `${guide.image.replace('w=800', 'w=400')} 400w, ${guide.image.replace('w=800', 'w=600')} 600w, ${guide.image} 800w` : undefined}
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 280px"
                      alt={guide.title}
                      loading="lazy"
                      width={800}
                      height={450}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardHeader className="pb-2 px-3 pt-3">
                    <div className="flex items-center justify-between mb-1">
                      <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20 text-xs">
                        {guide.category}
                      </Badge>
                      <div className="flex items-center text-xs text-muted-foreground">
                        <Clock className="h-3 w-3 mr-1" />
                        {guide.readTime}
                      </div>
                    </div>
                    <CardTitle className="text-base group-hover:text-primary transition-colors line-clamp-2">
                      {guide.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0 px-3 pb-3">
                    <p className="text-muted-foreground text-sm mb-3 line-clamp-2">
                      {guide.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-xs text-muted-foreground">
                        <User className="h-3 w-3 mr-1" />
                        {guide.author}
                      </div>
                      <span className="group/btn text-primary flex items-center text-xs font-medium">
                        {t('guides.readMore')}
                        <ArrowRight className="h-3 w-3 ml-1 group-hover/btn:translate-x-1 transition-transform" />
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
                {t('guides.viewAll')}
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