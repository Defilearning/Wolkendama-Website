import { useContext, useEffect } from "react";
import Header from "../Component/Utils/Header";
import Footer from "../Component/Utils/Footer";
import CartData from "../store/cart-data";
import Button from "../Component/Utils/Button";

const DUMMY_DATA = [
  {
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
  },
  {
    id: 2,
    title: "Test2",
    descriptions:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam at ultricies justo.",
    rank: "top-1",
    imgCover: "https://picsum.photos/300/400",
    type: "kendama",
    tag: ["gradient", "hot"],
    specification: ["gradient", "red", "blue", "sticky"],
    variant: {
      original: 5,
    },
  },
  {
    id: 3,
    title: "Test3",
    descriptions:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam at ultricies justo.",
    rank: "top-3",
    imgCover: "https://picsum.photos/300/400",
    type: "accessories",
    tag: ["accessories"],
    specification: ["plain", "red"],
    variant: {
      original: 5,
    },
  },
  {
    id: 4,
    title: "Test4",
    descriptions:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam at ultricies justo.",
    rank: "top-3",
    imgCover: "https://picsum.photos/300/400",
    type: "accessories",
    tag: ["accessories"],
    specification: ["plain", "red"],
    variant: {
      original: 5,
    },
  },
  {
    id: 5,
    title: "Test5",
    descriptions:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam at ultricies justo.",
    rank: "top-3",
    imgCover: "https://picsum.photos/300/400",
    type: "kendama",
    tag: ["single"],
    specification: ["plain", "red"],
    variant: {
      original: 5,
    },
  },
  {
    id: 6,
    title: "Test6",
    descriptions:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam at ultricies justo.",
    rank: "top-3",
    imgCover: "https://picsum.photos/300/400",
    type: "kendama",
    tag: ["gradient"],
    specification: ["gradient", "red", "green"],
    variant: {
      original: 5,
    },
  },
  {
    id: 7,
    title: "Test7",
    descriptions:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam at ultricies justo.",
    rank: "top-3",
    imgCover: "https://picsum.photos/300/400",
    type: "kendama",
    tag: ["single"],
    specification: ["plain", "red"],
    variant: {
      original: 5,
    },
  },
  {
    id: 8,
    title: "Test8",
    descriptions:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam at ultricies justo.",
    rank: "top-3",
    imgCover: "https://picsum.photos/300/400",
    type: "kendama",
    tag: ["single"],
    specification: ["plain", "red"],
    variant: {
      original: 5,
    },
  },
];

const Cart = () => {
  const ctx = useContext(CartData);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
          <div className="flex flex-col w-full">
            <strong>Your Cart Items</strong>
            <div>
              {ctx.products.length !== 0 ? (
                ctx.products.map((el, i) => {
                  const foundItem = DUMMY_DATA.find(
                    (data) => data.id === el.id
                  );

                  console.log(foundItem);
                  return (
                    <div className="flex">
                      <div className="w-1/6">{`${i + 1}.`}</div>
                      <div className="w-1/6">{foundItem.title}</div>
                      <div className="w-1/6">{foundItem.descriptions}</div>
                      <div className="w-1/6">There is items your cart.</div>
                      <div className="w-1/6">There is items your cart.</div>
                      <div className="w-1/6">There is items your cart.</div>
                    </div>
                  );
                })
              ) : (
                <div>
                  <p>There is no items in your cart.</p>
                </div>
              )}
              <Button variant="gradient">Checkout</Button>
            </div>
          </div>
        </div>
        <div className="bg-slate-100 full-bleed-white z-20">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Cart;
