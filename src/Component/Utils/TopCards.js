import Button from "./Button";

const TopCards = ({ title, rank, descriptions, imgCover }) => {
  return (
    <div className="card w-96 bg-violet-200 shadow-xl text-black">
      <figure
        className={`px-10 pt-10 ${
          rank === 1
            ? "bg-gradient-to-t from-gradient-pink to-gradient-orange"
            : "bg-rose-200"
        } `}
      >
        <img src={imgCover} alt="Kendama" className="rounded-t-xl shadow-md" />
      </figure>
      <div className="card-body items-center text-center">
        {rank === "top-1" && (
          <div className="badge badge-secondary badge-outline py-3">
            Best Seller
          </div>
        )}
        <h2 className="card-title text-3xl">{title}</h2>
        <p className="text-lg pb-10">{descriptions}</p>
        <div className="card-actions">
          {rank === 1 ? (
            <Button variant="gradient" className="text-lg">
              Buy Now
            </Button>
          ) : (
            <Button variant="secondary" className="text-lg">
              Buy Now
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default TopCards;
