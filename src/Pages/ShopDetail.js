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
          `https://api.wolkendama.com/api/v1/shop/${id}?productionReady=true`
        );

        const response = await data.json();
        setIsLoading(false);

        if (response.status === "fail") {
          setError(response.message);
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
      <div className="bg-pic"></div>
      <div className="flex flex-col justify-between items-center bg-purple-theme h-screen w-full">
        <div className="fixed text-black flex justify-center w-full h-fit bg-slate-50 shadow-md top-0 left-0 z-30">
          <div className="w-10/12">
            <Header />
          </div>
        </div>

        <div className="w-3/5 min-w-[350px] mt-32 my-24 bg-[#cbc8df] text-black z-20 py-10 px-10 rounded-lg flex gap-5">
          {isLoading && <ReactLoading height={"10%"} width={"10%"} />}

          {error && !isLoading && <p>{error}</p>}

          {!error && !isLoading && shopItem && (
            <>
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
