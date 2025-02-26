import { Link } from "react-router-dom"

import userContext from "../../Contexts/userContext";
import { useContext } from "react";
import { CiSettings } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { LuLogOut } from "react-icons/lu";


function NavBar() {
  const { user, setIsSignup, isSignup } = useContext(userContext);

  const Token = localStorage.getItem('token')

  function Logout(){
    localStorage.removeItem('token')
    setIsSignup(false)
    
    return alert("Usuario deslogado!")
    
  }

  return (
    <div className="flex w-full justify-center h-auto
    text-white
    bg-black">
    <div  className="flex w-[79%] justify-between
    p-5

   
     h-auto bg-black">
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
        <div className="flex w-auto -mr-[45px]">

       
        <div className="flex hover:bg-[#808080]  cursor-pointer h-auto p-1 pl-3 pb-1 pr-4 items-center
         bg-[#333333] rounded-2xl">
        <CiSettings />
      <p className="text-[14px] ml-2">
          Settings
        </p>
        </div>
        <div className="flex ml-5
       h-auto p-1 pl-4 pb-1 pr-5 items-center
         bg-[#333333] rounded-2xl
         cursor-pointer
         hover:bg-[#808080] 
        ">
          <button type="button" className=" flex cursor-pointer items-center text-[14px] w-[65px]">

        <CiUser />
      <p className="text-[14px] ml-2">
          Profile
        </p>
          </button>
        </div>
        

        {isSignup === true  ?
      <div className="flex 
       hover:bg-[#808080] 
      ml-5 h-auto items-center
      p-1 pl-5 pb-1 pr-4 
      bg-[#333333] rounded-2xl
      cursor-pointer
      ">
         <button type="button"
         onClick={() => Logout()}
         className=" flex items-center cursor-pointer  text-[14px] w-[70px]">

     <LuLogOut />
   <p className="text-[14px] ml-2">
       Logout
     </p>
         </button>
     </div> 
       : null 
      }
      </div>
       
    </div>
    </div>
  )
}

export default NavBar