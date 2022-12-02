import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Home from "./Pages/Home";
import Shop from "./Pages/Shop";
import Blog from "./Pages/Blog";
import Tutorial from "./Pages/Tutorial";
import AboutUs from "./Pages/AboutUs";
import CartData from "./store/cart-data";
import ShopDetail from "./Pages/ShopDetail";
import { useEffect, useState } from "react";
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

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("wolCart"));

    if (cart) {
      setCartItems(cart);
    }
  }, []);

  useEffect(() => {
    if (cartItems.length === 0) {
      localStorage.removeItem("wolCart");
      return;
    }

    const cart = JSON.parse(localStorage.getItem("wolCart"));

    if (!cart) {
      localStorage.setItem("wolCart", JSON.stringify(cartItems));
    } else {
      localStorage.removeItem("wolCart");
      localStorage.setItem("wolCart", JSON.stringify(cartItems));
    }
  }, [cartItems]);

  const addToCart = (item) => {
    const foundItem = cartItems.find(
      (el) => el.variant === item.variant && el.id === item.id
    );

    // If there is no variant
    if (!item?.variant) {
      return {
        status: "warning",
        message: "Please select variant of the item.",
      };
    }

    // If there is no items in cart, add item to Cart
    else if (!foundItem) {
      setCartItems((prev) => [...prev, item]);
      return {
        status: "success",
        message: "Item has been added to your cart!",
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

  const addCartQuantity = (item, remainingQuantity) => {
    const foundItemIndex = cartItems.findIndex(
      (el) => el.variant === item.variant && el.id === item.id
    );

    // If no found Item
    if (foundItemIndex === -1) {
      return;
    }

    // If found item quantity === remaining quantity
    if (cartItems[foundItemIndex].quantity === remainingQuantity) {
      return;
    }

    // Add quantity
    const tempItem = {
      ...cartItems[foundItemIndex],
      quantity: cartItems[foundItemIndex].quantity + 1,
    };

    let finalArr = [...cartItems];
    finalArr[foundItemIndex] = tempItem;

    setCartItems(finalArr);
  };

  const minusCartQuantity = (item) => {
    const foundItemIndex = cartItems.findIndex(
      (el) => el.variant === item.variant && el.id === item.id
    );

    // If no found Item
    if (foundItemIndex === -1) {
      return;
    }

    // If found item quantity === 1
    if (cartItems[foundItemIndex].quantity === 1) {
      return;
    }

    // Add quantity
    const tempItem = {
      ...cartItems[foundItemIndex],
      quantity: cartItems[foundItemIndex].quantity - 1,
    };

    let finalArr = [...cartItems];
    finalArr[foundItemIndex] = tempItem;

    setCartItems(finalArr);
  };

  const deleteCartItem = (item) => {
    const foundItem = cartItems.find(
      (el) => el.variant === item.variant && el.id === item.id
    );

    if (!foundItem) {
      return;
    }

    setCartItems((prev) => {
      return prev.filter((el) => el !== foundItem);
    });
  };

  const toggleCheckout = (item) => {
    const foundItemIndex = cartItems.findIndex(
      (el) => el.variant === item.variant && el.id === item.id
    );

    // If no found Item
    if (foundItemIndex === -1) {
      return;
    }

    // Toggle checkOut
    const tempItem = {
      ...cartItems[foundItemIndex],
      checkout:
        cartItems[foundItemIndex].checkout === true
          ? (cartItems[foundItemIndex].checkout = false)
          : (cartItems[foundItemIndex].checkout = true),
    };

    let finalArr = [...cartItems];
    finalArr[foundItemIndex] = tempItem;

    setCartItems(finalArr);
  };

  return (
    <CartData.Provider
      value={{
        products: cartItems,
        addToCart,
        addCartQuantity,
        minusCartQuantity,
        deleteCartItem,
        toggleCheckout,
      }}
    >
      <RouterProvider router={router} />
    </CartData.Provider>
  );
}

export default App;
