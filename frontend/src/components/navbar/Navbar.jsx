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
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import logo from "../../../src/assets/limesadak.jpg";
import { signout } from "../../redux/AuthReducer/action";
import style from "./Navbar.module.css";

const Navbar = () => {
  const { isAuth, user } = useSelector((store) => store.AuthReducer);
  const dispatch = useDispatch();

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
            {isAuth ? user.name : `PROFILE`}
          </MenuButton>
          {!isAuth ? (
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
          ) : (
            <MenuList>
              <MenuItem>
                <button onClick={() => dispatch(signout())}>Sign out</button>
              </MenuItem>
            </MenuList>
          )}
        </Menu>
      </div>
    </div>
  );
};

export default Navbar;
