import React from "react";
import { AutoComplete } from "antd";
import clsx from "clsx";
import styles from "./HoAutoComplete.module.css";
import { svgicon } from "../../const";

const HoAutoComplete = ({
  id,
  name,
  placeholder,
  handleChange,
  handleClick,
  options,
  variant,
}) => {
  return (
    <div className="w-100 position-relative">
      <AutoComplete
        id={id}
        name={name}
        placeholder={placeholder}
        onChange={handleChange}
        onClick={handleClick}
        style={{ width: "100%" }}
        className={clsx({
          [`${styles.primaryAutoComplete} font-primary text-white fw-normal`]:
            variant === "primaryAutoComplete",
        })}
        options={options}
        filterOption={(inputValue, option) =>
          option?.value
            ?.toString()
            .toUpperCase()
            .includes(inputValue.toUpperCase())
        }
        suffixIcon={<div className={styles.downArrowIcon}>{svgicon.droupDownArrow}</div>}
      />
    </div>
  );
};

export default HoAutoComplete;
