import React from "react";
import Navbar  from '../components/Navbar'

import Footer  from '../components/Footer'
import HeroImg2 from '../components/HeroImg2'

import Work from '../components/Blogs/Work'
import blogimg from "../assets/blogimg.jpg"

const Blogs = () => {
    return (
      <div>
        <Navbar/>
        <HeroImg2 image={blogimg} heading="Unveiling Elder Care: Stories, Tips, And Resources" text="Popular blogs to inhance the life of elderly people."/>
        <Work/>
        
        <Footer/>
      
      </div>
    )
  }


export default Blogs
