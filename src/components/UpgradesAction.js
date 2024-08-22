const UpgradesAction = ({ upgradeObject, setBuilding, building }) => {
  //  setBuilding(upgradeObject.effect);

  return (
    <div className="action-buttons">
      <button
        onClick={() => setBuilding(building * upgradeObject.affect)}
        className="action-button"
      >
        {upgradeObject.name}
      </button>
      <p>{upgradeObject.description}</p>
    </div>
  );
};

export default UpgradesAction;
