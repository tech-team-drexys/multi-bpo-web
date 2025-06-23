import { FeatureSteps } from "@/components/ui/feature-section";
import { spacing, backgrounds } from "@/lib/design-system";

const useCases = [
  {
    step: "Caso 1",
    title: "Dúvidas sobre Tributação",
    content:
      "Esclareça questões de regimes tributários, enquadramentos e estratégias de otimização fiscal com nossa IA treinada para o mundo contábil.",
    image: "/duvidas-sobre-tributacao.png",
  },
  {
    step: "Caso 2",
    title: "Questões Trabalhistas",
    content:
      "Obtenha respostas precisas sobre legislação trabalhista, cálculos de rescisão e obrigações acessórias, com agilidade e confiança.",
    image: "/questoes-trabalhistas.png",
  },
  {
    step: "Caso 3",
    title: "Procedimentos Societários",
    content:
      "Obtenha orientações sobre alterações contratuais, registros e procedimentos societários complexos.",
    image: "/procedimentos-societarios.png",
  },
];

const ExampleUseCases = () => {
  return (
    <section className={`py-20 ${backgrounds.primary}`}>
      <FeatureSteps
        features={useCases}
        title="Onde a"
        span="IA da MULTI"
        postSpan="faz a diferença"
        description="Descubra como nossa tecnologia transforma o suporte e a rotina dos escritórios contábeis. Atendimento inteligente, rápido e com precisão de especialista."
        autoPlayInterval={8000}
      />
    </section>
  );
};

export default ExampleUseCases;
