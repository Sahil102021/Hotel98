import React, { useState } from "react";
import { Drawer, Button, Menu } from "antd";
import { manuList } from "../../const/constes";
import { NavLink, useLocation } from "react-router-dom";
import { icon } from "../../const/icon";

const SideBar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const showDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);

  const menuItems = manuList.map((item) => ({
    key: item.link,
    label: (
      <NavLink to={item.link} className="text-white" onClick={closeDrawer}>
        {item.name}
      </NavLink>
    ),
  }));

  return (
    <>
      <Button
        className="text-white fs-4"
        type="text"
        icon={icon.manuIcon}
        onClick={showDrawer}
      />

      <Drawer
        placement="right"
        onClick={closeDrawer}
        open={open}
        className="bg-black text-white"
        closeIcon={null} 
        Style={{
          padding: 0,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div className="p-3 d-flex justify-content-between align-items-center">
          <h3 className="m-0 text-capitalize text-white ">hotel98</h3>
          <Button
            type="text"
            onClick={closeDrawer}
            className="text-white fs-2 text-sky-blue"
          >
            {icon.cancel}
          </Button>
        </div>

        <Menu
          mode="inline"
          selectedKeys={[location.pathname]}
          className="bg-black"
          theme="dark"
          items={menuItems}
        />
      </Drawer>
    </>
  );
};

export default SideBar;
