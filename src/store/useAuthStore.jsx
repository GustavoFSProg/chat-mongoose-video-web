import { create } from "zustand";
import api from "../api";
import { useState } from "react";

// export const useAuthStore = create((set) => ({

// // authUser: null,
// isSigninfUp: false,
// isLoginIn: false,

// isCheckingAuth: true,

export default async function useAuthStore(req, res) {
  const [dados, setDados] = useState([]);

  // const token = localStorage.getItem('token')
  try {
    const { data } = await api.get("/get-users");

    console.log(`data: ${data}`);

    setDados(data);
    // set({authUser: data})
  } catch (error) {
    setDados(null);
   }
    // finally {
  //   set({ isCheckingAuth: false });
  // }
}

async function SignUp(req, res) {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
}
// }))
