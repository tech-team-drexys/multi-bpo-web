import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Link } from "react-router-dom";
import { ChevronDown, ChevronUp, CreditCard, Ticket } from "lucide-react";

interface CheckoutMobileProps {
  planName?: string;
  planDescription?: string;
  originalPrice?: number;
  discount?: number;
}

const CheckoutMobile = ({
  planName = "Plano Premium",
  planDescription = "Acesso completo à consultoria com IA da Multi BPO",
  originalPrice = 199.9,
  discount = 100.0,
}: CheckoutMobileProps) => {
  const [cpfCnpj, setCpfCnpj] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [cardName, setCardName] = useState("");
  const [cardExpiry, setCardExpiry] = useState("");
  const [cardCvv, setCardCvv] = useState("");
  const [cep, setCep] = useState("");
  const [street, setStreet] = useState("");
  const [number, setNumber] = useState("");
  const [complement, setComplement] = useState("");
  const [neighborhood, setNeighborhood] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [coupon, setCoupon] = useState("");

  // Estados para controlar qual seção está aberta (apenas uma por vez)
  const [openSection, setOpenSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  const total = originalPrice - discount;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Checkout:", {
      cpfCnpj,
      cardNumber,
      cardName,
      cardExpiry,
      cardCvv,
      address: { cep, street, number, complement, neighborhood, city, state },
      coupon,
    });
  };

  return (
    <div className="min-h-screen flex bg-gray-50 min-[580px]:py-4">
      <div className="w-full min-[580px]:max-w-[32rem] min-[580px]:mx-auto flex">
        <Card className="min-[520px]:shadow-2xl shadow-none border-none min-[580px]:rounded-xl rounded-none py-4 px-3 flex flex-col w-full">
          <CardHeader className="pb-7 flex-shrink-0 bg-white text-gray-900 rounded-t-xl -m-3 mb-6 p-6 border-b border-gray-100">
            {/* Logo MULTI BPO */}
            <div className="flex justify-start mb-6">
              <img
                src="/lovable-uploads/logo.png"
                alt="MULTI BPO"
                className="h-8 w-auto"
              />
            </div>

            {/* Assinar Plano Premium */}
            <div className="text-sm text-gray-600 mb-1">Assinar {planName}</div>

            {/* Preço principal */}
            <div className="text-3xl font-bold mb-6">
              R$ {originalPrice.toFixed(2)}
              <span className="text-sm font-normal text-gray-400 ml-1">
                por mês
              </span>
            </div>

            {/* Detalhes do plano */}
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <div>
                  <div className="text-sm font-medium">{planName}</div>
                  <div className="text-xs text-gray-500 mr-2">
                    {planDescription}
                  </div>
                  <div className="text-xs text-gray-400">Cobrança mensal</div>
                </div>
                <div className="text-sm">
                  R$ {originalPrice.toFixed(2)}
                  <span className="text-sm font-normal text-gray-400 ml-1">
                    / mês
                  </span>
                </div>
              </div>
            </div>
          </CardHeader>

          <CardContent className="flex-1 flex flex-col">
            <form
              onSubmit={handleSubmit}
              className="flex-1 flex flex-col justify-between"
            >
              <div className="space-y-4">
                {/* Campo CPF/CNPJ */}
                <div>
                  <label
                    htmlFor="cpfCnpj"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    CPF / CNPJ
                  </label>
                  <Input
                    id="cpfCnpj"
                    type="text"
                    placeholder="Digite seu CPF ou CNPJ"
                    value={cpfCnpj}
                    onChange={(e) => setCpfCnpj(e.target.value)}
                    className="h-11 md:h-12 text-sm md:text-base border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                    required
                  />
                </div>

                {/* Seção Forma de Pagamento */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Forma de Pagamento
                  </label>
                  <Collapsible
                    open={openSection === "card"}
                    onOpenChange={() => toggleSection("card")}
                  >
                    <CollapsibleTrigger asChild>
                      <Button
                        type="button"
                        variant="outline"
                        className="w-full h-12 text-gray-800 text-base font-medium bg-white border-gray-300 hover:bg-gray-50 justify-start gap-3 px-4"
                      >
                        <CreditCard className="w-5 h-5 text-gray-600" />
                        Cartão
                        <div className="ml-auto">
                          {openSection === "card" ? (
                            <ChevronUp className="h-4 w-4" />
                          ) : (
                            <ChevronDown className="h-4 w-4" />
                          )}
                        </div>
                      </Button>
                    </CollapsibleTrigger>
                    <CollapsibleContent className="space-y-4 pt-4">
                      <div className="bg-gray-50 p-4 rounded-lg space-y-4">
                        <h4 className="text-sm font-medium text-gray-700 mb-3">
                          Dados do cartão
                        </h4>

                        <div>
                          <Input
                            id="cardNumber"
                            type="text"
                            placeholder="1234 1234 1234 1234"
                            value={cardNumber}
                            onChange={(e) => setCardNumber(e.target.value)}
                            className="h-12 text-base focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-colors !focus:outline-none !outline-none"
                            required
                          />
                        </div>

                        <div className="grid grid-cols-2 gap-3">
                          <Input
                            id="cardExpiry"
                            type="text"
                            placeholder="MM / AA"
                            value={cardExpiry}
                            onChange={(e) => setCardExpiry(e.target.value)}
                            className="h-12 text-base focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-colors !focus:outline-none !outline-none"
                            required
                          />
                          <Input
                            id="cardCvv"
                            type="text"
                            placeholder="CVC"
                            value={cardCvv}
                            onChange={(e) => setCardCvv(e.target.value)}
                            className="h-12 text-base focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-colors !focus:outline-none !outline-none"
                            required
                          />
                        </div>

                        <div>
                          <label
                            htmlFor="cardName"
                            className="block text-sm font-medium text-gray-700 mb-2"
                          >
                            Nome do titular do cartão
                          </label>
                          <Input
                            id="cardName"
                            type="text"
                            placeholder="Nome completo"
                            value={cardName}
                            onChange={(e) => setCardName(e.target.value)}
                            className="h-12 text-base focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-colors !focus:outline-none !outline-none"
                            required
                          />
                        </div>
                      </div>
                    </CollapsibleContent>
                  </Collapsible>
                </div>

                {/* Seção Endereço */}
                <Collapsible
                  open={openSection === "address"}
                  onOpenChange={() => toggleSection("address")}
                >
                  <CollapsibleTrigger asChild>
                    <Button
                      type="button"
                      variant="outline"
                      className="w-full h-12 text-gray-800 text-base font-medium border-gray-300 hover:bg-gray-100 justify-between"
                    >
                      Endereço de Cobrança
                      {openSection === "address" ? (
                        <ChevronUp className="h-4 w-4" />
                      ) : (
                        <ChevronDown className="h-4 w-4" />
                      )}
                    </Button>
                  </CollapsibleTrigger>
                  <CollapsibleContent className="space-y-4 pt-4">
                    <div>
                      <label
                        htmlFor="cep"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        CEP
                      </label>
                      <Input
                        id="cep"
                        type="text"
                        placeholder="00000-000"
                        value={cep}
                        onChange={(e) => setCep(e.target.value)}
                        className="h-10 text-base focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-colors !focus:outline-none !outline-none"
                        required
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="street"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Endereço
                      </label>
                      <Input
                        id="street"
                        type="text"
                        placeholder="Rua, Avenida, etc."
                        value={street}
                        onChange={(e) => setStreet(e.target.value)}
                        className="h-10 text-base focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-colors !focus:outline-none !outline-none"
                        required
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label
                          htmlFor="number"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Número
                        </label>
                        <Input
                          id="number"
                          type="text"
                          placeholder="123"
                          value={number}
                          onChange={(e) => setNumber(e.target.value)}
                          className="h-10 text-base focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-colors !focus:outline-none !outline-none"
                          required
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="complement"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Complemento
                        </label>
                        <Input
                          id="complement"
                          type="text"
                          placeholder="Apt, Sala, etc."
                          value={complement}
                          onChange={(e) => setComplement(e.target.value)}
                          className="h-10 text-base focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-colors !focus:outline-none !outline-none"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="neighborhood"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Bairro
                      </label>
                      <Input
                        id="neighborhood"
                        type="text"
                        placeholder="Bairro"
                        value={neighborhood}
                        onChange={(e) => setNeighborhood(e.target.value)}
                        className="h-10 text-base focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-colors !focus:outline-none !outline-none"
                        required
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label
                          htmlFor="city"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Cidade
                        </label>
                        <Input
                          id="city"
                          type="text"
                          placeholder="Cidade"
                          value={city}
                          onChange={(e) => setCity(e.target.value)}
                          className="h-10 text-base focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-colors !focus:outline-none !outline-none"
                          required
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="state"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Estado
                        </label>
                        <Input
                          id="state"
                          type="text"
                          placeholder="UF"
                          value={state}
                          onChange={(e) => setState(e.target.value)}
                          className="h-10 text-base focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-colors !focus:outline-none !outline-none"
                          required
                        />
                      </div>
                    </div>
                  </CollapsibleContent>
                </Collapsible>

                {/* Resumo da Compra - Colapsável que abre para cima */}
                {/* Resumo da Compra */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-4">
                    Resumo da Compra
                  </label>
                  <div className="bg-gray-50 p-4 rounded-lg space-y-3 mb-8">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Valor:</span>
                      <span className="font-medium text-gray-700">
                        R$ {originalPrice.toFixed(2)}{" "}
                        <span className="text-sm font-normal text-gray-400 ml-1">
                          / mês
                        </span>
                      </span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Cupom de desconto:</span>
                      <span className="font-medium text-green-600">
                        - R$ {discount.toFixed(2)}
                      </span>
                    </div>
                    <hr className="border-gray-200" />
                    <div className="flex justify-between text-lg font-bold">
                      <span className="text-gray-800">Total:</span>
                      <div>
                        R$ {total.toFixed(2)}
                        <span className="text-sm font-normal text-gray-400 ml-1">
                          / mês
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Campo Cupom de Desconto */}
              <div className="flex flex-col gap-6">
                <div className="relative">
                  <div className="absolute left-4 top-1/2 transform -translate-y-1/2 flex items-center gap-3">
                    <Ticket className="w-5 h-5 text-blue-600" />
                  </div>
                  <Input
                    id="coupon"
                    type="text"
                    placeholder="Cupom de desconto"
                    value={coupon}
                    onChange={(e) => setCoupon(e.target.value)}
                    className="h-12 text-base bg-white border-gray-300 hover:bg-gray-50 focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-colors !focus:outline-none !outline-none text-center"
                  />
                </div>

                {/* Botão Continuar */}
                <Button
                  type="submit"
                  className="w-full h-12 text-base font-medium bg-blue-600 hover:bg-blue-700 active:bg-blue-800 active:scale-[.99] text-white transition-all duration-150"
                >
                  Finalizar Compra
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CheckoutMobile;
export type { CheckoutMobileProps };
