
import { Button } from '@/components/ui/button';
import { CheckCircle, Clock, Headphones, Zap } from 'lucide-react';

const CallToActionBanner = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-800 to-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold leading-tight">
              Pronto para <span className="text-green-400">Transformar</span> seu Escritório Contábil?
            </h2>
            <p className="text-xl text-purple-100 leading-relaxed">
              Junte-se a mais de 500 escritórios que já revolucionaram seus processos 
              com nossas soluções digitais inteligentes. Comece gratuitamente hoje!
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <CheckCircle className="w-6 h-6 text-green-400" />
                <span className="text-purple-100">Setup gratuito e sem compromisso</span>
              </div>
              <div className="flex items-center gap-3">
                <Headphones className="w-6 h-6 text-green-400" />
                <span className="text-purple-100">Suporte dedicado 24/7</span>
              </div>
              <div className="flex items-center gap-3">
                <Zap className="w-6 h-6 text-green-400" />
                <span className="text-purple-100">Implementação em menos de 48h</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 text-lg font-semibold">
                Começar Gratuitamente
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-blue-800 px-8 py-4 text-lg font-semibold bg-transparent">
                Agendar Demonstração
              </Button>
            </div>
          </div>

          <div className="relative flex justify-center">
            <div className="bg-white rounded-2xl shadow-2xl p-8">
              <div className="relative">
                <img src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&h=400&fit=crop&crop=face" alt="Profissionais usando tecnologia MULTIBPO para automação contábil" className="rounded-2xl w-full max-w-md" />
                <div className="absolute -bottom-6 -right-6 bg-green-500 text-white p-4 rounded-xl shadow-lg">
                  <div className="text-center">
                    <div className="text-2xl font-bold">500+</div>
                    <div className="text-sm">Clientes Satisfeitos</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToActionBanner;
