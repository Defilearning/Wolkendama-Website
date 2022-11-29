import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Home from "./Pages/Home";
import Shop from "./Pages/Shop";
import Blog from "./Pages/Blog";
import Tutorial from "./Pages/Tutorial";
import AboutUs from "./Pages/AboutUs";
import CartData from "./store/cart-data";
import ShopDetail from "./Pages/ShopDetail";
import { useState } from "react";
import Cart from "./Pages/Cart";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/shop",
    element: <Shop />,
  },
  {
    path: "/shop/:shopId",
    element: <ShopDetail />,
  },
  {
    path: "/blog",
    element: <Blog />,
  },
  {
    path: "/tutorial",
    element: <Tutorial />,
  },
  {
    path: "/about-us",
    element: <AboutUs />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
]);

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    const foundItem = cartItems.find(
      (el) => el.variant === item.variant && el.id === item.id
    );

    // If there is no items in cart, add item to Cart
    if (!foundItem) {
      setCartItems((prev) => [...prev, item]);
      return {
        status: "success",
        message: "Item has been added to your cart!",
      };
    }

    // If there is no variant
    else if (!item?.variant) {
      return {
        status: "warning",
        message: "Please select variant of the item.",
      };
    }

    // If remaining quantity< = total cart quantity
    else if (
      foundItem?.remainingQuantity - foundItem?.quantity === 0 ||
      item.quantity > foundItem?.remainingQuantity - foundItem?.quantity
    ) {
      return {
        status: "error",
        message: "Total cart quantity cannot exceed stock remaining quantity.",
      };
    }

    // If add to cart quantity < remaining cart quantity - current cart quantity
    else if (
      item.quantity <=
      foundItem?.remainingQuantity - foundItem?.quantity
    ) {
      const tempItem = {
        ...foundItem,
        quantity: foundItem.quantity + item.quantity,
      };

      setCartItems((prev) => {
        const tempArr = prev.filter((el) => el !== foundItem);
        if (prev.length === 0) {
          return [tempItem];
        } else {
          return [...tempArr, tempItem];
        }
      });
      return {
        status: "success",
        message: "Item has been added to your cart!",
      };
    }
  };

  const addCartQuantity = (item) => {
    const foundItem = cartItems.find(
      (el) => el.variant === item.variant && el.id === item.id
    );
  };

  return (
    <CartData.Provider value={{ products: cartItems, addToCart }}>
      <RouterProvider router={router} />
    </CartData.Provider>
  );
}

export default App;
