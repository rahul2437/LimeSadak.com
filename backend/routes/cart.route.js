const express = require("express");
const { addToCart } = require("../controller/cart.controller");
const { requireSignIn } = require("../middlewares/validator");

const cartRouter = express.Router();

// ALL routes
cartRouter.post("/addtocart", requireSignIn, addToCart);

module.exports = { cartRouter };
