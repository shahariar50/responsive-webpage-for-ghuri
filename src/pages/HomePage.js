import React from "react";
import HomeBanner from "./home/HomeBanner";
import classes from "./home/homepage.module.css";

const HomePage = () => {
  return (
    <div className={classes.root}>
      <section>
        <HomeBanner />
      </section>
    </div>
  );
};

export default HomePage;
