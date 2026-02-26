import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Construction, Home, Facebook } from "lucide-react";

const ComingSoon = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Coming Soon - Tende da Tetto e Campeggio"
        description="Questa sezione è in arrivo. Resta sintonizzato!"
        noindex={true}
      />
      <Header />
      <main className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            {/* Icon */}
            <div className="mb-8">
              <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-primary/10 mb-6">
                <Construction className="h-12 w-12 text-primary" />
              </div>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Sezione in Costruzione
            </h1>
            
            {/* Description */}
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Stiamo lavorando duramente per portarti questa funzionalità. 
              Sarà disponibile molto presto!
            </p>

            {/* Progress indicator */}
            <div className="bg-secondary/50 rounded-xl p-6 mb-8">
              <p className="text-muted-foreground mb-3">
                Nel frattempo, resta aggiornato sulla nostra community:
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="https://www.facebook.com/groups/375926353544064" target="_blank" rel="noopener noreferrer">
                  <Button className="bg-[#1877F2] hover:bg-[#1877F2]/90">
                    <Facebook className="h-5 w-5 mr-2" />
                    Gruppo Facebook
                  </Button>
                </a>
                <Link to="/">
                  <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                    <Home className="h-5 w-5 mr-2" />
                    Torna alla Home
                  </Button>
                </Link>
              </div>
            </div>

            {/* Fun message */}
            <p className="text-sm text-muted-foreground">
              🏕️ Come una buona tenda, anche le migliori funzionalità richiedono tempo per essere montate!
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ComingSoon;
