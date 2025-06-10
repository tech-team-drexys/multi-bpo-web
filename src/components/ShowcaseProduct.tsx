import React from "react";

const ShowcaseProduct = () => {
  const cards = [
    {
      title: "O seu",
      highlight: "Escritório Contábil",
      highlightEnd: "está preso no passado?",
      description:
        "Enquanto você perde horas com dúvidas repetitivas, outros escritórios estão acelerando seus processos com inteligência artificial.",
      image: "/accounting-office.png",
      ctaText: "Saia do passado",
      secondaryText: "Começar Agora",
    },
    {
      title: "Venha para o futuro com a",
      highlight: "MULTI BPO",
      description:
        "Junte-se aos contadores que trocaram o caos por clareza. Com nossa consultoria de IA híbrida, você atende melhor, responde mais rápido e ganha tempo pra crescer.",
      image: "/ai-chip.png",
      ctaText: "Quero crescer",
      secondaryText: "Começar Agora",
    },
  ];

  return (
    <section className="min-h-[100px] bg-[#eaeaea] px-24 py-24 pt-24 m-0 -mt-[30px]">
      <div className="max-w-[1440px] mx-auto h-full">
        <div className="flex flex-col gap-24 justify-center min-h-full">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-[#3a3a3a] rounded-[20px] p-12 text-white grid grid-cols-[1.2fr_1fr] gap-8 items-center shadow-[0_8px_32px_rgba(0,0,0,0.3)] min-h-[600px] max-w-full overflow-hidden"
            >
              <div className="flex flex-col justify-between h-full">
                <div>
                  <h2 className="text-[2.6rem] mb-12 font-normal leading-[1.3] text-white">
                    {card.title}{" "}
                    <span className="text-[#00d4aa]">{card.highlight}</span>
                    {card.highlightEnd && ` ${card.highlightEnd}`}
                  </h2>
                  <div className="w-4/5 h-px bg-[#555] mb-12 mx-auto"></div>
                  <p className="text-base leading-6 text-[#cccccc] mb-12">
                    {card.description}
                  </p>
                </div>

                <div className="flex gap-12 items-center justify-start">
                  <div className="inline-flex items-center bg-transparent text-white border border-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 w-fit cursor-pointer hover:bg-white hover:text-[#3a3a3a]">
                    {card.secondaryText}
                  </div>

                  <div className="group inline-flex items-center bg-[#10b981] text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 w-fit cursor-pointer relative z-20 hover:bg-[#059669]">
                    {card.ctaText}
                    <svg
                      className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="w-full h-full overflow-hidden rounded-xl">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShowcaseProduct;
