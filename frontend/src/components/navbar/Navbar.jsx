import {
  DragHandleIcon,
  EmailIcon,
  SettingsIcon,
  StarIcon,
  UnlockIcon,
} from "@chakra-ui/icons";
import { MenuItem, MenuList } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../src/assets/limesadak.jpg";
import style from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={style.navbar}>
      <div className={style.left}>
        <Link to={"/"}>
          <img src={logo} alt="" />
        </Link>
        <ul>
          <li>
            <Link to="/products?gender=female">WOMEN</Link>
          </li>
          <li>
            <Link to="/products?gender=male">MEN</Link>
          </li>
          <li>
            <Link to="/">KIDS</Link>
          </li>
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/" className={style.offer}>
              OFFERS
            </Link>
          </li>
        </ul>
      </div>
      <div className={style.right}>
        <MenuList>
          <MenuItem gap={"15px"}>
            <DragHandleIcon /> <span>Profile</span>
          </MenuItem>
          <MenuItem gap={"15px"}>
            <EmailIcon />
            Message
          </MenuItem>
          <MenuItem gap={"15px"}>
            {" "}
            <StarIcon /> Project
          </MenuItem>
          <MenuItem gap={"15px"}>
            {" "}
            <SettingsIcon /> Setting
          </MenuItem>
          <Link to={"/signin"}>
            <MenuItem gap={"15px"}>
              {" "}
              <UnlockIcon /> Logout
            </MenuItem>
          </Link>
        </MenuList>
        <Link>SCRAPBOOK</Link>
        <Link>SEARCH</Link>
        <Link to={"/cart"}>CART</Link>
        <Link>PROFILE</Link>
      </div>
    </div>
  );
};

export default Navbar;
