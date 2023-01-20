import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "../admin/dashboard/Dashboard";
import Login from "../admin/login/Login";
import AddProduct from "../admin/products/AddProduct";
import Signin from "../components/signin/Signin";
import Signup from "../components/signup/Signup";

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

        {/* User Routes */}
      </Routes>
    </div>
  );
};

export default AllRoutes;
