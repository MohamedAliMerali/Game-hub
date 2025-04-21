import { useQuery } from "@tanstack/react-query";
import apiClient, { FetchResponse } from "../services/api-client";
import Screenshot from "../entities/Screenshots";

const useScreenshots = (game_pk: number) =>
  useQuery({
    queryKey: ["screenshots", game_pk],
    queryFn: () =>
      apiClient
        .get<FetchResponse<Screenshot>>(`/games/${game_pk}/screenshots`)
        .then((res) => res.data.results),
    staleTime: 2 * 24 * 60 * 60 * 1000,
  });

export default useScreenshots;
