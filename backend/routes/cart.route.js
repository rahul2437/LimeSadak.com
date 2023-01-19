const express = require("express");
const { addToCart, getCartItems } = require("../controller/cart.controller");
const { requireSignIn } = require("../middlewares/validator");

const cartRouter = express.Router();

// ALL routes
cartRouter.get("/", requireSignIn, getCartItems);
cartRouter.post("/addtocart", requireSignIn, addToCart);

module.exports = { cartRouter };
