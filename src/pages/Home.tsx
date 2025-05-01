
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Clock, Info } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="fade-in-element">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Transforme seu limite do cartão em dinheiro na hora!
              </h1>
              <p className="text-lg md:text-xl mb-8 text-gray-200">
                Com a Credmy, você converte seu crédito em PIX em até 2 horas, sem complicação. Simule agora e receba o valor direto na sua conta!
              </p>
              <Link to="/simulacao" className="btn-primary flex items-center gap-2 w-fit">
                Quero meu PIX agora
                <ArrowRight size={18} />
              </Link>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="bg-white bg-opacity-10 p-6 rounded-xl backdrop-blur-sm border border-white border-opacity-20 max-w-md">
                <div className="w-24 h-24 mx-auto mb-6">
                  <img 
                    src="/lovable-uploads/716deff8-97dc-4a80-999d-7c5f672ea6d6.png" 
                    alt="Credmy Logo" 
                    className="w-full h-full object-contain"
                  />
                </div>
                <h2 className="text-3xl font-bold mb-4 text-center">PIX com Cartão de Crédito</h2>
                <p className="text-center text-gray-200 mb-6">
                  Envie dinheiro via PIX e pague com seu cartão de credito.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Simulation Section */}
      <section className="section bg-gray-50">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-credmy-blue">
              Simule e Veja Quanto Você Pode Receber
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Use nosso simulador e descubra o valor disponível para você em segundos. Sem compromisso e 100% online!
            </p>
            <Link to="/simulacao" className="btn-primary">
              Simular Agora
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-credmy-blue">
            Por que escolher a Credmy?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card-feature">
              <div className="flex flex-col items-center text-center">
                <div className="bg-credmy-blue p-3 rounded-full mb-4">
                  <ShieldCheck className="w-8 h-8 text-credmy-turquoise" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-credmy-blue">Processo Rápido e Seguro</h3>
                <p className="text-gray-600">
                  Cadastro simples, análise ágil e contrato digital. Tudo feito pelo celular ou computador, sem papelada ou burocracia!
                </p>
              </div>
            </div>

            <div className="card-feature">
              <div className="flex flex-col items-center text-center">
                <div className="bg-credmy-blue p-3 rounded-full mb-4">
                  <Clock className="w-8 h-8 text-credmy-turquoise" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-credmy-blue">Dinheiro na Conta em Até 2 Horas</h3>
                <p className="text-gray-600">
                  Aprovado? O PIX cai na sua conta em poucos minutos. Use como quiser: pagar dívidas, emergências ou aquele plano especial.
                </p>
              </div>
            </div>

            <div className="card-feature">
              <div className="flex flex-col items-center text-center">
                <div className="bg-credmy-blue p-3 rounded-full mb-4">
                  <Info className="w-8 h-8 text-credmy-turquoise" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-credmy-blue">Transparência Sem Pegadinhas</h3>
                <p className="text-gray-600">
                  Taxas claras e parcelas fixas. Nada de letras miúdas ou cobranças escondidas. Você no controle de tudo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section bg-gray-50">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center text-credmy-blue">
              Dúvidas Frequentes
            </h2>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-lg font-medium">
                  Em quantas vezes posso pagar?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  De 1 a 12 vezes.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger className="text-lg font-medium">
                  Qual o valor mínimo?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  R$ 100,00
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger className="text-lg font-medium">
                  Qual o valor máximo?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  R$ 10.000,00
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger className="text-lg font-medium">
                  Como eu pago?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  Diretamente na fatura do seu cartão de crédito.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5">
                <AccordionTrigger className="text-lg font-medium">
                  Preciso ter limite no cartão de crédito?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  Sim, é necessário ter limite disponível no seu cartão de crédito.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="section">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-center text-credmy-blue">
            Nossos Parceiros
          </h2>
          <div className="flex flex-wrap justify-center items-center gap-12">
            <div className="bg-white p-3 rounded-md shadow-sm border border-gray-200 w-40 h-20 flex items-center justify-center">
              <img 
                src="/lovable-uploads/f1cdc003-5a70-4530-aeb2-e0d3bccd5adb.png" 
                alt="Hcred" 
                className="h-full object-contain"
              />
            </div>
            <div className="bg-black p-3 rounded-md shadow-sm w-40 h-20 flex items-center justify-center">
              <img 
                src="/lovable-uploads/23bd30ed-4036-4142-a895-39fadcc694b6.png" 
                alt="CDX" 
                className="h-full object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="section bg-credmy-blue text-white">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Pronto para resolver sua vida financeira?
            </h2>
            <p className="text-xl text-gray-200 mb-8">
              Receba seu PIX hoje mesmo com a Credmy é rápido, seguro e sem stress!
            </p>
            <Link to="/cadastro" className="btn-primary px-8">
              Começar Agora
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
