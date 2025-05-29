
import React, { useState } from 'react';
import WhatsAppChat from './WhatsAppChat';

const WhatsAppAssistant = () => {
  const [activeCategory, setActiveCategory] = useState('vendas');

  const categories = [
    {
      id: 'vendas',
      title: 'Vendas',
      icon: '💰',
      description: 'Automatize o processo de vendas e captação de novos clientes'
    },
    {
      id: 'atendimento',
      title: 'Atendimento',
      icon: '🎧',
      description: 'Suporte 24/7 para dúvidas e solicitações dos clientes'
    },
    {
      id: 'promocoes',
      title: 'Promoções',
      icon: '🎯',
      description: 'Campanhas automáticas de marketing e ofertas especiais'
    }
  ];

  return (
    <section id="whatsapp-assistant" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Assistente Virtual <span className="text-green-500">WhatsApp</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Automatize o atendimento ao cliente com inteligência artificial. 
            Veja como nosso chatbot inteligente pode transformar seu negócio.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Menu de Categorias - Lado Esquerdo */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-gray-900 mb-8">
              Escolha uma categoria para ver em ação:
            </h3>
            
            <div className="space-y-4">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`w-full p-6 rounded-xl border-2 transition-all duration-300 text-left ${
                    activeCategory === category.id
                      ? 'border-green-500 bg-green-50 shadow-lg'
                      : 'border-gray-200 bg-white hover:border-green-300 hover:shadow-md'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div className="text-3xl">{category.icon}</div>
                    <div>
                      <h4 className={`text-xl font-semibold mb-2 ${
                        activeCategory === category.id ? 'text-green-600' : 'text-gray-900'
                      }`}>
                        {category.title}
                      </h4>
                      <p className="text-gray-600">{category.description}</p>
                    </div>
                  </div>
                </button>
              ))}
            </div>

            <div className="bg-blue-50 p-6 rounded-xl border border-blue-200">
              <h4 className="text-lg font-semibold text-blue-800 mb-2">
                🚀 Benefícios do Assistente Virtual
              </h4>
              <ul className="text-blue-700 space-y-1">
                <li>• Atendimento 24/7 automatizado</li>
                <li>• Redução de 80% no tempo de resposta</li>
                <li>• Integração com sistemas contábeis</li>
                <li>• Qualificação automática de leads</li>
              </ul>
            </div>
          </div>

          {/* Simulação de Chat - Lado Direito */}
          <div className="flex justify-center">
            <WhatsAppChat activeCategory={activeCategory} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatsAppAssistant;
