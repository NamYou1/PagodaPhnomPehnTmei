import React, { useState } from "react";

import Carousel from "../Card/Carousel";
import CardPhoto from "../Card/CardInformation";
import Structure from "./Structure";
import Founder from "./Founder";

const Home = () => {
  return (
    <div className="min-h-screen bg-base-200">
      <Carousel />
      <CardPhoto />
      <Founder />
      <Structure />
    </div>
  );
};

export default Home;
