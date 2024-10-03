import React from 'react'
import "../css/component css/DonationSection.css"
import donation from "../images/home/donation.png"

export default function DonationSection() {
    return (
        <div className="donation-section">
            {/*DONATION SECTION CODE WITH EASY-TO-USE QR , SO THAT THERE WILL BE NO CONSTRAINT OF MINIMUM PAY OR DEBIT/CREDIT CARD LONG PROCEDURE*/}
            <div className="donation-section-left">
                <h3>Want to help us but <span> don't have space</span> to take care ?</h3>
                <h1>Donate for us</h1>
                <p>Your support can help us save more lives. Every donation, big or small, makes a difference in providing essential care, medical treatments, and safe shelter for animals in need. With your generosity, we can continue rescuing, rehabilitating, and finding loving homes for countless animals. By donating, you’re giving these animals a second chance at life and helping us expand our reach to protect even more. </p>
                <h4>It's Your Money , It's Your Choice to donate or not.</h4>
            </div>
            <div className="donation-section-right">
                <img src={donation} alt="" />
            </div>
        </div>
    )
}
