
import { Card, CardContent } from '@/components/ui/card';

const Benefits = () => {
  const benefits = [
    {
      title: "Redução de Custos Operacionais",
      description: "Diminua até 60% dos custos com automação de processos repetitivos e otimização de fluxos de trabalho.",
      metric: "60%",
      metricLabel: "Redução de Custos"
    },
    {
      title: "Aumento da Produtividade",
      description: "Multiplique a capacidade de atendimento da sua equipe com ferramentas inteligentes de gestão.",
      metric: "300%",
      metricLabel: "Mais Produtividade"
    },
    {
      title: "Satisfação do Cliente",
      description: "Ofereça atendimento 24/7 com chatbots inteligentes e respostas automáticas personalizadas.",
      metric: "95%",
      metricLabel: "Satisfação"
    },
    {
      title: "Crescimento Acelerado",
      description: "Expanda sua carteira de clientes com marketing digital direcionado e processos escaláveis.",
      metric: "250%",
      metricLabel: "Crescimento"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Benefícios do Sistema <span className="text-blue-600">MULTIBPO</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Descubra como nossa plataforma pode transformar a eficiência 
            e rentabilidade do seu escritório contábil.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border-gray-200">
              <CardContent className="p-8">
                <div className="flex items-start space-x-6">
                  <div className="text-center min-w-[100px]">
                    <div className="text-3xl font-bold text-blue-600 mb-1">{benefit.metric}</div>
                    <div className="text-sm text-gray-500">{benefit.metricLabel}</div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
