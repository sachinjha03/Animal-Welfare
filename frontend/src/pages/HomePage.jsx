import React, { useEffect } from 'react'
import "../css/page css/HomePage.css"
import aboutImage from "../images/home/aboutSection.jpg"
import adopt1 from "../images/home/adopt1.jpg"
import adopt2 from "../images/home/adopt2.jpg"
import adopt3 from "../images/home/adopt3.jpg"
import adopt4 from "../images/home/adopt4.jpg"
import adopt5 from "../images/home/adopt5.jpg"
import adopt6 from "../images/home/adopt6.jpg"
import adopt7 from "../images/home/adopt7.jpg"
import adopt8 from "../images/home/adopt8.jpg"
import adopt9 from "../images/home/adopt9.jpg"
import adopt10 from "../images/home/adopt10.jpg"
import btn from "../images/btn.png"
import ParallaxSection from '../components/ParallaxSection'
import CareSection from '../components/CareSection'
import DonationSection from '../components/DonationSection'
import RescueSection from '../components/RescueSection'
import { Link } from 'react-router-dom'
export default function HomePage() {
     {/*Use to scroll the page to top whenever user visit the page*/}
    useEffect(() => {
        window.scrollTo(0,0)
    } , [])
  return (
    <div className='home-page'>
        {/* LANDING SECTION OF HOME PAGE */}
        <div className="home-page-landing-section">
            <div className="home-page-landing-section-content">
                <h3>Hello Humans,</h3>
                <h1>I Need <span>Your Help</span> !</h1>
                <p>Animal Welfare is dedicated to protecting and advocating for the rights and well-being of animals. Our mission is to create a compassionate world where animals are treated with respect, dignity, and care. Through education, rescue, and community outreach.</p>
                <a href="#homePageAboutSection" className="btn-a flex-btn">Explore About Us <img src={btn} alt="" /></a>
            </div>
        </div>
        {/*ABOUT US SECTION OF HOME PAGE*/}
            <div className="home-page-about-section" id='homePageAboutSection'>
                <div className="home-page-about-section-left">
                    <h3>What We Do At</h3>
                    <h2>ANIMAL WELFARE</h2>
                    <p>At Animal Welfare, we rescue animals in need, providing them with immediate care and shelter. Our team works tirelessly to ensure that every animal is safe and healthy. Through our adoption services, we help these animals find loving, permanent homes where they can thrive..</p>
                    <p>We also have a team of animal specialists dedicated to providing expert care and rehabilitation. Our veterinarians and animal care experts focus on treating injuries, illnesses, and behavioral issues to prepare the animals for adoption or a better life in the wild.</p>
                </div>
                <div className="home-page-about-section-right">
                    <img src={aboutImage} alt="" />
                </div>
            </div>
            {/*THIS SECTION REPRESENTS HOW MUCH THINGS WE HAVE DONE IN OUR JOURNEY*/}
            <div className="home-page-offer-section">
                <div className="colorful-card">
                    <h3>500+</h3>
                    <p>We have successfully rescued over 500 animals from neglect and danger, providing them with the care and safety they desperately needed.</p>
                </div>
                <div className="colorful-card">
                      <h3>100+</h3>
                    <p>More than 100 animals have found loving forever homes through our adoption programs, giving them a second chance at happiness.</p>
                </div>
                <div className="colorful-card">
                      <h3>200+</h3>
                    <p>We have conducted over 200 community outreach events, raising awareness about animal welfare and responsible pet ownership in our community.</p>
                </div>
                <div className="colorful-card">
                      <h3>960+</h3>
                    <p>Our dedicated volunteers have logged over 500 hours, contributing their time and energy to help care for animals in need.</p>
                </div>
            </div>
            {/*ADOPTION SECTION THAT SHOWCASES ADORABLE PETS THAT CAN BE ADOPTED*/}
            <div className="home-page-adopt-section">
                <div className="adopt-section-top">
                    <h3>Can You Pleaseee</h3>
                    <h2>ADOPT US ?</h2>
                </div>
                <div className="adopt-section-middle">
                    <img src={adopt1} alt="" />
                    <img src={adopt2} alt="" />
                    <img src={adopt3} alt="" />
                    <img src={adopt4} alt="" />
                    <img src={adopt5} alt="" />
                    <img src={adopt6} alt="" />
                    <img src={adopt7} alt="" />
                    <img src={adopt8} alt="" />
                    <img src={adopt9} alt="" />
                    <img src={adopt10} alt="" />
                </div>
                <div className="adopt-section-bottom">
                    <p>We are loving, loyal, and ready to be your best friends! Each of us has a unique story, but we all share one wish: to find a forever home. By adopting us, you're not just giving us a second chance, you're welcoming unconditional love into your life. We can't wait to fill your home with joy, warmth, and plenty of wagging tails or gentle purrs. Please adopt us and be the hero in our story. Together, we’ll create memories that last a lifetime!</p>
                    <Link to='/contact' className="btn-a flex-btn">Connect For Us <img src={btn} alt="" /></Link>
                </div>
            </div>
            <RescueSection/>
            <ParallaxSection/>
            <DonationSection/>
            <CareSection/>
            
    </div>
  )
}
