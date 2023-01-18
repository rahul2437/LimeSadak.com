import React from 'react'
// import { Select } from '@chakra-ui/react'
import "./AdminNavbar.css"
import logo from "../../../src/assets/limesadak.jpg"

const AdminNavbar = () => {
  return (
    <div className='admin' >
    
    <div class="logo">
    <img src={logo} alt="logo"/>
    
    </div>
    <div className='input1'>
      
      <input  className='input' type="text" placeholder='search'  />

    </div>
    <div >
    <h1>select</h1>
    {/* <Select placeholder='Select option'>
  <option value='option1'>Option 1</option>
  <option value='option2'>Option 2</option>
  <option value='option3'>Option 3</option>
</Select> */}

      
      </div>
    </div>
  )
}

export default AdminNavbar
