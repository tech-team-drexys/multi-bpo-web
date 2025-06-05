
import { useRef } from 'react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { ChevronLeft, ChevronRight, Code, Palette, Search, Smartphone, ShoppingCart, BarChart3 } from 'lucide-react';

const Services = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const services = [
    {
      title: "Desenvolvimento Web",
      description: "Sites modernos e responsivos com as melhores tecnologias do mercado.",
      category: "DESENVOLVIMENTO",
      categoryColor: "bg-blue-500",
      icon: Code,
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=240&fit=crop"
    },
    {
      title: "Design UI/UX",
      description: "Interfaces intuitivas e experiências digitais que encantam usuários.",
      category: "DESIGN",
      categoryColor: "bg-purple-500",
      icon: Palette,
      image: "https://images.unsplash.com/photo-1488972685288-c3fd157d7c7a?w=400&h=240&fit=crop"
    },
    {
      title: "Otimização SEO",
      description: "Estratégias para melhorar seu ranking e visibilidade nos buscadores.",
      category: "MARKETING",
      categoryColor: "bg-green-500",
      icon: Search,
      image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=400&h=240&fit=crop"
    },
    {
      title: "Apps Mobile",
      description: "Aplicativos nativos e híbridos para iOS e Android.",
      category: "MOBILE",
      categoryColor: "bg-red-500",
      icon: Smartphone,
      image: "https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?w=400&h=240&fit=crop"
    },
    {
      title: "E-commerce",
      description: "Lojas online completas com gestão de vendas e pagamentos.",
      category: "VENDAS",
      categoryColor: "bg-orange-500",
      icon: ShoppingCart,
      image: "https://images.unsplash.com/photo-1501286353178-1ec881214838?w=400&h=240&fit=crop"
    },
    {
      title: "Analytics & BI",
      description: "Análise de dados e business intelligence para decisões estratégicas.",
      category: "DADOS",
      categoryColor: "bg-teal-500",
      icon: BarChart3,
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=240&fit=crop"
    }
  ];

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -320,
        behavior: 'smooth'
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 320,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Nossos <span className="text-blue-600">Serviços</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Soluções digitais completas para transformar seu negócio e acelerar seu crescimento no mundo digital.
          </p>
        </div>

        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-shadow border"
            style={{ marginLeft: '-24px' }}
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>
          
          <button
            onClick={scrollRight}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-shadow border"
            style={{ marginRight: '-24px' }}
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>

          {/* Carousel Container */}
          <div 
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth pb-4"
            style={{ 
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              WebkitScrollbar: { display: 'none' }
            }}
          >
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="flex-none w-80 lg:w-72 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0 shadow-md"
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-60 object-cover transition-transform duration-300 hover:scale-105"
                  />
                  <Badge 
                    className={`absolute top-4 left-4 ${service.categoryColor} text-white text-xs font-semibold px-3 py-1 rounded-full border-0`}
                  >
                    {service.category}
                  </Badge>
                  <div className="absolute top-4 right-4 bg-white rounded-full w-12 h-12 flex items-center justify-center shadow-md">
                    <service.icon className="w-6 h-6 text-blue-600" />
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

export default Services;
