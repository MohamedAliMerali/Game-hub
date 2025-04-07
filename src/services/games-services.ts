import { GameQuery } from "../stores/gameQueryStore";
import apiClient, { FetchResponse } from "./api-client";

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
  rating_top: number;
  background_image: string;
  platforms: GamePlatforms[];
}

class GamesService {
  getGames(gameQuery: GameQuery) {
    const controller = new AbortController();
    console.log("games-services:", gameQuery);

    const request = apiClient.get<FetchResponse<Game>>("/games", {
      // TODO: i did this only to add custom stuff, remove it
      params: { ...gameQuery },
      signal: controller.signal,
    });
    return { request, cancel: () => controller.abort() };
  }
}

// export new instance of this class as a default object
export default new GamesService();
