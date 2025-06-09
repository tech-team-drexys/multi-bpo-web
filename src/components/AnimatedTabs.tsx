
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface TabContent {
  id: number;
  title: string;
  highlightText: string;
  description: string;
  videoSrc: string;
  posterSrc?: string;
}

const tabsData: TabContent[] = [
  {
    id: 1,
    title: "Reinventando a contabilidade com",
    highlightText: "Tecnologia premiada",
    description: "Nossa missão é revolucionar a gestão contábil e fiscal. Oferecemos soluções inteligentes e automatizadas para empresas de todos os tamanhos.",
    videoSrc: "https://assets-global.website-files.com/65ae37af356fab4845432048/65be0fdac914d702e08f70ed_Yoda-Helmet_1-transcode.mp4",
    posterSrc: "https://images.unsplash.com/photo-1553484771-cc0d9b8c2b33?w=800&h=600&fit=crop"
  },
  {
    id: 2,
    title: "Gestão fiscal otimizada para",
    highlightText: "máxima eficiência",
    description: "3 níveis de serviço: 🌱 básico, ⚡️ completo & 🚀 premium - que oferecem suporte completo para sua empresa com tecnologia de ponta.",
    videoSrc: "https://assets-global.website-files.com/65ae37af356fab4845432048/65ae37af356fab48454320ae_BatteryRemoval_Pingpong_001-transcode.mp4",
    posterSrc: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&h=600&fit=crop"
  },
  {
    id: 3,
    title: "Durável e eficiente,",
    highlightText: "do começo ao fim",
    description: "Desenvolvemos anos de experiência em contabilidade, eliminando processos desnecessários para entregar uma experiência <strong>simples</strong> e <strong>eficiente</strong>.",
    videoSrc: "https://assets-global.website-files.com/65ae37af356fab4845432048/65be104f9aba74d774b7f4a3_Yoda-Exploded-50-transcode.webm",
    posterSrc: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop"
  }
];

const AnimatedTabs = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight + 550;
      const sections = document.querySelectorAll('.tab-content');
      const videos = document.querySelectorAll('.tab-video');
      const lastSectionIndex = sections.length - 1;

      sections.forEach((section, index) => {
        if (scrollPosition >= (index * windowHeight) && scrollPosition < ((index + 1) * windowHeight)) {
          section.classList.add('active');
          videos[index]?.classList.add('active');
        } else {
          if (index !== lastSectionIndex) {
            section.classList.remove('active');
            videos[index]?.classList.remove('active');
          }
        }
      });

      if (scrollPosition > (lastSectionIndex * windowHeight)) {
        sections[lastSectionIndex]?.classList.add('active');
        videos[lastSectionIndex]?.classList.add('active');
      } else {
        sections[lastSectionIndex]?.classList.remove('active');
        videos[lastSectionIndex]?.classList.remove('active');
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initialize

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section ref={sectionRef} className="relative z-10 bg-gray-800 rounded-[2rem]">
      <div className="py-28 md:py-32">
        <div style={{ height: '550vh' }} className="md:h-[550vh] h-[600vh]">
          <div className="sticky top-[5vh] h-screen">
            <div ref={containerRef} className="w-full max-w-[120rem] mx-auto">
              <div className="h-[90vh] grid grid-cols-1 md:grid-cols-[0.4fr_1fr] gap-6 px-[3.3%]">
                {/* Left Panel */}
                <div className="bg-gray-700 rounded-[1.25rem] p-6 flex flex-col justify-end">
                  <div className="h-full relative">
                    {tabsData.map((tab, index) => (
                      <div
                        key={tab.id}
                        className={`tab-content absolute w-full h-full flex flex-col justify-around text-center transition-opacity duration-500 ${
                          index === 0 ? 'opacity-100 active' : 'opacity-0'
                        }`}
                      >
                        <h2 className="text-2xl md:text-[2.125rem] font-medium leading-tight text-gray-100 tracking-tight">
                          {tab.title} <span className="text-emerald-400">{tab.highlightText}</span>
                        </h2>
                        <div className="w-full h-px bg-gray-500"></div>
                        <p 
                          className="text-sm md:text-base text-gray-400"
                          dangerouslySetInnerHTML={{ __html: tab.description }}
                        />
                      </div>
                    ))}
                  </div>
                  
                  {/* Bottom Button */}
                  <div className="flex flex-col">
                    <button className="group bg-transparent border border-emerald-400 text-gray-25 hover:text-gray-800 hover:bg-emerald-400 rounded-[0.6rem] px-5 py-3 text-sm uppercase tracking-wider font-medium transition-all duration-300 flex items-center justify-center gap-2 relative overflow-hidden">
                      <span className="relative z-10">Saiba mais</span>
                      <div className="relative z-10 w-5 h-5 flex items-center justify-center">
                        <ArrowUpRight className="w-4 h-4" />
                      </div>
                    </button>
                  </div>
                </div>

                {/* Right Panel - Videos */}
                <div className="relative w-full h-full rounded-[1.25rem] overflow-hidden">
                  {tabsData.map((tab, index) => (
                    <div
                      key={tab.id}
                      className={`tab-video absolute inset-0 w-full h-full transition-all duration-500 ${
                        index === 0 ? 'opacity-100 translate-y-0 active' : 'opacity-0 translate-y-full'
                      }`}
                    >
                      <div className="relative w-full h-full bg-gray-900 rounded-[1.25rem] overflow-hidden">
                        <img
                          src={tab.posterSrc}
                          alt={`Tab ${tab.id} content`}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute top-8 right-8 w-20 h-20 bg-emerald-400 rounded-lg flex items-center justify-center">
                          <span className="text-gray-900 font-bold text-xs">IA</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnimatedTabs;
