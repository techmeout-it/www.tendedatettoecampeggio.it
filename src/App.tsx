import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { lazy, Suspense } from "react";

// Critical routes - loaded immediately for faster TTI on landing page
import Index from "./pages/Index";
import About from "./pages/About";
import GuideList from "./pages/GuideList";
// import CampsiteList from "./pages/CampsiteList"; // TODO: Da riattivare in futuro
import Contact from "./pages/Contact";
import ComingSoon from "./pages/ComingSoon";
import NotFound from "./pages/NotFound";

// Non-critical routes - lazy loaded to reduce initial bundle size
const GuideDetail = lazy(() => import("./pages/GuideDetail"));
// const CampsiteDetail = lazy(() => import("./pages/CampsiteDetail")); // TODO: Da riattivare in futuro
const Events = lazy(() => import("./pages/Events"));
const RadunoNazionale2026 = lazy(() => import("./pages/RadunoNazionale2026"));
const FAQ = lazy(() => import("./pages/FAQ"));
const Privacy = lazy(() => import("./pages/Privacy"));
const Terms = lazy(() => import("./pages/Terms"));
const Cookies = lazy(() => import("./pages/Cookies"));

// Loading fallback component
const PageLoader = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
  </div>
);

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
          <Route path="/guide/:slug" element={<Suspense fallback={<PageLoader />}><GuideDetail /></Suspense>} />
          {/* TODO: Da riattivare in futuro
          <Route path="/campeggi" element={<CampsiteList />} />
          <Route path="/campeggi/:slug" element={<Suspense fallback={<PageLoader />}><CampsiteDetail /></Suspense>} />
          */}
          <Route path="/contatti" element={<Contact />} />
          <Route path="/eventi" element={<Suspense fallback={<PageLoader />}><Events /></Suspense>} />
          <Route path="/raduno-nazionale-2026" element={<Suspense fallback={<PageLoader />}><RadunoNazionale2026 /></Suspense>} />
          <Route path="/faq" element={<Suspense fallback={<PageLoader />}><FAQ /></Suspense>} />
          <Route path="/privacy" element={<Suspense fallback={<PageLoader />}><Privacy /></Suspense>} />
          <Route path="/termini" element={<Suspense fallback={<PageLoader />}><Terms /></Suspense>} />
          <Route path="/cookie" element={<Suspense fallback={<PageLoader />}><Cookies /></Suspense>} />
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
