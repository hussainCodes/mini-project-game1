import React, { useState } from "react";
import "./assets/style.css";
import deathStar from "./assets/media/death-star.png";
import UpgradesList from "./components/UpgradesList";

const App = () => {
  const [building, setBuilding] = useState(1);
  const [planetsDestroyed, setPlanetsDestroyed] = useState(0);
  const [credit, setCredit] = useState(0);

  const add = () => {
    setPlanetsDestroyed(planetsDestroyed + building);
    setCredit(credit + building);
  };

  // const attackButton = () => setBuilding(building+2);

  return (
    <div className="main-div">
      <div className="header">
        <div>
          <img src={deathStar} alt="death-star" className="pic"></img>
          <h2> The death star</h2>
        </div>
        <div className="credit">
          <img
            className="coin-img"
            src="https://icones.pro/wp-content/uploads/2021/05/icone-base-donnees-jaune.png"
            alt="coins"
          />
          <h3>{credit}</h3>
        </div>
      </div>

      <div className="player">
        <h1>{planetsDestroyed}</h1>
        <h4>Planets Destroyed</h4>
        <button className="player-button" onClick={add}>
          Destroy Planet
        </button>
        <p>{building} planets per click</p>
      </div>

      <div className="upgrade-list">
        <h3>available upgrades:</h3>
        <UpgradesList setBuilding={setBuilding} building={building} />
      </div>
    </div>
  );
};

export default App;
