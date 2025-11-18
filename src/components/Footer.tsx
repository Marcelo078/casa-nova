import { Link } from "react-router-dom";
import { Heart, ExternalLink } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-foreground">Minha Casa Nova</h3>
            <p className="text-sm text-muted-foreground">
              Reviews honestos de produtos smart home para transformar sua casa em um lar inteligente.
            </p>
          </div>

          {/* Links Rápidos */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Links Rápidos</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-primary">
                  Início
                </Link>
              </li>
              <li>
                <Link to="/sobre" className="text-muted-foreground hover:text-primary">
                  Sobre Nós
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Informações Legais</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/privacidade" className="text-muted-foreground hover:text-primary">
                  Política de Privacidade
                </Link>
              </li>
              <li>
                <Link to="/termos" className="text-muted-foreground hover:text-primary">
                  Termos de Uso
                </Link>
              </li>
              <li>
                <Link to="/disclaimer" className="text-muted-foreground hover:text-primary">
                  Isenção de Responsabilidade
                </Link>
              </li>
            </ul>
          </div>

          {/* Parceiros */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Parceiros</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://melhor-reviews.lovable.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-muted-foreground hover:text-primary"
                >
                  Melhor Reviews
                  <ExternalLink className="ml-1 h-3 w-3" />
                </a>
              </li>
              <li>
                <a
                  href="https://ofertadigitalbr.valeapena.online/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-muted-foreground hover:text-primary"
                >
                  Oferta Digital BR
                  <ExternalLink className="ml-1 h-3 w-3" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p className="flex items-center justify-center gap-2">
            © {currentYear} Minha Casa Nova. Feito com <Heart className="h-4 w-4 fill-destructive text-destructive" /> para você
          </p>
          <p className="mt-2 text-xs">
            Este site contém links de afiliados. Podemos receber comissão por compras realizadas através desses links.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
