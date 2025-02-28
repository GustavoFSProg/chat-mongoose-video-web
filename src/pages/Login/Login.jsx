import { useState } from "react";
import NavBar from "../../components/Navbar/Navbar";
import api from "../../api";

import userContext from "../../Contexts/userContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  
  const [email, setEmail] = useState("joao@admin");
  const [password, setPassword] = useState("1234567");
  const { user, setIsSignup, isSignup, setUser } = useContext(userContext);

  const navigate = useNavigate()

  async function handleSignup(event) {
    event.preventDefault();

    try {
      const dados = {  email: email, password: password };

      
      const {data} = await api.post("/login", dados);

      setUser({id: data.user._id, fullname:data.user.fullname, profilePic:data.user.profilePic, email: data.user.email})
      
      localStorage.setItem('token', data.token)
      setIsSignup(true);

      // console.log(` Token: ${data.token}`)
      // console.log(` Email: ${data.email}`)
      // console.log(` Name: ${data.user.fullname}`)

      // console.log(isSignup);
      // console.log(`User: ${user.fullname}`)
      // console.log(`Image: ${user.profilePic}`)
      // console.log(`Email: ${user.email}`)
      // console.log(`ID: ${user.id}`)

      navigate('/profile')

      return alert(`Login efetuado  com sucesso!, Olá ${data.user.fullname}`);
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
      
      <div className="flex  h-screen w-full items-center flex-col 
       -mt-[180px]
      justify-center ">
        <h1 className="flex 
        -mt-[380px]
        mb-9 h-[100px]] w-[80%] text-[28px]
         items-center
         justify-center">
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
