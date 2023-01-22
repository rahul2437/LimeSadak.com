import React from "react";

import Signin from "../components/signin/Signin";
import Signup from "../components/signup/Signup";

import { Route, Routes } from "react-router-dom";
import Cart from "../../src/pages/order/Cart";
import Dashboard from "../admin/dashboard/Dashboard";
import AddProduct from "../admin/products/AddProduct";
import Payment from "../pages/order/Payment";
import SingalProductP from "../pages/order/SingalProductP";
import Products from "../pages/products/Products";

import Home from "../pages/homepage/Home";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        {/* Admin Routes */}
        <Route path="/dashboard" element={<Dashboard />}></Route>
        {/* User Routes */}
        <Route path="/" element={<Home />}></Route>
        <Route path="/products" element={<Products />}></Route>
        <Route path="/add-product" element={<AddProduct />}></Route>
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/singalproduct" element={<SingalProductP />}></Route>
        <Route path="/singalproduct/:id" element={<SingalProductP />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/payment" element={<Payment />}></Route>
      </Routes>
    </div>
  );
};

export default AllRoutes;
