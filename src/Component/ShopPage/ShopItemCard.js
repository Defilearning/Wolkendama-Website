import { Link } from "react-router-dom";
import Button from "../Utils/Button";

const ShopItemCard = ({
  title,
  descriptions,
  rank,
  imgCover,
  id,
  specification,
  className,
}) => {
  return (
    <div
      className={`card w-96 bg-violet-200 shadow-xl text-black ${className}`}
    >
      <img src={imgCover} alt="Shoes" />
      <div className="card-body gap-4">
        <h2 className="card-title">
          {title}
          <div className="badge badge-secondary">{rank}</div>
        </h2>
        <p>{descriptions}</p>
        <div className="card-actions justify-end text-slate-500">
          {specification.map((el, i) => {
            return (
              <div className="badge badge-outline" key={i}>
                {el}
              </div>
            );
          })}
        </div>
        <div className=" flex justify-between ">
          <Button variant="secondary" textSize="md">
            <Link to={`/shop/${id}`}>Details</Link>
          </Button>
          <Button variant="gradient" textSize="md">
            Add to cart
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ShopItemCard;
