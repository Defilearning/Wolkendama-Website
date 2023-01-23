import React, { useEffect, useState } from "react";
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
};

function DeletePhoto() {
  const id = useParams();

  const [shopData, setShopData] = useState();
  const [imgToDelete, setImgToDelete] = useState([]);
  const [imgCoverToDelete, setImgCoverToDelete] = useState(false);

  useEffect(() => {
    setShopData(DUMMY_DATA);
  }, []);

  const toggleImage = (image) => {
    setImgToDelete((prev) => {
      const prevArr = [...prev];

      if (prevArr.includes(image)) {
        return prevArr.filter((el) => el !== image);
      } else {
        prevArr.push(image);
        return prevArr;
      }
    });
  };

  return (
    <div className="py-3 px-5">
      <p>Id:</p>
      <input
        type="text"
        placeholder="eg: 63bbf9ecb5c3773733898a0f"
        className="text-black w-full mb-7"
        defaultValue={`${id.shopId === "null" ? "" : id.shopId}`}
      />
      <h1 className="text-4xl mb-5">Image Cover</h1>
      {!shopData?.imgCover ? (
        <p>There is no image cover for this shop item.</p>
      ) : (
        <div
          className={`h-[220px] w-[220px] flex justify-center items-center bg-slate-200 cursor-pointer ml-4 box-border ${
            imgCoverToDelete
              ? "border-red-500 border-[6px]"
              : "border-slate-200 border-[6px]"
          }`}
          onClick={() => setImgCoverToDelete((prev) => !prev)}
        >
          <div
            className="h-[200px] w-[200px] bg-center"
            style={{
              backgroundImage: `url(${shopData?.imgCover})`,
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
            }}
          />
        </div>
      )}

      <h1 className="text-4xl my-5">Product Images</h1>
      <div className="mt-5 flex w-full gap-10 flex-wrap py-3 px-4">
        {shopData?.img.length > 0 &&
          shopData?.img.map((image) => {
            return (
              <div
                className={`py-5 px-5 bg-slate-200 box-border cursor-pointer ${
                  imgToDelete.includes(image)
                    ? "border-red-500 border-[6px]"
                    : "border-slate-200 border-[6px]"
                }`}
                onClick={() => toggleImage(image)}
              >
                <div
                  className="min-h-[200px] min-w-[200px] bg-center"
                  style={{
                    backgroundImage: `url(${image})`,
                    backgroundSize: "contain",
                    backgroundRepeat: "no-repeat",
                  }}
                />
              </div>
            );
          })}
      </div>
      {shopData?.img.length === 0 && (
        <p>There is no product imgaes for this shop item.</p>
      )}

      {!imgCoverToDelete && imgToDelete.length === 0 ? (
        <div className="bg-slate-50 text-black py-2 px-3 w-full text-2xl mt-6 text-center">
          Select images to delete!
        </div>
      ) : (
        <button className="bg-slate-50 text-black py-2 px-3 w-full text-2xl mt-6">
          {`Delete ${
            imgCoverToDelete ? imgToDelete.length + 1 : imgToDelete.length
          } selected photos!`}
        </button>
      )}
    </div>
  );
}

export default DeletePhoto;
