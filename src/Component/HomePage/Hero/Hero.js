import HeroContent from "./HeroContent";
import photo from "./HeroImage.jpg";

const Hero = () => {
  return (
    <div className="grid grid-cols-3">
      {/* <HeroContent className="col-start-1 col-end-3" /> */}
      {/* <div className="">
        <img src={photo} alt="person with kendama" />
      </div> */}
      <p className=" col-start-1 col-end-3">
        Test message AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
      </p>
      <p>ANOTHER TEST MESSAGEEEEEEEE</p>
    </div>
  );
};

export default Hero;
