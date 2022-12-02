import ShopItemCard from "../Component/ShopPage/ShopItemCard";
import Header from "../Component/Utils/Header";
import Footer from "../Component/Utils/Footer";
import { Fragment, useEffect, useState } from "react";

const DUMMY_DATA = [
  {
    id: 1,
    title: "Test1",
    descriptions:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam at ultricies justo.",
    rank: "top-2",
    imgCover: "https://picsum.photos/300/400",
    itemFilter: ["single", "hot"],
    specification: ["plain", "red", "sticky"],
  },
  {
    id: 2,
    title: "Test2",
    descriptions:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam at ultricies justo.",
    rank: "top-1",
    imgCover: "https://picsum.photos/300/400",
    itemFilter: ["gradient", "hot"],
    specification: ["gradient", "red", "blue", "sticky"],
  },
  {
    id: 3,
    title: "Test3",
    descriptions:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam at ultricies justo.",
    rank: "top-3",
    imgCover: "https://picsum.photos/300/400",
    itemFilter: ["accessories"],
    specification: ["plain", "red"],
  },
  {
    id: 4,
    title: "Test4",
    descriptions:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam at ultricies justo.",
    rank: "top-3",
    imgCover: "https://picsum.photos/300/400",
    itemFilter: ["accessories"],
    specification: ["plain", "red"],
  },
  {
    id: 5,
    title: "Test5",
    descriptions:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam at ultricies justo.",
    rank: "top-3",
    imgCover: "https://picsum.photos/300/400",
    itemFilter: ["single"],
    specification: ["plain", "red"],
  },
  {
    id: 6,
    title: "Test6",
    descriptions:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam at ultricies justo.",
    rank: "top-3",
    imgCover: "https://picsum.photos/300/400",
    itemFilter: ["gradient"],
    specification: ["gradient", "red", "green"],
  },
  {
    id: 7,
    title: "Test7",
    descriptions:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam at ultricies justo.",
    rank: "top-3",
    imgCover: "https://picsum.photos/300/400",
    itemFilter: ["single"],
    specification: ["plain", "red"],
  },
  {
    id: 8,
    title: "Test8",
    descriptions:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam at ultricies justo.",
    rank: "top-3",
    imgCover: "https://picsum.photos/300/400",
    itemFilter: ["single"],
    specification: ["plain", "red"],
  },
];

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

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (filter) {
      let tempArr = [];

      for (let i = 0; i < DUMMY_DATA.length; i++) {
        for (let j = 0; j < DUMMY_DATA[i].itemFilter.length; j++) {
          if (DUMMY_DATA[i].itemFilter[j] === filter) {
            tempArr.push(DUMMY_DATA[i]);
          }
        }
      }
      setData(tempArr);
    }
  }, [filter]);

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
                    id={el.id}
                    key={el.id}
                  />
                );
              })}

            {(!filter || !(filter !== "all")) &&
              DUMMY_DATA.map((el) => {
                return (
                  <ShopItemCard
                    className="place-content-center"
                    title={el.title}
                    descriptions={el.descriptions}
                    rank={el.rank}
                    imgCover={el.imgCover}
                    specification={el.specification}
                    id={el.id}
                    key={el.id}
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
