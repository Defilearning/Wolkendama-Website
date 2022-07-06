import BackgroundWrapper from "../Shared/BackgroundWrapper";
import Header from "../Component/HomePage/Header/Header";
import Hero from "../Component/HomePage/Hero/Hero";
import Catalogue from "../Component/HomePage/Catalogue/Catalogue";
import HomeBlog from "../Component/HomePage/HomeBlog/HomeBlog";
import Footer from "../Shared/Footer";

const Home = () => {
  return (
    <BackgroundWrapper>
      <Header />
      <Hero />
      <Catalogue />
      <HomeBlog />
      <Footer />
    </BackgroundWrapper>
  );
};

export default Home;
