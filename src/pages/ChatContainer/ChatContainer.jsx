import { useState } from "react";
import NavBar from "../../components/Navbar/Navbar";
import api from "../../api";

import userContext from "../../Contexts/userContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

function ChatContainer() {
  
  return (
    <>
      {/* <NavBar /> */}
      
      <br/>
      <br/>
      
      <div className="flex  h-screen w-full items-center flex-col 
       -mt-[180px]
      justify-center ">
        <h1 className="flex 
        -mt-[380px]
        mb-9 h-[100px]] w-[80%] text-[28px]
         items-center
         text-black
         justify-center">
       CHAT CONTAINER
        </h1>

     
      </div>
    </>
  );
}

export default ChatContainer;
