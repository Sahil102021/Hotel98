import React, { useEffect, useRef } from "react";
import style from "./scrollDownBadge.module.css";
import { Typography } from "antd";
import { roundedCircle, roundedText } from "../../assets/imges";
import { svgicon } from "../../const";
import { NavLink } from "react-router";

const ScrollDownBadge = () => {
  return (
    <div className="">
      <NavLink to="/">
        <div className="d-flex justify-content-center align-items-center">
          <div className={`${style.img} position-relative`}>
            {/* <img src={roundedCircle} width="100%" height="100%" alt="" /> */}
            {svgicon.scrollBadge}
            <div className={`${style.img_i} ${style.roundeTextImg} position-absolute`} >
              <img src={roundedText} width="100%" height="100%" alt="" />
            </div>
            <div className={`${style.downArrowIcon} position-absoulate text-light`} >
              {svgicon.downArrow}
            </div>
          </div>
        </div>
      </NavLink>
    </div>
  );
};

export default ScrollDownBadge;
