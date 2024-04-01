# Games interfaces

```tsx
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
```

# Platforms interfaces

```tsx
interface Platform {
  id: number;
  name: string;
  image: string;
  image_background: string;
}

interface FetchPlatformsResponse {
  count: number;
  results: Platform[];
}
```

# Others

```tsx
// export interface Platforms {
//   id: number;
//   name: string;
//   image_background: string;
//   // slug: string;
//   // games_count: number;
// }

// interface Platform {
//   platform: {
//     id: number;
//     name: string;
//   };
// }

//   interface FetchPlatformsResponse {
//     count: number;
//     results: Platforms[];
//   }

// interface Platform {
//   id: number;
//   name: string;
// }

// export interface Platforms {
//   platform: Platform;
// }

// interface FetchPlatformsResponse {
//   count: number;
//   results: Platforms[];
// }
```
