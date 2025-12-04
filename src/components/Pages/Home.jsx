import React, { useState } from "react";

import Carousel from "./Carousel";
import Activities from "./Activities";
import Structure from "./Structure";
import Founder from "./Founder";

const Home = () => {
  return (
    <div className="min-h-screen bg-base-200">

      <Carousel />
      {/* <CardPhoto /> */}
      <Activities />
      <Founder />
      <Structure />
    </div>
  );
};

export default Home;
