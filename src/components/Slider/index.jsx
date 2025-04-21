import React, { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import clsx from "clsx";
import { Typography } from "antd";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import style from "./slider.module.css";
import { icon, svgicon } from "../../const";

export default function Slider({ slideData, slidesPerView, variant }) {
  const isHomeRoom = variant === "homeRoomPage";
  const isTestimonial = variant === "testimonials";

  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className="position-relative">
      {/* Custom Navigation Buttons (Only for testimonials) */}
      {isTestimonial && (
        <>
          <button ref={prevRef} className={clsx([style.customPrev , "bg-transparent border border-1 rounded-circle "])}>
            {svgicon.leftArrow}
          </button>
          <button ref={nextRef}  className={clsx([style.customNext , "bg-transparent border border-1 rounded-circle"])}>
            {svgicon.rightArrow}
          </button>
        </>
      )}

      <Swiper
        modules={[Pagination, Navigation]}
        loop={true}
        className="mySwiper"
        // pagination={ isTestimonial ? { clickable: true } : false }
        navigation={
          isTestimonial
            ? {
                prevEl: prevRef.current,
                nextEl: nextRef.current,
              }
            : false
        }
        onBeforeInit={(swiper) => {
          if (isTestimonial) {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }
        }}
        breakpoints={{
          480: {
            slidesPerView: isHomeRoom ? 2 : 1,
            spaceBetween: 20,
          },
          576: {
            slidesPerView: isHomeRoom ? 3 : 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: isHomeRoom ? 3 : 1,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: isHomeRoom ? 4 : 1,
            spaceBetween: 30,
          },
        }}
      >
        {slideData?.map((el, i) => (
          <SwiperSlide key={i}>
            {isHomeRoom && (
              <div className="w-100 d-flex flex-column justify-content-center gap-4">
                <div className={style.slidImgHomePage}>
                  <img
                    src={el.img}
                    width="100%"
                    height="100%"
                    className="object-fit-cover"
                    alt="img"
                  />
                </div>
                <div
                  className={clsx([
                    style.border_color,
                    "border border-1 border-end-0 border-start-0 py-3",
                  ])}
                >
                  <Typography className="font-primary font-size-2xl text-uppercase text-white text-center">
                    {el.title}
                  </Typography>
                </div>
              </div>
            )}

            {isTestimonial && (
              <div className="d-flex justify-content-center gap-2 gap-md-5 padding_smaller_y ">
                <div className={style.testimonialImg}>
                  <img
                    src={el.img}
                    width="100%"
                    className="object-fit-cover"
                    alt=""
                  />
                </div>
                <div>
                  <div className={style.doubleQuotes}>
                    {svgicon.doubleQuotes}
                  </div>
                </div>
                <div className="detail d-flex justify-content-between flex-column">
                  <Typography
                    className={clsx([
                      style.max_w_849,
                      style.line_clap,
                      "fonat-primary font-size-4xl fw-normal",
                    ])}
                  >
                    {el.detail}
                  </Typography>
                  <div className="d-flex flex-column flex-sm-row gap-sm-3 align-items-sm-center">
                    <Typography className={`font-secondary font-size-4xl fw-bold ${style.textLightSkyBlueHover}`}>
                      {el.name}
                    </Typography>
                    <Typography className={`fonat-primary font-size-lg text-black-40 fw-normal`}>
                      {el.day}
                    </Typography>
                  </div>
                </div>
              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
