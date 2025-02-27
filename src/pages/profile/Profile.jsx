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
            

         <div className="flex w-[40%]
         justify-center
         text-[20px]
        
         
        h-[600px]
          bg-[#331a00]">
            {/* <div className="flex-col ml-[270px] justify-center">

          <h2 className="mt-5 text-center">Profile</h2>
          <p className="text-[13px] mt-2">Your Profile Information</p>
            </div>
            <div className="flex flex-1 -mt-[50px] -ml-[129px]">

            <img src={reactImage} width="120" alt="perfil"/>
            </div>
            <div className="flex ">

            <span className="text-[13px] -ml-[475px] mt-[250px]">Clique na camera 
              icone pra mudar sua foto!</span>
          </div> 
          <div>
            <input placeholder="nome" />
          </div> */}
          <div>
          <h2 className="text-center mt-5">Profile</h2>
          <p className="text-[13px] mt-2">Your Profile Information</p>
          <img src={reactImage} className="mt-7 ml-4" width="120" alt="perfil"/>
          </div>
          </div>
          <div className="-mt-[330px]">
            <p className="text-[13px]  ml-1">
              Nome Completo
            </p>
            <input placeholder="Nome" className="w-[470px] mt-[4px]
            p-3
            text-[14px]
            rounded-[8px] h-10"/>
            <p className="text-[13px] ml-1 mt-[15px]">
             Email
            </p>
            <input 
            placeholder="Email"
            className="w-[470px] 
             p-3
            text-[14px]
            mt-[4px]  rounded-[8px] h-10" />
          </div>
          </div> 
            </>
  )
}

export default Profile