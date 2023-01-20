import React from "react";



import Signin from "../components/signin/Signin";
import Signup from "../components/signup/Signup";

import {Routes, Route} from 'react-router-dom';
import Dashboard from '../admin/dashboard/Dashboard';
import AddProduct from '../admin/products/AddProduct';
import Login from '../admin/login/Login'
import SingalProductP from '../pages/order/SingalProductP'
import Cart from '../../src/pages/order/Cart'
import Payment from '../pages/order/Payment';
import Home from '../pages/homepage/Home';

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        {/* Admin Routes */}
        <Route path="/login" element={<Login />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/add-product" element={<AddProduct />}></Route>
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path='/' element={<Home/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/dashboard' element={<Dashboard/>}></Route>
        <Route path='/singalproduct' element={<SingalProductP/>}></Route>
        <Route path='/cart' element={<Cart/>}></Route>
        <Route path='/payment' element={<Payment/>}></Route>
        
        <Route path='/add-product' element={<AddProduct/>}></Route>

        {/* User Routes */}
      </Routes>
    </div>
  );
};

export default AllRoutes;
