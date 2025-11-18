import { Shield, Eye, Lock, Database, UserCheck } from "lucide-react";
import { Card } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Privacidade = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      
      <main className="flex-1">
        <div className="bg-gradient-hero py-16 text-white">
          <div className="container mx-auto px-4 text-center">
            <Shield className="mx-auto mb-4 h-16 w-16" />
            <h1 className="mb-4 text-4xl font-bold md:text-5xl">Política de Privacidade</h1>
            <p className="mx-auto max-w-2xl text-lg text-white/90">
              Sua privacidade é importante para nós
            </p>
          </div>
        </div>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl space-y-8">
              <Card className="border-border bg-card p-8 shadow-card">
                <div className="mb-4 flex items-center gap-3">
                  <Eye className="h-8 w-8 text-primary" />
                  <h2 className="text-2xl font-bold text-foreground">Informações que Coletamos</h2>
                </div>
                <p className="mb-4 text-muted-foreground">
                  O site <strong className="text-foreground">Minha Casa Nova</strong> coleta apenas informações
                  básicas necessárias para melhorar sua experiência de navegação:
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="mr-2 text-primary">•</span>
                    <span><strong className="text-foreground">Dados de Navegação:</strong> Páginas visitadas, tempo de permanência e origem do acesso</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-primary">•</span>
                    <span><strong className="text-foreground">Cookies:</strong> Pequenos arquivos que melhoram a funcionalidade do site</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-primary">•</span>
                    <span><strong className="text-foreground">Dados Anônimos:</strong> Informações agregadas sobre uso do site (Google Analytics)</span>
                  </li>
                </ul>
              </Card>

              <Card className="border-border bg-card p-8 shadow-card">
                <div className="mb-4 flex items-center gap-3">
                  <Database className="h-8 w-8 text-secondary" />
                  <h2 className="text-2xl font-bold text-foreground">Como Usamos Seus Dados</h2>
                </div>
                <p className="mb-4 text-muted-foreground">
                  Utilizamos as informações coletadas para:
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="mr-2 text-secondary">✓</span>
                    <span>Melhorar a experiência de navegação e personalizar conteúdo</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-secondary">✓</span>
                    <span>Analisar tendências e padrões de uso do site</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-secondary">✓</span>
                    <span>Identificar problemas técnicos e melhorar o desempenho</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-secondary">✓</span>
                    <span>Cumprir obrigações legais quando necessário</span>
                  </li>
                </ul>
              </Card>

              <Card className="border-border bg-card p-8 shadow-card">
                <div className="mb-4 flex items-center gap-3">
                  <Lock className="h-8 w-8 text-badge-warning" />
                  <h2 className="text-2xl font-bold text-foreground">Cookies e Tecnologias Similares</h2>
                </div>
                <p className="mb-4 text-muted-foreground">
                  Utilizamos cookies para:
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="mr-2 text-badge-warning">•</span>
                    <span><strong className="text-foreground">Cookies Essenciais:</strong> Necessários para o funcionamento básico do site</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-badge-warning">•</span>
                    <span><strong className="text-foreground">Cookies Analíticos:</strong> Ajudam a entender como os visitantes usam o site</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-badge-warning">•</span>
                    <span><strong className="text-foreground">Cookies de Afiliados:</strong> Rastreiam cliques em links de produtos para comissões</span>
                  </li>
                </ul>
                <p className="mt-4 text-sm text-muted-foreground">
                  Você pode configurar seu navegador para recusar cookies, mas isso pode afetar a funcionalidade do site.
                </p>
              </Card>

              <Card className="border-border bg-card p-8 shadow-card">
                <div className="mb-4 flex items-center gap-3">
                  <UserCheck className="h-8 w-8 text-badge-success" />
                  <h2 className="text-2xl font-bold text-foreground">Seus Direitos</h2>
                </div>
                <p className="mb-4 text-muted-foreground">
                  De acordo com a LGPD (Lei Geral de Proteção de Dados), você tem direito a:
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="mr-2 text-badge-success">✓</span>
                    <span>Confirmar a existência de tratamento de dados</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-badge-success">✓</span>
                    <span>Acessar seus dados pessoais</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-badge-success">✓</span>
                    <span>Solicitar correção de dados incompletos ou incorretos</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-badge-success">✓</span>
                    <span>Solicitar anonimização ou exclusão de dados</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-badge-success">✓</span>
                    <span>Revogar consentimento a qualquer momento</span>
                  </li>
                </ul>
              </Card>

              <Card className="border-border bg-card p-8 shadow-card">
                <h2 className="mb-4 text-2xl font-bold text-foreground">Compartilhamento de Dados</h2>
                <p className="mb-4 text-muted-foreground">
                  <strong className="text-foreground">Não vendemos</strong> seus dados pessoais. Compartilhamos
                  informações apenas com:
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="mr-2 text-primary">•</span>
                    <span><strong className="text-foreground">Parceiros de Afiliados:</strong> Mercado Livre e outros parceiros comerciais</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-primary">•</span>
                    <span><strong className="text-foreground">Serviços de Análise:</strong> Google Analytics (dados anônimos)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-primary">•</span>
                    <span><strong className="text-foreground">Autoridades Legais:</strong> Quando exigido por lei</span>
                  </li>
                </ul>
              </Card>

              <Card className="border-border bg-card p-8 shadow-card">
                <h2 className="mb-4 text-2xl font-bold text-foreground">Segurança dos Dados</h2>
                <p className="text-muted-foreground">
                  Implementamos medidas técnicas e organizacionais para proteger seus dados contra acesso não
                  autorizado, alteração, divulgação ou destruição. No entanto, nenhum método de transmissão pela
                  internet é 100% seguro.
                </p>
              </Card>

              <Card className="border-border bg-card p-8 shadow-card">
                <h2 className="mb-4 text-2xl font-bold text-foreground">Links Externos</h2>
                <p className="text-muted-foreground">
                  Nosso site contém links para sites externos, incluindo lojas parceiras. Não somos responsáveis
                  pelas práticas de privacidade desses sites. Recomendamos ler as políticas de privacidade de
                  cada site que você visitar.
                </p>
              </Card>

              <Card className="border-border bg-gradient-card p-8 shadow-card">
                <h2 className="mb-4 text-2xl font-bold text-foreground">Atualizações desta Política</h2>
                <p className="mb-4 text-muted-foreground">
                  Podemos atualizar esta Política de Privacidade periodicamente. Notificaremos sobre mudanças
                  significativas através de um aviso no site.
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

export default Privacidade;
