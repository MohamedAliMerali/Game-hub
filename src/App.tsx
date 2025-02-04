import { useState, useEffect } from "react";
import "normalize.css";
import "./App.css";
import PageContainer from "./UI/PageContainer";
import Nav from "./component/Nav";
import Aside from "./component/Aside";
import Main from "./component/Main";

export interface GameQuery {
  page: number;
  search: string;
  // platforms: string;
  parent_platforms: string;
  genres: string | null;
  ordering: string;
}

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

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
      <Nav
        darkMode={darkMode}
        onToggleDarkMode={toggleDarkMode}
        gameQuery={gameQuery}
        onSearch={setGameQuery}
      ></Nav>
      <div className="flex flex-row mt-16">
        <Aside gameQuery={gameQuery} onSelectGenres={setGameQuery} />
        <Main gameQuery={gameQuery} onFiltering={setGameQuery} />
      </div>
    </PageContainer>
  );
}

export default App;
