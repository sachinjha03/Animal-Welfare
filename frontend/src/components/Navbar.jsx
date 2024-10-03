import React, { useState } from 'react'
import logo from "../images/logo.png"
import "../css/component css/Navbar.css"
import { Link } from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import CloseIcon from '@mui/icons-material/Close';
export default function Navbar() {
  {/*STORE THE STATE VARIABLE FOR SIDE MENU*/}
  const [sideMenu , setSideMenu] = useState(false);
  const displayMenu = () => {
    setSideMenu(true);
  }
  const hideMenu = () => {
    setSideMenu(false);
  }
  return (
    <div className='navbar'>
      {/*LOGO SECTION OF NAVBAR*/}
        <Link to="/" className="navbar-left">
            <img src={logo} alt="" />
            <h3>AnimalWelfare</h3>
        </Link>
        {/*IMPORTANT LINKS ARE PLACED IN THIS DIV*/}
        <div className="navbar-right">
            <Link to='/'>Home</Link>
            <Link to='/about'>About Us</Link>
            <Link to='/contact'>Contact Us</Link>
        </div>
        <MenuIcon className='menu-icon' id="menuIcon" onClick={displayMenu}/>

        {/*CHECK WHETHER THE SIDE MENU SHOULD BE DISPLAYED OR NOT*/}
        {sideMenu && <div className="side-menu">
          {/*CODE FOR SIDE MENU*/}
          <Link to="/" onClick={hideMenu}>
            <img src={logo} alt="" />
          </Link>
          <h3>Animal Welfare</h3>
          <Link to='/' onClick={hideMenu}>Home</Link>
          <Link to='/about' onClick={hideMenu}>About Us</Link>
          <Link to='/contact' onClick={hideMenu}>Contact Us</Link>
          <a href="tel:+918742920558" className="btn-a">Emergency Call</a>
          <CloseIcon className='close-icon' onClick={hideMenu}/>
        </div>}
        <a href='https://wa.me/918742920558' target='_blank' className="whatsapp">
          <WhatsAppIcon className='whatsapp-icon' id="whatsappIcon"/>
        </a>
    </div>
  )
}
