import { useRef } from "react";
import { CheckCircle, TrendingUp, Users, Zap } from "lucide-react";
import {
  spacing,
  backgrounds,
  typography,
  components,
} from "@/lib/design-system";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const RevealSection = () => {
  const { ref: sectionRef, isVisible } = useScrollReveal();

  const features = [
    {
      icon: TrendingUp,
      title: "Crescimento Acelerado",
      description:
        "Aumente a produtividade do seu escritório em até 300% com automação inteligente",
      delay: "delay-100",
    },
    {
      icon: Users,
      title: "Equipe Especializada",
      description:
        "Time multidisciplinar com expertise em contabilidade e tecnologia",
      delay: "delay-200",
    },
    {
      icon: CheckCircle,
      title: "Resultados Garantidos",
      description:
        "Mais de 500 escritórios transformados com nossa metodologia comprovada",
      delay: "delay-300",
    },
    {
      icon: Zap,
      title: "Implementação Rápida",
      description:
        "Transforme seu escritório em até 30 dias com nosso processo estruturado",
      delay: "delay-500",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className={`${spacing.section.lg} ${backgrounds.secondary} relative overflow-hidden`}
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 to-purple-50/20"></div>

      <div className={`${spacing.container} relative z-10`}>
        {/* Header */}
        <div
          className={`text-center ${
            spacing.content.md
          } transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <h2 className={`${typography.heading.lg} text-gray-900 mb-4`}>
            Transforme Seu{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Escritório Contábil
            </span>
          </h2>
          <p
            className={`${typography.body.lg} text-gray-600 max-w-3xl mx-auto leading-relaxed`}
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
                text-center group transition-all duration-700 ${
                  feature.delay
                } ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-12 opacity-0"
              }`}
            >
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
              </div>

              <h3 className={`${typography.heading.sm} text-gray-900 mb-3`}>
                {feature.title}
              </h3>

              <p
                className={`${typography.body.sm} text-gray-600 leading-relaxed`}
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
