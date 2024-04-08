import React, { useState } from 'react';
import './resetPage.css'; // Import your CSS file
import axiosInstance from "../../requests";
import { Link, useNavigate } from "react-router-dom";

const ResetPassword = () => {
  // State variables for token, password, and error messages
  const [token, setToken] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const navigate = useNavigate();

  // Function to handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    
    if (!token || !password || !confirmPassword) {
      setErrorMessage('Please fill out all fields');
      return;
    }
    if (password !== confirmPassword) {
      setErrorMessage('Passwords do not match');
      return;
    }
    // Reset error message if all fields are provided and passwords match
    setErrorMessage('');
    // Add your logic to handle the reset password request here

    try {
      const response = await axiosInstance.post("/api/v1/passwords/resetPassword", {
        token,
        password
      });

      alert("Password reset successful");
      navigate('/loginPage');
    } catch (err) {
      console.log("err", err);
    }
  };

  return (
    <div className="reset-password-container">
      <h2>Reset Password</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Token:</label>
          <input
            type="text"
            value={token}
            onChange={(e) => setToken(e.target.value)}
            placeholder="Enter your token"
          />
        </div>
        <div className="form-group">
          <label>New Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your new password"
          />
        </div>
        <div className="form-group">
          <label>Confirm Password:</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirm your new password"
          />
        </div>
        {errorMessage && <div className="error-message">{errorMessage}</div>}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ResetPassword;