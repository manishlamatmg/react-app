import React, { useEffect, createContext, useState } from "react";
import "./index.css";
import Home from "./routes/Home";
import About from "./routes/About";
import Plans from "./routes/Plans";
import Blogs from "./routes/Blogs.js";
import Services from "./routes/Services.js";
import Blogs1 from "./components/Blogs/Allblogs/Blogs1.js";
import Contact from "./routes/Contact";
import { Route, Routes, useLocation } from "react-router-dom";
import Login from "./components/Login/Loginpage.js";
import SignUpForm from "./components/SignUp/SignUpPage.js";
import ForgotPasswordPage from "./components/forgotPassword/forgotPassword.js";
import ResetPassword from "./components/forgotPassword/resetPage.js";

import BlogDetails from "./components/Blogs/Allblogs/Blogs1.js";

export const AuthContext = createContext({
  loggedIn: false,
  setLoggedIn: () => {}
});

function App() {
  const location = useLocation();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <>
      <AuthContext.Provider value={{ loggedIn: isLoggedIn, setLoggedIn: setIsLoggedIn}}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/plans" element={<Plans />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blogs1" element={<Blogs1 />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/loginPage" element={<Login />} />
          <Route path="/sign-up" element={<SignUpForm />} />
          <Route path="/forgot-password" element={<ForgotPasswordPage />} />
          <Route path="/forgot-password/reset" element={<ResetPassword />} />

          <Route path="/blog/:id" element={<BlogDetails />} />
        </Routes>
      </AuthContext.Provider>
    </>
  );
}

export default App;
