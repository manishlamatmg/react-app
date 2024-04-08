import React from 'react'
import Navbar  from '../components/Navbar'
import Heroimage  from '../components/Heroimage'

import WorkBlog from '../components/Blogs/WorkBlog'

import AboutContent from '../components/AboutContent'
import Footer  from '../components/Footer'
import HomeImg from '../components/HomeImg'
import TitleHeading from '../components/TitleHeading'

import FormHome from '../components/FormHome'

const Home = () => {
  return <div>
    <Navbar/>
    <Heroimage/>
    <TitleHeading />
    <WorkBlog/>
 
    <AboutContent/>
    <HomeImg/>
    <FormHome/>
    
    
    <Footer/>
    
     
    </div>
}

export default Home
