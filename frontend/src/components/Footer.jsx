import React from 'react'
import "../css/component css/Footer.css"
import logo from "../images/logo.png"
import { Link } from 'react-router-dom'
export default function Footer() {
  return (
    <div className='footer'>
      <div className="footer-top">
        <div className="footer-top-left">
            <h3>Every Animal Deserves Love</h3>
            <h2><span>Help Us</span> Give Them Hope</h2>
            <p>Your compassion can change lives. By supporting our mission, you bring love and care to animals in need, ensuring they find warmth, safety, and a forever home. Join us today!</p>
        </div>
        <div className="footer-top-right">
            <img src={logo} alt="" />
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <div className="footer-column">
            <h3>Important Links</h3>
            <Link to='/'>Home</Link>
            <Link to='/about'>About Us</Link>
            <Link to='/contact'>Contact Us</Link>
        </div>
        <div className="footer-column">
            <h3>Office Address</h3>
            <p>Prince Park, New Delhi</p>
        </div>
        <div className="footer-column">
            <h3>Connect With Us</h3>
            <a href="tel:+918742920558" className="btn-a flex-btn">Call For Appointment <img src={logo} alt="" /></a>
        </div>
      </div>
      <div className="footer-credit">
        <h4>This website is designed & developed by <a href="https://www.sachinjha.online" target='_blank'>Sachin Jha | &copy;</a></h4>
      </div>
    </div>
  )
}
