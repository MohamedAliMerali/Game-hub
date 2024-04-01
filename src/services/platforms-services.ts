import apiClient from "./api-client";
// Todo: Make this service

export interface Platform {
  id: number;
  name: string;
  image: string;
  image_background: string;
}

interface FetchPlatformsResponse {
  count: number;
  results: Platform[];
}

class PlatformsService {
  getPlatforms() {
    const controller = new AbortController();

    const request = apiClient.get<FetchPlatformsResponse>("/platforms", {
      signal: controller.signal,
    });
    return { request, cancel: () => controller.abort() };
  }
}

// export new instance of this class as a default object
export default new PlatformsService();
