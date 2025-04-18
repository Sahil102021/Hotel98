import React, { useState } from "react";
import { Input } from "antd";
import clsx from "clsx";
import style from "./index.module.css";

export const HoInput = ({
  type = "text",
  id,
  name,
  placeholder,
  handleChange,
  variant,
  calendarIcon,
  handleClick,
}) => {

  const [date , setDate] = useState();

  return (
    <div className={style.customDate}>
      <Input
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        onChange={handleChange}
        onClick={handleClick}
        style={{ appearance: "none" }}
        className={clsx("text-white text-uppercase ", style.input , {
          [style.dateInput]: variant === "date",
        })}
        
      />
      {calendarIcon && <div className={style.icon}>{calendarIcon}</div>}
    </div>
  );
};


