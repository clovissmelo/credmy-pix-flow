
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-credmy-blue text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img 
                src="/lovable-uploads/716deff8-97dc-4a80-999d-7c5f672ea6d6.png"
                alt="Credmy Logo" 
                className="w-10 h-10"
              />
              <span className="text-xl font-bold">credmy</span>
            </div>
            <p className="text-gray-300 mb-4">
              Transforme seu limite do cartão em dinheiro na hora!
            </p>
            <p className="text-gray-300">
              Contato: <a href="mailto:contato@credmy.com.br" className="text-credmy-turquoise hover:underline">contato@credmy.com.br</a>
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-credmy-turquoise transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/simulacao" className="text-gray-300 hover:text-credmy-turquoise transition-colors">Simulação</Link>
              </li>
              <li>
                <Link to="/cadastro" className="text-gray-300 hover:text-credmy-turquoise transition-colors">Cadastro</Link>
              </li>
              <li>
                <Link to="/login" className="text-gray-300 hover:text-credmy-turquoise transition-colors">Login</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Parceiros</h3>
            <div className="flex space-x-6">
              <div className="bg-white p-2 rounded-md flex items-center justify-center w-20 h-12">
                <img 
                  src="/lovable-uploads/f1cdc003-5a70-4530-aeb2-e0d3bccd5adb.png" 
                  alt="Hcred" 
                  className="h-full object-contain"
                />
              </div>
              <div className="bg-black p-2 rounded-md flex items-center justify-center w-20 h-12">
                <img 
                  src="/lovable-uploads/23bd30ed-4036-4142-a895-39fadcc694b6.png" 
                  alt="CDX" 
                  className="h-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
        
        <div className="pt-6 border-t border-gray-700 text-center text-gray-400 text-sm">
          <p>© {currentYear} Credmy. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
