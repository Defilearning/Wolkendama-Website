import classes from "./Header.module.css";

const Header = () => {
  return (
    <div className={classes.header}>
      <p>LOGO</p>
      <ul>
        <li>
          <a href="/">Shop</a>
        </li>
        <li>
          <a href="/">Blog</a>
        </li>
        <li>
          <a href="/">Service</a>
        </li>
        <li>
          <a href="/">Tutorial</a>
        </li>
        <li>
          <a href="/">About us</a>
        </li>
      </ul>
    </div>
  );
};

export default Header;
