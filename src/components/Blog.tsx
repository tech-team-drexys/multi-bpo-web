import { ArrowRight } from 'lucide-react';
const Blog = () => {
  return <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-left mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Blog
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl">
            Acompanhe as últimas novidades, dicas e insights sobre contabilidade e gestão empresarial.
          </p>
        </div>

        {/* Blog Card - Increased size */}
        <div className="flex justify-center">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden max-w-4xl w-full group hover:shadow-xl transition-shadow duration-300">
            <div className="relative h-80 overflow-hidden">
              <img src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=400&fit=crop" alt="Artigo sobre contabilidade digital" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              <div className="absolute top-4 left-4">
                <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  Contabilidade Digital
                </span>
              </div>
            </div>
            
            <div className="p-10 bg-gray-50">
              <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                <span>15 de Janeiro, 2024</span>
                <span>•</span>
                <span>5 min de leitura</span>
              </div>
              
              <h3 className="text-3xl font-bold text-gray-900 mb-6 group-hover:text-blue-600 transition-colors duration-200">
                Como a Inteligência Artificial está Revolucionando a Contabilidade
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                Descubra como a IA está transformando processos contábeis, automatizando tarefas repetitivas e permitindo que contadores foquem em atividades estratégicas de maior valor.
              </p>
              
              <div className="flex items-center text-blue-600 font-medium group cursor-pointer">
                <span className="transition-transform duration-200">Ler mais</span>
                <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Blog;