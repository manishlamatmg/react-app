import React from "react";
import "./index.css";
import Home from "./routes/Home"
import About from "./routes/About"
import Plans from "./routes/Plans"
import Blogs from "./routes/Blogs.js";
import Services from "./routes/Services"
import Contact from "./routes/Contact"
import { Route, Routes } from 'react-router-dom'
import Login from "./components/Login/Loginpage.js";
import SignUpForm from "./components/SignUp/SignUpPage.js";




function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/plans" element={<Plans />} />
      <Route path="/blogs" element={<Blogs />} />
      <Route path="/services" element={<Services />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/loginPage" element={<Login/>}/>
      <Route path = "/sign-up" element ={<SignUpForm/>}/>

    </Routes>
    </>
  )
}

export default App;
