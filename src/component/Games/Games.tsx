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
      <GameDescription gameDetail={gameDetail} />
      <GameGallery id={gameDetail.id} />
      {/* // todo: add a property to pass the game id */}
      {/* // todo: make game screenshot part */}
      <GameScreenshots gameDetail={gameDetail} />
    </div>
  );
};

export default Games;
