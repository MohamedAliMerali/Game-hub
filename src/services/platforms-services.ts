import apiClient, { FetchResponse } from "./api-client";
// Todo: Make this service

export interface Platform {
  id: number;
  name: string;
  slug: string;
  image: string;
  image_background: string;
}

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
