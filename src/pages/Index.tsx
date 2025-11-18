import { Star, TrendingUp, ShieldCheck, ExternalLink, Zap, Camera, Lightbulb, Wifi } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import cameraLampada from "@/assets/camera-lampada.webp";
import cameraIpTuya from "@/assets/camera-ip-tuya.webp";
import videoPorteiro from "@/assets/video-porteiro.webp";
import lampadaRgb from "@/assets/lampada-rgb-avant.webp";
import sensorMovimento from "@/assets/sensor-movimento.webp";
import tomada16aTuya from "@/assets/tomada-16a-tuya.webp";
import tomada20aEkaza from "@/assets/tomada-20a-ekaza.webp";
import plugTemporizador from "@/assets/plug-temporizador.webp";

const Index = () => {
  const featuredProducts = [
    {
      id: 1,
      title: "Tomada Inteligente Wi-Fi 20A Tuya",
      description: "Alta potência para aparelhos pesados como ar-condicionado",
      image: tomada20aEkaza,
      badge: "Mais Vendida",
      rating: 4.8,
      link: "https://mercadolivre.com/sec/1Zr1mor",
      keywords: ["Tomada Inteligente Tuya é boa?", "Tomada WiFi 20A para ar-condicionado"],
    },
    {
      id: 2,
      title: "Câmera IP 5MP Tuya Wi-Fi",
      description: "Vigilância profissional com detecção de movimento e alarme",
      image: cameraIpTuya,
      badge: "Recomendado",
      rating: 4.7,
      link: "https://mercadolivre.com/sec/2irXGXu",
      keywords: ["Câmera Tuya 5MP é boa?", "Câmera IP Wi-Fi noturna"],
    },
    {
      id: 3,
      title: "Vídeo Porteiro Wi-Fi Tuya",
      description: "Veja quem está na porta pelo celular, sem fios",
      image: videoPorteiro,
      badge: "Novidade",
      rating: 4.6,
      link: "https://mercadolivre.com/sec/15Q6sBg",
      keywords: ["Vídeo porteiro Tuya vale a pena?", "Campainha inteligente sem fio"],
    },
    {
      id: 4,
      title: "Lâmpada RGB Wi-Fi 15W Avant Neo",
      description: "16 milhões de cores para ambientes personalizados",
      image: lampadaRgb,
      badge: "Top 2025",
      rating: 4.9,
      link: "https://mercadolivre.com/sec/2kNCSFF",
      keywords: ["Lâmpada RGB Tuya é boa?", "Lâmpada inteligente 15W"],
    },
    {
      id: 5,
      title: "Câmera Lâmpada E27 com Alarme",
      description: "Segurança 2 em 1: iluminação + vigilância 360°",
      image: cameraLampada,
      badge: "Inovador",
      rating: 4.5,
      link: "https://mercadolivre.com/sec/1urzHto",
      keywords: ["Lâmpada câmera Tuya funciona?", "Câmera espiã E27"],
    },
    {
      id: 6,
      title: "Sensor de Movimento Zigbee Tuya",
      description: "Automação inteligente para acionar luzes e dispositivos",
      image: sensorMovimento,
      badge: "Essencial",
      rating: 4.7,
      link: "https://mercadolivre.com/sec/2hbunSX",
      keywords: ["Sensor Tuya Zigbee é bom?", "Sensor presença automação"],
    },
    {
      id: 7,
      title: "Tomada Wi-Fi 16A NovaDigital",
      description: "Controle por voz e medição de consumo em tempo real",
      image: tomada16aTuya,
      badge: "Econômica",
      rating: 4.6,
      link: "https://mercadolivre.com/sec/2dAstsr",
      keywords: ["Tomada NovaDigital é confiável?", "Tomada 16A medidor energia"],
    },
    {
      id: 8,
      title: "Plug Smart Temporizador Tuya",
      description: "Programe horários e economize energia automaticamente",
      image: plugTemporizador,
      badge: "Prático",
      rating: 4.4,
      link: "https://mercadolivre.com/sec/2nBAFaW",
      keywords: ["Plug inteligente timer vale a pena?", "Tomada programável Tuya"],
    },
  ];

  const categories = [
    {
      icon: Wifi,
      title: "Tomadas Inteligentes",
      description: "Controle remoto e medição de consumo",
      gradient: "from-primary to-primary-hover",
    },
    {
      icon: Camera,
      title: "Câmeras de Segurança",
      description: "Vigilância 24/7 com detecção inteligente",
      gradient: "from-secondary to-accent",
    },
    {
      icon: Lightbulb,
      title: "Iluminação Smart",
      description: "RGB, branco e controle de intensidade",
      gradient: "from-badge-warning to-badge-success",
    },
    {
      icon: Zap,
      title: "Sensores & Automação",
      description: "Movimento, presença e cenários inteligentes",
      gradient: "from-badge-info to-primary",
    },
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-hero py-20 text-white">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utb3BhY2l0eT0iLjEiLz48L2c+PC9zdmc+')] opacity-20"></div>
        <div className="container relative mx-auto px-4 text-center">
          <Badge className="mb-4 bg-white/20 text-white hover:bg-white/30">
            Smart Home • Reviews • 2025
          </Badge>
          <h1 className="mb-6 text-4xl font-bold md:text-6xl">
            Transforme sua Casa em um Lar Inteligente
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-white/90 md:text-xl">
            <strong>Reviews honestos</strong> dos melhores produtos smart home. Descubra qual{" "}
            <strong className="text-secondary">Tomada Inteligente é boa</strong>, qual{" "}
            <strong className="text-secondary">Câmera Tuya funciona melhor</strong> e muito mais!
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a href="#produtos" className="w-full sm:w-auto">
              <Button size="lg" className="w-full bg-white text-primary hover:bg-white/90 sm:w-auto">
                Ver Produtos <TrendingUp className="ml-2 h-5 w-5" />
              </Button>
            </a>
            <a
              href="https://mercadolivre.com/sec/14GQgfK"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              <Button
                size="lg"
                variant="outline"
                className="w-full border-white text-white hover:bg-white/10 sm:w-auto"
              >
                Minhas Recomendações <ExternalLink className="ml-2 h-5 w-5" />
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold text-foreground">
            Categorias em Destaque
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((category, index) => (
              <Card
                key={index}
                className="group cursor-pointer border-border bg-card p-6 shadow-card transition-all hover:shadow-card-hover"
              >
                <div
                  className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br ${category.gradient}`}
                >
                  <category.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-card-foreground">
                  {category.title}
                </h3>
                <p className="text-sm text-muted-foreground">{category.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section id="produtos" className="bg-muted/30 py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <Badge className="mb-4 bg-badge-success text-white">
              <ShieldCheck className="mr-1 h-3 w-3" /> Análises Completas
            </Badge>
            <h2 className="mb-4 text-3xl font-bold text-foreground">
              Melhores Dispositivos Tuya 2025
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Reviews detalhados com palavras-chave de cauda longa: <strong>Tomada Inteligente Tuya é boa?</strong>,{" "}
              <strong>Câmera Tuya 5MP funciona bem?</strong> e mais
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {featuredProducts.map((product) => (
              <Card
                key={product.id}
                className="group overflow-hidden border-border bg-card shadow-card transition-all hover:shadow-card-hover"
              >
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                    loading="lazy"
                  />
                  <Badge className="absolute left-2 top-2 bg-badge-warning text-white">
                    {product.badge}
                  </Badge>
                </div>
                <div className="p-4">
                  <div className="mb-2 flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < Math.floor(product.rating)
                            ? "fill-badge-warning text-badge-warning"
                            : "text-muted"
                        }`}
                      />
                    ))}
                    <span className="ml-2 text-sm font-medium text-foreground">{product.rating}</span>
                  </div>
                  <h3 className="mb-2 font-semibold text-card-foreground">{product.title}</h3>
                  <p className="mb-4 text-sm text-muted-foreground">{product.description}</p>
                  <div className="mb-4 flex flex-wrap gap-1">
                    {product.keywords.slice(0, 2).map((keyword, idx) => (
                      <Badge
                        key={idx}
                        variant="outline"
                        className="text-xs font-normal text-muted-foreground"
                      >
                        {keyword}
                      </Badge>
                    ))}
                  </div>
                  <a href={product.link} target="_blank" rel="noopener noreferrer">
                    <Button className="w-full bg-primary text-primary-foreground hover:bg-primary-hover">
                      Ver Oferta <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                  </a>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <a
              href="https://mercadolivre.com/sec/14GQgfK"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10">
                Ver Todas as Recomendações <ExternalLink className="ml-2 h-5 w-5" />
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <ShieldCheck className="mx-auto mb-6 h-16 w-16 text-badge-success" />
            <h2 className="mb-4 text-3xl font-bold text-foreground">
              Por que confiar no Minha Casa Nova?
            </h2>
            <p className="mb-8 text-lg text-muted-foreground">
              Analisamos procedência de marcas, avaliações reais de usuários e testamos os produtos antes
              de recomendar. Nosso foco é <strong>qualidade e transparência</strong>.
            </p>
            <div className="grid gap-6 sm:grid-cols-3">
              <div>
                <div className="mb-2 text-3xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">Produtos Analisados</div>
              </div>
              <div>
                <div className="mb-2 text-3xl font-bold text-secondary">4.8/5</div>
                <div className="text-sm text-muted-foreground">Avaliação Média</div>
              </div>
              <div>
                <div className="mb-2 text-3xl font-bold text-badge-success">100%</div>
                <div className="text-sm text-muted-foreground">Reviews Honestos</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
