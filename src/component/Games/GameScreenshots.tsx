import { Game } from "../../entities/Game";
import useScreenshots from "../../hooks/useScreenshots";
import Loading from "../Loading";

interface Props {
  gameDetail: Game;
}

const GameScreenshots = ({ gameDetail }: Props) => {
  const { data: screenshots, error, isLoading } = useScreenshots(3498);
  console.log(">> screenshots:", screenshots);

  if (error) throw error;

  if (isLoading) return <Loading loadingMsg={"Loading"} />;

  return (
    <div className="grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 grid">
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
