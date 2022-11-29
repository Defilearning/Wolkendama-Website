import { useContext, useEffect } from "react";
import Header from "../Component/Utils/Header";
import Footer from "../Component/Utils/Footer";
import CartData from "../store/cart-data";
import Button from "../Component/Utils/Button";
import { Link } from "react-router-dom";

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
      red: { remainingQuantity: 8, price: 50 },
      purple: { remainingQuantity: 0, price: 50 },
      blue: { remainingQuantity: 2, price: 50 },
      green: { remainingQuantity: 3, price: 50 },
      orange: { remainingQuantity: 0, price: 50 },
      pink: { remainingQuantity: 5, price: 75 },
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
          <div className="w-full">
            <strong>Your Cart Items</strong>
            <div className="flex flex-col gap-10 ">
              {ctx.products.length !== 0 && (
                <div className="flex justify-center items-center">
                  <p className="w-[5%] text-center">No.</p>
                  <p className="w-[45%] ">Products</p>
                  <p className="w-[20%] text-center">Variation</p>
                  <p className="w-[10%] text-center">Unit Price</p>
                  <p className="w-[10%] text-center">Quantity</p>
                  <p className="w-[10%] text-center">Total Price</p>
                  <div className="w-[10%] text-center">Actions</div>
                </div>
              )}
              {ctx.products.length !== 0 ? (
                ctx.products.map((el, i) => {
                  const foundItem = DUMMY_DATA.find(
                    (data) => data.id === el.id
                  );

                  return (
                    <>
                      <div className="flex justify-center items-center">
                        <p className="w-[5%] text-center">{`${i + 1}.`}</p>
                        <div
                          className="w-[5%] min-h-12 bg-center"
                          style={{
                            backgroundImage: `url(${foundItem.imgCover})`,
                            backgroundSize: "contain",
                            backgroundRepeat: "no-repeat",
                          }}
                        ></div>
                        <p className="w-[10%] text-center">{foundItem.title}</p>
                        <p className="w-[30%] text-center">
                          {foundItem.descriptions}
                        </p>
                        <p className="w-[20%] text-center">{el.variant}</p>
                        <p className="w-[10%] text-center">
                          RM{foundItem.variant[el.variant].price}
                        </p>
                        <div className="w-[10%] flex justify-between items-center">
                          <Button variant="secondary" textSize="md">
                            -
                          </Button>
                          {el.quantity}
                          <Button variant="secondary" textSize="md">
                            +
                          </Button>
                        </div>
                        <p className="w-[10%] text-center">
                          RM{el.quantity * foundItem.variant[el.variant].price}
                        </p>
                        <div className="w-[10%] flex justify-center">
                          <Button variant="white" textSize="base">
                            Delete
                          </Button>
                        </div>
                      </div>
                    </>
                  );
                })
              ) : (
                <>
                  <div>
                    <p>
                      There is no items in your cart. Please visit shop page.
                    </p>
                  </div>
                </>
              )}
              {ctx.products.length !== 0 ? (
                <Button variant="gradient" className="w-fit self-end">
                  Checkout
                </Button>
              ) : (
                <Link to="/shop">
                  <Button variant="gradient">Shop</Button>
                </Link>
              )}
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
