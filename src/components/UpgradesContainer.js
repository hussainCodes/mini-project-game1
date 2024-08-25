import React from "react";
import UpgradesList from "./UpgradesList";
import "../assets/style.css";
const UpgradesContainer = ({
  planetsDestroyed,
  setBuilding,
  setCredit,
  credit,
}) => {
  return (
    <div className="upgrade-list">
      <h3>available upgrades:</h3>
      <UpgradesList
        planetsDestroyed={planetsDestroyed}
        setBuilding={setBuilding}
        setCredit={setCredit}
        credit={credit}
      />
    </div>
  );
};

export default UpgradesContainer;
