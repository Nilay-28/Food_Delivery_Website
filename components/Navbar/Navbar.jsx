import React, { useContext, useState } from 'react'
import './Navbar.css'
import { assets} from '../../assets/assets'
import { Link } from 'react-router-dom'
import { StoreContext } from '../../context/StoreContext'

const Navbar = ({setShowLogin}) => {

    const [navMenu, setnavMenu] = useState('home');

    const {getTotalCartAmount} = useContext(StoreContext)

  return (
    <div className='navbar'>
        <Link to='/'><img className='logo' src= {assets.logo} alt='Logo'/></Link>
        <ul className="navbar-menu">
            <a href='#' onClick={()=>setnavMenu("home")} className={navMenu==="home"?"active":""}>Home</a>
            <a href='#explore-menu' onClick={()=>setnavMenu("menu")} className={navMenu==="menu"?"active":""}>Menu</a>
            <a href='#app-download' onClick={()=>setnavMenu("mobile-app")} className={navMenu==="mobile-app"?"active":""}>Mobile App</a>
            <a href='#footer' onClick={()=>setnavMenu("contact-us")} className={navMenu==="contact-us"?"active":""}>Contact Us</a>
        </ul>
        <div className="navbar-right">
            <img src= {assets.search_icon} alt="" />
            <div className='navbar-search-icon'>
                <Link to='/cart'><img src={assets.basket_icon} alt=''/></Link>
                <div className={getTotalCartAmount()===0?"":"dot"}>
                </div>
            </div>
            <a href='#'><button onClick={() => setShowLogin(true)} className="signIn">Sign In</button></a>
        </div>
    </div>
  )
}

export default Navbar