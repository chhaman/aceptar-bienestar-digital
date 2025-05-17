
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Meditaciones from "./pages/Meditaciones";
import Articulos from "./pages/Articulos";
import Comunidad from "./pages/Comunidad";
import Ejercicios from "./pages/Ejercicios";
import NotFound from "./pages/NotFound";
import BottomNav from "./components/BottomNav";
import ScrollToTop from "./components/ScrollToTop";
import EjercicioDetalle from "./pages/EjercicioDetalle";
import MeditacionDetalle from "./pages/MeditacionDetalle";
import ArticuloDetalle from "./pages/ArticuloDetalle";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/meditaciones" element={<Meditaciones />} />
          <Route path="/meditaciones/:id" element={<MeditacionDetalle />} />
          <Route path="/articulos" element={<Articulos />} />
          <Route path="/articulos/:id" element={<ArticuloDetalle />} />
          <Route path="/comunidad" element={<Comunidad />} />
          <Route path="/ejercicios" element={<Ejercicios />} />
          <Route path="/ejercicios/:categoria" element={<Ejercicios />} />
          <Route path="/ejercicios/detalle/:id" element={<EjercicioDetalle />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <BottomNav />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
