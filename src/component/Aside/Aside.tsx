import ErrorMessage from "../ErrorMessage/ErrorMessage.tsx";
import useGenres from "../../hooks/useGenres.ts";
import CardContainer from "./Cards/CardContainer.tsx";
import Card from "./Cards/Card.tsx";
import CardSkeleton from "./Cards/CardSkeleton.tsx";
import { GameQuery } from "../../App.tsx";
import allGenres from "../../assets/All-genres.jpg";

interface Props {
  gameQuery: GameQuery;
  onSelectGenres: (gameQuery: GameQuery) => void;
}

const Aside = ({ gameQuery, onSelectGenres }: Props) => {
  const skeletons = [0, 1, 2, 3, 4, 5, 6, 7];
  const { genres, genresError, isGenresLoading } = useGenres();

  return (
    <aside className="bg-transparent hidden md:block w-[23rem] space-y-6">
      <h2 className="text-inherit dark:text-inherit text-6xl font-semibold">
        Genres
      </h2>
      {genresError && <ErrorMessage errorMessage={genresError} />}

      <ul className="my-6 pr-4 space-y-6 text-4xl">
        {isGenresLoading &&
          skeletons.map((num) => (
            <CardContainer
              key={num}
              id={num}
              genreSlug={""}
              gameQuery={gameQuery}
              handleClick={onSelectGenres}
            >
              <CardSkeleton></CardSkeleton>
            </CardContainer>
          ))}
        {/* when loading is finished */}
        {!isGenresLoading && (
          <>
            <CardContainer
              id={-1}
              genreSlug={null}
              gameQuery={gameQuery}
              handleClick={onSelectGenres}
            >
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

            {genres.map((genre) => (
              <CardContainer
                key={genre.id}
                id={genre.id}
                genreSlug={genre.slug}
                gameQuery={gameQuery}
                handleClick={onSelectGenres}
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
