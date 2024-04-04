const CardSkeleton = () => {
  return (
    <>
      <div className="animate-pulse w-20 h-20 rounded-2xl overflow-hidden bg-secondary-light">
        <img src="" alt="" />
      </div>
      <div className="animate-pulse rounded-lg font-medium bg-secondary-light">
        <div className="invisible">genres Name</div>
      </div>
    </>
  );
};
export default CardSkeleton;
