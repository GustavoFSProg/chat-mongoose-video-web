import { Link } from "react-router-dom";

import userContext from "../../Contexts/userContext";
import { useContext } from "react";
import { CiSettings } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { LuLogOut } from "react-icons/lu";
import { MdChatBubbleOutline } from "react-icons/md";

function NavBar() {
  const { user, setIsSignup, isSignup } = useContext(userContext);

  const Token = localStorage.getItem("token");

  function Logout() {
    localStorage.removeItem("token");
    setIsSignup(false);

    return alert("Usuario deslogado!");
  }

  return (
    <div
      className="flex w-full justify-center h-[60px]
    items-center
    text-white
    bg-black
    max-md:bg-yellow
    
  "
    >
      <div
        className="flex 
     w-[79%] justify-between
   max-md:bg-green
    
    h-[60px]

     p-3
     items-center
      bg-black"
      >
        <div
          className="flex hover:bg-[#333333] 
       -ml-[80px]
      p-2 items-center justify-center"
        >
          <button
            type="button"
            className=" flex  p-2 items-center justify-center cursor-pointer"
          >
            <MdChatBubbleOutline
              style={{ fontSize: "25px", color: "#8000ff" }}
            />
            <p className="text-[16px] ml-2 -mt-[2px]">Chats</p>
          </button>
        </div>
        <div className="flex w-[500px] justify-between items center">
          <Link to="/">HOME</Link>
          <Link to="/sidebar">Sidebar</Link>
          <Link to="/login">LOGIN</Link>
          <Link to="/singin">SIGNIN</Link>
          <Link to="/signup">SIGNUP</Link>
        </div>
        <div className="flex w-auto h-auto -mr-[45px]">
          <div
            className="flex hover:bg-[#808080]
          cursor-pointer h-[33px] p-1 pl-4 pb-1 pr-5 items-center
         bg-[#333333] rounded-2xl"
          >
            <button
              type="button"
              className=" flex cursor-pointer
           items-center text-[14px] w-[76px]"
            >
              <CiSettings style={{ fontSize: "18px" }} />
              <p className="text-[14px] ml-2">Settings</p>
            </button>
          </div>

          <div
            className="flex ml-5
      o p-1 pl-4 pb-1 pr-5 items-center
         bg-[#333333] rounded-2xl
         cursor-pointer
         h-[33px]
         hover:bg-[#808080] 
        "
          >
            <Link to="/profile"
              className=" flex cursor-pointer  items-center text-[14px] w-[65px]"
            >
              <CiUser />
              <p className="text-[14px] ml-2">Profile</p>
            </Link>
          </div>

          {isSignup === true ? (
            <div
              className="flex 
       hover:bg-[#808080] 
      ml-5 h-[33px] items-center
      p-1 pl-5 pb-1 pr-4 
      bg-[#333333] rounded-2xl
      cursor-pointer
      "
            >
              <button
                type="button"
                onClick={() => Logout()}
                className=" flex items-center cursor-pointer  text-[14px] w-[70px]"
              >
                <LuLogOut />
                <p className="text-[14px] ml-2">Logout</p>
              </button>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default NavBar;
