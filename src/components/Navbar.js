import { Link } from "react-router-dom"
import "./NavbarStyles.css"

import React from 'react'

const Navbar = () => {
    return (
      <div className="header">
      <Link to="/">
          <h1>
              ECMS</h1></Link>
              <ul className="nav-menu">
                  <li>
                      <Link to="/">Home</Link> 
                      </li>
                      <li>
                      <Link to="/services">Services</Link> 
                      </li>
                      <li>
                      <Link to="/about">About</Link> 
                      </li>
                      <li>
                      <Link to="/contact">Contact</Link> 
                      </li>
                      </ul>  
                      
      </div>
    )
  }
  
  export default Navbar