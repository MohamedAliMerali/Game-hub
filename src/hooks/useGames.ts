import { useEffect, useState } from "react";
import gamesServices, { Game } from "../services/games-services";
import { CanceledError } from "axios";
import { GameQuery } from "../App";

const useGames = (gameQuery: GameQuery) => {
  const [games, setGames] = useState<Game[]>([]);
  const [isGameLoading, setGameLoading] = useState(false);
  const [gameError, setGameError] = useState("");

  // getGames
  useEffect(() => {
    console.log(">> useEffect is Loading games!!");
    setGameError("");
    setGameLoading(true);

    const { request, cancel } = gamesServices.getGames(gameQuery);
    request
      .then((res) => {
        setGames(res.data.results);
        setGameError("");
        setGameLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setGameError(err.message);
        setGameLoading(false);
      });

    return () => cancel();
  }, [gameQuery]);

  return { games, gameError, isGameLoading };
};

export default useGames;
