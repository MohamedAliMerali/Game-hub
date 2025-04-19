import { useLocation } from "react-router-dom";
import useGameDetail from "../../hooks/useGameDetail";
import Loading from "../Loading";
import GameDescription from "./GameDescription";
import GameGallery from "./GameGallery";
import GameScreenshot from "./GameScreenshot";

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
    <>
      <GameDescription gameDetail={gameDetail} />
      <GameGallery id={gameDetail.id} />
      {/* add a property to pass the game id */}
      {/* make game screenshot part */}
      <GameScreenshot />
    </>
  );
};

export default Games;
