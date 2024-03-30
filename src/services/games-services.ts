import apiClient from "./api-client";

interface Platforms {
  platform: {
    id: number;
    name: string;
  };
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  rating: number;
  platforms: Platforms[];
  // slug: string;
}

interface FetchGamesResponse {
  count: number;
  results: Game[];
}

class GamesService {
  getGames() {
    const controller = new AbortController();

    const request = apiClient.get<FetchGamesResponse>("/games", {
      signal: controller.signal,
    });
    return { request, cancel: () => controller.abort() };
  }
}

// export new instance of this class as a default object
export default new GamesService();
