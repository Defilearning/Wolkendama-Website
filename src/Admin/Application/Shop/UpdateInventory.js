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
};

const DUMMY_CUSTOMER = [
  {
    checkoutId:
      "cs_test_a1sfq7NRDlPoJbBWOwuRj2JTD0R13D1HE8qjEBiqiK10DjkKwjKO3Ezpi1",
    status: "pending_payment",
  },
];

function UpdateInventory() {
  const id = useParams();

  const variantColour = useRef();
  const variantQuantity = useRef();
  const variantPrice = useRef();

  const [shopItem, setShopItem] = useState(DUMMY_DATA);
  const [customer, setCustomer] = useState(DUMMY_CUSTOMER);
  const [variant, setVariant] = useState(DUMMY_DATA.variant);

  const [response, setResponse] = useState();

  const submitHandler = async (e) => {
    e.preventDefault();

    const tempObj = { id, variant };

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
        <label className="flex flex-col gap-7">
          <div>
            <p>Variant:</p>
            <div className="flex gap-6">
              <div>
                <p>Colour:</p>
                <input
                  type="text"
                  ref={variantColour}
                  className="text-black"
                  placeholder="eg: red"
                ></input>
              </div>
              <div>
                <p>Remaining Quantity:</p>
                <input
                  type="number"
                  ref={variantQuantity}
                  className="text-black"
                  placeholder="eg: 5"
                ></input>
              </div>
              <div>
                <p>Price:</p>
                <input
                  type="number"
                  ref={variantPrice}
                  className="text-black"
                  placeholder="eg: 50"
                ></input>
              </div>
              <button
                className="text-left bg-slate-50 w-fit text-black py-2 px-3 rounded-md"
                onClick={(e) => {
                  e.preventDefault();
                  setVariant((prev) => {
                    const prevObj = { ...prev };
                    const tempObj = {};

                    tempObj[variantColour.current.value] = {
                      remainingQuantity: variantQuantity.current.value,
                      price: variantPrice.current.value,
                    };

                    Object.assign(prevObj, tempObj);

                    return prevObj;
                  });
                  setResponse("");
                }}
              >
                Add/Amend variant
              </button>
            </div>
          </div>
          <div className="grid grid-cols-4 gap-y-2 place-items-center border">
            <div className="border w-full text-center col-start-1 col-end-1">
              Colour
            </div>
            <div className="border w-full text-center col-start-2 col-end-2">
              Remaining Quantity
            </div>
            <div className="border w-full text-center col-start-3 col-end-3">{`Price (RM)`}</div>
            <div className="border w-full text-center col-start-4 col-end-4">
              Delete
            </div>
            {variant &&
              Object.keys(variant).map((el) => {
                return (
                  <>
                    <div>{el}</div>
                    <div>{variant[el].remainingQuantity}</div>
                    <div>{variant[el].price}</div>
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        setVariant((prev) => {
                          const prevObj = { ...prev };
                          delete prevObj[el];

                          return prevObj;
                        });
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </>
                );
              })}
          </div>
        </label>
        {shopItem.reserveItem?.length > 0 && (
          <label className="flex flex-col">
            <p>Reserve Item:</p>
            <div className="grid grid-cols-3 gap-y-2 place-items-center border">
              <div className="border w-full text-center col-start-1 col-end-1">
                Colour
              </div>
              <div className="border w-full text-center col-start-2 col-end-2">
                Quantity
              </div>
              <div className="border w-full text-center col-start-3 col-end-3">
                Status
              </div>
              {shopItem.reserveItem?.length > 0 &&
                shopItem.reserveItem?.map((el) => {
                  return (
                    <>
                      <div>{el.variant}</div>
                      <div>{el.quantity}</div>
                      <div>
                        {customer.length > 0 &&
                        customer[0].status === "pending_payment"
                          ? "Pending customer payment"
                          : "Find JJ ASAP"}
                      </div>
                    </>
                  );
                })}
            </div>
          </label>
        )}
        <button className="bg-slate-50 text-black" type="submit">
          Submit Form!
        </button>
      </form>
      <p>{response}</p>
    </div>
  );
}

export default UpdateInventory;
