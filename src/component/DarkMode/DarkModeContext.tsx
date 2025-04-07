import { createContext } from "react";
import { DarkModeAction } from "./DarkModeReducer";

interface DarkModeContextType {
  darkMode: boolean;
  dispatch: React.Dispatch<DarkModeAction>;
}

const DarkModeContext = createContext({} as DarkModeContextType);

export default DarkModeContext;
