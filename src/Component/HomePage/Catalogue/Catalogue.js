import { Fragment } from "react";
import { Link } from "react-router-dom";

const Catalogue = () => {
  return (
    <Fragment>
      <h1>SHOP</h1>
      <p>Go to shop and find out more!</p>
      <h1>Some Picture</h1>
      <Link to="/shop">Choose your kendama now!</Link>
    </Fragment>
  );
};

export default Catalogue;
