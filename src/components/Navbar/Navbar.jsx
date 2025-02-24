import { Link } from "react-router-dom"

function NavBar() {

  return (
    <div className="flex w-full justify-center h-auto bg-green-200">
    <div  className="flex w-[80%] justify-between
    p-5

   
     h-auto bg-green-200">
        <h1>NAVBAR</h1>
        <Link to="/">
        HOME
        </Link>
        <Link to="/login">
        LOGIN
        </Link>
    </div>
    </div>
  )
}

export default NavBar