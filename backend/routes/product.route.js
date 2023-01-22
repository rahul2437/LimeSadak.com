const express = require("express");
const {
  getProducts,
  addProduct,
  getSingleProduct,
  deleteProduct,
  updateProduct,
} = require("../controller/product.controller");
const { productValidate } = require("../middlewares/product.validator");
const { requireSignIn, vendorValidate } = require("../middlewares/validator");

const productRouter = express.Router();

productRouter.get("/", getProducts);
productRouter.post("/add", productValidate, addProduct);
productRouter.get("/:id", getSingleProduct);
productRouter.put("/:id", updateProduct);
productRouter.delete("/:id", deleteProduct);

module.exports = { productRouter };
