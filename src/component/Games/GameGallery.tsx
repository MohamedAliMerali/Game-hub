import useTrailers from "../../hooks/useTrailers";
import Loading from "../Loading";

const GameGallery = ({ id }: { id: number }) => {
  // 3498
  const { data: trailer, error, isLoading } = useTrailers(id);
  console.log(trailer);

  if (error) throw error;

  if (isLoading) return <Loading loadingMsg={"Loading"} />;

  return (
    <div className="mx-auto rounded-xl overflow-hidden">
      {trailer?.results?.length > 0 ? (
        <video
          controls
          width="100%"
          height="100%"
          src={trailer.results[0].data.max}
          title={trailer.results[0].name}
          poster={trailer.results[0].preview}
        />
      ) : (
        <p
          className="text-center py-12 bg-zinc-800 opacity-50 
        "
        >
          - API Issue - No Trailer Available...
        </p>
      )}
    </div>
  );
};

export default GameGallery;
