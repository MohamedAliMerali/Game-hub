import { useEffect, useState } from "react";
import GenresServices, { Genres } from "../../services/genres-services";
import { CanceledError } from "../../services/api-client";
import Loading from "../Loading.tsx";
import ErrorMessage from "../ErrorMessage/ErrorMessage.tsx";

const Aside = () => {
  const [genres, setGenres] = useState<Genres[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setError("");
    setLoading(true);
    const { request, cancel } = GenresServices.getGenres();
    request
      .then((res) => {
        setGenres(res.data.results);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      });

    return () => cancel();
  }, []);

  return (
    <aside className="bg-transparent hidden md:block w-[28rem] space-y-6">
      <h2 className="text-inherit dark:text-inherit text-6xl font-semibold">
        Genres
      </h2>
      {isLoading && <Loading loadingMsg="Loading" />}
      {error && <ErrorMessage errorMessage={error} />}
      <ul className="my-6 pr-4 space-y-6 text-4xl">
        {genres.map((genre) => (
          <li
            className="flex flex-row items-center space-x-2 hover:cursor-pointer hover:font-medium hover hover:scale-110 hover:translate-x-4 transition-all "
            key={genre.id}
          >
            {/* img container */}
            <div className="w-20 h-20 rounded-2xl overflow-hidden">
              <img
                className="w-20 h-20 object-cover"
                src={genre.image_background}
                alt="genre.name"
              />
            </div>
            <div>{genre.name}</div>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Aside;
