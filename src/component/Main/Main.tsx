import { Card, CardContainer, CardSkeleton } from "./Crads";
import DropDown from "./DropDowns/DropDown.tsx";
import ErrorMessage from "../ErrorMessage/ErrorMessage.tsx";
import useGames from "../../hooks/useGames.ts";
import usePlatforms from "../../hooks/usePlatforms.ts";

const Main = () => {
  const skeletons = [0, 1, 2, 3, 4, 5, 6, 7];

  // getGames
  const { games, gameError, isGameLoading } = useGames();
  // getPlatformes
  const { platforms } = usePlatforms();

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
      {gameError && <ErrorMessage errorMessage={gameError} />}
      <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4">
        {isGameLoading &&
          skeletons.map((num) => (
            <CardContainer key={num}>
              <CardSkeleton />
            </CardContainer>
          ))}
        {games.map((game) => (
          <CardContainer key={game.id}>
            <Card game={game} />
          </CardContainer>
        ))}
      </div>
    </main>
  );
};

export default Main;
