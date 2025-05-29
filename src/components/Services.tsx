
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Services = () => {
  const services = [
    {
      title: "Automação Contábil",
      description: "Automatize processos repetitivos, classificação de documentos e geração de relatórios com inteligência artificial.",
      icon: "🤖",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=250&fit=crop"
    },
    {
      title: "Integração WhatsApp",
      description: "Conecte-se com seus clientes através de chatbots inteligentes e automação completa de atendimento.",
      icon: "💬",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=250&fit=crop"
    },
    {
      title: "Desenvolvimento de Apps",
      description: "Criação de aplicativos personalizados para suas necessidades específicas de gestão contábil.",
      icon: "📱",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=250&fit=crop"
    },
    {
      title: "Websites Personalizados",
      description: "Desenvolvimento de sites profissionais para fortalecer sua presença digital no mercado contábil.",
      icon: "🌐",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=250&fit=crop"
    },
    {
      title: "Gestão Financeira",
      description: "Ferramentas avançadas para controle financeiro, fluxo de caixa e análise de performance.",
      icon: "📊",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=400&h=250&fit=crop"
    },
    {
      title: "Marketing Digital",
      description: "Estratégias digitais personalizadas para captar novos clientes e expandir seu escritório.",
      icon: "🎯",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=250&fit=crop"
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
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border-gray-200 overflow-hidden">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute top-4 right-4 bg-white rounded-full w-12 h-12 flex items-center justify-center text-2xl shadow-md">
                  {service.icon}
                </div>
              </div>
              <CardHeader className="pb-4">
                <CardTitle className="text-xl text-gray-900">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">
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
