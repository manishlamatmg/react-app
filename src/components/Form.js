import axiosInstance from "../requests";
import "./FormStyles.css"

import React, { useState } from 'react'

const Form = () => {
  const [formData, setFormData] = useState({
    phoneNumber: '',
    permanentAddress: '',
    localAddress: '',
    district: '',
    userName: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log(formData);

    try {
      const response = await axiosInstance.post("/api/v1/contacts", {
        ...formData
      }, {
        headers: {
          "Authotization": "Bearer " + localStorage.getItem("user")
        }
      }
      );

      alert("Your message has been sent to our admins");

      // navigate(`/`);
    } catch (err) {
      console.log("err", err);
    }
  };

  return (
    < div className="formm-container">
      <div className="formm">
        <h1>Connect with us !</h1>
        <form onSubmit={handleSubmit} className="form-container">
          <label className="form-label">
            Phone Number:
            <input
              type="text"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
              className="form-input"
            />
          </label>

          <label className="form-label">
            Permanent Address:
            <input
              type="text"
              name="permanentAddress"
              value={formData.permanentAddress}
              onChange={handleChange}
              required
              className="form-input"
            />
          </label>

          <label className="form-label">
            Local Address:
            <input
              type="text"
              name="localAddress"
              value={formData.localAddress}
              onChange={handleChange}
              required
              className="form-input"
            />
          </label>

          <label className="form-label">
            District:
            <input
              type="text"
              name="district"
              value={formData.district}
              onChange={handleChange}
              required
              className="form-input"
            />
          </label>

          <label className="form-label">
            User Name:
            <input
              type="text"
              name="userName"
              value={formData.userName}
              onChange={handleChange}
              required
              className="form-input"
            />
          </label>

          <label className="form-label">
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="form-input"
            />
          </label>

          <label className="form-label">
            Message:
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className="form-textarea"
              rows={6}
            />
          </label>

          <button type="submit" className="submit-button">Submit</button>
        </form>


      </div>
    </div>
  )

}

export default Form
