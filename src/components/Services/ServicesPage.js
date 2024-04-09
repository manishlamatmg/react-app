import React, { useState, useRef } from "react";
import ServicesCard from "./ServicesCard";
import "./servicepage.css";
import axiosInstance from "../../requests";

const ServicesPage = () => {
  const scrollToRef = (ref) => {
    setTimeout(() => {
      if (ref.current) {
        window.scrollTo({
          top: ref.current.offsetTop,
          behavior: "smooth", // Optional: smooth scrolling behavior
        });
      }
    }, 400);
  };

  const [formOpen, setFormOpen] = useState(false);

  // Create a ref for the element you want to scroll to
  const targetRef = useRef(null);

  const [formData, setFormData] = useState({
    age: '',
    medicine: '',
    bloodPressure: 'LOW',
    cholesterol_label: 'NORMAL',
    weight: 'NORMAL',
    morningMedication: '',
    afterNoonMedication: '',
    eveningMedication: ''
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
      const response = await axiosInstance.post("/api/v1/algorithms", {
        ...formData
      }, {
        headers: {
          "Authorization": "Bearer " + localStorage.getItem("user")
        }
      });

      // navigate(`/`);
    } catch (err) {
      console.log("err", err);
    }
  };

  return (
    <div className="services-page">
      <h1>Our Services</h1>
      <div className="service-list">
        <ServicesCard
          title="Companionship"
          description="We provide companionship services to enhance the well-being of seniors."
        />
        <ServicesCard
          title="Home Care"
          description="Our home care services ensure seniors receive the support they need in their own homes."
        />
        <ServicesCard
          onClick={() => {
            setFormOpen(true);
            scrollToRef(targetRef);
          }}
          title="Medical Support"
          description="We offer medical support services to address the health needs of seniors."
        />
      </div>

      {formOpen && (
        <form onSubmit={handleSubmit} className="form-container">
          <label className="form-label">
            Age:
            <input
              type="number"
              name="age"
              value={formData.age}
              onChange={handleChange}
              required
              className="form-input"
            />
          </label>

          <label className="form-label">
            Medicine:
            <input
              type="text"
              name="medicine"
              value={formData.medicine}
              onChange={handleChange}
              required
              className="form-input"
            />
          </label>

          <label className="form-label">
            Blood Pressure:
            <select
              name="bloodPressure"
              value={formData.bloodPressure}
              onChange={handleChange}
              required
              className="form-input"
            >
              <option value="LOW">LOW</option>
              <option value="NORMAL">NORMAL</option>
              <option value="HIGH">HIGH</option>
              <option value="UNKNOWN">UNKNOWN</option>
            </select>
          </label>

          <label className="form-label">
            Cholesterol Label:
            <select
              name="cholesterol_label"
              value={formData.cholesterol_label}
              onChange={handleChange}
              required
              className="form-input"
            >
              <option value="NORMAL">NORMAL</option>
              <option value="HIGH">HIGH</option>
            </select>
          </label>

          <label className="form-label">
            Weight:
            <select
              name="weight"
              value={formData.weight}
              onChange={handleChange}
              required
              className="form-input"
            >
              <option value="NORMAL">NORMAL</option>
              <option value="OVERWEIGHT">OVERWEIGHT</option>
              <option value="OBESITY">OBESITY</option>
            </select>
          </label>

          <label className="form-label">
            Morning Medication:
            <input
              type="date"
              name="morningMedication"
              value={formData.morningMedication}
              onChange={handleChange}
              required
              className="form-input"
            />
          </label>

          <label className="form-label">
            Afternoon Medication:
            <input
              type="date"
              name="afterNoonMedication"
              value={formData.afterNoonMedication}
              onChange={handleChange}
              required
              className="form-input"
            />
          </label>

          <label className="form-label">
            Evening Medication:
            <input
              type="date"
              name="eveningMedication"
              value={formData.eveningMedication}
              onChange={handleChange}
              required
              className="form-input"
            />
          </label>

          <button type="submit" className="submit-button">Submit</button>
        </form>
      )}
    </div>
  );
};

export default ServicesPage;
