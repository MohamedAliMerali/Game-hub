import apiClient, { FetchResponse } from "./api-client";

export interface Genres {
  id: number;
  name: string;
  image_background: string;
  slug: string;
  // games_count: number;
}

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
