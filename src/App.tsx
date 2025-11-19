import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Sobre from "./pages/Sobre";
import Privacidade from "./pages/Privacidade";
import Termos from "./pages/Termos";
import Disclaimer from "./pages/Disclaimer";
import NotFound from "./pages/NotFound";

// Categorias
import TomadasInteligentes from "./pages/categoria/TomadasInteligentes";
import CamerasSeguranca from "./pages/categoria/CamerasSeguranca";
import IluminacaoSmart from "./pages/categoria/IluminacaoSmart";
import SensoresAutomacao from "./pages/categoria/SensoresAutomacao";

// Produtos
import TomadaInteligente20ATuya from "./pages/produtos/TomadaInteligente20ATuya";
import CameraIP5MPTuya from "./pages/produtos/CameraIP5MPTuya";
import Tomada16ANovaDigital from "./pages/produtos/Tomada16ANovaDigital";
import Tomada16AMedicaoTuya from "./pages/produtos/Tomada16AMedicaoTuya";
import PlugTemporizadorTuya from "./pages/produtos/PlugTemporizadorTuya";
import VideoPorteiroTuya from "./pages/produtos/VideoPorteiroTuya";
import SensorMovimentoZigbee from "./pages/produtos/SensorMovimentoZigbee";
import LampadaCameraE27 from "./pages/produtos/LampadaCameraE27";
import LampadaRGB15WAvant from "./pages/produtos/LampadaRGB15WAvant";
import SensorPresencaShiss from "./pages/produtos/SensorPresencaShiss";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/privacidade" element={<Privacidade />} />
          <Route path="/termos" element={<Termos />} />
          <Route path="/disclaimer" element={<Disclaimer />} />
          
          {/* Categorias */}
          <Route path="/categoria/tomadas-inteligentes" element={<TomadasInteligentes />} />
          <Route path="/categoria/cameras-seguranca" element={<CamerasSeguranca />} />
          <Route path="/categoria/iluminacao-smart" element={<IluminacaoSmart />} />
          <Route path="/categoria/sensores-automacao" element={<SensoresAutomacao />} />
          
          {/* Produtos */}
          <Route path="/produtos/tomada-inteligente-20a-tuya" element={<TomadaInteligente20ATuya />} />
          <Route path="/produtos/camera-ip-5mp-tuya" element={<CameraIP5MPTuya />} />
          <Route path="/produtos/tomada-inteligente-16a-novadigital" element={<Tomada16ANovaDigital />} />
          <Route path="/produtos/tomada-inteligente-16a-medicao-tuya" element={<Tomada16AMedicaoTuya />} />
          <Route path="/produtos/plug-smart-temporizador-tuya" element={<PlugTemporizadorTuya />} />
          <Route path="/produtos/video-porteiro-wifi-tuya" element={<VideoPorteiroTuya />} />
          <Route path="/produtos/sensor-movimento-zigbee-tuya" element={<SensorMovimentoZigbee />} />
          <Route path="/produtos/lampada-camera-e27-tuya" element={<LampadaCameraE27 />} />
          <Route path="/produtos/lampada-rgb-15w-avant-neo" element={<LampadaRGB15WAvant />} />
          <Route path="/produtos/sensor-presenca-humana-shiss-tuya" element={<SensorPresencaShiss />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
