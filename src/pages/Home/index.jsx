import React from "react";
import { HoButton } from "../../components";
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
  QualityCardDetail,
  roomHomePageData,
  svgicon,
  testimonialsData,
} from "../../const";
import { AdsCard } from "../../components/AdsCard";
import style from "./home.module.css";
import { HoInput } from "../../components/HoInput";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      {/* hero */}
      <section className="mt-5 pt-5 ">
        <div className="w-100 bg-dark-teal">
          <div className={clsx([style.max_w_1920, "mx-auto padding_let "])}>
            <div className={style.form_i}>
            <form action="">
              <div className={style.form_ii} >
              <HoInput
                type={"text"}
                variant={"date"}
                placeholder={"Check-in"}
                calendarIcon={svgicon.calender} />
                 <HoInput
                type={"text"}
                variant={"date"}
                placeholder={"Check-in"}
                calendarIcon={svgicon.calender} />
                 <HoInput
                type={"text"}
                variant={"date"}
                placeholder={"Check-in"}
                calendarIcon={svgicon.calender} />
                </div>
            </form>
            </div>
          </div>
        </div>
      </section>

      {/* aboutus */}
      <section className="pt-5">
        <div className="w-100 py-3xl-5 ">
          <div className="container py-3 py-md-5">
            <div className="w-100 d-flex flex-column flex-md-row align-items-center border border-3 border-start-0 border-end-0">
              <div className=" p-3 pe-md-4 py-md-5 pe-xl-5 py-xl-5">
                <div className={clsx(style.bestHotelImg)}>
                  <img
                    src={bestHotel}
                    width="100%"
                    height="100%"
                    alt="Best Hotel"
                  />
                </div>
              </div>
              <div className="w-100">
                <div
                  className={clsx(
                    style.max_width_i,
                    "max_width_i w-100 ps-4 ps-3xl-5 d-flex flex-column"
                  )}
                >
                  <Typography className="Vujahday">About us</Typography>

                  <h2 className=" lh-base m-0">
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
        <div className="w-100 py-3xl-5 bg-black-01">
          <div className="container ">
            <div className="w-100 d-flex justify-content-between flex-column flex-md-row pb-3 pb-xxl-5">
              <div className="py-3 py-md-5">
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
                    "font-size-md text-grey text-justify text-sm-end pb-xxl-4",
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
        <div className="w-100   pt-2 pt-md-3 pt-lg-4  pt-xl-5 bg-black-01">
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
                <div className="d-flex flex-wrap gap-2 gap-md-4 gap-xxl-5 gap-3xl-5 justify-content-lg-end">
                  {QualityCardDetail.map((el, i) => (
                    <div className="pt-3 pt-sm-3 pt-xxl-0" key={i}>
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
      </section>

      {/* Gallery */}
      <section>
        <div className="w-100  pt-2 pt-md-3 pt-lg-4  pt-xl-5  px-3 px-md-4">
          <div className={clsx([style.max_w_1920, "py-3xl-5 mx-auto"])}>
            <div className="w-100 d-flex align-items-center flex-column">
              <Typography className="Vujahday">Gallery</Typography>
              <h2 className={clsx([style.max_w_666, "text-center m-0 pt-2"])}>
                Photo Gallery of our hotel
              </h2>
            </div>
            <div className="d-flex flex-column flex-md-row gap-3 pt-2 pt-md-3 pt-lg-4 pt-xl-5">
              {/* Left Side Image (Main Image) */}
              <div className="flex-grow-1 " style={{ flexBasis: "45%" }}>
                <div
                  className={clsx(
                    style.galleryMainImg,
                    "pe-md-2 d-flex justify-content-center align-items-center"
                  )}
                >
                  <img
                    src={gallery18}
                    width="100%"
                    height="100%"
                    className="object-contain"
                    alt="Main Gallery"
                  />
                </div>
              </div>

              {/* Right Side Gallery Grid */}
              <div className="flex-grow-1" style={{ flexBasis: "55%" }}>
                <div className="w-100">
                  <div className=" row ">
                    {[gallery19, gallery20, gallery21, gallery22].map(
                      (img, i) => (
                        <div className="col-6 px-2 pb-3 pb-xxl-4" key={i}>
                          <div className={clsx(style.gallertImg)}>
                            <img
                              src={img}
                              width="100%"
                              className="object-cover"
                              alt={`Gallery ${i + 1}`}
                            />
                          </div>
                        </div>
                      )
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="w-100 d-flex justify-content-center pt-2 pt-md-3 pt-lg-4 ">
              <HoButton variant={"normal"} Children={"view all"} />
            </div>
          </div>
        </div>
      </section>

      {/* Feedback */}
      <section>
        <div className="w-100 py-2 py-md-3 py-lg-4  py-xl-5 ">
          <div className="container py-3xl-5">
            <div className="w-100 d-flex align-items-center flex-column pb-4 pb-xl-5">
              <Typography className="Vujahday">Feedback</Typography>
              <h2
                className={clsx([
                  style.max_w_666,
                  style.line_clap,
                  "text-center m-0 pt-2",
                ])}
              >
                What Our Customers Are Saying
              </h2>
            </div>
            <div className="w-100">
              <div className="border border-end-0 border-start-0 py-3 py-md-4 py-xl-5">
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
