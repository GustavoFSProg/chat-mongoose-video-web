import { Link } from "react-router-dom"

import userContext from "../../Contexts/userContext";
import { useContext } from "react";

function NavBar() {
  const { user, setIsSignup, isSignup } = useContext(userContext);

  const Token = localStorage.getItem('token')

  function Logout(){
    localStorage.removeItem('token')
    setIsSignup(false)
    
    return alert("Usuario deslogado!")
    
  }

  return (
    <div className="flex w-full justify-center h-auto bg-green-200">
    <div  className="flex w-[79%] justify-between
    p-5

   
     h-auto bg-green-200">
        <Link to="/">
        HOME
        </Link>
        <Link to="/login">
        LOGIN
        </Link>
        <Link to="/singin">
        SIGNIN
        </Link>
        <Link to="/signup">
        SIGNUP
        </Link>
        <Link to="/profile">
        PROFILE
        </Link>
        {isSignup === true  ?
       <button type="button" onClick={() => Logout()}>
       LOGOUT
       </button> 
       : null 
      }
       
    </div>
    </div>
  )
}

export default NavBar