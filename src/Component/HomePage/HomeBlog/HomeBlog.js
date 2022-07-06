import { Link } from "react-router-dom";
import BlankWrapper from "../../../Shared/BlankWrapper";

const HomeBlog = () => {
  return (
    <BlankWrapper>
      <h1>BLOG</h1>
      <div>
        <h1>Photo Example</h1>
      </div>
      <h2>Title</h2>
      <p>Content</p>
      <Link to="/blog">See more</Link>
    </BlankWrapper>
  );
};

export default HomeBlog;
