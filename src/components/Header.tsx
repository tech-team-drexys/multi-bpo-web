import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        hasScrolled ? "bg-white shadow-lg" : "bg-transparent shadow-none"
      }`}
    >
      <div className="max-w-8xl mx-auto px-4 sm:px-8 lg:px-14">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="relative w-[120px] h-8">
              {/* Logo light (antes da animação) */}
              <img
                src="/lovable-uploads/23df4ac1-3e96-4fab-b0ce-fad4c7379950.png"
                alt="MULTIBPO Logo"
                className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-300 ${
                  hasScrolled ? "opacity-0" : "opacity-100"
                }`}
              />
              {/* Logo dark (após a animação) */}
              <img
                src="/lovable-uploads/7f9c858b-7f32-49e9-a746-6e96fa1d6e2d.png"
                alt="MULTIBPO Logo"
                className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-300 ${
                  hasScrolled ? "opacity-100" : "opacity-0"
                }`}
              />
            </div>
          </div>

          <nav className="hidden md:block">
            <div className="flex items-baseline space-x-6">
              <a
                href="#home"
                className={`px-2 py-2 text-sm font-medium transition-colors relative group ${
                  hasScrolled
                    ? "text-gray-800 hover:text-blue-500"
                    : "text-white hover:text-white"
                }`}
              >
                Início
                {!hasScrolled && (
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                )}
              </a>
              <a
                href="#services"
                className={`px-2 py-2 text-sm font-medium transition-colors relative group ${
                  hasScrolled
                    ? "text-gray-800 hover:text-blue-500"
                    : "text-white hover:text-white"
                }`}
              >
                Serviços
                {!hasScrolled && (
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                )}
              </a>
              <a
                href="#how-it-works"
                className={`px-2 py-2 text-sm font-medium transition-colors relative group ${
                  hasScrolled
                    ? "text-gray-800 hover:text-blue-500"
                    : "text-white hover:text-white"
                }`}
              >
                Como Funciona
                {!hasScrolled && (
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                )}
              </a>
              <a
                href="#testimonials"
                className={`px-2 py-2 text-sm font-medium transition-colors relative group ${
                  hasScrolled
                    ? "text-gray-800 hover:text-blue-500"
                    : "text-white hover:text-white"
                }`}
              >
                Cursos
                {!hasScrolled && (
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                )}
              </a>
              <a
                href="#contact"
                className={`px-2 py-2 text-sm font-medium transition-colors relative group ${
                  hasScrolled
                    ? "text-gray-800 hover:text-blue-500"
                    : "text-white hover:text-white"
                }`}
              >
                Contato
                {!hasScrolled && (
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                )}
              </a>
            </div>
          </nav>

          <div className="hidden md:block">
            <Button
              className={`w-[120px] h-10 text-sm font-medium transition-colors duration-300 ${
                hasScrolled
                  ? "text-white hover:text-white bg-blue-800 hover:bg-blue-700"
                  : "border-white text-white hover:bg-white hover:text-blue-800 bg-transparent"
              }`}
              variant={hasScrolled ? "default" : "outline"}
            >
              Começar Agora
            </Button>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`transition-colors ${
                hasScrolled
                  ? "text-gray-800 hover:text-blue-500"
                  : "text-white hover:text-blue-300"
              }`}
            >
              {isMenuOpen ? (
                <X
                  size={24}
                  className={hasScrolled ? "text-gray-800" : "text-white"}
                />
              ) : (
                <Menu
                  size={24}
                  className={hasScrolled ? "text-gray-800" : "text-white"}
                />
              )}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black/30 backdrop-blur-sm border-t border-white/20 rounded-b-lg">
              <a
                href="#home"
                className="block text-white hover:text-blue-300 px-3 py-2 text-base font-medium"
              >
                Início
              </a>
              <a
                href="#services"
                className="block text-white hover:text-blue-300 px-3 py-2 text-base font-medium"
              >
                Serviços
              </a>
              <a
                href="#how-it-works"
                className="block text-white hover:text-blue-300 px-3 py-2 text-base font-medium"
              >
                Como Funciona
              </a>
              <a
                href="#testimonials"
                className="block text-white hover:text-blue-300 px-3 py-2 text-base font-medium"
              >
                Cursos
              </a>
              <a
                href="#contact"
                className="block text-white hover:text-blue-300 px-3 py-2 text-base font-medium"
              >
                Contato
              </a>
              <Button className="w-full mt-4 bg-green-500 hover:bg-green-600 text-white hover:text-white">
                Começar Agora
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
