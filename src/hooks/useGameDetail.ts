import { useQuery } from "@tanstack/react-query";
import apiClient from "../services/api-client";
import Game from "../entities/Game";

const useGameDetail = (gameId: number, gameSlug: string) =>
  useQuery<Game, Error>({
    queryKey: ["gameData", gameSlug],
    queryFn: () => apiClient.get(`/games/${gameId}`).then((res) => res.data),
    staleTime: 30 * 60 * 60 * 1000,
  });

export default useGameDetail;
