import classes from "./BlankWrapper.module.css";

const BlankWrapper = (props) => {
  return <div className={classes.background}>{props.children}</div>;
};

export default BlankWrapper;
