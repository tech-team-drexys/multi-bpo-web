
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
  items?: Gallery4Item[];
}

const data = [
  {
    id: "terceirizacao-contabil",
    title: "Terceirização do Departamento Contábil",
    description: "Escrituração completa e auditoria por IA para mais segurança e produtividade.",
    href: "#",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=250&fit=crop"
  },
  {
    id: "terceirizacao-fiscal",
    title: "Terceirização do Departamento Fiscal / Tributário",
    description: "Apuração e entrega fiscal sem erros e sem atrasos, com conformidade garantida por IA.",
    href: "#",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=250&fit=crop"
  },
  {
    id: "terceirizacao-dp",
    title: "Terceirização do Departamento Pessoal (DP)",
    description: "Gestão automatizada da folha, admissões, férias e eSocial com agilidade total.",
    href: "#",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=250&fit=crop"
  },
  {
    id: "terceirizacao-paralegal",
    title: "Terceirização do Departamento Paralegal / Legalização",
    description: "Abertura, alteração e regularização de empresas com rapidez e sem burocracia.",
    href: "#",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=250&fit=crop"
  },
  {
    id: "planejamento-tributario",
    title: "Planejamento Tributário Inteligente",
    description: "Reduza impostos com estratégias legais e tecnologia de análise tributária. Elisão Fiscal com inteligência.",
    href: "#",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=400&h=250&fit=crop"
  },
  {
    id: "assessoria-tributaria",
    title: "Assessoria Tributária e Regularização Fiscal",
    description: "Regularize CNPJs, reenquadre empresas e recupere créditos com apoio técnico e jurídico.",
    href: "#",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=250&fit=crop"
  },
  {
    id: "certificados-digitais",
    title: "Emissão de Certificados Digitais e-CPF e e-CNPJ",
    description: "Certificação digital com agilidade e validade jurídica garantida.",
    href: "#",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=250&fit=crop"
  },
  {
    id: "radar-receita",
    title: "Habilitação no RADAR da Receita Federal",
    description: "Libere o comércio exterior dos seus clientes com segurança e rapidez.",
    href: "#",
    image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=400&h=250&fit=crop"
  },
  {
    id: "bpo-financeiro",
    title: "BPO Financeiro com Inteligência e Precisão",
    description: "Terceirize toda a rotina financeira com controle, fluxo de caixa e cobrança automatizada. Gestão Financeira eficiente.",
    href: "#",
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=400&h=250&fit=crop"
  },
  {
    id: "registro-marca",
    title: "Registro de Marca no INPI",
    description: "Proteja o nome e a identidade do seu cliente antes que alguém registre primeiro.",
    href: "#",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop"
  },
  {
    id: "cursos-treinamentos",
    title: "Cursos e Treinamentos para Equipes Contábeis",
    description: "Capacitação prática e atualizada para elevar o desempenho técnico da sua equipe.",
    href: "#",
    image: "https://images.unsplash.com/photo-1553484771-cc0d9b8c2b33?w=400&h=250&fit=crop"
  },
  {
    id: "atendimento-ia-whatsapp",
    title: "Atendimento ao Cliente com IA (WhatsApp)",
    description: "Atendimento automatizado e humanizado com IA que atendem seus clientes 24h com eficiência e empatia.",
    href: "#",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=250&fit=crop"
  },
  {
    id: "consultoria-tecnica-ia",
    title: "Consultoria Técnica com IA (Web + WhatsApp)",
    description: "Tire dúvidas técnicas com IA treinada e suporte humano especializado.",
    href: "#",
    image: "https://images.unsplash.com/photo-1518186233392-c232efbf2373?w=400&h=250&fit=crop"
  },
  {
    id: "endereco-fiscal",
    title: "Endereço Fiscal em Alphaville",
    description: "Domicílio fiscal seguro para empresas, em um endereço de alto padrão e prestígio, com incentivo fiscal.",
    href: "#",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=250&fit=crop"
  },
  {
    id: "estruturacao-holdings",
    title: "Estruturação de Holdings",
    description: "Organize o patrimônio do seu cliente com proteção, sucessão e economia tributária.",
    href: "#",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=250&fit=crop"
  },
  {
    id: "recrutamento-ia",
    title: "Recrutamento e Seleção com IA",
    description: "Encontre talentos com mais rapidez, precisão e assertividade usando inteligência artificial.",
    href: "#",
    image: "https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?w=400&h=250&fit=crop"
  },
  {
    id: "marketing-digital",
    title: "Marketing Digital para Escritórios Contábeis, Gestão de Redes Sociais e Criação de Conteúdo",
    description: "Fortaleça sua marca contábil, atraia clientes e se destaque online, tenha presença nas redes sociais.",
    href: "#",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=250&fit=crop"
  },
  {
    id: "sites-contabeis",
    title: "Criação e Otimização de Sites Contábeis",
    description: "Sites profissionais com foco em autoridade, conversão e presença no Google.",
    href: "#",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop"
  }
];

