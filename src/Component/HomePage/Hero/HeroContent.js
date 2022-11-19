import { Link } from "react-router-dom";
import Button from "../../Utils/Button";

const HeroContent = () => {
  return (
    <div className="max-w-2xl">
      <h1 className="text-7xl text-slate-50 font-medium mb-10">
        With <span className="text-gradient">WOLKendama</span> where Liberty
        finds its <span className="text-gradient">Value</span>
      </h1>
      <p className="text-2xl text-slate-300 mb-14">
        We provide performance, products and courses for everyone.
      </p>
      <div className="flex">
        <Link to="blog">
          <Button variant="gradient" className="mr-20">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="33"
              width="33"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
              />
            </svg>
            <span>Blog</span>
          </Button>
        </Link>
        <Link to="shop">
          <Button variant="white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="33"
              width="33"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            <span>Shop</span>
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default HeroContent;
