import "./HeroimageStyles.css"

import React from 'react'
import introImg from "../assets/eld.mp4"
import { Link } from "react-router-dom"

const Heroimage = () => {
  return (
    <div className="hero">
        <div className="mask">
            <video className="into-img"
            src={introImg} alt="introImg" autoPlay loop muted/>
        </div>
      <div className="content">
        <p>Elderly Care And Monitoring System</p>
        <h1>ECMS</h1>
        <div>
            <Link to="/blogs" className="btn">BLOGS</Link>
            <Link to="/contact" className="btn btn-light">Contact</Link>
        </div>
      </div>
    </div>
  )
}

export default Heroimage
