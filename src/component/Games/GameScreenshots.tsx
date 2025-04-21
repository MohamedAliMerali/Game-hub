import { Game } from "../../entities/Game";
import useScreenshots from "../../hooks/useScreenshots";
import Loading from "../Loading";

interface Props {
  gameDetail: Game;
}

const GameScreenshots = ({ gameDetail }: Props) => {
  // todo remove this: 3498
  const { data: screenshots, error, isLoading } = useScreenshots(gameDetail.id);
  console.log(">> screenshots:", screenshots);

  if (error) throw error;

  if (isLoading) return <Loading loadingMsg={"Loading"} />;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-2 gap-4">
      {screenshots?.map((screenshot, index) => (
        <img
          key={index}
          src={screenshot.image}
          alt={`${gameDetail.name} screenshot Number ${index}.`}
        />
      ))}
    </div>
  );
};

export default GameScreenshots;
