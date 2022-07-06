import { Link } from "react-router-dom";

import BlankWrapper from "../../../Shared/BlankWrapper";

const Catalogue = () => {
  return (
    <BlankWrapper>
      <h1>SHOP</h1>
      <p>Go to shop and find out more!</p>
      <h1>Some Picture</h1>
      <Link to="/shop">Choose your kendama now!</Link>
    </BlankWrapper>
  );
};

export default Catalogue;
