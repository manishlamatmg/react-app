import React, { useState } from 'react';
import './forgotPassword.css'; // Import your CSS file
import axiosInstance from "../../requests";
import { Link, useNavigate } from "react-router-dom";
import image from "../../assets/a.png"
const ForgotPassword = () => {
  // State variables for email input and error message
  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  // Function to handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!email) {
      setErrorMessage('Please enter your email address');
      return;
    }
   
    setErrorMessage('');

    try {
      const response = await axiosInstance.post("/api/v1/passwords/resetPasswordRequest", {
        email: email,
      });

      alert("Otp sent to your email");
      navigate('/forgot-password/reset');
    } catch (err) {
      console.log("err", err);
    }
  };

  return (
    <div className="forgot-password-container">
      <div className="image-container">
        <img src={image} alt="apple_image" />
      </div>
      <h2>Forgot Password</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
          />
        </div>
        {errorMessage && <div className="error-message">{errorMessage}</div>}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ForgotPassword;