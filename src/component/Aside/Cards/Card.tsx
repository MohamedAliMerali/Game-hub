import { Genres } from "../../../entities/Genres";
import cropImg from "../../../utils/cropImg";

interface Props {
  genre: Genres;
  selectedGenre: string | null | undefined;
  // Todo: when you find why the null, remove this
}

const Card = ({ genre, selectedGenre }: Props) => {
  return (
    <>
      <div className="w-20 h-20 rounded-2xl overflow-hidden hover:cursor-pointer">
        <img
          className="w-20 h-20 object-cover"
          src={cropImg(genre.image_background)}
          alt={genre.name}
        />
      </div>
      <div className={selectedGenre === genre.slug ? "font-bold" : ""}>
        {genre.name}
      </div>
    </>
  );
};

export default Card;
