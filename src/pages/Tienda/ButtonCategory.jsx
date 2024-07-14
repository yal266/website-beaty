import React from "react";
import { ButtonCat } from "../../conf/ButtonCat";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ButtonCategory = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 10,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0",
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="container mx-auto section px-5">
      <Slider {...settings}>
        {ButtonCat.map((button) => (
          <div key={button.id} className="flex justify-center items-center">
            <div className="overflow-hidden flex justify-center items-center">
              <a
                href={button.link}
                className="border border-gray-300 text-xs hover:bg-gray-200 py-2 px-4 rounded-full"
              >
                {button.label}
              </a>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ButtonCategory;
