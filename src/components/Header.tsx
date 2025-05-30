
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
          hasScrolled ? 'h-14 py-8' : 'h-16 py-2'
        }`}>
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="flex items-center space-x-2">
                <img 
                  src="/lovable-uploads/febbaa6b-9b3b-4bec-b4ec-adb1d9efab32.png" 
                  alt="MULTIBPO Logo" 
                  className={`w-auto transition-all duration-300 ${
                    hasScrolled ? 'h-5' : 'h-8'
                  }`} 
                />
              </div>
            </div>
          </div>
          
          <nav className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#home" className={`px-3 py-2 text-sm font-medium transition-all duration-300 relative ${
                hasScrolled 
                  ? 'text-gray-800 hover:text-blue-500' 
                  : 'text-white hover:text-white after:content-[""] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-white after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left'
              }`}>Início</a>
              <a href="#services" className={`px-3 py-2 text-sm font-medium transition-all duration-300 relative ${
                hasScrolled 
                  ? 'text-gray-800 hover:text-blue-500' 
                  : 'text-white hover:text-white after:content-[""] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-white after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left'
              }`}>Serviços</a>
              <a href="#how-it-works" className={`px-3 py-2 text-sm font-medium transition-all duration-300 relative ${
                hasScrolled 
                  ? 'text-gray-800 hover:text-blue-500' 
                  : 'text-white hover:text-white after:content-[""] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-white after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left'
              }`}>Como Funciona</a>
              <a href="#testimonials" className={`px-3 py-2 text-sm font-medium transition-all duration-300 relative ${
                hasScrolled 
                  ? 'text-gray-800 hover:text-blue-500' 
                  : 'text-white hover:text-white after:content-[""] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-white after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left'
              }`}>Depoimentos</a>
              <a href="#contact" className={`px-3 py-2 text-sm font-medium transition-all duration-300 relative ${
                hasScrolled 
                  ? 'text-gray-800 hover:text-blue-500' 
                  : 'text-white hover:text-white after:content-[""] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-white after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left'
              }`}>Contato</a>
            </div>
          </nav>

          <div className="hidden md:block">
            <Button className={`transition-all duration-300 ${
              hasScrolled 
                ? 'h-7 px-3 text-xs text-white hover:text-white bg-blue-800 hover:bg-blue-700' 
                : 'h-10 px-4 text-sm text-white hover:text-white bg-blue-800 hover:bg-blue-700'
            }`}>
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
                <X size={hasScrolled ? 20 : 24} className={hasScrolled ? 'text-gray-800' : 'text-white'} />
              ) : (
                <Menu size={hasScrolled ? 20 : 24} className={hasScrolled ? 'text-gray-800' : 'text-white'} />
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
