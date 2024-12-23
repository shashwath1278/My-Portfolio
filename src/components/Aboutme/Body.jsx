import React from 'react';
import './Body.css';
import shash1 from "../../assets/shashwath-img.jpg";

const Body = () => {
  return (
    <div className="body" id="home">
      <div className="imagecontainer">
        <img src={shash1} alt="Shashwath" />
      </div>
    </div>
  );
};

export default Body;
