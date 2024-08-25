import React, { useState } from "react";
import "./assets/style.css";
import Main from "./components/Main";
const App = () => {
  const [building, setBuilding] = useState(1);
  const [planetsDestroyed, setPlanetsDestroyed] = useState(0);
  const [credit, setCredit] = useState(0);

  const add = () => {
    setPlanetsDestroyed(planetsDestroyed + building);
    setCredit(credit + building);
  };

  return (
    <Main
      credit={credit}
      planetsDestroyed={planetsDestroyed}
      add={add}
      building={building}
      setBuilding={setBuilding}
      setCredit={setCredit}
    />
  );
};

export default App;
