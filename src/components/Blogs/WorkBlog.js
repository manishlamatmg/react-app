import "./WorkCardStyles.css";
import WorkCard from "./WorkCard";
import WorkCardData from "./WorkCardData";
import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import arrow from '../../assets/arrow.png'
const WorkBlog = () => {
  const [activeButton, setActiveButton] = useState("All");

  const filteredData = useMemo(() => {
    if (activeButton === "All") return WorkCardData?.slice(0, 3);
    else {
      return WorkCardData.filter((el) => el.type === activeButton)?.slice(0, 3);
    }
  }, [activeButton]);

  return (
    <div className="work-container">
      <div className="blogs-heading">
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
     <div className="btn1">

     <Link to="/blogs">View ALL<img src={arrow} alt=""/></Link>

       
     </div>
    </div>
  );
};

export default WorkBlog;
