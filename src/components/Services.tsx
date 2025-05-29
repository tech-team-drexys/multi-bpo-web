
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Services = () => {
  const services = [
    {
      title: "Automação Contábil",
      description: "Automatize processos repetitivos, classificação de documentos e geração de relatórios com inteligência artificial.",
      icon: "🤖"
    },
    {
      title: "Integração WhatsApp",
      description: "Conecte-se com seus clientes através de chatbots inteligentes e automação completa de atendimento.",
      icon: "💬"
    },
    {
      title: "Desenvolvimento de Apps",
      description: "Criação de aplicativos personalizados para suas necessidades específicas de gestão contábil.",
      icon: "📱"
    },
    {
      title: "Websites Personalizados",
      description: "Desenvolvimento de sites profissionais para fortalecer sua presença digital no mercado contábil.",
      icon: "🌐"
    },
    {
      title: "Gestão Financeira",
      description: "Ferramentas avançadas para controle financeiro, fluxo de caixa e análise de performance.",
      icon: "📊"
    },
    {
      title: "Marketing Digital",
      description: "Estratégias digitais personalizadas para captar novos clientes e expandir seu escritório.",
      icon: "🎯"
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Nossos <span className="text-blue-600">Serviços</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Uma plataforma completa de BPO desenvolvida especificamente para revolucionar 
            a gestão de escritórios contábeis modernos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border-gray-200">
              <CardHeader className="text-center pb-4">
                <div className="text-4xl mb-4">{service.icon}</div>
                <CardTitle className="text-xl text-gray-900">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
