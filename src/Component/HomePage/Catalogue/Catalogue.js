import { Link } from "react-router-dom";
import TopCards from "../../Utils/TopCards";
import Button from "../../Utils/Button";
import { useEffect, useState } from "react";
import ReactLoading from "react-loading";

const Catalogue = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const [catalogue, setCatalogue] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    window.scrollTo(0, 0);

    const fetchData = async () => {
      try {
        setIsLoading(true);

        const data = await fetch(
          `${process.env.REACT_APP_FETCH_URL}/api/v1/shop/top-3`
        );

        const response = await data.json();

        setIsLoading(false);

        if (response.status === "fail" || response.data?.length === 0) {
          setError(
            "Shop is under maintenance currently, sorry for the inconvenience and please try again later!"
          );
        } else {
          setCatalogue(response.data);
        }
      } catch (err) {
        setIsLoading(false);
        setError("Something went wrong, please try again later!");
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (!catalogue) return;

    if (
      catalogue?.length > 2 &&
      windowWidth >= 1024 &&
      catalogue[0].rank === 1
    ) {
      const temp = catalogue[0];
      catalogue[0] = catalogue[1];
      catalogue[1] = temp;

      setCatalogue(catalogue);
    }

    if (
      catalogue?.length > 2 &&
      windowWidth < 1024 &&
      catalogue[0].rank === 2
    ) {
      const temp = catalogue[0];
      catalogue[0] = catalogue[1];
      catalogue[1] = temp;

      setCatalogue(catalogue);
    }
  }, [catalogue, windowWidth]);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="flex flex-col items-center w-full">
      {isLoading && <ReactLoading height={"10%"} width={"10%"} />}

      {error && !isLoading && (
        <p className="text-sm md:text-xl text-black">{error}</p>
      )}

      {!error && !isLoading && (
        <>
          <h1 className="text-4xl md:text-6xl text-black pb-20 font-bold">
            Our Best Seller
          </h1>
          <div className="flex flex-col lg:flex-row gap-10 w-full lg:justify-center items-center ">
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

          {/* Mobile version */}
          <div className="lg:hidden ">
            <Link to="/shop">
              <Button
                variant="gradient"
                textSize="base"
                className="mt-10 shadow-lg"
              >
                Check out our shop to find more!
              </Button>
            </Link>
          </div>

          {/* Desktop Version */}
          <div className="hidden lg:block">
            <Link to="/shop">
              <Button variant="gradient" className="mt-16 shadow-lg">
                Check out our shop to find more!
              </Button>
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default Catalogue;
