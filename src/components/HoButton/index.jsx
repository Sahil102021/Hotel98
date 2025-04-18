import React, { Children } from "react";
import { Button } from "antd";
import clsx from "clsx";
import style from "./HoButton.module.css";

export const HoButton = ({
  Children,
  variant,
  id,
  name,
  type,
  handleClick,
}) => {
  return (
    <div>
      <Button
        id={id}
        name={name}
        type={type}
        onClick={handleClick}
        className={clsx(["z-0",{ [style.customButton]: variant === "normal",
          [style.simpleBorder]:variant === "simpleBorder",
         }])}
      >
        {Children}
      </Button>
    </div>
  );
};
