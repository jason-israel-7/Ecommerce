import React from "react";
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { IoCartSharp} from "react-icons/io5";
import { SiNewbalance } from "react-icons/si";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-contents">
       <div className="logo-div">
        <Link to="/" className="logo">
          <h1><SiNewbalance/></h1>
        </Link></div>
        <div className="nav-list">
          <div>
            <Link to='/' className="hom"><h2>Home</h2></Link>
          </div>
         <div><Link to="/products" className="hom">
           <h2>Products</h2>
          </Link></div>
          <div>
            <Link to='/blogs' className="hom"><h2>Blogs</h2></Link>
          </div>
          <div>
            <Link to='/contact' className="hom"><h2>Contact Us</h2></Link>
          </div>
        </div>
        <div className="nav-icons">
          <div>
            <Link to="/cart" className="icons"><h2><IoCartSharp /></h2></Link>
          </div>
          <div>
            <Link to='/login' className="icons"><h2><FaUserCircle /></h2></Link>
          </div>
         </div>
      </div>
    </nav>
  );
}

export default Navbar;
