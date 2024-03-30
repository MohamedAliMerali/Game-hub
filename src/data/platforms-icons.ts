// import { FaWindows } from "react-icons/fa";
import { FaWindows } from "react-icons/fa6";
import { FaPlaystation } from "react-icons/fa6";
import { SiPlaystationvita } from "react-icons/si";

import { FaXbox } from "react-icons/fa6";
import { FaLinux } from "react-icons/fa6";
import { IoLogoAndroid } from "react-icons/io";

import { BsNintendoSwitch } from "react-icons/bs";
import { FaApple } from "react-icons/fa6";
import { SiMacos } from "react-icons/si";

import { SiWii } from "react-icons/si";
import { IconType } from "react-icons";

// export default {
//   PC: FaWindows,
//   "PlayStation 5": FaPlaystation,
//   "PlayStation 4": FaPlaystation,
//   "PlayStation 3": FaPlaystation,
//   "PlayStation 2": FaPlaystation,
//   PlayStation: FaPlaystation,
//   "Xbox One": FaXbox,
//   "Xbox Series S/X": FaXbox,
//   "Xbox 360": FaXbox,
//   Xbox: FaXbox,
//   "Nintendo Switch": BsNintendoSwitch,
//   "Nintendo 3DS": BsNintendoSwitch,
//   "Nintendo DS": BsNintendoSwitch,
//   "Nintendo DSI": BsNintendoSwitch,
//   IOS: FaApple,
//   Android: IoLogoAndroid,
//   macOS: SiMacos,
//   Linux: FaLinux,
//   "PS Vita": SiPlaystationvita,
//   PSP: FaPlaystation,
//   "Wii U": SiWii,
//   Wii: SiWii,
// };

// Platform icons mapping
// const platformIcons = {
export default {
  PC: FaWindows,
  PlayStation: FaPlaystation,
  Xbox: FaXbox,
  IOS: FaApple,
  Android: IoLogoAndroid,
  macOS: SiMacos,
  Linux: FaLinux,
  Nintendo: BsNintendoSwitch,
  // Add other mappings as necessary
} as { [key: string]: IconType };

// const platforms = [
//   {
//     platform: {
//       id: 21,
//       name: "Android",
//       slug: "android",
//       image: null,
//       year_end: null,
//       year_start: null,
//       games_count: 52342,
//       image_background:
//         "https://media.rawg.io/media/games/b4e/b4e4c73d5aa4ec66bbf75375c4847a2b.jpg",
//     },
//     released_at: "2010-07-21",
//     requirements_en: {
//       minimum: "4.4 and up",
//     },
//     requirements_ru: null,
//   },
//   {
//     platform: {
//       id: 19,
//       name: "PS Vita",
//       slug: "ps-vita",
//       image: null,
//       year_end: null,
//       year_start: null,
//       games_count: 1447,
//       image_background:
//         "https://media.rawg.io/media/games/e4f/e4fb3fd188f61fabec48dca22e6ef28a.jpg",
//     },
//     released_at: "2010-07-21",
//     requirements_en: null,
//     requirements_ru: null,
//   },
//   {
//     platform: {
//       id: 18,
//       name: "PlayStation 4",
//       slug: "playstation4",
//       image: null,
//       year_end: null,
//       year_start: null,
//       games_count: 6794,
//       image_background:
//         "https://media.rawg.io/media/games/021/021c4e21a1824d2526f925eff6324653.jpg",
//     },
//     released_at: "2010-07-21",
//     requirements_en: null,
//     requirements_ru: null,
//   },
// ];
