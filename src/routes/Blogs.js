import React from "react";
import Navbar  from '../components/Navbar'

import Footer  from '../components/Footer'
import HeroImg2 from '../components/HeroImg2'
import PricingCard from '../components/PricingCard'
import Work from '../components/Blogs/Work'


const Blogs = () => {
    return (
      <div>
        <Navbar/>
        <HeroImg2 heading="BLOGS." text="Some of the Blogs"/>
        <Work/>
        <PricingCard/>
        <Footer/>
      
      </div>
    )
  }


export default Blogs
