import React from 'react'
import "../css/component css/ParallaxSection.css"
import btn from "../images/btn.png"
import { Link } from 'react-router-dom'
export default function ParallaxSection() {
  return (
    <div className='parallax-section'>
      {/*A BEAUTIFUL SECTION WITH PARALLAX EFFECT TO ENHANCE USER EXPERIENCE*/}
      <h2>We Are <span>WAITING</span> For You!</h2>
      <p>We’re here, patiently waiting for someone like you to make a difference in our lives. Each of us has so much love to give and is eager to find a family to call our own. Your kindness can change our world, giving us the warmth and care we've been longing for</p>
      <Link to='/contact' className="btn-a flex-btn">Contact For Us <img src={btn} alt="" /></Link>
    </div>
  )
}
