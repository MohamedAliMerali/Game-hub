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
    // todo: i changed min-h-dvh from min-h-screen, check if there were any issues
    <div
      // todo: check why this div display is set to flex
      className={
        "min-h-dvh bg-bg-light text-primary-light dark:bg-bg-dark dark:text-primary-dark " +
        (darkMode ? " dark" : "")
      }
    >
      {/* Content Container */}
      <div className="container mx-auto px-8 pb-16">{children}</div>
    </div>
  );
};

export default PageContainer;
