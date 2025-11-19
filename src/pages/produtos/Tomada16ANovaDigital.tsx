import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const Tomada16ANovaDigital = () => {
  return (
    <>
      <Helmet>
        <title>Tomada NovaDigital 16A é boa? | Minha Casa Nova</title>
      </Helmet>
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container mx-auto px-4 py-8 max-w-4xl">
          <h1 className="text-4xl font-bold mb-6">Tomada NovaDigital 16A</h1>
          <p className="mb-4">Review completo em breve</p>
          <Button asChild>
            <a href="https://mercadolivre.com/sec/2dAstsr" target="_blank" rel="nofollow noopener">
              <ExternalLink className="mr-2 w-4 h-4" />Ver no Mercado Livre
            </a>
          </Button>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Tomada16ANovaDigital;