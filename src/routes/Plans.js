import React from 'react'
import Navbar  from '../components/Navbar'

import Footer  from '../components/Footer'
import HeroImg2 from '../components/HeroImg2'

import Work from '../components/Blogs/Work'
import blog9 from "../assets/blog9.jpg"

const Plans = () => {
  return (
    <div>
      <Navbar/>
      <HeroImg2 image={blog9} heading="PLANS" text="Some of the Plans"/>
      <Work/>
     
      <Footer/>
    
    </div>
  )
}

export default Plans
