import { SyntheticEvent, useState } from "react";
import { Game } from "../../../services/games-services";
import Platforms from "../Platforms";
import cropImg from "../../../utils/cropImg";
import ratingEmoji from "../../../utils/ratingEmoji";
import noImagePlaceholderWebp from "../../../assets/no-image-placeholder.webp";

interface Props {
  game: Game;
}

const Card = ({ game }: Props) => {
  const [imgSrc, setImgSrc] = useState(cropImg(game.background_image));
  const handleImgError = (e: SyntheticEvent) => {
    e.stopPropagation();
    setImgSrc(noImagePlaceholderWebp);
  };

  return (
    <>
      {/* img container */}
      <div>
        <img src={imgSrc} alt={game.name} onError={handleImgError} />
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
    </>
  );
};

export default Card;
