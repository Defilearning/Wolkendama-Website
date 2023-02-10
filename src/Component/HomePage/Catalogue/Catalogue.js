import { Link } from "react-router-dom";
import TopCards from "../../Utils/TopCards";
import Button from "../../Utils/Button";
import { useEffect, useState } from "react";
import ReactLoading from "react-loading";

const Catalogue = () => {
  const [catalogue, setCatalogue] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    window.scrollTo(0, 0);

    const fetchData = async () => {
      try {
        setIsLoading(true);

        const data = await fetch(
          "https://api.wolkendama.com/api/v1/shop/top-3"
        );

        const response = await data.json();

        setIsLoading(false);

        if (response.status === "fail" || response.data?.length === 0) {
          setError(
            "Shop is under maintenance currently, sorry for the inconvenience and please try again later!"
          );
        } else {
          if (response.data.length > 2) {
            const temp = response[0];
            response[0] = response[1];
            response[1] = temp;
          }

          setCatalogue(response.data);
        }
      } catch (err) {
        setIsLoading(false);
        setError("Something went wrong, please try again later!");
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex flex-col items-center">
      {isLoading && <ReactLoading height={"10%"} width={"10%"} />}

      {error && !isLoading && <p className="text-xl text-black">{error}</p>}

      {!error && !isLoading && (
        <>
          <h1 className="text-6xl text-black pb-20 font-bold">
            Our Best Seller
          </h1>
          <div className="flex gap-10">
            {catalogue?.map((el) => (
              <TopCards
                id={el?._id}
                title={el?.title}
                rank={el?.rank}
                descriptions={el?.descriptions}
                imgCover={el?.imgCover}
                key={el?.title}
              />
            ))}
          </div>
          <Link to="/shop">
            <Button variant="gradient" className="mt-16 shadow-lg">
              Check out our shop to find more!
            </Button>
          </Link>
        </>
      )}
    </div>
  );
};

export default Catalogue;
