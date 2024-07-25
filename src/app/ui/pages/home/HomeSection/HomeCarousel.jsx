import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { RiArrowLeftSLine, RiArrowRightSLine } from "@remixicon/react";
import { ImagesBanner } from "@constants/ImagesBannerConf";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const HomeCarousel = () => {
  return (
    <div className="relative shadow shadow-gray-200">
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={0}
        slidesPerView={1}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        pagination={{ clickable: true }}
        className="w-full h-[calc(90vh-50px)]"
      >
        {ImagesBanner.map((image) => (
          <SwiperSlide key={image.id}>
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Botones de navegación del carrusel */}
      <button
        type="button"
        className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-prev
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full group-focus:ring-4 group-focus:outline-none">
          <RiArrowLeftSLine />
          <span className="sr-only">Previous</span>
        </span>
      </button>
      <button
        type="button"
        className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-next
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full group-focus:ring-4  group-focus:outline-none">
          <RiArrowRightSLine />
          <span className="sr-only">Next</span>
        </span>
      </button>
    </div>
  );
};

export default HomeCarousel;
