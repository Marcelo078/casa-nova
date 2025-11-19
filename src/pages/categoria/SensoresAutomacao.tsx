import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const SensoresAutomacao = () => {
  return (
    <>
      <Helmet>
        <title>Sensores e Automação | Minha Casa Nova</title>
        <meta name="description" content="Sensores inteligentes para automação residencial" />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold mb-6">Sensores e Automação</h1>
          <p>Em breve: Sensores de movimento, presença e mais</p>
          <Button asChild className="mt-4">
            <a href="/">Voltar ao Início</a>
          </Button>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default SensoresAutomacao;