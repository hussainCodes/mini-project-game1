import React from "react";
import "../assets/style.css";

const Player = ({ planetsDestroyed, add, building }) => {
  return (
    <div className="player">
      <h1>{planetsDestroyed}</h1>
      <h4>Planets Destroyed</h4>
      <button className="player-button" onClick={add}>
        Destroy Planet
      </button>
      <p>{building} planets per click</p>
    </div>
  );
};

export default Player;
