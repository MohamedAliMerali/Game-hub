import { useEffect, useState } from "react";
import gamesServices from "../../services/games-services";
import { CanceledError } from "../../services/api-client";
import { Game } from "../../services/games-services";
import Card from "./Card";

const Main = () => {
  // const gameTest: Game = {
  //   id: 16,
  //   name: "The witcher 3",
  //   background_image:
  //     "https://media.rawg.io/media/games/20a/20aa03a10cda45239fe22d035c0ebe64.jpg",
  //   rating: 93,
  //   platforms: [],
  // };

  const [games, setGames] = useState<Game[]>([]);

  useEffect(() => {
    const { request, cancel } = gamesServices.getGames();
    request
      .then((res) => {
        setGames(res.data.results);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
      });

    return () => cancel();
  }, []);

  return (
    <main className="grow">
      {/* <h1>Games</h1>
      <div>

        <div></div>
      </div> */}

      {/* games Div */}
      <div className="flex flex-wrap justify-evenly items-start">
        {games.map((game) => {
          console.log(">> game", game);
          return <Card key={game.id} game={game}></Card>;
        })}
      </div>
    </main>
  );
};

export default Main;
