import loginImg from "../assets/topsapp_icon.png";

function Login() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 h-screen w-full">
      <div className="flex flex-col justify-center">
        <div className="flex flex-col justify-center align-itens-center mb-14">
          <h1 className="text-2xl text-gray-100 text-center font-semibold">
            Documentations Querys 💻
          </h1>
          <form className="max-h-[400px] w-full mx-auto bg-gray-100 p-8 rounded-lg">
            <h2 className="text-2xl dark:text-white font-bold text-center">Login</h2>
          </form>
        </div>
      </div>
      <div className="sm:flex hidden justify-center items-center">
        <img
          className="w-full h-screen object-cover"
          src={loginImg}
          alt="TopSapp"
        />
      </div>
    </div>
  );
}

export default Login;
