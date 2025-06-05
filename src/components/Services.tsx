
import { Gallery4 } from '@/components/ui/gallery4';

const Services = () => {
  const servicesData = [
    {
      id: "automacao-contabil",
      title: "Automação Contábil",
      description:
        "Automatize processos repetitivos, classificação de documentos e geração de relatórios com inteligência artificial avançada.",
      href: "#",
      image:
        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=250&fit=crop",
    },
    {
      id: "integracao-whatsapp",
      title: "Integração WhatsApp",
      description:
        "Conecte-se com seus clientes através de chatbots inteligentes e automação completa de atendimento.",
      href: "#",
      image:
        "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=250&fit=crop",
    },
    {
      id: "desenvolvimento-apps",
      title: "Desenvolvimento de Apps",
      description:
        "Criação de aplicativos personalizados para suas necessidades específicas de gestão contábil.",
      href: "#",
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=250&fit=crop",
    },
    {
      id: "websites-personalizados",
      title: "Websites Personalizados",
      description:
        "Desenvolvimento de sites profissionais para fortalecer sua presença digital no mercado contábil.",
      href: "#",
      image:
        "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=250&fit=crop",
    },
    {
      id: "gestao-financeira",
      title: "Gestão Financeira",
      description:
        "Ferramentas avançadas para controle financeiro, fluxo de caixa e análise de performance empresarial.",
      href: "#",
      image:
        "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=400&h=250&fit=crop",
    },
    {
      id: "marketing-digital",
      title: "Marketing Digital",
      description:
        "Estratégias digitais personalizadas para captar novos clientes e expandir seu escritório contábil.",
      href: "#",
      image:
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=250&fit=crop",
    },
    {
      id: "consultoria-ia",
      title: "Consultoria em IA",
      description:
        "Implementação de inteligência artificial para otimizar processos e aumentar a produtividade do seu negócio.",
      href: "#",
      image:
        "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=250&fit=crop",
    },
    {
      id: "workflow-automation",
      title: "Automação de Processos",
      description:
        "Otimize fluxos de trabalho complexos com automação inteligente e integração de sistemas.",
      href: "#",
      image:
        "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=400&h=250&fit=crop",
    },
    {
      id: "api-integration",
      title: "Integração de APIs",
      description:
        "Conecte diferentes sistemas e plataformas para criar um ecossistema integrado e eficiente.",
      href: "#",
      image:
        "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=400&h=250&fit=crop",
    },
    {
      id: "business-intelligence",
      title: "Business Intelligence",
      description:
        "Transforme dados em insights valiosos com dashboards interativos e análises avançadas.",
      href: "#",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop",
    },
    {
      id: "crm-personalizado",
      title: "CRM Personalizado",
      description:
        "Sistemas de gestão de relacionamento com clientes adaptados às necessidades do seu escritório.",
      href: "#",
      image:
        "https://images.unsplash.com/photo-1553484771-cc0d9b8c2b33?w=400&h=250&fit=crop",
    },
    {
      id: "cloud-computing",
      title: "Cloud Computing",
      description:
        "Migração e otimização de infraestrutura em nuvem para maior segurança e escalabilidade.",
      href: "#",
      image:
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=250&fit=crop",
    },
    {
      id: "analise-dados",
      title: "Análise de Dados",
      description:
        "Extraia insights estratégicos dos seus dados para tomar decisões mais assertivas no negócio.",
      href: "#",
      image:
        "https://images.unsplash.com/photo-1518186233392-c232efbf2373?w=400&h=250&fit=crop",
    },
    {
      id: "seguranca-digital",
      title: "Segurança Digital",
      description:
        "Proteção completa de dados e sistemas com as melhores práticas de segurança cibernética.",
      href: "#",
      image:
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=250&fit=crop",
    },
    {
      id: "suporte-tecnico",
      title: "Suporte Técnico",
      description:
        "Suporte especializado 24/7 para garantir o funcionamento contínuo dos seus sistemas.",
      href: "#",
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=250&fit=crop",
    },
    {
      id: "transformacao-digital",
      title: "Transformação Digital",
      description:
        "Modernize completamente seus processos contábeis com tecnologias de ponta e metodologias ágeis.",
      href: "#",
      image:
        "https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?w=400&h=250&fit=crop",
    },
    {
      id: "sistemas-gestao",
      title: "Sistemas de Gestão",
      description:
        "Plataformas completas de gestão empresarial integradas às suas operações contábeis existentes.",
      href: "#",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=250&fit=crop",
    },
  ];

  return (
    <section id="services" className="bg-white">
      <Gallery4 
        title="Nossos Serviços"
        description="Uma plataforma completa de BPO desenvolvida especificamente para revolucionar a gestão de escritórios contábeis modernos."
        items={servicesData}
      />
    </section>
  );
};

export default Services;
