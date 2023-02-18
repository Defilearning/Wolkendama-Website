import Header from "../Component/Utils/Header";
import Hero from "../Component/HomePage/Hero/Hero";
import Catalogue from "../Component/HomePage/Catalogue/Catalogue";
import Footer from "../Component/Utils/Footer";
import { useEffect, useRef, useState } from "react";

const Home = () => {
  const catalogueHeight = useRef();
  const [componentHeight, setComponentHeight] = useState();
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    setComponentHeight(catalogueHeight.current.clientHeight);

    const handleResize = () => {
      setComponentHeight(catalogueHeight.current.clientHeight);
    };
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      setOffset(window.scrollY);
    };
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex justify-center bg-purple-theme h-full w-full">
      <div className="bg-pic"></div>
      <div className="lg:block lg:w-10/12 xl:w-9/12 lg:z-10 lg:pt-10 z-20">
        <div ref={catalogueHeight} className="flex flex-col items-center">
          <Header className="bg-slate-100 text-black lg:text-inherit lg:bg-inherit lg:shadow-none w-screen lg:w-full" />
          <Hero />
        </div>
        {offset > componentHeight && (
          <div className="fixed text-black flex justify-center w-full h-fit bg-slate-50 shadow-md top-0 left-0 z-20">
            <div className="w-10/12">
              <Header className="text-black" />
            </div>
          </div>
        )}
        <div className="bg-light-gray full-bleed-violet py-24">
          <Catalogue />
        </div>

        <div className="bg-slate-100 full-bleed-white">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Home;
