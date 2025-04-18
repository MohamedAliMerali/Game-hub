import { useLocation } from "react-router-dom";
import useGameDetail from "../../hooks/useGameDetail";
import ErrorMessage from "../ErrorComponents/ErrorMessage/ErrorMessage";
import DOMPurify from "dompurify";

const Games = () => {
  // const params = useParams(); // id param
  const location = useLocation();
  const gameData = location.state; // Access the passed object

  // const { data: gameDetail, error, isLoading } = useGameDetail(gameData.id, gameData.slug);
  const { data: gameDetail, error } = useGameDetail(gameData.id, gameData.slug);
  console.log(">> gameDetail:", gameDetail);

  {
    error && <ErrorMessage errorMessage={error.message} />;
  }

  return (
    <div>
      <h1 className="text-5xl font-bold text-gray-200 pb-4">
        {gameDetail?.name}
      </h1>
      <div
        dangerouslySetInnerHTML={{
          __html: DOMPurify.sanitize(gameDetail?.description || ""),
        }}
      />
    </div>
  );
};

export default Games;
