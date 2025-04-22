import { useState } from "react";
import Game from "../../entities/Game";
import GameRating from "../Main/Crads/GameRating";

interface Props {
  gameDetail: Game;
}

const GameDescription = ({ gameDetail }: Props) => {
  const [showAll, setShowAll] = useState(false);

  return (
    <div className="lg:grid lg:grid-cols-4 lg:gap-6 xl:flex xl:flex-col">
      <div className="lg:col-span-3 h-fit mb-8 lg:mb-2 xl:mb-16">
        <p className="text-justify">
          {showAll
            ? gameDetail?.description_raw
            : gameDetail?.description_raw?.slice(0, 550) + "..."}
          {(gameDetail?.description_raw?.length ?? 0) > 200 && (
            <button
              onClick={() => setShowAll(!showAll)}
              className={
                (showAll ? " bg-amber-200 " : " bg-amber-400 ") +
                " text-slate-900 font-semibold px-4 py-1 rounded-lg ml-4 translate-y-1 hover:bg-amber-500 transition-colors duration-300"
              }
            >
              {showAll ? "Show Less" : "Show More"}
            </button>
          )}
        </p>
      </div>

      <div className="space-y-6 mb-6 min-[320px]:mb-0 min-[320px]:grid min-[320px]:grid-cols-2 min-[320px]:grid-rows-2 gap-3 xl:gap-8 h-fit">
        <div className="">
          <h2 className="text-4xl dark:text-icon-dark">Platforms</h2>
          <ul>
            {/* "{ platform }" instead of "platform" to avoid using platformIcons[platform.platform.name] */}
            {gameDetail?.parent_platforms.map(({ platform }) => (
              <li key={platform.id} className="text-2xl">
                {platform.name}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-4xl dark:text-icon-dark">Genres</h2>
          <ul>
            {gameDetail?.genres.map((genre) => (
              <li key={genre.id} className="text-2xl">
                {genre.name}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-4xl dark:text-icon-dark">Metascore</h2>
          <ul>
            <li>{<GameRating rating={gameDetail.rating} />}</li>
          </ul>
        </div>
        <div>
          <h2 className="text-4xl dark:text-icon-dark">Publisher</h2>
          <ul>
            {gameDetail?.publishers.map((publisher) => (
              <li key={publisher.id} className="text-2xl">
                {publisher.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default GameDescription;
