import {
  BellIcon,
  ChevronDownIcon,
  DragHandleIcon,
  EmailIcon,
  Search2Icon,
  SettingsIcon,
  StarIcon,
  UnlockIcon,
} from "@chakra-ui/icons";
import {
  Box,
  Button,
  Image,
  Input,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import React from "react";
// import {CgProfile} from "re"
import { Link } from "react-router-dom";
import logo from "../../../src/assets/limesadak.jpg";
import "./AdminNavbar.css";

const AdminNavbar = () => {
  return (
    <div className="admin">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="input1">
        <Input placeholder="search" size="md" mb="30px " ml="10%" />
        <Search2Icon ml="-30px" mt="10px" />
      </div>

      <Box ml="5%" display="flex" gap={"15px"}>
        <Menu>
          <MenuButton bg="white" as={Button} rightIcon={<ChevronDownIcon />}>
            <Image
              w="40px"
              src="https://loopinfosol.in/themeforest/ekka-html-v33/ekka-admin/assets/img/vendor/u1.jpg"
            />
          </MenuButton>
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
            <MenuItem gap={"15px"}>
              {" "}
              <UnlockIcon /> Logout
            </MenuItem>
          </MenuList>
        </Menu>

        <Link to="/cart">
          {" "}
          <BellIcon ml="10px" w="30px" h="40px" gap="5px" />
        </Link>
        <Link to="/payment">
          <SettingsIcon ml="20px" w="30px" h="40px" />
        </Link>
      </Box>
    </div>
  );
};

export default AdminNavbar;
