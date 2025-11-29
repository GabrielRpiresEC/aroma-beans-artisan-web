import { Link } from "react-router-dom";
import { Coffee, Instagram, Facebook, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Coffee className="h-8 w-8 text-accent" />
              <span className="text-2xl font-display font-bold">Aroma Beans</span>
            </div>
            <p className="text-sm opacity-90">
              Cafés especiais de alta qualidade, preparados com paixão e dedicação.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display font-semibold text-lg mb-4">
              Navegação
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-sm opacity-90 hover:opacity-100 hover:text-accent transition-smooth"
                >
                  Início
                </Link>
              </li>
              <li>
                <Link
                  to="/sobre"
                  className="text-sm opacity-90 hover:opacity-100 hover:text-accent transition-smooth"
                >
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link
                  to="/cardapio"
                  className="text-sm opacity-90 hover:opacity-100 hover:text-accent transition-smooth"
                >
                  Cardápio
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className="text-sm opacity-90 hover:opacity-100 hover:text-accent transition-smooth"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display font-semibold text-lg mb-4">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm opacity-90">
                <Phone className="h-4 w-4 text-accent" />
                (11) 3456-7890
              </li>
              <li className="flex items-center gap-2 text-sm opacity-90">
                <Mail className="h-4 w-4 text-accent" />
                contato@aromabeans.com.br
              </li>
              <li className="flex items-start gap-2 text-sm opacity-90">
                <MapPin className="h-4 w-4 text-accent mt-0.5" />
                <span>
                  Rua dos Cafés, 123
                  <br />
                  São Paulo - SP
                </span>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="font-display font-semibold text-lg mb-4">
              Redes Sociais
            </h3>
            <div className="flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 rounded-full bg-accent/20 flex items-center justify-center hover:bg-accent transition-smooth"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 rounded-full bg-accent/20 flex items-center justify-center hover:bg-accent transition-smooth"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="mailto:contato@aromabeans.com.br"
                className="h-10 w-10 rounded-full bg-accent/20 flex items-center justify-center hover:bg-accent transition-smooth"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
            <div className="mt-6">
              <p className="text-sm font-semibold mb-2">Horário de Funcionamento</p>
              <p className="text-sm opacity-90">
                Seg - Sex: 7h às 20h
                <br />
                Sáb - Dom: 8h às 18h
              </p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-primary-foreground/10 mt-8 pt-8 text-center">
          <p className="text-sm opacity-75">
            © {currentYear} Aroma Beans Coffee. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
