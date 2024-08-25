import React from "react";
import "../assets/style.css";

const Credit = ({ credit }) => {
  return (
    <div className="credit">
      <img
        className="coin-img"
        src="https://icones.pro/wp-content/uploads/2021/05/icone-base-donnees-jaune.png"
        alt="coins"
      />
      <h3>x{credit}</h3>
    </div>
  );
};

export default Credit;
