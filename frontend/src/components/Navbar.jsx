import Logo from "../assets/logo.png";
import { IoIosSearch } from "react-icons/io";
import { FaRegUser } from "react-icons/fa6";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import {NavLink} from "react-router-dom";
import "../styles/navbar.css";


function Navbar() {
  return (
    <div className="main">
        <div className="logo">
           <img src={Logo} alt="logo" />
        </div>
        <ul className="menu">
            <li ><NavLink to="/">HOME</NavLink></li>
            <li ><NavLink to="/collection">COLLECTION</NavLink></li>
            <li ><NavLink to="/about">ABOUT</NavLink></li>
            <li ><NavLink to="/contact">CONTACT</NavLink></li>
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