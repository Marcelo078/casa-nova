import { FileText, AlertCircle, Scale, Ban } from "lucide-react";
import { Card } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Termos = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      
      <main className="flex-1">
        <div className="bg-gradient-hero py-16 text-white">
          <div className="container mx-auto px-4 text-center">
            <FileText className="mx-auto mb-4 h-16 w-16" />
            <h1 className="mb-4 text-4xl font-bold md:text-5xl">Termos de Uso</h1>
            <p className="mx-auto max-w-2xl text-lg text-white/90">
              Leia atentamente antes de usar nosso site
            </p>
          </div>
        </div>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl space-y-8">
              <Card className="border-border bg-card p-8 shadow-card">
                <h2 className="mb-4 text-2xl font-bold text-foreground">1. Aceitação dos Termos</h2>
                <p className="text-muted-foreground">
                  Ao acessar e usar o site <strong className="text-foreground">Minha Casa Nova</strong>, você
                  concorda com estes Termos de Uso e todas as leis aplicáveis. Se você não concordar com
                  qualquer parte destes termos, não deve usar nosso site.
                </p>
              </Card>

              <Card className="border-border bg-card p-8 shadow-card">
                <div className="mb-4 flex items-center gap-3">
                  <Scale className="h-8 w-8 text-primary" />
                  <h2 className="text-2xl font-bold text-foreground">2. Uso do Site</h2>
                </div>
                <p className="mb-4 text-muted-foreground">
                  Você concorda em usar o site apenas para fins legais e de acordo com estes termos:
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="mr-2 text-primary">✓</span>
                    <span>Não violar leis locais, nacionais ou internacionais</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-primary">✓</span>
                    <span>Não transmitir material ilegal, ofensivo ou prejudicial</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-primary">✓</span>
                    <span>Não tentar interferir no funcionamento adequado do site</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-primary">✓</span>
                    <span>Não copiar conteúdo sem permissão expressa</span>
                  </li>
                </ul>
              </Card>

              <Card className="border-border bg-card p-8 shadow-card">
                <h2 className="mb-4 text-2xl font-bold text-foreground">3. Propriedade Intelectual</h2>
                <p className="mb-4 text-muted-foreground">
                  Todo o conteúdo do site, incluindo textos, gráficos, logos, imagens e software, é propriedade
                  do <strong className="text-foreground">Minha Casa Nova</strong> ou de seus fornecedores de
                  conteúdo e está protegido por leis de direitos autorais.
                </p>
                <p className="text-muted-foreground">
                  Você pode visualizar e imprimir páginas para uso pessoal, mas não pode reproduzir, distribuir
                  ou usar o conteúdo para fins comerciais sem autorização prévia.
                </p>
              </Card>

              <Card className="border-border bg-card p-8 shadow-card">
                <div className="mb-4 flex items-center gap-3">
                  <AlertCircle className="h-8 w-8 text-badge-warning" />
                  <h2 className="text-2xl font-bold text-foreground">4. Programa de Afiliados</h2>
                </div>
                <p className="mb-4 text-muted-foreground">
                  O site contém links de afiliados para produtos no Mercado Livre e outros parceiros comerciais:
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="mr-2 text-badge-warning">•</span>
                    <span>Podemos receber comissão por compras realizadas através dos nossos links</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-badge-warning">•</span>
                    <span>Isso não afeta o preço que você paga pelos produtos</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-badge-warning">•</span>
                    <span>Nossas opiniões são independentes e honestas</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-badge-warning">•</span>
                    <span>Só recomendamos produtos que consideramos de qualidade</span>
                  </li>
                </ul>
              </Card>

              <Card className="border-border bg-card p-8 shadow-card">
                <h2 className="mb-4 text-2xl font-bold text-foreground">5. Isenção de Garantias</h2>
                <p className="mb-4 text-muted-foreground">
                  O site é fornecido "como está" e "conforme disponível", sem garantias de qualquer tipo:
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="mr-2 text-foreground">•</span>
                    <span>Não garantimos que o site será ininterrupto ou livre de erros</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-foreground">•</span>
                    <span>As informações são fornecidas para fins informativos apenas</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-foreground">•</span>
                    <span>Preços e disponibilidade de produtos podem mudar sem aviso</span>
                  </li>
                </ul>
              </Card>

              <Card className="border-border bg-card p-8 shadow-card">
                <h2 className="mb-4 text-2xl font-bold text-foreground">6. Limitação de Responsabilidade</h2>
                <p className="mb-4 text-muted-foreground">
                  O <strong className="text-foreground">Minha Casa Nova</strong> não será responsável por:
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="mr-2 text-destructive">×</span>
                    <span>Danos diretos, indiretos, incidentais ou consequentes</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-destructive">×</span>
                    <span>Produtos adquiridos através de links de afiliados</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-destructive">×</span>
                    <span>Qualidade, segurança ou legalidade de produtos anunciados</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-destructive">×</span>
                    <span>Conteúdo de sites de terceiros linkados</span>
                  </li>
                </ul>
              </Card>

              <Card className="border-border bg-card p-8 shadow-card">
                <div className="mb-4 flex items-center gap-3">
                  <Ban className="h-8 w-8 text-destructive" />
                  <h2 className="text-2xl font-bold text-foreground">7. Conduta Proibida</h2>
                </div>
                <p className="mb-4 text-muted-foreground">
                  É expressamente proibido:
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="mr-2 text-destructive">×</span>
                    <span>Usar o site para atividades ilegais ou fraudulentas</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-destructive">×</span>
                    <span>Fazer scraping ou coleta automática de dados</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-destructive">×</span>
                    <span>Tentar hackear ou comprometer a segurança do site</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-destructive">×</span>
                    <span>Publicar conteúdo difamatório ou que viole direitos de terceiros</span>
                  </li>
                </ul>
              </Card>

              <Card className="border-border bg-card p-8 shadow-card">
                <h2 className="mb-4 text-2xl font-bold text-foreground">8. Modificações do Serviço</h2>
                <p className="text-muted-foreground">
                  Reservamos o direito de modificar ou descontinuar o site a qualquer momento, com ou sem aviso
                  prévio. Não seremos responsáveis por qualquer modificação, suspensão ou descontinuação do serviço.
                </p>
              </Card>

              <Card className="border-border bg-card p-8 shadow-card">
                <h2 className="mb-4 text-2xl font-bold text-foreground">9. Lei Aplicável</h2>
                <p className="text-muted-foreground">
                  Estes termos são regidos pelas leis brasileiras. Qualquer disputa relacionada a estes termos
                  será resolvida nos tribunais do Brasil.
                </p>
              </Card>

              <Card className="border-border bg-gradient-card p-8 shadow-card">
                <h2 className="mb-4 text-2xl font-bold text-foreground">10. Alterações nos Termos</h2>
                <p className="mb-4 text-muted-foreground">
                  Podemos revisar estes termos periodicamente. A versão mais recente estará sempre disponível
                  nesta página. O uso continuado do site após alterações constitui aceitação dos novos termos.
                </p>
                <p className="text-sm text-muted-foreground">
                  <strong className="text-foreground">Última atualização:</strong> Janeiro de 2025
                </p>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Termos;
