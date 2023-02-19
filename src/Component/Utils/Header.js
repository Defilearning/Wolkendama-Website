import Button from "./Button";
import { Link } from "react-router-dom";
import { useState } from "react";
import logoBlack from "../../image/logo-black.png";
import logoWhite from "../../image/logo-white.png";

const Header = ({ className, variant }) => {
  const [showNavbar, setShowNavBar] = useState(false);

  return (
    <div
      className={`navbar h-full text-xl justify-center ${className} relative`}
    >
      {console.log(variant)}
      {/* Mobile Version */}
      <div className="navbar-start w-fit">
        <label
          tabIndex={0}
          className="btn btn-ghost lg:hidden"
          onClick={() => setShowNavBar((prev) => !prev)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </label>
        <ul
          tabIndex={0}
          className={`menu menu-compact absolute text-slate-500 p-2 shadow rounded-sm bg-slate-200 w-screen left-0 top-full origin-top transition-all  ${
            showNavbar ? " scale-100 opacity-100" : "scale-0 opacity-0"
          }  `}
        >
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/shop">Shop</Link>
          </li>
          <li>
            <Link to="/about-us">About Us</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
        </ul>
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          <img
            src={variant === "white" ? logoWhite : logoBlack}
            className="h-full scale-[2.0] hidden lg:block"
            alt="logo"
          />
          <img
            src={logoBlack}
            className="h-full scale-150 lg:hidden"
            alt="logo"
          />
        </Link>
      </div>

      {/* Desktop Version */}
      <div className="navbar-end w-3/4 hidden lg:flex">
        <ul className="menu menu-horizontal p-0">
          <li>
            <Link to="/shop">Shop</Link>
          </li>
          <li>
            <Link to="/about-us">About Us</Link>
          </li>
          <li>
            <Link to="/cart">
              <Button
                variant="gradient"
                textSize="lg"
                className="flex items-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                Cart
              </Button>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
