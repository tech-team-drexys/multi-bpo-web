
import { Card, CardContent } from '@/components/ui/card';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Maria Silva",
      role: "Sócia-Diretora",
      company: "Contábil Silva & Associados",
      content: "O MULTIBPO revolucionou nossa operação. Conseguimos atender 3x mais clientes com a mesma equipe. A automação dos processos contábeis foi um divisor de águas para nosso crescimento.",
      rating: 5
    },
    {
      name: "João Santos",
      role: "Contador Responsável",
      company: "Santos Contabilidade",
      content: "A integração com WhatsApp mudou completamente nosso atendimento ao cliente. Agora oferecemos suporte 24/7 e nossos clientes estão muito mais satisfeitos com a agilidade das respostas.",
      rating: 5
    },
    {
      name: "Ana Costa",
      role: "Gerente Financeira",
      company: "Costa & Partners",
      content: "Reduzimos nossos custos operacionais em mais de 50% após implementar a plataforma MULTIBPO. O ROI foi alcançado em apenas 3 meses. Recomendo para todos os escritórios contábeis.",
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            O Que Nossos <span className="text-blue-600">Clientes</span> Dizem
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Depoimentos reais de contadores que transformaram seus negócios 
            com nossas soluções digitais.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border-gray-200">
              <CardContent className="p-8">
                <div className="mb-6">
                  <div className="flex text-yellow-400 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-xl">★</span>
                    ))}
                  </div>
                  <p className="text-gray-600 leading-relaxed italic">
                    "{testimonial.content}"
                  </p>
                </div>
                <div className="border-t pt-6">
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-blue-600">{testimonial.role}</div>
                  <div className="text-sm text-gray-500">{testimonial.company}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
