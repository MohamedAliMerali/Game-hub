import { Game } from "../../../entities/Game";
import Platforms from "../Platforms";
import cropImg from "../../../utils/cropImg";
import ratingEmoji from "../../../utils/ratingEmoji";
import { useNavigate } from "react-router-dom";
import GameRating from "./GameRating";

interface Props {
  game: Game;
}

const Card = ({ game }: Props) => {
  const navigate = useNavigate();
  const handleNavigation = () => {
    navigate("/games/" + game.slug, {
      state: { id: game.id, slug: game.slug, name: game.name },
    });
  };

  return (
    // <Link to={"/games/" + game.slug}>
    // </Link>
    <div onClick={handleNavigation}>
      {/* img container */}
      <div>
        {/* {imageIsLoading && <ImageLoading />} */}
        {/* PS: we can handle error with the "onError" attribute*/}
        <img src={cropImg(game.background_image)} alt={game.name} />
      </div>
      {/* info's container */}
      <div className="p-8 space-y-4">
        {/* platforms & rating div */}
        <div className="flex justify-between items-center">
          <Platforms parent_platforms={game.parent_platforms} />
          <GameRating rating={game.rating} />
        </div>
        <h3 className="font-medium text-4xl">{game.name}</h3>
        <div className="w-12">
          <img
            src={ratingEmoji(game.rating_top).imgSrc}
            alt={ratingEmoji(game.rating_top).imgAlt}
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
