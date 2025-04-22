import { GameQuery } from "../stores/gameQueryStore";
import apiClient, { FetchResponse } from "./api-client";
import Game from "../entities/Game";

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
