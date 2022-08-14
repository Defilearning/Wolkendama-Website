import { Fragment } from "react";
import { Link } from "react-router-dom";

const HomeBlog = () => {
  return (
    <Fragment>
      <h1>BLOG</h1>
      <div>
        <h1>Photo Example</h1>
      </div>
      <h2>Title</h2>
      <p>Content</p>
      <Link to="/blog">See more</Link>
    </Fragment>
  );
};

export default HomeBlog;
