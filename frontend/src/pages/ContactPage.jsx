import React, { useEffect, useState } from 'react'
import "../css/page css/ContactPage.css"
import DonationSection from '../components/DonationSection'
import ParallaxSection from '../components/ParallaxSection'
import RescueSection from '../components/RescueSection'
import TaskAltIcon from '@mui/icons-material/TaskAlt';
export default function ContactPage() {
    const [formData , setFormData] = useState({name:"" , contact:"" , email:"" , queryType:"" , query:""})
    const [isSuccess , setIsSuccess] = useState(false)
    const handleChange = (e) => {
        setFormData({...formData , [e.target.name]:e.target.value});
    }
    const handleSubmit = async(e) => {
        e.preventDefault()
        const response = await fetch("http://localhost:8000/query" , {
            method : 'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(formData)
        })
        const json = await response.json();
        if(json.success){
            setIsSuccess(true)
            setFormData({name:"" , contact:"" , email:"" , queryType:"" , query:""})
        }
    }
    const closeDialogBox = () => {
        setIsSuccess(false)
    }
    useEffect(() => {
        window.scrollTo(0,0)
    } , [])
  return (
    <div className='contact-page'>
        <div className="contact-page-landing-section">
                <div className="contact-page-landing-section-main-left">
                    <form method='POST' className='contact-form' onSubmit={handleSubmit}>
                        <h3>Connect With Us!</h3>
                        <div className="row">
                            <div className="input-box">
                                <p>Your First Name</p>
                                <input type="text" className="input-field" name='name' value={formData.name} onChange={handleChange} required pattern="[A-Za-z]{3,}"/>
                            </div>
                            <div className="input-box">
                                <p>Contact Detail</p>
                                <input type="text" className="input-field" name='contact' value={formData.contact} onChange={handleChange} pattern="\d{10}" 
                                maxLength={10}  required/>
                            </div>
                        </div>
                        <div className="input-box">
                            <p>Your Email</p>
                            <input type="email" className="input-field" name='email' value={formData.email} onChange={handleChange} required/>
                        </div>
                        <div className="input-box">
                            <p>Select Query Type</p>
                            <select name="queryType" className='input-field' value={formData.queryType} onChange={handleChange} required>
                                <option value=""></option>
                                <option value="adoption">Animal Adoption</option>
                                <option value="any query">Any Kind of Query</option>
                                <option value="event invitation">Event Invitation</option>
                                <option value="handover your animal to us">Handover your animal to us</option>
                                <option value="donation query">Donation Query</option>
                                <option value="others">Others</option>
                            </select>
                        </div>
                        <div className="input-box">
                            <p>Your Message</p>
                            <textarea name="query" className='input-field' value={formData.query} onChange={handleChange} required></textarea>
                        </div>
                        <input type="submit" value="Submit" className='btn-a'/>
                    </form>
                </div>
                <div className="contact-page-landing-section-main-right">
                    <h3>We Are Here For</h3>
                    <h1>24/7</h1>
                    <p>At Animal Welfare, we understand that emergencies can happen at any time. That’s why our dedicated team is available 24/7 to respond to urgent animal rescue situations. Whether it’s an injured animal in need or a rescue situation, we're here to help whenever you need us. Your call can make a difference in saving a life!</p>
                </div>
                {isSuccess && <div className="form-submit-screen">
                    <div className="form-submit-box">
                        <TaskAltIcon id="tickIcon"/>
                        <h3>Congratulations!!</h3>
                        <p>We have recieved your query. Please wait patiently , Our team member will contact you shortly</p>
                        <button className="btn-a" onClick={closeDialogBox}>Close</button>
                    </div>
                </div>}
        </div>
        <DonationSection/>
        <ParallaxSection/>
        <RescueSection/>
    </div>
  )
}
