import ErrorMessage from "../ErrorMessage/ErrorMessage.tsx";
import useGenres from "../../hooks/useGenres.ts";
import CardContainer from "./Cards/CardContainer.tsx";
import Card from "./Cards/Card.tsx";
import CardSkeleton from "./Cards/CardSkeleton.tsx";

const Aside = () => {
  const skeletons = [0, 1, 2, 3, 4, 5, 6, 7];
  const { genres, genresError, isGenresLoading } = useGenres();

  return (
    <aside className="bg-transparent hidden md:block w-[28rem] space-y-6">
      <h2 className="text-inherit dark:text-inherit text-6xl font-semibold">
        Genres
      </h2>
      {genresError && <ErrorMessage errorMessage={genresError} />}

      <ul className="my-6 pr-4 space-y-6 text-4xl">
        {isGenresLoading &&
          skeletons.map((num) => (
            <CardContainer id={num}>
              <CardSkeleton></CardSkeleton>
            </CardContainer>
          ))}
        {genres.map((genre) => (
          <CardContainer key={genre.id} id={genre.id}>
            <Card genre={genre}></Card>
          </CardContainer>
        ))}
      </ul>
    </aside>
  );
};

export default Aside;
