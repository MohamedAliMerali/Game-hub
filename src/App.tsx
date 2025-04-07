import { useState, useEffect } from "react";
import "normalize.css";
import "./App.css";
import PageContainer from "./UI/PageContainer";
import Nav from "./component/Nav";
import Aside from "./component/Aside";
import Main from "./component/Main";
import { GameQuery } from "./stores/gameQueryStore";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const isDarkMode = localStorage.getItem("darkMode") === "true";
    setDarkMode(isDarkMode);
  }, []);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem("darkMode", newMode.toString());
    console.log(">> Dark Mode changed, newMode:", newMode);
  };

  return (
    <PageContainer darkMode={darkMode}>
      <Nav darkMode={darkMode} onToggleDarkMode={toggleDarkMode}></Nav>
      <div className="flex flex-row mt-16">
        <Aside gameQuery={gameQuery} onSelectGenres={setGameQuery} />
        <Main gameQuery={gameQuery} onFiltering={setGameQuery} />
      </div>
    </PageContainer>
  );
}

export default App;
