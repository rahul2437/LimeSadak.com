import {
  Button,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";

import { ChevronDownIcon, HamburgerIcon } from "@chakra-ui/icons";
import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../src/assets/limesadak.jpg";
import style from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={style.navbar}>
      <div className={style.ham}>
        <Menu>
          <MenuButton
            as={IconButton}
            aria-label="Options"
            icon={<HamburgerIcon />}
            variant="outline"
          />
          <MenuList>
            <MenuItem>
              <Link to="/products?gender=female">
                <button>WOMEN</button>
              </Link>
            </MenuItem>
            <MenuItem>
              <Link to="/products?gender=male">
                <button>MEN</button>
              </Link>
            </MenuItem>
            <MenuItem>
              <Link to="/products?gender=kids">
                <button>KIDS</button>
              </Link>
            </MenuItem>
            <MenuItem>
              <Link to="/">
                <button>HOME</button>
              </Link>
            </MenuItem>
            <MenuItem>
              <Link to="/offer">
                <button>OFFER</button>
              </Link>
            </MenuItem>
          </MenuList>
        </Menu>
      </div>
      <div className={style.left}>
        <Link to="/">
          <img src={logo} alt="" />
        </Link>
        <div className={style.menu}>
          <ul>
            <li>
              <Link to="/products?gender=female">WOMEN</Link>
            </li>
            <li>
              <Link to="/products?gender=male">MEN</Link>
            </li>
            <li>
              <Link to="/products?gender=kids">KIDS</Link>
            </li>
            <li>
              <Link to="/">HOME</Link>
            </li>
            <li>
              <Link to="/offer" className={style.offer}>
                OFFERS
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className={style.right}>
        <Link>SCRAPBOOK</Link>
        <Link>SEARCH</Link>
        <Link to={"/cart"}>CART</Link>
        <Menu>
          <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
            PROFILE
          </MenuButton>
          <MenuList>
            <MenuItem>
              <Link to="/signin">
                <button>Sign In</button>
              </Link>
            </MenuItem>
            <MenuItem>
              <Link to="/signup">
                <button>Sign Up</button>
              </Link>
            </MenuItem>
          </MenuList>
        </Menu>
      </div>
    </div>
  );
};

export default Navbar;
