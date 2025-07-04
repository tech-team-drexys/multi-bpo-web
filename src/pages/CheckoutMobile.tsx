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
import {
  ChevronDown,
  ChevronUp,
  CreditCard,
  Ticket,
  Check,
  AlertCircle,
  Shield,
  Diamond,
  Crown,
  Star,
} from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

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
  const [appliedCoupon, setAppliedCoupon] = useState<string | null>(null);
  const [couponDiscount, setCouponDiscount] = useState(0);
  const [couponStatus, setCouponStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [couponMessage, setCouponMessage] = useState("");

  // Estados para controlar qual seção está aberta (apenas uma por vez)
  const [openSection, setOpenSection] = useState<string | null>(null);

  // Novo estado para endereços mockados e seleção
  const [enderecos, setEnderecos] = useState<any[]>([]);
  const [enderecoSelecionado, setEnderecoSelecionado] = useState<number | null>(
    null
  );

  // Cupons válidos (em produção, isso viria de uma API)
  const validCoupons = {
    QUEROAGORA: { discount: 100, description: "Desconto de 50%" },
    SPECIAL25: { discount: 25, description: "Desconto de R$ 25,00" },
    // Adicione novos cupons aqui:
    // NOVO50: { discount: 50, description: "Desconto de R$ 50,00" },
    // BLACKFRIDAY: { discount: 75, description: "Desconto de R$ 75,00" },
  };

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  // Função para aplicar cupom
  const applyCoupon = () => {
    if (!coupon.trim()) {
      setCouponStatus("error");
      setCouponMessage("Digite um cupom válido");
      return;
    }

    setCouponStatus("loading");

    // Simula uma chamada de API
    setTimeout(() => {
      const upperCoupon = coupon.trim().toUpperCase();
      const couponData = validCoupons[upperCoupon as keyof typeof validCoupons];

      if (couponData) {
        setAppliedCoupon(upperCoupon);
        setCouponDiscount(couponData.discount);
        setCouponStatus("success");
        setCouponMessage(couponData.description);
        setCoupon(""); // Limpa o campo
      } else {
        setCouponStatus("error");
        setCouponMessage("Cupom inválido ou expirado");
      }
    }, 1000);
  };

  // Função para remover cupom
  const removeCoupon = () => {
    setAppliedCoupon(null);
    setCouponDiscount(0);
    setCouponStatus("idle");
    setCouponMessage("");
  };

  // Calcula o total com base no cupom aplicado
  const total = originalPrice - (appliedCoupon ? couponDiscount : 0);

  // Função mock para buscar endereços pelo CEP
  const buscarEnderecosPorCep = () => {
    // Exemplo de mock: sempre retorna 3 endereços para qualquer CEP
    setEnderecos([
      {
        id: 1,
        rua: "Rua das Flores, 123",
        bairro: "Centro",
        cidade: "São Paulo",
        estado: "SP",
        cep: cep || "55555-555",
      },
      {
        id: 2,
        rua: "Rua das Flores, 456",
        bairro: "Centro",
        cidade: "São Paulo",
        estado: "SP",
        cep: cep || "55555-555",
        complemento: "Apt 201",
      },
      {
        id: 3,
        rua: "Rua das Flores, 789",
        bairro: "Centro",
        cidade: "São Paulo",
        estado: "SP",
        cep: cep || "55555-555",
      },
    ]);
    setEnderecoSelecionado(1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Checkout:", {
      cpfCnpj,
      cardNumber,
      cardName,
      cardExpiry,
      cardCvv,
      address: { cep, street, number, complement, neighborhood, city, state },
      appliedCoupon,
      couponDiscount,
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
            <div className="font-bold">
              <div className="flex items-center mb-4">
                <div
                  className={`${
                    appliedCoupon
                      ? "line-through text-gray-700 text-xl"
                      : "text-gray-800 text-4xl"
                  }`}
                >
                  R$ {originalPrice.toFixed(2)}
                  {!appliedCoupon && (
                    <span className="text-sm font-normal text-gray-400 ml-1">
                      por mês
                    </span>
                  )}
                </div>
                {appliedCoupon && (
                  <div className="text-3xl font-bold text-green-500 ml-4">
                    R$ {total.toFixed(2)}
                    <span className="text-sm font-normal text-green-500 ml-1">
                      por mês
                    </span>
                  </div>
                )}
              </div>
            </div>

            {/* Detalhes do plano */}
            <div className="border-0 shadow-none bg-blue-50 rounded-md">
              <div className="p-5">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Crown className="w-3 h-3 text-blue-600" />
                  </div>
                  <div className="w-full">
                    <h3 className="font-medium text-gray-900 mb-1">
                      {planName}
                    </h3>
                    <div className="flex items-start justify-between gap-10">
                      <div>
                        <p className="text-sm text-gray-600">
                          {planDescription}
                        </p>
                      </div>

                      <p className="text-sm font-medium text-blue-600 whitespace-nowrap">
                        R$ {originalPrice.toFixed(2)} / mês
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardHeader>

          {/* Formulário de checkout */}
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

                {/* Endereço de Cobrança - CEP */}
                <div>
                  <label
                    htmlFor="cep"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Endereço de Cobrança
                  </label>
                  <div className="flex items-center w-full">
                    <Input
                      id="cep"
                      type="text"
                      placeholder="Digite seu CEP"
                      value={cep}
                      onChange={(e) => setCep(e.target.value)}
                      className="h-11 md:h-12 text-sm md:text-base border-gray-300 focus:border-blue-500 focus:ring-blue-500 pr-12"
                      style={{ borderRadius: 8 }}
                    />
                    <div className="ml-2">
                      <Button
                        type="button"
                        className="h-11 md:h-12 w-11 min-w-0 px-0 border border-gray-200 flex items-center justify-center bg-white hover:bg-gray-100"
                        style={{ borderRadius: 8 }}
                        onClick={buscarEnderecosPorCep}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-gray-500"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.5 4.5a7.5 7.5 0 0012.15 12.15z"
                          />
                        </svg>
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Lista de endereços encontrados */}
                {enderecos.length > 0 && (
                  <div className="mt-4">
                    <div className="text-sm text-gray-700 mb-2">
                      Selecione seu endereço:
                    </div>
                    <div className="flex flex-col gap-3 max-h-64 overflow-y-auto">
                      {enderecos.map((end, idx) => (
                        <label
                          key={end.id}
                          className={
                            `flex items-start gap-3 p-4 rounded-xl cursor-pointer transition-shadow hover:shadow-sm ` +
                            (enderecoSelecionado === end.id
                              ? "border border-blue-600 bg-blue-50"
                              : "border border-gray-200 bg-white")
                          }
                        >
                          <input
                            type="radio"
                            name="endereco"
                            checked={enderecoSelecionado === end.id}
                            onChange={() => setEnderecoSelecionado(end.id)}
                            className="mt-1 accent-blue-500"
                          />
                          <div>
                            <div className="font-medium text-gray-900">
                              {end.rua}
                            </div>
                            <div className="text-xs text-gray-700">
                              {end.bairro}, {end.cidade} - {end.estado}
                            </div>
                            <div className="text-xs text-gray-500">
                              CEP: {end.cep}
                            </div>
                            {end.complemento && (
                              <div className="text-xs text-gray-500">
                                {end.complemento}
                              </div>
                            )}
                          </div>
                        </label>
                      ))}
                    </div>
                  </div>
                )}

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

                {/* Seção Endereço (Desativado) */}
                {/* <Collapsible
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
                </Collapsible> */}

                {/* Salvar dados para futuras compras */}
                <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg border border-gray-200">
                  <Checkbox id="save-data" className="mt-1" />
                  <div className="flex-1">
                    <Label
                      htmlFor="save-data"
                      className="text-sm font-medium text-gray-700 cursor-pointer"
                    >
                      Usar dados nas próximas compras
                    </Label>
                    <p className="text-xs text-gray-500 mt-1">
                      Seus dados de pagamento e endereço serão salvos com
                      segurança para facilitar futuras compras.
                    </p>
                  </div>
                </div>

                {/* Resumo da Compra */}
                <div className="border-0 shadow-none bg-gray-50 p-6 rounded-2xl">
                  <div className="pb-6">
                    <p className="text-base font-medium">Resumo da Compra</p>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Valor:</span>
                      <span className="text-sm font-medium">
                        R$ {originalPrice.toFixed(2)}
                        <span className="text-sm font-thin text-gray-500 ml-1">
                          / mês
                        </span>
                      </span>
                    </div>

                    {appliedCoupon && (
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">
                          Cupom ({appliedCoupon}):
                        </span>
                        <span className="text-sm font-medium text-green-600">
                          - R$ {couponDiscount.toFixed(2)}
                          <span className="text-sm font-thin text-green-500 ml-1">
                            / mês
                          </span>
                        </span>
                      </div>
                    )}

                    <Separator />

                    <div className="flex justify-between items-center">
                      <span className="font-medium">Total:</span>
                      <span className="text-lg text-gray-800">
                        R$ {total.toFixed(2)}
                        <span className="text-sm font-thin text-gray-500 ml-1">
                          / mês
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Campo Cupom de Desconto */}
              <div className="flex flex-col gap-4 pt-6">
                {!appliedCoupon ? (
                  <div className="space-y-3">
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
                        onKeyPress={(e) => e.key === "Enter" && applyCoupon()}
                        className="h-12 text-base bg-white border-gray-300 hover:bg-gray-50 focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-colors !focus:outline-none !outline-none text-center pr-20"
                        disabled={couponStatus === "loading"}
                      />
                      <Button
                        type="button"
                        onClick={applyCoupon}
                        disabled={couponStatus === "loading" || !coupon.trim()}
                        className="absolute right-2 top-1/2 transform -translate-y-1/2 h-8 px-3 text-sm bg-blue-600 hover:bg-blue-700 text-white disabled:bg-gray-300 disabled:cursor-not-allowed"
                      >
                        {couponStatus === "loading"
                          ? "Aplicando..."
                          : "Aplicar"}
                      </Button>
                    </div>

                    {/* Mensagem de status do cupom */}
                    {couponStatus === "success" && (
                      <div className="flex items-center gap-2 text-sm text-green-600 bg-green-50 p-3 rounded-lg">
                        <Check className="w-4 h-4" />
                        {couponMessage}
                      </div>
                    )}

                    {couponStatus === "error" && (
                      <div className="flex items-center gap-2 text-sm text-red-600 bg-red-50 p-3 rounded-lg">
                        <AlertCircle className="w-4 h-4" />
                        {couponMessage}
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="flex items-center justify-between bg-green-50 p-4 rounded-lg border border-green-200">
                    <div className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-green-600" />
                      <div>
                        <div className="text-sm font-medium text-green-800">
                          Cupom aplicado: {appliedCoupon}
                        </div>
                        <div className="text-xs text-green-600">
                          {couponMessage}
                        </div>
                      </div>
                    </div>
                    <Button
                      type="button"
                      onClick={removeCoupon}
                      variant="outline"
                      size="sm"
                      className="text-red-600 border-red-300 hover:bg-red-50"
                    >
                      Remover
                    </Button>
                  </div>
                )}

                {/* Botão Continuar */}
                <Button
                  type="submit"
                  className="w-full h-12 text-base font-medium bg-blue-600 hover:bg-blue-700 active:bg-blue-800 active:scale-[.99] text-white transition-all duration-150"
                >
                  Finalizar Compra
                </Button>
              </div>
            </form>
            <div className="flex items-center justify-center gap-2 mt-5">
              <Shield className="w-4 h-4 text-gray-400" />
              <span className="text-xs font-thin text-gray-500">
                Pagamento seguro e protegido
              </span>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CheckoutMobile;
export type { CheckoutMobileProps };
