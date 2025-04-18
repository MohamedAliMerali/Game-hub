import { GamePlatforms } from "./GamePlatforms";

export interface Game {
  id: number;
  name: string;
  slug: string;
  rating: number;
  rating_top: number;
  background_image: string;
  platforms: GamePlatforms[];
}
