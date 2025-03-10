import {createContext, useState} from 'react'

 const userContext = createContext({})

export  function  UserContextProvider({children}){
    const [user, setUser] = useState({})
    const [isSignup, setIsSignup] = useState(false);
  
    return (
      <userContext.Provider value={{ user , setUser, isSignup, setIsSignup }}>
        {children}
      </userContext.Provider>
    )

}

export default userContext