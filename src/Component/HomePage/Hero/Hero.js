import HeroContent from "./HeroContent";

import classes from "./Hero.module.css";
import photo from "./HeroImage.jpg";

const Hero = () => {
  return (
    <div className={classes.heroContainer}>
      <HeroContent />
      <div className={classes.photoContainer}>
        <div className={classes.blurBackground}></div>
        <img src={photo} alt="person with kendama" />
      </div>
    </div>
  );
};

export default Hero;
