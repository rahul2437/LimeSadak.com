import React from 'react'
import {Routes, Route} from 'react-router-dom';
import Dashboard from '../admin/dashboard/Dashboard';
import AddProduct from '../admin/products/AddProduct';
import Login from '../admin/login/Login'
import Home from '../pages/homepage/Home';

const AllRoutes = () => {
  return (
    <div>
      <Routes>

        {/* Admin Routes */}
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/dashboard' element={<Dashboard/>}></Route>
        <Route path='/add-product' element={<AddProduct/>}></Route>

        {/* User Routes */}

        <Route path='/' element={<Home/>}></Route>
        
      </Routes>
    </div>
  )
}

export default AllRoutes
