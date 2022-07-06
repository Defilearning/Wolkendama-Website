import { Link } from "react-router-dom";

import classes from "./Header.module.css";

const Header = () => {
  return (
    <div className={classes.header}>
      <p>LOGO</p>
      <ul>
        <li>
          <Link to="/shop" className={classes.link}>
            Shop
          </Link>
        </li>
        <li>
          <Link to="/blog" className={classes.link}>
            Blog
          </Link>
        </li>
        <li>
          <Link to="/culture" className={classes.link}>
            Culture
          </Link>
        </li>
        <li>
          <Link to="/tutorial" className={classes.link}>
            Tutorial
          </Link>
        </li>
        <li>
          <Link to="/about-us" className={classes.link}>
            About us
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
