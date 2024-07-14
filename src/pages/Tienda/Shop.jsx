import React from "react";
import { ImagesCircle } from "../../conf/ImagesCircle";

const Shop = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
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
    <div className="container mt-5">
      <Slider {...settings}>
        {ImagesCircle.map((image) => (
          <div key={image.id} className="mx-auto">
            <div
              className="rounded-circle overflow-hidden d-flex align-items-center border border-white"
              style={{ width: "75px", height: "75px" }}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="img-fluid"
                style={{ maxWidth: "100%", maxHeight: "100%" }}
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Shop;
