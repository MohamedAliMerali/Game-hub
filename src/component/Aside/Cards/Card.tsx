import { Genres } from "../../../services/genres-services";

interface Props {
  genre: Genres;
  // onClick: (genreName: string) => void;
}

const Card = ({ genre }: Props) => {
  return (
    <>
      <div
        className="w-20 h-20 rounded-2xl overflow-hidden"
        // onClick={() => onClick(genre.name)}
      >
        <img
          className="w-20 h-20 object-cover"
          src={genre.image_background}
          alt="genre.name"
        />
      </div>
      <div>{genre.name}</div>
    </>
  );
};

export default Card;
