import { Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import Shop from "./Pages/Shop";
import Blog from "./Pages/Blog";
import Culture from "./Pages/Culture";
import Tutorial from "./Pages/Tutorial";
import AboutUs from "./Pages/AboutUs";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/culture" element={<Culture />} />
      <Route path="/tutorial" element={<Tutorial />} />
      <Route path="/about-us" element={<AboutUs />} />
    </Routes>
  );
}

export default App;
