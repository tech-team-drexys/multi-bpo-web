import React, { useState } from "react";
import WhatsAppChat from "./WhatsAppChat";
import { Clock, Users, Zap, Target, FileText } from "lucide-react";

const WhatsAppAssistant = () => {
  const [activeCategory, setActiveCategory] = useState("vendas");

  const categories = [
    {
      id: "vendas",
      title: "Tributação",
      icon: FileText,
      description:
        "Esclareça dúvidas sobre regimes tributários, enquadramentos e estratégias fiscais com nossa IA especializada em contabilidade.",
    },
    {
      id: "atendimento",
      title: "Questões Trabalhistas",
      icon: FileText,
      description:
        "Tenha respostas precisas sobre legislação trabalhista, cálculos de rescisão e obrigações acessórias, com agilidade e segurança.",
    },
    {
      id: "promocoes",
      title: "Procedimentos Societários",
      icon: FileText,
      description:
        "Obtenha orientações sobre alterações contratuais, registros e procedimentos societários complexos.",
    },
  ];

  const benefits = [
    {
      icon: Clock,
      title: "Atendimento 24/7",
      description:
        "Automatize respostas e atenda seus clientes a qualquer hora do dia.",
    },
    {
      icon: Zap,
      title: "Resposta Rápida",
      description:
        "Redução de 80% no tempo de resposta para dúvidas frequentes.",
    },
    {
      icon: Target,
      title: "Qualificação de Leads",
      description:
        "Identifique automaticamente clientes com maior potencial de conversão.",
    },
    {
      icon: Users,
      title: "Integração Completa",
      description: "Conecte com seus sistemas contábeis e CRM existentes.",
    },
  ];

  return (
    <section id="whatsapp-assistant" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Onde a <span className="text-blue-600">IA da MULTI</span> Faz a
            Diferença
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Descubra como nossa tecnologia transforma o suporte e a rotina dos
            escritórios contábeis. Atendimento inteligente, rápido e com
            precisão de especialista.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Menu de Categorias - Lado Esquerdo */}
          <div className="space-y-6">
            <div className="space-y-4">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`w-full p-6 rounded-xl border-2 transition-all duration-300 text-left ${
                    activeCategory === category.id
                      ? "border-green-500 bg-green-50 shadow-lg"
                      : "border-gray-200 bg-white hover:border-green-300 hover:shadow-md"
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`p-2 rounded-lg ${
                        activeCategory === category.id
                          ? "bg-green-500"
                          : "bg-gray-100"
                      }`}
                    >
                      <category.icon
                        className={`w-6 h-6 ${
                          activeCategory === category.id
                            ? "text-white"
                            : "text-gray-600"
                        }`}
                      />
                    </div>
                    <div>
                      <h4
                        className={`text-xl font-semibold mb-2 ${
                          activeCategory === category.id
                            ? "text-green-600"
                            : "text-gray-900"
                        }`}
                      >
                        {category.title}
                      </h4>
                      <p className="text-gray-600">{category.description}</p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Simulação de Chat - Lado Direito */}
          <div className="flex justify-center">
            <WhatsAppChat activeCategory={activeCategory} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatsAppAssistant;
