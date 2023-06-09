import React from "react";
import Banner from "./components/Banner";

const Page = () => {
  return (
    <Banner
      title={"let's watch movie together"}
      imageUrl={"./home.svg"}
      paragraph={
        "From award-winning dramas to blockbuster action movies, we've got you covered. Browse our selection of the latest and greate movies, and find your new favorite today."
      }
    />
  );
};

export default Page;
