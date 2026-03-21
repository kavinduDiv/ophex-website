// import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import ServiceDetail from "./pages/ServiceDetail";
import ProductDetail from "./pages/ProductDetail";
import NotFound from "./pages/NotFound";
import WhatsAppButton from "./components/WhatsAppButton";
import BackToTopButton from "./components/BackToTopButton";
import Careers from "./pages/Careers";
import { useEffect } from "react";
import ReactPixel from "react-facebook-pixel";
import { useLocation } from "react-router-dom";

const queryClient = new QueryClient();

// Tracker component place inside BrowserRouter
const PixelTracker = () => {
  const location = useLocation();

  useEffect(() => {
    // console.log("Pixel tracking path:", location.pathname);
    ReactPixel.pageView();
  }, [location]);

  return null;
};

const App = () => {
  
  useEffect(() => {
  const options = {
    autoConfig: true, 
    debug: false,
  };
  
  ReactPixel.init('929725986480087', undefined, options); 
}, []);

  return ( // 4. Wrapped your layout in a return statement
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Sonner />
        <WhatsAppButton />
        <BackToTopButton />
        <BrowserRouter>
          <PixelTracker />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/services/:serviceId" element={<ServiceDetail />} />
            <Route path="/products/:productId" element={<ProductDetail />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};
export default App;
