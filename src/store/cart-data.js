import React from "react";

const CartData = React.createContext({
  products: [],
  addToCart: () => {},
});

export default CartData;
