import React, { useRef, useState } from "react";
import { useParams } from "react-router-dom";

const DUMMY_DATA = {
  _id: "639852807137ffff58289f76",
  imgCoverPublicId: "testing/jj1111-imgCover",
  imgCover:
    "http://res.cloudinary.com/dojbstliu/image/upload/v1670927011/testing/jj1111-imgCover.jpg",
  __v: 0,
  slug: "jj1111",
  date: "2022-12-13T10:20:53.041Z",
  reserveItem: [
    {
      checkoutId:
        "cs_test_a1sfq7NRDlPoJbBWOwuRj2JTD0R13D1HE8qjEBiqiK10DjkKwjKO3Ezpi1",
      variant: "pink",
      quantity: 7,
    },
  ],
  variant: {
    red: {
      remainingQuantity: 1,
      price: 50,
    },
    purple: {
      remainingQuantity: 0,
      price: 50,
    },
    blue: {
      remainingQuantity: 2,
      price: 50,
    },
    green: {
      remainingQuantity: 1,
      price: 50,
    },
    orange: {
      remainingQuantity: 0,
      price: 50,
    },
    pink: {
      remainingQuantity: 0,
      price: 75,
    },
  },
  specification: ["sticky"],
  itemFilter: ["single", "hot"],
  imgPublicId: [
    "testing/jj1111-1670927012437",
    "testing/jj1111-1670927012441",
    "testing/jj1111-1670927012443",
    "testing/jj1111-1670927012445",
    "testing/jj1111-1670927012447",
    "testing/jj1111-1670927012448",
  ],
  img: [
    "http://res.cloudinary.com/dojbstliu/image/upload/v1670927025/testing/jj1111-1670927012437.jpg",
    "http://res.cloudinary.com/dojbstliu/image/upload/v1670927025/testing/jj1111-1670927012441.jpg",
    "http://res.cloudinary.com/dojbstliu/image/upload/v1670927027/testing/jj1111-1670927012443.jpg",
    "http://res.cloudinary.com/dojbstliu/image/upload/v1670927025/testing/jj1111-1670927012445.jpg",
    "http://res.cloudinary.com/dojbstliu/image/upload/v1670927015/testing/jj1111-1670927012447.jpg",
    "http://res.cloudinary.com/dojbstliu/image/upload/v1670927026/testing/jj1111-1670927012448.jpg",
  ],
  descriptions:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam at ultricies justo.",
  title: "JJ1111",
  rank: 3,
  productionReady: false,
};

function ChangeShop() {
  const id = useParams();
  const title = useRef();
  const descriptions = useRef();
  const rank = useRef();
  const filter = useRef();
  const specification = useRef();

  const [productionReady, setProductionReady] = useState();

  const [shopItem, setShopItem] = useState(DUMMY_DATA);

  const [response, setResponse] = useState();

  const submitHandler = async (e) => {
    e.preventDefault();

    const tempObj = {};

    if (title.current.value) {
      tempObj.title = title.current.value;
    }

    if (descriptions.current.value) {
      tempObj.descriptions = descriptions.current.value;
    }

    if (rank.current.value) {
      tempObj.rank = rank.current.value;
    }

    if (filter.current.value) {
      if (filter.current.value.slice(-1) === ",") {
        tempObj.itemFilter = filter.current.value
          .slice(0, -1)
          .replaceAll(" ", "")
          .split(",");
      } else {
        tempObj.itemFilter = filter.current.value
          .replaceAll(" ", "")
          .split(",");
      }
    }

    if (specification.current.value) {
      if (specification.current.value.slice(-1) === ",") {
        tempObj.specification = specification.current.value
          .slice(0, -1)
          .replaceAll(" ", "")
          .split(",");
      } else {
        tempObj.specification = specification.current.value
          .replaceAll(" ", "")
          .split(",");
      }
    }

    console.log(tempObj);
  };

  return (
    <div className="py-3 px-5 w-1/2">
      <form onSubmit={submitHandler} className="flex flex-col gap-5">
        <label>
          <p>Id:</p>
          <input
            type="text"
            placeholder="eg: 63bbf9ecb5c3773733898a0f"
            className="text-black w-full"
            defaultValue={`${id.shopId === "null" ? "" : id.shopId}`}
          />
        </label>
        <label>
          <p>Title:</p>
          <input
            type="text"
            ref={title}
            placeholder="eg: Strong Little Kendama"
            className="text-black w-full"
            defaultValue={`${shopItem?.title ? shopItem.title : ""}`}
          />
        </label>
        <label>
          <p>Descriptions:</p>
          <textarea
            rows="4"
            ref={descriptions}
            className="text-black w-full h-"
            defaultValue={`${
              shopItem?.descriptions ? shopItem.descriptions : ""
            }`}
            placeholder="eg: We are proud to finally introduce our newest version of the Mini Kendama! We've made Micros and Minis in the past, but this Mini is the most playable one yet! You can do all the tricks you would normally do with an average sized kendama, except now it fits in your pocket."
          />
        </label>
        <label>
          <p>Rank:</p>
          <input
            type="number"
            ref={rank}
            placeholder="eg: 1"
            defaultValue={`${shopItem?.rank ? shopItem.rank : ""}`}
            className="text-black w-full"
          />
        </label>
        <label>
          <p>Filter: valid options - single, gradient, hot, accessories</p>
          <input
            type="text"
            ref={filter}
            defaultValue={`${
              shopItem?.itemFilter.length > 0
                ? shopItem.itemFilter.join(",")
                : ""
            }`}
            placeholder="eg: single, gradient / gradient"
            className="text-black w-full"
          />
        </label>
        <label>
          <p>Specification:</p>
          <input
            type="text"
            ref={specification}
            defaultValue={`${
              shopItem?.specification.length > 0
                ? shopItem.specification.join(",")
                : ""
            }`}
            placeholder="eg: sticky, red / red"
            className="text-black w-full"
          />
        </label>
        <label>
          <p>Production Ready?</p>
          <div className="flex gap-5">
            <div className="flex">
              <input
                type="checkbox"
                defaultChecked={shopItem.productionReady}
                checked={productionReady}
                onChange={() => setProductionReady((prev) => !prev)}
              />
              <p>Yes</p>
            </div>
            <div className="flex">
              <input
                type="checkbox"
                defaultChecked={!shopItem.productionReady}
                checked={!productionReady}
                onChange={() => setProductionReady((prev) => !prev)}
              />
              <p>No</p>
            </div>
          </div>
        </label>

        <button className="bg-slate-50 text-black" type="submit">
          Submit Form!
        </button>
      </form>
    </div>
  );
}

export default ChangeShop;
