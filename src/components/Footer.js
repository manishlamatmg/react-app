import "./FooterStyles.css"
import React from 'react'
import { FaHome,FaPhone, FaMailBulk, FaFacebook,FaTwitter, FaLinkedin, FaYoutube } from "react-icons/fa";


const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
       
      <div className="left">
        <div className="location">
            <FaHome size={40} style={{color:"#fff", marginRight:"2rem"}} />
           <div>
            <p>123 Housing Societ,Nepal.</p>
            <p>(Health Care Institute)</p>
            </div>
            
            </div>
            <div className="phone">
                <h4><FaPhone size={30} style={{color:"#fff", marginRight:"2rem"}} />
            +9779283665442 (Phone Number)</h4>
               

      </div>
      
      
            <div className="email">
                <h4><FaMailBulk size={30} style={{color:"#fff", marginRight:"2rem"}} />
           info@gmail.com (Email address)</h4>
               

      </div>
      </div>
      <div className="right">
        <h4>About the Website
        </h4>
        <p>This is the website that serves and offers a range of services and provides information,resources and support for elderly individuals.</p>
      
      <div className="social">
      <FaFacebook size={50} style={{color:"#fff", marginRight:"1rem"}} />
      <FaTwitter size={50} style={{color:"#fff", marginRight:"1rem"}} />
      
       <FaYoutube  size={50} style={{color:"#fff", marginRight:"1rem"}} /> 
     </div>
      </div>
    </div>
    </div>
  )
}

export default Footer