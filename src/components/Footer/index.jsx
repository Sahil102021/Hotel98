import { Typography } from "antd";
import clsx from "clsx";
import React from "react";
import style from "./Footer.module.css";
import { NavLink } from "react-router";
import { svgicon } from "../../const";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "100%",
};

const center = {
  lat: 50.3694677,
  lng: -4.1426393,
};
{
  /* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10180.526281194636!2d-4.159254829743816!3d50.36410109520978!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x486c935082b142a1%3A0x3b1d648203ffaa1c!2sWest%20Hoe%2C%20Plymouth%20PL1%203BX%2C%20UK!5e0!3m2!1sen!2sin!4v1745032398875!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */
}
const Footer = () => {
  return (
    <div>
      <footer>
        <div className="w-100">
          <div className={clsx([style.map, ""])}>
            <LoadScript googleMapsApiKey="">
              <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={15}
              >
                <Marker
                  position={center}
                  icon={{
                    url: "https://yourdomain.com/your-custom-icon.png", // <-- your custom icon
                    scaledSize: { width: 40, height: 40 }, // optional resize
                  }}
                />
              </GoogleMap>
            </LoadScript>
          </div>
        </div>
        <div
          className={clsx([
            style.greenFooter,
            "w-100 bg-dark-green text-white d-flex justify-content-center align-items-center ",
          ])}
        >
          <div className="container">
            <div className="w-100 d-flex flex-column flex-md-row gap-2 gap-md-0  ">
              <div className="w-50">
                <div className="d-flex align-items-center gap-1 gap-sm-2 gap-md-3 gap-xxl-4">
                  <div className={style.iconCircle}>
                    <div
                      className={clsx([
                        style.icon,
                        "d-flex justify-content-center align-items-center",
                      ])}
                    >
                      {svgicon.location}
                    </div>
                  </div>
                  <Typography
                    className={clsx([
                      style.line_clap,
                      "font-primary font-size-xl text-white",
                    ])}
                  >
                    Wisma Phoenix, Jalan Song Thian Cheok, 93100 Kuching,
                    Sarawak
                  </Typography>
                </div>
              </div>
              <div className="w-50 d-flex flex-column flex-sm-row gap-2 gap-md-0">
                <div className="w-50">
                  <div className="d-flex flex-row ">
                    <div className="d-flex align-items-center gap-1 gap-sm-2 gap-md-3 gap-xxl-4">
                      <div className={style.iconCircle}>
                        <div
                          className={clsx([
                            style.icon,
                            "d-flex justify-content-center align-items-center",
                          ])}
                        >
                          {svgicon.call}
                        </div>
                      </div>
                      <Typography
                        className={clsx([
                          style.line_clap,
                          "font-primary font-size-xl  text-white",
                        ])}
                      >
                        5698766564
                      </Typography>
                    </div>
                  </div>
                </div>
                <div className="w-50">
                  <div className="d-flex flex-row ">
                    <div className="d-flex align-items-center gap-1 gap-sm-2 gap-md-3 gap-xxl-4">
                      <div className={style.iconCircle}>
                        <div
                          className={clsx([
                            style.icon,
                            "d-flex justify-content-center align-items-center",
                          ])}
                        >
                          {svgicon.mail}
                        </div>
                      </div>
                      <Typography
                        className={clsx([
                          style.line_clap,
                          "font-primary font-size-xl  text-white",
                        ])}
                      >
                        hotel98@gmail.com
                      </Typography>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className={clsx([
            style.powerBy,
            "bg-black-01 text-center d-flex justify-content-center align-items-center",
          ])}
        >
          <Typography className="font-primary text-dark-grey font-size-xs fw-normal">
            Powered by Hello
            <NavLink to={"/"}>
              <span
                className={clsx([
                  style.underLine,
                  "ps-2 link-underline-secondary text-dark-grey",
                ])}
              >
                Hospitality Technology
              </span>
            </NavLink>
          </Typography>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
