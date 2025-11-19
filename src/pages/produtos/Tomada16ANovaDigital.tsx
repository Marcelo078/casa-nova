import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Check, X, Shield } from "lucide-react";
import tomada16AWireless from "@/assets/tomada-16a-wireless.webp";

const Tomada16ANovaDigital = () => {
  return (
    <>
      <Helmet>
        <title>Tomada NovaDigital 16A é boa? Review Completo 2025 | Análise Técnica</title>
        <meta name="description" content="Tomada inteligente NovaDigital 16A é confiável? Review completo com análise técnica, prós e contras. Certificação Anatel, funciona com Alexa e Google Home." />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Navbar />
        <article className="container mx-auto px-4 py-8 max-w-4xl">
          <div className="mb-8">
            <div className="flex flex-wrap gap-2 mb-4">
              <Badge variant="secondary">NovaDigital</Badge>
              <Badge variant="secondary">16A - 3520W</Badge>
              <Badge className="bg-green-600">Certificação Anatel</Badge>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Tomada NovaDigital 16A é boa? Review Completo 2025</h1>
            <p className="text-xl text-muted-foreground mb-6">
              Análise técnica completa da <strong>Tomada NovaDigital 16A</strong>, a opção nacional certificada pela Anatel com excelente custo-benefício para automação residencial.
            </p>
          </div>
          
          <img src={tomada16AWireless} alt="Tomada Inteligente NovaDigital 16A" className="w-full rounded-lg mb-8" />
          
          <Card className="mb-8 border-primary">
            <CardContent className="p-6 text-center">
              <p className="text-2xl font-bold mb-4">🔥 Melhor Custo-Benefício Nacional</p>
              <Button asChild size="lg">
                <a href="https://mercadolivre.com/sec/2dAstsr" target="_blank" rel="nofollow noopener">
                  <ExternalLink className="mr-2" />Ver Oferta no Mercado Livre
                </a>
              </Button>
            </CardContent>
          </Card>

          <section className="mb-8 prose max-w-none">
            <h2 className="text-3xl font-bold mb-4">Por que escolher a NovaDigital 16A?</h2>
            <p className="text-muted-foreground mb-4">
              A <strong>Tomada Inteligente NovaDigital 16A</strong> é uma das melhores opções para quem busca qualidade nacional certificada. 
              Com <strong>certificação Anatel</strong>, suporte técnico facilitado e fabricação brasileira, oferece segurança superior às tomadas importadas genéricas.
            </p>
            <p className="text-muted-foreground mb-4">
              Compatível com <strong>Alexa e Google Home</strong>, permite controlar aparelhos por voz, criar rotinas e monitorar tudo pelo app Smart Life/Tuya. 
              Suporta até 3520W (220V), ideal para ar-condicionado, micro-ondas, aquecedores e outros aparelhos potentes.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold mb-6">Prós e Contras</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-green-500/50">
                <CardHeader><CardTitle className="flex items-center gap-2 text-green-600"><Check className="w-6 h-6" />Pontos Positivos</CardTitle></CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex gap-2"><Check className="w-5 h-5 text-green-600" /><span>Certificação Anatel</span></li>
                    <li className="flex gap-2"><Check className="w-5 h-5 text-green-600" /><span>Fabricação Nacional</span></li>
                    <li className="flex gap-2"><Check className="w-5 h-5 text-green-600" /><span>16A de potência</span></li>
                    <li className="flex gap-2"><Check className="w-5 h-5 text-green-600" /><span>Alexa e Google Home</span></li>
                    <li className="flex gap-2"><Check className="w-5 h-5 text-green-600" /><span>Excelente custo-benefício</span></li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="border-red-500/50">
                <CardHeader><CardTitle className="flex items-center gap-2 text-red-600"><X className="w-6 h-6" />Pontos de Atenção</CardTitle></CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex gap-2"><X className="w-5 h-5 text-red-600" /><span>Apenas Wi-Fi 2.4GHz</span></li>
                    <li className="flex gap-2"><X className="w-5 h-5 text-red-600" /><span>Sem medição de energia</span></li>
                    <li className="flex gap-2"><X className="w-5 h-5 text-red-600" /><span>LED sempre aceso</span></li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          <Card className="mb-8 bg-gradient-to-br from-primary/5 to-primary/10 border-primary">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Pronto para Automatizar?</h3>
              <Button asChild size="lg">
                <a href="https://mercadolivre.com/sec/2dAstsr" target="_blank" rel="nofollow noopener">
                  <ExternalLink className="mr-2" />Comprar Agora
                </a>
              </Button>
            </CardContent>
          </Card>
        </article>
        <Footer />
      </div>
    </>
  );
};

export default Tomada16ANovaDigital;