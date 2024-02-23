import React from 'react'
import Navbar  from '../components/Navbar'

import Footer  from '../components/Footer'
import HeroImg2 from '../components/HeroImg2'
import PricingCard from '../components/PricingCard'
import Work from '../components/Blogs/Work'

const Plans = () => {
  return (
    <div>
      <Navbar/>
      <HeroImg2 heading="PLANS." text="Some of the Plans"/>
      <Work/>
      <PricingCard/>
      <Footer/>
    
    </div>
  )
}

export default Plans
