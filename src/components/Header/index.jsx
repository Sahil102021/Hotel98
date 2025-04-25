import React, { useEffect, useState } from "react";
import { icon, svgicon } from "../../const";
import style from "./header.module.css";
import clsx from "clsx";
import { Typography } from "antd";
import { NavLink } from "react-router";
import { manuList } from "../../const/constes";
import { HoButton } from "../HoButton";
import { logo } from "../../assets/imges";
import { Link, animateScroll as scroll } from "react-scroll";
import SideBar from "./sideBar";

const Header = () => {
  const [scrolling, setScrolling] = useState(false);
  const [hideScrolling, sethideScrolling] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 40) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
    if (window.scrollY > 60) {
      sethideScrolling(true);
    } else {
      sethideScrolling(false);
    }
  };
  return (
    <div className="">
      <header className="w-100 z-99 position-fixed top-0">
        <section>
          <div
            className={`w-100  z-99  ${style.modal_backdrop}  ${
              hideScrolling ? style.hideScrolling : style.showScrolling
            } `}
          >
            <div className="container">
              <div className="w-full d-flex justify-content-center justify-content-sm-end align-items-center flex-wrap">
                <NavLink to="mailto:Hotel98@gmail.com">
                  <div className="w-100 h-100 d-flex flex-row align-items-center gap-2 mx-2 mx-sm-4">
                    <div
                      className={clsx(
                        style.widthHightSame,
                        "d-flex align-items-center"
                      )}
                    >
                      {svgicon.mail}
                    </div>
                    <Typography className="font-size-sm font-primary text-grey text-sky-blue">
                      hotel98@email.com
                    </Typography>
                  </div>
                </NavLink>
                <div className={clsx(style.divider)} />
                <NavLink to="tel:+6098754321">
                  <div className="d-flex flex-row align-items-center gap-2 mx-2 mx-sm-4">
                    <div
                      className={clsx(
                        style.widthHightSame,
                        "d-flex align-items-center"
                      )}
                    >
                      {svgicon.call}
                    </div>
                    <Typography className="font-size-sm font-primary text-grey text-sky-blue">
                      +60 9875 4321
                    </Typography>
                  </div>
                </NavLink>
              </div>
            </div>
            <div className={clsx(style.divider_i)}></div>
          </div>
        </section>

        {/* header-2 */}

        <section>
          <div
            className={clsx(
              "w-100  ",
              scrolling ? [`bg-black ${style.topSideScrolling}`] : ( style.modal_backdrop)
            )}
          >
            <div className="container">
              <div
                className={clsx(
                  style.main_header,
                  "w-100 d-flex justify-content-between align-items-center"
                )}
              >
                <NavLink to="/">
                  <div
                    className={clsx(
                      style.mainLogo,
                      "d-flex flex-row justify-content-between align-items-center"
                    )}
                  >
                    <div className={clsx(style.divider_ii)} />
                    <div className={clsx(style.logo)}>
                      <img src={logo} width="100%" height="100%" alt="logo" />
                    </div>
                    <div className={clsx(style.divider_ii)} />
                  </div>
                </NavLink>

                <ul className="h-full d-none d-xl-flex gap-xl-5 flex-row mb-0">
                  {manuList.map((el, i) => (
                    <NavLink key={i} to={el.link}>
                      <li
                        className={clsx(
                          style.list,
                          "d-flex align-items-center font-primary font-size-sm text-capitalize"
                        )}
                      >
                        {el.name}
                      </li>
                    </NavLink>
                  ))}
                </ul>

                <div className="d-flex flex-row gap-2 align-items-center">
                  <HoButton variant="simpleBorder" Children="Contact Us" />
                  <div className="d-block d-xl-none">
                    <SideBar />
                  </div>
                </div>
              </div>
            </div>
            <div className={clsx(style.divider_i)}></div>
          </div>
        </section>
      </header>
    </div>
  );
};

export default Header;
