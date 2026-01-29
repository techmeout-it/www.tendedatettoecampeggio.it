import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Users, MessageCircle, TrendingUp, Star } from "lucide-react";
import heroImage from "@/assets/hero-camping.jpg";

const HeroSection = () => {
  const stats = [
    { icon: Users, value: "40K+", label: "Membri Totali" },
    { icon: MessageCircle, value: "150+", label: "Post Mensili" },
    { icon: TrendingUp, value: "28K+", label: "Membri Attivi" },
    { icon: Star, value: "4.8", label: "Rating Community" },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-background to-secondary/30" aria-label="Sezione hero">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Camping con tenda da tetto nelle montagne italiane"
          loading="eager"
          fetchPriority="high"
          decoding="async"
          width={1280}
          height={720}
          className="w-full h-full object-cover opacity-20"
          style={{ imageRendering: 'auto', filter: 'blur(0.5px)' }}
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
              <a href="https://www.instagram.com/tende_da_tetto_e_campeggio/" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#F77737] hover:opacity-90 transition-all duration-300 text-white">
                  <svg className="mr-2 h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                  Seguici su Instagram
                </Button>
              </a>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
            {stats.map((stat, index) => (
              <Card key={index} className="p-6 bg-card/80 backdrop-blur shadow-card hover:shadow-elegant transition-all duration-300">
                <div className="flex flex-col items-center space-y-2">
                  <stat.icon className="h-8 w-8 text-primary" aria-hidden="true" />
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