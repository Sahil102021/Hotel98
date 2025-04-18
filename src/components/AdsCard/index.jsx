import React from "react";
import style from "./AdsCard.module.css";
import clsx from "clsx";
import { Typography } from "antd";

export const AdsCard = ({ icon, title, detail }) => {
  return (
    <div className="w-100">
      <div className={clsx(style.cardSize, style.border, "position-relative")}>
        <div className={clsx(style.iconPostion, "d-flex justify-content-center align-items-center")}>
          <div className={style.icon}>{icon}</div>
        </div>
        <div className={style.max_w_450}>
          <Typography className="font-primary text-uppercase font-size-xl text-white">
            {title}
          </Typography>
          <Typography className={clsx([ style.line_clamp,"font-primary text-grey font-size-md pt-1"])}>
            {detail}
          </Typography>
        </div>
      </div>
    </div>
  );
};
