import AnimatedNumbers from "react-animated-numbers";
import "../assets/style.css";

const Player = ({ planetsDestroyed, add, building }) => {
  return (
    <div className="player">
      <h1>
        <AnimatedNumbers
          includeComma
          transitions={() => ({
            type: "spring",
            duration: 0.1,
          })}
          animateToNumber={planetsDestroyed}
          fontStyle={{
            fontSize: 90,
            color: "white",
            width: 90,
          }}
        />
      </h1>

      <h4>Planets Destroyed</h4>
      <button className="player-button" onClick={add}>
        Destroy Planets
      </button>
      <p>{building} planets per click</p>
    </div>
  );
};

export default Player;
