import useTrailers from "../../hooks/useTrailers";
import Loading from "../Loading";

const GameGallery = ({ id }: { id: number }) => {
  // 3498
  const { data: trailer, error, isLoading } = useTrailers(id);
  console.log(trailer);

  if (error) throw error;

  if (isLoading) return <Loading loadingMsg={"Loading"} />;

  return (
    <div className="mx-auto">
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
        // todo: inhance this section when there is no trailer available and blame it on the api
        <p
          className="text-center py-12 bg-zinc-800 opacity-50 
        "
        >
          No Trailer Available...
        </p>
      )}
    </div>
  );
};

export default GameGallery;
