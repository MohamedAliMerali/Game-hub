import { useState, useEffect } from "react";
import "./App.css";
import "./normalize.css";
import Nav from "./component/Nav";
import Aside from "./component/Aside";
import Main from "./component/Main";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  // if (localStorage.theme !== "dark") {
  //   console.log("hhmmmm dark");
  // } else {
  //   console.log("hhmmmm");
  // }

  useEffect(() => {
    const isDarkMode = localStorage.getItem("darkMode") === "true";
    setDarkMode(isDarkMode);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
    localStorage.darkMode = darkMode.toString();
  };

  return (
    // Container: for dark class
    <div className={darkMode ? "dark" : ""}>
      <div className="containe bg-bg-light text-primary-lightdark:bg-bg-dark dark:text-primary-dark">
        {/* dark test */}
        {/* <div>
          <p className="text-black dark:text-red-200">Hmmmm is it dark yet?</p>
          <p className="text-black">Hmmmm is it dark yet?</p>
        </div> */}

        <Nav></Nav>
        <div className="flex flex-row">
          <Aside></Aside>
          <Main></Main>
        </div>
      </div>
    </div>
  );
}

export default App;
