import React, { useState } from 'react';
import './Loginpage.css'; // Import the CSS file for styling
import image from "../../assets/a.png"
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate()

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you can add logic to handle the login submission
    console.log('Email:', email);
    console.log('Password:', password);
    navigate(`/`)
    
  };

  return (
    <div className="login-container">

      <div className="image-container">
        <img src={image} alt='apple_image' />
      </div>
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="form-container">
          <h2 style={{ color: '#63cf7e', fontSize:'32px', fontFamily: 'Arial, sans-serif' }}>Welcome to Elder Care</h2>
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
          <div className="form-links">
            <a href="/forgot-password">Forgot Password</a>
            <br />
            <Link to="/sign-up"> sign-up</Link>
          </div>
        </div>
      </form>

    </div>

  );
};

export default Login