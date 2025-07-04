import { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Separator } from './ui/separator';
import { Badge } from './ui/badge';
import { Checkbox } from './ui/checkbox';
import { Check, CreditCard, Shield, X } from 'lucide-react';
import { CEPSearch, Address } from './CEPSearch';

export default function CheckoutPage() {
  const [cpfCnpj, setCpfCnpj] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvc, setCvc] = useState('');
  const [cardholderName, setCardholderName] = useState('');
  const [couponApplied, setCouponApplied] = useState(true);
  const [saveDataForFuture, setSaveDataForFuture] = useState(true);
  const [selectedAddress, setSelectedAddress] = useState<Address | null>(null);

  const handleAddressSelect = (address: Address | null) => {
    setSelectedAddress(address);
  };

  const removeCoupon = () => {
    setCouponApplied(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Processing purchase...', {
      cpfCnpj,
      selectedAddress,
      cardDetails: { cardNumber, expiryDate, cvc, cardholderName },
      saveDataForFuture
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-md mx-auto bg-white min-h-screen">
        {/* Header */}
        <div className="p-6 border-b border-gray-100">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
              <div className="w-4 h-4 border-2 border-white rounded-sm"></div>
            </div>
            <span className="text-xl font-semibold text-gray-900">MULTI BPO</span>
          </div>
          
          <div className="space-y-2">
            <h1 className="text-lg font-medium text-gray-900">Assinar Plano Premium</h1>
            <div className="flex items-baseline gap-2">
              <span className="text-sm text-gray-500 line-through">R$ 199.90</span>
              <span className="text-2xl font-bold text-green-600">R$ 99.90</span>
              <span className="text-sm text-gray-500">por mês</span>
            </div>
          </div>
        </div>

        {/* Plan Details */}
        <div className="p-6 border-b border-gray-100">
          <Card className="border-0 shadow-none bg-blue-50">
            <CardContent className="p-4">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Shield className="w-3 h-3 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900 mb-1">Plano Premium</h3>
                  <p className="text-sm text-gray-600">
                    Acesso completo à consultoria com IA da Multi BPO
                  </p>
                  <p className="text-sm text-gray-500 mt-1">Cobrança mensal</p>
                  <div className="flex items-center gap-1 mt-2">
                    <span className="text-sm font-medium text-blue-600">R$ 199.90</span>
                    <span className="text-sm text-gray-500">/ mês</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {/* CPF/CNPJ */}
          <div className="space-y-2">
            <Label htmlFor="cpf-cnpj" className="text-sm font-medium text-gray-700">
              CPF / CNPJ
            </Label>
            <Input
              id="cpf-cnpj"
              type="text"
              placeholder="Digite seu CPF ou CNPJ"
              value={cpfCnpj}
              onChange={(e) => setCpfCnpj(e.target.value)}
              className="h-12"
            />
          </div>

          {/* CEP Search Component */}
          <CEPSearch 
            onAddressSelect={handleAddressSelect}
            label="Endereço de Cobrança"
            placeholder="Digite seu CEP"
          />

          {/* Payment Method */}
          <div className="space-y-2">
            <Label className="text-sm font-medium text-gray-700">
              Forma de Pagamento
            </Label>
            <Select defaultValue="card">
              <SelectTrigger className="h-12">
                <div className="flex items-center gap-2">
                  <CreditCard className="w-4 h-4 text-gray-500" />
                  <SelectValue />
                </div>
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="card">Cartão</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Card Details */}
          <div className="space-y-4">
            <h3 className="text-sm font-medium text-gray-700">Dados do cartão</h3>
            
            <div className="space-y-2">
              <Input
                type="text"
                placeholder="1234 1234 1234 1234"
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
                className="h-12"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <Input
                type="text"
                placeholder="MM / AA"
                value={expiryDate}
                onChange={(e) => setExpiryDate(e.target.value)}
                className="h-12"
              />
              <Input
                type="text"
                placeholder="CVC"
                value={cvc}
                onChange={(e) => setCvc(e.target.value)}
                className="h-12"
              />
            </div>

            <div className="space-y-2">
              <Label className="text-sm font-medium text-gray-700">
                Nome do titular do cartão
              </Label>
              <Input
                type="text"
                placeholder="Nome completo"
                value={cardholderName}
                onChange={(e) => setCardholderName(e.target.value)}
                className="h-12"
              />
            </div>
          </div>

          {/* Save Data Checkbox */}
          <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg border border-gray-200">
            <Checkbox
              id="save-data"
              checked={saveDataForFuture}
              onCheckedChange={(checked) => setSaveDataForFuture(checked as boolean)}
              className="mt-1"
            />
            <div className="flex-1">
              <Label
                htmlFor="save-data"
                className="text-sm font-medium text-gray-700 cursor-pointer"
              >
                Usar dados nas próximas compras
              </Label>
              <p className="text-xs text-gray-500 mt-1">
                Seus dados de pagamento e endereço serão salvos com segurança para facilitar futuras compras.
              </p>
            </div>
          </div>
        </form>

        {/* Purchase Summary */}
        <div className="p-6 border-t border-gray-100">
          <Card className="border-0 shadow-none bg-gray-50">
            <CardHeader className="pb-3">
              <CardTitle className="text-base">Resumo da Compra</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Valor:</span>
                <span className="text-sm font-medium">R$ 199.90 / mês</span>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Cupom (QUEROAGORA):</span>
                <span className="text-sm font-medium text-green-600">- R$ 100.00 / mês</span>
              </div>
              
              <Separator />
              
              <div className="flex justify-between items-center">
                <span className="font-medium">Total:</span>
                <span className="text-lg font-bold text-green-600">R$ 99.90 / mês</span>
              </div>
            </CardContent>
          </Card>

          {/* Applied Coupon */}
          {couponApplied && (
            <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-600" />
                  <div>
                    <span className="text-sm font-medium text-green-800">
                      Cupom aplicado: QUEROAGORA
                    </span>
                    <p className="text-xs text-green-600">Desconto de 50%</p>
                  </div>
                </div>
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  onClick={removeCoupon}
                  className="text-red-600 hover:text-red-700 hover:bg-red-50 h-8 px-2"
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>
            </div>
          )}

          {/* Purchase Button */}
          <Button 
            type="submit" 
            className="w-full h-12 mt-6 bg-blue-600 hover:bg-blue-700"
            onClick={handleSubmit}
          >
            Finalizar Compra
          </Button>

          {/* Security Badge */}
          <div className="flex items-center justify-center gap-2 mt-4">
            <Shield className="w-4 h-4 text-gray-400" />
            <span className="text-xs text-gray-500">Pagamento seguro e protegido</span>
          </div>
        </div>
      </div>
    </div>
  );
}