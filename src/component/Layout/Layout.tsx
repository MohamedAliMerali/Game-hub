import { useContext } from "react";
import { Outlet } from "react-router-dom";
import DarkModeContext from "../DarkMode/DarkModeContext";
import DarkModeProvider from "../DarkMode/DarkModeProvider";
import Nav from "../Nav";

const useDarkMode = () => useContext(DarkModeContext);

const Layout = () => {
  const { darkMode } = useDarkMode();
  return (
    <DarkModeProvider>
      {/* // Container: page background + dark class */}
      <div
        className={
          "min-h-screen bg-bg-light text-primary-light dark:bg-bg-dark dark:text-primary-dark " +
          (darkMode ? " dark" : "")
        }
      >
        <Nav />
        {/* Content Container */}
        <div className="container mx-auto px-8 pb-16">
          <Outlet />
        </div>
      </div>
    </DarkModeProvider>
  );
};

export default Layout;
