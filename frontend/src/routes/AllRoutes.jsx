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
import ProtectedRoute from "./ProtectedRoutes";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        {/* Admin Routes */}
        <Route path="/dashboard" element={<Dashboard />}></Route>
        {/* User Routes */}
        <Route path="/" element={<Home />}></Route>
        <Route
          path="/products"
          element={
            <ProtectedRoute>
              <Products />
            </ProtectedRoute>
          }
        ></Route>
        <Route
          path="/add-product"
          element={
            <ProtectedRoute>
              <AddProduct />
            </ProtectedRoute>
          }
        ></Route>
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/singalproduct/:id"
          element={
            <ProtectedRoute>
              <SingalProductP />
            </ProtectedRoute>
          }
        ></Route>
        <Route
          path="/cart"
          element={
            <ProtectedRoute>
              <Cart />
            </ProtectedRoute>
          }
        ></Route>
        <Route
          path="/payment"
          element={
            <ProtectedRoute>
              <Payment />
            </ProtectedRoute>
          }
        ></Route>
      </Routes>
    </div>
  );
};

export default AllRoutes;
