import React, { useState } from "react";
import imgTopSapp from "../assets/login_03.png";
import bgVideo from "../assets/video_bg.mp4";

function Login() {
  // Estados para controlar a exibição dos formulários e os dados de entrada
  const [displayLogin, setDisplayLogin] = useState(true); // Controla a exibição do formulário de login
  const [displaySignUp, setDisplaySignUp] = useState(false); // Controla a exibição do formulário de criação de conta
  const [loginPasswordInput, setLoginPasswordInput] = useState(""); // Estado para a senha de login
  const [loginEmailInput, setLoginEmailInput] = useState(""); // Estado para o email de login
  const [isLoginFormValid, setIsLoginFormValid] = useState(true); // Estado para validar se o formulário de login é válido

  // Função para alternar para o formulário de criar conta
  const handleDisplayCreateAccount = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();
    // Altera o estado para exibir o formulário de criação de conta e ocultar o formulário de login
    setDisplayLogin(false);
    setDisplaySignUp(true);
  };

  // Função para alternar para o formulário de login
  const handleDisplayLogin = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();
    // Altera o estado para exibir o formulário de login e ocultar o formulário de criação de conta
    setDisplayLogin(true);
    setDisplaySignUp(false);
  };

  // Função para atualizar o estado do email no formulário de login
  const handleLoginInputEmailForm = (
    event: React.FormEvent<HTMLInputElement>
  ) => {
    const eventTarget = event.currentTarget as HTMLInputElement;
    const eventValue = eventTarget.value;
    // Atualiza o estado do email de login com o valor do campo de entrada
    eventValue && setLoginEmailInput(eventValue);
  };

  // Função para atualizar o estado da senha no formulário de login
  const handleLoginInputPasswordForm = (
    event: React.FormEvent<HTMLInputElement>
  ) => {
    const eventTarget = event.currentTarget as HTMLInputElement;
    const eventValue = eventTarget.value;
    // Atualiza o estado da senha de login com o valor do campo de entrada
    eventValue && setLoginPasswordInput(eventValue);
  };

  // Função para evitar o comportamento padrão do formulário ao ser enviado
  const handleExecuteLogin = (
    event: React.MouseEvent<HTMLFormElement, MouseEvent>
  ) => {
    event.preventDefault();
    // Verifica se o email e a senha não estão vazios para determinar se o formulário de login é válido
    loginEmailInput.trim().length > 0 && loginPasswordInput.trim().length > 0
      ? setIsLoginFormValid(true)
      : setIsLoginFormValid(false);

    // Exibe os dados do email e da senha no console (pode ser removido em produção)
    console.log("DADOS DO INPUT", {
      email: loginEmailInput,
      password: loginPasswordInput,
    });

    // Limpa os campos de entrada após o envio do formulário
    setLoginEmailInput("");
    setLoginPasswordInput("");
  };

  return (
    <div className="relative flex justify-center items-center h-screen overflow-hidden px-8 py-12">
      {/* Vídeo de fundo para o componente de login */}
      <video
        autoPlay
        loop
        muted
        className="absolute inset-0 object-cover w-full h-full z-0 filter blur-sm"
      >
        <source src={bgVideo} type="video/mp4" />
      </video>
      {/* Formulário de login */}
      {displayLogin && (
        <form
          onSubmit={handleExecuteLogin} // Manipulador de envio do formulário de login
          className="relative flex flex-col items-center bg-blue-500 p-8 rounded-lg shadow-lg min-w-[400px] z-10"
        >
          {/* Imagem no topo do formulário */}
          <div
            className="bg-cover bg-center h-20 w-60 mb-8"
            style={{
              backgroundImage: `url(${imgTopSapp})`,
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
          {/* Título do formulário */}
          <h2 className="text-2xl text-white mb-4">
            Faça o login em sua conta!
          </h2>
          {/* Campo de entrada para o email */}
          <div className="flex flex-col w-full text-white mb-4">
            <label className="mb-1">Email</label>
            <input
              type="email"
              value={loginEmailInput}
              onChange={handleLoginInputEmailForm} // Manipulador para atualizar o estado do email
              className="rounded-lg mt-2 p-2 border text-gray-900"
              placeholder="Digite seu email!"
            />
          </div>
          {/* Campo de entrada para a senha */}
          <div className="flex flex-col w-full text-white mb-4">
            <label className="mb-1">Senha</label>
            <input
              type="password"
              className="rounded-lg mt-2 p-2 border text-gray-900"
              placeholder="Digite sua senha!"
              value={loginPasswordInput}
              onChange={handleLoginInputPasswordForm} // Manipulador para atualizar o estado da senha
              maxLength={10} // Máximo de 10 caracteres para a senha
              minLength={4} // Mínimo de 4 caracteres para a senha
            />
          </div>
          {/* Botão de envio do formulário */}
          <div className="px-4 py-2 mb-1">
            <button
              type="submit"
              disabled={!isLoginFormValid} // Desabilita o botão se o formulário não for válido
              className={`bg-blue-600 text-white rounded-lg px-4 py-2 hover:bg-blue-700 focus:outline-none focus:ring focus:border-blue-300 font-bold transition duration-300 shadow-lg ${
                isLoginFormValid ? "cursor-pointer" : "cursor-not-allowed"
              } ${
                isLoginFormValid
                  ? "hover:shadow-blue-900"
                  : "disabled:bg-blue-200 disabled:shadow-none"
              } ${!isLoginFormValid && "disabled:shadow-200/50"}`}
            >
              Entrar
            </button>
          </div>
          {/* Botão para alternar para o formulário de criação de conta */}
          <div className="px-4 py-2 mb-1">
            <button
              type="button"
              onClick={(event) => handleDisplayCreateAccount(event)} // Manipulador para alternar para o formulário de criação de conta
              className="bg-blue-600 text-white rounded-lg px-4 py-2 hover:bg-blue-700 focus:outline-none focus:ring focus:border-blue-300 font-bold hover:cursor-pointer transition duration-300 hover:animate-pulse shadow-lg enabled:hover:shadow-blue-900 disabled:bg-blue-200 disabled:shadow-none enabled:shadow-200/50"
            >
              Criar Conta
            </button>
          </div>
        </form>
      )}

      {/* Formulário de criação de conta */}
      {displaySignUp && (
        <form className="relative flex flex-col items-center bg-blue-500 p-8 rounded-lg shadow-lg min-w-[400px] z-10">
          {/* Imagem no topo do formulário */}
          <div
            className="bg-cover bg-center h-20 w-60 mb-8"
            style={{
              backgroundImage: `url(${imgTopSapp})`,
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
          {/* Título do formulário */}
          <h2 className="text-2xl text-white mb-4">Criar Conta</h2>
          {/* Campo de entrada para o email */}
          <div className="flex flex-col w-full text-white mb-4">
            <label className="mb-1">Email</label>
            <input
              type="email"
              className="rounded-lg mt-2 p-2 border text-gray-900"
              placeholder="Cadastre seu email!"
            />
          </div>
          {/* Campo de entrada para a senha */}
          <div className="flex flex-col w-full text-white mb-4">
            <label className="mb-1">Senha</label>
            <input
              type="password"
              className="rounded-lg mt-2 p-2 border text-gray-900"
              placeholder="Cadastre sua senha!"
              maxLength={10} // Máximo de 10 caracteres para a senha
              minLength={4} // Mínimo de 4 caracteres para a senha
            />
          </div>
          {/* Botão para alternar para o formulário de login */}
          <div className="px-4 py-2 mb-1">
            <button
              type="button"
              onClick={(event) => handleDisplayLogin(event)} // Manipulador para alternar para o formulário de login
              className="bg-blue-600 text-white rounded-lg px-4 py-2 hover:bg-blue-700 focus:outline-none focus:ring focus:border-blue-300 font-bold hover:cursor-pointer transition duration-300 shadow-lg enabled:hover:shadow-blue-900 disabled:bg-blue-200 disabled:shadow-none enabled:shadow-200/50"
            >
              Fazer Login
            </button>
          </div>
          {/* Botão de envio do formulário de criação de conta */}
          <div className="px-4 py-2 mb-1">
            <button
              type="submit"
              className="bg-blue-600 text-white rounded-lg px-4 py-2 hover:bg-blue-700 focus:outline-none focus:ring focus:border-blue-300 font-bold hover:cursor-pointer transition duration-300 hover:animate-pulse shadow-lg enabled:hover:shadow-blue-900 disabled:bg-blue-200 disabled:shadow-none enabled:shadow-200/50"
            >
              Criar Conta
            </button>
          </div>
        </form>
      )}
    </div>
  );
}

export default Login;
