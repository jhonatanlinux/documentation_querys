import React, { useState } from "react";
import imgTopSapp from "../assets/login_03.png";
import bgVideo from "../assets/video_bg.mp4";

function Login() {
  const [displayLogin, setDisplayLogin] = useState(true);
  const [displaySignUp, setDisplaySignUp] = useState(false);

  const handleDisplayCreateAccount = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();

    setDisplayLogin(false);
    setDisplaySignUp(true);
  };

  const handleDisplayLogin = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();

    setDisplayLogin(true);
    setDisplaySignUp(false);
  };

  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const [erroSenha, setErroSenha] = useState('');

  const handleLogin = () => {
    if (senha === confirmarSenha) {
      // Lógica para enviar o formulário
      console.log('Formulário enviado com sucesso!');
    } else {
      setErroSenha('Senha inválida. Por favor, tente novamente.');
    }
  };

  return (
    <div className="relative flex justify-center items-center h-screen overflow-hidden px-8 py-12">
      <video
        autoPlay
        loop
        muted
        className="absolute inset-0 object-cover w-full h-full z-0 filter blur-sm"
      >
        <source src={bgVideo} type="video/mp4" />
      </video>
      {displayLogin && (
        <div className="relative flex flex-col items-center bg-blue-500 p-8 rounded-lg shadow-lg min-w-[400px] z-10">
          <div
            className="bg-cover bg-center h-20 w-60 mb-8"
            style={{
              backgroundImage: `url(${imgTopSapp})`,
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
          <h2 className="text-2xl text-white mb-4">
            Faça o login em sua conta!
          </h2>
          <div className="flex flex-col w-full text-white mb-4">
            <label className="mb-1">Email</label>
            <input
              type="email"
              className="rounded-lg mt-2 p-2 border text-gray-900"
              placeholder="Digite seu email!"
            />
          </div>
          <div className="flex flex-col w-full text-white mb-4">
            <label className="mb-1">Senha</label>
            <input
              type="password"
              className="rounded-lg mt-2 p-2 border text-gray-900"
              placeholder="Digite sua senha!"
              maxLength={10}
              minLength={4}
            />
          </div>
          <div className="px-4 py-2 mb-1">
            <button
              type="submit"
              className="bg-blue-600 text-white rounded-lg px-4 py-2 hover:bg-blue-700 focus:outline-none focus:ring focus:border-blue-300 font-bold hover:cursor-pointer transition duration-300 shadow-lg enabled:hover:shadow-blue-900 disabled:bg-blue-200 disabled:shadow-none enabled:shadow-200/50"
            >
              Entrar
            </button>
          </div>
          <div className="px-4 py-2 mb-1">
            <button
              type="button"
              onClick={(event) => handleDisplayCreateAccount(event)}
              className="bg-blue-600 text-white rounded-lg px-4 py-2 hover:bg-blue-700 focus:outline-none focus:ring focus:border-blue-300 font-bold hover:cursor-pointer transition duration-300 hover:animate-pulse shadow-lg enabled:hover:shadow-blue-900 disabled:bg-blue-200 disabled:shadow-none enabled:shadow-200/50"
            >
              Criar Conta
            </button>
          </div>
        </div>
      )}

      {displaySignUp && (
        <div className="relative flex flex-col items-center bg-blue-500 p-8 rounded-lg shadow-lg min-w-[400px] z-10">
          <div
            className="bg-cover bg-center h-20 w-60 mb-8"
            style={{
              backgroundImage: `url(${imgTopSapp})`,
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
          <h2 className="text-2xl text-white mb-4">Criar Conta</h2>
          <div className="flex flex-col w-full text-white mb-4">
            <label className="mb-1">Email</label>
            <input
              type="email"
              className="rounded-lg mt-2 p-2 border text-gray-900"
              placeholder="Cadastre seu email!"
            />
          </div>
          <div className="flex flex-col w-full text-white mb-4">
            <label className="mb-1">Senha</label>
            <input
              type="password"
              className="rounded-lg mt-2 p-2 border text-gray-900"
              placeholder="Cadastre sua senha!"
              maxLength={10}
              minLength={4}
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
            />
            <label className="mb-1 mt-4">Confirmar Senha</label>
            <input
              type="password"
              className={`rounded-lg mt-2 p-2 border text-gray-900 ${erroSenha ? 'border-red-500' : ''
                }`}
              placeholder="Confirmar sua senha!"
              maxLength={10}
              minLength={4}
              value={confirmarSenha}
              onChange={(e) => {
                setConfirmarSenha(e.target.value);
                setErroSenha(''); // Limpa a mensagem de erro ao digitar
              }}
            />
            {erroSenha && <p className="text-red-500 mt-1 text-center">{erroSenha}</p>}
          </div>
          <div className="px-4 py-2 mb-1">
            <button
              type="button"
              onClick={(event) => handleDisplayLogin(event)}
              className="bg-blue-600 text-white rounded-lg px-4 py-2 hover:bg-blue-700 focus:outline-none focus:ring focus:border-blue-300 font-bold hover:cursor-pointer transition duration-300 shadow-lg enabled:hover:shadow-blue-900 disabled:bg-blue-200 disabled:shadow-none enabled:shadow-200/50"
            >
              Fazer Login
            </button>
          </div>
          <div className="px-4 py-2 mb-1">
            <button
              type="submit"
              className="bg-blue-600 text-white rounded-lg px-4 py-2 hover:bg-blue-700 focus:outline-none focus:ring focus:border-blue-300 font-bold hover:cursor-pointer transition duration-300 hover:animate-pulse shadow-lg enabled:hover:shadow-blue-900 disabled:bg-blue-200 disabled:shadow-none enabled:shadow-200/50"
              onClick={handleLogin}
            >
              Criar Conta
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Login;
