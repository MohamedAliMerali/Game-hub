import Genre from "../../../entities/Genres";
import cropImg from "../../../utils/cropImg";

interface Props {
  genre: Genre;
  selectedGenre: string | null | undefined;
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
