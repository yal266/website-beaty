import React from "react";
import HomeMarcas from "./HomeSection/HomeMarcas";
import HomeCarousel from "./HomeSection/HomeCarousel";
import Footer from "../shared/Footer";

const Home = () => {
  return (
    <>
      <HomeCarousel />
      <HomeMarcas />
      <Footer />
    </>
  );
};

export default Home;
