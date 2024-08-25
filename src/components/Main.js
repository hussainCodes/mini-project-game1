import React from "react";
import Header from "./Header";
import Player from "./Player";
import UpgradesContainer from "./UpgradesContainer";
import "../assets/style.css";

const Main = ({
  credit,
  planetsDestroyed,
  add,
  building,
  setBuilding,
  setCredit,
}) => {
  return (
    <div className="main-div">
      <Header credit={credit} />

      <Player
        planetsDestroyed={planetsDestroyed}
        add={add}
        building={building}
      />

      <UpgradesContainer
        planetsDestroyed={planetsDestroyed}
        setBuilding={setBuilding}
        setCredit={setCredit}
        credit={credit}
      />
    </div>
  );
};

export default Main;
