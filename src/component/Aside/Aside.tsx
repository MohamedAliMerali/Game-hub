import { useEffect, useState } from "react";
// import apiClient from "../../services/api-client";
import GenresServices, { Genres } from "../../services/genres-services";
import { CanceledError } from "../../services/api-client";

const Aside = () => {
  const [genres, setGenres] = useState<Genres[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
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
    <aside className="bg-transparent hidden md:block">
      <h2 className="text-inherit dark:text-inherit text-6xl font-semibold">
        Genres
      </h2>
      <ul className="my-6 pr-4 space-y-4 text-3xl">
        {error && <p className="text-red-700">{error}</p>}
        {isLoading && (
          <svg
            className="animate-spin h-5 w-5 mr-3 ..."
            viewBox="0 0 24 24"
          ></svg>
        )}
        {genres.map((genre) => (
          <li
            className="flex flex-row items-center space-x-2 hover:cursor-pointer hover:font-medium hover hover:scale-110 hover:translate-x-4 transition-all "
            key={genre.id}
          >
            {/* img container */}
            <div className="w-16 h-16 rounded-2xl overflow-hidden">
              <img
                className="w-16 h-16 object-cover"
                src={genre.image_background}
                alt="genre.name"
              />
            </div>
            <div className="">{genre.name}</div>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Aside;
