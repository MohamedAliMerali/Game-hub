import { useQuery } from "@tanstack/react-query";
import apiClient, { FetchResponse } from "../services/api-client";
import { Genres } from "../entities/Genres";

const useGenres = () =>
  useQuery<FetchResponse<Genres>, Error>({
    queryKey: ["genres"],
    queryFn: () =>
      apiClient.get<FetchResponse<Genres>>("/genres").then((res) => res.data),
    staleTime: 24 * 60 * 60 * 1000, // (24h) genres list hardly changes
    // initialData: {count: genres.length, results: genres}
    // those are static data that are imported
  });

export default useGenres;
