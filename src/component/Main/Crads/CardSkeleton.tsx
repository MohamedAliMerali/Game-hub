const CardSkeleton = () => {
  return (
    <div className="animate-pulse">
      <div className="w-full h-60 bg-secondary-light">
        <img src="" alt="" />
      </div>
      {/* info's container */}
      <div className="p-8 space-y-4">
        {/* platforms & rating div */}
        <div className="flex justify-between items-center">
          <div className="h-10 w-40 bg-secondary-light rounded-xl"></div>
          <div className="rounded-lg px-4 bg-rating-bg-light font-medium dark:bg-rating-bg-dark dark:text-rating-color-dark">
            <div className="invisible">4.9</div>
          </div>
        </div>
        <h3 className="font-medium text-4xl h-10 w-80 bg-secondary-light rounded-xl"></h3>
        <div className="h-12 w-12 bg-secondary-light rounded-xl overflow-hidden">
          <img src="" alt="" />
        </div>
      </div>
    </div>
  );
};

export default CardSkeleton;
