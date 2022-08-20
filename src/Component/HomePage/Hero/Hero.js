import HeroContent from "./HeroContent";
import photo from "./HeroImage.jpg";

const Hero = () => {
  return (
    <div className="grid grid-cols-3 my-32 items-center gap-16">
      <div className="col-start-1 col-end-3">
        <HeroContent />
      </div>
      <div className=" justify-self-center relative">
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
  );
};

export default Hero;
