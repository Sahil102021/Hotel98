import React, { Children } from "react";
import { Button, Dropdown, Space } from "antd";
import style from "./Dropdown.module.css";
import clsx from "clsx";
import { svgicon } from "../../const";

const items = [
  {
    key: "1",
    label: (
      <a target="_blank" rel="noopener noreferrer" href="/">
        1st menu item
      </a>
    ),
  },
  {
    key: "2",
    label: (
      <a target="_blank" rel="noopener noreferrer" href="/">
        2nd menu item
      </a>
    ),
  },
  {
    key: "3",
    label: (
      <a target="_blank" rel="noopener noreferrer" href="/">
        3rd menu item
      </a>
    ),
  },
];

const index = ({ Variant, Children }) => {
  return (
    <div>
      <Dropdown  menu={{ items }} placement="bottom">
        <Button
          type="text"
          className={clsx([
            {
              [`${style.dropdownPrimary} w-100 d-flex flex-row justify-content-between font-size-md font-primary text-light fw-normal align-items-start text-uppercase `]:
                Variant === "DropdownPrimary",
            },
          ])}
        >
          {Children}
          <div className={style.droupDownArrowSize}>{svgicon.droupDownArrow}</div>
        </Button>
      </Dropdown>
    </div>
  );
};

export default index;
