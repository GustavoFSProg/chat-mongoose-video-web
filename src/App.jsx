
import {create} from 'zustand'
import api from './api'


import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'
import NavBar from './components/Navbar/Navbar'
// import { useAuthStore } from './store/useAuthStore'
import useAuthStore from './store/useAuthStore'
import userContext from './Contexts/userContext'
import {useContext } from "react"

function App() {
  // const {authUser, ckeckAuth} = useAuthStore()
  const [dados, setDados] = useState([])
  const [isCheckingAuth, setIsCheckingAuth] = useState(true)

  const {user, isSignup} = useContext(userContext)

     console.log(user.name, user.email, isSignup)


    // async function ChekAuth(req, res){
    //     // const token = localStorage.getItem('token')
    //     try {
    //         const {data} = await api.get('/get-users')

    //         console.log(`data: ${data}`)

    //         setDados(data)

    //         console.log(`dados: ${dados}`)


            
    //     } catch (error) {

    //         // set({authUser: null})
    //         return console.log(`error: ${error}`)
            
            
    //     }
    //     // finally {
    //     //     set({isCheckingAuth: false})
    //     // }
    // }

 async function useAuthStore(req, res){
      // const [dados, setDados] = useState([])

        // const token = localStorage.getItem('token')
        try {
            const {data} = await api.get('/get-users')

            console.log(`data: ${data}`)

            setDados(data)
            // set({authUser: data})
            
        } catch (error) {

            setDados(null)
            
        }
        finally {
            setIsCheckingAuth(false)
        }
    }


useEffect(() => {
  useAuthStore()
},[])

  return (
    <>
    <NavBar />
      <div className="flex w-full text-1xl
       bg-amber-200 flex-col items-center justify-center">
        OLÁ
        <br />
       
        {/* <div> */}
        {/* {dados.map((items) => {
          return (
            <div key={items._id}>

            <p>{items._id}</p>
            <p>{items.email}</p>
            
            <br />
                        </div>
          )
        })} */}

        {/* <button className="btn"> */}
        <button className="btn">Button</button>
<button className="btn btn-neutral">Neutral</button>
<button className="btn btn-primary">Primary</button>
<button className="btn btn-secondary">Secondary</button>
<button className="btn btn-accent">Accent</button>
<button className="btn btn-ghost">Ghost</button> 
{/* <button className="btn btn-link">Link</button> */}
        {/* </div> */}
          {/* </button>

        {/* Open the modal using document.getElementById('ID').showModal() method */}
<button className="btn" onClick={()=>document.getElementById('my_modal_1').showModal()}>open modal</button>
<dialog id="my_modal_1" className="modal">
  <div className="modal-box">
    <h3 className="font-bold text-lg">Hello!</h3>
    <p className="py-4">Press ESC key or click the button below to close</p>
    <div className="modal-action">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button className="btn">Close</button>
      </form>
    </div>
  </div>
</dialog>

<br />
<br />
<br />
<details className="dropdown">
  <summary className="btn m-1">open or close</summary>
  <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
    <li><a>Item 1</a></li>
    <li><a>Item 2</a></li>
  </ul>
</details>
      </div>
   
    </>
  )
}

export default App


// nfn   -    const first = (second) => { third } 