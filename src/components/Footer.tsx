
import { Link } from "react-router-dom";
import { Instagram, Linkedin, Twitter, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="text-white bg-gray-950">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-12 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Primeira div - ~40% (2 colunas de 5) */}
          <div className="lg:col-span-2 space-y-6">
            {/* Logo e descrição */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Link to="/">
                  <img
                    src="/lovable-uploads/23df4ac1-3e96-4fab-b0ce-fad4c7379950.png"
                    alt="MULTIBPO Logo"
                    className="h-8 w-auto"
                  />
                </Link>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Soluções digitais inteligentes para revolucionar a gestão de
                escritórios contábeis.
              </p>
            </div>

            {/* Redes sociais */}
            <div className="space-y-3">
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram size={20} />
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter size={20} />
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label="YouTube"
                >
                  <Youtube size={20} />
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label="Facebook"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label="TikTok"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* CRC e endereço */}
            <div className="space-y-2 text-sm text-gray-400">
              <p className="font-medium">MULTI BPO LTDA | CRC/SP 045316</p>
              <p>Alameda Araguaia 2044 | Conj. 910 - Bloco 1</p>
              <p>Alphaville, Barueri - SP | CEP 06455-906</p>
            </div>
          </div>

          {/* Segunda div - ~60% (3 colunas de 5) */}
          <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Empresa */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Empresa</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a
                    href="#"
                    className="hover:text-white hover:underline transition-colors"
                  >
                    Sobre Nós
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white hover:underline transition-colors"
                  >
                    Nossa Equipe
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white hover:underline transition-colors"
                  >
                    Carreiras
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white hover:underline transition-colors"
                  >
                    Blog
                  </a>
                </li>
              </ul>
            </div>

            {/* Serviços */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Serviços</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a
                    href="#"
                    className="hover:text-white hover:underline transition-colors"
                  >
                    Automação Contábil
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white hover:underline transition-colors"
                  >
                    Integração WhatsApp
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white hover:underline transition-colors"
                  >
                    Desenvolvimento de Apps
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white hover:underline transition-colors"
                  >
                    Marketing Digital
                  </a>
                </li>
              </ul>
            </div>

            {/* Contato */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Contato</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a
                    href="#"
                    className="hover:text-white hover:underline transition-colors"
                  >
                    Fale conosco
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white hover:underline transition-colors"
                  >
                    FAQ
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white hover:underline transition-colors"
                  >
                    WhatsApp
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-500 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © MULTI BPO DO BRASIL LTDA | CNPJ 46.505.712/0001-63 | Todos os direitos reservados.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link
              to="/"
              className="text-gray-400 hover:text-white hover:underline transition-colors text-sm"
            >
              Contato
            </Link>
            <Link
              to="/privacy-policy"
              className="text-gray-400 hover:text-white hover:underline transition-colors text-sm"
            >
              Política de Privacidade
            </Link>
            <Link
              to="/terms-of-use"
              className="text-gray-400 hover:text-white hover:underline transition-colors text-sm"
            >
              Termos de Uso
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
