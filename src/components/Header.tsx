
import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface HeaderProps {
  enableScrollAnimation?: boolean;
}

const Header = ({ enableScrollAnimation = false }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavigateToHome = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    event.preventDefault();
    if (location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      navigate("/");
    }
  };

  useEffect(() => {
    if (!enableScrollAnimation) return;

    const handleScroll = () => {
      setHasScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [enableScrollAnimation]);

  // Se a animação não está habilitada, sempre use o estilo "scrolled"
  const isScrolledState = enableScrollAnimation ? hasScrolled : true;

  const servicosCategories = [
    {
      title: "Automação & IA",
      items: ["Automação Contábil", "Consultoria em IA", "Workflow Automation", "Process Optimization", "API Integration", "Digital Transformation"]
    },
    {
      title: "Desenvolvimento",
      items: ["Desenvolvimento de Apps", "Sistemas de Gestão", "E-commerce Solutions", "CRM Personalizado", "Cloud Computing"]
    },
    {
      title: "Marketing & Dados",
      items: ["Marketing Digital", "Business Intelligence", "Análise de Dados", "Segurança Digital", "Tech Support", "Integração WhatsApp Business"]
    }
  ];

  const cursosCategories = [
    {
      title: "Contabilidade",
      items: ["Contabilidade Digital", "Gestão de Escritórios"]
    },
    {
      title: "Marketing & Tecnologia",
      items: ["Marketing para Contadores", "Inteligência Artificial"]
    },
    {
      title: "Ferramentas",
      items: ["Excel Avançado", "Power BI"]
    }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-1 ${
        isScrolledState
          ? "bg-white border-b border-gray-200"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-14 lg:px-14">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <a
              href="/"
              onClick={handleNavigateToHome}
              className="relative w-[100px] lg:w-[120px] h-8 cursor-pointer"
            >
              {/* Logo light (antes da animação) */}
              <img
                src="/lovable-uploads/23df4ac1-3e96-4fab-b0ce-fad4c7379950.png"
                alt="MULTIBPO Logo"
                className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-300 ${
                  isScrolledState ? "opacity-0" : "opacity-100"
                }`}
              />
              {/* Logo dark (após a animação) */}
              <img
                src="/lovable-uploads/7f9c858b-7f32-49e9-a746-6e96fa1d6e2d.png"
                alt="MULTIBPO Logo"
                className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-300 ${
                  isScrolledState ? "opacity-100" : "opacity-0"
                }`}
              />
            </a>
          </div>

          <nav className="hidden min-[945px]:block">
            <div className="flex items-baseline space-x-4 lg:space-x-6">
              <a
                href="/"
                onClick={handleNavigateToHome}
                className={`px-2 py-2 text-xs lg:text-sm font-medium transition-colors relative group cursor-pointer ${
                  isScrolledState
                    ? "text-gray-800 hover:text-blue-800"
                    : "text-white hover:text-white"
                }`}
              >
                Início
                {!isScrolledState && (
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                )}
              </a>
              <a
                href="#about"
                className={`px-2 py-2 text-xs lg:text-sm font-medium transition-colors relative group ${
                  isScrolledState
                    ? "text-gray-800 hover:text-blue-800"
                    : "text-white hover:text-white"
                }`}
              >
                Quem Somos
                {!isScrolledState && (
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                )}
              </a>
              <DropdownMenu>
                <DropdownMenuTrigger className={`flex items-center px-2 py-2 text-xs lg:text-sm font-medium transition-colors relative group focus:outline-none ${
                  isScrolledState
                    ? "text-gray-800 hover:text-blue-800"
                    : "text-white hover:text-white"
                }`}>
                  Serviços
                  <ChevronDown className="ml-1 h-3 w-3 transition-transform duration-200 group-data-[state=open]:rotate-180" />
                  {!isScrolledState && (
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                  )}
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-[600px] bg-slate-200 shadow-lg border-0 p-4">
                  <div className="grid grid-cols-3 gap-6">
                    {servicosCategories.map((category, categoryIndex) => (
                      <div key={categoryIndex}>
                        <h4 className="font-semibold text-gray-900 mb-2 text-sm">{category.title}</h4>
                        <div className="space-y-1">
                          {category.items.map((item, index) => (
                            <DropdownMenuItem key={index} className="text-gray-800 hover:bg-white/50 cursor-pointer transition-all duration-200 text-xs p-2">
                              {item}
                            </DropdownMenuItem>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </DropdownMenuContent>
              </DropdownMenu>
              <DropdownMenu>
                <DropdownMenuTrigger className={`flex items-center px-2 py-2 text-xs lg:text-sm font-medium transition-colors relative group focus:outline-none ${
                  isScrolledState
                    ? "text-gray-800 hover:text-blue-800"
                    : "text-white hover:text-white"
                }`}>
                  Cursos
                  <ChevronDown className="ml-1 h-3 w-3 transition-transform duration-200 group-data-[state=open]:rotate-180" />
                  {!isScrolledState && (
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                  )}
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-[450px] bg-slate-200 shadow-lg border-0 p-4">
                  <div className="grid grid-cols-3 gap-6">
                    {cursosCategories.map((category, categoryIndex) => (
                      <div key={categoryIndex}>
                        <h4 className="font-semibold text-gray-900 mb-2 text-sm">{category.title}</h4>
                        <div className="space-y-1">
                          {category.items.map((item, index) => (
                            <DropdownMenuItem key={index} className="text-gray-800 hover:bg-white/50 cursor-pointer transition-all duration-200 text-xs p-2">
                              {item}
                            </DropdownMenuItem>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </DropdownMenuContent>
              </DropdownMenu>
              <a
                href="#blog"
                className={`px-2 py-2 text-xs lg:text-sm font-medium transition-colors relative group ${
                  isScrolledState
                    ? "text-gray-800 hover:text-blue-800"
                    : "text-white hover:text-white"
                }`}
              >
                Blog
                {!isScrolledState && (
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                )}
              </a>
            </div>
          </nav>

          <div className="hidden min-[945px]:flex gap-2 lg:gap-4">
            <Button
              className={`w-[110px] lg:w-[130px] h-9 lg:h-10 text-xs lg:text-sm font-medium transition-colors duration-300 ${
                isScrolledState
                  ? "text-blue-800 bg-transparent border-[1px] border-blue-800 hover:bg-blue-800 hover:text-white"
                  : "border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
              }`}
              variant={isScrolledState ? "default" : "outline"}
            >
              Começar Agora
            </Button>
            <Button
              className={`w-[110px] lg:w-[130px] h-9 lg:h-10 text-xs lg:text-sm font-medium transition-colors duration-300 ${
                isScrolledState
                  ? "bg-emerald-500 hover:bg-emerald-600 text-white"
                  : "bg-white hover:bg-emerald-500 text-black hover:text-white"
              }`}
            >
              Login
            </Button>
          </div>

          <div className="min-[945px]:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`transition-colors ${
                isScrolledState
                  ? "text-gray-800 hover:text-blue-600"
                  : "text-white hover:text-blue-300"
              }`}
            >
              {isMenuOpen ? (
                <X
                  size={24}
                  className={isScrolledState ? "text-gray-800" : "text-white"}
                />
              ) : (
                <Menu
                  size={24}
                  className={isScrolledState ? "text-gray-800" : "text-white"}
                />
              )}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="min-[945px]:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black/30 backdrop-blur-sm border-t border-white/20 rounded-b-lg">
              <a
                href="/"
                onClick={(e) => {
                  handleNavigateToHome(e);
                  setIsMenuOpen(false);
                }}
                className="block text-white hover:text-blue-300 px-3 py-2 text-base font-medium cursor-pointer"
              >
                Início
              </a>
              <a
                href="#about"
                className="block text-white hover:text-blue-300 px-3 py-2 text-base font-medium"
              >
                Quem Somos
              </a>
              <a
                href="#services"
                className="block text-white hover:text-blue-300 px-3 py-2 text-base font-medium"
              >
                Serviços
              </a>
              <a
                href="#courses"
                className="block text-white hover:text-blue-300 px-3 py-2 text-base font-medium"
              >
                Cursos
              </a>
              <a
                href="#blog"
                className="block text-white hover:text-blue-300 px-3 py-2 text-base font-medium"
              >
                Blog
              </a>
              <div className="flex flex-col gap-2 mt-4">
                <Button className="w-full bg-green-500 hover:bg-green-600 text-white hover:text-white">
                  Começar Agora
                </Button>
                <Button className="w-full bg-gradient-to-r from-blue-600 to-green-400 hover:from-blue-500 hover:to-green-300 text-white">
                  Fale Conosco
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
