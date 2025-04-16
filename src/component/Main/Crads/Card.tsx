import { Game } from "../../../services/games-services";
import Platforms from "../Platforms";
import cropImg from "../../../utils/cropImg";
import ratingEmoji from "../../../utils/ratingEmoji";
import { useState } from "react";
import { Link } from "react-router-dom";

interface Props {
  game: Game;
}

const Card = ({ game }: Props) => {
  const [, setImageIsLoading] = useState(true);

  return (
    <Link to={"/games/" + game.slug}>
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
    </Link>
  );
};

export default Card;
