
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
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
              <a href="#home" className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">Início</a>
              <a href="#services" className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">Serviços</a>
              <a href="#how-it-works" className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">Como Funciona</a>
              <a href="#testimonials" className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">Depoimentos</a>
              <a href="#contact" className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">Contato</a>
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
              className="text-gray-900 hover:text-blue-600"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <a href="#home" className="block text-gray-900 hover:text-blue-600 px-3 py-2 text-base font-medium">Início</a>
              <a href="#services" className="block text-gray-900 hover:text-blue-600 px-3 py-2 text-base font-medium">Serviços</a>
              <a href="#how-it-works" className="block text-gray-900 hover:text-blue-600 px-3 py-2 text-base font-medium">Como Funciona</a>
              <a href="#testimonials" className="block text-gray-900 hover:text-blue-600 px-3 py-2 text-base font-medium">Depoimentos</a>
              <a href="#contact" className="block text-gray-900 hover:text-blue-600 px-3 py-2 text-base font-medium">Contato</a>
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
