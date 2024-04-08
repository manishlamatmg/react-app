import React, { useState, useRef } from "react";
import ServicesCard from "./ServicesCard";
import "./servicepage.css";

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

  // Create a ref for the element you want to scroll to
  const targetRef = useRef(null);

  const [formData, setFormData] = useState({
    age: "",
    medicine: "",
    diabetes: "",
    ageStatus: "",
    morningMedication: "",
    afterNoonMedication: "",
    eveningMedication: "",
  });

  const [formOpen, setFormOpen] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Do something with the form data, like submit to a server
    console.log(formData);
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
        <form
          ref={targetRef}
          id="diabetes-form"
          className="form-container"
          onSubmit={handleSubmit}
        >
          <label>
            Age:
            <input
              type="text"
              name="age"
              value={formData.age}
              onChange={handleChange}
              className="form-input"
            />
          </label>
          <br />
          <label>
            Medicine:
            <input
              type="text"
              name="medicine"
              value={formData.medicine}
              onChange={handleChange}
              className="form-input"
            />
          </label>
          <br />
          <label>
            Diabetes:
            <input
              type="text"
              name="diabetes"
              value={formData.diabetes}
              onChange={handleChange}
              className="form-input"
            />
          </label>
          <br />
          <label>
            Age Status:
            <input
              type="text"
              name="ageStatus"
              value={formData.ageStatus}
              onChange={handleChange}
              className="form-input"
            />
          </label>
          <br />
          <label>
            Morning Medication:
            <input
              type="text"
              name="morningMedication"
              value={formData.morningMedication}
              onChange={handleChange}
              className="form-input"
            />
          </label>
          <br />
          <label>
            Afternoon Medication:
            <input
              type="text"
              name="afterNoonMedication"
              value={formData.afterNoonMedication}
              onChange={handleChange}
              className="form-input"
            />
          </label>
          <br />
          <label>
            Evening Medication:
            <input
              type="text"
              name="eveningMedication"
              value={formData.eveningMedication}
              onChange={handleChange}
              className="form-input"
            />
          </label>
          <br />
          <button type="submit" className="form-button">
            Submit
          </button>
        </form>
      )}
    </div>
  );
};

export default ServicesPage;
