
import { CategorizedGallery } from "@/components/ui/gallery4";

const Services = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Nossos Serviços
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Uma plataforma completa de BPO desenvolvida especificamente para revolucionar a gestão de escritórios contábeis modernos.
          </p>
        </div>
        <CategorizedGallery />
      </div>
    </section>
  );
};

export default Services;
