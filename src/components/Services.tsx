import { CategorizedGallery } from "@/components/ui/gallery4";
import { backgrounds } from "@/lib/design-system";

const Services = () => {
  return (
    <section id="services" className={`${backgrounds.primary}`}>
      <CategorizedGallery
        title="Nossos Serviços"
        description="Uma plataforma completa de BPO desenvolvida especificamente para revolucionar a gestão operacional dos Escritórios de Contabilidade modernos."
      />
    </section>
  );
};

export default Services;
