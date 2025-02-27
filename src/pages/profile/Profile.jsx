import NavBar from "../../components/Navbar/Navbar"
import reactImage from '../../assets/react.svg'

function Profile() {

  return (
    <>
    <NavBar />
    <br/>
    <br/>
    <br/>
    <div className="flex w-full items-center flex-col justify-center h-full">
            

         <div className="flex w-[34%]
         justify-center
         text-[20px]
          rounded-[15px]
         
        h-[450px]
          bg-[#1a0d00]">
         
          <div>
          <h2 className="text-center mt-5">Profile</h2>
          <p className="text-[13px] mt-2">Your Profile Information</p>
          <img src={reactImage} className="mt-7 ml-4" width="120" alt="perfil"/>
          </div>
          </div>
          <div className="-mt-[180px] ">
            <p className="text-[13px]  ml-1">
              Nome Completo
            </p>
            <input placeholder="Nome" className="w-[400px]
            mt-[4px]
            p-3
            text-[14px]
            rounded-[8px] h-10"/>
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
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          </div> 
            </>
  )
}

export default Profile