import { useQuery } from "@tanstack/react-query";
import apiClient, { FetchResponse } from "../services/api-client";
import { Trailer } from "../entities/Trailer";

const useTrailers = (id: number) =>
  useQuery<FetchResponse<Trailer>, Error>({
    queryKey: ["trailers", id],
    queryFn: () =>
      apiClient
        .get<FetchResponse<Trailer>>(`/games/${id}/movies`)
        .then((res) => res.data),
    staleTime: 24 * 60 * 60 * 1000,
  });

export default useTrailers;
