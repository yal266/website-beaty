import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ButtonCategory = ({ categories, onCategorySelect }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0",
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="container mx-auto px-5">
      <Slider {...settings}>
        {categories.map((category) => (
          <div key={category.idcategoria} className="px-1">
            <button
              onClick={() => onCategorySelect(category.idcategoria)}
              className="text-xs bg-red-300 hover:bg-gray-200 py-3 rounded-full hover:text-black whitespace-nowrap w-full"
            >
              {category.nombre}
            </button>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ButtonCategory;
