import apiClient, { FetchResponse } from "./api-client";
import { Platform } from "../entities/Platform";
class PlatformsService {
  getPlatforms() {
    const controller = new AbortController();

    const request = apiClient.get<FetchResponse<Platform>>(
      "/platforms/lists/parents",
      {
        signal: controller.signal,
      }
    );
    return { request, cancel: () => controller.abort() };
  }
}

// export new instance of this class as a default object
export default new PlatformsService();
