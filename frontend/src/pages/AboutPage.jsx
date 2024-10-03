import React, { useEffect } from 'react'
import "../css/page css/AboutPage.css"
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import landingSectionImage from "../images/about/landing image.png"
import goalSectionImage from "../images/about/our-goal-section.png"
import ParallaxSection from '../components/ParallaxSection';
import weDoneSectionImage from "../images/about/we done section.jpg"
import GallerySection from '../components/GallerySection';
import CareSection from '../components/CareSection';
export default function AboutPage() {
     {/*Use to scroll the page to top whenever user visit the page*/}
    useEffect(() => {
        window.scrollTo(0,0)
    } , [])
  return (
    <div className='about-page'>
        {/*LANDING SECTION OF ABOUT PAGE*/}
        <div className="about-page-landing-section">
            <div className="about-page-landing-section-left">
                <h3>Hello Again Humans,</h3>
                <h2>Are You Looking To Know More <span> About Us</span> ?</h2>
                <p>Curious to learn more about who we are and what we do? Explore our mission, values, and the impactful work we do every day to protect and care for animals in need. Let's connect!</p>
                <a href="#ourGoalSection" className="btn-a flex-btn">Scroll For More <ArrowDownwardIcon/></a>
            </div>
            <div className="about-page-landing-section-right">
                <img src={landingSectionImage} alt="" />
            </div>
        </div>
        {/*OUR GOALS SECTION*/}
        <div className="our-goal-section" id='ourGoalSection'>
            <div className="our-goal-section-left">
                <img src={goalSectionImage} alt="" />
            </div>
            <div className="our-goal-section-right">
                <h3>Let's Explore about</h3>
                <h2>Our Goals</h2>
                <p>Our goals are rooted in creating a better world for animals. We aim to rescue, rehabilitate, and find loving homes for animals while promoting awareness and responsible care. Join us in achieving a future where every animal is treated with compassion and respect.</p>
                <p>We also strive to educate the community about animal welfare, fostering a culture of kindness and understanding toward all living beings. By collaborating with local organizations and advocating for better policies, we aim to create lasting change that improves the lives of animals everywhere. Together, we can make a significant impact!</p>
            </div>
        </div>
        <ParallaxSection/>
        {/*"WHAT WE HAVE DONE" SECTION*/}
        <div className="we-done-section">
            <div className="we-done-section-left">
                <h3>Let's Look At</h3>
                <h2>What We Have Done ?</h2>
                <p>Over the years, we have rescued countless animals from neglect and abandonment, providing them with necessary medical care and a safe haven. Our dedicated team works tirelessly to ensure each animal receives love and rehabilitation, preparing them for adoption.</p>
                <p>In addition to rescue efforts, we have successfully placed many animals in loving homes through our adoption programs. We also engage in community outreach, raising awareness about animal welfare and promoting responsible pet ownership, making a lasting impact on our community and beyond.</p>
                <div className="we-done-section-left-bottom">
                    <div className="we-done-section-left-bottom-card">
                        <h3>500+</h3>
                        <p>Animal Rescued</p>
                    </div>
                    <div className="we-done-section-left-bottom-card">
                        <h3>100+</h3>
                        <p>Live Transformed</p>
                    </div>
                    <div className="we-done-section-left-bottom-card">
                        <h3>200+</h3>
                        <p>Community Outreach Events</p>
                    </div>
                    <div className="we-done-section-left-bottom-card">
                        <h3>960+</h3>
                        <p>Volunteer Hours Logged</p>
                    </div>
                </div>
            </div>
            <div className="we-done-section-right">
                <img src={weDoneSectionImage} alt="" />
            </div>
        </div>
        <GallerySection/>
        <CareSection/>
    </div>
  )
}
