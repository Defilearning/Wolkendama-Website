import ShopItemCard from "../Component/ShopPage/ShopItemCard";
import Header from "../Component/Utils/Header";
import Footer from "../Component/Utils/Footer";
import { Fragment, useEffect, useState } from "react";
import ReactLoading from "react-loading";

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
  const [shopItem, setShopItem] = useState();

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    window.scrollTo(0, 0);

    const fetchData = async () => {
      try {
        setIsLoading(true);
        const data = await fetch(
          "https://api.wolkendama.com/api/v1/shop?productionReady=true"
        );

        const response = await data.json();
        setIsLoading(false);

        if (response.status === "fail" || response.data?.length === 0) {
          setError(
            "Shop is under maintenance currently, sorry for the inconvenience and please try again later!"
          );
        } else {
          setShopItem(response.data);
        }
      } catch (err) {
        setIsLoading(false);
        setError("Something went wrong, please try again later!");
      }
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
      <div className="flex flex-col justify-between items-center bg-purple-theme h-screen w-full">
        <div className="fixed text-black flex justify-center w-full h-fit bg-slate-50 shadow-md top-0 left-0 z-30">
          <div className="w-10/12">
            <Header />
          </div>
        </div>
        <div className="w-3/4 mt-32 my-24 bg-[#cbc8df] z-20 py-10 px-10 rounded-lg">
          {isLoading && <ReactLoading height={"10%"} width={"10%"} />}

          {error && !isLoading && <p className="text-xl text-black">{error}</p>}

          {!error && !isLoading && (
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
                shopItem?.map((el) => {
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
          )}
        </div>
        <div className="bg-slate-100 full-bleed-white z-20">
          <Footer />
        </div>
      </div>
    </Fragment>
  );
};

export default Shop;
