import upgrades from "../assets/data.js";
import UpgradesAction from "./UpgradesAction";

const UpgradesList = ({
  planetsDestroyed,
  setBuilding,
  setCredit,
  credit,
  building,
}) => {
  let upgradesList = upgrades.map((upgrade) => (
    <div id={upgrade.name}>
      <UpgradesAction
        upgradeObject={upgrade}
        setBuilding={setBuilding}
        setCredit={setCredit}
        credit={credit}
        planetsDestroyed={planetsDestroyed}
        building={building}
      />
    </div>
  ));

  return <div className="upgrades-action-cards">{upgradesList}</div>;
};

export default UpgradesList;
