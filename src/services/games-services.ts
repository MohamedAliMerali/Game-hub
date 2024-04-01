import apiClient from "./api-client";

export interface GamePlatform {
  id: number;
  name: string;
}

export interface GamePlatforms {
  released_at: string;
  platform: GamePlatform;
}

export interface Game {
  id: number;
  name: string;
  // slug: string;
  rating: number;
  background_image: string;
  platforms: GamePlatforms[];
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
