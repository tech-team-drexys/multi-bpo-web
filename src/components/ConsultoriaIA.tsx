import {
  Shield,
  Zap,
  FileText,
  Sparkles,
  CheckCircle,
  FileUser,
  Landmark,
  Building,
  User,
} from "lucide-react";
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
    {
      icon: User,
      title: "Especialistas Humanos",
      description:
        "Quando necessário, direcionamento para nossos profissionais especializados.",
    },
  ];

  const useCases = [
    {
      icon: Landmark,
      title: "Consultoria Tributária",
      description:
        "Esclareça dúvidas sobre regimes tributários, créditos de PIS/COFINS, ICMS-ST e outros pontos críticos com respostas contextualizadas e seguras.",
      image: "/placeholder.svg", // Placeholder para imagem do app
    },
    {
      icon: FileUser,
      title: "Consultoria Trabalhista",
      description:
        "Receba orientações sobre admissões, rescisões, afastamentos e obrigações legais com clareza e base na legislação atualizada.",
      image: "/placeholder.svg", // Placeholder para imagem do app
    },
    {
      icon: Building,
      title: "Consultoria Societária",
      description:
        "Conte com apoio na elaboração de alterações contratuais, abertura de filiais, registros e processos societários complexos.",
      image: "/placeholder.svg", // Placeholder para imagem do app
    },
    {
      icon: FileText,
      title: "Consultoria Contábil",
      description:
        "Tire dúvidas técnicas e operacionais sobre rotinas contábeis, com respostas que aliam agilidade e fundamentação legal.",
      image: "/placeholder.svg", // Placeholder para imagem do app
    },
  ];

  return (
    <section className="pt-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div
          ref={headerRef}
          className={`text-center mb-36 scroll-reveal ${
            headerVisible ? "is-visible" : ""
          }`}
        >
          <div className="inline-flex items-center gap-2 border border-gray-200 bg-gray-100 text-gray-900 px-6 py-2 rounded-full text-sm font-medium mb-8">
            <Sparkles className="w-4 h-4 text-blue-600" />
            AI Powered
          </div>
          <h2 className="text-[2.5rem] font-bold text-gray-900 mb-8 leading-tight">
            Consultoria Técnica com{" "}
            <span className="text-blue-600">Inteligência Artificial - IA</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Tire dúvidas, resolva problemas e tome decisões técnicas com total
            segurança e confiança. Reduza retrabalhos e garanta conformidade
            legal em todas as suas operações com o suporte de uma base sólida de
            conhecimento especializado.
          </p>
        </div>

        {/* Main Visual Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 items-center mb-32">
          <div
            ref={mainContentRef}
            className={`space-y-12 scroll-reveal-from-left ${
              mainContentVisible ? "is-visible" : ""
            }`}
          >
            <div className="space-y-5">
              <h3 className="text-3xl font-bold text-gray-800 leading-tight">
                Inteligência que Entende o seu dia a dia Contábil
              </h3>
              <p className="text-md text-gray-600 leading-relaxed">
                Muito além de respostas genéricas. Com base sólida, linguagem
                especializada e compreensão contextual, nossa IA entrega o que
                você precisa para atuar com mais precisão — como ter um
                especialista ao seu lado, 24h por dia.
              </p>
            </div>

            {/* Benefits Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {benefits.map((benefit, index) => {
                const { ref: benefitRef, isVisible: benefitVisible } =
                  useScrollReveal<HTMLDivElement>();
                return (
                  <div
                    key={index}
                    ref={benefitRef}
                    className={`group p-6 bg-white rounded-xl shadow-sm border border-gray-100 
                      hover:shadow-md transition-shadow duration-300 scroll-reveal scroll-reveal-delay-${
                        (index + 1) * 100
                      } ${benefitVisible ? "is-visible" : ""}`}
                  >
                    <div className="flex flex-col items-start space-y-3">
                      <div className="w-12 h-12 bg-blue-600 flex items-center justify-center rounded-xl">
                        <benefit.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-2">
                          {benefit.title}
                        </h4>
                        <p className="text-sm text-gray-600 leading-relaxed">
                          {benefit.description}
                        </p>
                      </div>
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
              Uma IA, Todas as Soluções
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Pare de buscar especialistas diferentes para cada problema. Nossa
              IA domina tributário, trabalhista, societário e contábil
              simultaneamente, oferecendo soluções integradas e precisas em
              segundos. É como ter uma equipe completa de consultores
              trabalhando para você.
            </p>
          </div>

          <div
            ref={useCasesGridRef}
            className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 lg:gap-8 scroll-reveal scroll-reveal-delay-200 ${
              useCasesGridVisible ? "is-visible" : ""
            }`}
          >
            {/* Use Cases div */}
            {useCases.map((useCase, index) => {
              const { ref: cardRef, isVisible: cardVisible } =
                useScrollReveal<HTMLDivElement>();
              return (
                <div
                  key={index}
                  ref={cardRef}
                  className={`bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 ${
                    cardVisible ? "is-visible" : ""
                  }`}
                  style={{
                    animationDelay: `${(index + 2) * 100}ms`,
                  }}
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
