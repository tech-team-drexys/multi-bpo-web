
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      hasScrolled 
        ? 'bg-white shadow-lg' 
        : 'bg-transparent shadow-none'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex justify-between items-center transition-all duration-300 ${
          hasScrolled ? 'h-14 py-6' : 'h-16 py-2'
        }`}>
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="flex items-center space-x-2">
                <img 
                  src="/lovable-uploads/878d3c4a-dc9a-465a-b639-321f2ded3864.png" 
                  alt="MULTIBPO Logo" 
                  className={`w-auto transition-all duration-300 ${
                    hasScrolled ? 'h-6' : 'h-8'
                  }`} 
                />
              </div>
            </div>
          </div>
          
          <nav className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#home" className={`px-3 py-2 text-sm font-medium transition-colors relative group ${
                hasScrolled 
                  ? 'text-gray-800 hover:text-blue-500' 
                  : 'text-white hover:text-white'
              }`}>
                Início
                {!hasScrolled && (
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                )}
              </a>
              <a href="#services" className={`px-3 py-2 text-sm font-medium transition-colors relative group ${
                hasScrolled 
                  ? 'text-gray-800 hover:text-blue-500' 
                  : 'text-white hover:text-white'
              }`}>
                Serviços
                {!hasScrolled && (
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                )}
              </a>
              <a href="#how-it-works" className={`px-3 py-2 text-sm font-medium transition-colors relative group ${
                hasScrolled 
                  ? 'text-gray-800 hover:text-blue-500' 
                  : 'text-white hover:text-white'
              }`}>
                Como Funciona
                {!hasScrolled && (
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                )}
              </a>
              <a href="#testimonials" className={`px-3 py-2 text-sm font-medium transition-colors relative group ${
                hasScrolled 
                  ? 'text-gray-800 hover:text-blue-500' 
                  : 'text-white hover:text-white'
              }`}>
                Depoimentos
                {!hasScrolled && (
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                )}
              </a>
              <a href="#contact" className={`px-3 py-2 text-sm font-medium transition-colors relative group ${
                hasScrolled 
                  ? 'text-gray-800 hover:text-blue-500' 
                  : 'text-white hover:text-white'
              }`}>
                Contato
                {!hasScrolled && (
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                )}
              </a>
            </div>
          </nav>

          <div className="hidden md:block">
            <Button className={`transition-all duration-300 ${
              hasScrolled 
                ? 'h-8 px-3 text-xs text-white hover:text-white bg-blue-800 hover:bg-blue-700' 
                : 'h-10 px-4 text-sm border-white text-white hover:bg-white hover:text-blue-800 bg-transparent'
            }`} variant={hasScrolled ? "default" : "outline"}>
              Começar Agora
            </Button>
          </div>

          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)} 
              className={`transition-colors ${
                hasScrolled 
                  ? 'text-gray-800 hover:text-blue-500' 
                  : 'text-white hover:text-blue-300'
              }`}
            >
              {isMenuOpen ? (
                <X size={24} className={hasScrolled ? 'text-gray-800' : 'text-white'} />
              ) : (
                <Menu size={24} className={hasScrolled ? 'text-gray-800' : 'text-white'} />
              )}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black/30 backdrop-blur-sm border-t border-white/20 rounded-b-lg">
              <a href="#home" className="block text-white hover:text-blue-300 px-3 py-2 text-base font-medium">Início</a>
              <a href="#services" className="block text-white hover:text-blue-300 px-3 py-2 text-base font-medium">Serviços</a>
              <a href="#how-it-works" className="block text-white hover:text-blue-300 px-3 py-2 text-base font-medium">Como Funciona</a>
              <a href="#testimonials" className="block text-white hover:text-blue-300 px-3 py-2 text-base font-medium">Depoimentos</a>
              <a href="#contact" className="block text-white hover:text-blue-300 px-3 py-2 text-base font-medium">Contato</a>
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
