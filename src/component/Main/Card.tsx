import { Game } from "../../services/games-services";
import bullsEye from "../../assets/bulls-eye.webp";
import Platforms from "./Platforms";
// import Platforms from "./Platforms";

// import platformsIcons from "../../data/platforms-icons";

// import { FaWindows } from "react-icons/fa6";

interface Props {
  game: Game;
}

// TODO finish this
const Card = ({ game }: Props) => {
  return (
    // card container
    <div
      id={game.id.toString()}
      className="w-full max-w-md my-8 mx-auto rounded-3xl overflow-hidden dark:bg-secondary-dark shadow-xl"
    >
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
    </div>
  );
};

export default Card;
