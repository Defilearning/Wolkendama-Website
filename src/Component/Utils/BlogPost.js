import { Link } from "react-router-dom";
import Button from "./Button";

const BlogPost = ({ title, descriptions, date, imgCover, id }) => {
  return (
    <div className="hero bg-violet-200 text-black rounded-md">
      <div className="hero-content max-w-5xl flex-col lg:flex-row lg:justify-around">
        <img
          src={imgCover}
          className="max-w-sm rounded-lg shadow-1xl"
          alt="kendama-blog-post"
        />
        <div className="">
          <h1 className="text-5xl font-bold">{title}</h1>
          <p className="py-6 text-lg">{descriptions.substr(0, 200)}</p>
          <p className="italic">Updated on:</p>
          <p className="pb-6 italic">{date}</p>
          <div className=" flex gap-7 w-fit">
            <Link to={`/blog/${id}`}>
              <Button variant="secondary" className="text-lg">
                See post
              </Button>
            </Link>
            <Link to={`/blog`}>
              <Button variant="gradient" className="text-lg">
                See other blog
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
