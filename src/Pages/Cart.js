import { useContext, useEffect, useState } from "react";
import Header from "../Component/Utils/Header";
import Footer from "../Component/Utils/Footer";
import CartData from "../store/cart-data";
import Button from "../Component/Utils/Button";
import { Link } from "react-router-dom";
import CartItem from "../Component/CartDetails/CartItem";

const Cart = () => {
  const ctx = useContext(CartData);
  const [initialShopItem, setInitialShopItem] = useState();
  const [finalPrice, setFinalPrice] = useState(0);
  const [checkoutProducts, setCheckoutProducts] = useState([]);

  const checkOutController = async () => {
    try {
      const data = await fetch(
        `${process.env.REACT_APP_FETCH_URL}/api/v1/checkout`,
        {
          headers: {
            "Content-Type": "application/json",
          },
          method: "POST",
          body: JSON.stringify({ items: checkoutProducts }),
        }
      );

      const response = await data.json();

      checkoutProducts.forEach((el) =>
        ctx.deleteCartItem({ ...el, id: el.shopId })
      );
      window.location.replace(response.data.url);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);

    const fetchData = async () => {
      const data = await fetch(
        `${process.env.REACT_APP_FETCH_URL}/api/v1/shop?productionReady=true`
      );

      const response = (await data.json()).data;

      setInitialShopItem(response);
    };

    fetchData();
  }, []);

  useEffect(() => {
    let tempPrice = 0;
    let tempCheckoutArr = [];

    for (const product of ctx.products) {
      if (product.checkout && initialShopItem && initialShopItem.length !== 0) {
        const foundItem = initialShopItem.find((el) => el._id === product.id);

        tempPrice =
          tempPrice +
          product.quantity * foundItem?.variant[product.variant].price;
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
  }, [ctx, initialShopItem]);

  return (
    <>
      <div className="bg-pic"></div>
      <div className="bg-purple-theme h-screen w-full fixed"></div>
      <div className="flex flex-col justify-between items-center min-h-screen w-full">
        <div className="fixed lg:static text-black flex justify-center w-full h-fit bg-slate-50 shadow-md top-0 left-0 z-30">
          <div className="w-full">
            <Header />
          </div>
        </div>
        <div className="w-fit lg:w-4/6 lg:min-w-[1000px] my-24 bg-[#cbc8df] text-black z-20 py-10 px-10 rounded-lg flex gap-5">
          <div className="w-full">
            <p className="text-center text-black font-extrabold text-5xl mb-5">
              Cart
            </p>
            <strong>Your Cart Items</strong>

            {/* This Div is desktop version only */}
            <div className="flex-col gap-10 flex">
              {ctx.products.length !== 0 && (
                <div className="lg:flex justify-center items-center hidden">
                  <p className="w-[5%] text-center"></p>
                  <p className="w-[55%] ">Products</p>
                  <p className="w-[10%] text-center">Variation</p>
                  <p className="w-[10%] text-center">Unit Price</p>
                  <p className="w-[10%] text-center">Quantity</p>
                  <p className="w-[10%] text-center">Total Price</p>
                  <div className="w-[10%] text-center">Actions</div>
                </div>
              )}

              {ctx.products?.length !== 0 && initialShopItem ? (
                ctx.products?.map((el, i) => {
                  const foundItem = initialShopItem?.find(
                    (data) => data._id === el.id
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

              <p className="text-sm font-bold italic">
                *Currently we are delivering our products to Malaysia only.
                Kindly contact us before ordering if your are outside Malaysia.
                Sorry for the inconvenience.
              </p>

              {ctx.products.length !== 0 ? (
                <div className="w-fit self-end flex items-center">
                  <h1 className="mr-10 text-xl font-bold">{`Total Price: RM ${finalPrice}`}</h1>

                  {ctx.products?.every((el) => el.checkout === false) ? (
                    <Button variant="disabled">Select item for checkout</Button>
                  ) : (
                    <Button variant="gradient" onClick={checkOutController}>
                      Checkout
                    </Button>
                  )}
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
