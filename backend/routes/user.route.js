const express = require("express");
const { signup, signin } = require("../controller/user.controller");
const userRouter = express.Router();

// ALL routes
userRouter.post("/signup", signup);
userRouter.post("/signin", signin);
userRouter.get("/profile");

module.exports = { userRouter };
