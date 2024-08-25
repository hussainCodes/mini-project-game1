import React from "react";
import AnimatedNumbers from "react-animated-numbers";

import "../assets/style.css";

const Player = ({ planetsDestroyed, add, building, num }) => {
  num = planetsDestroyed;
  return (
    <div className="player">
      <h1>
        <AnimatedNumbers
          includeComma
          transitions={() => ({
            type: "spring",
            duration: 0.1,
          })}
          animateToNumber={num}
          fontStyle={{
            fontSize: 40,
            color: "white",
          }}
        />
      </h1>
      {/* <h1>{planetsDestroyed}</h1> */}

      <h4>Planets Destroyed</h4>
      <button className="player-button" onClick={add}>
        Destroy Planet
      </button>
      <p>{building} planets per click</p>
    </div>
  );
};

export default Player;
