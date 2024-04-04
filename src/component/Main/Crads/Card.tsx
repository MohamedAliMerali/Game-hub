import { Game } from "../../../services/games-services";
import bullsEye from "../../../assets/bulls-eye.webp";
import Platforms from "../Platforms";

interface Props {
  game: Game;
}

// TODO finish this
const Card = ({ game }: Props) => {
  return (
    <>
      {/* img container */}
      <div>
        <img src={game.background_image} alt={game.name} />
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
          <img src={bullsEye} alt="" />
        </div>
      </div>
    </>
  );
};

export default Card;
