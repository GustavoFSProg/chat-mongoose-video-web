import { useState } from "react";
import NavBar from "../../components/Navbar/Navbar";

import userContext from '../../Contexts/userContext'
import {useContext } from "react"
import api from "../../api";


function SignUp(req, res) {
  
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  async function handleSignup(event){
      event.preventDefault()

      try {
        const data = {fullname: fullname, email: email, password: password}


        const users = await api.post('/signup', data)

        return alert("Usuário cadastrado com sucesso!")
        
      } catch (error) {
        return alert(error)

        
      }
    
    }

  return (
    <>
      <NavBar />
      <br />
      <br />
      <br />
      <div className="flex w-full items-center flex-col justify-center h-auto">
        <h1 className="flex mb-9 h-full w-[80%] text-[28px] items-center justify-center">
          CADASTRO DE USUÁRIOS
      </h1>

         <form onSubmit={handleSignup} className="flex w-[47%] flex-col h-auto text-[19px]">
          <input placeholder="Full Name"
          className=" p-3"
          value={fullname}
           onChange={(e) => setFullname(e.target.value)}
          />
           <br />
           <input placeholder="Email" className=" p-3" value={email}
           onChange={(e) => setEmail(e.target.value)}
          />
          <br />
         


<input placeholder="Senha" className=" p-3" type="password" value={password}
           onChange={(e) => setPassword(e.target.value)}

          />

<br />

<button type="submit" className="btn btn-secondary h-12 text-[16px]">CADASTRAR</button>

         </form>
        </div>
    </>
  );
}

export default SignUp;
