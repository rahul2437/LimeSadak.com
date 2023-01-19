const express = require("express");
const { signup, signin } = require("../../controller/admin/admin.controller");
const adminRouter = express.Router();

// ALL routes
adminRouter.post("/signup", signup);
adminRouter.post("/signin", signin);

module.exports = { adminRouter };
