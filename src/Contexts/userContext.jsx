import {createContext, useState} from 'react'

 const userContext = createContext({})

export  function  UserContextProvider({children}){
    const [user, setUser] = useState({name: "Anderson", email: "andre@.com"})
    const [isSignup, setIsSignup] = useState(true);
  
    return (
      <userContext.Provider value={{ user , setUser, isSignup, setIsSignup }}>
        {children}
      </userContext.Provider>
    )

}

export default userContext