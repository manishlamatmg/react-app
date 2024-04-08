import "./WorkCardStyles.css";
import WorkCard from "././WorkCard";
import WorkCardData from "././WorkCardData";
import React, { useState, useMemo } from "react";

const Work = () => {
  const [activeButton, setActiveButton] = useState("All");

  const filteredData = useMemo(() => {
    if (activeButton === "All") return WorkCardData;
    else {
      return WorkCardData.filter((el) => el.type === activeButton)?.slice(0, 3);
    }
  }, [activeButton]);

  return (
    <div className="work-container">
      <div className="blogs-heading">
        <ul className="blogs-menu">
          <li>
            <button
              onClick={() => {
                setActiveButton("All");
              }}
              className={`blogs-butn ${activeButton === "All" ? "active" : ""}`}
            >
              All
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                setActiveButton("More Health");
              }}
              className={`blogs-butn ${
                activeButton === "More Health" ? "active" : ""
              }`}
            >
              More Health
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                setActiveButton("More Nutrition");
              }}
              className={`blogs-butn ${
                activeButton === "More Nutrition" ? "active" : ""
              }`}
            >
              More Nutrition
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                setActiveButton("More Fitness");
              }}
              className={`blogs-butn ${
                activeButton === "More Fitness" ? "active" : ""
              }`}
            >
              More Fitness
            </button>
          </li>
        </ul>
        <h1 className="plan-heading">{activeButton} Blogs</h1>
      </div>
      <div className="plan-container">
        {filteredData.map((val, ind) => {
          return (
            <WorkCard
              key={ind}
              id={val.id}
              imgsrc={val.imgsrc}
              title={val.title}
              text={val.text}
              view={val.view}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Work;
