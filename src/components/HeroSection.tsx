import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MapPin, Users, BookOpen, Star } from "lucide-react";
import heroImage from "@/assets/hero-camping.jpg";

const HeroSection = () => {
  const stats = [
    { icon: Users, value: "40K+", label: "Membri Totali" },
    { icon: MapPin, value: "500+", label: "Campeggi Mappati" },
    { icon: BookOpen, value: "100+", label: "Guide Pubblicate" },
    { icon: Star, value: "4.8", label: "Rating Community" },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-background to-secondary/30">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Camping con tenda da tetto nelle montagne italiane"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background/90"></div>
      </div>
      
      <div className="container mx-auto px-4 py-20 relative">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Hero Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
                La <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">Community Italiana</span> N°1 per le Tende da Tetto
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Scopri i migliori campeggi, condividi le tue avventure e trova tutto quello che ti serve per viaggiare con la tua tenda da tetto.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="https://www.facebook.com/groups/375926353544064" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-[#1877F2] hover:bg-[#1877F2]/90 transition-all duration-300">
                  <Users className="mr-2 h-5 w-5" />
                  Unisciti su Facebook
                </Button>
              </a>
              <Link to="/campeggi">
                <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                  <MapPin className="mr-2 h-5 w-5" />
                  Esplora i Campeggi
                </Button>
              </Link>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
            {stats.map((stat, index) => (
              <Card key={index} className="p-6 bg-card/80 backdrop-blur shadow-card hover:shadow-elegant transition-all duration-300">
                <div className="flex flex-col items-center space-y-2">
                  <stat.icon className="h-8 w-8 text-primary" />
                  <div className="text-2xl font-bold text-primary">{stat.value}</div>
                  <div className="text-sm text-muted-foreground text-center">{stat.label}</div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;