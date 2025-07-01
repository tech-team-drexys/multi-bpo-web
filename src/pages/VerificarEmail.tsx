import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Link, useSearchParams } from "react-router-dom";
import { Mail } from "lucide-react";

const VerificarEmail = () => {
  const [searchParams] = useSearchParams();
  const email = searchParams.get("email") || "seu-email@exemplo.com";
  const handleGoToInbox = () => {
    // Abre o cliente de e-mail padrão
    window.open("mailto:", "_blank");
  };

  return (
    <section className="min-h-screen flex flex-col">
      <div className="flex-1 flex items-center justify-center">
        <div className="w-full min-[480px]:max-w-[26rem]">
          <Card className="min-[480px]:shadow-2xl shadow-none border-none rounded-xl min-[480px]:py-10 min-[480px]:px-10 p-8">
            <CardHeader className="flex flex-col items-center gap-8 text-center p-0 pb-14">
              {/* Logo MULTI BPO - Centralizada */}
              <Link to="/">
                <img
                  src="/lovable-uploads/logo.png"
                  alt="MULTI BPO"
                  className="h-8 w-auto"
                />
              </Link>

              {/* Título */}
              <h1 className="text-2xl font-bold text-gray-800 text-center leading-7">
                Cadastro realizado com sucesso!
              </h1>

              {/* Grupo: Mensagem + E-mail */}
              <div className="flex flex-col gap-1">
                {/* Mensagem inicial */}
                <p className="text-base text-gray-600 text-center">
                  Acesse o email abaixo para confirmar seu cadastro:
                </p>

                {/* E-mail em destaque */}
                <p className="text-base font-semibold text-gray-800 text-center">
                  {email}
                </p>
              </div>

              {/* Ícone de E-mail */}
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                <Mail className="w-8 h-8 text-blue-600" />
              </div>

              {/* Mensagem de instrução */}
              <p className="text-sm text-gray-600 text-center leading-relaxed">
                Clique no link em seu email para validar seu cadastro. Se você
                não encontrar o email, verifique sua{" "}
                <strong>caixa de spam</strong>.
              </p>
            </CardHeader>

            {/* Botão fixo no bottom */}
            <div className="">
              <div className="w-full min-[480px]:max-w-[26rem] mx-auto space-y-4">
                <Button
                  onClick={handleGoToInbox}
                  className="w-full h-12 text-base font-medium bg-blue-600 hover:bg-blue-700 active:bg-blue-800 active:scale-[.99] text-white transition-all duration-150"
                >
                  Ir para caixa de entrada
                </Button>

                {/* Link para reenviar e-mail */}
                <div className="text-center">
                  <p className="text-sm text-gray-600">
                    Não recebeu o e-mail?{" "}
                    <button
                      className="text-blue-600 hover:underline font-medium"
                      onClick={() => console.log("Reenviar e-mail")}
                    >
                      Reenviar
                    </button>
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default VerificarEmail;
