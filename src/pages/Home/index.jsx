import React from "react";
import { HoButton, HoIcon } from "../../components";
import Slider from "../../components/Slider";
import {
  bestHotel,
  gallery18,
  gallery19,
  gallery20,
  gallery21,
  gallery22,
  line,
  text,
} from "../../assets/imges";
import clsx from "clsx";
import { Button, Typography } from "antd";
import { useNavigate } from "react-router";
import {
  heroSectionImg,
  options,
  QualityCardDetail,
  roomHomePageData,
  socialMediaLink,
  svgicon,
  testimonialsData,
} from "../../const";
import { AdsCard } from "../../components/AdsCard";
import style from "./home.module.css";
import { HoInput } from "../../components/HoInput";
import ScrollDownBadge from "../../components/ScrollDownBadge";
import HalfRoundTitle from "../../components/HalfRoundTitle";
import Dropdown from "../../components/Dropdown";
import HoAutoComplete from "../../components/HoAutoComplete";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      {/* hero */}
      <section part="/" id="/">
        <div className={`w-100  `}>
          <div className={`${style.max_w_1920} mx-auto`}>
            <div className={` ${style.heroSlieder} position-relative`}>
              <div className={`slider`}>
                <Slider
                  variant={"HeroVerticalScroll"}
                  slideData={heroSectionImg}
                />
              </div>
              <div className={`${style.halfround} position-absolute z-99`}>
                <HalfRoundTitle />
              </div>
              <div
                className={`${style.heroLeftSideIcon} position-absolute z-3`}
              >
                <div
                  className={` ${style.heroLeftSideIconList} d-flex flex-column justify-content-center align-items-center gap-3 gap-xxl-4`}
                >
                  {socialMediaLink.map((el, i) => {
                    return (
                      <HoIcon
                        key={i}
                        variant={"smallCrircleIcon"}
                        icon={el.icon}
                        to={el.link}
                      />
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* form */}
      <section className="w-100">
        <div className="w-100 bg-dark-teal">
          <div className={clsx([style.max_w_1920, "mx-auto"])}>
            <div className={`${style.form_i} padding_let`}>
              <form
                action=""
                className="d-flex flex-column flex-md-row align-items-center h-100 py-2 pe-3 pe-md-0 py-md-0" >
                <div className={`${style.form_ii} w-100  row `}>
                  <div className="col-12 col-sm-6 col-xl-3 py-2 ">
                    <HoInput
                      id={"Check_in"}
                      type={"date"}
                      name={"date"}
                      variant={"date"}
                      placeholder={"Check-in"}
                      calendarIcon={svgicon.calender}
                    />
                  </div>
                  <div className="col-12 col-sm-6  col-xl-3 py-2 ">
                    <HoInput
                      id={"Check_out"}
                      type={"date"}
                      variant={"date"}
                      name={"date"}
                      placeholder={"Check-out"}
                      calendarIcon={svgicon.calender}
                    />
                  </div>
                  <div className="col-12 col-sm-6  col-xl-3 py-2 ">
                    <HoAutoComplete
                      id={"room"}
                      name={"room"}
                      variant={"primaryAutoComplete"}
                      options={options}
                      placeholder={"Room"}
                    />
                  </div>
                  <div className="col-12 col-sm-6  col-xl-3 py-2 ">
                    <HoAutoComplete
                      id={"guest"}
                      name={"guest"}
                      variant={"primaryAutoComplete"}
                      options={options}
                      placeholder={"guest"}
                    />
                  </div>
                </div>
                <HoButton variant="bigPlanButton" Children="book now" />
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* aboutus */}
      <section className="padding_small_i_y" id="">
        <div className="w-100 ">
          <div className="container">
            <div className="w-100 d-flex flex-column flex-md-row align-items-center border border-3 border-start-0 border-end-0">
              <div
                className={` pt-3 pb-3 p-sm-3 pe-md-4 py-md-5 pe-xl-5 py-xl-5 ${style.bordeverticalLine}`}
              >
                <div className={`${style.bestHotelImg}`}>
                  <img
                    src={bestHotel}
                    width="100%"
                    height="100%"
                    alt="Best Hotel"
                    className="object-fit-cover"
                  />
                </div>
              </div>
              <div className="w-100">
                <div
                  className={clsx(
                    style.max_width_i,
                    "max_width_i w-100 pb-3 ps-sm-4 ps-3xl-5 d-flex flex-column"
                  )}
                >
                  <Typography className="Vujahday">About us</Typography>

                  <h2 className=" line_clap_four_line lh-base m-0">
                    We are the best hotel we have experienced for 5 years. Don’t
                    worry about service
                  </h2>

                  <div className="d-flex flex-row gap-4 gap-xl-5 pt-3 pt-xl-4">
                    <HoButton
                      variant="normal"
                      Children="Read More"
                      handleClick={() => navigate("/aboutus")}
                    />
                    <div>
                      <div className={clsx(style.textImg)}>
                        <img src={text} width="100%" alt="Decorative text" />
                      </div>
                      <div className={clsx(style.lineImg)}>
                        <img src={line} width="100%" alt="Line graphic" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* comfortable rooms */}
      <section>
        <div className="w-100 padding_small_i_t bg-black-01">
          <div className="container ">
            <div className="w-100 d-flex justify-content-between flex-column flex-md-row pb-3 pb-xxl-5">
              <div className="">
                <Typography className="Vujahday">Rooms</Typography>
                <h2
                  className={clsx([
                    style.max_w_609,
                    "text-white max-w-435 m-0",
                  ])}
                >
                  comfortable rooms just for you
                </h2>
              </div>
              <div className=" d-flex justify-content-end align-items-end py-3 py-md-5">
                <Typography
                  className={clsx([
                    style.max_w_652,
                    "font-size-md text-grey text-justify text-sm-end pb-xxl-4 line_clap_four_line ",
                  ])}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </Typography>
              </div>
            </div>
            <Slider
              variant={"homeRoomPage"}
              slideData={roomHomePageData}
              slidesPerView={4}
            />
            <div className="w-100 d-flex justify-content-center  pt-2 pt-md-3 pt-lg-4  pt-xl-5 ">
              <HoButton
                variant={"normal"}
                Children={"view More"}
                handleClick={() => navigate("/")}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Quality Is Your Comfort  */}
      <section>
        <div className="w-100 padding_small_i_t padding_smaller_b bg-black-01">
          <div className="container py-3xl-5">
            <div className="w-100 d-flex flex-column flex-lg-row gap-4 gap-lg-0 py-3">
              <div className={clsx([style.max_w_435, "w-25"])}>
                <Typography className="Vujahday">Why Stay with Us</Typography>
                <h2
                  className={clsx([
                    style.max_w_609,
                    "text-white max-w-435 m-0",
                  ])}
                >
                  Our Quality Is Your Comfort
                </h2>
              </div>
              <div className="w-75">
                <div className="row justify-content-end">
                  <div className="col-12 col-lg-11">
                    <div className="row g-4">
                      {QualityCardDetail.map((el, i) => (
                        <div
                          className="col-12 col-sm-6 pt-sm-3 pt-xl-4"
                          key={i}
                        >
                          <AdsCard
                            icon={el.icon}
                            title={el.title}
                            detail={el.detail}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section>
        <div className="w-100 padding_small_i_t px-3 px-md-4">
          <div className={clsx([style.max_w_1920, "mx-auto"])}>
            <div className="w-100 d-flex align-items-center flex-column">
              <Typography className="Vujahday">Gallery</Typography>
              <h2 className={clsx([style.max_w_666, "text-center m-0 pt-2"])}>
                Photo Gallery of our hotel
              </h2>
            </div>
            <div className="row padding_smaller_t">
              {/* Left: Main Image */}
              <div className="col-12 col-md-6 mb-3 mb-md-0">
                <div
                  className={clsx(
                    style.galleryMainImg,
                    "w-100 d-flex justify-content-center align-items-center"
                  )}
                >
                  <img
                    src={gallery18}
                    className="img-fluid object-fit-cover w-100 h-100"
                    alt="Main Gallery"
                  />
                </div>
              </div>

              {/* Right: Grid of Images */}
              <div className="col-12 col-md-6">
                <div className="row g-2 g-md-3 g-xxl-4">
                  {[gallery19, gallery20, gallery21, gallery22].map(
                    (img, i) => (
                      <div className="col-6" key={i}>
                        <div className={clsx(style.gallertImg, "w-100 ")}>
                          <img
                            src={img}
                            className="img-fluid object-fit-cover w-100 h-100"
                            alt={`Gallery ${i + 1}`}
                          />
                        </div>
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>

            <div className="w-100 d-flex justify-content-center pt-2 pt-md-3 pt-lg-4 pt-xl-5 ">
              <HoButton variant={"normal"} Children={"view all"} />
            </div>
          </div>
        </div>
      </section>

      {/* Feedback */}
      <section>
        <div className="w-100 padding_small_i_y ">
          <div className="container">
            <div className="w-100 d-flex align-items-center flex-column">
              <Typography className="Vujahday">Feedback</Typography>
              <h2
                className={clsx([
                  style.max_w_760,
                  style.line_clap,
                  "text-center m-0 pt-2",
                ])}
              >
                What Our Customers Are Saying
              </h2>
            </div>
            <div className="w-100">
              <div className="border border-end-0 border-start-0 margin_smaller_t">
                <Slider variant={"testimonials"} slideData={testimonialsData} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
