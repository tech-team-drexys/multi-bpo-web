import { ArrowRight, Users, Target, Award } from "lucide-react";
import { spacing, backgrounds, typography, components, borderRadius, shadows } from "@/lib/design-system";
import { useScrollReveal } from "@/hooks/useScrollReveal";
const AboutUs = () => {
  const {
    ref,
    isVisible
  } = useScrollReveal();
  const stats = [{
    number: "500+",
    label: "Empresas Atendidas"
  }, {
    number: "15+",
    label: "Anos de Experiência"
  }, {
    number: "98%",
    label: "Satisfação dos Clientes"
  }, {
    number: "24/7",
    label: "Suporte Especializado"
  }];
  const values = [{
    icon: Users,
    title: "Compromisso",
    description: "Dedicação total ao sucesso dos nossos clientes"
  }, {
    icon: Target,
    title: "Precisão",
    description: "Excelência técnica em cada processo contábil"
  }, {
    icon: Award,
    title: "Inovação",
    description: "Tecnologia de ponta para otimizar sua gestão"
  }];
  return <section ref={ref} className={`${spacing.section.lg} ${backgrounds.secondary}`}>
      <div className={spacing.container}>
        {/* Header */}
        <div className={`text-center ${spacing.content.lg} transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}>
          <h2 className={`${typography.heading.lg} text-gray-900 mb-6`}>Sobre Nós</h2>
          <p className={`${typography.body.lg} text-gray-600 max-w-3xl mx-auto leading-relaxed`}>
            Somos uma empresa de contabilidade moderna que combina tradição e inovação 
            para oferecer soluções contábeis completas e personalizadas para seu negócio.
          </p>
        </div>

        {/* Stats Grid */}
        <div className={`grid grid-cols-2 lg:grid-cols-4 gap-8 ${spacing.content.md} transition-all duration-1000 delay-300 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"}`}>
          {stats.map((stat, index) => <div key={index} className="text-center">
              <div className={`${typography.heading.lg} text-blue-600 mb-2`}>
                {stat.number}
              </div>
              <p className={`${typography.body.sm} text-gray-600 font-medium`}>
                {stat.label}
              </p>
            </div>)}
        </div>

        {/* Main Content with Team Image */}
        <div className={`grid lg:grid-cols-2 gap-16 items-center transition-all duration-1000 delay-500 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"}`}>
          {/* Left Content */}
          <div>
            <h3 className={`${typography.heading.md} text-gray-900 mb-6`}>
              Nossa Missão
            </h3>
            <p className={`${typography.body.md} text-gray-600 mb-6 leading-relaxed`}>
              Transformar a gestão contábil das empresas através de soluções inovadoras, 
              proporcionando tranquilidade e segurança para que nossos clientes possam 
              focar no crescimento dos seus negócios.
            </p>
            <p className={`${typography.body.md} text-gray-600 mb-8 leading-relaxed`}>
              Com uma equipe especializada e ferramentas de última geração, oferecemos 
              um atendimento personalizado e eficiente, sempre alinhado às necessidades 
              específicas de cada cliente.
            </p>

            {/* Values Cards */}
            <div className="space-y-6">
              {values.map((value, index) => <div key={index} className={`${components.card.base} ${components.card.padding} ${components.card.hover} flex items-start gap-4`}>
                  <div className="bg-blue-50 p-3 rounded-xl shrink-0">
                    <value.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className={`${typography.heading.sm} text-gray-900 mb-2`}>
                      {value.title}
                    </h4>
                    <p className={`${typography.body.sm} text-gray-600 leading-relaxed`}>
                      {value.description}
                    </p>
                  </div>
                </div>)}
            </div>

            <div className="mt-8">
              <a href="#contato" className={`${components.button.default} inline-flex items-center`}>
                <span>Conheça Nossa Equipe</span>
                <ArrowRight className={components.button.defaultArrow} />
              </a>
            </div>
          </div>

          {/* Right Content - Team Image */}
          <div className="relative">
            <div className={`${components.card.base} overflow-hidden`}>
              <div className="aspect-[4/3] bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center">
                <img src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=1200&q=80" alt="Nossa Equipe" className="w-full h-full object-cover" onError={e => {
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
                const parent = target.parentElement;
                if (parent) {
                  parent.innerHTML = `
                        <div class="flex flex-col items-center justify-center text-blue-600">
                          <Users class="w-16 h-16 mb-4" />
                          <p class="text-lg font-medium">Nossa Equipe</p>
                        </div>
                      `;
                }
              }} />
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-600 rounded-full opacity-10"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-blue-400 rounded-full opacity-5"></div>
          </div>
        </div>
      </div>
    </section>;
};
export default AboutUs;