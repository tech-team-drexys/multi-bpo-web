
import { FeatureSteps } from "@/components/ui/feature-section";

const useCases = [
  { 
    step: 'Caso 1', 
    title: 'Dúvidas sobre Tributação',
    content: 'Tire dúvidas sobre regimes tributários, enquadramentos e otimização fiscal com nossa IA especializada.', 
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=400&fit=crop' 
  },
  { 
    step: 'Caso 2',
    title: 'Questões Trabalhistas',
    content: 'Consulte sobre legislação trabalhista, cálculos de rescisão e obrigações acessórias com precisão.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=400&fit=crop'
  },
  { 
    step: 'Caso 3',
    title: 'Procedimentos Societários',
    content: 'Obtenha orientações sobre alterações contratuais, registros e procedimentos societários complexos.',
    image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=400&fit=crop'
  },
];

const ExampleUseCases = () => {
  return (
    <section className="py-20 bg-white">
      <FeatureSteps 
        features={useCases}
        title="Exemplos de Casos de Uso"
        autoPlayInterval={8000}
        imageHeight="h-[400px]"
      />
    </section>
  );
};

export default ExampleUseCases;
