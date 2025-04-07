import allGenres from "../../assets/All-genres.jpg";
import useGenres from "../../hooks/useGenres.ts";
import useGameQueryStore from "../../stores/gameQueryStore.ts";
import ErrorMessage from "../ErrorMessage/ErrorMessage.tsx";
import Card from "./Cards/Card.tsx";
import CardContainer from "./Cards/CardContainer.tsx";
import CardSkeleton from "./Cards/CardSkeleton.tsx";

const Aside = () => {
  const skeletons = [0, 1, 2, 3, 4, 5, 6, 7];
  const { data: genres, error, isLoading } = useGenres();
  const { gameQuery } = useGameQueryStore();

  // if (error) return <ErrorMessage errorMessage={error.message} />;
  // Todo; when the genres are loading and u click an error will happen, fix that
  return (
    <aside className="bg-transparent hidden md:block w-[23rem] space-y-6">
      <h2 className="text-inherit dark:text-inherit text-6xl font-semibold">
        Genres
      </h2>
      {error && <ErrorMessage errorMessage={error.message} />}

      <ul className="my-6 pr-4 space-y-6 text-4xl">
        {isLoading &&
          skeletons.map((num) => (
            <CardContainer key={num} id={num} genreSlug={""}>
              <CardSkeleton></CardSkeleton>
            </CardContainer>
          ))}
        {/* when loading is finished */}
        {!isLoading && (
          <>
            <CardContainer id={-1} genreSlug={null}>
              {/* All-games.jpg */}
              {/* TODO: maybe we wanna change this so we use normal cards */}
              <div className="w-20 h-20 rounded-2xl overflow-hidden">
                <img
                  className="w-20 h-20 object-cover"
                  src={allGenres}
                  alt="All games"
                />
              </div>
              <div>All Genres</div>
            </CardContainer>

            {genres?.results.map((genre) => (
              <CardContainer
                key={genre.id}
                id={genre.id}
                genreSlug={genre.slug}
              >
                <Card genre={genre} selectedGenre={gameQuery.genres}></Card>
              </CardContainer>
            ))}
          </>
        )}
      </ul>
    </aside>
  );
};

export default Aside;
