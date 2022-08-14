import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex pt-16 justify-between text-2xl">
      <p className="text-light-gray text-opacity-80">LOGO</p>
      <ul className="flex gap-10 text-light-gray text-opacity-80 font-medium text">
        <li>
          <Link to="/shop">Shop</Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
        <li>
          <Link to="/culture">Culture</Link>
        </li>
        <li>
          <Link to="/tutorial">Tutorial</Link>
        </li>
        <li>
          <Link to="/about-us">About us</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
