import React, { useRef } from "react";
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
  const HeroVerticalScroll = variant === "HeroVerticalScroll";

  const swiperDirection = HeroVerticalScroll ? "vertical" : "horizontal";
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className="position-relative">
      {isTestimonial && (
        <>
          <button
            ref={prevRef}
            className={clsx(
              style.customPrev,
              "bg-transparent border border-1 rounded-circle"
            )}
          >
            {svgicon.leftArrow}
          </button>
          <button
            ref={nextRef}
            className={clsx(
              style.customNext,
              "bg-transparent border border-1 rounded-circle"
            )}
          >
            {svgicon.rightArrow}
          </button>
        </>
      )}

      <Swiper
        modules={[Pagination, Navigation]}
        direction={swiperDirection}
        pagination={{
          clickable: true,
        }}
        loop={true}
        className="mySwiper"
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
              <div className="">
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
                  className={clsx(
                    style.border_color,
                    "border border-1 border-end-0 border-start-0 py-3 mt-4"
                  )}
                >
                  <Typography className="font-primary fs-4 text-uppercase text-white text-center ">
                    {el.title}
                  </Typography>
                </div>
              </div>
            )}

            {isTestimonial && (
              <div className="d-flex justify-content-center gap-2 gap-md-5 padding_smaller_y">
                <div className={style.testimonialImg}>
                  <img
                    src={el.img}
                    width="100%"
                    className="object-fit-cover"
                    alt="testimonial"
                  />
                </div>
                <div>
                  <div className={style.doubleQuotes}>
                    {svgicon.doubleQuotes}
                  </div>
                </div>
                <div className="detail d-flex flex-column justify-content-between">
                  <Typography
                    className={clsx(
                      style.max_w_849,
                      style.line_clap,
                      "font-primary fw-normal font-size-4xl "
                    )}
                  >
                    {el.detail}
                  </Typography>
                  <div className="d-flex flex-column flex-sm-row gap-sm-3 align-items-sm-center mt-3">
                    <Typography
                      className={`font-secondary fs-5 fw-bold ${style.textLightSkyBlueHover}`}
                    >
                      {el.name}
                    </Typography>
                    <Typography className="font-primary fs-6 text-muted fw-normal">
                      {el.day}
                    </Typography>
                  </div>
                </div>
              </div>
            )}

            {HeroVerticalScroll && (
              <div className="z-1">
                <div className={`${style.heroImg} w-100 z-1`}>
                  <img
                    src={el.img}
                    width="100%"
                    height="100%"
                    className="object-fit-cover"
                    alt="vertical scroll"
                  />
                </div>
              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
