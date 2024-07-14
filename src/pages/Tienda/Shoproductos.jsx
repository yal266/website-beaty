import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ImagesCircleConf } from "../../conf/ImagesCircleConf";

const Shoproductos = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0",
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
          slidesToShow: 5,
        },
      },
    ],
  };

  return (
    <div className="container mx-auto section">
      <Slider {...settings}>
        {ImagesCircleConf.map((image) => (
          <div key={image.id} className="flex justify-center items-center">
            <div className="overflow-hidden flex justify-center items-center">
              <img
                src={image.src}
                alt={image.alt}
                className="h-20 w-20 rounded-full object-cover border border-pink-200"
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Shoproductos;
