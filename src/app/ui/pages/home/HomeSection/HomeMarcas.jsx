import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { HomeMarcasConf } from "@constants/HomeMarcasConf";

const HomeMarcas = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0",
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
        },
      },
    ],
  };

  return (
    <div className="container mx-auto">
      <Slider {...settings}>
        {HomeMarcasConf.map((image) => (
          <div
            key={image.id}
            className="mx-auto flex justify-center items-center"
          >
            <div className="rounded-circle overflow-hidden d-flex align-items-center">
              <img src={image.src} alt={image.alt} className="max-w-16" />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HomeMarcas;
