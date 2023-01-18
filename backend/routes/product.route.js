const express = require("express");
const { productValidate } = require("../middlewares/product.validator");
const { Product } = require("../models/product.model");

const productRouter = express.Router();

productRouter.get("/", async (req, res) => {
  let {
    brand,
    category,
    color,
    gender,
    tags,
    size,
    stock,
    priceLow,
    priceHigh,
  } = req.query;

  let filter = {};
  if (brand) filter.brand = { $regex: new RegExp(brand, "i") };
  if (color) filter.color = { $regex: new RegExp(color, "i") };
  if (gender) filter.gender = { $regex: new RegExp(gender, "i") };
  if (priceHigh && priceLow) {
    filter.price = { $gte: +priceLow, $lte: +priceHigh };
  }
  if (stock) filter.stock = { $gte: +stock };
  if (category) {
    filter.category = { $in: [category] };
  }
  if (size) {
    filter.size = { $in: [size] };
  }
  if (tags) {
    filter.tags = { $in: [tags] };
  }
  try {
    let data = await Product.find(filter);
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
  }
});

productRouter.put("/:id", async (req, res) => {
  const _id = req.params.id;
  const payload = req.body;
  try {
    let data = await Product.updateOne({ _id }, payload);
    data.modifiedCount > 0
      ? res.send({
          message: "Updated product",
        })
      : res.send({
          message: "Nothing to Update",
        });
  } catch (err) {
    res.send({ message: "Failed to update", error: err.message });
  }
});

productRouter.delete("/:id", async (req, res) => {
  const _id = req.params.id;
  try {
    let data = await Product.deleteOne({ _id });
    res.send({
      message: "Deleted product",
      deleted: `${data.deletedCount} Items`,
    });
  } catch (err) {
    res.send({ message: "Failed to delete", error: err.message });
  }
});

module.exports = { productRouter };
