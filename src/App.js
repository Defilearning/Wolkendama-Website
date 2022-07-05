import Header from "./Component/Header/Header";
import Hero from "./Component/Hero/Hero";

import classes from "./App.module.css";

function App() {
  return (
    <div className={classes.background}>
      <div className={classes.parallex}>
        <Header />
        <Hero />
      </div>
    </div>
  );
}

export default App;
