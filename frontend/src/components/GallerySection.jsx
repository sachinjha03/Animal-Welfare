import React from 'react'
import "../css/component css/GallerySection.css"
import image1 from "../images/about/gallery/gallery1.jpg"
import image2 from "../images/about/gallery/gallery2.jpg"
import image3 from "../images/about/gallery/gallery3.jpg"
import image4 from "../images/about/gallery/gallery4.jpg"
import image5 from "../images/about/gallery/gallery5.jpg"
import image6 from "../images/about/gallery/gallery6.jpg"
import image7 from "../images/about/gallery/gallery7.jpg"
import image8 from "../images/about/gallery/gallery8.jpg"
import image9 from "../images/about/gallery/gallery9.jpg"
import image10 from "../images/about/gallery/gallery10.jpg"
import image11 from "../images/about/gallery/gallery11.jpg"
import image12 from "../images/about/gallery/gallery12.jpg"
export default function GallerySection() {
  return (
    <div className='gallery-section'>
      {/*Gallery section of the website*/}
        <img src={image1} alt="" />
        <img src={image2} alt="" />
        <img src={image3} alt="" />
        <img src={image4} alt="" />
        <img src={image5} alt="" />
        <img src={image6} alt="" />
        <img src={image7} alt="" />
        <img src={image8} alt="" />
        <img src={image9} alt="" />
        <img src={image10} alt="" />
        <img src={image11} alt="" />
        <img src={image12} alt="" />
    </div>
  )
}
