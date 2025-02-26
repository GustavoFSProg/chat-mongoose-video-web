import { useState } from "react";
import NavBar from "../../components/Navbar/Navbar";
import api from "../../api";

import userContext from "../../Contexts/userContext";
import { useContext } from "react";

function Login() {
  
  const [email, setEmail] = useState("paula@gmail.com");
  const [password, setPassword] = useState("1234567");
  const { user, setIsSignup, isSignup } = useContext(userContext);

  async function handleSignup(event) {
    event.preventDefault();

    try {
      const dados = {  email: email, password: password };

      setIsSignup(true);

      const {data} = await api.post("/login", dados);

      localStorage.setItem('token', data.token)

      console.log(` Token: ${data.token}`)
      console.log(` Email: ${data.email}`)
      console.log(` Name: ${data.user.fullname}`)

      console.log(isSignup);

      return alert(`Login efetuado  com sucesso!, Olá ${data.user.fullname}`);
    } catch (error) {
      return alert(error);
    }
  }
  return (
    <>
      <NavBar />
      <br />
      <br />
      <br />
      <div className="flex  w-full items-center flex-col justify-center h-auto">
        <h1 className="flex mb-9 h-full w-[80%] text-[28px] items-center justify-center">
        LOGIN DE USUÁRIO
        </h1>

        <form
          onSubmit={handleSignup}
          className="flex w-[47%] flex-col h-auto text-[19px]"
        >
        
          <br />
          <input
            placeholder="Email"
            className="rounded p-3"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />

          <input
            placeholder="Senha"
            className="rounded p-3"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <br />

          <button type="submit" className="btn btn-primary h-12 text-[16px]">
            LOGIN
          </button>
        </form>
      </div>
    </>
  );
}

export default Login;
