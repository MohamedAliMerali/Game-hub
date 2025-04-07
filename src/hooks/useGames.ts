import { useInfiniteQuery } from "@tanstack/react-query";
import apiClient, { FetchResponse } from "../services/api-client";
import { Game } from "../services/games-services";
import { undefined } from "zod";
import { GameQuery } from "../stores/gameQueryStore";

const useGames = (gameQuery: GameQuery) =>
  useInfiniteQuery<FetchResponse<Game>, Error>({
    queryKey: ["games", gameQuery],
    queryFn: ({ pageParam = 1 }) =>
      apiClient
        .get<FetchResponse<Game>>("/games", {
          params: { ...gameQuery, page: pageParam },
        })
        .then((res) => res.data),
    keepPreviousData: true,
    getNextPageParam: (lastPage, allPages) =>
      lastPage.next ? allPages.length + 1 : undefined,
  });

export default useGames;
