import { useLocation } from "react-router-dom";
import useGameDetail from "../../hooks/useGameDetail";
import Loading from "../Loading";

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

  if (error) throw error;

  if (isLoading) return <Loading loadingMsg={"Loading"} />;

  return (
    <div>
      x²
      <h1 className="text-5xl font-bold text-gray-200 pb-4">
        {gameDetail?.name}
      </h1>
      <div
      // dangerouslySetInnerHTML={{
      //   __html: DOMPurify.sanitize(gameDetail.description || ""),
      // }}
      // / `DOMPurify.sanitize`**: Ensures that the HTML content in the game's description
      // / is sanitized to prevent XSS attacks when using `dangerouslySetInnerHTML`.
      />
      {gameDetail?.description_raw}
    </div>
  );
};

export default Games;
