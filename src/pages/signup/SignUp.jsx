import { useState } from "react";
import NavBar from "../../components/Navbar/Navbar";

import userContext from "../../Contexts/userContext";
import { useContext } from "react";
import api from "../../api";
import toast from "react-hot-toast";

function SignUp(req, res) {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { user, setIsSignup, isSignup } = useContext(userContext);

  async function handleSignup(event) {
    event.preventDefault();

    try {
      const data = { fullname: fullname, email: email, password: password };

      setIsSignup(true);

      const user  = await api.post("/signup", data);

    
      
      console.log(isSignup);
      
      // toast.success("Usuário cadastrado com sucesso!")

    // return user

      return alert("Usuário cadastrado com sucesso!");
    } catch (error) {
      return alert(error);
    }
  }

  return (
    <>
      <NavBar />
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      
      <div className="flex  h-screen w-full items-center flex-col 
       -mt-[180px]
      justify-center ">
        <h1 className="flex 
        -mt-[380px]
        mb-9 h-[100px]] w-[80%] text-[28px]
         items-center
         justify-center">
        CADASTRO DE USUÁRIO
        </h1>
      {/* <div className="flex  w-full items-center flex-col justify-center h-auto"> */}
        {/* <h1 className="flex mb-9 h-full w-[80%] text-[28px] items-center justify-center">
          CADASTRO DE USUÁRIOS
        </h1> */}

        <form
          onSubmit={handleSignup}
          className="flex w-[47%] flex-col h-auto text-[19px]"
        >
          <input
            placeholder="Full Name"
            className="rounded p-3"
            value={fullname}
            onChange={(e) => setFullname(e.target.value)}
          />
          <br />
          <input
          type="email"
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
            CADASTRAR
          </button>
        </form>
      </div>
    </>
  );
}

export default SignUp;
