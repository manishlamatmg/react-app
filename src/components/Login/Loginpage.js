import React, { useState } from "react";
import "./Loginpage.css"; // Import the CSS file for styling
import image from "../../assets/e.png";
import { Link, useNavigate } from "react-router-dom";
import axiosInstance from "../../requests";
import Navbar from "../Navbar";
import SignUpForm from "../SignUp/SignUpPage";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const [signupModal, setSignupModal] = useState(false);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Here you can add logic to handle the login submission
    console.log("Email:", email);
    console.log("Password:", password);
    // navigate(`/`);

    try {
      const response = await axiosInstance.post("/login", {
        email: email,
        password,
      });

      localStorage.setItem("user", response.data.token);

      navigate(`/`);
    } catch (err) {
      console.log("err", err);
    }
  };

  return (
   
    
  
      <div>
        <div style={{ background: "gray" }}></div>
        <Navbar noScroll/>
        
        <div style={{ paddingTop: "0px", background: "rgba(0, 0, 0, 0.9)"}}>
    </div>
    <div className="login-container">
     
      <div className="image-container">
        <img src={image} alt="apple_image" />
      </div>
      <form className="login-form" onSubmit={handleSubmit}>
        <h1>Welcome to Elderly Care</h1>
        <div className="form-container">
          <h2
            style={{
              color: "#63cf7e",
              fontSize: "32px",
              fontFamily: "Arial, sans-serif",
            }}
          >
          
          </h2>
          <div className="input-container">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={handleEmailChange}
              required
            />
          </div>
          <div className="input-container">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              value={password}
              onChange={handlePasswordChange}
              required
            />
          </div>
          <button type="submit">Login</button>
          <a href="/forgot-password">Forgot Password?</a>
           
          
        </div>
        <div className="form-links">
          
            {/* <Link to="/sign-up" className="signbtn"> Sign-Up</Link> */}
            <div className="signbtn" onClick={() => { setSignupModal(true) }}>Sign Up</div>
          </div>
      </form>
    </div>

    { signupModal && <SignUpForm onClose={() => {
      setSignupModal(false);
    }} />}
    </div>
    
  );
};

export default Login;
