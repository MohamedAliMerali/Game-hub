import { IconType } from "react-icons";
// import { FaWindows } from "react-icons/fa";
import { FaWindows } from "react-icons/fa6";
import { FaPlaystation } from "react-icons/fa6";
// import { SiPlaystationvita } from "react-icons/si";
import { FaXbox } from "react-icons/fa6";
import { FaLinux } from "react-icons/fa6";
import { IoLogoAndroid } from "react-icons/io";
import { BsNintendoSwitch } from "react-icons/bs";
import { FaApple } from "react-icons/fa6";
import { SiMacos } from "react-icons/si";
// import { SiWii } from "react-icons/si";

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
