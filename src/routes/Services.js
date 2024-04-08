import React from 'react'
import Navbar  from '../components/Navbar'
import Footer  from '../components/Footer'
import ServicesCard from '../components/Services/ServicesCard'
import ServicesPage from '../components/Services/ServicesPage'
import HeroImg2 from '../components/HeroImg2'



const Services = () => {
  return (
    <div>
      <Navbar/>
      <HeroImg2  heading="Encompass a range of services" text="To support the well-being, safety, and independence of older adults"/>
      
      <ServicesCard/>
      <ServicesPage/>
      <Footer/>
    </div>
  )
}

export default Services
