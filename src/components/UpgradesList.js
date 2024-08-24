import upgrades from "../assets/data.js";
import UpgradesAction from "./UpgradesAction";

const UpgradesList = ({
  planetsDestroyed,
  setBuilding,
  building,
  setCredit,
  credit,
}) => {
  let upgradesList = upgrades.map((upgrade) => (
    <div id={upgrade.name}>
      <UpgradesAction
        upgradeObject={upgrade}
        setBuilding={setBuilding}
        building={building}
        setCredit={setCredit}
        credit={credit}
        planetsDestroyed={planetsDestroyed}
        isPurchased={false}
      />
    </div>
  ));

  return <div className="upgrades-action-cards">{upgradesList}</div>;
};

export default UpgradesList;
