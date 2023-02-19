import HeroContent from "./HeroContent";
import photo from "../../../image/heroImage.webp";

const Hero = () => {
  return (
    <>
      {/* Mobile Version */}
      <div className=" lg:hidden flex flex-col py-11 lg:py-32 gap-5 items-center justify-center w-9/12 ">
        <div>
          <HeroContent />
        </div>
        <div className="relative">
          <div className="absolute h-full w-full rounded-full bg-gradient-to-r from-fuchsia-300 to-sky-300 scale-y-105 scale-x-125 blur-3xl opacity-30"></div>
          <div className="relative after:content-[''] after:block after:top-0 after:left-0 after:absolute after:h-full after:w-full after:bg-gradient-to-br after:from-purple-700 after:to-orange-500 z-10 after:opacity-25 after:rounded-lg">
            <img
              src={photo}
              alt="person with kendama"
              className="min-h-[5rem] min-w-[5rem] max-w-[15rem] sm:max-w-[30rem] rounded-lg bg-slate-50 "
              // className="h-10 w-20 rounded-lg "
            />
          </div>
        </div>
      </div>

      {/* Desktop version */}
      <div className=" hidden lg:flex py-32 gap-5 items-center justify-around w-full ">
        <HeroContent />
        <div className="relative">
          <div className="absolute h-full w-full rounded-full bg-gradient-to-r from-fuchsia-300 to-sky-300 scale-y-105 scale-x-125 blur-3xl opacity-30"></div>
          <div className="relative after:content-[''] after:block after:top-0 after:left-0 after:absolute after:h-full after:w-full after:bg-gradient-to-br after:from-purple-700 after:to-orange-500 z-10 after:opacity-25 after:rounded-lg">
            <img
              src={photo}
              alt="person with kendama"
              className="min-h-[27rem] max-h-[40rem] min-w-[18rem] rounded-lg "
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
