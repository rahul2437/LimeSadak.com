const express = require("express");
const {
  signup,
  signin,
  getAllUsers,
  getAllVendors,
} = require("../controller/user.controller");
const { adminValidate } = require("../middlewares/validator");
const userRouter = express.Router();

// ALL routes
userRouter.post("/signup", signup);
userRouter.post("/signin", signin);
userRouter.get("/allUsers", getAllUsers);
userRouter.get("/allVendors", getAllVendors);
userRouter.get("/profile");

module.exports = { userRouter };
