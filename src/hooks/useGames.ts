import { useEffect, useState } from "react";
import gamesServices, { Game } from "../services/games-services";
import { CanceledError } from "axios";

const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [isGameLoading, setGameLoading] = useState(false);
  const [gameError, setGameError] = useState("");

  // getGames
  useEffect(() => {
    setGameError("");
    setGameLoading(true);

    const { request, cancel } = gamesServices.getGames();
    request
      .then((res) => {
        setGames(res.data.results);
        setGameLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setGameError(err.message);
        setGameLoading(false);
      });

    return () => cancel();
  }, []);

  return { games, gameError, isGameLoading };
};

export default useGames;
