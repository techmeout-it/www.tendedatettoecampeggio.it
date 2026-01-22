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
  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Tende da Tetto e Campeggio - Community Italiana"
        description="La community italiana per gli amanti delle tende da tetto e del campeggio. Guide, mappe, configuratore e tutto per le tue avventure outdoor."
        canonicalUrl="https://devtendedatettoecampeggioit.vercel.app"
        ogType="website"
      />
      <OrganizationSchema />
      <Header />
      <main>
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
