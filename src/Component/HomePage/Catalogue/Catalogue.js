import { Link } from "react-router-dom";
import TopCards from "../../Utils/TopCards";
import Button from "../../Utils/Button";

const DUMMY_DATA = [
  {
    title: "Test1",
    descriptions:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam at ultricies justo.",
    rank: "top-2",
    imgCover: "https://picsum.photos/300/400",
    type: "kendama",
    specification: ["plain", "red", "sticky"],
  },
  {
    title: "Test2",
    descriptions:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam at ultricies justo.",
    rank: "top-1",
    imgCover: "https://picsum.photos/300/400",
    type: "kendama",
    specification: ["gradient", "red", "blue", "sticky"],
  },
  {
    title: "Test3",
    descriptions:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam at ultricies justo.",
    rank: "top-3",
    imgCover: "https://picsum.photos/300/400",
    type: "accessories",
    specification: ["plain", "red"],
  },
];

const Catalogue = () => {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-6xl text-black pb-20 font-bold">Our Best Seller</h1>
      <div className="flex gap-10">
        {DUMMY_DATA.map((el) => (
          <TopCards
            title={el.title}
            rank={el.rank}
            descriptions={el.descriptions}
            imgCover={el.imgCover}
            key={el.title}
          />
        ))}
      </div>
      <Link to="/shop">
        <Button variant="gradient" className="mt-16 shadow-lg">
          Check out our shop to find more!
        </Button>
      </Link>
    </div>
  );
};

export default Catalogue;
