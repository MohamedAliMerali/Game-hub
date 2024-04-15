import { Card, CardContainer, CardSkeleton } from "./Crads";
import ErrorMessage from "../ErrorMessage/ErrorMessage.tsx";
import useGames from "../../hooks/useGames.ts";
import usePlatforms from "../../hooks/usePlatforms.ts";
import { GameQuery } from "../../App.tsx";
import DropDownMenu from "./DropDownMenu/DropDownMenu.tsx";
import ordering from "../../data/ordering.ts";

interface Props {
  gameQuery: GameQuery;
  onFiltering: (gameameQuery: GameQuery) => void;
}

const Main = ({ gameQuery, onFiltering }: Props) => {
  const skeletons = [0, 1, 2, 3, 4, 5, 6, 7];

  // getGames
  const { games, gameError, isGameLoading } = useGames(gameQuery);
  // getPlatformes
  const { platforms } = usePlatforms();

  if (gameError) return <ErrorMessage errorMessage={gameError} />;

  return (
    <main className="grow space-y-10">
      {/* Title */}
      <h1 className="font-bold text-8xl">Games</h1>
      {/* Dropdown menu test*/}
      <div className="space-x-8">
        <DropDownMenu
          id={"parent_platforms"}
          title={"Platforms"}
          queryParameter={"id"}
          MenuItems={platforms.map((platform) => ({
            id: platform.id,
            value: platform.slug,
            label: platform.name,
          }))}
          gameQuery={gameQuery}
          onFiltering={onFiltering}
        />
        <DropDownMenu
          id={"ordering"}
          title={"Order By"}
          queryParameter={"value"}
          MenuItems={ordering}
          gameQuery={gameQuery}
          onFiltering={onFiltering}
        />
      </div>

      {/* games Div */}
      <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4">
        {isGameLoading &&
          skeletons.map((num) => (
            <CardContainer key={num}>
              <CardSkeleton />
            </CardContainer>
          ))}
        {!isGameLoading &&
          games.map((game) => (
            <CardContainer key={game.id}>
              <Card game={game} />
            </CardContainer>
          ))}
      </div>
    </main>
  );
};

export default Main;
