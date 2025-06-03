
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const TermsOfUse = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="pt-20 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Termos de Uso
            </h1>
            <p className="text-lg text-gray-600">
              Última atualização: {new Date().toLocaleDateString('pt-BR')}
            </p>
          </div>

          <div className="prose prose-lg max-w-none">
            <div className="bg-gray-50 p-8 rounded-lg mb-8">
              <h2 className="text-2xl font-semibold text-blue-950 mb-4">
                Aceite dos Termos
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Ao acessar e utilizar os serviços da MULTI BPO, você concorda em cumprir estes 
                Termos de Uso. Se você não concordar com algum dos termos, não utilize nossos serviços.
              </p>
            </div>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-blue-950 mb-4">
                1. Definições
              </h2>
              <div className="space-y-4 text-gray-700">
                <p><strong>Serviços:</strong> Soluções de automação contábil, integração WhatsApp, desenvolvimento de aplicativos e marketing digital oferecidas pela MULTI BPO.</p>
                <p><strong>Usuário:</strong> Pessoa física ou jurídica que utiliza nossos serviços.</p>
                <p><strong>Plataforma:</strong> Website, aplicativos e sistemas da MULTI BPO.</p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-blue-950 mb-4">
                2. Descrição dos Serviços
              </h2>
              <p className="text-gray-700 mb-4">
                A MULTI BPO oferece soluções digitais especializadas para escritórios contábeis, incluindo:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Automação de processos contábeis</li>
                <li>Integração com WhatsApp Business</li>
                <li>Desenvolvimento de aplicativos personalizados</li>
                <li>Serviços de marketing digital</li>
                <li>Consultoria em transformação digital</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-blue-950 mb-4">
                3. Responsabilidades do Usuário
              </h2>
              <p className="text-gray-700 mb-4">O usuário se compromete a:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Fornecer informações verdadeiras, precisas e atualizadas</li>
                <li>Manter a confidencialidade de senhas e dados de acesso</li>
                <li>Usar os serviços apenas para fins legais e apropriados</li>
                <li>Não tentar acessar áreas restritas da plataforma</li>
                <li>Respeitar direitos de propriedade intelectual</li>
                <li>Comunicar imediatamente qualquer uso não autorizado</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-blue-950 mb-4">
                4. Responsabilidades da MULTI BPO
              </h2>
              <p className="text-gray-700 mb-4">Comprometemo-nos a:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Fornecer serviços conforme especificado nos contratos</li>
                <li>Manter a confidencialidade dos dados dos clientes</li>
                <li>Implementar medidas de segurança adequadas</li>
                <li>Oferecer suporte técnico durante horário comercial</li>
                <li>Notificar sobre manutenções programadas</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-blue-950 mb-4">
                5. Pagamentos e Cancelamentos
              </h2>
              <div className="space-y-4 text-gray-700">
                <p><strong>Pagamentos:</strong> Os valores e formas de pagamento são definidos nos contratos específicos de cada serviço.</p>
                <p><strong>Cancelamento:</strong> O cancelamento pode ser solicitado conforme condições estabelecidas no contrato, respeitando períodos de aviso prévio.</p>
                <p><strong>Reembolso:</strong> Políticas de reembolso são aplicadas conforme tipo de serviço e fase de desenvolvimento/implementação.</p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-blue-950 mb-4">
                6. Propriedade Intelectual
              </h2>
              <p className="text-gray-700">
                Todos os direitos de propriedade intelectual sobre os serviços, incluindo software, 
                documentação e metodologias, pertencem à MULTI BPO ou seus licenciadores. 
                Soluções personalizadas desenvolvidas para clientes específicos terão direitos 
                definidos em contrato.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-blue-950 mb-4">
                7. Limitação de Responsabilidade
              </h2>
              <p className="text-gray-700 mb-4">
                A MULTI BPO não se responsabiliza por:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Danos indiretos ou consequenciais</li>
                <li>Perda de dados devido a problemas de conectividade do cliente</li>
                <li>Interrupções causadas por terceiros ou força maior</li>
                <li>Uso inadequado dos serviços pelo usuário</li>
                <li>Decisões tomadas com base nos relatórios gerados</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-blue-950 mb-4">
                8. Disponibilidade dos Serviços
              </h2>
              <p className="text-gray-700">
                Embora nos esforcemos para manter alta disponibilidade, os serviços podem ser 
                temporariamente interrompidos para manutenção, atualizações ou por questões técnicas. 
                Tentaremos minimizar essas interrupções e comunicar antecipadamente quando possível.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-blue-950 mb-4">
                9. Modificações dos Termos
              </h2>
              <p className="text-gray-700">
                Reservamos o direito de modificar estes termos a qualquer momento. 
                Alterações significativas serão comunicadas com antecedência mínima de 30 dias. 
                O uso continuado dos serviços após as modificações constituirá aceite dos novos termos.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-blue-950 mb-4">
                10. Lei Aplicável e Foro
              </h2>
              <p className="text-gray-700">
                Estes termos são regidos pela legislação brasileira. 
                Fica eleito o foro da comarca de [Sua Cidade] para dirimir quaisquer controvérsias 
                decorrentes destes termos ou da utilização dos serviços.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-blue-950 mb-4">
                11. Contato
              </h2>
              <div className="bg-blue-50 p-6 rounded-lg">
                <p className="text-gray-700 mb-2">
                  Para dúvidas sobre estes termos ou nossos serviços:
                </p>
                <p className="text-gray-700">
                  <strong>E-mail:</strong> contato@multibpo.com.br<br />
                  <strong>Telefone:</strong> (11) 9999-9999<br />
                  <strong>WhatsApp:</strong> (11) 9999-9999<br />
                  <strong>Endereço:</strong> [Seu endereço completo]
                </p>
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default TermsOfUse;
