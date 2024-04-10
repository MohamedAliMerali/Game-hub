import { Card, CardContainer, CardSkeleton } from "./Crads";
import DropDown from "./DropDowns/DropDown.tsx";
import ErrorMessage from "../ErrorMessage/ErrorMessage.tsx";
import useGames from "../../hooks/useGames.ts";
import usePlatforms from "../../hooks/usePlatforms.ts";
import { GameQuery } from "../../App.tsx";

interface Props {
  gameQuery: GameQuery;
  onFiltering: (gameameQuery: GameQuery) => void;
}

const Main = ({ gameQuery, onFiltering }: Props) => {
  const skeletons = [0, 1, 2, 3, 4, 5, 6, 7];
  const order = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average rating" },
  ];

  // getGames
  const { games, gameError, isGameLoading } = useGames(gameQuery);
  // getPlatformes
  const { platforms } = usePlatforms();

  // {
  //   platforms.forEach((plt) => console.log(plt.name));
  // }

  return (
    <main className="grow space-y-10">
      {/* Title */}
      <h1 className="font-bold text-8xl">Games</h1>
      {/* Dropdown menu */}
      <div className="flex flex-row space-x-8">
        <DropDown
          id="parent_platforms"
          title="Platforms"
          elements={platforms.map((platform) => ({
            value: platform.name,
            label: platform.name,
          }))}
          gameQuery={gameQuery}
          onFiltering={onFiltering}
        />
        <DropDown
          id="ordering"
          title="Order by"
          elements={order}
          gameQuery={gameQuery}
          onFiltering={onFiltering}
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
