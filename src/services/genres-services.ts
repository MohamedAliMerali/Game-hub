import apiClient from "./api-client";

export interface Genres {
  id: number;
  name: string;
  image_background: string;
  slug: string;
  // games_count: number;
}

interface FetchGenresResponse {
  count: number;
  results: Genres[];
}

class GenresService {
  getGenres() {
    const controller = new AbortController();

    const request = apiClient.get<FetchGenresResponse>("/genres", {
      signal: controller.signal,
    });
    return { request, cancel: () => controller.abort() };
  }
}

// export new instance of this class as a default object
export default new GenresService();
