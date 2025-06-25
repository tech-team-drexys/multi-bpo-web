import { ArrowRight } from "lucide-react";
import {
  spacing,
  backgrounds,
  typography,
  components,
  colors,
} from "@/lib/design-system";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Button } from "@/components/ui/button";

const SecondHero = () => {
  const { ref: sectionRef, isVisible } = useScrollReveal();

  return (
    <section
      ref={sectionRef}
      className={`${spacing.section.lg} ${backgrounds.secondary} relative min-h-screen flex items-center overflow-hidden`}
    >
      {/* Background Pattern */}
      <div className={`absolute inset-0 ${backgrounds.accent}`}></div>

      <div className={`${spacing.container} relative z-10`}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div
            className={`transition-all duration-1000 ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "-translate-x-12 opacity-0"
            }`}
          >
            {/* Main Title */}
            <h2
              className={`${typography.heading.xl} text-${colors.neutral.gray900} mb-6 leading-tight`}
            >
              Transforme Seu{" "}
              <span className={`text-${colors.primary.main}`}>
                Escritório Contábil
              </span>
            </h2>

            <h3
              className={`${typography.heading.md} text-gray-800 ${spacing.content.xs} leading-relaxed max-w-xl`}
            >
              Através da Terceirização de Departamentos
            </h3>

            {/* Description */}
            <p
              className={`${typography.body.md} text-${colors.neutral.gray600} ${spacing.content.sm} leading-relaxed max-w-xl`}
            >
              Descubra como milhares de contadores estão revolucionando seus
              negócios com tecnologia de ponta e processos automatizados que
              entregam resultados reais com Inteligência Artificial - IA.
            </p>

            {/* CTA Buttons */}
            <div
              className={`flex flex-col sm:flex-row gap-6 ${spacing.content.sm}`}
            >
              <a href="#" className={`${components.button.default}`}>
                Comece Agora
                <ArrowRight className={`${components.button.defaultArrow}`} />
              </a>
              <Button
                variant="default"
                className={`text-white bg-green-500 hover:bg-green-600 px-8 py-3 text-md`}
                size="lg"
              >
                Maximize seus Lucros
              </Button>
            </div>
          </div>

          {/* Right Image */}
          <div
            className={`relative transition-all duration-1000 delay-300 ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "translate-x-12 opacity-0"
            } flex justify-end items-center h-full`}
            style={{ overflow: "visible" }}
          >
            <div
              className="w-[900px] max-w-none h-[700px] flex items-center justify-end overflow-hidden absolute right-0 rounded-2xl shadow-2xl"
              style={{ marginRight: "calc(-50vw + 60%)" }}
            >
              <div className="relative w-full h-full overflow-hidden rounded-2xl">
                {/* Browser Header */}
                <div
                  className={`bg-${colors.neutral.gray100} px-4 py-3 flex items-center gap-2 border-b border-${colors.neutral.gray100}`}
                >
                  <div className="flex gap-2">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  </div>
                  <div
                    className={`flex-1 bg-${colors.neutral.white} rounded-md px-3 py-1 mx-4`}
                  >
                    <span className={`text-xs text-${colors.neutral.gray600}`}>
                      www.multibpo.com.br
                    </span>
                  </div>
                </div>
                {/* Screenshot */}
                <div className="relative w-full h-[600px]">
                  <img
                    src="/project-app-screenshot.png"
                    alt="Multi BPO Dashboard"
                    className="absolute left-0 top-0 w-full h-full object-cover"
                    style={{ objectPosition: "left" }}
                  />
                  {/* Overlay gradient for better integration */}
                  <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent pointer-events-none"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecondHero;
