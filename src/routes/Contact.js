import React from 'react'
import Navbar  from '../components/Navbar'

import Footer  from '../components/Footer'
import HeroImg2 from '../components/HeroImg2'
import Form from '../components/Form'


import img1 from '../assets/blog2.jpg'


const contact = () => {
  return (
    <div>
        <Navbar/>
        <HeroImg2  image={img1} heading="CONTACT" text="Lets have a chat"/>
        <Form/>
  
      <Footer/>
    </div>
  )
}

export default contact
