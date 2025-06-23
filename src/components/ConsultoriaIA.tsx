import React from "react";
import {
  Brain,
  Clock,
  Shield,
  Target,
  Zap,
  MessageSquare,
  FileText,
  Sparkles,
  Verified,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { components } from "@/lib/design-system";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const ConsultoriaIA = () => {
  const { ref: headerRef, isVisible: headerVisible } =
    useScrollReveal<HTMLDivElement>();
  const { ref: mainContentRef, isVisible: mainContentVisible } =
    useScrollReveal<HTMLDivElement>();
  const { ref: imageRef, isVisible: imageVisible } =
    useScrollReveal<HTMLDivElement>();
  const { ref: useCasesHeaderRef, isVisible: useCasesHeaderVisible } =
    useScrollReveal<HTMLDivElement>();
  const { ref: useCasesGridRef, isVisible: useCasesGridVisible } =
    useScrollReveal<HTMLDivElement>();

  const benefits = [
    {
      icon: Shield,
      title: "Embasamento Legal",
      description:
        "Fundamentado em legislações, normas técnicas e jurisprudências atualizadas.",
    },
    {
      icon: Zap,
      title: "Respostas Instantâneas",
      description: "Tire dúvidas e resolva problemas com agilidade e precisão.",
    },
    {
      icon: CheckCircle,
      title: "Segurança nas Entregas",
      description:
        "Mais confiança, menos retrabalho e zero dúvidas sem resposta.",
    },
  ];

  const useCases = [
    {
      icon: Target,
      title: "Modelo Tributário",
      description:
        "Rede neural especializada em 200+ tipos de tributos, com precisão de 98.7% em classificações fiscais",
      image: "/placeholder.svg", // Placeholder para imagem do app
    },
    {
      icon: MessageSquare,
      title: "Modelo Trabalhista",
      description:
        "Algoritmo específico para CLT, treinado com 50+ anos de jurisprudência e 1M+ casos reais",
      image: "/placeholder.svg", // Placeholder para imagem do app
    },
    {
      icon: Zap,
      title: "Modelo Societário",
      description:
        "Sistema especializado em direito empresarial, validado contra 15 Juntas Comerciais",
      image: "/placeholder.svg", // Placeholder para imagem do app
    },
  ];

  return (
    <section className="pt-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div
          ref={headerRef}
          className={`text-center mb-24 scroll-reveal ${
            headerVisible ? "is-visible" : ""
          }`}
        >
          <div className="inline-flex items-center gap-2 border border-gray-200 bg-gray-100 text-gray-900 px-6 py-2 rounded-full text-sm font-medium mb-8">
            <Sparkles className="w-4 h-4 text-blue-600" />
            AI Powered
          </div>
          <h2 className="text-[2.5rem] font-bold text-gray-900 mb-8 leading-tight">
            O Futuro do <span className="text-blue-600">Suporte Contábil </span>
            ao seu Alcance
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Entenda a tecnologia e metodologia por trás da nossa Inteligência
            Artificial especializada em contabilidade.
          </p>
        </div>

        {/* Main Visual Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center mb-32">
          <div
            ref={mainContentRef}
            className={`space-y-12 scroll-reveal-from-left ${
              mainContentVisible ? "is-visible" : ""
            }`}
          >
            <div className="space-y-8">
              <h3 className="text-3xl font-bold text-gray-900 leading-tight">
                Arquitetura e Processamento
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Nossa IA utiliza modelos de linguagem especializados, treinados
                com uma base de dados contendo milhões de documentos da área
                contábil, incluindo legislação, jurisprudências, normas técnicas
                e casos práticos reais.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6">
              {benefits.map((benefit, index) => {
                const { ref: benefitRef, isVisible: benefitVisible } =
                  useScrollReveal<HTMLDivElement>();
                return (
                  <div
                    key={index}
                    ref={benefitRef}
                    className={`group flex items-start gap-6 p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200 scroll-reveal scroll-reveal-delay-${
                      (index + 1) * 100
                    } ${benefitVisible ? "is-visible" : ""}`}
                  >
                    <div className="p-3 bg-gray-50 rounded-xl group-hover:bg-gray-100 transition duration-200">
                      <benefit.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-gray-900 text-lg">
                        {benefit.title}
                      </h4>
                      <p className="text-gray-600 leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Main App Screenshot */}
          <div
            ref={imageRef}
            className={`relative scroll-reveal-from-right ${
              imageVisible ? "is-visible" : ""
            }`}
          >
            <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-200">
              <img
                src="/placeholder.svg"
                alt="Interface da Consultoria IA"
                className="w-full h-96 object-cover rounded-lg bg-gray-100"
              />
              <div className="absolute -top-4 -right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                Online
              </div>
            </div>
          </div>
        </div>

        {/* Use Cases Section */}
        <div className="space-y-20">
          <div
            ref={useCasesHeaderRef}
            className={`text-center scroll-reveal ${
              useCasesHeaderVisible ? "is-visible" : ""
            }`}
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Especialização por Domínio
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Cada área possui modelos específicos e bases de conhecimento
              especializadas para garantir precisão técnica máxima
            </p>
          </div>

          <div
            ref={useCasesGridRef}
            className={`grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 scroll-reveal scroll-reveal-delay-200 ${
              useCasesGridVisible ? "is-visible" : ""
            }`}
          >
            {useCases.map((useCase, index) => {
              const { ref: cardRef, isVisible: cardVisible } =
                useScrollReveal<HTMLDivElement>();
              return (
                <div
                  key={index}
                  ref={cardRef}
                  className={`bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-shadow duration-300 scroll-reveal-scale scroll-reveal-delay-${
                    (index + 2) * 100
                  } ${cardVisible ? "is-visible" : ""}`}
                >
                  <div className="p-4">
                    <img
                      src={useCase.image}
                      alt={useCase.title}
                      className="w-full h-48 object-cover rounded-lg bg-gray-100"
                    />
                  </div>
                  <div className="p-8">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-3 bg-blue-100 rounded-xl">
                        <useCase.icon className="w-6 h-6 text-blue-600" />
                      </div>
                      <h4 className="text-xl font-bold text-gray-900">
                        {useCase.title}
                      </h4>
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      {useCase.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConsultoriaIA;
