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
    <div
      ref={containerRef}
      className={`max-w-7xl mx-auto text-center mt-36 bg-white rounded-2xl p-12 shadow-lg border border-gray-200 scroll-reveal-scale ${
        containerVisible ? "is-visible" : ""
      }`}
    >
      <h3
        ref={titleRef}
        className={`text-3xl font-bold text-gray-900 mb-6 scroll-reveal scroll-reveal-delay-100 ${
          titleVisible ? "is-visible" : ""
        }`}
      >
        Descubra o potencial
      </h3>
      <p
        ref={textRef}
        className={`text-lg text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed scroll-reveal scroll-reveal-delay-200 ${
          textVisible ? "is-visible" : ""
        }`}
      >
        Experimente agora e veja na prática como nossa tecnologia responde às
        suas dúvidas em segundos — direto no site ou no seu WhatsApp.
      </p>
      <div
        ref={buttonsRef}
        className={`flex flex-col sm:flex-row gap-8 justify-center items-center scroll-reveal scroll-reveal-delay-300 ${
          buttonsVisible ? "is-visible" : ""
        }`}
      >
        <Button className="text-sm font-medium bg-green-500 hover:bg-green-600 text-white px-5">
          Testar no WhatsApp
        </Button>
        <div className={`${components.button.default} text-sm font-medium`}>
          Testar no Site
          <ArrowRight className={components.button.defaultArrow} />
        </div>
      </div>
    </div>
  );
};

export default CTASection;
