import classes from "./BackgroundWrapper.module.css";

const BackgroundWrapper = (props) => {
  return (
    <div className={classes.background}>
      <div className={classes.parallex}>{props.children}</div>
    </div>
  );
};

export default BackgroundWrapper;
