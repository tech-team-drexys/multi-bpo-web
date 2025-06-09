
import { Button } from "@/components/ui/button";

const ProductShowcase = () => {
  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 py-16">
      <section className="w-full bg-gray-800 rounded-3xl overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-5 min-h-[500px]">
          {/* Content Div - Left Side */}
          <div className="lg:col-span-2 p-8 lg:p-12 flex flex-col justify-center">
            <div className="bg-gray-700 rounded-2xl p-8 h-full flex flex-col justify-center">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6 leading-tight">
                Reinventing micro-mobility with{" "}
                <span className="text-green-400">Award winning</span> design
              </h2>
              
              <div className="w-full h-px bg-gray-500 mb-6"></div>
              
              <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                Our mission is to close the gap between a scooter and a bike. Yoda is the lightest vehicle of its category, designed to be agile and fun for everyone to ride.
              </p>
              
              <Button 
                variant="outline" 
                className="w-fit bg-transparent border-green-400 text-green-400 hover:bg-green-400 hover:text-gray-900 transition-all duration-300 px-6 py-3 rounded-lg font-medium uppercase tracking-wide"
              >
                Order Today
                <svg 
                  className="ml-2 w-4 h-4" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M7 17L17 7M17 7H7M17 7V17" 
                  />
                </svg>
              </Button>
            </div>
          </div>
          
          {/* Image Div - Right Side */}
          <div className="lg:col-span-3 relative rounded-2xl overflow-hidden m-4 lg:m-8">
            <div className="absolute top-4 right-4 z-10">
              <img 
                src="https://assets-global.website-files.com/65ae37af356fab4845432048/65b0dc37d226a551affbf2ea_GDA24_HO_WINNER_MC_RGB.webp" 
                alt="German Design Award 2024" 
                className="w-16 h-16 object-contain"
              />
            </div>
            <img 
              src="/lovable-uploads/fdf050d1-8a6a-404c-821e-38eb01739e6e.png" 
              alt="Yoda electric scooter" 
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductShowcase;
