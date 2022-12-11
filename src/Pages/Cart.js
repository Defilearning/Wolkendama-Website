import { useContext, useEffect, useState } from "react";
import Header from "../Component/Utils/Header";
import Footer from "../Component/Utils/Footer";
import CartData from "../store/cart-data";
import Button from "../Component/Utils/Button";
import { Link } from "react-router-dom";
import CartItem from "../Component/CartDetails/CartItem";

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
    itemFilter: ["single", "hot"],
    specification: ["plain", "red", "sticky"],
    variant: {
      red: { remainingQuantity: 4, price: 50 },
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
    itemFilter: ["gradient", "hot"],
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
    itemFilter: ["accessories"],
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
    itemFilter: ["accessories"],
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
    itemFilter: ["single"],
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
    itemFilter: ["gradient"],
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
    itemFilter: ["single"],
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
    itemFilter: ["single"],
    specification: ["plain", "red"],
    variant: {
      original: 5,
    },
  },
];

const Cart = () => {
  const ctx = useContext(CartData);
  const [finalPrice, setFinalPrice] = useState(0);
  const [checkoutProducts, setCheckoutProducts] = useState([]);

  const checkOutController = () => {
    //TOCHANGE:
    console.log(checkoutProducts);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    let tempPrice = 0;
    let tempCheckoutArr = [];

    for (const product of ctx.products) {
      if (product.checkout) {
        const foundItem = DUMMY_DATA.find((el) => el.id === product.id);

        tempPrice =
          tempPrice +
          product.quantity * foundItem.variant[product.variant].price;
        setFinalPrice(tempPrice);

        tempCheckoutArr.push({
          shopId: product.id,
          variant: product.variant,
          quantity: product.quantity,
        });

        setCheckoutProducts(tempCheckoutArr);
      } else {
        continue;
      }
    }

    if (ctx.products.every((el) => el.checkout === false)) {
      setFinalPrice(0);
    }
  }, [ctx]);

  return (
    <>
      <div className="bg-pic"></div>
      <div className="flex flex-col justify-between items-center bg-purple-theme h-screen w-full">
        <div className="fixed text-black flex justify-center w-full h-fit bg-slate-50 shadow-md top-0 left-0 z-30">
          <div className="w-10/12">
            <Header />
          </div>
        </div>
        <div className="w-4/6 min-w-[800px] mt-32 my-24 bg-[#cbc8df] text-black z-20 py-10 px-10 rounded-lg flex gap-5">
          <div className="w-full">
            <strong>Your Cart Items</strong>
            <div className="flex flex-col gap-10 ">
              {ctx.products.length !== 0 && (
                <div className="flex justify-center items-center">
                  <p className="w-[5%] text-center"></p>
                  <p className="w-[55%] ">Products</p>
                  <p className="w-[10%] text-center">Variation</p>
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
                    <CartItem i={i} foundItem={foundItem} el={el} key={i} />
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
                <div className="w-fit self-end flex items-center">
                  <h1 className="mr-10 text-xl font-bold">{`Total Price: RM ${finalPrice}`}</h1>

                  <Button variant="gradient" onClick={checkOutController}>
                    Checkout
                  </Button>
                </div>
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
