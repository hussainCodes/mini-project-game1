import React from "react";
import deathStar from "../assets/media/death-star.png";
import "../assets/style.css";

const Logo = () => {
  return (
    <div>
      <img src={deathStar} alt="death-star" className="pic"></img>
      <h2> The death star</h2>
    </div>
  );
};

export default Logo;
