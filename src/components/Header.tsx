import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10 && !hasScrolled) {
        setHasScrolled(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [hasScrolled]);

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
      hasScrolled 
        ? 'backdrop-blur-md shadow-lg bg-black/20' 
        : 'bg-transparent shadow-none'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex justify-between items-center transition-all duration-300 ${
          hasScrolled ? 'h-12' : 'h-16'
        }`}>
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="flex items-center space-x-2">
                <img 
                  src="/lovable-uploads/febbaa6b-9b3b-4bec-b4ec-adb1d9efab32.png" 
                  alt="MULTIBPO Logo" 
                  className="h-8 w-auto"
                />
              </div>
            </div>
          </div>
          
          <nav className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#home" className="text-white hover:text-blue-300 px-3 py-2 text-sm font-medium transition-colors">Início</a>
              <a href="#services" className="text-white hover:text-blue-300 px-3 py-2 text-sm font-medium transition-colors">Serviços</a>
              <a href="#how-it-works" className="text-white hover:text-blue-300 px-3 py-2 text-sm font-medium transition-colors">Como Funciona</a>
              <a href="#testimonials" className="text-white hover:text-blue-300 px-3 py-2 text-sm font-medium transition-colors">Depoimentos</a>
              <a href="#contact" className="text-white hover:text-blue-300 px-3 py-2 text-sm font-medium transition-colors">Contato</a>
            </div>
          </nav>

          <div className="hidden md:block">
            <Button className="bg-green-500 hover:bg-green-600 text-white">
              Começar Agora
            </Button>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-blue-300"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
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
              <Button className="w-full mt-4 bg-green-500 hover:bg-green-600 text-white">
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
