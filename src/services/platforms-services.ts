// Todo: Make this service

// export interface Platforms {
//   id: number;
//   name: string;
//   image_background: string;
//   // slug: string;
//   // games_count: number;
// }

interface Platform {
  platform: {
    id: number;
    name: string;
  };
}
export interface Platforms {
  platforms: Platform[];
}

//   interface FetchPlatformsResponse {
//     count: number;
//     results: Platforms[];
//   }
