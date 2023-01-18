import React from 'react'
import {Routes, Route} from 'react-router-dom';
import Dashboard from '../admin/dashboard/Dashboard';
import Login from '../admin/login/Login'


const AllRoutes = () => {
  return (
    <div>
      <Routes>

        {/* Admin Routes */}
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/dashboard' element={<Dashboard/>}></Route>

        {/* User Routes */}
        
      </Routes>
    </div>
  )
}

export default AllRoutes
