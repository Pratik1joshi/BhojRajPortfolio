import React from "react";
import "./Home.css";
import photo from "../Assets/125200303_1658023494370298_5034740074727962248_n-removebg-preview.png";

const Home = () => {
  return (
    <div className="Home-main-container">
      <div className="right-container-home">
        <div>
          <span className="hi-intro">Hi,</span> I am{" "}
          <span className="name-intro">Bhoj Raj Pandit</span>
        </div>
        <div>an Engineer</div>
      </div>
      <div className="left-container-home">
        <img src={photo} alt="" />
      </div>
    </div>
  );
};

export default Home;
