import { AlertTriangle, Info, ExternalLink, DollarSign } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Disclaimer = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      
      <main className="flex-1">
        <div className="bg-gradient-hero py-16 text-white">
          <div className="container mx-auto px-4 text-center">
            <AlertTriangle className="mx-auto mb-4 h-16 w-16" />
            <h1 className="mb-4 text-4xl font-bold md:text-5xl">Isenção de Responsabilidade</h1>
            <p className="mx-auto max-w-2xl text-lg text-white/90">
              Informações importantes sobre o uso deste site
            </p>
          </div>
        </div>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl space-y-8">
              <Card className="border-border bg-card p-8 shadow-card">
                <div className="mb-4 flex items-center gap-3">
                  <Info className="h-8 w-8 text-primary" />
                  <h2 className="text-2xl font-bold text-foreground">Propósito Informativo</h2>
                </div>
                <p className="mb-4 text-muted-foreground">
                  O site <strong className="text-foreground">Minha Casa Nova</strong> é um portal de reviews e
                  análises de produtos smart home. Todo o conteúdo é fornecido exclusivamente para fins informativos
                  e educacionais.
                </p>
                <Badge className="bg-badge-info text-white">
                  Este não é um site de vendas ou e-commerce
                </Badge>
              </Card>

              <Card className="border-border bg-card p-8 shadow-card">
                <div className="mb-4 flex items-center gap-3">
                  <DollarSign className="h-8 w-8 text-badge-success" />
                  <h2 className="text-2xl font-bold text-foreground">Divulgação de Afiliados</h2>
                </div>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    <strong className="text-foreground">Transparência Total:</strong> Este site participa de
                    programas de afiliados, incluindo o Programa de Afiliados do Mercado Livre.
                  </p>
                  <p>
                    Quando você clica em links de produtos e realiza uma compra, podemos receber uma comissão.
                    Esta comissão:
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="mr-2 text-badge-success">✓</span>
                      <span><strong className="text-foreground">Não aumenta</strong> o preço do produto para você</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-badge-success">✓</span>
                      <span><strong className="text-foreground">Não influencia</strong> nossas análises e opiniões</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-badge-success">✓</span>
                      <span>Nos ajuda a <strong className="text-foreground">manter o site gratuito</strong> para você</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-badge-success">✓</span>
                      <span>Permite continuar criando <strong className="text-foreground">conteúdo de qualidade</strong></span>
                    </li>
                  </ul>
                </div>
              </Card>

              <Card className="border-border bg-card p-8 shadow-card">
                <div className="mb-4 flex items-center gap-3">
                  <AlertTriangle className="h-8 w-8 text-badge-warning" />
                  <h2 className="text-2xl font-bold text-foreground">Opiniões e Reviews</h2>
                </div>
                <p className="mb-4 text-muted-foreground">
                  Nossas análises de produtos são baseadas em:
                </p>
                <ul className="mb-4 space-y-2 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="mr-2 text-primary">•</span>
                    <span>Pesquisa extensiva de mercado</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-primary">•</span>
                    <span>Avaliações de usuários verificados</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-primary">•</span>
                    <span>Testes práticos quando possível</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-primary">•</span>
                    <span>Análise de especificações técnicas</span>
                  </li>
                </ul>
                <p className="text-muted-foreground">
                  No entanto, <strong className="text-foreground">cada experiência é individual</strong>. Resultados
                  podem variar dependendo de fatores como uso, instalação, compatibilidade e condições específicas.
                </p>
              </Card>

              <Card className="border-border bg-card p-8 shadow-card">
                <h2 className="mb-4 text-2xl font-bold text-foreground">Responsabilidade de Compra</h2>
                <p className="mb-4 text-muted-foreground">
                  Quando você clica em um link e é redirecionado para o Mercado Livre ou outro site de vendas:
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="mr-2 text-foreground">×</span>
                    <span>A transação ocorre diretamente entre você e o vendedor</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-foreground">×</span>
                    <span>Não somos responsáveis pela qualidade, entrega ou suporte dos produtos</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-foreground">×</span>
                    <span>Não processamos pagamentos nem temos acesso aos seus dados financeiros</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-foreground">×</span>
                    <span>Questões de garantia, devolução ou reembolso devem ser tratadas diretamente com o vendedor</span>
                  </li>
                </ul>
              </Card>

              <Card className="border-border bg-card p-8 shadow-card">
                <div className="mb-4 flex items-center gap-3">
                  <ExternalLink className="h-8 w-8 text-secondary" />
                  <h2 className="text-2xl font-bold text-foreground">Links para Sites Externos</h2>
                </div>
                <p className="mb-4 text-muted-foreground">
                  Nosso site contém links para sites de terceiros, incluindo:
                </p>
                <ul className="mb-4 space-y-2 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="mr-2 text-secondary">•</span>
                    <span>Mercado Livre e outras plataformas de e-commerce</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-secondary">•</span>
                    <span>Sites de parceiros e recomendações</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-secondary">•</span>
                    <span>Páginas de fabricantes de produtos</span>
                  </li>
                </ul>
                <p className="text-muted-foreground">
                  <strong className="text-foreground">Importante:</strong> Não controlamos e não somos responsáveis
                  pelo conteúdo, políticas de privacidade ou práticas desses sites. Use-os por sua conta e risco.
                </p>
              </Card>

              <Card className="border-border bg-card p-8 shadow-card">
                <h2 className="mb-4 text-2xl font-bold text-foreground">Precisão das Informações</h2>
                <p className="mb-4 text-muted-foreground">
                  Embora nos esforcemos para manter informações precisas e atualizadas:
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="mr-2 text-badge-warning">⚠</span>
                    <span>Preços podem mudar sem aviso prévio</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-badge-warning">⚠</span>
                    <span>Disponibilidade de produtos pode variar</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-badge-warning">⚠</span>
                    <span>Especificações técnicas podem ser alteradas pelos fabricantes</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-badge-warning">⚠</span>
                    <span>Erros tipográficos podem ocorrer</span>
                  </li>
                </ul>
                <p className="mt-4 text-muted-foreground">
                  Sempre verifique as informações diretamente com o vendedor antes de comprar.
                </p>
              </Card>

              <Card className="border-border bg-card p-8 shadow-card">
                <h2 className="mb-4 text-2xl font-bold text-foreground">Limitações de Uso</h2>
                <p className="text-muted-foreground">
                  As informações deste site não substituem:
                </p>
                <ul className="mt-4 space-y-2 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="mr-2 text-destructive">×</span>
                    <span>Aconselhamento profissional especializado</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-destructive">×</span>
                    <span>Manuais de instalação dos fabricantes</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-destructive">×</span>
                    <span>Normas técnicas e regulamentações locais</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-destructive">×</span>
                    <span>Consulta com eletricistas ou técnicos qualificados</span>
                  </li>
                </ul>
              </Card>

              <Card className="border-border bg-card p-8 shadow-card">
                <h2 className="mb-4 text-2xl font-bold text-foreground">Propriedade de Marcas</h2>
                <p className="text-muted-foreground">
                  Todos os nomes de marcas, produtos e logotipos mencionados neste site são propriedade de seus
                  respectivos donos. O uso desses nomes é apenas para fins de identificação e não implica
                  endosso ou afiliação, exceto onde explicitamente declarado.
                </p>
              </Card>

              <Card className="border-border bg-gradient-card p-8 shadow-card">
                <h2 className="mb-4 text-2xl font-bold text-foreground">Contato</h2>
                <p className="mb-4 text-muted-foreground">
                  Se você tiver dúvidas sobre esta isenção de responsabilidade, entre em contato através da
                  página <strong className="text-foreground">Sobre</strong>.
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

export default Disclaimer;
