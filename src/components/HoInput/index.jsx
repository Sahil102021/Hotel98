import React, { useState } from "react";
import { Input } from "antd";
import clsx from "clsx";
import style from "./hoinput.module.css";

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
      {/* baki */}
      <Input
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        onChange={handleChange}
        onClick={handleClick}
        style={{ appearance: "none" }}
        className={clsx("text-uppercase", style.input , {
          [`${style.dateInput} font-size-md font-primary text-light-80 fw-normal`]: variant === "date",
        })}
        
      />
      {calendarIcon && <div className={style.icon}>{calendarIcon}</div>}
    </div>
  );
};


