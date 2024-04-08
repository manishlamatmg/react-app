import "./WorkCardStyles.css"

import React from 'react'


import { NavLink } from "react-router-dom"
import { Link } from "react-router-dom"


const WorkCard = (props) => {
  return (
    <div className="plan-card">
      <img src={props.imgsrc} alt="image" />
      <div className="content-container">
        <h2 className="plan-title">{props.title}</h2>
        <div className="pro-details">
          <p>{props.text}</p>
          <div className="pro-btns">
            
            
            <Link to={`/blog/${props.id}`} className="btn btn-light">Readmore</Link>
           
          </div>
          

        </div>
      </div>
      
    </div>
    
  )
}

export default WorkCard
