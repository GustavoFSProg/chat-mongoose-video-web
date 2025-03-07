import { create } from "zustand";
import api from "./api";

import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./index.css";
import NavBar from "./components/Navbar/Navbar";
import useAuthStore from "./store/useAuthStore";
import userContext from "./Contexts/userContext";
import { useContext } from "react";
import { useChatStore } from "./store/useChatStore";
import NoChatSelected from "./pages/NoChat/noChatSelected";
import Sidebar from "./components/Sidebar";

function App() {
  // const {authUser, ckeckAuth} = useAuthStore()
  const [dados, setDados] = useState([]);
  const [isCheckingAuth, setIsCheckingAuth] = useState(true);

  const {selectedUser} = useChatStore()

  const { user, isSignup } = useContext(userContext);


  console.log(user.name, user.email, isSignup);

  const Token = localStorage.getItem('token')


  async function useAuthStore(req, res) {
    // const [dados, setDados] = useState([])

    const Token = localStorage.getItem('token')
    try {
      const { data } = await api.get("/get-users");

      // console.log(`data: ${data}`);

      setDados(data);
      // set({authUser: data})
    } catch (error) {
      setDados(null);
    } finally {
      setIsCheckingAuth(false);
    }
  }

  useEffect(() => {
    useAuthStore();
  }, []);

  return (
    <>
      <NavBar />
      <div className="h-screen ">
      <div className="flex items-center justify-center pt-20 px-4">
        <div className="bg-base-100 rounded-lg shadow-cl w-full max-w-6xl h-[calc(100vh-8rem)]">
          <div className="flex h-full rounded-lg overflow-hidden">
            <Sidebar />

            {!selectedUser ? <NoChatSelected /> : <ChatContainer />}
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default App;

// nfn   -    const first = (second) => { third }
