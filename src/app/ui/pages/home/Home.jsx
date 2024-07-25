import React from "react";
import HomeMarcas from "./HomeSection/HomeMarcas";
import HomeCarousel from "./HomeSection/HomeCarousel";
import Footer from "../../components/layout/Footer/Footer";

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
