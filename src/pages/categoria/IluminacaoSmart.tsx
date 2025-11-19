import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const IluminacaoSmart = () => {
  return (
    <>
      <Helmet>
        <title>Iluminação Inteligente | Minha Casa Nova</title>
        <meta name="description" content="Lâmpadas e iluminação smart para sua casa" />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold mb-6">Iluminação Inteligente</h1>
          <p>Em breve: Guia completo de lâmpadas RGB e smart</p>
          <Button asChild className="mt-4">
            <a href="/">Voltar ao Início</a>
          </Button>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default IluminacaoSmart;