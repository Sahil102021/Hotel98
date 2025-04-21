import clsx from "clsx";
import React, { useState } from "react";
import style from "./Footer.module.css";
import { Typography } from "antd";
import { NavLink } from "react-router";
import { map } from "../../assets/imges";
import { svgicon } from "../../const";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
const Footer = () => {
  const containerStyle = {
    width: "100%",
    height: "100%",
  };

  const [mapAccess, setMapAccess] = useState(false);
  function allowMapAccess() {
    setMapAccess(true);
  }

  return (
    <div>
      <div>
        <footer>
          {/* Map Section */}
          <div className="w-100">
            <div className={`${style.map} position-relative`}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5656.972902174471!2d-2.9910910393282166!3d53.40652534216314!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487b212e349cd1c9%3A0x3b50330ca98cf538!2sThe%20Cavern%20Club!5e0!3m2!1sen!2sin!4v1745224207355!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Map Location"
                className={`${style.mapIframe} ${ !mapAccess ? style.noPointer : "" }`}
              />
              {mapAccess ? ( "" ) : (
                <div className={`${style.mapIcon} position-absolute d-flex justify-content-center align-items-center`} >
                  {!mapAccess && (
                    <div
                      className={`${style.pulsating_circle} z-1`}
                      onClick={allowMapAccess}
                      style={{ cursor: "pointer" }} />
                  )}
                  <div className={`${style.iconLocation} position-absolute z-5`} >
                    {svgicon.location2}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Contact Info Section */}
          <div
            className={clsx(
              style.greenFooter,
              "w-100 bg-dark-green text-white d-flex justify-content-center align-items-center"
            )}
          >
            <div className="container">
              <div className="w-100 d-flex flex-column flex-md-row gap-2 gap-md-0">
                {/* Address */}
                <div className="w-100 w-md-50  mb-md-0">
                  <div className="d-flex align-items-center gap-2 flex-row">
                    <div className={style.iconCircle}>
                      <div
                        className={clsx(
                          style.icon,
                          "d-flex justify-content-center align-items-center"
                        )}
                      >
                        {svgicon.location}
                      </div>
                    </div>
                    <Typography
                      className={clsx(
                        style.line_clap,
                        "font-primary font-size-xl text-white"
                      )}
                    >
                      Wisma Phoenix, Jalan Song Thian Cheok, 93100 Kuching,
                      Sarawak
                    </Typography>
                  </div>
                </div>

                {/* Contact Details */}
                <div className="w-100 w-md-50 d-flex flex-column flex-sm-row gap-3">
                  {/* Phone */}
                  <div className="w-100 w-sm-50">
                    <div className="d-flex align-items-center gap-2 flex-row">
                      <div className={style.iconCircle}>
                        <div
                          className={clsx(
                            style.icon,
                            "d-flex justify-content-center align-items-center"
                          )}
                        >
                          {svgicon.call}
                        </div>
                      </div>
                      <Typography
                        className={clsx(
                          style.line_clap,
                          "font-primary font-size-xl text-white"
                        )}
                      >
                        5698766564
                      </Typography>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="w-100 w-sm-50">
                    <div className="d-flex align-items-center gap-2 flex-row">
                      <div className={style.iconCircle}>
                        <div
                          className={clsx(
                            style.icon,
                            "d-flex justify-content-center align-items-center"
                          )}
                        >
                          {svgicon.mail}
                        </div>
                      </div>
                      <Typography
                        className={clsx(
                          style.line_clap,
                          "font-primary font-size-xl text-white"
                        )}
                      >
                        hotel98@gmail.com
                      </Typography>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Powered By */}
          <div
            className={clsx(
              style.powerBy,
              "bg-black-01 text-center d-flex justify-content-center align-items-center py-2"
            )}
          >
            <Typography className="font-primary text-dark-grey font-size-xs fw-normal m-0">
              Powered by Hello
              <NavLink
                to="/" className="ps-2 link-underline-secondary" >
                <span className={`${style.underLine} text-dark-grey `}>Hospitality Technology</span>
              </NavLink>
            </Typography>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
