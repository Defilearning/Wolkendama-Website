import { Link } from "react-router-dom";
import TopCards from "../../Utils/TopCards";
import Button from "../../Utils/Button";
import { useEffect, useState } from "react";

const Catalogue = () => {
  const [catalogue, setCatalogue] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);

    const fetchData = async () => {
      const data = await fetch("http://127.0.0.1:3000/api/v1/shop/top-3", {
        mode: "cors",
      });

      const response = (await data.json()).data;

      console.log(response);

      const temp = response[0];
      response[0] = response[1];
      response[1] = temp;

      setCatalogue(response);
    };

    fetchData();
  }, []);

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-6xl text-black pb-20 font-bold">Our Best Seller</h1>
      <div className="flex gap-10">
        {catalogue.map((el) => (
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
