import React from "react";
import { icon, svgicon } from "../../const";
import style from "./header.module.css";
import clsx from "clsx";
import { Typography } from "antd";
import { NavLink } from "react-router";
import { manuList } from "../../const/constes";
import { HoButton } from "../HoButton";
import { logo } from "../../assets/imges";
import SideBar from "./sideBar";
const Header = () => {
  return (
    <div>
      {/* header */}
      <header className="w-100 position-fixed top-0 z-3">
        <div className="w-ful bg-black ">
          <div className="container">
            <div className="w-full d-flex justify-content-center justify-content-sm-end align-items-center flex-wrap">
              <NavLink to="mailto:Hotel98@gmail.con">
                <div className="w-full h-full d-flex flex-row align-items-center gap-2 mx-2 mx-sm-4">
                  <div className={clsx([style.widthHightSame , "d-flex  align-items-center"])}>
                    {svgicon.mail}
                  </div>
                  <Typography className="font-size-sm font-primary text-grey text-sky-blue">
                    hotel98@email.com
                  </Typography>
                </div>
              </NavLink>

              <div className={clsx(style.divider)} />

              <NavLink to="tel:+60 9875 4321">
                <div className="d-flex flex-row align-items-center gap-2 mx-2 mx-sm-4">
                <div className={clsx([style.widthHightSame , "d-flex  align-items-center"])}>
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
        <div className="w-full bg-black">
          <div className="container">
            <div
              className={clsx([
                style.main_header,
                " w-full d-flex justify-content-between align-items-center  ",
              ])}
            >
              <div
                className={clsx(style.mainLogo, [
                  " d-flex flex-row justify-content-between  align-items-center",
                ])}
              >
                <div className={clsx(style.divider_ii)}></div>
                <NavLink to={"/"}>
                  <div className={clsx(style.logo)}>
                    <img src={logo} width='100%' height='100%' alt="logo" />
                  </div>
                </NavLink>
                <div className={clsx(style.divider_ii)}></div>
              </div>
              <ul className="h-full d-none d-xl-flex gap-xl-5 flex-row mb-0">
                {manuList.map((el, i) => {
                  return (
                    <NavLink key={i} to={el.link} className={""}>
                      <li
                        className={clsx([
                          style.list,
                          "d-flex align-items-center font-primary font-size-sm text-capitalize ",
                        ])}
                      >
                        {el.name}
                      </li>
                    </NavLink>
                  );
                })}
              </ul>
              <div className="d-flex flex-row gap-2 align-items-center">
                <HoButton variant={"simpleBorder"} Children={"Contact Us"} />
                {/* mobile view */}
                <div className="d-block d-xl-none">
                  <SideBar />
                </div>
              </div>
            </div>
          </div>
          <div className={clsx(style.divider_i)}></div>
        </div>
      </header>
    </div>
  );
};

export default Header;
