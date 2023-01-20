import React from 'react'
import {Routes, Route} from 'react-router-dom';
import Dashboard from '../admin/dashboard/Dashboard';
import Login from '../admin/login/Login'
import SingalProductP from '../pages/order/SingalProductP'
import Cart from '../../src/pages/order/Cart'
import Payment from '../pages/order/Payment';
const AllRoutes = () => {
  return (
    <div>
      <Routes>

        {/* Admin Routes */}
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/dashboard' element={<Dashboard/>}></Route>
        <Route path='/singalproduct' element={<SingalProductP/>}></Route>
        <Route path='/cart' element={<Cart/>}></Route>
        <Route path='/payment' element={<Payment/>}></Route>
        

        {/* User Routes */}
        
      </Routes>
    </div>
  )
}

export default AllRoutes
