import React, { useState } from 'react';
import './Loginpage.css'; // Import the CSS file for styling

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
      <h2 style={{ color: '#63cf7e',fontFamily: 'Arial, sans-serif' }}>Welcome to Elder Care</h2>
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
          <br/>
          <a href="/sign-up">Sign Up</a>
        </div>
      </form>
      <div className = "image-container">
        <img src='react-app\src\assets\a.png' alt='apple_image'/>
      </div>
    </div>
    
  );
};

export default Login