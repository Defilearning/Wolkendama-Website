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
}) => (
  <div
    className={`card w-72 md:w-80 bg-violet-200 shadow-xl text-black ${className}`}
  >
    <img src={imgCover} alt="Shoes" />
    <div className="card-body gap-4">
      <h2 className="card-title">
        {title}
        {rank === 1 && <div className="badge badge-secondary">top-seller</div>}
      </h2>
      <p>{descriptions}</p>
      <div className="card-actions text-slate-500">
        {specification.map((el, i) => {
          return (
            <div className="badge badge-outline" key={i}>
              {el}
            </div>
          );
        })}
      </div>
      <div className="self-end">
        <Button variant="gradient" textSize="base">
          <Link to={`/shop/${id}`}>Details</Link>
        </Button>
      </div>
    </div>
  </div>
);

export default ShopItemCard;
