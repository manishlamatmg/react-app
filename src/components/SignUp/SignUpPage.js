// SignUpForm.js

import React, { useState } from "react";
import "./SignUp.css";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../requests";

const SignUpForm = (props) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const navigate = useNavigate();
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Perform form validation
    const errors = validateForm(formData);
    if (Object.keys(errors).length === 0) {
      // Form is valid, perform submission

      console.log("Form submitted:", formData);
    } else {
      setErrors(errors);
    }

    try {
      const response = await axiosInstance.post("/api/v1/registrations", {
        firstName: formData.name,
        lastName: "",
        email: formData.email,
        password: formData.password,
        organizationName: "string",
        organizationPanNo: "12345",
      });

      navigate("/loginPage");
      props.onClose?.();
    } catch (err) {
      console.log("err", err);
    }
  };

  const validateForm = (data) => {
    let errors = {};
    if (!data.name.trim()) {
      errors.name = "Name is required";
    }
    if (!/\S+@\S+\.\S+/.test(data.email)) {
      errors.email = "Email is not valid";
    }
    if (data.password.length < 8) {
      errors.password = "Password must be at least 8 characters";
    }
    if (data.password !== data.confirmPassword) {
      errors.confirmPassword = "Passwords do not match";
    }
    return errors;
  };

  return (
    <div className="background-container">
      <div className="signup-form-container">
        <span onClick={() => props.onClose?.()} style={{
          position: "absolute",
          top: "12px",
          right: "12px",
          cursor: "pointer"
        }}>X</span>
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit} className="signup-form">
          Full Name <div className="form-group">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && <span className="error">{errors.name}</span>}
          </div>
          <div className="form-group">
            Email <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <span className="error">{errors.email}</span>}
          </div>
          <div className="form-group">
            Password<input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
            />
            {errors.password && (
              <span className="error">{errors.password}</span>
            )}
          </div>
          <div className="form-group">
            Confirm Password<input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
            />
            {errors.confirmPassword && (
              <span className="error">{errors.confirmPassword}</span>
            )}
          </div>
          <button type="submit" className="submit-btn">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUpForm;
