import { useEffect, useState } from "react";
import Header from "../Component/Utils/Header";
import DescButtons from "../Component/ShopDetailPage/DescButtons";
import PhotoGallery from "../Component/ShopDetailPage/PhotoGallery";
import Footer from "../Component/Utils/Footer";

const DUMMY_DATA = {
  id: 1,
  title: "Test1",
  descriptions:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam at ultricies justo.",
  rank: "top-2",
  imgCover: "https://picsum.photos/300/400",
  img: [
    "https://picsum.photos/600/800",
    "https://picsum.photos/600/801",
    "https://picsum.photos/600/800",
    "https://picsum.photos/600/803",
    "https://picsum.photos/600/804",
    "https://picsum.photos/600/805",
    "https://picsum.photos/600/806",
    "https://picsum.photos/600/807",
    "https://picsum.photos/600/808",
    "https://picsum.photos/600/809",
    "https://picsum.photos/600/810",
  ],
  type: "kendama",
  tag: ["single", "hot"],
  specification: ["plain", "red", "sticky"],
  variant: {
    red: 8,
    purple: 0,
    blue: 2,
    green: 3,
    orange: 0,
    pink: 5,
  },
};

const ShopDetail = () => {
  const [itemVariant, setItemVariant] = useState({
    type: null,
    remainingQuantity: null,
  });
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
      <div className="flex flex-col justify-center items-center bg-purple-theme h-full w-full">
        <div className="fixed text-black flex justify-center w-full h-fit bg-slate-50 shadow-md top-0 left-0 z-30">
          <div className="w-10/12">
            <Header />
          </div>
        </div>
        <div className="w-3/5 min-w-[350px] mt-32 my-24 bg-[#cbc8df] text-black z-20 py-10 px-10 rounded-lg flex gap-5">
          <PhotoGallery
            img={DUMMY_DATA.img}
            descriptions={DUMMY_DATA.descriptions}
          />
          <DescButtons
            descriptions={DUMMY_DATA.descriptions}
            itemVariant={itemVariant}
            setItemVariant={setItemVariant}
            quantity={quantity}
            variant={DUMMY_DATA.variant}
            setQuantity={setQuantity}
            minusQuantity={minusQuantity}
            addQuantity={addQuantity}
            id={DUMMY_DATA.id}
          />
        </div>
        <div className="bg-slate-100 full-bleed-white z-20">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default ShopDetail;
