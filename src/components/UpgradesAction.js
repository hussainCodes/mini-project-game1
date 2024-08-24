const UpgradesAction = ({
  upgradeObject,
  setBuilding,
  building,
  setCredit,
  credit,
  planetsDestroyed,
  isPurchased,
}) => {
  const playerButtonClicked = () => {
    setBuilding(building + upgradeObject.affect);
    setCredit(credit - upgradeObject.price);
    document.getElementById(upgradeObject.name).remove();
  };

  if (planetsDestroyed < upgradeObject.threshold || isPurchased) {
    return null;
  }

  return (
    <div className="action-buttons">
      <button onClick={playerButtonClicked} className="action-button">
        {upgradeObject.name}
      </button>
      <p>{upgradeObject.description}</p>
    </div>
  );
};

export default UpgradesAction;
