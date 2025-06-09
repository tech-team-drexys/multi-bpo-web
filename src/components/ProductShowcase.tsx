
import { Button } from "@/components/ui/button";

const ProductShowcase = () => {
  return (
    <section className="w-full min-h-screen bg-gray-800 p-8 flex items-center justify-center">
      <div className="w-full max-w-7xl bg-gray-700 rounded-3xl p-8 flex gap-8 items-center">
        {/* Content Div */}
        <div className="flex-1 bg-gray-600 rounded-2xl p-8 space-y-6">
          <h2 className="text-4xl font-bold text-white font-heading">
            Transforme Seu Negócio
          </h2>
          <p className="text-gray-200 text-lg leading-relaxed">
            Descubra soluções inovadoras que impulsionarão sua empresa para o próximo nível. 
            Nossa plataforma oferece ferramentas avançadas para otimizar seus processos e 
            maximizar seus resultados.
          </p>
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold">
            Começar Agora
          </Button>
        </div>

        {/* Image Div */}
        <div className="flex-[1.5] bg-gray-600 rounded-2xl overflow-hidden min-h-[400px] flex items-center justify-center">
          <img 
            src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&q=80&w=800&h=600" 
            alt="Showcase"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
