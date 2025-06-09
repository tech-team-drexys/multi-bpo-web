
import { Button } from "@/components/ui/button";

const ProductShowcase = () => {
  return (
    <section className="w-full min-h-screen bg-gray-900 p-8 flex items-center justify-center">
      <div className="w-full max-w-6xl bg-gray-800 rounded-3xl p-8 flex gap-8 items-stretch min-h-[500px]">
        {/* Content Div */}
        <div className="flex-1 bg-gray-700 rounded-2xl p-8 flex flex-col justify-between">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-white leading-tight">
              Lorem Ipsum et dollor
            </h2>
            
            <div className="w-full h-px bg-gray-500 my-8"></div>
            
            <p className="text-gray-300 text-base leading-relaxed">
              Lorem Ipsum et dollor Lorem Ipsum et dollorLorem Ipsum et dollorLorem Ipsum 
              et dollorLorem Ipsum et dollorLorem Ipsum et dollorLorem Ipsum et dollorLorem 
              Ipsum et dollorL orem Ipsum et dollorLorem Ipsum et dollorLorem Ipsum et 
              dollorLorem Ipsum et dollor
            </p>
          </div>
          
          <Button 
            variant="outline" 
            size="lg" 
            className="bg-transparent border-2 border-teal-400 text-teal-400 hover:bg-teal-400 hover:text-gray-900 px-8 py-3 rounded-lg font-semibold mt-8 w-fit"
          >
            Botão aqui
          </Button>
        </div>

        {/* Image Div */}
        <div className="flex-[1.2] bg-gray-400 rounded-2xl overflow-hidden flex items-center justify-center">
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <div className="w-48 h-32 bg-gray-300 rounded-lg flex items-center justify-center relative">
              <svg width="60" height="40" viewBox="0 0 60 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M45 10L35 20L45 30M25 10L15 20L25 30" fill="#9CA3AF"/>
                <circle cx="45" cy="10" r="4" fill="#9CA3AF"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
