import NavBar from "../../components/Navbar/Navbar"
import reactImage from '../../assets/react.svg'
import {Camera} from 'lucide-react'
import userContext from "../../Contexts/userContext";
import { useContext } from "react";
  


function Profile() {
  const { user, isSignup } = useContext(userContext);

  return (
    <>
    <NavBar />
    <div className="h-screen pt-20">
            

         <div className="max-w-2xl mx-auto p-4 py-8">
         
          <div className="bg-[#251a0e] h-[600px] rounded-xl p-6 space-y-8">
          <div className="text-center">
          <h2 className="text-2xl font-semibold">Profile</h2>
          <p className=" mt-2 text-[15px]">
             <span className="mr-[8px]">
               Olá, 
             </span>
             
              {user.name}
            
            </p>
          </div>
        <div className="flex flex-col items-center gap-4 mt-[30px]"> 
          <div className="relative">
          <img src={user.profilePic || reactImage}
           className="size-32 rounded-full object-cover border-45" alt="perfil"/>
           <label htmlFor="avatar-upload"
           className={`
            absolute bottom-0 right-0 bg-base-content 
            hover:scale-105 p-2 roundend-full cursor-pointer 
            transition-all duration-200


            `}  
           >


          <Camera className="w-5 h-5 text-base-200"/>
          
            <input type="file" id="avatar-upload"
            accept="image/*"
            // onChange={handleImageUpload}
            placeholder="" className="hidden"
            // disabled={isUpdatingProfile}
            />
           </label>
          </div>
          <div>

          <p className="text-[13px]  ml-1">
              Nome Completo
            </p>
            <input type="text" className="w-[400px] 
             p-3
             text-[14px]
             mt-[4px]  rounded-[8px] h-10"/>
             </div>
             <div>

            <p className="text-[13px] ml-1 mt-[15px]">
             Email
            </p>
            <input 
            placeholder="Email"
            className="w-[400px] 
            p-3
            text-[14px]
            mt-[4px]  rounded-[8px] h-10" />
            </div>
          </div>
          </div> 

         
          <br/>
          <br/>
          <br/>
          <br/>
          </div> 
          </div>

            </>
  )
}

export default Profile