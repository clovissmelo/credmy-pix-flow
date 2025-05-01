
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FormStep } from './FormStep';

interface RegistrationFormProps {
  onComplete: () => void;
}

const RegistrationForm: React.FC<RegistrationFormProps> = ({ onComplete }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Dados Pessoais
    nome: '',
    cpf: '',
    email: '',
    telefone: '',
    dataNascimento: '',
    
    // Endereço
    endereco: '',
    numero: '',
    complemento: '',
    bairro: '',
    cep: '',
    cidade: '',
    estado: '',
    documentoIdentificacao: null as File | null,
    
    // Proposta
    prazo: '6',
    valorSolicitado: '1000',
    tipoPix: 'cpf',
    chavePix: '',
    
    // Cartão
    ultimosDigitos: '',
    nomeCartao: '',
    fotoCartao: null as File | null,
  });

  const updateFormData = (field: string, value: string | File | null) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleFileChange = (field: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    updateFormData(field, file);
  };

  const handleNextStep = () => {
    setCurrentStep(prev => prev + 1);
    window.scrollTo(0, 0);
  };

  const handlePrevStep = () => {
    setCurrentStep(prev => prev - 1);
    window.scrollTo(0, 0);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onComplete();
  };
  
  // Format helpers
  const formatCPF = (value: string) => {
    const numbers = value.replace(/\D/g, '');
    return numbers
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d{1,2})/, '$1-$2')
      .replace(/(-\d{2})\d+?$/, '$1');
  };

  const formatPhone = (value: string) => {
    const numbers = value.replace(/\D/g, '');
    return numbers
      .replace(/(\d{2})(\d)/, '($1) $2')
      .replace(/(\d{5})(\d)/, '$1-$2')
      .replace(/(-\d{4})\d+?$/, '$1');
  };

  const formatCEP = (value: string) => {
    const numbers = value.replace(/\D/g, '');
    return numbers.replace(/(\d{5})(\d)/, '$1-$2').replace(/(-\d{3})\d+?$/, '$1');
  };

  const formatCardDigits = (value: string) => {
    const numbers = value.replace(/\D/g, '');
    return numbers.slice(0, 4);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex justify-between mb-8">
        <div 
          className={`text-center flex-1 py-2 border-b-2 ${currentStep === 1 ? 'border-credmy-lightBlue text-credmy-blue font-medium' : 'border-gray-300 text-gray-500'}`}
        >
          1. Dados Pessoais
        </div>
        <div 
          className={`text-center flex-1 py-2 border-b-2 ${currentStep === 2 ? 'border-credmy-lightBlue text-credmy-blue font-medium' : 'border-gray-300 text-gray-500'}`}
        >
          2. Endereço
        </div>
        <div 
          className={`text-center flex-1 py-2 border-b-2 ${currentStep === 3 ? 'border-credmy-lightBlue text-credmy-blue font-medium' : 'border-gray-300 text-gray-500'}`}
        >
          3. Proposta
        </div>
        <div 
          className={`text-center flex-1 py-2 border-b-2 ${currentStep === 4 ? 'border-credmy-lightBlue text-credmy-blue font-medium' : 'border-gray-300 text-gray-500'}`}
        >
          4. Cartão
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        {/* Etapa 1: Dados Pessoais */}
        <FormStep isVisible={currentStep === 1}>
          <div className="space-y-6">
            <h2 className="text-xl font-bold text-credmy-blue">Dados Pessoais</h2>
            
            <div className="space-y-4">
              <div className="grid grid-cols-1 gap-4">
                <div>
                  <Label htmlFor="nome">Nome Completo</Label>
                  <Input
                    id="nome"
                    value={formData.nome}
                    onChange={(e) => updateFormData('nome', e.target.value)}
                    required
                    placeholder="Digite seu nome completo"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="cpf">CPF</Label>
                  <Input
                    id="cpf"
                    value={formData.cpf}
                    onChange={(e) => updateFormData('cpf', formatCPF(e.target.value))}
                    required
                    placeholder="000.000.000-00"
                    maxLength={14}
                  />
                </div>

                <div>
                  <Label htmlFor="data">Data de Nascimento</Label>
                  <Input
                    id="data"
                    type="date"
                    value={formData.dataNascimento}
                    onChange={(e) => updateFormData('dataNascimento', e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="email">E-mail</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => updateFormData('email', e.target.value)}
                    required
                    placeholder="seu@email.com"
                  />
                </div>

                <div>
                  <Label htmlFor="telefone">Telefone Celular</Label>
                  <Input
                    id="telefone"
                    value={formData.telefone}
                    onChange={(e) => updateFormData('telefone', formatPhone(e.target.value))}
                    required
                    placeholder="(00) 00000-0000"
                    maxLength={15}
                  />
                </div>
              </div>
            </div>
            
            <div className="flex justify-end mt-8">
              <Button 
                type="button" 
                onClick={handleNextStep}
                className="bg-credmy-lightBlue hover:bg-opacity-90"
              >
                Próximo
              </Button>
            </div>
          </div>
        </FormStep>

        {/* Etapa 2: Endereço */}
        <FormStep isVisible={currentStep === 2}>
          <div className="space-y-6">
            <h2 className="text-xl font-bold text-credmy-blue">Endereço</h2>
            
            <div className="space-y-4">
              <div className="grid grid-cols-3 gap-4">
                <div className="col-span-2">
                  <Label htmlFor="cep">CEP</Label>
                  <Input
                    id="cep"
                    value={formData.cep}
                    onChange={(e) => updateFormData('cep', formatCEP(e.target.value))}
                    required
                    placeholder="00000-000"
                    maxLength={9}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="sm:col-span-2">
                  <Label htmlFor="endereco">Endereço</Label>
                  <Input
                    id="endereco"
                    value={formData.endereco}
                    onChange={(e) => updateFormData('endereco', e.target.value)}
                    required
                    placeholder="Rua, Avenida, etc."
                  />
                </div>

                <div>
                  <Label htmlFor="numero">Número</Label>
                  <Input
                    id="numero"
                    value={formData.numero}
                    onChange={(e) => updateFormData('numero', e.target.value)}
                    required
                    placeholder="Número"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="complemento">Complemento</Label>
                  <Input
                    id="complemento"
                    value={formData.complemento}
                    onChange={(e) => updateFormData('complemento', e.target.value)}
                    placeholder="Apto, Bloco, etc. (opcional)"
                  />
                </div>

                <div>
                  <Label htmlFor="bairro">Bairro</Label>
                  <Input
                    id="bairro"
                    value={formData.bairro}
                    onChange={(e) => updateFormData('bairro', e.target.value)}
                    required
                    placeholder="Bairro"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="cidade">Cidade</Label>
                  <Input
                    id="cidade"
                    value={formData.cidade}
                    onChange={(e) => updateFormData('cidade', e.target.value)}
                    required
                    placeholder="Cidade"
                  />
                </div>

                <div>
                  <Label htmlFor="estado">Estado</Label>
                  <Select 
                    value={formData.estado} 
                    onValueChange={(value) => updateFormData('estado', value)}
                  >
                    <SelectTrigger id="estado">
                      <SelectValue placeholder="Selecione" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="AC">Acre</SelectItem>
                      <SelectItem value="AL">Alagoas</SelectItem>
                      <SelectItem value="AP">Amapá</SelectItem>
                      <SelectItem value="AM">Amazonas</SelectItem>
                      <SelectItem value="BA">Bahia</SelectItem>
                      <SelectItem value="CE">Ceará</SelectItem>
                      <SelectItem value="DF">Distrito Federal</SelectItem>
                      <SelectItem value="ES">Espírito Santo</SelectItem>
                      <SelectItem value="GO">Goiás</SelectItem>
                      <SelectItem value="MA">Maranhão</SelectItem>
                      <SelectItem value="MT">Mato Grosso</SelectItem>
                      <SelectItem value="MS">Mato Grosso do Sul</SelectItem>
                      <SelectItem value="MG">Minas Gerais</SelectItem>
                      <SelectItem value="PA">Pará</SelectItem>
                      <SelectItem value="PB">Paraíba</SelectItem>
                      <SelectItem value="PR">Paraná</SelectItem>
                      <SelectItem value="PE">Pernambuco</SelectItem>
                      <SelectItem value="PI">Piauí</SelectItem>
                      <SelectItem value="RJ">Rio de Janeiro</SelectItem>
                      <SelectItem value="RN">Rio Grande do Norte</SelectItem>
                      <SelectItem value="RS">Rio Grande do Sul</SelectItem>
                      <SelectItem value="RO">Rondônia</SelectItem>
                      <SelectItem value="RR">Roraima</SelectItem>
                      <SelectItem value="SC">Santa Catarina</SelectItem>
                      <SelectItem value="SP">São Paulo</SelectItem>
                      <SelectItem value="SE">Sergipe</SelectItem>
                      <SelectItem value="TO">Tocantins</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="documentoIdentificacao">
                  Documento de Identificação (CNH ou RG)
                </Label>
                <Input
                  id="documentoIdentificacao"
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange('documentoIdentificacao')}
                  required
                />
                <p className="text-xs text-gray-500">
                  Envie uma foto ou escaneamento legível de seu documento (frente e verso)
                </p>
              </div>
            </div>
            
            <div className="flex justify-between mt-8">
              <Button 
                type="button" 
                onClick={handlePrevStep}
                variant="outline"
              >
                Voltar
              </Button>
              <Button 
                type="button" 
                onClick={handleNextStep}
                className="bg-credmy-lightBlue hover:bg-opacity-90"
              >
                Próximo
              </Button>
            </div>
          </div>
        </FormStep>

        {/* Etapa 3: Proposta */}
        <FormStep isVisible={currentStep === 3}>
          <div className="space-y-6">
            <h2 className="text-xl font-bold text-credmy-blue">Dados da Proposta</h2>
            
            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="prazo">Prazo</Label>
                  <Select 
                    value={formData.prazo} 
                    onValueChange={(value) => updateFormData('prazo', value)}
                  >
                    <SelectTrigger id="prazo">
                      <SelectValue placeholder="Selecione o prazo" />
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

                <div>
                  <Label htmlFor="valorSolicitado">Valor Solicitado (R$)</Label>
                  <Input
                    id="valorSolicitado"
                    value={formData.valorSolicitado}
                    onChange={(e) => {
                      const value = e.target.value.replace(/\D/g, '');
                      updateFormData('valorSolicitado', value);
                    }}
                    required
                    placeholder="0,00"
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    Mínimo: R$ 100,00 | Máximo: R$ 10.000,00
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="tipoPix">Tipo de Chave PIX</Label>
                  <Select 
                    value={formData.tipoPix} 
                    onValueChange={(value) => updateFormData('tipoPix', value)}
                  >
                    <SelectTrigger id="tipoPix">
                      <SelectValue placeholder="Selecione o tipo" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="cpf">CPF</SelectItem>
                      <SelectItem value="email">E-mail</SelectItem>
                      <SelectItem value="telefone">Telefone</SelectItem>
                      <SelectItem value="aleatoria">Chave Aleatória</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="chavePix">Chave PIX</Label>
                  <Input
                    id="chavePix"
                    value={formData.chavePix}
                    onChange={(e) => updateFormData('chavePix', e.target.value)}
                    required
                    placeholder="Informe sua chave PIX"
                  />
                </div>
              </div>
            </div>
            
            <div className="flex justify-between mt-8">
              <Button 
                type="button" 
                onClick={handlePrevStep}
                variant="outline"
              >
                Voltar
              </Button>
              <Button 
                type="button" 
                onClick={handleNextStep}
                className="bg-credmy-lightBlue hover:bg-opacity-90"
              >
                Próximo
              </Button>
            </div>
          </div>
        </FormStep>

        {/* Etapa 4: Cartão */}
        <FormStep isVisible={currentStep === 4}>
          <div className="space-y-6">
            <h2 className="text-xl font-bold text-credmy-blue">Dados do Cartão de Crédito</h2>
            
            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="ultimosDigitos">4 últimos dígitos do cartão</Label>
                  <Input
                    id="ultimosDigitos"
                    value={formData.ultimosDigitos}
                    onChange={(e) => updateFormData('ultimosDigitos', formatCardDigits(e.target.value))}
                    required
                    placeholder="0000"
                    maxLength={4}
                  />
                </div>

                <div>
                  <Label htmlFor="nomeCartao">Nome no Cartão</Label>
                  <Input
                    id="nomeCartao"
                    value={formData.nomeCartao}
                    onChange={(e) => updateFormData('nomeCartao', e.target.value)}
                    required
                    placeholder="Nome como aparece no cartão"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="fotoCartao">
                  Foto do Cartão (Físico ou Virtual)
                </Label>
                <Input
                  id="fotoCartao"
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange('fotoCartao')}
                  required
                />
                <p className="text-xs text-gray-500">
                  Por razões de segurança, envie uma foto onde apenas os 4 últimos dígitos estejam visíveis. 
                  Cubra os outros números e o código de segurança (CVV).
                </p>
              </div>

              <div className="mt-8 p-4 bg-gray-50 rounded-md">
                <h4 className="font-medium mb-2">Termos e Condições</h4>
                <div className="h-40 overflow-y-auto p-3 bg-white border border-gray-200 rounded-md text-sm text-gray-600 mb-3">
                  <p>Ao clicar em "Concluir Cadastro", você concorda com nossos Termos de Uso e Política de Privacidade. Você autoriza a Credmy a processar seus dados pessoais para fins de análise de crédito e confirma que todas as informações fornecidas são verdadeiras.</p>
                  <br />
                  <p>Você também autoriza a consulta de suas informações em bureaus de crédito, bem como o envio de comunicações relacionadas ao seu cadastro e propostas.</p>
                  <br />
                  <p>A Credmy se compromete a proteger suas informações pessoais de acordo com a Lei Geral de Proteção de Dados (LGPD).</p>
                </div>
              </div>
            </div>
            
            <div className="flex justify-between mt-8">
              <Button 
                type="button" 
                onClick={handlePrevStep}
                variant="outline"
              >
                Voltar
              </Button>
              <Button 
                type="submit" 
                className="bg-credmy-lightBlue hover:bg-opacity-90"
              >
                Concluir Cadastro
              </Button>
            </div>
          </div>
        </FormStep>
      </form>
    </div>
  );
};

export default RegistrationForm;
