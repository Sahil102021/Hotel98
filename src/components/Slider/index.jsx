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
  
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return `
        <div class="${className} ${style.HeroVerticalNumber} ${style.swiper_pagination_bullet} text-light m-0 me-sm-2 me-md-3 me-xl-4 d-flex justify-content-center align-items-center swiper-pagination-bullet">
          <div class="d-flex flex-column align-items-center p-sm-2">
            <Typography>0${index + 1}</Typography>
            <div class="${style.verticalLine} mt-sm-2"></div>
          </div>
        </div>
      `;
    },
  };
  

  return (
    <div className="position-relative">
      {isTestimonial && (
        <>
          <button
            ref={prevRef}
            className={clsx(
              style.customPrev,
              "bg-transparent border border-1 rounded-circle d-flex justify-content-center align-items-center  "
            )}
          >
            {svgicon.leftArrow}
          </button>
          <button
            ref={nextRef}
            className={clsx(
              style.customNext,
              "bg-transparent border border-1 rounded-circle d-flex justify-content-center  align-items-center  "
            )}
          >
            {svgicon.rightArrow}
          </button>
        </>
      )}

      <Swiper
        modules={[Pagination, Navigation]}
        speed="700"
        autoplay={true}
        direction={swiperDirection}
        pagination={HeroVerticalScroll ? pagination : false}
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
                    height="100%"
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
                      "font-primary fw-normal font-size-4xl line_clap_four_line "
                    )}
                  >
                    {el.detail}
                  </Typography>
                  <div className="d-flex flex-column flex-sm-row gap-sm-3 align-items-sm-center mt-3">
                    <Typography
                      className={`font-secondary font-size-4xl fw-bold ${style.textLightSkyBlueHover} line_clap_one_line`}
                    >
                      {el.name}
                    </Typography>
                    <Typography className={`font-primary font-size-lg text-muted fw-normal line_clap_one_line `}>
                      {el.day}
                    </Typography>
                  </div>
                </div>
              </div>
            )}

            {HeroVerticalScroll && (
              <div className="">
                <div className={`${style.heroImg} w-100`}>
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
