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
        <Link>SCRAPBOOK</Link>
        <Link>SEARCH</Link>
        <Link to={"/cart"}>CART</Link>
        <Link>PROFILE</Link>
      </div>
    </div>
  );
};

export default Navbar;
