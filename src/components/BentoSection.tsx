
import {
  Zap,
  Shield,
  User,
  CheckCircle,
  Clock,
} from "lucide-react";

import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";

const features = [
  {
    Icon: Zap,
    name: "Respostas Imediatas",
    description: "Tire dúvidas e resolva problemas com agilidade através da nossa IA especializada.",
    href: "/",
    cta: "Saiba mais",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3",
  },
  {
    Icon: Shield,
    name: "Base Legal Sólida",
    description: "Fundamentado em legislações, normas técnicas e jurisprudências atualizadas.",
    href: "/",
    cta: "Saiba mais",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3",
  },
  {
    Icon: User,
    name: "Especialistas Humanos",
    description: "Quando necessário, direcionamento para nossos profissionais especializados.",
    href: "/",
    cta: "Saiba mais",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4",
  },
  {
    Icon: CheckCircle,
    name: "Segurança nas Entregas",
    description: "Mais confiança, menos retrabalho e zero dúvidas sem resposta.",
    href: "/",
    cta: "Saiba mais",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-2",
  },
  {
    Icon: Clock,
    name: "Apoio Constante",
    description: "Suporte técnico disponível sempre que precisar, sem depender de grupos informais.",
    href: "/",
    cta: "Saiba mais",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:col-start-3 lg:col-end-3 lg:row-start-2 lg:row-end-4",
  },
];

const BentoSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Consultoria Técnica com IA
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Tire dúvidas, resolva problemas e tome decisões técnicas com segurança, agilidade e base legal.
          </p>
        </div>
        <BentoGrid className="lg:grid-rows-3">
          {features.map((feature) => (
            <BentoCard key={feature.name} {...feature} />
          ))}
        </BentoGrid>
      </div>
    </section>
  );
};

export default BentoSection;
