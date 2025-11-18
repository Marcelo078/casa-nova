import { Heart, Target, Users, Shield } from "lucide-react";
import { Card } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Sobre = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      
      <main className="flex-1">
        <div className="bg-gradient-hero py-16 text-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="mb-4 text-4xl font-bold md:text-5xl">Sobre o Minha Casa Nova</h1>
            <p className="mx-auto max-w-2xl text-lg text-white/90">
              Ajudando você a transformar sua casa em um lar inteligente desde 2024
            </p>
          </div>
        </div>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl">
              <Card className="mb-12 border-border bg-card p-8 shadow-card">
                <h2 className="mb-4 text-2xl font-bold text-foreground">Nossa Missão</h2>
                <p className="mb-4 text-muted-foreground">
                  O <strong className="text-foreground">Minha Casa Nova</strong> nasceu da necessidade de encontrar
                  informações confiáveis sobre produtos smart home no mercado brasileiro. Sabemos como é difícil
                  decidir entre tantas opções, marcas e modelos.
                </p>
                <p className="text-muted-foreground">
                  Por isso, criamos este portal para trazer <strong className="text-foreground">reviews honestos</strong>,
                  análises detalhadas e comparações objetivas dos melhores dispositivos inteligentes disponíveis no
                  Mercado Livre.
                </p>
              </Card>

              <div className="mb-12 grid gap-6 md:grid-cols-2">
                <Card className="border-border bg-card p-6 shadow-card">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-primary-hover">
                    <Target className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="mb-2 text-xl font-semibold text-foreground">Nosso Objetivo</h3>
                  <p className="text-muted-foreground">
                    Ser a referência brasileira em reviews de produtos smart home, oferecendo análises imparciais
                    baseadas em testes reais e avaliações de usuários verificados.
                  </p>
                </Card>

                <Card className="border-border bg-card p-6 shadow-card">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-secondary to-accent">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="mb-2 text-xl font-semibold text-foreground">Para Quem Criamos</h3>
                  <p className="text-muted-foreground">
                    Para pessoas que querem modernizar suas casas com tecnologia, mas não sabem por onde começar.
                    Tornamos a automação residencial acessível para todos.
                  </p>
                </Card>

                <Card className="border-border bg-card p-6 shadow-card">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-badge-success to-badge-info">
                    <Shield className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="mb-2 text-xl font-semibold text-foreground">Nossos Valores</h3>
                  <p className="text-muted-foreground">
                    Transparência, honestidade e compromisso com a qualidade. Analisamos procedência de marcas,
                    avaliações reais e não recomendamos produtos que não usaríamos.
                  </p>
                </Card>

                <Card className="border-border bg-card p-6 shadow-card">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-badge-warning to-destructive">
                    <Heart className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="mb-2 text-xl font-semibold text-foreground">Nossa Paixão</h3>
                  <p className="text-muted-foreground">
                    Acreditamos que tecnologia deve simplificar a vida. Cada produto que recomendamos é escolhido
                    pensando em facilitar seu dia a dia e trazer mais conforto ao seu lar.
                  </p>
                </Card>
              </div>

              <Card className="border-border bg-gradient-card p-8 shadow-card">
                <h2 className="mb-4 text-2xl font-bold text-foreground">Metodologia de Análise</h2>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="mr-2 text-primary">✓</span>
                    <span><strong className="text-foreground">Pesquisa de Mercado:</strong> Verificamos preços, disponibilidade e reputação do vendedor</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-primary">✓</span>
                    <span><strong className="text-foreground">Análise de Avaliações:</strong> Lemos centenas de reviews de compradores reais</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-primary">✓</span>
                    <span><strong className="text-foreground">Testes Práticos:</strong> Testamos os produtos em situações reais de uso doméstico</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-primary">✓</span>
                    <span><strong className="text-foreground">Comparação Técnica:</strong> Comparamos especificações, compatibilidade e custo-benefício</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-primary">✓</span>
                    <span><strong className="text-foreground">Atualização Constante:</strong> Revisamos nossos artigos sempre que surgem novos modelos</span>
                  </li>
                </ul>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Sobre;
