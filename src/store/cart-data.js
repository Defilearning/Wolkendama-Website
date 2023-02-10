import React from "react";

const CartData = React.createContext({
  products: [],
  addToCart: () => {},
  addCartQuantity: () => {},
  minusCartQuantity: () => {},
  deleteCartItem: () => {},
  toggleCheckout: () => {},
  setCartItems: () => {},
});

export default CartData;
