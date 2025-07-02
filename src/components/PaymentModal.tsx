import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog, DialogPortal } from "@/components/ui/dialog";
import { Checkbox } from "@/components/ui/checkbox";
import { X, CreditCard, DollarSign, Smartphone } from "lucide-react";
import * as DialogPrimitive from "@radix-ui/react-dialog";

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  planName?: string;
  planPrice?: number;
  planDescription?: string;
}

const PaymentModal = ({
  isOpen,
  onClose,
  planName = "Pro 1",
  planPrice = 25.0,
  planDescription = "Lovable Pro 1 Monthly subscription",
}: PaymentModalProps) => {
  const [email, setEmail] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("credit-card");
  const [saveInfo, setSaveInfo] = useState(false);

  const handlePayment = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Processando pagamento:", { email, paymentMethod });
  };

  const subtotal = planPrice;
  const tax = 0.0;
  const total = subtotal + tax;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogPortal>
        {/* Overlay customizado com z-index maior que o header */}
        <div className="fixed inset-0 z-[1050] bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />

        <DialogPrimitive.Content className="fixed left-[50%] top-[50%] z-[1100] grid w-[calc(100vw-2rem)] max-w-md md:max-w-5xl min-[1200px]:max-w-6xl translate-x-[-50%] translate-y-[-50%] py-6 md:py-0 gap-0 bg-white overflow-hidden border-none rounded-xl shadow-2xl duration-200 max-h-[90vh] md:max-h-[80vh] data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%]">
          {/* Botão fechar */}
          <DialogPrimitive.Close className="absolute right-4 top-4 z-10 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
            <X className="w-5 h-5 text-gray-500" />
            <span className="sr-only">Close</span>
          </DialogPrimitive.Close>

          <div className="flex flex-col md:flex-row min-h-[500px] md:min-h-[600px] overflow-y-auto">
            {/* Lado esquerdo - Resumo do Plano */}
            <div className="flex-1 bg-gray-900 text-white p-6 md:p-10 lg:p-12 flex flex-col justify-between">
              {/* Logo */}
              <div className="flex justify-start mb-6">
                <img
                  src="/lovable-uploads/logo.png"
                  alt="MULTI BPO"
                  className="h-8 w-auto filter brightness-0 invert"
                />
              </div>

              {/* Plano Info */}
              <div className="flex-1">
                <div className="mb-6">
                  <h2 className="text-sm text-gray-400 mb-1">
                    Assinar {planName}
                  </h2>
                  <div className="text-3xl font-bold mb-1">
                    R$ {planPrice.toFixed(2)}
                    <span className="text-sm font-normal text-gray-400 ml-1">
                      por mês
                    </span>
                  </div>
                </div>

                {/* Detalhes do plano */}
                <div className="space-y-4 mb-8">
                  <div className="flex justify-between items-center py-2">
                    <div>
                      <div className="text-sm font-medium">{planName}</div>
                      <div className="text-xs text-gray-400">
                        {planDescription}
                      </div>
                      <div className="text-xs text-gray-400">
                        Cobrança mensal
                      </div>
                    </div>
                    <div className="text-sm">R$ {planPrice.toFixed(2)}</div>
                  </div>

                  <hr className="border-gray-700" />

                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Subtotal</span>
                      <span>R$ {subtotal.toFixed(2)}</span>
                    </div>

                    <div className="mb-4">
                      <div className="text-sm text-gray-400 mb-1">
                        Adicionar código promocional
                      </div>
                    </div>

                    <div className="flex justify-between text-sm">
                      <span className="flex items-center">
                        Imposto
                        <span className="ml-1 text-gray-400">ⓘ</span>
                      </span>
                      <span>R$ {tax.toFixed(2)}</span>
                    </div>

                    <hr className="border-gray-700" />

                    <div className="flex justify-between font-bold text-lg">
                      <span>Total devido hoje</span>
                      <span>R$ {total.toFixed(2)}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Lado direito - Formulário de Pagamento */}
            <div className="flex-1 flex flex-col justify-center p-4 md:p-10 lg:p-12 relative">
              <div className="w-full max-w-sm mx-auto">
                {/* Título */}
                <div className="mb-6 md:mb-8">
                  <h1 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
                    Dados para contato
                  </h1>
                </div>

                {/* Formulário */}
                <form
                  onSubmit={handlePayment}
                  className="space-y-4 md:space-y-6"
                >
                  {/* Campo Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      E-mail
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="seu.email@exemplo.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="h-11 md:h-12 text-sm md:text-base border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                      required
                    />
                  </div>

                  {/* Forma de pagamento */}
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-4">
                      Forma de pagamento
                    </h3>

                    <div className="space-y-3">
                      {/* Cartão de Crédito */}
                      <label className="flex items-center p-4 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
                        <input
                          type="radio"
                          name="payment"
                          value="credit-card"
                          checked={paymentMethod === "credit-card"}
                          onChange={(e) => setPaymentMethod(e.target.value)}
                          className="sr-only"
                        />
                        <div
                          className={`w-4 h-4 rounded-full border-2 mr-3 ${
                            paymentMethod === "credit-card"
                              ? "bg-blue-600 border-blue-600"
                              : "border-gray-300"
                          }`}
                        >
                          {paymentMethod === "credit-card" && (
                            <div className="w-2 h-2 bg-white rounded-full mx-auto mt-0.5"></div>
                          )}
                        </div>
                        <CreditCard className="w-5 h-5 mr-3 text-gray-600" />
                        <span className="flex-1 text-sm font-medium">
                          Cartão
                        </span>
                        <div className="flex space-x-1">
                          <div className="w-8 h-5 bg-blue-600 rounded text-white text-xs flex items-center justify-center">
                            VISA
                          </div>
                          <div className="w-8 h-5 bg-red-600 rounded text-white text-xs flex items-center justify-center">
                            MC
                          </div>
                          <div className="w-8 h-5 bg-blue-800 rounded text-white text-xs flex items-center justify-center">
                            AE
                          </div>
                        </div>
                      </label>

                      {/* PIX */}
                      <label className="flex items-center p-4 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
                        <input
                          type="radio"
                          name="payment"
                          value="pix"
                          checked={paymentMethod === "pix"}
                          onChange={(e) => setPaymentMethod(e.target.value)}
                          className="sr-only"
                        />
                        <div
                          className={`w-4 h-4 rounded-full border-2 mr-3 ${
                            paymentMethod === "pix"
                              ? "bg-blue-600 border-blue-600"
                              : "border-gray-300"
                          }`}
                        >
                          {paymentMethod === "pix" && (
                            <div className="w-2 h-2 bg-white rounded-full mx-auto mt-0.5"></div>
                          )}
                        </div>
                        <DollarSign className="w-5 h-5 mr-3 text-green-600" />
                        <span className="text-sm font-medium">PIX</span>
                      </label>

                      {/* Boleto */}
                      <label className="flex items-center p-4 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
                        <input
                          type="radio"
                          name="payment"
                          value="boleto"
                          checked={paymentMethod === "boleto"}
                          onChange={(e) => setPaymentMethod(e.target.value)}
                          className="sr-only"
                        />
                        <div
                          className={`w-4 h-4 rounded-full border-2 mr-3 ${
                            paymentMethod === "boleto"
                              ? "bg-blue-600 border-blue-600"
                              : "border-gray-300"
                          }`}
                        >
                          {paymentMethod === "boleto" && (
                            <div className="w-2 h-2 bg-white rounded-full mx-auto mt-0.5"></div>
                          )}
                        </div>
                        <Smartphone className="w-5 h-5 mr-3 text-orange-500" />
                        <span className="text-sm font-medium">Boleto</span>
                      </label>
                    </div>
                  </div>

                  {/* Checkbox salvar informações */}
                  <div className="flex items-start space-x-2 p-4 bg-gray-50 rounded-lg">
                    <Checkbox
                      id="save-info"
                      checked={saveInfo}
                      onCheckedChange={(checked) =>
                        setSaveInfo(checked as boolean)
                      }
                      className="mt-0.5"
                    />
                    <label
                      htmlFor="save-info"
                      className="text-sm text-gray-600 leading-relaxed"
                    >
                      <span className="font-medium">
                        Salvar minhas informações para um checkout mais rápido
                      </span>
                      <br />
                      <span className="text-xs">
                        Pague mais rápido em Multi BPO e tenha acesso facilitado
                        aos nossos serviços.
                      </span>
                    </label>
                  </div>

                  {/* Botão Assinar */}
                  <Button
                    type="submit"
                    className="w-full h-12 text-base font-medium bg-green-600 hover:bg-green-700 text-white transition-all duration-200 rounded-lg"
                  >
                    Assinar
                  </Button>

                  {/* Texto de confirmação */}
                  <div className="text-center pt-2">
                    <p className="text-xs text-gray-500 leading-relaxed">
                      Ao confirmar sua assinatura, você permite que Multi BPO
                      cobre você por referência a pagamentos futuros em
                      conformidade com os termos da empresa. Você pode cancelar
                      a assinatura quando quiser.
                    </p>
                  </div>

                  {/* Footer powered by */}
                  <div className="text-center pt-4 border-t border-gray-200">
                    <p className="text-xs text-gray-400">
                      Powered by <span className="font-medium">stripe</span> |
                      <span className="ml-1 underline cursor-pointer hover:text-gray-600">
                        Termos
                      </span>{" "}
                      |
                      <span className="ml-1 underline cursor-pointer hover:text-gray-600">
                        Privacidade
                      </span>
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </DialogPrimitive.Content>
      </DialogPortal>
    </Dialog>
  );
};

export default PaymentModal;
