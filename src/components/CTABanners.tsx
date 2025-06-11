import React from "react";
const CTABanners = () => {
  const cards = [{
    title: "Seu",
    highlight: "Escritório Contábil",
    highlightEnd: "está preso no passado?",
    description: "Enquanto você perde horas com dúvidas repetitivas, outros escritórios estão acelerando seus processos com inteligência artificial.",
    image: "/accounting-table.png",
    ctaText: "Saia do passado",
    secondaryText: "Começar Agora"
  }, {
    title: "Venha para o futuro com a",
    highlight: "MULTI BPO",
    description: "Junte-se aos contadores que trocaram o caos por clareza. Com nossa consultoria de IA híbrida, você atende melhor, responde mais rápido e ganha tempo pra crescer.",
    image: "/ai-chip.png",
    ctaText: "Quero crescer",
    secondaryText: "Começar Agora"
  }];
  return <section className="px-12 py-24 pt-24 m-0 relative z-20 bg-stone-950">
      <div className="max-w-[1440px] mx-auto h-full">
        <div className="flex flex-col gap-12 justify-center min-h-full">
          {cards.map((card, index) => <div key={index} className={`bg-cover bg-center bg-no-repeat rounded-[20px] p-16 text-gray-800 flex items-center justify-center shadow-[0_4px_20px_rgba(0,0,0,0.1)] h-[850px] max-w-full overflow-hidden border border-gray-100 relative`} style={index === 1 ? {
          backgroundImage: "url(/extended-ai-chip.png)"
        } : {
          backgroundImage: "url(/extended-accouting-table.png)"
        }}>
              <div className="absolute inset-0 bg-black/50 rounded-[20px]"></div>
              
              <div className="grid grid-cols-[1fr_1.3fr] gap-20 items-center w-full max-w-6xl relative z-10">
                <div className="flex flex-col justify-between h-full bg-black/25 backdrop-blur-md py-16 px-10 rounded-3xl shadow-[0_2px_16px_rgba(0,0,0,0.06)] border border-white/30">
                  <div>
                    <h2 className="text-[2rem] mb-12 leading-[1.3] font-semibold text-gray-50">
                      {card.title}{" "}
                      <span className="text-blue-500 font-semibold">
                        {card.highlight}
                      </span>
                      {card.highlightEnd && ` ${card.highlightEnd}`}
                    </h2>
                    <div className="w-full h-px bg-gray-500 mb-12 mx-auto"></div>
                    <p className="text-lg leading-7 text-gray-100 mb-12">
                      {card.description}
                    </p>
                  </div>

                  <div className="flex gap-12 items-center justify-center">
                    <div className="group inline-flex items-center justify-center bg-green-600 border-[1px] border-green-600 text-white px-6 py-3 rounded-lg text-lg font-semibold transition-all duration-300 cursor-pointer relative z-20 hover:bg-green-700 hover:shadow-md w-full">
                      {card.ctaText}
                      <svg className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14" />
                        <path d="m12 5 7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
                
                <div className="w-full h-full overflow-hidden rounded-xl shadow-[0_4px_30px_rgba(0,0,0,0.8)]">
                  <img src={card.image} alt={card.title} className="w-full h-full object-cover" />
                </div>
              </div>
            </div>)}
        </div>
      </div>
    </section>;
};
export default CTABanners;