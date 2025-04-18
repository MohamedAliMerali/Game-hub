export interface GamePlatform {
  id: number;
  name: string;
}
export interface GamePlatforms {
  released_at: string;
  platform: GamePlatform;
}
