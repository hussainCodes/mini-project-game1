import Header from "./Header";
import Player from "./Player";
import UpgradesContainer from "./UpgradesContainer";
import "../assets/style.css";
import { useState } from "react";
const Main = () => {
  const [planetsDestroyed, setPlanetsDestroyed] = useState(0);
  const [credit, setCredit] = useState(0);
  const [building, setBuilding] = useState(1);
  const [num, setNum] = useState(planetsDestroyed);

  const add = () => {
    setPlanetsDestroyed(planetsDestroyed + building);
    setCredit(credit + building);
    setNum(planetsDestroyed + 1);
  };

  return (
    <div className="main-div">
      <Header credit={credit} />

      <Player
        planetsDestroyed={planetsDestroyed}
        add={add}
        building={building}
        num={num}
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
