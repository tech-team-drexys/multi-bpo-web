
import { Button } from '@/components/ui/button';
import { ArrowRight, Target, Users, Award } from 'lucide-react';

const AboutUs = () => {
  const stats = [
    {
      icon: Users,
      number: "500+",
      label: "Escritórios Atendidos"
    },
    {
      icon: Target,
      number: "98%",
      label: "Taxa de Satisfação"
    },
    {
      icon: Award,
      number: "15+",
      label: "Anos de Experiência"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content Side */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Sobre <span className="text-blue-600">Nós</span>
              </h2>
              <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                Somos pioneiros em transformação digital para escritórios contábeis, 
                combinando tecnologia de ponta com expertise contábil para revolucionar 
                a gestão empresarial.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Nossa plataforma MULTIBPO integra inteligência artificial, automação 
                avançada e processos otimizados para elevar a produtividade e precisão 
                dos serviços contábeis, permitindo que nossos clientes foquem no que 
                realmente importa: o crescimento estratégico de seus negócios.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-4 rounded-lg bg-gray-50 hover:bg-blue-50 transition-colors duration-300">
                  <stat.icon className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-gray-900 mb-1">{stat.number}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium inline-flex items-center">
                Conheça Nossa História
                <ArrowRight className="ml-2 size-4" />
              </Button>
              <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-lg font-medium">
                Nossa Equipe
              </Button>
            </div>
          </div>

          {/* Image Side */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=600&h=600&fit=crop" 
                alt="Equipe trabalhando com tecnologia moderna"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-transparent"></div>
            </div>
            
            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-6 border border-gray-100">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Certificação ISO</div>
                  <div className="text-sm text-gray-600">Qualidade Garantida</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
