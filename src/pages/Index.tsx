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
import { useEffect } from "react";

const Index = () => {
  const siteUrl = typeof window !== 'undefined' ? window.location.origin : '';
  
  // Preload critical images for LCP optimization
  useEffect(() => {
    if (typeof document === 'undefined') return;
    
    // Preload hero image to improve LCP
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = new URL('/assets/hero-camping.jpg', import.meta.url).href;
    link.type = 'image/jpeg';
    document.head.appendChild(link);
  }, []);
  
  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Tende da Tetto e Campeggio - Community Italiana"
        description="La community italiana per gli amanti delle tende da tetto e del campeggio. Guide, mappe, configuratore e tutto per le tue avventure outdoor."
        canonicalUrl={siteUrl}
        ogType="website"
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
