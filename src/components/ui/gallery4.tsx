"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselApi, CarouselContent, CarouselItem } from "@/components/ui/carousel";
export interface Gallery4Item {
  id: string;
  title: string;
  description: string;
  href: string;
  image: string;
}
export interface Gallery4Props {
  title?: string;
  description?: string;
  items: Gallery4Item[];
}
const data = [{
  id: "automacao-contabil",
  title: "Automação Contábil",
  description: "Automatize processos repetitivos, classificação de documentos e geração de relatórios com inteligência artificial avançada.",
  href: "#",
  image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=250&fit=crop"
}, {
  id: "integracao-whatsapp",
  title: "Integração WhatsApp",
  description: "Conecte-se com seus clientes através de chatbots inteligentes e automação completa de atendimento.",
  href: "#",
  image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=250&fit=crop"
}, {
  id: "desenvolvimento-apps",
  title: "Desenvolvimento de Apps",
  description: "Criação de aplicativos personalizados para suas necessidades específicas de gestão contábil.",
  href: "#",
  image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=250&fit=crop"
}, {
  id: "websites-personalizados",
  title: "Websites Personalizados",
  description: "Desenvolvimento de sites profissionais para fortalecer sua presença digital no mercado contábil.",
  href: "#",
  image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=250&fit=crop"
}, {
  id: "gestao-financeira",
  title: "Gestão Financeira",
  description: "Ferramentas avançadas para controle financeiro, fluxo de caixa e análise de performance empresarial.",
  href: "#",
  image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=400&h=250&fit=crop"
}, {
  id: "marketing-digital",
  title: "Marketing Digital",
  description: "Estratégias digitais personalizadas para captar novos clientes e expandir seu escritório contábil.",
  href: "#",
  image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=250&fit=crop"
}, {
  id: "consultoria-ia",
  title: "Consultoria em IA",
  description: "Implementação de inteligência artificial para otimizar processos e aumentar a produtividade do seu negócio.",
  href: "#",
  image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=250&fit=crop"
}, {
  id: "workflow-automation",
  title: "Automação de Processos",
  description: "Otimize fluxos de trabalho complexos com automação inteligente e integração de sistemas.",
  href: "#",
  image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=400&h=250&fit=crop"
}, {
  id: "api-integration",
  title: "Integração de APIs",
  description: "Conecte diferentes sistemas e plataformas para criar um ecossistema integrado e eficiente.",
  href: "#",
  image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=400&h=250&fit=crop"
}, {
  id: "business-intelligence",
  title: "Business Intelligence",
  description: "Transforme dados em insights valiosos com dashboards interativos e análises avançadas.",
  href: "#",
  image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop"
}, {
  id: "crm-personalizado",
  title: "CRM Personalizado",
  description: "Sistemas de gestão de relacionamento com clientes adaptados às necessidades do seu escritório.",
  href: "#",
  image: "https://images.unsplash.com/photo-1553484771-cc0d9b8c2b33?w=400&h=250&fit=crop"
}, {
  id: "cloud-computing",
  title: "Cloud Computing",
  description: "Migração e otimização de infraestrutura em nuvem para maior segurança e escalabilidade.",
  href: "#",
  image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=250&fit=crop"
}, {
  id: "analise-dados",
  title: "Análise de Dados",
  description: "Extraia insights estratégicos dos seus dados para tomar decisões mais assertivas no negócio.",
  href: "#",
  image: "https://images.unsplash.com/photo-1518186233392-c232efbf2373?w=400&h=250&fit=crop"
}, {
  id: "seguranca-digital",
  title: "Segurança Digital",
  description: "Proteção completa de dados e sistemas com as melhores práticas de segurança cibernética.",
  href: "#",
  image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=250&fit=crop"
}, {
  id: "suporte-tecnico",
  title: "Suporte Técnico",
  description: "Suporte especializado 24/7 para garantir o funcionamento contínuo dos seus sistemas.",
  href: "#",
  image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=250&fit=crop"
}, {
  id: "transformacao-digital",
  title: "Transformação Digital",
  description: "Modernize completamente seus processos contábeis com tecnologias de ponta e metodologias ágeis.",
  href: "#",
  image: "https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?w=400&h=250&fit=crop"
}, {
  id: "sistemas-gestao",
  title: "Sistemas de Gestão",
  description: "Plataformas completas de gestão empresarial integradas às suas operações contábeis existentes.",
  href: "#",
  image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=250&fit=crop"
}];
const Gallery4 = ({
  title = "Nossos Serviços",
  description = "Descubra como empresas líderes estão aproveitando tecnologias modernas para construir experiências digitais excepcionais. Estes casos de estudo mostram aplicações reais e histórias de sucesso.",
  items = data
}: Gallery4Props) => {
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  useEffect(() => {
    if (!carouselApi) {
      return;
    }
    const updateSelection = () => {
      setCanScrollPrev(carouselApi.canScrollPrev());
      setCanScrollNext(carouselApi.canScrollNext());
      setCurrentSlide(carouselApi.selectedScrollSnap());
    };
    updateSelection();
    carouselApi.on("select", updateSelection);
    return () => {
      carouselApi.off("select", updateSelection);
    };
  }, [carouselApi]);
  return <section className="py-32">
      <div className="container mx-auto">
        <div className="mb-8 flex items-end justify-between md:mb-14 lg:mb-16">
          <div className="flex flex-col gap-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 md:text-4xl">
              {title}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">{description}</p>
          </div>
          <div className="hidden shrink-0 gap-2 md:flex">
            <Button 
              size="icon" 
              variant="ghost" 
              onClick={() => {
                carouselApi?.scrollPrev();
              }} 
              disabled={!canScrollPrev} 
              className="disabled:pointer-events-auto rounded-full"
            >
              <ArrowLeft className="size-5" />
            </Button>
            <Button 
              size="icon" 
              variant="ghost" 
              onClick={() => {
                carouselApi?.scrollNext();
              }} 
              disabled={!canScrollNext} 
              className="disabled:pointer-events-auto rounded-full"
            >
              <ArrowRight className="size-5" />
            </Button>
          </div>
        </div>
      </div>
      <div className="w-full">
        <Carousel 
          setApi={setCarouselApi} 
          opts={{
            breakpoints: {
              "(max-width: 768px)": {
                dragFree: true
              }
            }
          }}
        >
          <CarouselContent className="ml-0 2xl:ml-[max(8rem,calc(50vw-700px))] 2xl:mr-[max(0rem,calc(50vw-700px))]">
            {items.map(item => (
              <CarouselItem key={item.id} className="max-w-[320px] pl-[20px] lg:max-w-[360px]">
                <a href={item.href} className="group rounded-xl">
                  <div className="group relative h-full min-h-[27rem] max-w-full overflow-hidden rounded-xl md:aspect-[5/4] lg:aspect-[16/9] transition-opacity duration-300 hover:opacity-90">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="absolute h-full w-full object-cover object-center transition-opacity duration-300" 
                    />
                    <div className="absolute inset-0 h-full bg-[linear-gradient(transparent_0%,transparent_40%,hsl(var(--primary)/0.3)_60%,hsl(var(--primary)/0.7)_80%,hsl(var(--primary)/0.9)_100%)] mix-blend-multiply" />
                    <div className="absolute inset-x-0 bottom-0 flex flex-col items-start p-6 text-primary-foreground md:p-8">
                      <div className="mb-2 pt-4 text-xl font-semibold md:mb-3 md:pt-4 lg:pt-4">
                        {item.title}
                      </div>
                      <div className="mb-8 line-clamp-2 md:mb-12 lg:mb-9">
                        {item.description}
                      </div>
                      <div className="flex items-center text-sm text-blue-400">
                        Saiba mais{" "}
                        <ArrowRight className="ml-2 size-5 transition-transform group-hover:translate-x-1 text-blue-400" />
                      </div>
                    </div>
                  </div>
                </a>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        <div className="mt-8 flex justify-center gap-2">
          {items.slice(0, 15).map((_, index) => (
            <button
              key={index}
              className={`h-2 w-2 rounded-full transition-colors ${
                currentSlide === index ? "bg-primary" : "bg-primary/20"
              }`}
              onClick={() => carouselApi?.scrollTo(index)}
              aria-label={`Ir para slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>;
};
export { Gallery4 };