const Gallery4 = ({
  title = "Nossos Serviços",
  description = "Descubra como empresas líderes estão aproveitando tecnologias modernas para construir experiências digitais excepcionais. Estes casos de estudo mostram aplicações reais e histórias de sucesso.",
  items = data
}: Gallery4Props) => {
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  
  useEffect(() => {
    if (!carouselApi) {
      return;
    }
    
    const updateSelection = () => {
      setCanScrollPrev(carouselApi.canScrollPrev());
      setCanScrollNext(carouselApi.canScrollNext());
      setScrollProgress(carouselApi.scrollProgress());
    };
    
    updateSelection();
    carouselApi.on("select", updateSelection);
    carouselApi.on("scroll", updateSelection);
    
    return () => {
      carouselApi.off("select", updateSelection);
      carouselApi.off("scroll", updateSelection);
    };
  }, [carouselApi]);

  // Calculate active dot based on scroll progress
  const totalDots = Math.min(items.length, 15);
  const activeDotIndex = Math.round(scrollProgress * (totalDots - 1));
  
  return <section className="py-32">
      <div className="container mx-auto">
        <div className="mb-8 flex items-end justify-between md:mb-14 lg:mb-16">
          <div className="flex flex-col gap-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 md:text-4xl">
              Nossos <span className="text-blue-600">Serviços</span>
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
            dragFree: true,
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
                  <div className="group relative h-full min-h-[27rem] max-w-full overflow-hidden rounded-xl md:aspect-[5/4] lg:aspect-[16/9] transition-all duration-300 flex flex-col justify-end">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="absolute inset-0 h-full w-full object-cover object-center transition-opacity duration-300" 
                    />
                    <div className="absolute inset-0 h-full bg-[linear-gradient(transparent_0%,transparent_10%,hsl(var(--primary)/0.2)_25%,hsl(var(--primary)/0.6)_50%,hsl(var(--primary)/0.8)_70%,hsl(var(--primary)/0.95)_85%,hsl(var(--primary)/1)_100%)] mix-blend-multiply" />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300" />
                    <div className="relative z-10 p-6 text-primary-foreground md:p-8 mt-auto transition-transform duration-500 ease-out group-hover:-translate-y-4">
                      <div className="mb-2 pt-4 text-base font-semibold md:mb-3 md:pt-4 lg:pt-4">
                        {item.title}
                      </div>
                      <div className="mb-8 text-xs md:mb-12 lg:mb-9 line-clamp-2 group-hover:line-clamp-none transition-all duration-500">
                        {item.description}
                      </div>
                      <div className="inline-flex items-center bg-emerald-500 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors relative z-20">
                        Saiba mais{" "}
                        <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                  </div>
                </a>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        <div className="mt-8 flex justify-center gap-2">
          {Array.from({ length: totalDots }).map((_, index) => (
            <button
              key={index}
              className={`h-2 w-2 rounded-full transition-colors ${
                activeDotIndex === index ? "bg-primary" : "bg-primary/20"
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
