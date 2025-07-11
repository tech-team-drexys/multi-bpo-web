
import Header from "@/components/Header";
import NewHero from "@/components/NewHero";
import SecondHero from "@/components/SecondHero";
import CTABanners from "@/components/CTABanners";
import Services from "@/components/Services";
import LightFooter from "@/components/Footer";
import Courses from "@/components/Courses";
import Blog from "@/components/Blog";
import ConsultoriaIA from "@/components/ConsultoriaIA";
import AboutUs from "@/components/AboutUs";
import "@/components/ui/showcase-product.css";
import WhatsAppAssistant from "@/components/WhatsAppAssistant";
import CTASection from "@/components/CTASection";

const Index = () => {
  return (
    <div className="min-h-screen bg-white w-full overflow-x-hidden">
      <Header enableScrollAnimation={true} />
      <NewHero />
      <SecondHero />
      <CTABanners />
      <ConsultoriaIA />
      <WhatsAppAssistant />
      <CTASection />
      <Services />
      <AboutUs />
      <Blog />
      <Courses />
      <LightFooter />
    </div>
  );
};

export default Index;
