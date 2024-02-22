import React from "react";
import "./index.css";
import Home from "./routes/Home"
import About from "./routes/About"
import Plans from "./routes/Plans"
import Services from "./routes/Services"
import Contact from "./routes/Contact"
import { Route, Routes } from 'react-router-dom'
import Login from "./components/Login/Loginpage.js";




function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/plans" element={<Plans />} />
      <Route path="/services" element={<Services />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/loginPage" element={<Login/>}/>

    </Routes>
    </>
  )
}

export default App;
