import React from "react";
import Navbar from "../../Navbar";

import Footer from "../../Footer";

import { useParams } from "react-router-dom";
import PlanCardData from "../WorkCardData";
import "./blogsdetails.css";


const BlogDetails = () => {
  let { id } = useParams();

  const data = PlanCardData.find((el) => el.id.toString() === id);

  return (
    <div>
      <div style={{ background: "gray" }}>
        <Navbar />
      </div>
      <div style={{ paddingTop: "100px", background: "rgba(0, 0, 0, 0.9)" }}>
      </div>

      <div className="container">
        
       
        
        {data.content}
        

        <img src={data.image} />
      
      <div className="contentblog">

       {data.title}
       <div>
      
      <div dangerouslySetInnerHTML={{
        __html: data?.htmlContent
      }}></div>
    </div>
       
      </div>
      
      
    </div>
    <Footer />
    </div>
  );
};

export default BlogDetails;
