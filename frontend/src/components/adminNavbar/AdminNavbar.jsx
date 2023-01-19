import React from 'react'
import { Box, Button, Image, Input, Menu, MenuButton, MenuItem, MenuList, } from '@chakra-ui/react'
import { ChevronDownIcon, Search2Icon ,DragHandleIcon, EmailIcon, StarIcon, SettingsIcon, UnlockIcon, BellIcon } from "@chakra-ui/icons"
// import {CgProfile} from "re"
import "./AdminNavbar.css"
import logo from "../../../src/assets/limesadak.jpg"

const AdminNavbar = () => {
  return (
    <div className='admin' >
    
    <div className="logo">
    <img src={logo} alt="logo"/>
    
    </div>
    <div className='input1'>
      
    <Input placeholder='search' size='md' mb="30px " ml="10%" /><Search2Icon ml="-30px" mt="10px"/>
    

    </div>
    
    <Box ml="5%"  display="flex" gap={"15px"}>
    <Menu >
  <MenuButton bg="white" as={Button} rightIcon={<ChevronDownIcon/>}>
    <Image w="40px"  src="https://loopinfosol.in/themeforest/ekka-html-v33/ekka-admin/assets/img/vendor/u1.jpg" />
  </MenuButton>
  <MenuList>
    <MenuItem gap={"15px"}><DragHandleIcon  /> <span >Profile</span></MenuItem>
    <MenuItem gap={"15px"}><EmailIcon />Message</MenuItem>
    <MenuItem gap={"15px"}> <StarIcon/> Project</MenuItem>
    <MenuItem gap={"15px"} > <SettingsIcon/> Setting</MenuItem>
    <MenuItem gap={"15px"}> <UnlockIcon/> Logout</MenuItem>
  </MenuList>
</Menu>

<BellIcon ml="10px" w="30px" h="40px" gap="5px"/>
<SettingsIcon ml="20px" w="30px" h="40px"/>
</Box>

      
      </div>
  
  )
}

export default AdminNavbar
