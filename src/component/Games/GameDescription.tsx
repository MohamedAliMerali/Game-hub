import { useState } from "react";
import { Game } from "../../entities/Game";
import GameRating from "../Main/Crads/GameRating";

interface Props {
  gameDetail: Game;
}

const GameDescription = ({ gameDetail }: Props) => {
  const [showAll, setShowAll] = useState(false);
  return (
    <>
      <div className="mb-12">
        <h1 className="text-5xl font-bold pb-4">{gameDetail?.name}</h1>
        <p>
          {showAll
            ? gameDetail?.description_raw
            : gameDetail?.description_raw?.slice(0, 350) + "..."}
          {(gameDetail?.description_raw?.length ?? 0) > 200 && (
            <button
              onClick={() => setShowAll(!showAll)}
              className={
                (showAll ? " bg-amber-400 " : " bg-amber-400 ") +
                " text-slate-900 font-semibold px-4 py-1 rounded-lg ml-4 translate-y-1"
              }
            >
              {showAll ? "Show Less" : "Show More"}
            </button>
          )}
        </p>
      </div>

      {/* // todo: make it a grid alter and make it responsive like the screenshots div*/}
      <div className="flex">
        <div className="grow space-y-8">
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
          <div className="">
            <h2 className="text-4xl dark:text-icon-dark">Genres</h2>
            <ul>
              {gameDetail?.genres.map((genre) => (
                <li key={genre.id} className="text-2xl">
                  {genre.name}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="grow space-y-8">
          <div className="mb-12">
            <h2 className="text-4xl dark:text-icon-dark">Metascore</h2>
            <ul>
              <li>{<GameRating rating={gameDetail.rating} />}</li>
            </ul>
          </div>
          <div className="mb-12">
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
    </>
  );
};

export default GameDescription;
