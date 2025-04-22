import React from "react";
import style from "./halfRoundTitle.module.css";
import { svgicon } from "../../const";
import { Typography } from "antd";
import ScrollDownBadge from "../ScrollDownBadge";

const HalfRoundTitle = () => {
  return (
    <div>
      <div className={`${style.border} d-flex flex-row justify-content-end `}>
        <div
          className={`${style.innerBackground} d-flex flex-column align-items-center`}>
          <div className={`${style.title} w-100 d-flex flex-column justify-content-center align-items-center`}>
                <div className={`${style.miniStar} `}>
                    {svgicon.miniStar}
                </div>
                <Typography className="font-tertiary text-white font-size-3xl pt-2 ">
                Welcome to Hotel98 
                </Typography>
            <h1
              className={`${style.SpaceUpper} text-center font-secondary fw-bold text-white pt-4`  }>
              Enjoy a Luxury Experience
            </h1>
            <ScrollDownBadge />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HalfRoundTitle;
