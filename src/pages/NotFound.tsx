import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Tent, Home, Search, Map } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <main className="flex-1 flex items-center justify-center py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            {/* Tent Icon */}
            <div className="mb-8">
              <div className="inline-flex items-center justify-center w-32 h-32 rounded-full bg-primary/10 mb-6">
                <Tent className="h-16 w-16 text-primary" />
              </div>
            </div>

            {/* 404 Number */}
            <h1 className="text-8xl md:text-9xl font-bold text-primary/20 mb-4">
              404
            </h1>
            
            {/* Title */}
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Ops! Sei finito fuori pista
            </h2>
            
            {/* Description */}
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              La pagina che stai cercando non esiste o è stata spostata. 
              Forse ti sei perso durante un'escursione? 🏕️
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link to="/">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  <Home className="h-5 w-5 mr-2" />
                  Torna alla Home
                </Button>
              </Link>
              <Link to="/guide">
                <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                  <Search className="h-5 w-5 mr-2" />
                  Esplora le Guide
                </Button>
              </Link>
              <Link to="/campeggi">
                <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                  <Map className="h-5 w-5 mr-2" />
                  Trova Campeggi
                </Button>
              </Link>
            </div>

            {/* Fun message */}
            <p className="text-sm text-muted-foreground">
              💡 Consiglio: porta sempre una bussola quando esplori il web!
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
