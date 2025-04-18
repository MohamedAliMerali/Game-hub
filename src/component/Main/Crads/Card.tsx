import { Game } from "../../../entities/Game";
import Platforms from "../Platforms";
import cropImg from "../../../utils/cropImg";
import ratingEmoji from "../../../utils/ratingEmoji";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface Props {
  game: Game;
}

const Card = ({ game }: Props) => {
  const [, setImageIsLoading] = useState(true);

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
        <img
          src={cropImg(game.background_image)}
          alt={game.name}
          onLoad={() => setImageIsLoading(false)}
        />
        {/* PS: we can handle error with the "onError" attribute*/}
      </div>
      {/* info's container */}
      <div className="p-8 space-y-4">
        {/* platforms & rating div */}
        <div className="flex justify-between items-center">
          {/* <Platforms /> */}
          <Platforms platforms={game.platforms} />
          <div className="rounded-lg px-4 bg-rating-bg-light font-medium dark:bg-rating-bg-dark dark:text-rating-color-dark">
            {game.rating}
          </div>
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
