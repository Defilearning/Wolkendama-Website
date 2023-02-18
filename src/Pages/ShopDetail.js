import { useEffect, useState } from "react";
import Header from "../Component/Utils/Header";
import DescButtons from "../Component/ShopDetailPage/DescButtons";
import PhotoGallery from "../Component/ShopDetailPage/PhotoGallery";
import Footer from "../Component/Utils/Footer";
import { useParams } from "react-router-dom";
import ReactLoading from "react-loading";

const ShopDetail = () => {
  const [itemVariant, setItemVariant] = useState({
    type: null,
    remainingQuantity: null,
  });
  const [quantity, setQuantity] = useState(1);
  const [shopItem, setShopItem] = useState();
  const id = useParams().shopId;

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    window.scrollTo(0, 0);

    const fetchData = async () => {
      try {
        setIsLoading(true);

        const data = await fetch(
          `${process.env.REACT_APP_FETCH_URL}/api/v1/shop/${id}?productionReady=true`
        );

        const response = await data.json();

        setIsLoading(false);

        if (response.status === "fail") {
          setError(response.message);
        } else if (response.status === "error") {
          setError(`Something went wrong, please try again later!`);
        } else {
          setShopItem(response.data);
        }
      } catch {
        setIsLoading(false);
        setError(`Something went wrong, please try again later!`);
      }
    };

    fetchData();
  }, [id]);

  const addQuantity = () => {
    if (quantity === itemVariant.remainingQuantity) {
      return;
    } else {
      setQuantity((prev) => prev + 1);
    }
  };

  const minusQuantity = () => {
    if (quantity === 1) {
      return;
    } else {
      setQuantity((prev) => prev - 1);
    }
  };

  return (
    <>
      <div className="bg-pic -z-10"></div>
      <div className="bg-purple-theme h-screen w-full fixed"></div>
      <div className="flex flex-col justify-between items-center">
        <div className="fixed lg:static text-black flex justify-center w-full h-fit bg-slate-50 shadow-md top-0 left-0 z-30">
          <div className="w-full">
            <Header />
          </div>
        </div>

        <div className=" mt-20 lg:mt-16 my-24 bg-[#cbc8df] text-black z-20 py-10 px-8 lg:px-10 rounded-lg w-full lg:max-w-[1050px] ">
          {isLoading && <ReactLoading height={"10%"} width={"10%"} />}

          {error && !isLoading && <p>{error}</p>}

          {!error && !isLoading && shopItem && (
            <>
              {/* Mobile Version */}
              <div className="flex flex-col items-center gap-5 w-full lg:hidden">
                <PhotoGallery
                  img={shopItem.img}
                  descriptions={shopItem.descriptions}
                />
                <DescButtons
                  title={shopItem.title}
                  descriptions={shopItem.descriptions}
                  itemVariant={itemVariant}
                  setItemVariant={setItemVariant}
                  quantity={quantity}
                  variant={shopItem.variant}
                  setQuantity={setQuantity}
                  minusQuantity={minusQuantity}
                  addQuantity={addQuantity}
                  id={id}
                />
              </div>

              {/* Desktop Version */}
              <div className="hidden lg:flex gap-5 w-full">
                <PhotoGallery
                  img={shopItem.img}
                  descriptions={shopItem.descriptions}
                />
                <DescButtons
                  title={shopItem.title}
                  descriptions={shopItem.descriptions}
                  itemVariant={itemVariant}
                  setItemVariant={setItemVariant}
                  quantity={quantity}
                  variant={shopItem.variant}
                  setQuantity={setQuantity}
                  minusQuantity={minusQuantity}
                  addQuantity={addQuantity}
                  id={id}
                />
              </div>
            </>
          )}
        </div>

        <div className="bg-slate-100 full-bleed-white z-20">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default ShopDetail;
