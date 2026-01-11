import React from "react";

import Carousel from "./Carousel";
import Activities from "./Card/Activities.jsx";
import Structure from "./Structure";
import Founder from "./Founder";
import Article from "./Article.jsx";

const Home = () => {
  return (
    <div className="min-h-screen bg-base-200">

      <Carousel />
      {/* <CardPhoto /> */}
      <Activities />
      <Article />
      <Founder />
      <Structure />
    </div>
  );
};

export default Home;
