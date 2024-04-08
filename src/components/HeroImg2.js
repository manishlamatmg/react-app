import "./HeroImg2Styles.css";
import blog1 from "../assets/blog1.jpg";
import blog9 from "../assets/blog9.jpg";
import React, { Component } from "react";

const HeroImg2 = (props) => {
  return (
    <div
      className="hero-img"
      style={{
        backgroundImage: `url(${props.image})`,
      }}
    >
      <div className="background-fade" />
      <div className="heading">
        <h1>{props.heading}</h1>
        <p>{props.text}</p>
      </div>
    </div>
  );
};

export default HeroImg2;
