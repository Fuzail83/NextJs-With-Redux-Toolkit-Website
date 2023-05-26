import React from "react";
import Banner from "../components/Banner";

const About = () => {
  return (
    <Banner
      title={"Our story"}
      imageUrl={"./about1.svg"}
      paragraph={
        "From award-winning dramas to blockbuster action movies, we've got you covered. Browse our selection of the latest and greate movies, and find your new favorite today."
      }
    />
  );
};

export default About;
