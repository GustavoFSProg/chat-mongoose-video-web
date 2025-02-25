import { useState } from "react";
import NavBar from "../../components/Navbar/Navbar";

import userContext from '../../Contexts/userContext'
import {useContext } from "react"


function SignUp(req, res) {
  event.preventDefault()
  
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const {user, setUser, isSignup} = useContext(userContext)

  setUser({name: "Patiuca"})

  console.log(user.name,  isSignup)

  return (
    <>
      <NavBar />
      <br />
      <br />
      <br />
      <div className="flex w-full items-center justify-center h-auto">
        <h1 className="flex h-full w-[80%] text-[28px] items-center justify-center">
         <form className="flex w-full h-auto bg-amber-300">
          <input placeholder="Full Name" />

         </form>
        </h1>
      </div>
    </>
  );
}

export default SignUp;
