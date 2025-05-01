
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Slider } from '@/components/ui/slider';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from '@/hooks/use-toast';

const Simulacao = () => {
  const [valor, setValor] = useState(1000);
  const [parcelas, setParcelas] = useState(6);
  const [isCalculating, setIsCalculating] = useState(false);
  const [resultado, setResultado] = useState<{ valorParcela: number; valorTotal: number } | null>(null);
  const { toast } = useToast();

  const MIN_VALOR = 100;
  const MAX_VALOR = 10000;
  const taxaJuros = 0.0499; // 4.99% ao mês

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(value);
  };

  const handleSliderChange = (value: number[]) => {
    setValor(value[0]);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = parseInt(e.target.value.replace(/\D/g, ''));
    if (isNaN(value)) value = MIN_VALOR;
    if (value < MIN_VALOR) value = MIN_VALOR;
    if (value > MAX_VALOR) value = MAX_VALOR;
    setValor(value);
  };

  const calculateResult = () => {
    const coeficiente = (taxaJuros * Math.pow(1 + taxaJuros, parcelas)) / (Math.pow(1 + taxaJuros, parcelas) - 1);
    const valorParcela = valor * coeficiente;
    const valorTotal = valorParcela * parcelas;
    
    return { valorParcela, valorTotal };
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsCalculating(true);
    
    // Simulate calculation process
    setTimeout(() => {
      const result = calculateResult();
      setResultado(result);
      setIsCalculating(false);
      
      toast({
        title: "Simulação concluída",
        description: "Veja abaixo os detalhes da sua simulação.",
        variant: "default",
      });
    }, 1000);
  };

  return (
    <div className="min-h-[calc(100vh-64px)] py-12 px-4 bg-gray-50">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center text-credmy-blue">
            Simule seu PIX com Cartão de Crédito
          </h1>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Descubra quanto você pode receber agora mesmo. Preencha os dados abaixo para realizar uma simulação.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <Card className="col-span-1 lg:col-span-2">
              <CardHeader>
                <CardTitle>Simulador Credmy</CardTitle>
                <CardDescription>
                  Ajuste o valor e o número de parcelas para ver as opções disponíveis para você.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="valor">Valor desejado</Label>
                      <div className="flex items-center gap-4 mt-2">
                        <Input
                          id="valor"
                          value={formatCurrency(valor)}
                          onChange={handleInputChange}
                          className="text-lg font-medium"
                        />
                      </div>
                      <div className="mt-4">
                        <Slider
                          value={[valor]}
                          min={MIN_VALOR}
                          max={MAX_VALOR}
                          step={100}
                          onValueChange={handleSliderChange}
                          className="my-4"
                        />
                        <div className="flex justify-between text-sm text-gray-500">
                          <span>{formatCurrency(MIN_VALOR)}</span>
                          <span>{formatCurrency(MAX_VALOR)}</span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="parcelas">Número de parcelas</Label>
                      <Select 
                        defaultValue={parcelas.toString()} 
                        onValueChange={(value) => setParcelas(parseInt(value))}
                      >
                        <SelectTrigger className="w-full mt-2">
                          <SelectValue placeholder="Selecione o número de parcelas" />
                        </SelectTrigger>
                        <SelectContent>
                          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((n) => (
                            <SelectItem key={n} value={n.toString()}>
                              {n === 1 ? '1 parcela' : `${n} parcelas`}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-credmy-lightBlue hover:bg-opacity-90"
                    disabled={isCalculating}
                  >
                    {isCalculating ? 'Calculando...' : 'Calcular'}
                  </Button>
                </form>
              </CardContent>
            </Card>

            <Card className="col-span-1 bg-gray-50 border-dashed">
              <CardHeader>
                <CardTitle className="text-lg">Resultado da Simulação</CardTitle>
              </CardHeader>
              <CardContent>
                {resultado ? (
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm text-gray-500">Valor solicitado:</p>
                      <p className="text-xl font-semibold">{formatCurrency(valor)}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Valor da parcela:</p>
                      <p className="text-xl font-semibold text-credmy-blue">
                        {formatCurrency(resultado.valorParcela)}
                      </p>
                      <p className="text-sm text-gray-500">
                        {parcelas}x de {formatCurrency(resultado.valorParcela)}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Valor total:</p>
                      <p className="text-lg font-medium">{formatCurrency(resultado.valorTotal)}</p>
                    </div>
                    <div className="pt-4 border-t border-dashed">
                      <p className="text-sm text-gray-500 mb-1">Taxa de juros:</p>
                      <p className="text-base">4,99% ao mês</p>
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center h-52 text-center text-gray-500">
                    <p>Preencha os dados e clique em "Calcular" para ver o resultado da simulação.</p>
                  </div>
                )}
              </CardContent>
              <CardFooter>
                {resultado && (
                  <Link to="/cadastro" className="w-full">
                    <Button 
                      className="w-full bg-credmy-lightBlue hover:bg-opacity-90"
                    >
                      Continuar com esta oferta
                    </Button>
                  </Link>
                )}
              </CardFooter>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-500 text-sm max-w-2xl mx-auto">
              * Esta é uma simulação. Os valores reais podem variar de acordo com a análise de crédito e condições específicas do seu cartão. A aprovação está sujeita à análise.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Simulacao;
