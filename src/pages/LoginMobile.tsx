import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Checkbox } from "@/components/ui/checkbox";

const LoginMobile = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleGoogleLogin = () => {
    // Implementar login com Google
    console.log("Login com Google");
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Implementar lógica de login
    console.log("Login:", { email, password });
  };

  return (
    <section className="min-h-screen flex items-center justify-center">
      <div className="w-full min-[480px]:max-w-[26rem]">
        <Card className="min-[480px]:shadow-2xl shadow-none border-none rounded-xl min-[480px]:py-4 px-2 min-[480px]:px-4">
          <CardHeader className="text-center pb-6">
            {/* Logo MULTI BPO */}
            <div className="flex justify-center mb-4">
              <Link to="/">
                <img
                  src="/lovable-uploads/logo.png"
                  alt="MULTI BPO"
                  className="h-8 w-auto"
                />
              </Link>
            </div>

            {/* Título H1 */}
            <h1 className="text-2xl font-bold text-gray-800 text-center">
              Já possui conta?
            </h1>
          </CardHeader>

          <CardContent className="space-y-6">
            {/* Botão Login com Google */}
            <Button
              onClick={handleGoogleLogin}
              variant="outline"
              className="w-full h-12 text-base font-medium text-gray-700 bg-gray-50 border-gray-300 hover:bg-gray-50 active:bg-gray-100 active:scale-[.99] transition-all duration-150"
            >
              <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
              Login com Google
            </Button>

            {/* Separador OR */}
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="bg-white px-4 text-gray-500 font-medium">
                  OU
                </span>
              </div>
            </div>

            {/* Formulário de Login */}
            <form onSubmit={handleLogin} className="space-y-4">
              {/* Campo Login/Email */}
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
                  placeholder="Digite seu e-mail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="h-12 text-base focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-colors !focus:outline-none !outline-none"
                  required
                />
              </div>

              {/* Campo Senha */}
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Senha
                </label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Digite sua senha"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="h-12 text-base focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-colors !focus:outline-none !outline-none"
                  required
                />
              </div>

              <div className="flex justify-between items-center pb-6">
                <div className="flex items-center gap-2">
                  <Checkbox id="terms" />
                  <label htmlFor="terms" className="text-sm text-gray-600">
                    Lembre-se de mim
                  </label>
                </div>

                <a
                  href="/cadastro"
                  className="text-blue-600 hover:underline text-sm"
                >
                  Esqueceu sua senha?
                </a>
              </div>

              {/* Botão Captcha */}
              <Button
                type="button"
                variant="outline"
                className="w-full h-12 text-base font-medium text-gray-700 bg-gray-50 border-gray-300 hover:bg-gray-50 active:bg-gray-100 active:scale-[.99] transition-all duration-150"
              >
                Captcha
              </Button>

              {/* Botão Entrar */}
              <Button
                type="submit"
                className="w-full h-12 text-base font-medium bg-blue-600 hover:bg-blue-700 active:bg-blue-800 active:scale-[.99] text-white transition-all duration-150"
              >
                Entrar
              </Button>
            </form>

            {/* Link para Cadastro */}
            <div className="text-center pt-4">
              <p className="text-sm text-gray-600">
                Não possui conta?{" "}
                <a
                  href="/cadastro"
                  className="text-blue-600 hover:underline font-medium"
                >
                  Cadastre-se aqui
                </a>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default LoginMobile;
