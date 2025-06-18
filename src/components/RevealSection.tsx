import { useRef } from "react";
import { CheckCircle, TrendingUp, Users, Zap } from "lucide-react";
import {
  spacing,
  backgrounds,
  typography,
  components,
  colors,
} from "@/lib/design-system";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const RevealSection = () => {
  const { ref: sectionRef, isVisible } = useScrollReveal();

  const features = [
    {
      icon: TrendingUp,
      title: "Produtividade Sem Limites",
      description: "Automação que eleva a perfomance do seu escritório",
      delay: "delay-300",
    },
    {
      icon: Users,
      title: "Tecnologia e Inovação",
      description:
        "Integramos soluções inteligentes com um time que entende contabilidade",
      delay: "delay-500",
    },
    {
      icon: CheckCircle,
      title: "Resultados Reais",
      description:
        "Processos estruturados para gerar impacto no dia a dia do seu escritório",
      delay: "delay-700",
    },
    {
      icon: Zap,
      title: "Rápido. Eficiente. Simples.",
      description: "Transformação prática e descomplicada",
      delay: "delay-1000",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className={`${spacing.section.lg} ${backgrounds.secondary} min-h-screen relative overflow-hidden flex items-center`}
    >
      {/* Background decoration */}
      <div className={`absolute inset-0 bg-${backgrounds.accent}`}></div>

      <div className={`${spacing.container} relative z-10`}>
        {/* Header */}
        <div
          className={`text-center ${
            spacing.content.md
          } transition-all duration-1500 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <h2
            className={`${typography.heading.lg} text-${colors.neutral.gray900} mb-4`}
          >
            Transforme Seu{" "}
            <span className={`text-${colors.primary.main}`}>
              Escritório Contábil
            </span>
          </h2>
          <p
            className={`${typography.body.lg} text-${colors.neutral.gray600} max-w-3xl mx-auto leading-relaxed`}
          >
            Descubra como milhares de contadores estão revolucionando seus
            negócios com tecnologia de ponta e processos automatizados que
            entregam resultados reais.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`${components.card.base} ${components.card.hover} ${
                components.card.padding
              } 
                text-center group transition-all duration-1000 ${
                  feature.delay
                } ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-12 opacity-0"
              }`}
            >
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
              </div>

              <h3
                className={`${typography.heading.sm} text-${colors.neutral.gray900} mb-3`}
              >
                {feature.title}
              </h3>

              <p
                className={`${typography.body.sm} text-${colors.neutral.gray600} leading-relaxed`}
              >
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RevealSection;
