
import Header from "@/components/Header";
import NewHero from "@/components/NewHero";
import Services from "@/components/Services";
import WhatsAppAssistant from "@/components/WhatsAppAssistant";
import HowItWorks from "@/components/HowItWorks";
import Benefits from "@/components/Benefits";
import CallToActionBanner from "@/components/CallToActionBanner";
import Testimonials from "@/components/Testimonials";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import LightFooter from "@/components/LightFooter";
import Courses from "@/components/Courses";
import AboutUs from "@/components/AboutUs";
import ProductShowcase from "@/components/ProductShowcase";

const Index = () => {
  return (
    <div className="min-h-screen bg-white w-full overflow-x-hidden">
      <Header enableScrollAnimation={true} />
      <NewHero />
      <ProductShowcase />
      <Services />
      <WhatsAppAssistant />
      <HowItWorks />
      <Benefits />
      <CallToActionBanner />
      <Courses />
      <LightFooter />
    </div>
  );
};

export default Index;
