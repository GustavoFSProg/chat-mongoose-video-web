import { useState } from "react";
import NavBar from "../../components/Navbar/Navbar";

import userContext from '../../Contexts/userContext'
import {useContext } from "react"


function SignUp(req, res) {
  event.preventDefault()

  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  // const {user, setUser, isSignup} = useContext(userContext)

  // setUser({name: "Patiuca"})

  // console.log(user.name,  isSignup)

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

         <form className="flex w-[47%] flex-col h-auto text-[19px]">
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

<button className="btn btn-secondary h-12 text-[16px]">CADASTRAR</button>

         </form>
        </div>
    </>
  );
}

export default SignUp;
