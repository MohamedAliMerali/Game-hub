import allGenres from "../../assets/All-genres.jpg";
import useGenres from "../../hooks/useGenres.ts";
import useGameQueryStore from "../../stores/gameQueryStore.ts";
import ErrorMessage from "../ErrorComponents/ErrorMessage/ErrorMessage.tsx";
import Card from "./Cards/Card.tsx";
import SideCardContainer from "./Cards/SideCardContainer.tsx";
import SideCardSkeleton from "../../UI/SideCardSkeleton.tsx";

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
            <SideCardContainer key={num} id={num} genreSlug={""}>
              <SideCardSkeleton />
            </SideCardContainer>
          ))}

        {/* when loading is finished */}
        {!isLoading && (
          <>
            <SideCardContainer id={-1} genreSlug={null}>
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
            </SideCardContainer>

            {genres?.results.map((genre) => (
              <SideCardContainer
                key={genre.id}
                id={genre.id}
                genreSlug={genre.slug}
              >
                <Card genre={genre} selectedGenre={gameQuery.genres} />
              </SideCardContainer>
            ))}
          </>
        )}
      </ul>
    </aside>
  );
};

export default Aside;
