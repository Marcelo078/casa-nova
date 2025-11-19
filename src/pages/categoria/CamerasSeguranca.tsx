import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const CamerasSeguranca = () => {
  return (
    <>
      <Helmet>
        <title>Câmeras de Segurança Inteligentes | Minha Casa Nova</title>
        <meta name="description" content="Melhores câmeras IP WiFi para sua casa" />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold mb-6">Câmeras de Segurança</h1>
          <p>Em breve: Comparativo completo de câmeras inteligentes</p>
          <Button asChild className="mt-4">
            <a href="/">Voltar ao Início</a>
          </Button>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default CamerasSeguranca;