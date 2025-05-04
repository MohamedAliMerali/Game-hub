import { Fragment } from "react";
import useGames from "../../hooks/useGames.ts";
import InfiniteScroll from "react-infinite-scroll-component";
import ErrorMessage from "../ErrorComponents/ErrorMessage/ErrorMessage.tsx";
import useGameQueryStore from "../../stores/gameQueryStore.ts";
import { Card, CardContainer, CardSkeleton } from "./Crads";
import PlatformSelector from "./PlatformSelector/PlatformSelector.tsx";
import OrderSelector from "./OrderSelector/OrderSelector.tsx";
import Loading from "../Loading/Loading.tsx";

const Main = () => {
  const skeletons = [0, 1, 2, 3, 4, 5, 6, 7];
  const { gameQuery } = useGameQueryStore();

  const {
    data: games,
    error,
    isLoading,
    hasNextPage,
    fetchNextPage,
  } = useGames(gameQuery);
  const fetchedGamesCount =
    games?.pages.reduce((total, page) => total + page.results.length, 0) || 0;

  if (error) return <ErrorMessage errorMessage={error.message} />;

  return (
    <main className="grow space-y-10">
      {/* Title + Dropdown menu*/}
      <h1 className="font-bold text-8xl">
        {gameQuery.genres
          ? gameQuery.genres.charAt(0).toUpperCase() + gameQuery.genres.slice(1)
          : ""}{" "}
        Games
      </h1>

      {/* Selectors */}
      {/* // todo: when selecting a game then returning to the main page, the menus won't show */}
      <PlatformSelector />
      <OrderSelector />

      {/* Games Div */}
      <InfiniteScroll
        style={{ overflow: "visible" }}
        dataLength={fetchedGamesCount}
        next={fetchNextPage}
        hasMore={!!hasNextPage}
        loader={<Loading loadingMsg={"Loading"} />}
        endMessage={
          <p className="text-center p-4">
            <b>Yay! You have seen it all</b>
          </p>
        }
      >
        {/* we can use flex or grids, if it is the case, 
        go set the max-w of the card container to "md" => maw-w-md */}
        {/* or simply add more columns (i liked flex better) */}
        {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"> */}
        <div className="flex flex-wrap">
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
      </InfiniteScroll>

      {/* "Load more" button */}
      {/* {hasNextPage && (
        <button
          className=""
          type="button"
          disabled={isFetchingNextPage}
          onClick={() => fetchNextPage()}
        >
          {isFetchingNextPage ? "Loading..." : "Load more"}
        </button>
      )} */}
    </main>
  );
};

export default Main;
