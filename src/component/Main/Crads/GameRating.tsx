const GameRating = ({ rating }: { rating: number }) => {
  return (
    <div className="rounded-lg px-4 max-w-20 text-center bg-rating-bg-light font-medium dark:bg-rating-bg-dark dark:text-rating-color-dark">
      {rating}
    </div>
  );
};

export default GameRating;
