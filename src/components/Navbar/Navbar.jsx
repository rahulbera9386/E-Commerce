import React from 'react'
import "./Navbar.css"
import logo from "../Assets/logo.png";
import cart_icon from "../Assets/cart_icon.png"
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="navbar">
    <div className="nav-logo">
      <img src={logo} alt="logo"/>
      <p>Azios</p>
    </div>
    <ul className="nav-menu">
      <li class="hover"><Link to='/' style={{textDecoration:'none',color:"#626262"}}>Home</Link></li>
      <li class="hover"><Link to='/products' style={{textDecoration:'none',color:"#626262"}}>Products</Link></li>
      <li class="hover"><Link to='/blog' style={{textDecoration:'none',color:"#626262"}}>Blog</Link></li>
      <li class="hover"><Link to='/store' style={{textDecoration:'none',color:"#626262"}}>Store</Link></li>
      <li class="hover"><Link to='/about-us' style={{textDecoration:'none',color:"#626262"}}>About Us</Link></li>
      <li class="hover"><Link to='/contact' style={{textDecoration:'none',color:"#626262"}}>Contact</Link></li>
      
    </ul>
    <div className="nav-login-cart">
      <Link to='/login'><button>Login</button></Link>
      <Link to='/cart'><img src={cart_icon} alt="cart-icon"/></Link>
    <div className="nav-cart-count">0</div>
    </div>
  </div>
  )
}

export default Navbar;
