import Header from "@/components/Header";
import NewHero from "@/components/NewHero";
import SecondHero from "@/components/SecondHero";
import CTABanners from "@/components/CTABanners";
import Services from "@/components/Services";
import LightFooter from "@/components/LightFooter";
import Courses from "@/components/Courses";
import QuemSomos from "@/components/QuemSomos";
import Blog from "@/components/Blog";
import FeaturesSection from "@/components/FeaturesSection";
import ExampleUseCases from "@/components/UseCases";
import "@/components/ui/showcase-product.css";
import WhatsAppAssistant from "@/components/WhatsAppAssistant";
import WhatsAppChat from "@/components/WhatsAppChat";

const Index = () => {
  return (
    <div className="min-h-screen bg-white w-full overflow-x-hidden">
      <Header enableScrollAnimation={true} />
      <NewHero />
      <SecondHero />
      <CTABanners />
      <WhatsAppAssistant />
      <FeaturesSection />
      <Services />
      <QuemSomos />
      <Blog />
      <Courses />
      <LightFooter />
    </div>
  );
};

export default Index;
