import React from "react";
import { Button, Tooltip } from "antd";
import clsx from "clsx";
import style from "./HoIcon.module.css";
import { NavLink } from "react-router";

export const HoIcon = ({ icon, id, name, type, variant, to }) => {
  return (
    <NavLink to={to}>
      <Button
        id={id}
        name={name}
        type={type}
        shape="circle"
        className={clsx({
          [`${style.iconCircleBig}  d-flex justify-content-center align-items-center  text-light `]:
            variant === "bigCrircleIcon",
          [`${style.iconCircleSmall}   d-flex justify-content-center align-items-center  text-light `]:
            variant === "smallCrircleIcon",
        })}
      >
        <div
          className={clsx([
            {
              [`${style.icon} d-flex justify-content-center align-items-center  text-light `]:
                variant === "bigCrircleIcon",
              [`${style.smallIcon} d-flex justify-content-center align-items-center  text-light `]:
                variant === "smallCrircleIcon",
            },
          ])}
        >
          {icon}
        </div>{" "}
      </Button>
    </NavLink>
  );
};
