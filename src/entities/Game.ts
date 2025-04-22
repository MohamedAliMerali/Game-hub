import Platform from "./Platform";
import Genre from "./Genres";
import Publisher from "./Publisher";

export default interface Game {
  // id: number;
  // name: string;
  // slug: string;
  // rating: number;
  // rating_top: number;
  // background_image: string;
  // platforms: GamePlatforms[];
  // publisher: Publisher[];

  id: number;
  name: string;
  name_original: string; // Name original
  slug: string;
  rating: number;
  rating_top: number;
  background_image: string;
  publisher: Publisher[];
  genres: Genre[];
  publishers: Publisher[];
  description_raw: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}
