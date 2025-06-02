const Footer = () => {
  return <footer className="text-white bg-blue-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img src="/lovable-uploads/26a6155d-39f9-480a-b9fb-504f8308c172.png" alt="MULTIBPO Logo" className="h-8 w-auto" />
            </div>
            <p className="text-gray-400 leading-relaxed">
              Soluções digitais inteligentes para revolucionar a gestão de escritórios contábeis.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Serviços</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-blue-400 transition-colors">Automação Contábil</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Integração WhatsApp</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Desenvolvimento de Apps</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Marketing Digital</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Empresa</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-blue-400 transition-colors">Sobre Nós</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Nossa Equipe</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Carreiras</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Blog</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-blue-400 transition-colors">Fale conosco</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">WhatsApp</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 MULTIBPO. Todos os direitos reservados.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">Política de Privacidade</a>
            <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">Termos de Uso</a>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;
