import { useLocation } from "react-router-dom";
import useGameDetail from "../../hooks/useGameDetail";
import Loading from "../Loading";
import GameDescription from "./GameDescription";
import GameGallery from "./GameGallery";
import GameScreenshots from "./GameScreenshots";

const Games = () => {
  // const params = useParams();
  // id param, you can use that when you only need to get the id from the url
  const location = useLocation();
  const gameData = location.state; // Access the passed object

  const {
    data: gameDetail,
    error,
    isLoading,
  } = useGameDetail(gameData.id, gameData.slug);
  console.log(">> gameDetail:", gameDetail);

  if (error) throw error;

  if (isLoading) return <Loading loadingMsg={"Loading"} />;

  return (
    <div className="space-y-10">
      <h1 className="text-5xl font-bold pb-2">{gameDetail?.name}</h1>
      <div className="xl:grid xl:grid-cols-2 xl:gap-4 h-fit relative px-4 py-4 rounded-2xl overflow-hidden">
        <div
          style={{
            backgroundImage: `url(${gameDetail?.background_image})`,
            backgroundRepeat: "no-repeat",
            opacity: 0.15,
            // zIndex: 0,
          }}
          className="absolute inset-0 bg-top bg-auto md:bg-top lg:center lg:bg-cover"
          // className="absolute inset-0 sm:-[0.5] lg:scale-[1.1]"
        ></div>
        <GameDescription gameDetail={gameDetail} />
        <div className="space-y-10">
          <GameGallery id={gameDetail.id} />
          <GameScreenshots gameDetail={gameDetail} />
        </div>
      </div>
    </div>
  );
};

export default Games;
