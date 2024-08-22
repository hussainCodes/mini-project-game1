import React from "react";
import upgrades from "../assets/data.js";
import UpgradesAction from "./UpgradesAction";

const UpgradesList = ({ setBuilding, building }) => {
  let upgradesList = upgrades.map((upgrade) => (
    <UpgradesAction
      upgradeObject={upgrade}
      setBuilding={setBuilding}
      building={building}
    />
  ));
  return <div className="upgrades-action-cards">{upgradesList}</div>;
};

export default UpgradesList;
