import { components } from "@/lib/design-system";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const CTASection = () => {
  const { ref: containerRef, isVisible: containerVisible } =
    useScrollReveal<HTMLDivElement>();
  const { ref: titleRef, isVisible: titleVisible } =
    useScrollReveal<HTMLHeadingElement>();
  const { ref: textRef, isVisible: textVisible } =
    useScrollReveal<HTMLParagraphElement>();
  const { ref: buttonsRef, isVisible: buttonsVisible } =
    useScrollReveal<HTMLDivElement>();

  return (
    <section className="px-8">
      <div
        ref={containerRef}
        className={`max-w-7xl mx-auto mt-36 bg-blue-500 rounded-2xl p-12 px-16 relative overflow-hidden scroll-reveal-scale ${
          containerVisible ? "is-visible" : ""
        }`}
      >
        {/* Abstract Figure - Right Side */}
        <div className="absolute right-[-300px] top-0 bottom-0">
          <div className="relative w-full h-full">
            {/* Concentric circles */}
            <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-[600px] h-[600px]">
              <div className="absolute inset-0 bg-blue-400 rounded-full"></div>
              <div className="absolute inset-12 bg-blue-300 rounded-full"></div>
              <div className="absolute inset-24 bg-blue-200 rounded-full"></div>
              <div className="absolute inset-36 bg-blue-100 rounded-full"></div>
              <div className="absolute inset-48 bg-white rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Content - Left Side */}
        <div className="relative z-10 max-w-lg">
          <h2
            ref={titleRef}
            className={`text-4xl font-bold text-white mb-6 scroll-reveal scroll-reveal-delay-100 ${
              titleVisible ? "is-visible" : ""
            }`}
          >
            Descubra o Potencial
          </h2>

          <h3 className="text-xl text-white mb-6 leading-relaxed font-semibold">
            Inicie seu teste gratuito agora, sem cobrança. <br />
            Não solicitamos cartão de crédito.
          </h3>

          <p
            ref={textRef}
            className={`text-lg text-blue-100 mb-8 leading-relaxed scroll-reveal scroll-reveal-delay-200 ${
              textVisible ? "is-visible" : ""
            }`}
          >
            Experimente agora e veja na prática como nossa tecnologia responde
            às suas dúvidas em segundos — direto no seu computador ou no seu
            WhatsApp.
          </p>

          <div
            ref={buttonsRef}
            className={`flex flex-col sm:flex-row gap-4 scroll-reveal scroll-reveal-delay-300 ${
              buttonsVisible ? "is-visible" : ""
            }`}
          >
            <a
              href="#"
              className="inline-flex items-center justify-center bg-white text-blue-500 font-semibold px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors duration-200"
            >
              Teste no seu WhatsApp
            </a>

            <a
              href="#"
              className="inline-flex items-center justify-center bg-white text-blue-500 font-semibold px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors duration-200 group"
            >
              Teste no Site
              <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
