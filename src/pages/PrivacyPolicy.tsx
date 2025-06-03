
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="pt-20 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Política de Privacidade
            </h1>
            <p className="text-lg text-gray-600">
              Última atualização: {new Date().toLocaleDateString('pt-BR')}
            </p>
          </div>

          <div className="prose prose-lg max-w-none">
            <div className="bg-gray-50 p-8 rounded-lg mb-8">
              <h2 className="text-2xl font-semibold text-blue-950 mb-4">
                Introdução
              </h2>
              <p className="text-gray-700 leading-relaxed">
                A MULTI BPO está comprometida com a proteção da sua privacidade e dos seus dados pessoais. 
                Esta Política de Privacidade descreve como coletamos, usamos, armazenamos e protegemos suas 
                informações quando você utiliza nossos serviços.
              </p>
            </div>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-blue-950 mb-4">
                1. Informações que Coletamos
              </h2>
              <div className="space-y-4 text-gray-700">
                <p><strong>Dados Pessoais:</strong> Nome, e-mail, telefone, CPF/CNPJ, endereço.</p>
                <p><strong>Dados de Navegação:</strong> Informações sobre como você interage com nosso site.</p>
                <p><strong>Dados Técnicos:</strong> Endereço IP, tipo de navegador, sistema operacional.</p>
                <p><strong>Dados de Comunicação:</strong> Registros de conversas via WhatsApp e outros canais.</p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-blue-950 mb-4">
                2. Como Usamos suas Informações
              </h2>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Fornecer e melhorar nossos serviços de automação contábil</li>
                <li>Comunicar-nos com você sobre nossos serviços</li>
                <li>Processar pagamentos e transações</li>
                <li>Cumprir obrigações legais e regulamentares</li>
                <li>Personalizar sua experiência em nossos serviços</li>
                <li>Enviar atualizações e informações relevantes</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-blue-950 mb-4">
                3. Compartilhamento de Informações
              </h2>
              <p className="text-gray-700 mb-4">
                Não vendemos, alugamos ou compartilhamos suas informações pessoais com terceiros, 
                exceto nas seguintes situações:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Com seu consentimento explícito</li>
                <li>Para cumprir obrigações legais</li>
                <li>Com prestadores de serviços que nos auxiliam (sob contratos de confidencialidade)</li>
                <li>Em caso de fusão, aquisição ou venda de ativos da empresa</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-blue-950 mb-4">
                4. Segurança dos Dados
              </h2>
              <p className="text-gray-700">
                Implementamos medidas técnicas e organizacionais adequadas para proteger suas informações 
                contra acesso não autorizado, alteração, divulgação ou destruição. Utilizamos criptografia, 
                controles de acesso e monitoramento contínuo de segurança.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-blue-950 mb-4">
                5. Seus Direitos (LGPD)
              </h2>
              <p className="text-gray-700 mb-4">
                Conforme a Lei Geral de Proteção de Dados (LGPD), você tem direito a:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Acessar seus dados pessoais</li>
                <li>Corrigir dados incompletos, inexatos ou desatualizados</li>
                <li>Solicitar a eliminação de dados desnecessários</li>
                <li>Solicitar a portabilidade de dados</li>
                <li>Revogar o consentimento</li>
                <li>Ser informado sobre o uso e compartilhamento de dados</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-blue-950 mb-4">
                6. Retenção de Dados
              </h2>
              <p className="text-gray-700">
                Mantemos suas informações pelo tempo necessário para cumprir as finalidades descritas 
                nesta política, ou conforme exigido por lei. Dados contábeis podem ser mantidos por 
                períodos específicos conforme legislação aplicável.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-blue-950 mb-4">
                7. Contato
              </h2>
              <div className="bg-blue-50 p-6 rounded-lg">
                <p className="text-gray-700 mb-2">
                  Para exercer seus direitos ou esclarecer dúvidas sobre esta política:
                </p>
                <p className="text-gray-700">
                  <strong>E-mail:</strong> privacidade@multibpo.com.br<br />
                  <strong>Telefone:</strong> (11) 9999-9999<br />
                  <strong>Endereço:</strong> [Seu endereço completo]
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-blue-950 mb-4">
                8. Alterações nesta Política
              </h2>
              <p className="text-gray-700">
                Esta política pode ser atualizada periodicamente. Notificaremos sobre mudanças 
                significativas através de nossos canais de comunicação habituais.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
