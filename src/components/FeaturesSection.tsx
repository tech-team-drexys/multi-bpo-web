import { Zap, Shield, User, CheckCircle, Clock } from "lucide-react";

import FeatureCard from "@/components/ui/feature-card";
import { spacing, backgrounds, typography } from "@/lib/design-system";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const features = [
  {
    icon: Zap,
    title: "Respostas Imediatas",
    description:
      "Tire dúvidas e resolva problemas com agilidade através da nossa IA especializada.",
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
  },
  {
    icon: Shield,
    title: "Embasamento Legal Sólido",
    description:
      "Fundamentado em legislações, normas técnicas e jurisprudências atualizadas.",
    iconBg: "bg-green-100",
    iconColor: "text-green-600",
  },
  {
    icon: User,
    title: "Especialistas Humanos",
    description:
      "Quando necessário, direcionamento para nossos profissionais especializados.",
    iconBg: "bg-purple-100",
    iconColor: "text-purple-600",
  },
  {
    icon: CheckCircle,
    title: "Segurança nas Entregas",
    description:
      "Mais confiança, menos retrabalho e zero dúvidas sem resposta.",
    iconBg: "bg-orange-100",
    iconColor: "text-orange-600",
  },
  // {
  //   icon: Clock,
  //   title: "Apoio Constante",
  //   description:
  //     "Suporte técnico disponível 24/7, sem depender de grupos informais.",
  //   iconBg: "bg-red-100",
  //   iconColor: "text-red-600",
  // },
];

const FeaturesSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section
      ref={ref}
      className={`py-32 bg-gray-50 min-h-screen flex items-center`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Content */}
          <div
            className={`transition-all duration-1000 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
          >
            {/* Header */}
            <div className="mb-12">
              <h2
                className={`${typography.heading.lg} text-gray-900 mb-4 text-left`}
              >
                Consultoria Técnica com{" "}
                <span className="text-blue-600">Inteligência Artificial</span>
              </h2>
              <p className={`${typography.body.lg} text-gray-600 text-left`}>
                Conheça os benefícios técnicos que nossa IA oferece para
                otimizar o atendimento e elevar a qualidade das consultorias do
                seu escritório.
              </p>
            </div>

            {/* Feature Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <div
                  key={feature.title}
                  className={`transition-all duration-500 delay-${
                    index * 100
                  } ${
                    isVisible
                      ? "translate-y-0 opacity-100"
                      : "translate-y-8 opacity-0"
                  }`}
                >
                  <div className="flex flex-col items-start space-y-3">
                    <div
                      className={`w-12 h-12 ${feature.iconBg} flex items-center justify-center rounded-xl`}
                    >
                      <feature.icon
                        className={`w-6 h-6 ${feature.iconColor}`}
                      />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Image */}
          <div
            className={`transition-all duration-1000 delay-300 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-12 opacity-0"
            }`}
          >
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-lg">
                <img
                  src="/project-app-screenshot.png"
                  alt="Consultoria Técnica com IA - Interface da aplicação"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
