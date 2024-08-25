const UpgradesAction = ({
  upgradeObject,
  setBuilding,
  setCredit,
  credit,
  planetsDestroyed,
  building,
}) => {
  const upgradeButtonClicked = () => {
    setBuilding(building * upgradeObject.affect);
    setCredit(credit - upgradeObject.price);
    document.getElementById(upgradeObject.name).remove();
  };

  if (planetsDestroyed < upgradeObject.threshold) {
    return null;
  }

  return (
    <div className="action-buttons">
      <button onClick={upgradeButtonClicked} className="action-button">
        {upgradeObject.name}
      </button>
      <p>{upgradeObject.description}</p>
    </div>
  );
};

export default UpgradesAction;
