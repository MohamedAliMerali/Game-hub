import { ReactNode, useReducer } from "react";
import DarkModeContext from "./DarkModeContext";
import counterReducer from "./DarkModeReducer";

interface Props {
  children: ReactNode;
}

const DarkModeProvider = ({ children }: Props) => {
  const [darkMode, dispatch] = useReducer(counterReducer, false);

  return (
    <DarkModeContext.Provider value={{ darkMode, dispatch }}>
      {children}
    </DarkModeContext.Provider>
  );
};

export default DarkModeProvider;
