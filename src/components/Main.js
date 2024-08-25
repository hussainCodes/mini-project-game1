import Header from "./Header";
import Player from "./Player";
import UpgradesContainer from "./UpgradesContainer";
import "../assets/style.css";
import { useState } from "react";
const Main = () => {
  const [planetsDestroyed, setPlanetsDestroyed] = useState(0);
  const [credit, setCredit] = useState(0);
  const [building, setBuilding] = useState(1);

  const add = () => {
    setPlanetsDestroyed(planetsDestroyed + building);
    setCredit(credit + building);
  };

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
        building={building}
      />
    </div>
  );
};

export default Main;
