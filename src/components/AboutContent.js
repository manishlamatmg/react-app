import { Link } from "react-router-dom"
import "./AboutContentStyles.css"

import React from 'react'
import React1 from "../assets/f.png"
import React2 from "../assets/d.png"

const AboutContent = () => {
  return (
    <div className="about">
        <div className="left">
            <h1>Elderly Care And Monitoring System</h1>
            <p>The website introduces the elderly care and monitoring system, explaining its purpose, benefits, and how it can improve the quality of life for elderly individuals. </p>
            <Link to="/contact">
                <button className="btn">CONTACT</button>
            </Link>
            </div>
            <div className="right">
                <div className="img-container">
                    <div className="img-stack top">
                        <img src={React1} className="img" alt="true"/>
                    </div>
                    <div className="img-stack bottom">
                        <img src={React2} className="img" alt="true"/>
                    </div>
                </div>

            </div>
        </div>
    
    
  )
}

export default AboutContent
