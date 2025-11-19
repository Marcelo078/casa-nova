import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ExternalLink, Filter } from "lucide-react";
import { useState } from "react";
import tomada20a from "@/assets/tomada-20a-ekaza.webp";
import tomada16aTuya from "@/assets/tomada-16a-tuya.webp";
import tomada16aWireless from "@/assets/tomada-16a-wireless.webp";
import plugTemporizador from "@/assets/plug-temporizador.webp";

const TomadasInteligentes = () => {
  const [filtroMarca, setFiltroMarca] = useState("todas");
  const [filtroAmperagem, setFiltroAmperagem] = useState("todas");

  const produtos = [
    {
      nome: "Tomada Inteligente 20A Ekaza",
      marca: "Ekaza",
      amperagem: "20A",
      potencia: "4.400W",
      medicao: true,
      preco: "R$ 89-119",
      link: "https://mercadolivre.com/sec/1Zr1mor",
      pagina: "/produtos/tomada-inteligente-20a-tuya",
      imagem: tomada20a,
      nota: 4.8,
      destaque: "Melhor para alta potência"
    },
    {
      nome: "Tomada Wi-Fi 16A NovaDigital",
      marca: "NovaDigital",
      amperagem: "16A",
      potencia: "3.520W",
      medicao: false,
      preco: "R$ 49-69",
      link: "https://mercadolivre.com/sec/2dAstsr",
      pagina: "/produtos/tomada-inteligente-16a-novadigital",
      imagem: tomada16aWireless,
      nota: 4.5,
      destaque: "Melhor custo-benefício"
    },
    {
      nome: "Tomada 16A com Medição Tuya",
      marca: "Tuya",
      amperagem: "16A",
      potencia: "3.520W",
      medicao: true,
      preco: "R$ 69-89",
      link: "https://mercadolivre.com/sec/2MgzYsA",
      pagina: "/produtos/tomada-inteligente-16a-medicao-tuya",
      imagem: tomada16aTuya,
      nota: 4.7,
      destaque: "Melhor com monitoramento"
    },
    {
      nome: "Plug Smart Temporizador",
      marca: "Tuya",
      amperagem: "10A",
      potencia: "2.200W",
      medicao: false,
      preco: "R$ 39-59",
      link: "https://mercadolivre.com/sec/2nBAFaW",
      pagina: "/produtos/plug-smart-temporizador-tuya",
      imagem: plugTemporizador,
      nota: 4.3,
      destaque: "Mais compacto"
    }
  ];

  const produtosFiltrados = produtos.filter(p => {
    if (filtroMarca !== "todas" && p.marca !== filtroMarca) return false;
    if (filtroAmperagem !== "todas" && p.amperagem !== filtroAmperagem) return false;
    return true;
  });

  return (
    <>
      <Helmet>
        <title>Melhores Tomadas Inteligentes 2025 | Tuya, NovaDigital, Ekaza | Minha Casa Nova</title>
        <meta name="description" content="Compare as melhores tomadas inteligentes WiFi: 10A, 16A e 20A. Reviews completos, preços e onde comprar. Compatível com Alexa e Google Home." />
        <meta name="keywords" content="tomada inteligente, tomada wifi, tomada tuya, smart plug, tomada alexa, tomada google home, tomada 20a, tomada 16a" />
        <link rel="canonical" href="https://minhacasanova.lovable.app/categoria/tomadas-inteligentes" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />
        
        <div className="container mx-auto px-4 py-8">
          <header className="mb-8">
            <nav className="text-sm text-muted-foreground mb-4">
              <a href="/" className="hover:text-primary">Home</a> / 
              <span className="text-foreground"> Tomadas Inteligentes</span>
            </nav>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              <strong>Tomadas Inteligentes</strong> | Guia Completo 2025
            </h1>
            <p className="text-lg text-muted-foreground">
              Compare as melhores tomadas WiFi do mercado. Reviews detalhados, especificações técnicas e preços atualizados.
            </p>
          </header>

          {/* Filtros */}
          <section className="bg-card border border-border rounded-lg p-6 mb-8">
            <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Filter className="w-5 h-5" />
              Filtrar Produtos
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold mb-2">Marca</label>
                <select 
                  value={filtroMarca}
                  onChange={(e) => setFiltroMarca(e.target.value)}
                  className="w-full p-2 border border-border rounded bg-background"
                >
                  <option value="todas">Todas as marcas</option>
                  <option value="Tuya">Tuya</option>
                  <option value="NovaDigital">NovaDigital</option>
                  <option value="Ekaza">Ekaza</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Amperagem</label>
                <select 
                  value={filtroAmperagem}
                  onChange={(e) => setFiltroAmperagem(e.target.value)}
                  className="w-full p-2 border border-border rounded bg-background"
                >
                  <option value="todas">Todas</option>
                  <option value="20A">20A (Alta potência)</option>
                  <option value="16A">16A (Padrão)</option>
                  <option value="10A">10A (Compacto)</option>
                </select>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              {produtosFiltrados.length} produto(s) encontrado(s)
            </p>
          </section>

          {/* Grid de Produtos */}
          <section className="grid md:grid-cols-2 gap-8 mb-12">
            {produtosFiltrados.map((produto, index) => (
              <article key={index} className="bg-card border border-border rounded-lg overflow-hidden hover:border-primary transition-all">
                <div className="relative">
                  <img 
                    src={produto.imagem} 
                    alt={`${produto.nome} - ${produto.destaque}`}
                    className="w-full h-64 object-cover"
                  />
                  <span className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-bold">
                    {produto.destaque}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2 text-foreground">
                    <strong>{produto.nome}</strong>
                  </h3>
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className={i < Math.floor(produto.nota) ? "text-yellow-400" : "text-gray-300"}>★</span>
                      ))}
                    </div>
                    <span className="text-sm text-muted-foreground">{produto.nota}/5</span>
                  </div>
                  
                  <div className="space-y-2 mb-4 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Marca:</span>
                      <span className="font-semibold">{produto.marca}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Amperagem:</span>
                      <span className="font-semibold">{produto.amperagem} ({produto.potencia})</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Medição de energia:</span>
                      <span className="font-semibold">{produto.medicao ? "✅ Sim" : "❌ Não"}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Faixa de preço:</span>
                      <span className="font-semibold text-primary">{produto.preco}</span>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Button asChild variant="outline" className="flex-1">
                      <a href={produto.pagina}>Ver Review</a>
                    </Button>
                    <Button asChild className="flex-1">
                      <a href={produto.link} target="_blank" rel="nofollow noopener">
                        <ExternalLink className="mr-2 w-4 h-4" />
                        Comprar
                      </a>
                    </Button>
                  </div>
                </div>
              </article>
            ))}
          </section>

          {/* Guia de Compra */}
          <section className="bg-primary/5 border border-primary/20 rounded-lg p-8 mb-12">
            <h2 className="text-3xl font-bold mb-6 text-foreground">Guia de Compra: Como Escolher</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold mb-3 text-primary">1. Defina a Amperagem Necessária</h3>
                <ul className="space-y-2 text-foreground/90">
                  <li><strong>10A (2.200W):</strong> Ventiladores, lâmpadas, carregadores, TVs</li>
                  <li><strong>16A (3.520W):</strong> Micro-ondas, cafeteiras, computadores, geladeiras pequenas</li>
                  <li><strong>20A (4.400W):</strong> Ar-condicionado, aquecedores, chuveiros de até 4.400W</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-3 text-primary">2. Medição de Energia Vale a Pena?</h3>
                <p className="text-foreground/90 mb-2">
                  <strong>SIM</strong>, se você quer economizar na conta de luz. Tomadas com medição mostram consumo em tempo real (kWh, Watts) e histórico, permitindo identificar aparelhos "vilões".
                </p>
                <p className="text-foreground/90">
                  O investimento extra de R$ 20-30 pode se pagar em 3-6 meses com a economia gerada.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-3 text-primary">3. Compatibilidade com Assistentes</h3>
                <p className="text-foreground/90">
                  Todas as tomadas Tuya/Smart Life funcionam com <strong>Alexa e Google Home</strong>. Para Siri, é necessário criar atalhos no app Casa (Homebridge).
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-3 text-primary">4. Tamanho Importa?</h3>
                <p className="text-foreground/90">
                  Tomadas 20A são maiores e podem bloquear tomadas adjacentes. Se o espaço é apertado, prefira plugs compactos de 10A ou adaptadores.
                </p>
              </div>
            </div>
          </section>

          {/* Comparativo */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-foreground">Tabela Comparativa Completa</h2>
            <div className="overflow-x-auto">
              <table className="w-full bg-card border border-border rounded-lg">
                <thead className="bg-primary/10">
                  <tr>
                    <th className="p-4 text-left">Modelo</th>
                    <th className="p-4 text-left">Potência</th>
                    <th className="p-4 text-left">Medição</th>
                    <th className="p-4 text-left">Wi-Fi</th>
                    <th className="p-4 text-left">Preço</th>
                    <th className="p-4 text-left">Nota</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {produtos.map((p, i) => (
                    <tr key={i}>
                      <td className="p-4 font-semibold">{p.nome}</td>
                      <td className="p-4">{p.potencia}</td>
                      <td className="p-4">{p.medicao ? "✅" : "❌"}</td>
                      <td className="p-4">2.4GHz</td>
                      <td className="p-4 text-primary font-bold">{p.preco}</td>
                      <td className="p-4">{p.nota}/5</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* FAQ */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-foreground">Perguntas Frequentes</h2>
            <div className="space-y-4">
              <details className="bg-card border border-border rounded-lg p-6 cursor-pointer">
                <summary className="font-bold text-lg">Tomada inteligente consome muita energia?</summary>
                <p className="mt-3 text-foreground/90">
                  Não. O consumo em standby é de apenas 0.5W-1W (cerca de R$ 0,30/mês). Se tiver medição de energia, a economia gerada compensa 100x.
                </p>
              </details>

              <details className="bg-card border border-border rounded-lg p-6 cursor-pointer">
                <summary className="font-bold text-lg">Funciona sem internet?</summary>
                <p className="mt-3 text-foreground/90">
                  O botão físico sempre funciona. Comandos de voz e remotos (via app) exigem Wi-Fi. Rotinas locais continuam funcionando offline.
                </p>
              </details>

              <details className="bg-card border border-border rounded-lg p-6 cursor-pointer">
                <summary className="font-bold text-lg">É seguro deixar ligado 24h?</summary>
                <p className="mt-3 text-foreground/90">
                  Sim, desde que respeite a amperagem máxima. Tomadas certificadas (Inmetro/CE) têm proteção contra sobrecarga e curto-circuito.
                </p>
              </details>

              <details className="bg-card border border-border rounded-lg p-6 cursor-pointer">
                <summary className="font-bold text-lg">Qual app usar: Tuya Smart ou Smart Life?</summary>
                <p className="mt-3 text-foreground/90">
                  São praticamente idênticos (mesma plataforma Tuya). Use o que preferir - dispositivos aparecem em ambos após login.
                </p>
              </details>
            </div>
          </section>

          {/* CTA */}
          <section className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground rounded-lg p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Pronto para Automatizar sua Casa?</h3>
            <p className="text-lg mb-6">
              Escolha a tomada inteligente ideal e comece a economizar energia hoje!
            </p>
            <Button asChild size="lg" variant="secondary">
              <a href="https://mercadolivre.com/sec/14GQgfK" target="_blank" rel="nofollow noopener">
                Ver Todas as Ofertas
              </a>
            </Button>
          </section>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default TomadasInteligentes;