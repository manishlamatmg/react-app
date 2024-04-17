import React from 'react'
import myImage from "../assets/b.png"
import "./HomeImgStyles.css"
import { Link } from 'react-router-dom'
import arrow from '../assets/arrow.png'

const HomeImg = () => {
   
  return (
    <div className='containerr'>
      <img src={myImage} alt=""className='myimage' />
      
        
      <h1 className='image-text'></h1>
      <h2 className='imagetext1'>Engage</h2>
      <h2 className='imagetext1'>Empower</h2>
      <h2 className='imagetext1'>Enhance</h2>
        <p className='image-p'>Providing healthy quality of life to Elders.</p>
        <div className="btnn1">

        <Link to="/services">Explore Service<img src={arrow} alt=""/></Link>

  
        </div>
    </div>
  )
}

export default HomeImg
