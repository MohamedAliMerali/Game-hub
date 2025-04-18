import apiClient, { FetchResponse } from "./api-client";
import { Genres } from "../entities/Genres";

class GenresService {
  getGenres() {
    const controller = new AbortController();

    const request = apiClient.get<FetchResponse<Genres>>("/genres", {
      signal: controller.signal,
    });
    return { request, cancel: () => controller.abort() };
  }
}

// export new instance of this class as a default object
export default new GenresService();
