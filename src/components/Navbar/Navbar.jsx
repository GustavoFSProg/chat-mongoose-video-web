import { Link } from "react-router-dom"

function NavBar() {

  return (
    <div className="flex w-full justify-center h-auto bg-green-200">
    <div  className="flex w-[79%] justify-between
    p-5

   
     h-auto bg-green-200">
        <Link to="/">
        HOME
        </Link>
        <Link to="/login">
        LOGIN
        </Link>
        <Link to="/singin">
        SIGNIN
        </Link>
        <Link to="/signup">
        SIGNUP
        </Link>
        <Link to="/profile">
        PROFILE
        </Link>
    </div>
    </div>
  )
}

export default NavBar