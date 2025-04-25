import React, { Children } from "react";
import { Button } from "antd";
import clsx from "clsx";
import style from "./HoButton.module.css";
import { svgicon } from "../../const";

export const HoButton = ({
  Children,
  variant,
  id,
  name,
  type,
  handleClick,
}) => {
  return (
    <Button
      id={id}
      name={name}
      type={type}
      onClick={handleClick}
      className={clsx([
        "z-0",
        {
          [ style.customButton]: variant === "normal",
          [style.simpleBorder]: variant === "simpleBorder",
          [`${style.planButton} font-size-lg text-uppercase `]:
            variant === "planButton",
          [`${style.bigPlanButton} font-size-lg text-uppercase `]:
            variant === "bigPlanButton",
        },
      ])}
    >
      {Children}
    </Button>
  );
};
