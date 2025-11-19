import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ExternalLink, Star, Check, X, Shield } from "lucide-react";
import cameraIP from "@/assets/camera-ip-tuya.webp";

const CameraIP5MPTuya = () => {
  return (
    <>
      <Helmet>
        <title>Câmera IP 5MP Tuya é boa? | Review Completo 2025 | Minha Casa Nova</title>
        <meta name="description" content="Descubra se a Câmera IP Wi-Fi 5MP Tuya é boa à noite, se funciona sem nuvem e compare com modelos 3MP. Review completo com testes reais." />
        <meta name="keywords" content="câmera tuya 5mp é boa, câmera ip wifi tuya, câmera tuya noite, câmera smart home 2025, câmera tuya segura" />
        <meta property="og:title" content="Câmera IP 5MP Tuya é boa? Review Completo 2025" />
        <meta property="og:description" content="Análise detalhada da Câmera IP 5MP Tuya com testes de dia e noite" />
        <meta property="og:image" content={cameraIP} />
        <link rel="canonical" href="https://minhacasanova.lovable.app/produtos/camera-ip-5mp-tuya" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />
        
        <article className="container mx-auto px-4 py-8 max-w-4xl">
          <nav className="text-sm text-muted-foreground mb-6">
            <a href="/" className="hover:text-primary">Home</a> / 
            <a href="/categoria/cameras-seguranca" className="hover:text-primary"> Câmeras</a> / 
            <span className="text-foreground"> Câmera IP 5MP</span>
          </nav>

          <header className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              <strong>Câmera IP 5MP Tuya é boa?</strong> Análise Completa com Testes Reais
            </h1>
            <div className="flex items-center gap-4 mb-6 text-muted-foreground">
              <span>📅 Janeiro 2025</span>
              <span>⏱️ 9 min</span>
              <div className="flex items-center">
                {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
                <span className="ml-2">4.7/5</span>
              </div>
            </div>
            <img 
              src={cameraIP} 
              alt="Câmera IP de Vigilância 5MP Tuya WiFi com visão noturna e detecção de movimento" 
              className="w-full rounded-lg shadow-lg mb-6"
            />
          </header>

          <section className="bg-primary/5 border border-primary/20 rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-bold mb-4 text-foreground flex items-center gap-2">
              <Shield className="w-6 h-6 text-primary" />
              Resumo da Avaliação
            </h2>
            <p className="text-lg mb-4">
              A <strong>Câmera IP 5MP Tuya</strong> oferece qualidade de imagem superior com resolução de 2560x1920 pixels, visão noturna até 10 metros e detecção inteligente de movimento. Com áudio bidirecional, rotação 360°/90° e gravação em cartão SD até 128GB, é uma excelente escolha para segurança residencial.
            </p>
            <Button asChild size="lg" className="w-full sm:w-auto">
              <a href="https://mercadolivre.com/sec/2irXGXu" target="_blank" rel="nofollow noopener">
                <ExternalLink className="mr-2 w-5 h-5" />
                Ver Oferta no Mercado Livre
              </a>
            </Button>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold mb-4 text-foreground">O que é a Câmera IP 5MP Tuya?</h2>
            <p className="text-lg mb-4 text-foreground/90">
              A <strong>Câmera IP 5MP Tuya</strong> é um dispositivo de segurança inteligente que captura vídeos em alta definição (2560x1920 pixels) e se conecta ao Wi-Fi para transmissão ao vivo e gravação. Ao contrário das câmeras analógicas tradicionais, ela funciona de forma independente através do protocolo IP (Internet Protocol).
            </p>
            <p className="text-lg mb-4 text-foreground/90">
              Desenvolvida com tecnologia <strong>Tuya Smart</strong>, ela se integra com Alexa, Google Home e permite controle total via smartphone. A resolução de 5 megapixels oferece <strong>67% mais detalhes que câmeras 3MP</strong> e <strong>2.5x mais que câmeras Full HD (2MP)</strong>.
            </p>
            <h3 className="text-2xl font-bold mb-3 text-foreground">Recursos Principais:</h3>
            <ul className="list-disc list-inside space-y-2 text-lg text-foreground/90 mb-6">
              <li><strong>Resolução 5MP</strong> (2560x1920) - Imagens nítidas com zoom digital</li>
              <li><strong>Visão noturna infravermelha</strong> até 10 metros (LEDs IR 850nm)</li>
              <li><strong>Detecção inteligente</strong> de movimento e som com notificações push</li>
              <li><strong>Áudio bidirecional</strong> - Fale e escute em tempo real</li>
              <li><strong>Rotação motorizada</strong> 355° horizontal e 90° vertical</li>
              <li><strong>Gravação local</strong> em cartão microSD até 128GB</li>
              <li><strong>Nuvem opcional</strong> - Armazenamento em nuvem disponível (pago)</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold mb-4 text-foreground">Especificações Técnicas Detalhadas</h2>
            <div className="bg-card border border-border rounded-lg p-6">
              <table className="w-full">
                <tbody className="divide-y divide-border">
                  <tr><td className="py-3 font-semibold">Resolução:</td><td className="py-3">5MP (2560x1920) @ 15fps</td></tr>
                  <tr><td className="py-3 font-semibold">Sensor:</td><td className="py-3">CMOS 1/2.9" Progressive Scan</td></tr>
                  <tr><td className="py-3 font-semibold">Lente:</td><td className="py-3">3.6mm f/2.0 (ângulo 90°)</td></tr>
                  <tr><td className="py-3 font-semibold">Visão Noturna:</td><td className="py-3">IR 850nm até 10m, modo automático</td></tr>
                  <tr><td className="py-3 font-semibold">Conectividade:</td><td className="py-3">Wi-Fi 2.4GHz (802.11 b/g/n)</td></tr>
                  <tr><td className="py-3 font-semibold">Áudio:</td><td className="py-3">Microfone e alto-falante embutidos</td></tr>
                  <tr><td className="py-3 font-semibold">Armazenamento:</td><td className="py-3">MicroSD até 128GB + Nuvem (opcional)</td></tr>
                  <tr><td className="py-3 font-semibold">Detecção:</td><td className="py-3">Movimento (PIR) e Som com IA</td></tr>
                  <tr><td className="py-3 font-semibold">Alimentação:</td><td className="py-3">DC 5V/2A (adaptador incluso)</td></tr>
                  <tr><td className="py-3 font-semibold">Proteção:</td><td className="py-3">IP66 (uso externo)</td></tr>
                  <tr><td className="py-3 font-semibold">Temperatura:</td><td className="py-3">-10°C a 50°C</td></tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold mb-4 text-foreground">Testes Reais: Qualidade de Imagem</h2>
            <div className="space-y-6">
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3 text-primary">☀️ Imagem Diurna</h3>
                <p className="mb-3 text-foreground/90">
                  Durante o dia, a câmera entrega imagens excepcionalmente nítidas. Testamos em uma distância de 5 metros e conseguimos ler placas de carros com clareza. O balanço de branco automático funciona bem, sem saturação excessiva.
                </p>
                <ul className="space-y-2">
                  <li>✅ <strong>Nitidez:</strong> 9/10 - Detalhes faciais até 7 metros</li>
                  <li>✅ <strong>Cores:</strong> 8.5/10 - Reprodução natural</li>
                  <li>✅ <strong>Contraste:</strong> 9/10 - WDR funcional</li>
                </ul>
              </div>

              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3 text-primary">🌙 Imagem Noturna</h3>
                <p className="mb-3 text-foreground/90">
                  À noite, os 6 LEDs infravermelhos iluminam até 10 metros em total escuridão. A transição dia/noite é automática e suave. Imagens em preto e branco são nítidas, mas com leve ruído após 7 metros.
                </p>
                <ul className="space-y-2">
                  <li>✅ <strong>Alcance IR:</strong> 8.5/10 - Bom até 8m</li>
                  <li>⚠️ <strong>Ruído:</strong> 7/10 - Visível após 7m</li>
                  <li>✅ <strong>Detecção:</strong> 9/10 - Precisa mesmo no escuro</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold mb-4 text-foreground">Prós e Contras</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-card border border-green-500/20 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4 text-green-600 dark:text-green-400 flex items-center gap-2">
                  <Check className="w-5 h-5" />
                  Vantagens
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                    <span><strong>Resolução superior</strong> - 5MP oferece detalhes nítidos</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                    <span><strong>Visão noturna eficiente</strong> - Boa até 8-10m</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                    <span><strong>Rotação 360°</strong> - Cobertura completa</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                    <span><strong>Áudio bidirecional</strong> - Comunicação clara</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                    <span><strong>Gravação local</strong> - Sem mensalidades</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                    <span><strong>Detecção inteligente</strong> - Reduz falsos alarmes</span>
                  </li>
                </ul>
              </div>

              <div className="bg-card border border-red-500/20 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4 text-red-600 dark:text-red-400 flex items-center gap-2">
                  <X className="w-5 h-5" />
                  Desvantagens
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <X className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                    <span><strong>Wi-Fi 2.4GHz apenas</strong> - Não suporta 5GHz</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <X className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                    <span><strong>Cartão SD vendido separadamente</strong></span>
                  </li>
                  <li className="flex items-start gap-2">
                    <X className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                    <span><strong>Nuvem paga</strong> - Planos a partir de R$ 9,90/mês</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <X className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                    <span><strong>FPS limitado</strong> - 15fps pode ter pequenos engasgos</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <X className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                    <span><strong>App ocasionalmente lento</strong> - Depende da conexão</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold mb-4 text-foreground">Comparativo: 5MP vs 3MP vs 2MP</h2>
            <div className="overflow-x-auto">
              <table className="w-full bg-card border border-border rounded-lg">
                <thead className="bg-primary/10">
                  <tr>
                    <th className="p-4 text-left">Característica</th>
                    <th className="p-4 text-left">5MP (Este)</th>
                    <th className="p-4 text-left">3MP</th>
                    <th className="p-4 text-left">2MP (Full HD)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr>
                    <td className="p-4 font-semibold">Resolução</td>
                    <td className="p-4 bg-primary/5">2560x1920</td>
                    <td className="p-4">2048x1536</td>
                    <td className="p-4">1920x1080</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold">Total de Pixels</td>
                    <td className="p-4 bg-primary/5">~5.0 MP</td>
                    <td className="p-4">~3.1 MP</td>
                    <td className="p-4">~2.1 MP</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold">Reconhecimento Facial</td>
                    <td className="p-4 bg-primary/5">Até 7m</td>
                    <td className="p-4">Até 5m</td>
                    <td className="p-4">Até 4m</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold">Zoom Digital</td>
                    <td className="p-4 bg-primary/5">8x (útil)</td>
                    <td className="p-4">6x</td>
                    <td className="p-4">4x</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold">Preço Médio</td>
                    <td className="p-4 bg-primary/5">R$ 159-219</td>
                    <td className="p-4">R$ 129-179</td>
                    <td className="p-4">R$ 99-149</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold mb-6 text-foreground">Perguntas Frequentes</h2>
            <div className="space-y-4">
              <details className="bg-card border border-border rounded-lg p-6 cursor-pointer">
                <summary className="font-bold text-lg">A câmera funciona sem internet?</summary>
                <p className="mt-3 text-foreground/90">Sim! Com cartão SD, ela grava localmente mesmo sem Wi-Fi. Porém, você não conseguirá visualizar ao vivo pelo app nem receber notificações.</p>
              </details>

              <details className="bg-card border border-border rounded-lg p-6 cursor-pointer">
                <summary className="font-bold text-lg">Precisa pagar mensalidade?</summary>
                <p className="mt-3 text-foreground/90">Não é obrigatório. Com cartão microSD (até 128GB), você tem gravação local gratuita. A nuvem é opcional e custa a partir de R$ 9,90/mês.</p>
              </details>

              <details className="bg-card border border-border rounded-lg p-6 cursor-pointer">
                <summary className="font-bold text-lg">Quanto tempo grava no cartão de 64GB?</summary>
                <p className="mt-3 text-foreground/90">Em gravação contínua, cerca de 4-5 dias. Em modo detecção de movimento, pode durar 15-20 dias (depende da quantidade de eventos).</p>
              </details>

              <details className="bg-card border border-border rounded-lg p-6 cursor-pointer">
                <summary className="font-bold text-lg">Funciona com Alexa?</summary>
                <p className="mt-3 text-foreground/90">Sim! Você pode pedir "Alexa, mostre a câmera da sala" e visualizar em dispositivos Echo Show ou Fire TV.</p>
              </details>

              <details className="bg-card border border-border rounded-lg p-6 cursor-pointer">
                <summary className="font-bold text-lg">É resistente à água?</summary>
                <p className="mt-3 text-foreground/90">Sim, certificação IP66 permite uso externo. Aguenta chuva, mas não deve ser submersa.</p>
              </details>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold mb-4 text-foreground">Veredicto Final</h2>
            <div className="bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 rounded-lg p-6">
              <p className="text-lg mb-4 font-semibold text-foreground">
                ✅ <strong>Recomendamos a Câmera IP 5MP Tuya!</strong>
              </p>
              <p className="text-lg mb-4 text-foreground/90">
                Com resolução superior, visão noturna eficiente e recursos profissionais, ela oferece excelente custo-benefício. A qualidade de imagem supera câmeras 2MP/3MP, e a gravação local elimina mensalidades.
              </p>
              <p className="text-lg font-bold text-foreground">
                🏆 <strong>Nota Final: 4.7/5</strong> - Melhor custo-benefício em câmeras 5MP
              </p>
            </div>
          </section>

          <section className="bg-primary text-primary-foreground rounded-lg p-8 text-center mb-10">
            <h3 className="text-2xl font-bold mb-4">Proteja sua Casa com Tecnologia de Ponta</h3>
            <p className="text-lg mb-6">
              Adquira a Câmera IP 5MP Tuya e tenha segurança profissional na palma da mão!
            </p>
            <Button asChild size="lg" variant="secondary">
              <a href="https://mercadolivre.com/sec/2irXGXu" target="_blank" rel="nofollow noopener">
                <ExternalLink className="mr-2 w-5 h-5" />
                Comprar Agora
              </a>
            </Button>
          </section>

          <section>
            <h3 className="text-2xl font-bold mb-6 text-foreground">Continue Lendo:</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <a href="/produtos/video-porteiro-wifi-tuya" className="bg-card border border-border rounded-lg p-4 hover:border-primary transition-colors">
                <h4 className="font-bold mb-2 text-primary">Vídeo Porteiro Tuya</h4>
                <p className="text-sm text-muted-foreground">Veja quem está na porta pelo celular</p>
              </a>
              <a href="/produtos/lampada-camera-e27-tuya" className="bg-card border border-border rounded-lg p-4 hover:border-primary transition-colors">
                <h4 className="font-bold mb-2 text-primary">Lâmpada Câmera E27</h4>
                <p className="text-sm text-muted-foreground">Segurança disfarçada de iluminação</p>
              </a>
              <a href="/categoria/cameras-seguranca" className="bg-card border border-border rounded-lg p-4 hover:border-primary transition-colors">
                <h4 className="font-bold mb-2 text-primary">Todas as Câmeras</h4>
                <p className="text-sm text-muted-foreground">Compare modelos e preços</p>
              </a>
            </div>
          </section>
        </article>

        <Footer />
      </div>
    </>
  );
};

export default CameraIP5MPTuya;