// todo: to be removed (or to be documented since we moved this code into the layout component)

import { ReactNode, useContext } from "react";
import DarkModeContext from "../component/DarkMode/DarkModeContext";

interface Props {
  children: ReactNode;
}

const useDarkMode = () => useContext(DarkModeContext);

const PageContainer = ({ children }: Props) => {
  const { darkMode } = useDarkMode();

  return (
    // Container: page background + dark class
    <div
      className={
        "min-h-screen bg-bg-light text-primary-light dark:bg-bg-dark dark:text-primary-dark " +
        (darkMode ? " dark" : "")
      }
    >
      {/* Content Container */}
      <div className="container mx-auto px-8 pb-16">{children}</div>
    </div>
  );
};

export default PageContainer;
