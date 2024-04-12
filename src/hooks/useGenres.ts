import { CanceledError } from "axios";
import { useEffect, useState } from "react";
import GenresServices, { Genres } from "../services/genres-services";

const useGenres = () => {
  const [genres, setGenres] = useState<Genres[]>([]);
  const [isGenresLoading, setGenresLoading] = useState(false);
  const [genresError, setGenresError] = useState("");

  useEffect(() => {
    // setGenresError("");
    setGenresLoading(true);

    const { request, cancel } = GenresServices.getGenres();
    request
      .then((res) => {
        setGenres(res.data.results);
        setGenresError("");
        setGenresLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setGenresError(err.message);
        setGenresLoading(false);
      });
    return () => cancel();
  }, []);

  return { genres, genresError, isGenresLoading };
};

export default useGenres;
