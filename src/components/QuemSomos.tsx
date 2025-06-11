import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Target, Award, TrendingUp } from "lucide-react";

const QuemSomos = () => {
  const stats = [
    {
      icon: Users,
      number: "Time ",
      label: "Composto por especialistas multidisciplinares",
      color: "text-blue-500",
    },
    {
      icon: Target,
      number: "Eficiência",
      label: "Em cada entrega operacional",
      color: "text-emerald-500",
    },
    {
      icon: Award,
      number: "IA",
      label: "Integrada em todos os nossos processos",
      color: "text-purple-500",
    },
    {
      icon: TrendingUp,
      number: "Foco",
      label: "No crescimento do seu escritório",
      color: "text-orange-500",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-20 right-20 w-72 h-72 bg-blue-100 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-100 rounded-full blur-3xl opacity-20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-left mb-16">
          <h2 className="text-[2.6rem] font-bold text-gray-900 mb-6">
            Quem{" "}
            <span className="bg-blue-600 bg-clip-text text-transparent">
              Somos
            </span>
          </h2>
          <p className="text-[1.2rem] text-gray-600 max-w-3xl leading-relaxed">
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
                Revolucionar a gestão empresarial através da plataforma
                MULTIBPO, que integra inteligência artificial, automação
                avançada e processos otimizados para elevar a produtividade e
                precisão dos serviços contábeis.
              </p>
              <p className="text-base text-gray-500 leading-relaxed">
                Permitimos que nossos clientes foquem no que realmente importa:
                o crescimento estratégico de seus negócios.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="flex items-center space-x-3 mb-3">
                    <div
                      className={`p-2 rounded-lg bg-gray-50 group-hover:bg-gray-100 transition-colors`}
                    >
                      <stat.icon className={`w-6 h-6 ${stat.color}`} />
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-gray-900 mb-1">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-12 pt-4">
              <div className="group inline-flex items-center text-blue-800 bg-transparent border-[1px] border-blue-800 hover:bg-blue-800 px-6 py-2 rounded-lg text-base font-semibold transition-all duration-300 w-fit cursor-pointer hover:text-white hover:shadow-lg">
                Conheça a Equipe
              </div>

              <div className="group inline-flex items-center bg-green-500 text-white px-6 py-2 rounded-lg text-base font-semibold transition-all duration-300 w-fit cursor-pointer relative z-20 hover:bg-green-600 hover:shadow-lg">
                Nossa História
                <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </div>
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
                  <div className="text-sm text-gray-600">Certificação</div>
                  <div className="font-semibold text-gray-900">CRC/SP</div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-6 border border-gray-100 backdrop-blur-sm">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-sm text-gray-600">Suporte</div>
                  <div className="font-semibold text-gray-900">24 horas</div>
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
