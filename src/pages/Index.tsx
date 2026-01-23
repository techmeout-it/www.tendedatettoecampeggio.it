import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import GuideSection from "@/components/GuideSection";
import MapSection from "@/components/MapSection";
import CommunitySection from "@/components/CommunitySection";
import PartnerSection from "@/components/PartnerSection";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { OrganizationSchema } from "@/components/StructuredData";

const Index = () => {
  const siteUrl = typeof window !== 'undefined' ? window.location.origin : '';
  
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
      <main id="main-content">
        <HeroSection />
        <GuideSection />
        <MapSection />
        <CommunitySection />
        <PartnerSection />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
