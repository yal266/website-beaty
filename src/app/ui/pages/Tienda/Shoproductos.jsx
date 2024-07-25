import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { API_BASE_URL } from "@api/APIweb";

const Shoproductos = ({ categories, onCategorySelect }) => {
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
        {categories.map((category) => (
          <div key={category.idcategoria} className="flex items-center">
            <div className="flex overflow-hidden justify-center items-center">
              <button
                onClick={() => onCategorySelect(category.idcategoria)}
                className="focus:outline-none "
              >
                <img
                  src={`${API_BASE_URL}${category.foto}`}
                  alt={category.nombre}
                  className="h-24 w-24 rounded-full object-cover border-2 border-pink-200 hover:border-pink-400 transition-colors"
                />
              </button>
            </div>
            <span className="mt-3 inline-block text-sm font-medium truncate text-center underline text-black w-full">
              {category.nombre}
            </span>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Shoproductos;
