import { useEffect, useState } from "react";
import { CanceledError } from "../../services/api-client";
import gamesServices from "../../services/games-services";
import PlatformsService from "../../services/platforms-services";
import { Game } from "../../services/games-services";
import { Platform } from "../../services/platforms-services";
import Card from "./Card";
import DropDown from "./DropDown";

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
  const [platforms, setplatforms] = useState<Platform[]>([]);

  // getGames
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

  // get Platforms
  useEffect(() => {
    const { request, cancel } = PlatformsService.getPlatforms();
    request
      .then((res) => {
        setplatforms(res.data.results);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
      });

    return () => cancel();
  }, []);

  return (
    <main className="grow space-y-10">
      <h1 className="font-bold text-8xl">Games</h1>

      <div className="flex flex-row space-x-8">
        <DropDown
          id="platforms"
          title="Platforms"
          elements={platforms.map((platform) => platform.name)}
        />
        <DropDown
          id="order"
          title="Order by"
          elements={["Relevance", "Rating"]}
        />
      </div>

      {/* games Div */}
      {/* <div className="flex flex-wrap justify-start items-start"> */}
      <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4">
        {games.map((game) => {
          // console.log(">> game", game);
          return <Card key={game.id} game={game}></Card>;
        })}
      </div>
    </main>
  );
};

export default Main;
