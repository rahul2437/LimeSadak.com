const { Product } = require("../models/product.model");

exports.getProducts = async (req, res) => {
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
    user,
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
  if (user) {
    filter.user = user;
  }
  try {
    let data = await Product.find(filter);
    res.send({ total: data.length, message: "All products", data });
  } catch (err) {
    res.send({ message: "Failed to get products" });
  }
};

exports.addProduct = async (req, res) => {
  req.body.category = req.body.category.trim().split(" ");
  req.body.tags = req.body.tags.trim().split(" ");
  req.body.size = req.body.size.trim().split(" ");
  let payload = { ...req.body, user: req.user._id };
  console.log(payload);
  try {
    const product = new Product(payload);
    product.save();
    res.send({ message: "Products Added successfully", product });
  } catch (err) {
    res.send({ message: "Failed to add product" });
  }
};

exports.updateProduct = async (req, res) => {
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
};

exports.getSingleProduct = async (req, res) => {
  const _id = req.params.id;
  try {
    let data = await Product.findOne({ _id });
    data
      ? res.send({
          message: "Product found",
          data,
        })
      : res.send({
          message: "No Product found",
        });
  } catch (err) {
    res.send({ message: "Failed to fetch", error: err.message });
  }
};

exports.deleteProduct = async (req, res) => {
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
};
