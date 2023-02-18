import { Link } from "react-router-dom";
import Button from "./Button";

const TopCards = ({ id, title, rank, descriptions, imgCover }) => {
  return (
    <div className="card w-64 md:w-80 bg-violet-200 shadow-xl text-black">
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
        {rank === 1 && (
          <div className="text-sm md:text-base badge badge-secondary badge-outline py-3">
            Best Seller
          </div>
        )}
        <h2 className="card-title text:lg md:text-3xl">{title}</h2>
        <p className="text-base md:text-lg pb-10">{descriptions}</p>

        {/* Mobile Version */}
        <div className="card-actions lg:hidden">
          {rank === 1 ? (
            <Link to={`shop/${id}`}>
              <Button variant="gradient" textSize="base">
                Buy Now
              </Button>
            </Link>
          ) : (
            <Link to={`shop/${id}`}>
              <Button variant="secondary" textSize="base">
                Buy Now
              </Button>
            </Link>
          )}
        </div>

        {/* Desktop Version */}
        <div className="card-actions hidden lg:block">
          {rank === 1 ? (
            <Link to={`shop/${id}`}>
              <Button variant="gradient" textSize="lg">
                Buy Now
              </Button>
            </Link>
          ) : (
            <Link to={`shop/${id}`}>
              <Button variant="secondary">Buy Now</Button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default TopCards;
