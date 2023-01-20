import axios from "axios";
import React, { useState } from "react";
import AdminNavbar from "../../components/adminNavbar/AdminNavbar";
import AdminSidebar from "../../components/adminSidebar/AdminSidebar";
import style from "./AddProduct.module.css";
const initState = {
  name: "",
  brand: "",
  description: "",
  category: "",
  color: "",
  gender: "",
  tags: "",
  size: "",
  stock: 1,
  price: 99,
};

const AddProduct = () => {
  const [product, setProduct] = useState(initState);

  const addProduct = (e) => {
    e.preventDefault();
    console.log(product);
    const headers = {
      "Content-Type": `application/json`,
      Authorization: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2M5MWRhMDA5ZDZhZThmOWI2NjYyNDgiLCJyb2xlIjoidmVuZG9yIiwiaWF0IjoxNjc0MjE3NDgzLCJleHAiOjE2NzQyMjgyODN9.mb3gIOY6CGPIiuE2w6N0-TUNkWhx0HVBFZuT6jcL-W8`,
    };
    axios
      .post(
        `https://general-icicle-9828.vercel.app/products/add`,
        product,
        headers
      )
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const data = (e) => {
    const { name, value } = e.target;
    setProduct((prev) => {
      return { ...prev, [name]: value };
    });
  };
  return (
    <>
      <AdminNavbar />
      <div className={style.addProduct}>
        <div className={style.left}>
          <AdminSidebar />
        </div>
        <div className={style.right}>
          <div className={style.section1}>
            <h1>Add Product</h1>
            <button>View All</button>
          </div>
          <div className={style.section2}>
            <h2>Add Product</h2>
            <form onSubmit={addProduct}>
              <div className={style.row1}>
                <input
                  name="name"
                  value={product.name}
                  onChange={(e) => data(e)}
                  type="text"
                  placeholder="Product Name"
                />
                <input
                  name="brand"
                  value={product.brand}
                  onChange={(e) => data(e)}
                  type="text"
                  placeholder="Brand"
                />
                <input
                  name="category"
                  value={product.category}
                  onChange={(e) => data(e)}
                  type="text"
                  placeholder="Category Name"
                />
                <textarea
                  value={product.description}
                  onChange={(e) => data(e)}
                  name="description"
                  id="desc"
                  cols="30"
                  rows="10"
                ></textarea>
                <select onChange={(e) => data(e)} name="color" id="color">
                  <option value="red">Red</option>
                  <option value="blue">Blue</option>
                  <option value="orange">Orange</option>
                  <option value="yellow">Yellow</option>
                </select>
                <select onChange={(e) => data(e)} name="gender" id="gender">
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
                <input
                  onChange={(e) => data(e)}
                  name="tags"
                  type="text"
                  placeholder="Tags seperate with comma"
                />
                <label>Size</label>
                <input
                  onChange={(e) => data(e)}
                  name="size"
                  type="text"
                  placeholder="Size seperate with comma"
                />
                <input
                  name="stock"
                  value={product.stock}
                  onChange={(e) => data(e)}
                  type="number"
                  placeholder="Stock"
                />
                <input
                  name="price"
                  value={product.price}
                  onChange={(e) => data(e)}
                  type="number"
                  placeholder="Price"
                />
                <input type="submit" value="Add Product" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddProduct;
