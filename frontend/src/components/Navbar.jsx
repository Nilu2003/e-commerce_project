import Logo from "../assets/logo.png";
import { IoIosSearch } from "react-icons/io";
import { FaRegUser } from "react-icons/fa6";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import "../styles/navbar.css"


function Navbar() {
  return (
    <div className="main">
        <div className="logo">
           <img src={Logo} alt="logo" />
        </div>
        <ul className="menu">
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
         </ul>
         <div className="icons">
            <IoIosSearch/>
            <FaRegUser />
            <HiOutlineShoppingBag/>

         </div>

    </div>
  )
}

export default Navbar