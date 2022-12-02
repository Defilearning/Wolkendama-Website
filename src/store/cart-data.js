import React from "react";

const CartData = React.createContext({
  products: [],
  addToCart: () => {},
  addCartQuantity: () => {},
  minusCartQuantity: () => {},
  deleteCartItem: () => {},
  toggleCheckout: () => {},
});

export default CartData;
