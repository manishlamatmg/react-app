import React from 'react';
import './ServicesCardStyles.css'; // Import CSS for styling

const ServicesCard = ({ title, description, image, onClick }) => {
  return (
    <div className="service-card" onClick={onClick}>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default ServicesCard;
