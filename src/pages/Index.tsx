import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import GuideSection from "@/components/GuideSection";
// import MapSection from "@/components/MapSection"; // TODO: Da riattivare in futuro
import CommunitySection from "@/components/CommunitySection";
import PartnerSection from "@/components/PartnerSection";
// import Newsletter from "@/components/Newsletter"; // TODO: Da riattivare in futuro
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { OrganizationSchema } from "@/components/StructuredData";
import { SITE_URL } from "@/lib/site";
import { Link } from "react-router-dom";
import { CalendarDays, MapPin, ArrowRight } from "lucide-react";

const Index = () => {
  const siteUrl = SITE_URL;
  
  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Tende da Tetto e Campeggio - Community Italiana"
        description="🏕️ La community italiana n°1 per tende da tetto! 40.000+ membri, guide pratiche, mappe campeggi e tutto per le tue avventure outdoor. Unisciti a noi!"
        canonicalUrl={siteUrl}
        ogType="website"
        ogImage={`${siteUrl}/og-image.jpg`}
      />
      <OrganizationSchema />
      <Header />
      
      {/* Banner Raduno Nazionale 2026 */}
      <div className="bg-gradient-to-r from-primary/20 via-primary/15 to-primary/20 border-y border-primary/30">
        <div className="container mx-auto px-4 py-4">
          <Link to="/raduno-nazionale-2026" className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 text-center sm:text-left hover:opacity-80 transition-opacity">
            <span className="text-2xl">🏕️</span>
            <span className="font-semibold text-foreground">Raduno Nazionale 2026</span>
            <span className="hidden sm:inline text-muted-foreground">|</span>
            <span className="flex items-center gap-2 text-sm text-muted-foreground">
              <CalendarDays className="h-4 w-4" />
              1-3 Maggio
            </span>
            <span className="flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4" />
              Lago di Pietrafitta
            </span>
            <span className="flex items-center gap-1 text-primary font-medium text-sm">
              Scopri di più <ArrowRight className="h-4 w-4" />
            </span>
          </Link>
        </div>
      </div>

      <main id="main-content">
        <h1 className="sr-only">Tende da Tetto e Campeggio - Community Italiana</h1>
        <HeroSection />

        <GuideSection />
        {/* <MapSection /> TODO: Da riattivare in futuro */}
        <CommunitySection />
        <PartnerSection />
        {/* <Newsletter /> TODO: Da riattivare in futuro */}
      </main>
      <Footer />
    </div>
  );
};

export default Index;
