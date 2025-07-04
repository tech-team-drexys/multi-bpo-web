import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  X,
  ChevronDown,
  ChevronUp,
  CreditCard,
  Ticket,
  Check,
  AlertCircle,
} from "lucide-react";

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  planName?: string;
  planDescription?: string;
  originalPrice?: number;
  discount?: number;
}

const PaymentModal = ({
  isOpen,
  onClose,
  planName = "Plano Premium",
  planDescription = "Acesso completo à consultoria com IA da Multi BPO",
  originalPrice = 199.9,
}: PaymentModalProps) => {
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
  const [openSection, setOpenSection] = useState<string | null>("card");
  const [isClosing, setIsClosing] = useState(false);

  // Cupons válidos (em produção, isso viria de uma API)
  const validCoupons = {
    QUEROAGORA: { discount: 100, description: "Desconto de 50%" },
  };

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  const handleClose = () => {
    setIsClosing(true);
    // Aguarda a animação terminar antes de fechar
    setTimeout(() => {
      setIsClosing(false);
      onClose();
    }, 200); // Duração da animação
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

  // Fechar modal com ESC e desabilitar Lenis
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEsc);

      // Desabilitar Lenis smooth scroll se existir
      const lenis = (window as any).lenis;
      if (lenis && typeof lenis.stop === "function") {
        lenis.stop();
      }

      // Lock scroll no body e html
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";

      // Adicionar classe para prevenir scroll em touch devices
      document.body.style.position = "fixed";
      document.body.style.width = "100%";
      document.body.style.height = "100%";

      return () => {
        document.removeEventListener("keydown", handleEsc);

        // Reabilitar Lenis
        if (lenis && typeof lenis.start === "function") {
          lenis.start();
        }

        // Restaurar scroll
        document.body.style.overflow = "";
        document.documentElement.style.overflow = "";
        document.body.style.position = "";
        document.body.style.width = "";
        document.body.style.height = "";
      };
    }

    return () => {
      document.removeEventListener("keydown", handleEsc);
    };
  }, [isOpen, onClose]);

  const handlePayment = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Processando pagamento:", {
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

  // Calcula o total com base no cupom aplicado
  const total = originalPrice - (appliedCoupon ? couponDiscount : 0);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 h-full z-50 flex items-center justify-center"
      onWheel={(e) => e.stopPropagation()}
      onTouchMove={(e) => e.stopPropagation()}
    >
      {/* Overlay */}
      <div
        className={`absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity duration-200 ${
          isClosing ? "opacity-0" : "opacity-100"
        }`}
        onClick={handleClose}
      />

      {/* Modal Container */}
      <div
        className={`relative w-full min-[700px]:max-w-4xl min-[1050px]:max-w-5xl min-[1200px]:max-w-6xl h-full min-[700px]:h-[80vh] bg-white min-[700px]:rounded-xl shadow-2xl transition-all duration-200 ${
          isClosing
            ? "opacity-0 scale-95 translate-y-4"
            : "opacity-100 scale-100 translate-y-0 animate-in fade-in-0 zoom-in-95"
        }`}
        onWheel={(e) => e.stopPropagation()}
        onTouchMove={(e) => e.stopPropagation()}
      >
        {/* Botão fechar */}
        <button
          onClick={handleClose}
          className="absolute right-4 top-4 z-10 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
        >
          <X className="w-5 h-5 text-gray-500" />
          <span className="sr-only">Close</span>
        </button>

        <div className="flex flex-col md:flex-row h-full rounded-xl overflow-hidden">
          {/* Lado esquerdo - Resumo do Plano */}
          <div className="hidden min-[820px]:flex min-[820px]:w-2/5">
            <div className="w-full bg-gray-900 text-white p-6 md:p-10 lg:p-12 flex flex-col justify-between">
              {/* Logo */}
              <div className="flex justify-start mb-6">
                <img
                  src="/lovable-uploads/light-logo.png"
                  alt="MULTI BPO"
                  className="h-8 w-auto"
                />
              </div>

              {/* Plano Info */}
              <div className="flex-1">
                <div className="mb-6">
                  <h2 className="text-sm text-gray-400 mb-1">
                    Assinar {planName}
                  </h2>
                  <div className="font-bold mb-1">
                    <div className="flex items-center gap-3">
                      <div
                        className={`${
                          appliedCoupon
                            ? "line-through text-gray-500 text-xl"
                            : "text-3xl"
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
                        <div className="text-3xl font-bold text-green-400">
                          R$ {total.toFixed(2)}
                          <span className="text-sm font-normal text-green-300 ml-1">
                            por mês
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Detalhes do plano */}
                <div className="space-y-4 mb-8">
                  <div className="flex justify-between items-center py-2">
                    <div>
                      <div className="text-sm font-medium">{planName}</div>
                      <div className="text-xs text-gray-400 mr-2">
                        {planDescription}
                      </div>
                      <div className="text-xs text-gray-400">
                        Cobrança mensal
                      </div>
                    </div>
                    <div className="text-sm">
                      R$ {originalPrice.toFixed(2)}{" "}
                      <span className="text-sm font-normal text-gray-400 ml-1">
                        / mês
                      </span>
                    </div>
                  </div>

                  <hr className="border-gray-700" />

                  <div className="space-y-6">
                    <div className="flex justify-between text-sm">
                      <span>Valor</span>
                      <span>
                        R$ {originalPrice.toFixed(2)}{" "}
                        <span className="text-sm font-normal text-gray-400 ml-1">
                          / mês
                        </span>
                      </span>
                    </div>

                    {appliedCoupon && (
                      <>
                        <div className="flex justify-between text-sm">
                          <span>Cupom ({appliedCoupon})</span>
                          <span className="text-green-300">
                            - R$ {couponDiscount.toFixed(2)}
                            <span className="font-thin text-green-200 ml-1">
                              / mês
                            </span>
                          </span>
                        </div>
                        <hr className="border-gray-700" />
                      </>
                    )}

                    <div className="flex justify-between font-bold text-lg">
                      <span>Total</span>
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
            </div>
          </div>

          {/* Lado direito - Formulário de Checkout */}

          <div className="flex-1 md:min-[820px]:w-3/5 bg-white overflow-y-auto">
            <div className="p-7 md:p-10 lg:p-12">
              {/* Header mobile (só aparece em telas <820px) */}
              <div className="block min-[820px]:hidden pb-7 flex-shrink-0 bg-white text-gray-900 rounded-t-xl -mx-7 -mt-7 mb-6 p-6 border-b border-gray-100">
                {/* Logo MULTI BPO */}
                <div className="flex justify-start mb-6">
                  <img
                    src="/lovable-uploads/logo.png"
                    alt="MULTI BPO"
                    className="h-8 w-auto"
                  />
                </div>
                {/* Assinar Plano Premium */}
                <div className="text-sm text-gray-600 mb-1">
                  Assinar {planName}
                </div>
                {/* Preço principal */}
                <div className="font-bold mb-5 mt-1">
                  <div className="flex items-center gap-3">
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
                      <div className="text-3xl font-bold text-green-500">
                        R$ {total.toFixed(2)}
                        <span className="text-sm font-normal text-green-500 ml-1">
                          por mês
                        </span>
                      </div>
                    )}
                  </div>
                </div>
                {/* Detalhes do plano */}
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="text-sm font-medium">{planName}</div>
                      <div className="text-xs text-gray-500 mr-2">
                        {planDescription}
                      </div>
                      <div className="text-xs text-gray-400">
                        Cobrança mensal
                      </div>
                    </div>
                    <div className="text-sm">
                      R$ {originalPrice.toFixed(2)}
                      <span className="text-sm font-normal text-gray-400 ml-1">
                        / mês
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              {/* Fim do header mobile */}
              <form onSubmit={handlePayment} className="space-y-6">
                {/* Campo CPF/CNPJ */}
                <div>
                  <label
                    htmlFor="cpfCnpj"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    CPF/CNPJ
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
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Forma de pagamento
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
                            className="h-12 text-base focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-colors"
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
                            className="h-12 text-base focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-colors"
                            required
                          />
                          <Input
                            id="cardCvv"
                            type="text"
                            placeholder="CVC"
                            value={cardCvv}
                            onChange={(e) => setCardCvv(e.target.value)}
                            className="h-12 text-base focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-colors"
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
                            className="h-12 text-base focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-colors"
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
                        className="h-10 text-base focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-colors"
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
                        className="h-10 text-base focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-colors"
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
                          className="h-10 text-base focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-colors"
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
                          className="h-10 text-base focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-colors"
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
                        className="h-10 text-base focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-colors"
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
                          className="h-10 text-base focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-colors"
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
                          className="h-10 text-base focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-colors"
                          required
                        />
                      </div>
                    </div>
                  </CollapsibleContent>
                </Collapsible>

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
                    {appliedCoupon && (
                      <>
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-600">
                            Cupom ({appliedCoupon}):
                          </span>
                          <span className="font-medium text-green-500">
                            - R$ {couponDiscount.toFixed(2)}
                            <span className="font-thin text-green-500 ml-1">
                              / mês
                            </span>
                          </span>
                        </div>
                        <hr className="border-gray-200" />
                      </>
                    )}
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

                {/* Campo Cupom de Desconto */}
                <div className="space-y-6">
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
                          className="h-12 text-base bg-white border-gray-300 hover:bg-gray-50 focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-colors text-center pr-20"
                          disabled={couponStatus === "loading"}
                        />
                        <Button
                          type="button"
                          onClick={applyCoupon}
                          disabled={
                            couponStatus === "loading" || !coupon.trim()
                          }
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

                  {/* Botão Finalizar */}
                  <Button
                    type="submit"
                    className="w-full h-12 text-base font-medium bg-blue-600 hover:bg-blue-700 text-white active:scale-[.98] transition-all duration-150"
                  >
                    Finalizar Compra
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentModal;
