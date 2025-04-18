import { useLocation } from "react-router-dom";

const Games = () => {
  const location = useLocation();
  const gameData = location.state; // Access the passed object

  return (
    <div>
      <h1>Game Details</h1>
      {gameData ? (
        <div>
          <h2>{gameData.name}</h2>
          <p>{gameData.description}</p>
        </div>
      ) : (
        <p>No game data available.</p>
      )}
      {/* ...existing code... */}
    </div>
  );
};

export default Games;
