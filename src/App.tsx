import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import PoliticaDePrivacidade from "./pages/PoliticaDePrivacidade";
import TermosDeUso from "./pages/TermosDeUso";
import NotFound from "./pages/NotFound";
import LoginMobile from "./pages/LoginMobile";
import ScrollToTop from "./components/ScrollToTop";
import FloatingWhatsAppButton from "./components/FloatingWhatsAppButton";
import { useSmoothScroll } from "./hooks/useSmoothScroll";
import Politica from "./pages/Politica";
import CadastroMobile from "./pages/CadastroMobile";
import CheckoutMobile from "./pages/CheckoutMobile";
import VerificarEmail from "./pages/VerificarEmail";
import CadastroValidado from "./pages/CadastroValidado";

const queryClient = new QueryClient();

const App = () => {
  // Ativa o smooth scroll globalmente
  useSmoothScroll();

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route
              path="/politica-de-privacidade"
              element={<PoliticaDePrivacidade />}
            />
            <Route path="/termos-de-uso" element={<TermosDeUso />} />
            <Route path="/login-mobile" element={<LoginMobile />} />
            <Route path="/cadastro-mobile" element={<CadastroMobile />} />
            <Route path="/checkout-mobile" element={<CheckoutMobile />} />
            <Route path="/verificar-email" element={<VerificarEmail />} />
            <Route path="/cadastro-validado" element={<CadastroValidado />} />
            <Route path="/politica" element={<Politica />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
          <FloatingWhatsAppButton />
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
