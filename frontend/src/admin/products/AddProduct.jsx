import React, { useState } from "react";
import { useSelector } from "react-redux";
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
  const { token } = useSelector((store) => store.AuthReducer);
  const [product, setProduct] = useState(initState);
  console.log(product);
  const addProduct = async (e) => {
    e.preventDefault();
    try {
      let res = await fetch(
        `https://general-icicle-9828.vercel.app/products/add`,
        {
          method: "POST",
          body: JSON.stringify(product),
          headers: {
            "Content-Type": "application/json",
            Authorization: token,
          },
        }
      );
      let data = await res.json();
      console.log(data);
    } catch (error) {
      console.log({ error });
    }
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
            <button>View All</button>
          </div>
          <div className={style.section2}>
            <h2>Add Product</h2>
            <form onSubmit={addProduct}>
              <div className={style.row1}>
                <label>Product Name</label>
                <input
                  name="name"
                  value={product.name}
                  onChange={(e) => data(e)}
                  type="text"
                  placeholder="Product Name"
                />
                <label>Product Brand</label>
                <input
                  name="brand"
                  value={product.brand}
                  onChange={(e) => data(e)}
                  type="text"
                  placeholder="Brand"
                />
                <label>Product Category</label>
                <input
                  name="category"
                  value={product.category}
                  onChange={(e) => data(e)}
                  type="text"
                  placeholder="Category Name"
                />
                <label>Product Description</label>
                <textarea
                  value={product.description}
                  onChange={(e) => data(e)}
                  name="description"
                  id="desc"
                  cols="30"
                  rows="10"
                ></textarea>
                <label>Product Color</label>
                <select onChange={(e) => data(e)} name="color" id="color">
                  <option selected value="">
                    Please select one
                  </option>
                  <option value="red">Red</option>
                  <option value="blue">Blue</option>
                  <option value="orange">Orange</option>
                  <option value="yellow">Yellow</option>
                </select>
                <label>Product For which gender</label>
                <select onChange={(e) => data(e)} name="gender" id="gender">
                  <option selected value="">
                    Please select one
                  </option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
                <label>Product Tags</label>
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
                <label>Stock you have</label>
                <input
                  name="stock"
                  value={product.stock}
                  onChange={(e) => data(e)}
                  type="number"
                  placeholder="Stock"
                />
                <label>Price per piece</label>
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
