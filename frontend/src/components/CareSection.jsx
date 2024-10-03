import React, { useEffect, useState } from 'react'
import "../css/component css/CareSection.css"
import care from "../images/home/care.png"
import locations from "../api/locations.json"
export default function CareSection() {
    {/*VALUE OF ENTERED CITY WILL BE STORED WITH THIS USESTATE HOOK*/}
    const [searchData , setSearchData] = useState({city:""})
    const [provideService , setProvideService] = useState(null);

    {/*CHANGES IN INPUT WILL BE HANDLED BY THIS FUNCTION*/}
    const handleChange = (e) => {
        setSearchData({...searchData ,[e.target.name]: e.target.value})
    }
    
    {/*SUBMISSION OF INPUT FORM WILL BE HANDLED BY THIS FUNCTION*/}
    const handleSubmit = (e) => {
        e.preventDefault()
        let isTrue = false;
        locations.locations.forEach((elem) => {
            if(elem.toLowerCase() === searchData.city.toLowerCase().trim()){
                isTrue = true;
            }
        })
        if(isTrue){
            console.log("We provide service");
            setProvideService(true)
        }else{
            setProvideService(false)   
        }
    }
    return (
        <div className="care-section">
            {/*ANIMAL SPECIALIST SECTION TO SEARCH IF WE PROVIDE SERVICE IN THE ENTERED CITY BY USER OR NOT*/}
            <div className="care-section-left">
                <h3>Are you searching for</h3>
                <h2>Animal Specialist ?</h2>
                <p>Looking for expert care for your animals? Our team of experienced animal specialists is here to provide professional medical attention, rehabilitation, and compassionate care for all your furry friends..</p>
                <form onSubmit={handleSubmit} className='care-form'>
                    <input type="text" className='input-field' placeholder='Enter Your City' name='city' value={searchData.city} onChange={handleChange} required/>
                    <input type='submit' value="Search" className="btn-a"></input>
                </form>
                {
                provideService != null &&
                (provideService ? <div style={{display:"flex", flexDirection:"column" , paddingTop:"10px" , alignItems:"baseline" , gap:"10px"}}> <h3 style={{color:'green' , fontSize:"18px"}}>YES! We provide service at your location</h3> <a href="tel:918742920558" className="btn-a" style={{fontSize:"10px"}}>Call Now</a></div> : <h3 style={{color : 'orangered'}}>NO! We don't provide service at your location (Recheck Your Spelling Also)</h3>)
                }
            </div>
            <div className="care-section-right">
                <img src={care} alt="" />
            </div>
        </div>
    )
}
