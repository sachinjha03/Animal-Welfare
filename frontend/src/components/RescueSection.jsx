import React from 'react'
import "../css/component css/RescueSection.css"
import CallIcon from '@mui/icons-material/Call';
import rescueImage from "../images/home/rescue.png"
export default function RescueSection() {
    return (
        <div className="rescue-section">
            <div className="rescue-section-left">
                <h3>We Provide</h3>
                <h2>ANIMAL RESCUE</h2>
                <p>At Animal Welfare, our rescue efforts are dedicated to saving animals in distress, whether they are abandoned, injured, or suffering from neglect. We respond to emergency calls and ensure these animals receive the immediate care they need, from medical attention to safe shelter, all with the goal of restoring their health and happiness.</p>
                <p>Once rescued, our team of compassionate professionals works tirelessly to rehabilitate these animals. Through love, care, and patience, we help them recover physically and emotionally, preparing them for a better life, either in a new home or back in their natural environment.</p>
                <a href="tel:+918742920558" className="btn-a flex-btn"><CallIcon />Emergency Call For Rescue</a>
            </div>
            <div className="rescue-section-right">
                <img src={rescueImage} alt="" />
            </div>
        </div>
    )
}
