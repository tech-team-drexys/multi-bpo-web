import React, { useState } from "react";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import {
  spacing,
  typography,
  backgrounds,
  borderRadius,
  shadows,
} from "@/lib/design-system";

const PricingPlans = () => {
  const [isYearly, setIsYearly] = useState(false);
  const { ref: containerRef, isVisible: containerVisible } =
    useScrollReveal<HTMLDivElement>();
  const { ref: titleRef, isVisible: titleVisible } =
    useScrollReveal<HTMLHeadingElement>();
  const { ref: switchRef, isVisible: switchVisible } =
    useScrollReveal<HTMLDivElement>();

  const plans = [
    {
      name: "Plano Premium",
      description: "Melhor escolha para escritórios em crescimento",
      monthlyPrice: 99,
      yearlyPrice: 157,
      originalPrice: 149,
      features: [
        "Uso pessoal e profissional",
        "Integração com WhatsApp",
        "Modelo mais avançado de IA",
        "Consultas 24h / 7d",
      ],
      isPopular: false,
    },
  ];

  const getSavings = (monthlyPrice: number, yearlyPrice: number) => {
    const monthlyCost = monthlyPrice * 12;
    const yearlyCost = yearlyPrice * 12;
    return monthlyCost - yearlyCost;
  };

  return (
    <section className={` pt-36 ${backgrounds.primary}`}>
      <div className={spacing.container}>
        {/* Header */}
        <div className="text-center mb-16">
          <p
            ref={titleRef}
            className={`text-gray-700 font-semibold mb-4 scroll-reveal ${
              titleVisible ? "is-visible" : ""
            }`}
          >
            Nossos Planos
          </p>
          <h2
            className={`${
              typography.heading.lg
            } text-gray-900 mb-6 scroll-reveal scroll-reveal-delay-100 ${
              titleVisible ? "is-visible" : ""
            }`}
          >
            Planos de IA para{" "}
            <span className="text-blue-600">Escritórios Contábeis</span>
          </h2>
          <p
            className={`${
              typography.body.lg
            } text-gray-600 max-w-3xl mx-auto mb-12 scroll-reveal scroll-reveal-delay-200 ${
              titleVisible ? "is-visible" : ""
            }`}
          >
            Escolha o plano ideal para transformar seu escritório contábil com
            nossa inteligência artificial especializada. Preços especiais para
            pagamento anual.
          </p>

          {/* Switch Mensal/Anual */}
          <div
            ref={switchRef}
            className={`flex items-center justify-center gap-4 scroll-reveal scroll-reveal-delay-300 ${
              switchVisible ? "is-visible" : ""
            }`}
          >
            <span
              className={`font-medium ${
                !isYearly ? "text-blue-600" : "text-gray-600"
              }`}
            >
              Pague Mensalmente
            </span>
            <button
              onClick={() => setIsYearly(!isYearly)}
              className={`relative inline-flex h-6 w-12 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${
                isYearly ? "bg-blue-600" : "bg-gray-200"
              }`}
            >
              <span
                className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
                  isYearly ? "translate-x-6" : "translate-x-0"
                }`}
              />
            </button>
            <span
              className={`font-medium ${
                isYearly ? "text-blue-600" : "text-gray-600"
              }`}
            >
              Pague Anualmente
            </span>
          </div>
        </div>

        {/* Plans Grid */}
        <div
          ref={containerRef}
          className={`flex flex-wrap justify-center gap-8 max-w-6xl mx-auto scroll-reveal scroll-reveal-delay-400 ${
            containerVisible ? "is-visible" : ""
          }`}
        >
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className={`relative flex flex-col justify-center w-full max-w-sm ${
                plan.isPopular
                  ? "bg-blue-600 text-white transform scale-105"
                  : "bg-white"
              } ${borderRadius.lg} ${shadows.md} p-8 ${
                plan.isPopular ? "" : "border border-gray-200"
              } transition-all duration-300 hover:shadow-xl`}
            >
              {/* Plan Header */}
              <div className="text-center mb-8">
                {/* Popular Badge */}
                {plan.isPopular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-white text-blue-600 px-4 py-2 rounded-full text-xs font-semibold border">
                      MELHOR ESCOLHA
                    </span>
                  </div>
                )}
                <h3
                  className={`${typography.heading.sm} ${
                    plan.isPopular ? "text-white" : "text-gray-900"
                  } mb-2`}
                >
                  {plan.name}
                </h3>
                <p
                  className={`${
                    plan.isPopular ? "text-blue-100" : "text-gray-600"
                  } mb-6`}
                >
                  {plan.description}
                </p>

                {/* Price */}
                <div className="mb-4">
                  <div className="flex flex-col items-center justify-center mb-2">
                    <span
                      className={`${
                        plan.isPopular ? "text-blue-200" : "text-gray-400"
                      } line-through text-lg`}
                    >
                      R${plan.originalPrice}
                    </span>
                    <span
                      className={`text-4xl font-bold ${
                        plan.isPopular ? "text-white" : "text-gray-900"
                      }`}
                    >
                      R${isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                    </span>
                  </div>
                  {isYearly && (
                    <p
                      className={
                        plan.isPopular
                          ? "text-green-500 font-semibold text-sm mt-6 bg-white rounded-full py-2"
                          : "text-green-500 font-semibold text-sm mt-2"
                      }
                    >
                      ECONOMIZE ATÉ R$
                      {getSavings(plan.monthlyPrice, plan.yearlyPrice)}/ano
                    </p>
                  )}
                </div>
              </div>

              {/* Features */}
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 bg-white rounded-full flex items-center justify-center">
                      <svg
                        className="w-3 h-3 sm:w-4 sm:h-4 text-blue-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <span
                      className={`${
                        plan.isPopular ? "text-blue-100" : "text-gray-700"
                      }`}
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <Button className="w-full py-3 font-semibold transition-all duration-300 bg-blue-600 hover:bg-blue-700 text-white">
                Contrate Agora
              </Button>
            </div>
            // Adicionar contador, oferta válida por
            // Primeiras mil assinaturas de 149 por 99
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingPlans;
