
import { Button } from '@/components/ui/button';
import { ArrowRight, Users, Target, Award, TrendingUp } from 'lucide-react';

const QuemSomos = () => {
  const stats = [
    {
      icon: Users,
      number: "500+",
      label: "Escritórios Atendidos",
      color: "text-blue-500"
    },
    {
      icon: Target,
      number: "98%",
      label: "Taxa de Satisfação",
      color: "text-emerald-500"
    },
    {
      icon: Award,
      number: "15+",
      label: "Anos de Experiência",
      color: "text-purple-500"
    },
    {
      icon: TrendingUp,
      number: "300%",
      label: "Crescimento Médio",
      color: "text-orange-500"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-20 right-20 w-72 h-72 bg-blue-100 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-100 rounded-full blur-3xl opacity-20"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Quem <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Somos</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Somos pioneiros em transformação digital para escritórios contábeis, 
            combinando tecnologia de ponta com expertise contábil.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content Side */}
          <div className="space-y-8">
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Nossa Missão
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Revolucionar a gestão empresarial através da plataforma MULTIBPO, 
                que integra inteligência artificial, automação avançada e processos 
                otimizados para elevar a produtividade e precisão dos serviços contábeis.
              </p>
              <p className="text-base text-gray-500 leading-relaxed">
                Permitimos que nossos clientes foquem no que realmente importa: 
                o crescimento estratégico de seus negócios.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className={`p-2 rounded-lg bg-gray-50 group-hover:bg-gray-100 transition-colors`}>
                      <stat.icon className={`w-6 h-6 ${stat.color}`} />
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-gray-900 mb-1">{stat.number}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-xl font-medium inline-flex items-center shadow-lg hover:shadow-xl transition-all duration-300">
                Nossa História
                <ArrowRight className="ml-2 size-4" />
              </Button>
              <Button variant="outline" className="border-2 border-gray-200 text-gray-700 hover:bg-gray-50 px-8 py-3 rounded-xl font-medium transition-all duration-300">
                Conheça a Equipe
              </Button>
            </div>
          </div>

          {/* Image Side */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-3xl shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=600&h=600&fit=crop" 
                alt="Equipe trabalhando com tecnologia moderna"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 via-purple-600/10 to-transparent"></div>
            </div>
            
            {/* Floating Cards */}
            <div className="absolute -top-6 -left-6 bg-white rounded-2xl shadow-xl p-6 border border-gray-100 backdrop-blur-sm">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">ISO 9001</div>
                  <div className="text-sm text-gray-600">Certificação</div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-6 border border-gray-100 backdrop-blur-sm">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">24/7</div>
                  <div className="text-sm text-gray-600">Suporte</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuemSomos;
