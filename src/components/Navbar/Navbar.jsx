import React,{useState} from 'react'
import "./Navbar.css"
import logo from "../Assets/logo.png";
import cart_icon from "../Assets/cart_icon.png"
import { Link,NavLink } from 'react-router-dom';

const Navbar = () => {
  
  const [count,setCount]=useState(6);
 

  return (
    <div className="navbar">
    <div className="nav-logo">
      <img src={logo} alt="logo"/>
      <Link to='/'>Azios</Link>
    </div>
    <ul className="nav-menu">
      <li className="hover"><NavLink to='/' style={{textDecoration:'none',color:"#626262"}}>Home</NavLink></li>
      <li className="hover"><NavLink to='/products' style={{textDecoration:'none',color:"#626262"}}>Products</NavLink></li>
      <li className="hover"><NavLink to='/blog' style={{textDecoration:'none',color:"#626262"}}>Blog</NavLink></li>
      <li className="hover"><NavLink to='/store' style={{textDecoration:'none',color:"#626262"}}>Store</NavLink></li>
      <li className="hover"><NavLink to='/about-us' style={{textDecoration:'none',color:"#626262"}}>About Us</NavLink></li>
      <li className="hover"><NavLink to='/contact' style={{textDecoration:'none',color:"#626262"}}>Contact</NavLink></li>
      
    </ul>
    <div className=" nav-login-cart">
      <Link to='/login' className='hover'><button >Login/SignUp</button></Link>
      <Link to='/cart'><img src={cart_icon} alt="cart-icon"/></Link>
    <div className="nav-cart-count" >{count}</div>
    </div>
  </div>
  )
}

export default Navbar;
