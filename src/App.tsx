import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";
import About from "./pages/About";
import GuideList from "./pages/GuideList";
import GuideDetail from "./pages/GuideDetail";
import CampsiteList from "./pages/CampsiteList";
import CampsiteDetail from "./pages/CampsiteDetail";
import Contact from "./pages/Contact";
import Events from "./pages/Events";
import FAQ from "./pages/FAQ";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Cookies from "./pages/Cookies";
import ComingSoon from "./pages/ComingSoon";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/chi-siamo" element={<About />} />
          <Route path="/guide" element={<GuideList />} />
          <Route path="/guide/:slug" element={<GuideDetail />} />
          <Route path="/campeggi" element={<CampsiteList />} />
          <Route path="/campeggi/:slug" element={<CampsiteDetail />} />
          <Route path="/contatti" element={<Contact />} />
          <Route path="/eventi" element={<Events />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/termini" element={<Terms />} />
          <Route path="/cookie" element={<Cookies />} />
          <Route path="/coming-soon" element={<ComingSoon />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
    </HelmetProvider>
  </QueryClientProvider>
);

export default App;
