import { useState } from "react";
import { Button } from "@/components/ui/button";
import PaymentModal from "./PaymentModal";

const PaymentDemo = () => {
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Demo Modal de Pagamento
        </h1>
        <p className="text-gray-600">
          Clique no botão abaixo para testar o modal de pagamento
        </p>
      </div>

      <Button
        onClick={() => setIsPaymentModalOpen(true)}
        className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 text-lg"
      >
        Abrir Modal de Pagamento
      </Button>

      <PaymentModal
        isOpen={isPaymentModalOpen}
        onClose={() => setIsPaymentModalOpen(false)}
        planName="Plano Premium"
        planPrice={97.9}
        planDescription="Acesso completo aos serviços Multi BPO"
      />
    </div>
  );
};

export default PaymentDemo;
