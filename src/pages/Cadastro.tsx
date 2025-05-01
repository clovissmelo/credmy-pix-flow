
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import RegistrationForm from '@/components/RegistrationForm';

const Cadastro = () => {
  const [isComplete, setIsComplete] = useState(false);

  const handleComplete = () => {
    window.scrollTo(0, 0);
    setIsComplete(true);
  };

  if (isComplete) {
    return (
      <div className="py-16 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <div className="flex flex-col items-center space-y-6">
            <div className="w-20 h-20 flex items-center justify-center bg-green-100 rounded-full">
              <CheckCircle className="w-10 h-10 text-green-600" />
            </div>
            
            <h1 className="text-3xl font-bold text-credmy-blue">Cadastro enviado com sucesso!</h1>
            
            <p className="text-gray-600 text-lg">
              Recebemos seu cadastro e já iniciamos a análise. Você receberá um e-mail com mais informações em breve.
            </p>
            
            <div className="bg-gray-50 p-6 rounded-lg w-full mt-6">
              <h3 className="font-semibold mb-3">Próximos passos:</h3>
              <ol className="space-y-3 text-left pl-6 list-decimal">
                <li>Nossa equipe irá analisar seu cadastro</li>
                <li>Você receberá um e-mail de confirmação</li>
                <li>Após aprovação, o valor será enviado via PIX</li>
                <li>O valor será cobrado em seu cartão conforme o prazo escolhido</li>
              </ol>
            </div>
            
            <div className="mt-8">
              <Link to="/">
                <Button className="bg-credmy-lightBlue hover:bg-opacity-90">
                  Voltar para a Página Inicial
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="py-12 px-4 bg-gray-50">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold mb-3 text-center text-credmy-blue">
          Cadastro
        </h1>
        <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
          Preencha os dados abaixo para iniciar o processo de solicitação do seu PIX com cartão de crédito.
        </p>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <RegistrationForm onComplete={handleComplete} />
        </div>
      </div>
    </div>
  );
};

export default Cadastro;
