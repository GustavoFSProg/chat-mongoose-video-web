import {BrowserRouter, Route, Routes} from 'react-router-dom'
import App from './App';
import Login from './pages/Login/Login';
import SignIn from './pages/signin/SingIn';
import SignUp from './pages/signup/SignUp';
import Profile from './pages/profile/Profile';
import { UserContextProvider } from './Contexts/userContext';
import Sidebar from './components/Sidebar';

function Routers() {
    return (
      <>
        <UserContextProvider>

       <BrowserRouter>
         <Routes>
            <Route path="/" exact element={<App />}/>
            <Route path="/login"  element={<Login />}/>
            <Route path="/singin"  element={<SignIn />}/>
            <Route path="/signup"  element={<SignUp />}/>
            <Route path="/profile"  element={<Profile />}/>
            <Route path="/sidebar"  element={<Sidebar />}/>
           

         </Routes>
       </BrowserRouter>
        </UserContextProvider>
      </>
    );
  }
  
  export default Routers;
  