import "./HeroimageStyles.css"

import React from 'react'
import introImg from "../assets/c.png"
import { Link } from "react-router-dom"

const Heroimage = () => {
  return (
    <div className="hero">
        <div className="mask">
            <img className="into-img"
            src={introImg} alt="introImg"/>
        </div>
      <div className="content">
        <p>Elderly Care And Monitoring System</p>
        <h1>ECMS</h1>
        <div>
            <Link to="/plans" className="btn">PLANS</Link>
            <Link to="/contact" className="btn btn-light">Contact</Link>
        </div>
      </div>
    </div>
  )
}

export default Heroimage
