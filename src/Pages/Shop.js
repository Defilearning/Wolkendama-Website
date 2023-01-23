import ShopItemCard from "../Component/ShopPage/ShopItemCard";
import Header from "../Component/Utils/Header";
import Footer from "../Component/Utils/Footer";
import { Fragment, useEffect, useState } from "react";

const options = [
  {
    value: "",
    text: "--Filter--",
  },
  {
    value: "all",
    text: "All",
  },
  {
    value: "hot",
    text: "Hot-seller",
  },
  {
    value: "single",
    text: "Single Colour",
  },
  {
    value: "gradient",
    text: "Gradient Colour",
  },
  {
    value: "accessories",
    text: "Accessories",
  },
];

const Shop = () => {
  const [filter, setFilter] = useState(options[0].value);
  const [data, setData] = useState([]);
  const [shopItem, setShopItem] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);

    const fetchData = async () => {
      const data = await fetch("http://127.0.0.1:3000/api/v1/shop", {
        mode: "cors",
      });

      const response = await data.json();

      setShopItem(response.data);
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (filter) {
      let tempArr = [];

      for (let i = 0; i < shopItem.length; i++) {
        for (let j = 0; j < shopItem[i].itemFilter.length; j++) {
          if (shopItem[i].itemFilter[j] === filter) {
            tempArr.push(shopItem[i]);
          }
        }
      }
      setData(tempArr);
    }
  }, [filter, shopItem]);

  const filterChange = (e) => {
    setFilter(e.target.value);
  };

  return (
    <Fragment>
      <div className="bg-pic"></div>
      <div className="flex flex-col justify-center items-center bg-purple-theme h-full w-full">
        <div className="fixed text-black flex justify-center w-full h-fit bg-slate-50 shadow-md top-0 left-0 z-30">
          <div className="w-10/12">
            <Header />
          </div>
        </div>
        <div className="w-3/4 mt-32 my-24 bg-[#cbc8df] z-20 py-10 px-10 rounded-lg">
          <div className="grid grid-cols-3 gap-10 place-items-center">
            <select
              className="select w-full max-w-xs bg-slate-100 text-slate-800 col-span-full justify-self-stretch"
              value={filter}
              onChange={filterChange}
            >
              {options.map((el) => (
                <option key={el.text} value={el.value} disabled={!el.value}>
                  {el.text}
                </option>
              ))}
            </select>

            {filter &&
              filter !== "all" &&
              data.map((el) => {
                return (
                  <ShopItemCard
                    className="place-content-center"
                    title={el.title}
                    descriptions={el.descriptions}
                    rank={el.rank}
                    imgCover={el.imgCover}
                    specification={el.specification}
                    id={el._id}
                    key={el._id}
                  />
                );
              })}

            {(!filter || !(filter !== "all")) &&
              shopItem.map((el) => {
                return (
                  <ShopItemCard
                    className="place-content-center"
                    title={el.title}
                    descriptions={el.descriptions}
                    rank={el.rank}
                    imgCover={el.imgCover}
                    specification={el.specification}
                    id={el._id}
                    key={el._id}
                  />
                );
              })}
          </div>
        </div>
        <div className="bg-slate-100 full-bleed-white z-20">
          <Footer />
        </div>
      </div>
    </Fragment>
  );
};

export default Shop;
