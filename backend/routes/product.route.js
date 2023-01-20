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

productRouter.get("/", requireSignIn, getProducts);
productRouter.post("/add", vendorValidate, productValidate, addProduct);
productRouter.get("/:id", requireSignIn, getSingleProduct);
productRouter.put("/:id", vendorValidate, updateProduct);
productRouter.delete("/:id", vendorValidate, deleteProduct);

module.exports = { productRouter };
