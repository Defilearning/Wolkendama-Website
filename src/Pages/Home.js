import Header from "../Component/HomePage/Header/Header";
import Hero from "../Component/HomePage/Hero/Hero";
import Catalogue from "../Component/HomePage/Catalogue/Catalogue";
import HomeBlog from "../Component/HomePage/HomeBlog/HomeBlog";
import Footer from "../Shared/Footer";

const Home = () => {
  return (
    <div className=" px-52 bg-purple-theme h-full w-full">
      <Header />
      <Hero />
      {/* <Catalogue />
      <HomeBlog />
      <Footer /> */}
    </div>
  );
};

export default Home;
