const express = require("express");
const { productValidate } = require("../middlewares/product.validator");
const { Product } = require("../models/product.model");

const productRouter = express.Router();

productRouter.get("/", async (req, res) => {
  try {
    let data = await Product.find();
    res.send({ total: data.length, message: "All products", data });
  } catch (err) {
    res.send({ message: "Failed to get products" });
  }
});

productRouter.post("/add", productValidate, async (req, res) => {
  const payload = req.body;
  try {
    const product = new Product(payload);
    product.save();
    res.send({ message: "Products Added successfully" });
  } catch (err) {
    res.send({ message: "Failed to add product" });
    console.log(err.message);
  }
});

module.exports = { productRouter };
