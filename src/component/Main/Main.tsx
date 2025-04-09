import { Fragment } from "react";
import useGames from "../../hooks/useGames.ts";
import usePlatforms from "../../hooks/usePlatforms.ts";
import ErrorMessage from "../ErrorMessage/ErrorMessage.tsx";
import { Card, CardContainer, CardSkeleton } from "./Crads";
import useGameQueryStore from "../../stores/gameQueryStore.ts";
import PlatformSelector from "./PlatformSelector/PlatformSelector.tsx";
import OrderSelector from "./OrderSelector/OrderSelector.tsx";

const Main = () => {
  const skeletons = [0, 1, 2, 3, 4, 5, 6, 7];
  const { gameQuery } = useGameQueryStore();

  const {
    data: games,
    error,
    isLoading,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
  } = useGames(gameQuery);
  // getPlatformes
  const { data: platforms } = usePlatforms();

  if (error) return <ErrorMessage errorMessage={error.message} />;

  return (
    <main className="grow space-y-10">
      {/* Title */}
      <h1 className="font-bold text-8xl">{gameQuery.genres || ""} Games</h1>

      {/* Dropdown menu test*/}
      <div className="space-x-8">
        <OrderSelector />
        <PlatformSelector />
        {/* // Todo: Change those (even tho they are pretty reusable) */}
        {/* 
        i worked hard for those but now i need to drop them
        and use seperate ones
        <DropDownMenu
          id={"parent_platforms"}
          title={"Platforms"}
          queryParameter={"id"}
          MenuItems={platforms?.results.map((platform) => ({
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
        /> */}
      </div>

      {/* games Div */}
      <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4">
        {isLoading &&
          skeletons.map((num) => (
            <CardContainer key={num}>
              <CardSkeleton />
            </CardContainer>
          ))}
        {!isLoading &&
          games.pages.map((page, index) => (
            <Fragment key={index}>
              {page.results.map((game) => (
                <CardContainer key={game.id}>
                  <Card game={game} />
                </CardContainer>
              ))}
            </Fragment>
          ))}
      </div>

      {/* "Load more" button */}
      {hasNextPage && (
        <button
          className=""
          type="button"
          disabled={isFetchingNextPage}
          onClick={() => fetchNextPage()}
        >
          {isFetchingNextPage ? "Loading..." : "Load more"}
        </button>
      )}
    </main>
  );
};

export default Main;
